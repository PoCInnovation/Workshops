# Workshop 1 - Todo List React/Firebase

## Pré-requis

Pour ce workshop, nous vous demandons d'installer:
- node.js ainsi que npm/yarn
- l'extension web react devtools (firefox/chrome)
- l'extension vscode ESlint


Pour commencer, initialisez votre projet.
```
npm init react-app my-app
```

Créez le fichier `.eslintrc` à la racine et inserez-y le texte ci-dessous:
<Details><Summary><strong>Voir le fichier eslint</strong></Summary>

```json
{
  "extends": "airbnb",
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  }
}
```
</Details>

Votre projet est à présent initialisé et votre IDE est prêt à normer votre code.

> Durant ce workshop, vous avez interdiction de coder des classes ! Vous devez impérativement faire des `Pure Function Component`.

## Todo List

Les `components` sont l'essence de React. Ils reprensentent un élément de la page web. Leur imbrication permet de structurer une page et d'éviter de réécrir plusieurs fois un même code.  
Vous allez dès à présent en créer !

### 1. `task` component

Créez un component qui contient les valeures suivantes:
  - la description de la tâche
  - son statut:
    - todo
    - done

Ajouez y une checkbox pour faire changer son état. Ce component représente une tache individuelle de votre liste

> renseignez vous sur les `hooks`

### 2. `list` component

Créez un component qui contient une liste de `task`. Il doit être capable de:
- créer une nouvelle tâche
- supprimer une tâche exitante


## Firebase

Ça se complique, à présent, pour sauvegarder nos tâches, nous allons passer par la base de données NoSQLde Google, à savoir `Firebase`.

### 1. Créez un projet Firebase

Pour se faire, rendez vous sur [ce tutoriel](https://firebase.google.com/docs/web/setup) afin de préparer votre base de données et récuperer vous identifiants pour interagir avec elle depuis votre applicaton React. De plus, ajoutez le package `firebase` à votre `package.json`:
```
npm install firebase
```

### 2. TODO


## Bonus - Styling

Si vous êtes arrivé jusqu'a la fin, bien joué ! Vous pouvez si vous le souhaitez ajouter du style à vos component. Pour cela, vous pouvez:
- passer par [Bootstrap](https://getbootstrap.com/)
- installer des packages avec des components pré-faits comme
  - [Material UI](https://material-ui.com/)
  - [Material Design](https://material.io/design/)
  - [Ant Design](https://ant.design/)


## Authorter
- [Paul Monnery](https://github.com/PaulMonnery/)