# Workshop 1 - Todo List React/Firebase

## Pré-requis

Pour ce workshop, nous vous demandons d'installer:
- node.js ainsi que npm/yarn
- l'extension web react devtools (firefox/chrome)
- l'extension vscode ESlint


Pour commencer, initialisez votre projet.
```
npx create-react-app my-app
cd my-app
npm start
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
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "jsx-a11y/label-has-associated-control": 0,
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
Puis installez les packages eslint pour le projet:
```
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```
</Details>

Votre projet est à présent initialisé et votre IDE est prêt à normer votre code.

## Todo List

Les `components` sont l'essence de React. Ils représentent un élément de la page web. Leur imbrication permet de structurer une page et d'éviter de réécrir plusieurs fois un même code.  
Vous allez dès à présent en créer !
> Durant ce workshop, vous avez interdiction de coder des classes ! Vous devez impérativement faire des `Pure Function Component`.

### 1. `task` component

Créez un component qui contient les valeurs suivantes:
  - la description de la tâche
  - son statut (todo/done)

Ajouez y une checkbox pour mettre à jour son état. Ce component représente une tâche individuelle de votre liste

> Renseignez vous sur les `hooks` en React

### 2. `list` component

Créez un component qui contient une liste de `task`. Il doit être capable de:
- créer une nouvelle tâche
- supprimer une tâche existante


**Pour l'instant, les données ne sont pas souvegardées, nous allons maitenant les héberger en ligne.**

## Firebase

Ça se complique, à présent, pour sauvegarder nos tâches, nous allons passer par la base de données NoSQL de Google, à savoir `Firebase`. (Realtime Database, pas Firestone)

### 1. Créez un projet Firebase

Pour se faire, rendez vous sur [ce tutoriel](https://firebase.google.com/docs/web/setup) afin de préparer votre base de données et récuperer vous identifiants pour interagir avec elle depuis votre applicaton React. De plus, ajoutez le package `firebase` à votre `package.json`:
```
npm install firebase
```

### 2. Droit d'édition

Les bases des données fournies par firebase sont par défaut non-éditable sans authentification, vous pouvez simplement outre-passer cette contraintre en allant dans `database` > `realtime database` > `rule` et en remplaçant les rêgles actuelles par celle-ci
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### 3. Intéractions

Firebase est incroyablement bien documenté, pensez a faire a tour sur la [documentation](https://firebase.google.com/docs/).  
Si vous commencez à être perdu, visitez cette [page](https://firebase.google.com/docs/reference/js/firebase.database.Reference#on).

## Bonus - Styling
Si vous êtes arrivé jusqu'à la fin, bien joué !
Vous pouvez si vous le souhaitez ajouter du style à vos components. Pour cela, vous avez deux options :
- Découvrir les joies du [css](https://malcoded.com/posts/react-component-style/), voici un bon tutotiel pour apprendre à manier les [flex-box](https://flexboxfroggy.com/#fr).
- Passer par [Bootstrap](https://getbootstrap.com/)
- Installer des packages avec des components pré-faits comme
  - [Material UI](https://material-ui.com/)
  - [Material Design](https://material.io/design/)
  - [Ant Design](https://ant.design/)


## Author
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Théo Ardouin](https://github.com/CrystallizedYou)
