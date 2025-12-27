 /***********************
 * game.js
 * Version refactorisée : scénarios externes + persistance (localStorage)
 ***********************/

// Constantes de pénalités
const PENALITE_INDICE = 2 * 60; // 5 minutes en secondes
const PENALITE_MAUVAIS = 30; // 1 minute en secondes pour mauvaise réponse

// État du jeu
let scenarioNumero = null;       // numéro du scénario courant
let scenarioActuel = null;       // référence à scenarios[scenarioNumero]
let etapeActuelle = 0;
let tempsRestant = 0;            // utilisé pour affichage (sec)
let endTimestamp = null;         // timestamp en ms indiquant la fin théorique
let timerInterval = null;
// indicesUtilises : mapping étapeIndex -> array d'indices utilisés pour cette étape
let indicesUtilises = {};
let penalitesTotales = 0;        // cumul en secondes
let gameLogs = [];               // stocke l'historique des erreurs et réussites

// Beep timer (scénario 4) — non persistant à travers reloads
let beepTimeoutId = null;
let beepStartedAt = null; // timestamp ms quand le beep a été programmé
// Audio context réutilisable (doit être créé lors d'un geste utilisateur)
let audioCtx = null;
let beepIntervalId = null;
// snapshot pour undo du backroll
let lastUndoSnapshot = null;

const SAVED_STATE_KEY = 'eg_state';

/***********************
 * UTILITAIRES
 ***********************/
function normaliser(texte) {
    // Normalisation pour comparaison : minuscules, suppression des accents,
    // suppression de toute ponctuation et des espaces (retourne une chaîne continue)
    if (!texte && texte !== 0) return '';
    return String(texte)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // accents
        .replace(/[^a-zA-Z0-9]/g, '')     // supprimer ponctuation et espaces
        .toLowerCase();
}

function sanitizeToken(token) {
    // Nettoie un token pour affichage/détection de mots clefs (sans supprimer complètement)
    if (!token && token !== 0) return '';
    return String(token)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
}

/***********************
 * PERSISTANCE (localStorage)
 ***********************/
