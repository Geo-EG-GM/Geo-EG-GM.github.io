/* Scénarios : extrait du fichier principal pour faciliter la maintenance.
   Ajoutez ici les scénarios 1, 2, 3 (templates pour 2 & 3).
*/
const scenarios = {
    // CONTES CRUELS
    // SCENARIO 1 ------------- CONTES CRUELS : La foret de l'Ogre
    1: {
        titre: "Easy : Dans la Forêt de l'Ogre",
        duree: 45 * 60, // ⏱️ chrono du scénario (en secondes)
        // message final spécifique à ce scénario (personnalisable par scénario)
        messageFinal: `<h2>🎉 Vous êtes sortis de la forêt !</h2><br><br>
        <strong>ENFIN !</strong> Alors que l'aube pointe à l'horizon, vous arrivez dans le hameau où vous vivez avec vos parents. Tous deux pleurent devant le pas de votre maison. Lorsqu'ils vous voient arriver, ils ne peuvent retenir leurs cris de joie malgré les larmes qui coulent encore sur leurs joues. Ils vous expliquent qu'ils ne pensaient plus pouvoir vous nourrir à cause de leurs dettes. Une bienfaitrice inconnue, une riche marchande de confiserie, leur a permis de tout rembourser d'un coup. Ils vous jurent de ne plus jamais vous abandonner.
        `,
        etapes: [
            {
                titre: "Une sombre histoire...",
                histoire: `
Quand vos parents vous ont proposé une balade en forêt, vous ne pensiez pas qu'ils allaient vous abandonner au beau milieu de la nuit, dans la partie la plus sombre et la plus effrayante du bois qui borde votre village. Heureusement, votre plus jeune frère avait pressenti leur intention et a semé sur votre chemin des petits cailloux blancs pour vous permettre de retrouver votre route. Mais il fait nuit noire, et vous ne distinguez presque rien autour de vous. Ouvrez grand les yeux pour retrouver les cailloux blancs et sortir de la forêt.
<br><br>
Vous avancez à tâtons dans les bois sombres en vous tenant la main pour éviter de perdre l'un d'entre vous. Peu à peu, vos yeux s'habituent à l'obscurité et vous commencez à distinguer la silhouette des arbres et des ronces autour de vous. Vous cherchez désespérément les cailloux que votre frère jure avoir laissés derrière lui à l'aller.
<br><br>
<strong>Prenez les cartes 1 à 6</strong>
<br><br><br><br>
Des mots sont cachés dans la forêt, qu'est-il écrit ?
                `,
                reponses: ["IMALLCHEAT","pleine lune"],
                indices: [
                    "Il y a dix lettres cachées en tout",
                    "Il y a deux mots séparés d'un espace"
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Menace cachée",
                histoire: `
<strong>Prenez les cartes 7 à 10 ainsi que la carte 33.</strong>
<br><br>
À la lueur de la pleine lune, un petit caillou se met à briller. Vous le ramassez : vous êtes sur la bonne voie. Soudain, un grognement sinistre étouffe votre joie naissante. Dans un recoin de la forêt si dense qu'aucune lumière n'y pénètre jamais, vous distinguez plusieurs paires d'yeux qui vous observent dans l'obscurité… L'une d'elles, en particulier, vous glace le sang.
<br><br>
De très nombreuses paires d'yeux apparaissent sur les cartes. Une seule est réellement importante : celle du loup. Pour l'identifier, vous devez éliminer toutes les paires d'yeux présentes en double. La paire qui reste unique est celle que vous recherchez.
<br><br>
Une fois cette paire trouvée, indiquez sa position en procédant de la manière suivante : commencez par noter le numéro de la carte ; puis repérez la paire d'yeux sur la carte en comptant de haut en bas et de gauche à droite.
<br><br>
Exemples :
<br>
6-1 : carte 6, première paire d'yeux en haut à gauche ;
<br>
7-3 : carte 7, troisième paire d'yeux en comptant de haut en bas et de gauche à droite.
<br><br>
<br><br>
<strong>Quelle est la position de la paire d'yeux du loup ?</strong>
                `,
                reponses: ["IMALLCHEAT","8-4", "84", "8 4","8,4","8;4"],
                indices: [
                     "Pour l'identifier, vous devez éliminer toutes les paires d'yeux présentes en double. La paire qui reste unique est celle que vous recherchez."
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Loup y es-tu ?",
                histoire: `
<strong>Prenez les cartes 11 à 14, ainsi que la carte 34</strong>
<br><br>
Ce sont bien les yeux du loup que vous avez repérés dans l'obscurité. Vous pensiez qu'il vous observait, mais en réalité, il regardait simplement droit devant lui. Vous avez encore une chance de lui échapper, à condition de rester extrêmement discrets. En silence, vous réfléchissez à la meilleure manière de poursuivre votre chemin, tout en ramassant le nouveau caillou que vous venez de découvrir.
<br><br>
<br><br>
<strong>Que faut-il faire à présent ?</strong>
                `,
                reponses: ["IMALLCHEAT",
                    "se diriger vers est",
                    "se diriger vers lest",
                    "se diriger vers l'est"
                ],
                indices: [
                    "Quelle est la signification d'une croix rouge, habituellement ?",
                    "Les cartes vont ensemble 2 par 2"
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Langage fleuri",
                histoire: `
<strong>Prenez les cartes 15 à 18, ainsi que la carte 35</strong><br><br>
<br><br>
Bien vu ! En faisant un détour par l'est, vous avez trouvé un caillou blanc qui vous confirme que vous avez rejoint le bon chemin tout en évitant de vous confronter au loup.<br><br>
Vous poursuivez votre route, mais plus vous vous enfoncez dans la forêt, plus un sentiment de malaise vous étreint. Vous apercevez au loin un panneau indéchiffrable au pied duquel semble briller un petit caillou.<br><br>
Ce panneau, vous devriez en avoir un souvenir, non ?
<br><br>
<br><br>
<strong>D'ailleurs, que dit-il ?</strong>

                `,
                reponses: ["IMALLCHEAT","la maison des délices", "la maison des délices"],
                indices: [
                     "Indice 1 :</strong> Certains des symboles apparaissent plusieurs fois, et on nous indique qu'il y a plusieurs lettres qui se répètent.",
                     "Indice 2 :</strong> Le panneau indique le nom d'un bâtiment délectable"
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Aigre Doux",
                histoire: `
<strong>Prenez les cartes 19 à 23, ainsi que la carte 36</strong><br><br>
<br><br>
Au bout du chemin, une bougie vacillante éclaire le visage d'une dame d'un certain âge qui vous accueille avec chaleur.<br><br><br><br>
« Mes pauvres petits, vous êtes perdus ? Vous avez l'air frigorifiés et affamés ! Venez, rentrez ! »<br><br>
<br><br>
Malgré votre sentiment d'angoisse sourde, vous franchissez la porte de la maison des délices. La maîtresse de maison s'empresse de vous couvrir de sucreries en se plaignant, toujours le sourire aux lèvres.<br><br>
<br><br>
<strong>Que pouvez-vous lire dans les sucreries ?</strong>
                `,
                reponses: ["IMALLCHEAT","danger"],
                indices: [
                     "Les couleurs de ces sucreries sont un peu étranges, non ?",
                     "Chaque couleur correspond à un segment de la carte 19. Que se passe-t-il si l'on isole les couleurs de chacun des bonbons ?"
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Un message du passé",
                histoire: `
<strong>Prenez les cartes 24 à 29 ainsi que la carte 37.</strong><br><br>
<br><br>
L'un d'entre vous montre discrètement du doigt un caillou blanc dans une petite coupelle : que fait-il là ?<br><br>
TROP TARD ! Le sourire disparaît des lèvres de votre hôtesse tandis qu'elle ferme la porte d'entrée à double tour. Elle vous pousse ménagement dans une petite pièce sombre, tout en marmonnant des phrases inquiétantes sur la température du four et le temps de préchauffage.<br><br>
Dès que vous vous retrouvez seuls, vous fouillez la pièce à la recherche de quoi que ce soit qui pourrait vous permettre de vous échapper.<br><br>
Entre deux briques humides, vous trouvez des morceaux de papier.<br><br>
<br><br>
<strong>Où trouver de l'aide ? (quatre mots)</strong>

                `,
                reponses: ["IMALLCHEAT","derrière la quatrième brique", "derriere la quatrieme brique", "derrière la 4ème brique", "derriere la 4eme brique"],
                indices: [
                     "Une faute d'orthographe devrait vous aider",
                     "Pour comprendre le message, il ne faut pas lire tous les mots"
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Echappée belle",
                histoire: `
<strong>Prenez les cartes 30 à 32 ainsi que la carte 38.</strong>
<br><br>
Derrière la brique, vous trouvez un morceau de métal tordu qui vous permet de crocheter le verrou de la porte de votre geôle, ainsi qu'un petit caillou blanc. Vous ne savez pas qui sont Hansel et Gretel, mais vous les remerciez de tout votre cœur, en silence bien entendu. Maintenant, il vous faut sortir de cette maison infernale.<br><br>
<br><br>
<strong>Cherchez un moyen pour vous échapper ! </strong>(un mot)
                `,
                reponses: ["IMALLCHEAT","clé", "cle", "clef"],
                indices: [
                     "Ce ne sont pas les objets en eux-mêmes qui vous permettront de vous échapper.",
                     "Par quelle lettre commencent les objets de la carte ?"
                ]
            },
            // --------------- ETAPE ----------------- //
            {
                titre: "Retour à la maison !",
                histoire: `
<strong>Prenez les cartes 39 et 40.</strong>
<br><br>
Parmi le bazar qui régnait dans la maison de l'ogresse, vous avez trouvé une clé ainsi qu'un petit caillou blanc. Elle a dû les récupérer sur le chemin et les disposer de façon à ce que vous vous retrouviez chez elle… Vous avez courageusement et discrètement quitté sa maison, mais votre périple n'est pas fini : il vous faut à présent retrouver le chemin qui mène à la maison de vos parents… en espérant que les autres cailloux soient toujours en place.<br><br>

Au bout de quelques minutes de recherche, vous en voyez un briller au loin ; en route !
<br><br>
<br><br>
<strong>Quel est l'ordre des cailloux ramassés ?</strong> (cartes numérotées comme on lit un livre OU numéro des cartes derrières)
                `,
                reponses: ["IMALLCHEAT","1356478","1,3,5,6,4,7,8","1-3-5-6-4-7-8","33383934363740","33,38,39,34,36,37,40","33-38-39-34-36-37-40"],
                indices: []
            }

        ]
    },

    // SCENARIO 2 --------------------- CONTES CRUELS : LE MIROIR MALEFIQUE
    2: {
        titre: "Intermediaire : Le Miroir Maléfique",
        duree: 45 * 60,
        messageFinal: `<h2>🎭 Vous avez niqué la gueule du miroir ! — Bravo !</h2><br><br>
        A peine avez-vous prononcé le debut de la formule magique que le miroir maléfique éclate en mille morceaux. Un nouvel éclair de lumière vous aveugle et vous sentez le sol se dérober sous vos pieds. Vous atterrissez brutalement à la sortie du palais des glaces, de retour dans votre monde. Vous vous regardez, hébétés, déjà plus très sûrs d'avoir vraiment vécu cette aventure. Un oiseau au vente orangé vient se percher sur les épaules de l'un d'entre vous et dépose délicatement un morceau de papier dans les mains.
        <br><br>
        "Merci chers étrangers" est-il écrit à la plume.`,
        etapes: [
            {
                titre: "Oiseau voyageur",
                histoire: `
<strong>Prenez les cartes 1 à 6, ainsi que la carte 32.</strong>
<br><br>
Pour ce scenario, vous devrez défausser certaines cartes et en garder d'autres. Les cartes à défausser seront précisées dans chaque étape alors mémorisez les bien !
<br><br>
Vous venez de passer un excellent après-midi à la fête foraine avec vos amis. Vous avez fait toutes les attractions, enfin, c'est ce que vous pensiez, avant que l'une de vos camarades ne pointe du doigt la galerie des glaces. Étrange, vous ne l'aviez pas remarquée ! Après avoir payé vos billets d'entrée, vous pénétrez dans l'attraction. Vous vous amusez à faire des grimaces devant les miroirs déformants, vous vous cognez contre les parois du labyrinthe réfléchissant, approchant peu à peu du centre de la galerie. Lorsque vous l'atteignez, vous découvrez un énorme miroir antique. Fascinés, vous touchez du bout du doigt sa surface. Un éclair aveuglant vous oblige soudainement à fermer les yeux. Lorsque vous les rouvrez, vous réalisez que vous avez été projetés de l'autre côté du miroir, au milieu d'une campagne bucolique. Où vous trouvez-vous ? Et comment allez-vous faire pour retourner chez vous ?
<br><br>
Alors que vous appelez désespérément à l'aide et consultez vainement vos téléphones, un froissement d'ailes vous pousse à lever la tête. Au-dessus de vous volettent six oiseaux colorés. L'un d'entre eux laisse tomber une enveloppe épaisse que vous vous empressez d'ouvrir :
<br><br>
« Chers inconnus, je vous prie de me pardonner pour ce voyage quelque peu brutal, mais j'ai désespérément besoin de vous. La reine de ce royaume me retient prisonnière dans son château et je n'ai d'autre choix que de vous demander de l'aide. Seuls des étrangers au monde magique peuvent se mesurer à cette reine cruelle et son puissant miroir. Prenez garde à ses tours maléfiques. J'essaierai de vous envoyer de l'aide, mais pour l'heure, voici ce que je peux vous dire. Affectueusement, Blanche-Neige. »
<br><br>
Au fond de l'enveloppe, vous trouvez six bouts de papier.
<br><br>
<strong>Quel est le message caché ?</strong>
`,
                reponses: ["IMALLCHEAT","suivez le pinson orange"],
                indices: ["Il y a un rébus à déchiffrer, mais il n'est pas dans le bon ordre","Seul un oiseau vous sera utile"]
            },
            {
                titre: "L'eau monte !",
                histoire: `
                <strong>Défaussez les cartes 1 à 6. Prenez les cartes 7 à 13 ainsi que la carte 33.</strong><br><br>
                <br><br>
                Vous avez eu le temps de faire quelques pas seulement en direction du pinson orange désigné par Blanche-Neige lorsqu'un lac apparaît brusquement autour de vous, comme par magie. L'eau monte, vous encercle jusqu'à vous contraindre à grimper sur un rocher.<br><br>
                Alentour, il n'y a plus rien à perte de vue... enfin, pas tout à fait. L'un d'entre vous a repéré 6 silhouettes menaçantes qui se reflètent sur la surface du lac à présent parfaitement calme.<br><br>
                <br><br>
                <strong>Ce lac n'est qu'un....</strong>
                `,
                reponses: ["IMALLCHEAT","mirage"],
                indices: ["Les reflets ne sont pas parfaits","Chaque carte comporte un nombre précis de différences, et il ne faut pas les additionner"]
            },
            {
                titre: "Croquez, maintenant !",
                histoire: `
                <strong>Défaussez les cartes 7 à 13. Prenez les cartes 14, 15 et 34.</strong><br><br>
                <br><br>
                Il a suffi de prononcer le mot MIRAGE pour que le lac disparaisse aussi rapidement qu'il était apparu. Vous pouvez maintenant suivre le pinson qui vous attendait patiemment sur une branche et vous vous enfoncez dans la forêt toute proche. Vous marchez des heures durant, en tout cas c'est ce dont vous avez l'impression.<br><br>
                Petit à petit, l'ombre fait place à la lumière, le froid vous envahit et la faim vous taraude. Depuis combien de temps êtes-vous partis ? Vous vous sentez totalement déphasés. Comme par miracle, vous tombez enfin sur une clairière où coule un petit ruisseau et poussent des pommiers aux fruits bien rouges.<br><br>
                Mais vous vous méfiez et décidez d'y regarder à deux fois avant de croquer dans les pommes. <strong>Que remarquez-vous ?</strong>
                `,
                reponses: ["IMALLCHEAT","tete de mort","crane"],
                indices: ["Les 4 pommes doivent être considérées ensemble. Armez vous de papier et de crayons.","Le coeur de la carte 15 est parfaitement symétrique, et votre dessin à vous devrait l'être aussi."]
            },
            {
                titre: "Des gardes brillants",
                histoire: `
                <strong>Défaussez les cartes 14 et 15. Prenez les cartes 16 à 19 ainsi que la carte 35.</strong><br><br>
                <br><br>
                Vous avez quitté précipitamment la clairière, laissant derrière vous les pommes empoisonnées. Vous reprenez votre chemin dans un bois qui semble moins froid et moins sombre. En quelques pas, vous atteignez l'orée de la forêt. Cachés derrière un arbre, vous contemplez le château qui se dresse devant vous. Malheureusement, toutes les portes sont gardées par des sbires en armure, dont les boucliers luisent au soleil.<br><br>
                <br><br>
                Le vieux fou du village vous dit qu'il existe une porte cachée, là où vient mourir le soleil en rencontrant les boucliers. (un mot)
                `,
                reponses: ["IMALLCHEAT","rocher de droite"],
                indices: ["suivre le trajet du soleil","synonyme de 'caillou' ; préciser lequel"]
            },
            {
                titre: "Porte dérobée",
                histoire: `
                <strong>Défaussez les cartes 16 à 19. Prenez les cartes 20, 21 et 36.</strong><br><br>
                <br><br>
                Le rayon de soleil refiété par les boucliers des gardes a fait apparaitre une petite porte à peine visible, qui ne semble accessible que par les douves. Priant pour ne pas tomber sur des bêtes sauvages, vous rentrez dans l'eau glauque et nagez le plus silencieusement possible. Une fois arrivés devant la porte, vous constatez qu'elle est fermée par un cadenas rouillé.
                <br><br>
                <br><br>
                <br><br>
                H : Haut || B : Bas || G : Gauche || D : Droite
                <br><br>
                <strong>Quel est le code du cadenas ?</strong>
                `,
                reponses: ["IMALLCHEAT","hbddg"],
                indices: ["Contrairement à 'Memento Mori' ou autre truc latin, la maxime latine inscrite sur la porte n'a aucun sens","Cocentrez-vous sur le dévut des mots"]
            },
            {
                titre: "Marchande de mensonge",
                histoire: `
                <strong>Défaussez les cartes 20 et 21. Prenez les cartes 22 à 25, ainsi que la carte 37. </strong><br><br>
                <br><br>
                La porte dérobée s'ouvre avec un grincement sinistre. Vous vous hissez hors de l'eau et atteignez les caves sombres et humides du château. Trois craquements successifs vous font sursauter et, à la lueur de bougies vacillantes, trois vieilles femmes identiques surgissent de l'obscurité. Elles tiennent dans leurs mains crochues trois paniers dont seul le contenu permet de les distinguer.<br><br>
                <br><br>
                <strong>De qui faut-il accepter le contenu ?</strong>
                `,
                reponses: ["IMALLCHEAT","la marchande de lacet","la marchande de lacets","marchande de lacets","marchant de lacet"],
                indices: ["Cherchez une menteuse","Cherchez dans votre mémoire !","Cherchez dans vos anciennes cartes... ça fait cher les indices hein ?"]
            },
            {
                titre: "Dédale coloré",
                histoire: `
                <strong>Prenez les cartes 26 à 28 ainsi que la carte 38.</strong><br><br>
                <br><br>
                Vous avez attrapé un lacet dans le panier de la marchande menteuse qui tente de s'échapper Immédiatement après l'avoir saisi, vous êtes aspirés dans un couloir où des lacets géante tentent de vous étrangler. N'écoutant que votre courage, vous vous mettez à courir (on rentre par le haut, on sort quelque part en bas).<br><br>
                <br><br>
                <strong>Quelles sont les cinq dernières lettres empreintées pour sortir du labyrinthe ?.</strong>
                `,
                reponses: ["IMALLCHEAT","kcvnf"],
                indices: ["La phrase en filigrane est indispensable à votre survie","N'essayez pas de former des mots avec ces lettres, on ne doit pas trouver un mot ou une phrase, seulement la sortie."]
            },
            {
                titre: "Près du but",
                histoire: `
                <strong>Gardez les cartes 26 à 28 et prenez les cartes 29 et 39.</strong><br><br>
                <br><br>
                Vous avez réussi à semer les derniers lacets meurtriers mais impossible de continuer votre chemin vous vous trouvez une fois encore devant une porte close. Vous entendez de l'autre côté la voix étouffée d'une jeune femme... Serait-ce Blanche-Neige ?<br><br>
                <br><br>
                <br><br>
                <strong>Quel est le code du cadenas ?</strong>
                `,
                reponses: ["IMALLCHEAT","289"],
                indices: ["Le fond de la carte est plus important que l'objet au premier plan","Vous avez besoin de revenir sur vos pas","Les couleurs des emplacements chiffrés du cadenas ne sont pas choisies au hasard."]
            },
            {
                titre: "Briser la glace",
                histoire: `
                <strong>Défaussez les cartes 26 à 29. Prenez les cartes 30, 31 et 40.</strong><br><br>
                <br><br>
                Vous poussez prudemment la porte... Elle est là, Blanche-Neige, fidèle à son nom, belle comme une princesse de conte de fées mais enchaînée au mur de pierre. En face d'elle se trouve son gardien, le plus fidèle des serviteurs de la méchante reine, le miroir magique. C'est lui qui a semé des embüches sur votre chemin, mais il n'aura pas réussi à vous empêcher d'arriver jusqu'à lui. Il est temps de mettre fin à son dernier maléfice pour libérer Blanche-Neige et rentrer chez vous : trouvez la formule magique pour briser le miroir maléfique !
                `,
                reponses: ["IMALLCHEAT","miroir mon beau miroir","miroir, mon beau miroir"],
                indices: ["Le miroir et la grille de lettres ont un point commun très important","Il faut relier les points entre eux dans l'ordre où vous les avez placés"]
            }
        ]
    },

    // SCENARIO 3 -------- CONTES CRUELS : La Machination de Barbe-Bleue
    3: {
        titre: "La Machination de Barbe-Bleue",
        duree: 20 * 60,
        messageFinal: `<h2>🏁 Bravo !</h2><br><br>
        Le château tremble sur ses fondations, puis se met lentement à s'écrouler sur lui-même, les pierres et les ardoises volent autour de vous. Vous prenez votre courage à deux mains et sautez dans le lac en contrebas. Une fois sur le rivage, vous observez le château en ruines en priant pour que son propriétaire enfoul sous les décombres n'en réchappe pas...`,
        etapes: [
            {
                titre: "Sortie, au secours !",
                histoire: `
Votre époux n'est pas celui que vous croyez... Vous aviez profité de son absence pour briser le tabou ultime, pénétrer dans la pièce dont il vous avait formellement interdit l'entrée. Là, vous avez vu les corps sans vie de ses précédentes compagnes, punies pour avoir désobéi... Barbe-Bleue est déjà de retour, et vous savez qu'il ne se montrera pas charitable. Votre sœur Anne, en haut de la plus grande tour du château, aperçoit vos deux frères qui arrivent enfin pour vous sauver. Mais alors qu'ils franchissent la porte du palais et que vous les accueillez avec soulagement, la voix de votre mari résonne dans les couloirs pour vous annoncer que vous ne quitterez pas vivants son domaine... Vous voici prisonniers de la maison et de ses maléfices.<br><br>
<br><br>
<strong>Prenez les cartes 1 à 3 ainsi que la carte 33.</strong><br><br>
<br><br>
La porte de sortie est en vue, vous tentez de vous précipiter dessus, mais le couloir dans lequel vous êtes engagés semble s'étirer, devenant toujours plus long. L'issue qui vous paraissait si proche paraît à présent inatteignable. Vous redoublez d'ardeur, courez à en perdre haleine, et enfin! vous tenez fermement la poignée dans votre main. Mais au lieu d'un verrou, la porte est munie d'un étrange système d'ouverture.
                `,
                reponses: ["IMALLCHEAT","cctrclct","carré carré triangle rond carré losange carré triangle","carré,carré,triangle,rond,carré,losange,carré,triangle"],
                indices: ["Celles qui sonnent ensemble : elles sont au nombre de 20 dans l'alphabet","Les vormes géométriques doivent etre touchées dans un ordre spécifiques"]
            },
            {
                titre: "Pièce maitresse",
                histoire: `
<strong>Prenez les cartes 4 à 7 ainsi que la carte 34.</strong><br><br>
<br><br>
Un cri de victoire reste coincé au fond de votre gorge. Vous pensiez avoir réussi à sortir de ce maudit château, mais vous voilà enfermés dans une pièce inconnue. La demeure de Barbe-Bleue semble vouloir vous jouer des tours. Au milieu de la pièce trône une table d'échecs, et sur votre droite, vous repérez une étagère sur laquelle sont rangés des livres dont les titres ne vous disent rien.<br><br>
Dans l'ordre, où placer le fou, la tour et le cavalier (ex : A2 C4 F6)

                `,
                reponses: ["IMALLCHEAT","B1 E8 E4","E4 B1 E2","E4 E8 B1"],
                indices: ["Le premier livre vous donne un indice applicable aux trois premiers.","Il n'y a pas qu'une seule case pour chaque pièce"]
            },
            {
                titre: "Un couloir sans porte",
                histoire: `
<strong>Prenez les cartes 8 à 12 ainsi que la carte 35.</strong><br><br>
<br><br>
La porte s'est ouverte dès que vous avez placé les pièces correctement sur l'échiquier.

Vous ressortez, cette fois plus prudemment que jamais. Vous reconnaissez le couloir dans lequel vous vous retrouvez, mais il est situé au dernier étage de la bätisse, alors que vous étiez persuadés d'être au rez-de-chaussée... Que se passe-t-il? De plus, toutes les portes qui sont habituellement visibles ont comme disparu. Vous vous sentez pris au piège dans ce couloir étroit aux murs ornés de têtes de gibier empaillées...
                `,
                reponses: ["IMALLCHEAT","issue"],
                indices: ["L'un des animaux porte 'mal' son nom","Chaque symbole cache une lettre"]
            },
            {
                titre: "A l'aveuglette",
                histoire: `
<strong>Prenez les cartes 13 à 17 ainsi que la carte 36.</strong><br><br>
<br><br>
En appuyant sur la plaque où il était indiqué issue, vous aviez l'espoir de voir apparaitre une porte, mais vous auriez dů vous en douter, le château n'a pas l'intention de vous aider. Au lieu d'une porte, c'est une trappe qui s'est ouverte sous vos pieds. Vous atterrissez avec fracas au milieu d'un autre couloir plus obscur que l'âme du chatelain. Heureusement, l'un de vos frères a sur lui des allumettes qu'il s'empresse de gratter. Vous n'avez le droit qu'à quelques secondes d'une lumière vacillante, profitez-en!
                `,
                reponses: ["IMALLCHEAT","allume"],
                indices: ["Vous avez déjà croisé certains de ces symboles","Essayez de former un mot avec les lettres inscrites sur les feuillets"]
            },
            {
                titre: "La dernière clé",
                histoire: `
<strong>Prenez les cartes 18 à 22 ainsi que la carte 37.</strong><br><br>
<br><br>
La lampe brille plus intensément qu'elle le devrait et, les yeux à moitié fermés, vous observez votre environnement. Un sentiment de panique s'empare de vous: le couloir dans lequel vous vous tenez est celui qui conduit à la pièce maudite, celle qui a mené à votre perte. Que faire? Vous entendez l'escalier craquer et la maison frémir, comme si elle appelait son maitre. D'ailleurs, vous avez l'impression d'entendre sa voix menaçante plus bas, dans les étages inférieurs. Vous n'avez d'autre choix que d'aller vous cacher dans la pièce interdite. Vous devriez avoir sur votre trousseau de clés celle qui permet d'ouvrir la porte, reconnaissable entre toutes car tachée de sang. Mais... le château vous a encore joué un tour.<br><br>
<br><br>
<strong>Qu'est-il inscrit, une fois déchiffré, sur la clef qui ouvre la porte ?</strong>
                `,
                reponses: ["IMALLCHEAT","estcelle"],
                indices: ["Il n'y a que 6 chiffres dans la clé chiffré, il va falloir la répéter plusieurs fois.","La solution apparaitra quand vous décalerez les lettres."]
            },
            {
                titre: "Murmures de l'au-delà",
                histoire: `
<strong>Prenez les cartes 23 à 26 ainsi que la carte 38.</strong><br><br>
<br><br>
À l'intérieur de la pièce vous attendent les corps sans vie des femmes de Barbe-Bleue, exécutées pour avoir ouvert la même porte que celle que vous venez de refermer derrière vous. Frissonnants de peur et de dégoût, vous restez silencieux tandis que les pas du châtelain résonnent dans le couloir. Il vous semble entendre autre chose, comme un léger murmure à peine audible. Tendez l'oreille...<br><br>
<br><br>
<strong>Ecrire les deux phrases trouvées à la suite sans ponctuation</strong> (exemple: "les chats sauvages les chiens de garde")
                `,
                reponses: ["IMALLCHEAT","nous les femmes dechues nos esprits sont prisonniers","nos esprits sont prisonniers nous les femmes déchues"],
                indices: ["Le sens d'écriture et le sens de lecture des lettres n'est pas le même.","Prêtez une attention particulière aux couleurs"]
            },
            {
                titre: "Enchainées pour l'éternité",
                histoire: `
<strong>Prenez les cartes 27 à 30 ainsi que la carte 39.</strong><br><br>
<br><br>
Les fantômes des femmes de Barbe-Bleue vous apparaissent à présent. Elles vous apprennent qu'elles sont piégées ici, dans cette pièce, mais qu'en contrepartie, leur mari et bourreau ne peut y pénétrer tant que leurs esprits occupent l'espace. C'est pourquoi Barbe-Bleue interdit quiconque d'y rentrer, car il ne peut atteindre ceux qui s'y cachent. Vous remarquez d'étranges chaines qui maintiennent les fantômes au mur, au-dessus de leurs cadavres. Et si vous brisiez leurs liens, leur rendrez-vous leur liberté? Barbe-Bleue pourrait alors pénétrer dans la pièce....<br><br>
<br><br>
<strong>Que trouvez-vous, dans l'ordre des cartes 27, 28,  29 et 30 ?</strong> (pas de ponctuation)
                `,
                reponses: ["IMALLCHEAT","8 six 13 m 4"," 8 6 13 m 4","huit six treize m quatre"],
                indices: ["Toutes les suites doivent être résolues individuellement, mais deux d'entre elles partagent la même logique."]
            },
            {
                titre: "Adieu, Barbe-Bleue !",
                histoire: `
<strong>Prenez les cartes 31 et 32 ainsi que la carte 40.</strong><br><br>
Munissez-vous de papier calque !
<br><br>
Vous ne pouviez pas laisser ces pauvres âmes enfermées dans cette pièce pour l'éternité! Votre bon cœur vous a poussé à les libérer, mais à présent il vous faut affronter Barbe-Bleue et son château infernal... Vous décidez de prendre les devants et ouvrez la porte de la pièce. Mais au lieu de vous retrouver face à Barbe-Bleue, vous voila au sommet de la tour, aux côtés de votre sœur Anne, qui ne croyait plus à votre retour.
<br><br>
<strong>Quel est le message chiffré ? (sans ponctuation)</strong>
                `,
                reponses: ["IMALLCHEAT","merci de nous avoir délivrées nous nous chargeons de l'ogre","merci de nous avoir délivrées nous nous chargeons de logre"],
                indices: ["Commencez par essayer de déchiffrer le message caché de la carte rouge.","Il faut aller repêcher des cartes déjà utilisées, les couleurs vous aideront"]
            }
        ]
    },


    // LES MYESTERES DE L'ART
    4: {
        titre: "L'Enigme Van Gogh",
        duree: 45 * 60,
        messageFinal: `<h3> C'est gagné !</h3>
<br><br>
Parfait, vous êtes arrivés au terme de ce voyage à l'intérieur d'une œuvre de Vincent Van Gogh. Bravo, vous allez pouvoir retrouver votre liberté. Vous avez contribué à percer les mystères du champ de blé et de cette période de la vie du peintre. Maintenant, vous reprenez le cours de votre existence, mais quelque chose aura changé dans votre vie: la Provence, ses odeurs, ses couleurs mêlées à celles des toiles du grand maitre res-teront imprimées en vous!<br><br>
<br><br>
<h3> A moins que vous ayez perdu ? (< 45minutes)</h3>
<br><br>
Malheureusement, vous n'avez pas eu le temps de finir votre périple à travers le tableau du Champ de blé avec cyprès! Vous vous incrustez donc dans la toile du grand coloriste. Désormais, les visiteurs du musée new-yorkais auront la surprise de vous découvrir dans ce paysage provençal. Mais consolez-vous, vous devenez ainsi immortels et associés à l'un des peintres les plus célèbres de la planète!
`,
        // messages finaux dépendant du temps (positif = dans les temps, négatif = dépassé)
        messageFinalPositive: `<h3> C'est gagné !</h3>
<br><br>
Parfait, vous êtes arrivés au terme de ce voyage à l'intérieur d'une œuvre de Vincent Van Gogh. Bravo, vous allez pouvoir retrouver votre liberté. Vous avez contribué à percer les mystères du champ de blé et de cette période de la vie du peintre. Maintenant, vous reprenez le cours de votre existence, mais quelque chose aura changé dans votre vie: la Provence, ses odeurs, ses couleurs mêlées à celles des toiles du grand maitre res-teront imprimées en vous!`,
        messageFinalNegative: `<h3> A moins que vous ayez perdu ? (< 45minutes)</h3>
<br><br>
Malheureusement, vous n'avez pas eu le temps de finir votre périple à travers le tableau du Champ de blé avec cyprès! Vous vous incrustez donc dans la toile du grand coloriste. Désormais, les visiteurs du musée new-yorkais auront la surprise de vous découvrir dans ce paysage provençal. Mais consolez-vous, vous devenez ainsi immortels et associés à l'un des peintres les plus célèbres de la planète!`,
        etapes: [
            {
                titre: "Immersion provençale",
                histoire: `
            Vous êtes des visiteurs du MET (The Metropolitan Museum of Art), à New York, et tandis que vous admirez le tableau de Vincent Van Gogh Champ de blé avec cyprès, vous vous faites, tout à coup, happer par la toile et vous vous retrouvez prisonniers de ce paysage provençal. Une voix, qui semble venir de derrière les cyprès, vous conseille de bien observer ce paysage et décrypter certains éléments de la vie du célèbre peintre en Provence, c'est la clé pour vous libérer du tableau. La voix vous précise que vous avez 45 minutes pour suivre ce parcours à travers la campagne, qui vous guidera dans les pas de Van Gogh, de sa vie et surtout de son œuvre. Si vous ne parvenez pas à percer les mystères du champ de blé, vous vous incrusterez dans la toile et n'en ressortirez jamais!<br><br>

            Vous êtes encore sous le choc de votre arrivée inattendue au cœur d'un tableau de Vincent Van Gogh. Même si le cadre est bucolique, vous n'avez pas l'intention d'y finir vos jours. Vous décidez donc de vous mettre en action immédiatement. Avant d'entamer ce parcours initiatique, vous prenez quelques minutes pour avoir une vue d'ensemble sur cette cam-pagne provençale. Vous essayez de mémoriser chaque détail de cette magnifique toile, devenue pour vous réalité.<br><br>

            <strong>Placez deux piles face cachées : d'une part les cartes 1 à 4 et d'autre part la carte 5.<br><br></strong>
            Quand vous êtes prêts, appuyez sur le bouton ci-dessous et retournez les cartes 1 à 4 et observez les attentivement. Vous aurez une minute pour mémoriser ces cartes, et devrez ensuite les replacer face cachées puis retourner la carte 5. <br><br><br><br>

            <button id="beepPlayBtn" onclick="startBeepTimer()">Lancer le minuteur</button>
            <span id="beepStatus" style="margin-left:10px;color:#333;font-weight:600"></span>

            <br><br>

            Répondez à la question de la carte 5. Répondez avec des mots simples, au singulier, en toutes lettres (6 mots attendus, séparés d'un espace)<br><br>
            Vous pouvez ensuite retourner au choix l'une des cartes contre une pénalité de deux minutes.<br><br>
                    `,
                reponses: ["IMALLCHEAT","deux coquelicots blé olivier blanc bleu","deux coquelicots blé olivier bleu blanc"],
                indices: ["Retourner Carte 1", "Retourner Carte 2", "Retourner Carte 3", "Retourner Carte 4"]
            },
            {
                titre: "Couleurs et Odeurs",
                histoire: `
<strong>Prenez les cartes 6 à 8 ainsi que la carte 34.</strong><br><br>
<br><br>
Voilà, vous avez bien intégré les éléments de ce tableau. Maintenant, ouvrez grand vos cinq sens pour véritablement vous fondre dans l'œuvre. Vincent Van Gogh a peint ce tableau en juillet 1889, à Saint-Rémy-de-Provence. Sentez-vous la chaleur? Entendez-vous les grillons? Imprégnez-vous des odeurs et des couleurs. Observez les insectes. Ils ont peut-être quelque chose à vous dire...<br><br>
<strong>Mot clef pour identifier le grillon que l'on recherche ?</strong>

                `,
                reponses: ["IMALLCHEAT","violon","musique"],
                indices: ["Le plus simple est de procéder par élimination"]
            },
            {
                titre: "La vie d'Artiste",
                histoire: `
<strong>Prenez les cartes 9 à 14, ainsi que la carte 35.</strong><br><br>
<br><br>
Le grillon au violon est un artiste, il vous conduit jusqu'à une cache, en bordure du champ de blé, dans laquelle vous trouvez de jolis petits cartons. Quels messages peuvent-ils bien contenir? A vous de décoder!<br><br> (pas de ponctuation, que des espaces)

                `,
                reponses: ["IMALLCHEAT","as-tu bien vendu la vigne rouge"],
                indices: ["Quelle est la place d'un point d'interrogation en général ?","Une échelle d'intensité de couleur, ça vous parle ? Dans quel ordre classer les couleurs ?","On remplit des lignes, mais on lit des colonnes."]
            },
            {
                titre: "Étape 4 (template)",
                histoire: `
<strong>Prenez les cartes 15 et 16, ainsi que la carte 36.</strong><br><br>
<br><br>
Il s'agit d'une question que Vincent Van Gogh pose à son frère, marchand d'art. Le peintre a vécu dans la pauvreté et il a vendu un seul tableau de son vivant: La Vigne rouge. C'est d'ailleurs principalement son frère Théo qui subvenait à ses besoins. Pour savoir quelles étaient les relations de Vincent avec son frère, étudiez cet extrait d'une de ses lettres et partez à la recherche du message dans le message.<br><br>
<br><br>
<strong>Alors, comment étaient Vincent par rapport à son frère ?</strong>
                `,
                reponses: ["IMALLCHEAT","proche","proches"],
                indices: ["Certaines lettres ressortent dans cette lettre de Vincent Van Gogh","Pour rappel, on lit de gauche à droite et de haut en bas"]
            },
            {
                titre: "Fraternité",
                histoire: `
<strong>Prenez les cartes 17 à 21, ainsi que la carte 37.</strong><br><br>
<br><br>
Théo et Vincent sont restés proches toute leur vie. Théo est décédé six mois après son frère: ils sont d'ailleurs enterrés côte à côte. Savez-vous combien de lettres ils ont échangées des 19 ans de Théo à la mort de Vincent ? Admirez les tournesols, et ne perdez pas de temps, les minutes filent! (on vous demande d'arrondir à la demi-centaine la plus proche)
                `,
                reponses: ["IMALLCHEAT","650"],
                indices: ["Vous avez 5 éléments à trouver","Observez leurs couleurs ou bien leur ordre d'apparition","On additionne du bas vers le haut"]
            },
            {
                titre: "Les Tourbillons",
                histoire: `
<strong>Prenez les cartes 22 à 27, ainsi que la carte 38.</strong><br><br>
<br><br>
Ce que vous voyez ensuite vous fait lever les yeux vers le ciel. Pendant l'été 1889, Vincent Van Gogh avait peint plusieurs petites versions de Champ de blé avec cyprès. Les tourbillons sont caractéristiques de cette série, ainsi que les différentes couches de peinture qu'il superpose et qui restent visibles. Le tableau La Nuit étoilée fait partie de cette série. L'artiste applique la peinture sur sa toile, par touches de pinceaux, sans mélanger les couleurs sur sa palette. Vous trouvez, posé devant un olivier, un petit panneau avec cette question: «Pourquoi peindre des triptyques ou des séries de tableaux? »<br><br>
<br><br>
<strong>Réécrire la phrase sans ponctuation, et en complétant les lettres manquantes.</strong>
                `,
                reponses: ["IMALLCHEAT","pour affiner son art van gogh aimait peindre plusieurs tableaux sur des sujets similaires"],
                indices: ["Les 2 lettres en rouge (V et J) ont été ajoutées, car elles n'ont pas de signes correspondants","Il existe 4 signes différents pour traduire un espace entre deux mots"]
            },
            {
                titre: "Maison d'Artistes",
                histoire: `
<strong>Prenez les cartes 28 à 33, ainsi que la carte 39.</strong><br><br>
<br><br>
Vincent Van Gogh rêvait de fonder une maison d'artistes à Arles, mais cela n'a pas pu se faire. Pour lui, le midi de la France, avec ses paysages très contrastés, était le lieu de création idéal. Il invita, dans la maison jaune qu'il louait, un de ses amis à partager son atelier avec lui, pour ensuite faire venir d'autres peintres avant-gardistes comme eux. Pour savoir de qui il s'agit, hâtez-vous de traverser les champs de blé et de trouver ce qui s'y cache.
                `,
                reponses: ["IMALLCHEAT","gauguin"],
                indices: ["La carte 33 vous indique combien de détails correspondent à la peinture et comment les ranger","Quelle est la plus simple façon de transformer des chiffres en lettres ?","Quel rapport faites-vous entre les couleurs des deux dernières lignes du tableau ?"]
            },
            {
                titre: "L'Oreille Coupée",
                histoire: `
<strong>Prenez les cartes 34 à 37, ainsi que la carte 40.</strong><br><br>
<br><br>
Paul Gauguin est resté deux mois à Arles avec Vincent Van Gogh. Leur relation était amicale, mais parfois houleuse. Un soir de décembre 1888, les deux peintres se disputent. Paul Gauguin s'enfuit et Vincent Van Gogh est retrouvé avec l'oreille tranchée. Cet épisode est immortalisé dans des autoportraits, dont Autoportrait à l'oreille bandée et à la pipe. Vous êtes dans la dernière ligne droite: vite, vous devez maintenant vous plonger dans les titres des tableaux que le génie de la peinture a réalisés à Saint-Rémy-de-Provence.<br><br>
<br><br>
<strong>De quelle année est cette citation ? (elle peut se calculer avec les éléments à votre disposition)</strong>
                `,
                reponses: ["IMALLCHEAT","1874"],
                indices: ["Les mots de la grille sont à l'horizontale ou à la verticale dans un seul sens.","Vincent Van Gogh perdait parfois un peu la tête, ses propos se mélangeaient, mais conservaient malgré tout une certaine logique.","Essayez l'alternance 2 1 2 1..."]
            },
        ]
    },



    5: {
        titre: "Le Code-Secret de Michel-Ange",
        duree: 45 * 60,
        messageFinal: `
<h3>Scénario positif</h3><br><br>
C'est donc le cardinal Roncalli qui est passé sous le doigt de la sibylle de Delphes, à 15 heures tapantes. Vous, les cardinaux français, avez voté en sa faveur et, grâce à vous, il est élu ! Bravo, vous avez réussi à décrypter les conseils de ce génie de Michel-Ange qui réalisa, 20 ans après le plafond, à plus de 60 ans, cette fresque monumentale du Jugement dernier, dont on dit que le pape de l'époque serait tombé à genoux devant tant de beauté. Ce 28 octobre 1958, c'est celui qui prendra le nom de Jean XXIII qui est élu. Voilà, vous pouvez enfin sortir, le conclave est achevé. Et le plafond de la chapelle Sixtine n'a plus aucun secret pour vous!<br><br>
<br><br>
<h3>Scénario négatif</h3><br><br>
Dommage, vous n'avez pas réussi à comprendre assez vite les messages du grand Michel-Ange! Vous voilà toujours enfermés dans la chapelle Sixtine, comme Jonas dans le ventre de la baleine. Il ne vous reste donc plus qu'à invoquer le Créateur pour qu'il vous libère sans trop tarder... Profitez-en pour étudier l'évolution artistique de Michel-Ange entre ses deux œuvres présentes dans la chapelle Sixtine. Admirez encore leur beauté et la complexité de la représentation du corps humain qu'il maîtrisait à la perfection!
            `,
        etapes: [
            {
                titre: "En Conclave",
                histoire: `
Nous sommes en 1958, à Rome. Vous êtes des cardinaux français chargés d'élire le prochain pape. Vous êtes donc enfermés dans la chapelle Sixtine depuis trois jours et devez procéder au onzième tour de vote, qui, vous l'espérez, sera le dernier. Vous venez de vous installer à vos places quand vous entendez une voix vous chuchoter, en français: «Je suis Michel-Ange, levez les yeux et observez mes fresques et vous saurez comment faire pencher les votes pour désigner le prochain pape. Vous décidez de vous prendre au jeu et vous voilà embarqués dans un étrange voyage au milieu des peintures bibliques de l'artiste que l'on a surnommé le « Divin ». Gardez, malgré tout, les pieds sur terre, car le prochain vote a lieu dans 45 minutes!<br><br>
<br><br>
Vous êtes donc enfermés dans la chapelle Sixtine pour élire le successeur du pape Pie XII et vous prenez la mesure de votre täche: désigner, parmi les cardinaux présents, lequel sera le prochain pape. Vous commencez à vous impatienter, après tant de tours de scrutin infructueux. Vous mourez d'envie de quitter cette chapelle où vous passez toutes vos nuits et tous vos jours depuis le 25 octobre. Pourtant, tant que le nouveau pape ne sera pas élu, impossible de quitter les lieux. Alors, faites en sorte que la dési-gnation du pape se fasse rapidement. Commencez par trouver le mot mystère indispensable à votre sortie!<br><br>
<br><br>
<strong>Prenez les cartes 1 à 3.</strong>
                `,
                reponses: ["IMALLCHEAT","clé","cle","clef"],
                indices: ["Ces trois oeuvres bien placés vous feront découvrir le mot mystère"]
            },
            {
                titre: "La Création d'Adam",
                histoire: `
<strong>Prenez les cartes 4 à 12 ainsi que la carte 34.</strong><br><br>
<br><br>
Vous comprenez que c'est la clé qui ouvrira la porte de la chapelle Sixtine, une fois le pape élu. Vous avez donc décidé d'accepter l'aide de Michel-Ange pour cette élection, car il semble justement en mesure de vous donner quelques clés. Ce sont donc les yeux levés vers le plafond que vous vous interrogez sur ce que ce grand artiste cherche à vous dire. Les magnifiques fresques, commandées par le pape Jules II, illustrent le récit biblique de la Genèse. Vos regards se dirigent spontanément vers la fameuse repré-sentation de La Création d'Adam.<br><br>
<br><br>
<strong>Texte à trous :</strong> Mots manquants, dans l'ordre,séparés par des espaces.
                `,
                reponses: ["IMALLCHEAT","dieu cerveau connaissance utérus vie omnipotent doigt adam"],
                indices: ["Un tableau, des mots, des trous","Une suite de lettres peut vous inspirer pour placer les cartes dans un certain ordre."]
            },
            {
                titre: "Les Envoyés de Dieu",
                histoire: `
<strong>Prenez les cartes 13 à 17 ainsi que la carte 35.</strong><br><br>
<br><br>
Vous voilà au cœur de l'œuvre du grand artiste et sous l'œil du créateur de l'Univers. Ce chef-d'œuvre nécessita quatre ans de dévouement physique et créatif à Michel-Ange. Vous continuez à observer les fresques repré-sentant le déluge avec Noé et le jardin d'Éden. Puis votre regard s'abaisse, et vous admirez les personnages siégeant sur des trônes: l'un d'entre eux vous est très familier. Qui est-il et à quel groupe appartient-il? Michel-Ange a certainement un message pour vous!<br><br>
<br><br>
<strong>Quel est ce message ?</strong>
                `,
                reponses: ["IMALLCHEAT","suivez le regard de Jonas","le regard de jonas"],
                indices: ["Les réponses se trouvent dans la bible","Imaginez que les deux grilles soient superposées et que les cases non bleues soient transparentes."]
            },
            {
                titre: "Les Cardinaux Favoris",
                histoire: `
<strong>Prenez les cartes 18 à 22 ainsi que la carte 36.</strong><br><br>
<br><br>
En suivant le regard de Jonas, vous arrivez sur le visage de Dieu, qui se dresse face à lui. Vous comprenez alors que Dieu ne vous abandonnera pas dans votre lourde mission de désigner un pape. Comme il a libéré Jonas du ventre de la baleine, il vous soutiendra. Forts de cette conviction, vous écoutez le résultat du vote qui vient de se terminer, mais qui reste infruc-tueux. Trois cardinaux se partagent la totalité des voix: lesquels et quels scores?<br><br>
<br><br>
Dans l'ordre, donnez le nombre de voix des cardinaux Masella, Ottaviani, Siri, Ruffini, Tisserant, Agagianian, Lercaro, Roncalli.
                `,
                reponses: ["IMALLCHEAT","18 0 0 0 0 17 0 15","18 17 15"],
                indices: ["Demandez-vous à quoi servent les couleurs.","Huit cardinaux sont parmi les favoris, mes quels sont leurs noms ?"]
            },
            {
                titre: "Papes et Artistes",
                histoire: `
<strong>Prenez les cartes 23, 24 et 37</strong><br><br>
<br><br>
À présent, vous avez les éléments pour établir votre stratégie de vote. Cela dit, il vous reste à deviner quel est le dessein de Dieu! Michel-Ange, de son vivant, a connu le pape Jules II qui lui avait commandé son monument funéraire, projet de longue haleine. Bien qu'inabouti, on peut l'admirer dans la basilique Saint-Pierre-aux-Liens de Rome. C'est lui aussi qui lui a com-mandé les fresques du plafond de la chapelle Sixtine. Il était, paraît-il, très impatient de les découvrir! Il a d'ailleurs quitté ce monde peu de temps après.<br><br>
<br><br>
<strong>En quelle année déjà?</strong>
                `,
                reponses: ["IMALLCHEAT","1513"],
                indices: ["Dans la suite logique, vous observez une constante et des nombres en progression.","Interessez-vous aux chiffres qui composent les nombres.","Un nombre visible s'additionne à un autre qui lui ressemble."]
            },
            {
                titre: "Position des Corps",
                histoire: `
<strong>Prenez les cartes 25 à 29 ainsi que la carte 38</strong><br><br>
<br><br>
En cette période de la Renaissance, quand Jules II fait appel à Michel-Ange, ce dernier est déjà connu comme sculpteur, grâce notamment à son David, taillé dans le marbre. Il le revendiquait et ne se considérait pas comme peintre, mais comme sculpteur. Sa façon de figurer les corps, dont il connaissait parfaitement l'anatomie, en est la démonstration. Vous regardez de plus près les personnages du plafond et remarquez combien leurs positions sont dynamiques. Vous devinez qu'un message se cache derrière ces représentations. Vite, l'heure du vote approche!<br><br>
<br><br>

                `,
                reponses: ["IMALLCHEAT","15","15 figures","quinze","quinze figures"],
                indices: ["Les différents personnages sont-ils composés à partir des mêmes formes géométriques ?"]
            },
            {
                titre: "Eve et les Sibylles",
                histoire: `
<strong>Prenez les cartes 30 à 33 ainsi que la carte 39</strong><br><br>
<br><br>
Vous ne savez pas du tout en quoi ce nombre vous sera utile, mais vous le gardez en tête. Vous pensez à toute l'œuvre de Michel-Ange et vous sou-venez qu'il réalisa sa Pieta à seulement 24 ans. De nouveau les yeux levés vers ce plafond de 800 m², vous observez, tour à tour, ses neuf scènes centrales, regroupées en trois thèmes: la création, le jardin d'Éden et le déluge. Vous observez plus particulièrement Éve et les personnages féminins sur leurs trônes. Vous trouvez alors un petit papier glissé sur l'une de vos tables comportant une suite de lettres.<br><br>
<br><br>
<strong>Déchiffrez le message caché sur les deux cartes,</strong> n'ajoutez pas de ponctuation.
                `,
                reponses: ["IMALLCHEAT","les femmes au meme rang que les prophetes sont des sibylles suivez celle de delphes"],
                indices: ["En 1958, les machines à écrire avaient déjà un clavier assez similaire à ceux de nos ordinateurs actuels, mais avec des différences","Les lettres du clavier se lisent de gauche à droite et de haut en bas. On ne tient compte que des lettres."]
            },
            {
                titre: "Fumée Blanche",
                histoire: `
<strong>Prenez la carte 40</strong><br><br>
<br><br>
Que peut bien signifier suivre la sibylle de Delphes? Vous observez atten-tivement cette prophétesse de la Grèce antique: elle tend son doigt vers le bas, comme pour désigner quelqu'un. L'heure du vote approche! Que veut vous dire le « Divin»? Si vous réussissez à comprendre le message de Michel-Ange, alors vous saurez quel cardinal élire et une fumée blanche signalera la fin du conclave. Soyez donc attentifs et surtout rapides!
                `,
                reponses: ["IMALLCHEAT","cardinal roncalli","roncalli"],
                indices: ["Seuls trois des huits cardinaux ont leur véritable ombre. Lesquels ?","Pour savoir pour quel cardinal voter, repérer celui qui est situé, dans la grille, après les éléments permettant de produire la fumée blanche"]
            }
        ]
    },




    6: {
        titre: "Tableau volé de Gustav Klimt",
        duree: 45 * 60,
        messageFinal: "🏁 Fin du scénario 3 — Bravo !",
        messageFinalPositive: `Vous êtes maintenant convaincus que ce tableau est authentique. Schubert au piano Il aura eu un destin extraordinaire ! Surtout, vous avez réussi à l'authentifier avant que la vente aux enchères ne débute. Félicitations, vous avez parfaitement agi en tant qu'experts de Gustav Klimt et votre connaissance de ce peintre, à la renommée universelle, est remarquable! Vous pouvez être fiers car, ainsi, l'acheteur est assuré que son acquisition sera un très bon investissement.`,
        messageFinalNegative: `La vente aux enchères débute et vous n'avez pas terminé l'authentification du tableau! Pris de court, vous annoncez qu'il est bien de Klimt. À cause de votre lenteur et de votre manque de professionnalisme, c'est peut-être un faux qui sera vendu ici, à prix d'or. Croisez les doigts pour que ne fasse jamais surface un authentique Schubert au piano II; car ce jour-là, vous risquerez d'avoir de gros ennuis!`,
        etapes: [
            {
                titre: "Une technique à part",
                histoire: `
Vous êtes une équipe d'historiens d'art, spécialistes du symbolisme et vous êtes chargés d'enquêter sur les tableaux disparus de Gustav Klimt, célèbre peintre de la fin du XIX siècle. Un tableau aurait été retrouvé en Autriche et une vente aux enchères est prévue dans 45 minutes. Vous devez, avant qu'elle ne débute, retracer la vie de Klimt et le parcours de ces tableaux portés disparus, depuis leur confiscation par les nazis, à Vienne, en 1938, au moment de l'annexion de l'Autriche par l'Allemagne. Il vous faut prouver, en expertisant cette cœuvre, Schubert au piano II, qu'elle aurait pu être peinte par Klimt et resurgir aujourd'hui. Si ce n'est pas le cas, il s'agirait alors d'une copie et sa mise à prix ne sera plus du tout la même !<br><br>
<br><br>
En tant qu'historiens de l'art, vous connaissez très bien Gustav Klimt et son œuvre. Vous vous concentrez donc sur cette période de la fin du XIX siècle pour étudier en détail sa façon de peindre à cette époque. Au moment où Klimt peint ce tableau, il vient de fonder la Sécession viennoise. un groupe de 40 artistes novateurs qui décide de rompre avec l'acadé-misme. Klimt est cependant formé à l'art classique. Ce tableau, Schubert au piano II, marque la transition entre sa période réaliste et celle où il adoptera son style Art nouveau. Essayez d'en savoir plus sur ce peintre quelque peu mystérieux...<br><br>
<br><br>
<strong>Prenez les cartes 1 à 3 ; complétez le texte à trous (séparez les différents mots par des espaces)</strong>
                `,
                reponses: ["IMALLCHEAT","savoir regarde cherche découvrir suis veux","savoir regarde cherche decouvrir suis veux"],
                indices: ["Soyez attentifs au moindre détail et conjuguez !"]
            },
            {
                titre: "Art nouveau",
                histoire: `
                <strong>Prenez les cartes 4 à 10 ainsi que la carte 34.</strong><br><br>
<br><br>
                Gustav Klimt le dit lui-même, il est à l'intérieur de ses toiles. Ainsi, observez un maximum de ses œuvres, avant que la vente aux enchères ne débute. Déjà, mettez-vous dans le contexte artistique de cette année 1899. Les artistes du mouvement de la Sécession voulaient disposer d'un bâtiment où exposer des œuvres contemporaines du monde entier. Klimt en réalisa les esquisses et Joseph Maria Olbrich éleva en six mois ce joyau de Vienne, inauguré en 1898. Il s'agit du palais de la Sécession, couronné d'un dôme de feuilles de laurier dorées.<br><br>
                <br><br>
                <strong>À votre avis, combien de feuilles de laurier composent ce dôme?</strong>

                `,
                reponses: ["IMALLCHEAT","3000","trois milles"],
                indices: ["Observez la photo et faites un rapprochement avec la phrase","Trois suites de chiffres et de taches de couleurs pour trois mots","Epoque - Art - Liberté en allemand : leurs lettres deviennent des chiffres"]
            }
            ,
            {
                titre: "Une vie entre deux siècles",
                histoire: `
<strong>Prenez les cartes 11 à 13 ainsi que la carte 35.</strong><br><br>
<br><br>
Gustav Klimt a vécu entre deux siècles et il incarne ce passage de l'empire des Habsbourg, et sa culture austro-hongroise, à la modernité du xx siècle. Il a été le promoteur d'un art global, d'un art intégré à la vie. L'exemple le plus frappant réside dans sa fameuse frise en mosaïque du palais Stoclet à Bruxelles, avec son arbre de vie. Trouvez vite les matériaux qui composent cette fresque!<br><br>
<br><br>
Réécrire les mots par ordre alphabétique, au singulier, sans accents et séparés d'espaces
                `,
                reponses: ["IMALLCHEAT",
                "corail faience marbre or pierres semi-précieuses",
                "corail faience marbre or pierres",
                "corail faience marbre or pierres semi-precieuses",
                "corail faience marbre or pierres semiprecieuses",
                "corail faience marbre or pierres semi precieuses",
                "corail faience marbre or pierres semiprécieuses",
                "corail faience marbre or pierres semi précieuses",
            ],
                indices: ["Quel rapprochement peut-on faire avec la liste de mots et la grille de lettres ?","Les mots peuvent être séparés en deux listes.","Laquelle des deux listes élimine-t-on ?"]
            }
            ,
            {
                titre: "Les musiciens",
                histoire: `
<strong>Prenez les cartes 14 à 16 ainsi que la carte 36.</strong><br><br>
<br><br>
Le sous-sol du palais Stoclet abrite la célèbre frise de Beethoven, réalisée par Gustav Klimt, sur le thème de la Symphonie n *9, en hommage au grand compositeur. Ce lien avec les grands musiciens est visible avec le tableau Schubert au piano II, mais également avec le Portrait de Josef Pembaur. Ce tableau qui date de 1890 est hors normes. Gardez-le en mémoire, il vous servira de référence pour votre authentification. Rappelez-vous plus spécialement des détails dont il est orné.

                `,
                reponses: ["IMALLCHEAT","7","sept","sept étoiles","sept etoiles","7 etoiles","7 étoiles"],
                indices: ["Rappelez-vous de vos cours de mathématiques avec les plus petits dénominateurs communs","Le secret est de pouvoir attribuer des valeurs chiffrées aux objets"]
            }
            ,
            {
                titre: "Klimt et les femmes",
                histoire: `
<strong>Prenez les cartes 17 à 20 ainsi que la carte 37.</strong><br><br>
<br><br>
En dehors de ces musiciens, Klimt a peint très peu de portraits d'hommes. Il aimait surtout peindre les femmes pour lesquelles il avait de l'admiration. Bien qu'il ne se soit jamais marié, il a eu plusieurs enfants, de femmes différentes. Outre sa relation durable avec sa muse, Emilie Louise Flöge, il a eu des histoires d'amour avec Alma Schindler, âgée de 19 ans, et avec de nombreux modèles tels que Maria Učická et Marie Zimmermann (Mizzi).<br><br>
<br><br>
<strong>Quelle femme est présente sur le tableau que vous devez authentifier?</strong>

                `,
                reponses: ["IMALLCHEAT","Marie Zimmermann","Marie","Zimmermann"],
                indices: ["Indice 1"]
            }
            ,
            {
                titre: "Serena Lederer",
                histoire: `
<strong>Prenez les cartes 21 à 27 ainsi que la carte 38.</strong><br><br>
<br><br>
Gustav Klimt a peint de nombreux portraits de femmes de la haute société viennoise, comme Johanna Staude ou Margarethe Stonborough Wittgenstein, ou encore Serena Lederer. Cette dernière, issue de la grande bourgeoisie juive viennoise, est l'épouse d'un riche industriel, grand ama-teur d'art et mécène. Observez bien le portrait de Serena Pulitzer Lederer, peint par Klimt, et tout spécialement sa signature, afin de pouvoir la com-parer à celle du Schubert au piano II. Soyez rapides, l'heure de la vente aux enchères approche.
                `,
                reponses: ["IMALLCHEAT","gustav klimt"],
                indices: ["Indice 1"]
            }
            ,
            {
                titre: "Spoliations",
                histoire: `
<strong>Prenez les cartes 28 à 33.</strong><br><br>
<br><br>
La signature est très ressemblante mais, somme toute, facile à imiter. Vous vous penchez maintenant sur le trajet du tableau Schubert au piano II, de l'appartement des Lederer au château d'Immendorf. Essayez d'en savoir plus sur ce qui a pu se passer durant cette sombre époque de spoliation de la population juive par les nazis. Pour vérifier si ce tableau est une copie ou pas, plongez-vous dans les archives de l'époque!
                `,
                reponses: ["IMALLCHEAT","531642","5-3-1-6-4-2"],
                indices: ["Indice 1"]
            }
            ,
            {
                titre: "Un destin extraordinaire 1/2",
                histoire: `
<strong>Prenez la carte 39.</strong><br><br>
<br><br>
Schubert au piano Il aurait-il pu échapper à l'incendie ? Vous continuez d'éplucher les archives des années 1938 à 1945. Il suffirait d'une ligne qui  atteste que tous les tableaux de la collection Lederer stockés au château d'Immendorf n'ont pas péri dans les flammes. Plus une minute à perdre, la vente est sur le point de commencer!<br><br>
<br><br>
Quelle <strong>phrase</strong> trouvez-vous ?
                `,
                reponses: ["IMALLCHEAT","certains tableaux ont été sortis du chateau avant l'incendie","certains tableaux ont été sortis du chateau avant lincendie","certains tableaux ont ete sortis du chateau avant l'incendie","certains tableaux ont ete sortis du chateau avant lincendie"],
                indices: ["Les cartes 1 à 3 sur fond incendie permettent d'écrire une phrase déterminante"]
            },
            {
                titre: "Un destin extraordinaire 2/2",
                histoire: `
<strong>Prenez la carte 40.</strong><br><br>
<br><br>
Quel <strong>mot</strong> trouvez-vous ?

                `,
                reponses: ["IMALLCHEAT","authentique"],
                indices: ["Une phrasse en miroir vous auiguille et vous indique comment reporter certaines lettres dans la ligne orange.","La grille des anagrammes à rallonge vous suggère un procédé pour gagner du temps"]
            }
        ]
    },


// faire toute la deuxieme boite d'AT/Ali






    // SCENARIO 3 -------- TEPLATE
    999: {
        titre: "Scénario 3 – Template",
        duree: 45 * 60,
        messageFinal: "🏁 Fin du scénario 3 — Bravo !",
        messageFinalPositive: ``,
        messageFinalNegative: ``,
        etapes: [
            {
                titre: "Étape 1 (template)",
                histoire: `

                `,
                reponses: ["IMALLCHEAT","ok"],
                indices: ["Indice 1"]
            }
        ]
    }
};

// Export global `scenarios` for usage par `game.js` (navigateur global)
