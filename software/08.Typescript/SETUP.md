# Workshop 8 - Setup

## Outils

Pour ce workshop il vous faut installer les outils suivant :
  - [VSCode](https://code.visualstudio.com/) ou [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/) d'installé sur votre ordinateur
  - [NodeJS](https://nodejs.org/en/) >= 10 ([installation](https://lmgtfy.com/?q=how+to+install+nodejs))
  - [npm](https://www.npmjs.com/) (généralement installé avec NodeJS)

## Préparation

Télécharger les [sources](./source.zip) afin d'avoir une base pour commencer.

Les sources se composent des fichiers suivant :
 - `package.json` : Le gestionnaire de dépendances de NPM
 - `package-lock.json` : Un fichier contenant les versions de chaque dépendances utilisées sur le projet.
 - `tsconfig.json` : Un fichier de configuration pour le Typescript
 - `src/index.ts` : Exécute une simple fonction hello world
 
Vous n'avez plus qu'à suivre les étapes suivantes :
 - Créer un dossier `workshop-national-typescript`
 - Copier le fichier `source.zip` dans le dossier
 - Lancer la commande `unzip source.zip`
 - Installer les dépendances avec la commande `npm install`
 - Vérifier que tout fonctionne avec la commande `npm start`

Vous devriez obtenir le résultat suivant :

```sh
> ts-node src/index.ts

Welcome to the national workshop :)
```

Vous pouvez passer au [workshop](./README.md).