function sauvegarderEtat() {
    if (!scenarioNumero) return;
    const state = {
        scenario: scenarioNumero,
        etape: etapeActuelle,
        penalitesTotales,
        indicesUtilises,
        endTimestamp
        , logs: gameLogs
    };
    try {
        localStorage.setItem(SAVED_STATE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('Impossible de sauvegarder l\'état :', e);
    }
}

function clearSavedState() {
    localStorage.removeItem(SAVED_STATE_KEY);
}

function restaurerEtat() {
    const raw = localStorage.getItem(SAVED_STATE_KEY);
    if (!raw) return false;
    try {
        const state = JSON.parse(raw);
        if (!state || !state.scenario || !scenarios[state.scenario]) {
            clearSavedState();
            return false;
        }

        scenarioNumero = state.scenario;
        scenarioActuel = scenarios[scenarioNumero];
        etapeActuelle = state.etape || 0;
        penalitesTotales = state.penalitesTotales || 0;
        indicesUtilises = state.indicesUtilises || {};
        endTimestamp = state.endTimestamp || (Date.now() + scenarioActuel.duree * 1000);
        gameLogs = state.logs || [];

        document.getElementById('accueil').style.display = 'none';
        document.getElementById('jeu').style.display = 'block';
        document.getElementById('titreScenario').textContent = scenarioActuel.titre;

        demarrerTimer();
        afficherEtape();
        renderHistory();
        return true;
    } catch (e) {
        console.warn('Erreur lors de la restauration :', e);
        clearSavedState();
        return false;
    }
}

/***********************
 * LANCEMENT / RESET
 ***********************/
function lancerScenario(numero, restored = false) {
    scenarioNumero = numero;
    scenarioActuel = scenarios[numero];
    if (!scenarioActuel) {
        alert('Scénario non trouvé : ' + numero);
        return;
    }

    if (!restored) {
        etapeActuelle = 0;
        penalitesTotales = 0;
        indicesUtilises = {};
        endTimestamp = Date.now() + scenarioActuel.duree * 1000;
    }

    document.getElementById('accueil').style.display = 'none';
    document.getElementById('jeu').style.display = 'block';
    document.getElementById('titreScenario').textContent = scenarioActuel.titre;

    demarrerTimer();
    afficherEtape();
    sauvegarderEtat();
}

function resetHome() {
    clearInterval(timerInterval);
    // annuler tout beep programmé
    try { cancelBeepTimer(); } catch (e) { /* ignore */ }
    clearSavedState();

    scenarioNumero = null;
    scenarioActuel = null;
    etapeActuelle = 0;
    tempsRestant = 0;
    endTimestamp = null;
    indicesUtilises = [];
    penalitesTotales = 0;
    gameLogs = [];
    renderHistory();

    document.getElementById('jeu').style.display = 'none';
    document.getElementById('accueil').style.display = 'block';
    document.getElementById('timer').textContent = '00:00';
    document.getElementById('penalitesTotales').textContent = '';
}

/***********************
 * TIMER
 ***********************/
function demarrerTimer() {
    if (timerInterval) clearInterval(timerInterval);

    // met à jour immédiatement
    updateTimeFromEnd();
    updateTimer();

    timerInterval = setInterval(() => {
        updateTimeFromEnd();
        updateTimer();
    }, 1000);
}

function updateTimeFromEnd() {
    if (endTimestamp == null) {
        tempsRestant = 0;
    } else {
        tempsRestant = Math.round((endTimestamp - Date.now()) / 1000);
    }
}

function updateTimer() {
    const absSeconds = Math.abs(tempsRestant);
    const minutes = Math.floor(absSeconds / 60);
    const secondes = absSeconds % 60;
    const sign = tempsRestant < 0 ? '-' : '';
    const timerText = `${sign}${minutes}:${secondes.toString().padStart(2, '0')}`;

    document.getElementById('timer').textContent =
        tempsRestant < 0 ? `${timerText} (temps dépassé)` : timerText;
}

/***********************
 * AFFICHAGE DES ÉTAPES
 ***********************/
function afficherEtape() {
    // annuler tout beep programmé si on change d'étape
    try { cancelBeepTimer(); } catch (e) { /* ignore */ }
    // Ne pas réinitialiser `indicesUtilises` ici : il doit être conservé
    // si l'utilisateur rechargera la page. Seul lancerScenario remet à zéro.
    const etape = scenarioActuel.etapes[etapeActuelle];

    document.getElementById('contenuScenario').innerHTML = `
        <h3>${etape.titre}</h3>
        <p>${etape.histoire}</p>

        <input type="text" id="reponse" placeholder="Votre réponse" onkeydown="if(event.key === 'Enter'){ verifierReponse(); }">
        <br><br>
        <button onclick="verifierReponse()">Valider</button>

        <p id="feedback"></p>

        <div>
            ${etape.indices.map((_, i) =>
                `<button id="indiceBtn${i}" onclick="afficherIndice(${i})" ${((indicesUtilises[etapeActuelle]||[]).includes(i) ? 'disabled' : '')}>Indice ${i + 1}</button>`
            ).join("")}
        </div>

        <div id="indicesAffiches" class="indice"></div>
    `;

    // Montrer les indices déjà révélés (si la page a été rechargée)
    const indicesDiv = document.getElementById('indicesAffiches');
    indicesDiv.innerHTML = etape.indices
        .map((texte, i) => indicesUtilises.includes(i) ? `Indice ${i+1} : ${texte}` : '')
        .filter(x => x !== '')
        .join('<br>');

    updatePenalites();
}

/* -------------------- HISTORIQUE / LOGS -------------------- */
function formatTimeForLog(sec) {
    const s = Math.round(sec);
    const sign = s < 0 ? '-' : '';
    const absSeconds = Math.abs(s);
    const m = Math.floor(absSeconds / 60);
    const ss = absSeconds % 60;
    return `${sign}${m}:${ss.toString().padStart(2,'0')}`;
}

function addLog(entry) {
    // entry: {type:'error'|'success'|'indice', stepNum, stepTitle, keywords, timeRemaining, indicesUsed, penalty}
    // enrichir le log avec un instantané de l'état utile pour un rollback
    entry.when = Date.now();
    entry.penalitesSnapshot = penalitesTotales;
    // deep copy indicesUtilises
    try {
        entry.indicesUtilisesSnapshot = JSON.parse(JSON.stringify(indicesUtilises || {}));
    } catch (e) {
        entry.indicesUtilisesSnapshot = {};
    }
    gameLogs.unshift(entry); // push front so newest on top
    // keep reasonable history length
    if (gameLogs.length > 200) gameLogs.pop();
    renderHistory();
    sauvegarderEtat();
}

function renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;
    if (!gameLogs || gameLogs.length === 0) {
        container.innerHTML = '<p style="color:#666;">Aucun événement pour l\'instant.</p>';
        return;
    }

    container.innerHTML = gameLogs.map((log, i) => {
        const t = new Date(log.when).toLocaleTimeString();
        const step = log.stepNum != null ? `Étape ${log.stepNum} — ${log.stepTitle}` : '';
        let keys = '';
        if (log.keywords) {
            // afficher les mots-clés séparés pour plus de clarté, sanitized
            const parts = String(log.keywords).split(/\s+/).filter(Boolean);
            keys = `<div><strong>Entrée${parts.length>1? 's':''}:</strong> ${parts.map(p=>`<code>${escapeHtml(sanitizeToken(p))}</code>`).join(', ')}</div>`;
        }
        let indices = '';
        if (log.indicesUsed && log.indicesUsed.length) {
            const names = log.indicesUsed.map(i => `Indice ${Number(i) + 1}`);
            indices = `<div><strong>${names.length > 1 ? 'Indices utilisés' : 'Indice utilisé'}:</strong> ${names.join(', ')}</div>`;
        }
        const penalty = log.penalty ? `<div><strong>Pénalité:</strong> -${log.penalty}s</div>` : '';
        const time = `<div><strong>Temps restant:</strong> ${formatTimeForLog(log.timeRemaining)}</div>`;
        const cls = log.type === 'success' ? 'color:green;' : (log.type === 'indice' ? 'color:orange;' : 'color:crimson;');
        // bouton de restauration (backroll) uniquement pour les erreurs de saisie
        const canRestore = (log.timeRemaining != null && log.stepNum != null && log.type === 'error');
        const restoreBtn = canRestore ? `<button style="margin-left:8px;" onclick="backrollToLog(${i})">Restaurer</button>` : '';

        return `
            <div style="padding:8px;border-bottom:1px solid #eee;">
                <div style="font-size:12px;color:#666;">${t}</div>
                <div style="${cls}"><strong>${log.type.toUpperCase()}</strong> ${step} ${restoreBtn}</div>
                ${keys}
                ${indices}
                ${penalty}
                ${time}
            </div>`;
    }).join('');
}

