# 23 Workshop - Front Setup

## 1. Install

Rendez-vous dans le dossier `frontend`

```shell
    cd frontend
    npm install
```

## 2. Lancement du projet

Pour lancer votre projet vous pouvez faire un :

```shell
    npm start
```

Pour vérifier que tout fonctionne correctement, ouvrer `http://localhost:3000/hello`.

Vous devez avoir cette page qui s'affiche :
(IMAGE)

## 3. Start workshop

[Go back to the exercise](./README.md)

## En cas d'erreur

Si jamais, même après avoir redémarré votre IDE et actualiser votre page web, vous avez une erreur par rapport à vos packages.

Vous pouvez essayer de les installés manuellement (Attention cette étape n'est normalement pas nésésaire) :

```shell
  npm i styled-components
  npm install --save @types/styled-components
  npm i react-router-dom
  npm install --save @types/react-router-dom
  npm install --save-dev @babel/preset-env
  npm install axios
  npm i @types/axios
  npm i
```

Maintenant vous pouvez essayer de relancer votre projet.

```shell
   npm start 
```

En cas de problème, contacter un encadrant PoC.
