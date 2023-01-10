# Workshop CardBoard VR - Arizona Like

## Prérequis
---
Avoir la LTS (2020.3.0f1) d'unity installé sur votre ordinateur sous Windows.N'oubliez pas d'ajouter le module `Android build support` lors de l'installation d'Unity.

## Préparation de Unity
---

Installation par google: <https://developers.google.com/cardboard/develop/unity/quickstart>

Une première partie de setup est nécessaire pour vous permettre de faire tourner votre jeu en VR. Suivez attentivement chaque étape de cette partie et appelez un de vos encadrants au moindre doute.

Créez un nouveau projet. Assurez-vous bien d'avoir au préalable installé les modules de compilation pour les plateformes Android et IOS.

Dans Unity, ouvrez \[Window\]->\[Package Manager\].

Cliquez sur le \[+\] puis sur \[Add Package From git Url\] et collez cet url :

[https://github.com/googlevr/cardboard-xr-plugin.git](https://github.com/googlevr/cardboard-xr-plugin.git)

Dans \[File\]->\[Build settings\], choisissez comme plateforme de build Android. Confirmez votre choix en appuyant sur Switch Platform. Cliquez sur Open Scenes et sélectionnez HomeLand.

Dans \[Project Settings\]->\[Player\]->\[Resolution and Presentation\] mettez à jour l'option Default orientation à Landscape left.

Cliquez sur le menu Other Settings.

Dans la partie Graphics API, ne mettre que l'option OpenGL ES2 active.

Dans la partie Scripting Backend, sélectionnez IL2CPP.

Dans la partie Target Architectures cochez ARMv7 et ARM64.

Dans la partie Internet Access, passez l'option à required.

Dans la partie Package Name, mettez PoCVR.

Dans la partie API Target Level, renseignez la version d'Android de votre appareil.

Dans la section Build, cochez Custom Main Gradle Template.

Un nouveau fichier est apparu ici : Assets/Plugins/Android/mainTemplate.gradle. Ouvrez-le et ajoutez ces lignes dans la section dependencies :

implementation 'com.android.support:appcompat-v7:28.0.0'

implementation 'com.android.support:support-v4:28.0.0'

implementation 'com.google.android.gms:play-services-vision:15.0.2'

implementation 'com.google.protobuf:protobuf-lite:3.0.0'

Cliquez sur \[XR Plugin Management\] et cochez \[CardBoard XR Plugin\].

Puis dans \[File\]->\[Build Settings\], assurez-vous d'avoir branché votre appareil en mode débogage USB et développeur (disponible dans les paramètres de ce dernier).

## Arizona


### La scène

- Placer un plane dans votre scène et rajouter le package du zombie dans votre projet fourni par vos encadrants.
- Faites un clic droit sur votre caméra > xr > changer en xr-rig

### Le player

Pour plus de simplicité nous partons du principe que notre MainCamera à l'intérieur du XR Rig représente notre joueur.

- Crée un script sur la caméra qui détecte quand un zombie se trouve dans votre champ de vision (Raycast)
- Crée un script qui communique avec le précédant et tir un projectile quand un zombie est détecté. (Si le projectile ne rencontre aucun obstacle il doit se détruire au bout de X temps)

### Le zombie

- Rajouter des points de vie à votre zombie ainsi qu'une fonction lui infligeant des dégâts lorsqu'elle est appelée.
- Si votre zombie n'a plus de point de vie il doit être détruit.
- Le zombie se déplace en direction du joueur par défaut.

### assemblage

- Si le projectile touche une partie du zombie faites lui perdre des points de vie en fonction de la partie du corps touché. Si la partie touchée est un bras, la tête ou une jambe elle doit être détruite.
- La partie du corps du zombie que vous visez doit être colorié de la couleur de votre choix.

### Aller plus loin

- Intégrer le système de NavMesh pour faire en sorte que vos zombies se dirigent vers vous en crée automatiquement un chemin d'eux-mêmes.
- Rajouter une HUD pour le joueur indiquant des informations qui lui sont relatives:
  - nombre de zombies tués
  - Point de vie du zombie que vous visez
  - votre score
- Faire un système de spawner aléatoire pour les zombies
- Rajouter des shaders graphiques
- Faites en sorte d'avoir recours à plusieurs scripts pour que votre architecture respecte les principes de la single responsibility du SOLID.