function clearHistory() {
    gameLogs = [];
    renderHistory();
    sauvegarderEtat();
}

function showUndoButton() {
    // create or show an undo button near the history header
    let container = document.getElementById('historyActions');
    if (!container) {
        // try to insert at top of historyList's parent
        const hist = document.getElementById('historyList');
        if (!hist) return;
        container = document.createElement('div');
        container.id = 'historyActions';
        hist.parentNode.insertBefore(container, hist);
    }
    // create button if missing
    let btn = document.getElementById('undoBackrollBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'undoBackrollBtn';
        btn.textContent = 'Annuler backroll';
        btn.style.margin = '6px';
        btn.onclick = undoBackroll;
        container.appendChild(btn);
    }
    btn.style.display = 'inline-block';
}

function hideUndoButton() {
    const btn = document.getElementById('undoBackrollBtn');
    if (btn) btn.style.display = 'none';
}

function undoBackroll() {
    if (!lastUndoSnapshot) {
        alert('Aucune restauration précédente disponible.');
        return;
    }
    // restaurer l'instantané sauvegardé
    try {
        // annuler timers/beeps
        clearInterval(timerInterval);
        try { cancelBeepTimer(); } catch (e) {}

        scenarioNumero = lastUndoSnapshot.scenarioNumero;
        scenarioActuel = scenarios[scenarioNumero];
        etapeActuelle = lastUndoSnapshot.etapeActuelle;
        penalitesTotales = lastUndoSnapshot.penalitesTotales;
        indicesUtilises = lastUndoSnapshot.indicesUtilises || {};
        endTimestamp = lastUndoSnapshot.endTimestamp;
        // restore logs
        gameLogs = lastUndoSnapshot.gameLogs || [];

        // clear undo snapshot
        lastUndoSnapshot = null;

        sauvegarderEtat();
        demarrerTimer();
        afficherEtape();
        renderHistory();
        hideUndoButton();

        addLog({
            type: 'info',
            stepNum: etapeActuelle + 1,
            stepTitle: scenarioActuel && scenarioActuel.etapes[etapeActuelle] ? scenarioActuel.etapes[etapeActuelle].titre : '',
            keywords: 'Undo backroll',
            timeRemaining: tempsRestant,
            indicesUsed: [...(indicesUtilises[etapeActuelle] || [])],
            penalty: 0
        });
    } catch (e) {
        console.warn('Impossible d\'effectuer undoBackroll', e);
        alert('Échec de l\'annulation. Voir la console pour détails.');
    }
}

