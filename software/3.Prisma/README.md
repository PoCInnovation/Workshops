# Workshop 3 - API Prisma2

Dans ce workshop, nous allons voir comment créer des API GraphQL à l'aide de [Prisma2](https://www.prisma.io/)

## Step 0: initialisation

Toutes les informations requises pour installer les dépendances du workshop sont disponibles dans [SETUP.md](./SETUP.md)

## Step 1: Récupérer les utilisateurs

Créez à présent une fonction `getUsers`:
- Elle ne prend pas de paramètres
- Elle renvoie la liste de tous les utilisateurs de la base de données

*À vous de trouver comment...*  
> Indice #1: nodejs gère très bien l'affichage d'objets en console.  
> Indice #2: la variable `prisma` est un objet.  

## Step 2: Récupérer les posts des utilisateurs

Créer la fonction `getPostByUsers`:
- Elle prend en paramètres
  - `userEmail`, l'email de l'utilisateur dont on veut  récuperer les posts
- Elle renvoie la liste des posts de l'utilisateur demandé

## Step 3: Créer un post

Vous allez maintenant ajouter des posts à vos utilisateurs car cela manque un peu de contenu.  
Créez la fonction `addPost`:
- Elle prend en paramètres:
  - `title`, le titre du post
  - `email`, l'email de l'utilisateur qui sera l'auteur du post
- Elle ajoute le post dans la base de données
- Elle renvoie le post crée

## Step 4: Supprimer un post/utilisateur

Créez deux fonctions:
- `removeUser` qui prend en paramètres:
  - `userEmail`, l'email de l'utilisateur qui sera supprimé
- `removePost` qui prend en paramètres:
  - `userEmail`, l'email de l'utilisateur auteur du post
  - `postId`, l'id du post qui sera supprimé
- Elles renvoient toutes les deux l'utilisateur/post supprimé

## Step 5: Apollo Server

Prisma nous permet de récuperer des données dans la base de données, mais il nous faut apr la suite permettre à un utilisateur de récuperer ces données. Nous utiliserons pour cela [Apollo server](https://www.apollographql.com/docs/apollo-server/) et [GraphQL Nexus](https://nexus.js.org/)

Il faut installer de nouveaux modules pour faire cela:

```sh
npm install graphql nexus-prisma apollo-server @nexus/schema
```

## Authors
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Naoufesse Berrada](https://github.com/nowlow/)
- [Cyril de Lajudie](https://github.com/Axoloot/)
