# Workshop 1 - Todo List React/Firebase

## Step 0: initialisation

Toutes les informations requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)

## Todo List

Les `components` sont l'essence de React. Ils représentent un élément de la page web. Leur imbrication permet de structurer une page et d'éviter de réécrir plusieurs fois un même code.  
Vous allez dès à présent en créer un !
> Durant ce workshop, vous avez interdiction d'utiliser des classes ! Vous devez impérativement faire des `Functional Components`.

### Step 1: `Task` component

Créez un component dans lequel on seront affichés:
  - la description de la tâche
  - une checkbox qui indique son statut (todo/done)

Ce component représente une tâche individuelle de votre Todolist. La `description` et le `statut` doivent être recues depuis les [props](https://fr.reactjs.org/docs/components-and-props.html), par exemple:

```js
<Task description="Finir la step 1" statut={false}>
```


### Step 2: `List` component

Créez un component qui affiche une liste de `Task`. Pour cela, créez un Array d'objets:

```js
import React, { useState } from 'react';

// Dans votre component List
const [taskList, setTaskList] = useState([{description: "finish workshop", statut: false}]);
```
- `taskList` est une variable const qui ne peut être éditée que par la fonction `setTaskList` qui lui est associée
- `taskList` contient un array d'object avec pour l'instant un seul index
- les valeures d'un index representent les informations d'une `Task`
- Ajouter ou supprimer un index de `taskList` revient à ajouter ou supprimer une `Task`
- Pouvoir changer le statut de la tâche

Votre component `List` doit:
- Afficher une liste de `Task`
- Afficher tout en haut une zone de texte et un bouton permettant d'ajouter une nouvelle `Task`
- Afficher un bouton à côté de chaque `Task` permettant de la supprimer

> Renseignez vous sur les `hooks` en React  
> Pour manipuler l'array d'objets, `splice` et `concat` vous seront utiles

## Firebase

Ça se complique, à présent, pour sauvegarder nos tâches, nous allons passer par la base de données NoSQL de Google, à savoir `Firebase`. (Realtime Database, pas Firestone)

### Step 1: Créez un projet Firebase

Pour se faire, rendez vous sur [ce tutoriel](https://firebase.google.com/docs/web/setup) afin de préparer votre base de données et récuperer vous identifiants pour interagir avec elle depuis votre applicaton React. De plus, ajoutez le package `firebase` à votre `package.json`:
```
npm install firebase
```

### Step 2: Droit d'édition

Les bases des données fournies par Firebase sont par défaut non-éditable sans authentification, vous pouvez simplement outre-passer cette contraintre en allant dans `database` > `realtime database` > `rule` et en remplaçant les rêgles actuelles par celle-ci
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Step 3: Intéractions

Firebase est très bien documenté, pensez à faire un tour sur la [documentation](https://firebase.google.com/docs/).  
Si vous commencez à être perdu, visitez cette [page](https://firebase.google.com/docs/reference/js/firebase.database.Reference#on).

## Bonus - Styling
Si vous êtes arrivé jusqu'à la fin, bien joué !
Vous pouvez si vous le souhaitez ajouter du style à vos components, pour cela, vous avez plusieures options :
- Découvrir les joies du [css](https://malcoded.com/posts/react-component-style/), voici un bon tutotiel pour apprendre à manier les [flex-box](https://flexboxfroggy.com/#fr).
- Passer par [Bootstrap](https://getbootstrap.com/)
- Installer des packages avec des components pré-faits ey stylisés comme
  - [Material UI](https://material-ui.com/)
  - [Material Design](https://material.io/design/)
  - [Ant Design](https://ant.design/)


## Author
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Théo Ardouin](https://github.com/CrystallizedYou)