/**
 * Restaurer l'état du jeu à partir d'une entrée d'historique.
 * index : index dans gameLogs (0 = plus récent)
 * comportement : demander confirmation puis remettre :
 * - etapeActuelle = log.stepNum - 1 (ou 0 si absent)
 * - penalitesTotales = log.penalitesSnapshot
 * - indicesUtilises = log.indicesUtilisesSnapshot
 * - endTimestamp recalculé à partir de log.timeRemaining
 */
function backrollToLog(index) {
    const log = gameLogs[index];
    if (!log) return;
    // n'autoriser que le backroll pour les erreurs (mauvaises réponses)
    if (log.type !== 'error') {
        alert('Le backroll est autorisé uniquement pour les erreurs de saisie.');
        return;
    }
    if (typeof log.timeRemaining === 'undefined' || typeof log.stepNum === 'undefined') {
        alert('Impossible de restaurer cet événement (informations manquantes).');
        return;
    }
    // confirmation forte : demander à l'utilisateur d'écrire exactement 'backroll'
    const hint = `Restaurer l'état au moment de cet événement (Étape ${log.stepNum}, temps affiché ${formatTimeForLog(log.timeRemaining)}) ?\n\nCela remettra les pénalités et indices à cet instant.`;
    const typed = prompt(hint + "\n\nTapez 'backroll' pour confirmer:");
    if (String(typed).trim() !== 'backroll') {
        alert('Confirmation manquante — opération annulée.');
        return;
    }

    // sauvegarder un snapshot pour permettre l'annulation (undo)
    try {
        lastUndoSnapshot = {
            scenarioNumero,
            etapeActuelle,
            penalitesTotales,
            indicesUtilises: JSON.parse(JSON.stringify(indicesUtilises || {})),
            endTimestamp,
            gameLogs: JSON.parse(JSON.stringify(gameLogs || []))
        };
    } catch (e) {
        lastUndoSnapshot = null;
    }

    // annuler timer/beep en cours
    clearInterval(timerInterval);
    try { cancelBeepTimer(); } catch (e) { /* ignore */ }

    // restaurer l'étape (on remplace par l'étape telle que log.stepNum - 1)
    etapeActuelle = Math.max(0, Number(log.stepNum) - 1);
    // restaurer pénalités
    penalitesTotales = typeof log.penalitesSnapshot !== 'undefined' ? Number(log.penalitesSnapshot) : 0;
    // restaurer indices utilisés
    indicesUtilises = log.indicesUtilisesSnapshot ? JSON.parse(JSON.stringify(log.indicesUtilisesSnapshot)) : {};

    // recalculer endTimestamp depuis timeRemaining (seconds)
    const now = Date.now();
    endTimestamp = now + (Number(log.timeRemaining) * 1000);

    // sauvegarder et réafficher
    sauvegarderEtat();
    demarrerTimer();
    afficherEtape();
    renderHistory();

    addLog({
        type: 'info',
        stepNum: etapeActuelle + 1,
        stepTitle: scenarioActuel && scenarioActuel.etapes[etapeActuelle] ? scenarioActuel.etapes[etapeActuelle].titre : '',
        keywords: `Backroll -> restauré à l'événement ${new Date(log.when).toLocaleString()}`,
        timeRemaining: tempsRestant,
        indicesUsed: [...(indicesUtilises[etapeActuelle] || [])],
        penalty: 0
    });

    // afficher un bouton d'annulation du backroll
    showUndoButton();
}

