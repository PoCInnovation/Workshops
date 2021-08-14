# Workshop 19 - Chat avec Socket.IO

✔ Comprendre les sockets

## Step 0 : Setup

Toutes les infos relatives à la préparation du workshop sont disponibles dans le [SETUP.md](./SETUP.md).

Veillez à avoir terminé ses étapes avant de passer à la suite.

Une cheatsheet sur les bases du Typescript est également disponible [ici](https://github.com/PoCInnovation/Workshops/blob/master/software/8.Typescript/HELP.md)

[Qu'est-ce qu'un socket ?](https://socket.io/docs/v4/index.html)

## Step 01 :  Première étape Hello World !

Si l'installation c'est bien passé, vous pouvez lancer votre serveur avec
```bash
 npm run dev
```

Si vous allez dans votre navigateur à http://localhost:8080/
vous devriez voir afficher:

```
Hello World !
```
Le serveur ce lance et n'a pas besoin d'être relancer avec nodemon.
Le script dans votre package.json permet de prendre en compte les modifications
de votre code pour relancer le serveur tout seul.

## Step 02 :

Maintenant que votre server fonctionne avec express, il est temps de modifier tout
ça pour ajouter le coté server de Socket.IO pour émettre et reçevoir des données.

Une fois le server configurer, nous allons établir une écoute sur notre page HTML
par le biais de socket.
A chaque connexion ou connection d'un utilisateur nous allons envoyé un message dans
notre terminale à l'aide de console.log().

#### Ressources :
- [Server Socket.IO](https://socket.io/get-started/chat)
- [Introduction Socket.IO](https://socket.io/docs/v4/index.html)
- [Socket.IO](https://socket.io/)
- [Link HTML](https://www.techiediaries.com/express-sendfile-serve-static-files/)

## Step 03 :

Créer un classe dans le fichier Front/chat.ts qui nous permettra de
recevoir et envoyer des messages sous formes de socket à votre serveur.
Commencer par le fameux 'Hello World' que vous afficherai dans votre terminale.

#### Ressources :
- [Class](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Base Affichage](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

## Step 04 :

Il est maintenant temps de récupérer les informations de votre champs de texte.

Pour ça, il vous faut créer une fonction qui effectue une query sur l'id de votre "input"
unbe fois que celui ci est submit.

Une fois le message récupérer, récupérer le message sur votre serveur pour l'afficher dans
votre terminal.

#### Ressources :
- [Socket listener](https://socket.io/docs/v4/index.html)

## Step 05 :

Avoir nos messages dans le terminal c'est bien mais reçevoir ses messages
dans la console du navigateur c'est mieux.

Nos messages de champs texte sont pour le moments envoyé à notre serveur.
Nous allons lui demander de nous les retransmettre afin de l'afficher dans
la console de notre navigateur.

Créer une fonction qui récupère le message auprès du serveur pour l'afficher
dans la console de votre navigateur.

#### Ressources :
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)

## Step 06 :

Cette étape va consister à envoyer un message à tout les utilisateur sur la page
HTML à chaque connection ou déconnection.

Pour cela nous allons créer une fonction qui ajoute du contenu à l'aide
d'une query sur notre <div> dans notre page HTML.
Vous devez prendre en compte les messages de votre serveur pour l'envoyer à
votre front.

Pour tester votre code nous allons ouvrir deux pages de votre navigateur
avec l'url : http://localhost:8080/
Lors de la connection vous devriez afficher "Connection" et "Deconnexion" lorsque vous
quitter la page.

#### Ressources :

- [Emettre une socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Requête HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

## Step 07 :

Créer une fonction qui envoie le contenu de notre champs de texte
sur notre page html.

Pour cela, nous allons créer une fonction qui effectue une query sur notre <div>
pour lui ajouter le message du champs de texte.

#### Ressources :

- [Emettre une socket] (https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Requête HTML] (https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)
## Step 08 :

Il est maintenant temps d'identifier les messages plus clairement.
Créer un id pour chaque utilisateur pour permettre de reçevoir les 
messages des utilisateurs avec leur nom ou un déterminant.

Exemple:

You: "message_envoyé"
Tony: "message_reçu"

## Step 09 :

Pour cette dernière étape nous allons ajouter la date et l'heure de l'envoie
de chaques messages.

## Bonus

* Créer des rooms permettant d'envoyer un message aux utilisateurs dans
la même chambre que vous.
* Amélioration de votre Front avec React.
* Authentification de l'utilisateur avec socket.
* Ajouter une base de données pour stocker les messages et les rafraichir lors
  de la connexion.

#### Ressources:
- [React](https://reactjs.org/)
- [Room Socket](https://socket.io/docs/v3/rooms/index.html)
- [Authentifaciton Socket](https://socket.io/docs/v3/middlewares/)