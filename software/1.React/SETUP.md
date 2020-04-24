# Setup

## Node & IDE

Pour ce workshop, nous vous demandons d'installer:
- [node (version 10 minimum)](https://github.com/nodejs/node) : interpréteur de javascript
- [npm](https://www.npmjs.com/) : gestionnaire de dépendance pour node
- [npx](https://www.npmjs.com/package/npx) : executeur de commandes node
- l'extension web react devtools ([firefox](https://addons.mozilla.org/fr/firefox/addon/react-devtools/)/[chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi))
- l'extension vscode [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


Pour cela:
- sous fedora: `sudo dnf install nodejs`
- sous ubuntu: `sudo apt install nodejs npm`

Puis `sudo npm install -g npx`

Pour commencer, initialisez votre projet:
```
npx create-react-app my-app
cd my-app
```

Par la suite, installez les packages eslint:
```
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```

Créez le fichier `.eslintrc` à la racine cd `my-app` et inserez-y le texte ci-dessous:
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
</Details>

Votre projet est à présent initialisé et votre IDE est prêt à normer votre code. Cependant, pour que ESlint fonctionne correctement, vous devez ouvrir vscode dans le dossier `my-app`, pas directement `src`.

Enfin, lancez:
```sh
npm start
```

**Si une page s'ouvre dans votre Browser avec le logo de React qui tourne, vous pouvez passer aux exercices**