function escapeHtml(str){
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
}

/***********************
 * PÉNALITÉS & INDICES
 ***********************/
function updatePenalites() {
    document.getElementById('penalitesTotales').textContent =
        penalitesTotales > 0 ? `⏱️ Pénalités cumulées : -${Math.floor(penalitesTotales/60)} min` : '';
}

function afficherIndice(index) {
    const etape = scenarioActuel.etapes[etapeActuelle];

    const usedForStep = indicesUtilises[etapeActuelle] || [];
    if (!usedForStep.includes(index)) {
        // mark used for this step
        if (!indicesUtilises[etapeActuelle]) indicesUtilises[etapeActuelle] = [];
        indicesUtilises[etapeActuelle].push(index);
        penalitesTotales += PENALITE_INDICE;
        // Déplacer la fin du chrono vers le passé de PENALITE_INDICE secondes
        if (endTimestamp == null) endTimestamp = Date.now();
        endTimestamp -= PENALITE_INDICE * 1000;

        // mettre à jour affichage et sauvegarder état
        updateTimeFromEnd();
        updateTimer();
        updatePenalites();
        sauvegarderEtat();
        // feedback local pour l'utilisateur
        const fb = document.getElementById('feedback');
        if (fb) fb.textContent = `Indice révélé (-${PENALITE_INDICE}s)`;
        // désactiver le bouton d'indice pour empêcher un double-clic/log
        try {
            const btn = document.getElementById(`indiceBtn${index}`);
            if (btn) btn.disabled = true;
        } catch (e) { /* ignore */ }
    }

    // afficher tous les indices déjà révélés pour cette étape
    const indicesDiv = document.getElementById('indicesAffiches');
    const usedNow = indicesUtilises[etapeActuelle] || [];
    indicesDiv.innerHTML = etape.indices
        .map((texte, i) => usedNow.includes(i) ? `Indice ${i+1} : ${texte}` : '')
        .filter(x => x !== '')
        .join('<br>');

    // Log de l'utilisation d'un indice
    if ((indicesUtilises[etapeActuelle] || []).includes(index)) {
        addLog({
            type: 'indice',
            stepNum: etapeActuelle + 1,
            stepTitle: etape.titre,
            keywords: null,
            timeRemaining: tempsRestant,
            indicesUsed: [...(indicesUtilises[etapeActuelle]||[])],
            penalty: PENALITE_INDICE
        });
    }
}

/***********************
 * RÉPONSES
 ***********************/
function verifierReponse() {
    const saisieRaw = document.getElementById('reponse').value || '';
    const saisieTrim = saisieRaw.trim();
    // Refuser une saisie vide sans appliquer de pénalité
    if (saisieTrim.length === 0) {
        const feedback = document.getElementById('feedback');
        if (feedback) feedback.textContent = '⚠️ Entrez une réponse non vide.';
        return;
    }
    const saisie = saisieRaw;
    const feedback = document.getElementById('feedback');

    const saisieNorm = normaliser(saisie);
    const bonnesReponses = scenarioActuel.etapes[etapeActuelle]
        .reponses.map(r => normaliser(r));

    if (bonnesReponses.includes(saisieNorm)) {
        feedback.textContent = '✅ Bonne réponse !';
        // log de la réussite de l'étape courante
        addLog({
            type: 'success',
            stepNum: etapeActuelle + 1,
            stepTitle: scenarioActuel.etapes[etapeActuelle] ? scenarioActuel.etapes[etapeActuelle].titre : '',
            keywords: saisie,
            timeRemaining: tempsRestant,
            indicesUsed: [...(indicesUtilises[etapeActuelle]||[])],
            penalty: 0
        });

        etapeActuelle++;

        if (etapeActuelle < scenarioActuel.etapes.length) {
            setTimeout(() => {
                afficherEtape();
                sauvegarderEtat();
            }, 700);
        } else {
            // Fin du scénario : mettre en pause le chrono et afficher message final
            clearInterval(timerInterval);
            // annuler tout beep programmé
            try { cancelBeepTimer(); } catch (e) { /* ignore */ }

            // formater le temps restant tel qu'affiché par updateTimer
            updateTimeFromEnd();
            const absSeconds = Math.abs(tempsRestant);
            const minutes = Math.floor(absSeconds / 60);
            const secondes = absSeconds % 60;
            const sign = tempsRestant < 0 ? '-' : '';
            const tempsFormate = `${sign}${minutes}:${secondes.toString().padStart(2, '0')}`;

            // Choisir un message final selon si le joueur a terminé dans le temps
            const finishedWithinTime = tempsRestant >= 0; // >=0 = dans le temps (ou pile à la limite)

            let messageFinal = '<h2>🎉 Fin du scénario !</h2>';
            // Priorité : propriétés explicites messageFinalPositive / messageFinalNegative
            if (finishedWithinTime && scenarioActuel.messageFinalPositive) {
                messageFinal = scenarioActuel.messageFinalPositive;
            } else if (!finishedWithinTime && scenarioActuel.messageFinalNegative) {
                messageFinal = scenarioActuel.messageFinalNegative;
            } else if (scenarioActuel.messageFinal && typeof scenarioActuel.messageFinal === 'object') {
                // supporter { positive: '...', negative: '...'}
                if (finishedWithinTime && scenarioActuel.messageFinal.positive) {
                    messageFinal = scenarioActuel.messageFinal.positive;
                } else if (!finishedWithinTime && scenarioActuel.messageFinal.negative) {
                    messageFinal = scenarioActuel.messageFinal.negative;
                }
            } else if (scenarioActuel.messageFinal) {
                // fallback string
                messageFinal = scenarioActuel.messageFinal;
            }

            document.getElementById('contenuScenario').innerHTML =
                `${messageFinal}` +
                `<p>Temps au moment de la pause : <strong>${tempsFormate}</strong></p>` +
                (penalitesTotales > 0 ? `<p>⏱️ Pénalités cumulées : -${Math.floor(penalitesTotales/60)} min</p>` : '');

            // Scénario terminé : supprimer l'état sauvegardé
            clearSavedState();
            // log de la réussite finale (agréger tous les indices utilisés sur tout le scénario)
            const allIndices = Object.values(indicesUtilises).flat();
            addLog({
                type: 'success',
                stepNum: etapeActuelle, // dernière étape accomplie
                stepTitle: scenarioActuel.etapes[etapeActuelle-1] ? scenarioActuel.etapes[etapeActuelle-1].titre : '',
                keywords: null,
                timeRemaining: tempsRestant,
                indicesUsed: allIndices,
                penalty: 0
            });
        }
    } else {
        // Mauvaise réponse : appliquer la pénalité (affichage en secondes)
        feedback.textContent = `❌ Mauvaise réponse... (-${PENALITE_MAUVAIS}s)`;
        penalitesTotales += PENALITE_MAUVAIS;
        if (endTimestamp == null) endTimestamp = Date.now();
        endTimestamp -= PENALITE_MAUVAIS * 1000;

        updateTimeFromEnd();
        updateTimer();
        updatePenalites();
        sauvegarderEtat();
        // log de la mauvaise réponse
        addLog({
            type: 'error',
            stepNum: etapeActuelle + 1,
            stepTitle: scenarioActuel.etapes[etapeActuelle] ? scenarioActuel.etapes[etapeActuelle].titre : '',
            keywords: saisie,
            timeRemaining: tempsRestant,
            indicesUsed: [...(indicesUtilises[etapeActuelle]||[])],
            penalty: PENALITE_MAUVAIS
        });
    }
}

/***********************
 * DÉMARRAGE
 ***********************/
// Au chargement de la page, tenter de restaurer l'état. Si aucun état
// n'existe, l'utilisateur verra l'écran d'accueil.
// --- Beep helper functions (schedule a short beep 60s after Play) ---
function startBeepTimer() {
    // annule toute programmation précédente
    cancelBeepTimer();
    // créer/réveiller un AudioContext pendant le geste utilisateur (clic Play)
    try {
        const AudioCtor = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioCtor) {
            audioCtx = new AudioCtor();
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }
    } catch (e) {
        console.warn('Impossible d\'initialiser AudioContext', e);
    }
    const btn = document.getElementById('beepPlayBtn');
    const status = document.getElementById('beepStatus');
    if (btn) btn.disabled = true;
    if (status) status.textContent = '⏱️ Beep programmé dans 60s';
    beepStartedAt = Date.now();

    // updater du statut toutes les secondes
    function updateBeepStatus() {
        const status = document.getElementById('beepStatus');
        if (!beepStartedAt) {
            if (status) status.textContent = '';
            return;
        }
        const elapsed = Math.floor((Date.now() - beepStartedAt) / 1000);
        const remaining = Math.max(0, 60 - elapsed);
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;
        const txt = `⏱️ Beep dans ${m}:${s.toString().padStart(2,'0')}`;
        if (status) status.textContent = txt;
    }
    updateBeepStatus();
    beepIntervalId = setInterval(updateBeepStatus, 1000);

    beepTimeoutId = setTimeout(() => {
        playBeep();
        // log event
        addLog({
            type: 'info',
            stepNum: etapeActuelle + 1,
            stepTitle: scenarioActuel && scenarioActuel.etapes[etapeActuelle] ? scenarioActuel.etapes[etapeActuelle].titre : '',
            keywords: null,
            timeRemaining: tempsRestant,
            indicesUsed: [...(indicesUtilises[etapeActuelle] || [])],
            penalty: 0
        });
        const status = document.getElementById('beepStatus');
        if (status) status.textContent = '🔔 Beep joué';
        if (btn) btn.disabled = false;
        // clear interval
        if (beepIntervalId) { clearInterval(beepIntervalId); beepIntervalId = null; }
        beepTimeoutId = null;
        beepStartedAt = null;
    }, 60 * 1000);
}

function cancelBeepTimer() {
    if (beepTimeoutId) {
        clearTimeout(beepTimeoutId);
        beepTimeoutId = null;
    }
    if (beepIntervalId) {
        clearInterval(beepIntervalId);
        beepIntervalId = null;
    }
    beepStartedAt = null;
    const btn = document.getElementById('beepPlayBtn');
    const status = document.getElementById('beepStatus');
    if (btn) btn.disabled = false;
    if (status) status.textContent = '';
}

function playBeep() {
    try {
        // Utiliser le AudioContext créé lors du clic Play si disponible.
        let ctx = audioCtx;
        const AudioCtor = window.AudioContext || window.webkitAudioContext;
        if (!ctx && AudioCtor) {
            ctx = new AudioCtor();
        }
        if (!ctx) return;
        // s'assurer que le contexte est en marche
        if (ctx.state === 'suspended') {
            try { ctx.resume(); } catch (e) {}
        }
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = 880;
        o.connect(g);
        g.connect(ctx.destination);
        const now = ctx.currentTime;
        // Enveloppe : fade-in rapide, sustain ~2s, fade-out
        const sustainSeconds = 2.0;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.linearRampToValueAtTime(0.5, now + 0.02); // 20ms attack
        o.start(now);
        // maintenir puis fade out
        g.gain.setValueAtTime(0.5, now + 0.02);
        g.gain.linearRampToValueAtTime(0.0001, now + sustainSeconds + 0.02); // release
        // arrêter l'oscillateur juste après la fin
        const stopMs = Math.ceil((sustainSeconds + 0.06) * 1000);
        setTimeout(() => { try { o.stop(); } catch (e) { /* ignore */ } }, stopMs);
    } catch (e) {
        console.warn('Audio non supporté ou bloqué', e);
    }
}

window.addEventListener('load', () => {
    const restored = restaurerEtat();
    // si restauration ok on a déjà lancé le timer et affiché l'étape
});