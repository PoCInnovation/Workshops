# Workshop 4 - Docker pour les débutants

Dans ce workshop nous allons voir comment créer des images et des containers grâce aux dockerfiles et docker-compose.

## Step 0: Initialisation

Toutes les informations requises pour installer les dépendances sont disponibles dans [SETUP.md](./SETUP.md).

## Step 1: Les bases de docker

Pour commencer, nous allons apprendre à utiliser le docker de la moulinette pour tester vos projets.
- Téléchargez et lancez [l'image de la moulinette](https://hub.docker.com/r/epitechcontent/epitest-docker/) pour tester un de vos projet Epitech
  - vous devez monter votre dossier actuel `$PWD` dans votre container
  - vous devez lancer un shell pour vous déplacer dans votre container
  - exécutez `cat /etc/os-release | grep PRETTY_NAME` et vérifiez le nom de la distro
- À present, trouvez les commandes pour afficher les images, containers, volumes et networks.

> Il y a un document présent sur l'intra qui pourrait vous aider.

## Step 2: Dockerisation d'une API avec un dockerfile

Maintenant, nous allons apprendre à construire notre propre image docker à l'aide d'un `dockerfile`.

Dans le dossier [src](./src/node_api), vous trouverez une api en NodeJS.  
Cette api est des plus basique, elle renvoie un message lorsqu'on fait une requete GET sur `/`.

Le but est d'isoler votre votre api dans une image docker. Vous devrez dans vote `dockerfile`:
- Créer une `image` basée sur l'image `node:12-alpine`
- Copier le code de l'api dans l'image.
- Installer les dépendances et lancez l'api
- Rendre l'api accessible depuis l'extérieur de l'image sur le port 8080.

> Si vous avez besoin de [documentation](https://docs.docker.com/engine/reference/builder/) sur l'utilisation d'un dockerfile.

Une fois l'image créée, il vous faut `run` un container en utilisant cette derniere

> Vous aurez besoin des commandes `docker build` et `docker run`  
> `curl` peut être utile pour tester votre api sur http://localhost:8080  

Vous avez à présent une image docker qui contient une api node et tout le necessaire pour la lancer sans avoir à installer sur votre machine aute chose que docker. Adieu les installations qui détruisent votre dump !

## Step 3: Dockerisation de Epytodo avec un docker-compose

Pour terminer : vous allez dockeriser votre projet `epytodo`, si vous n'en avez pas, il y en un fourni dans le dossier [src](./src/epytodo/)

Pour cela, vous allez créer :
- un `Dockerfile` afin de créer l'image de votre api (de la même manière qu'à la step 2 mais l'api est en python et n'a donc pas les mêmes dépendances)
- un `docker-compose.yml` pour créer et lier la base de données à votre api.

Votre docker-compose aura 2 services :
- un qui lance l'image de votre `flask`
- un qui lance l'image de la base de données `mariadb`

La partie qui gèrera votre api aura les propriétés suivantes :
- `name`: nom du container une fois crée
- `build`: precise quelle image build pour l'utiliser après
- `ports`: ports à lier entre l'host et le container
- `link`: lien vers le service de la base de données
- `volume`: pour acceder à votre code depuis le container

La partie qui gèrera base de donnée aura les propriétés suivantes :
- `name`: nom du container une fois créé
- `image`: nom de l'image à utiliser pour le container
- `ports`: ports à lier entre l'host et le container
- `environnement`: les variables d'environnement necessaires à l'image
- `volume`: pour sauvegarder votre database
- `entrypoint`: vous devez trouver comment importer un schema sql à l'initialisation de votre container

Vous devrez modifier quelques variables dans les fichiers de config de epytodo pour correspondre à ce que vous mettrez dans votre docker-compose

> Si vous avez besoin de documentation sur le fonctionnement de [docker-compose](https://docs.docker.com/compose/).  
> Quels sont les ports par défaut des éléments du container ? (flask / mysql)  

Si vous avez correctement fait cette étape, votre epytodo devrait être accessible de la même manière que quand vous le lancez depuis votre pc

## Pour aller plus loin

Si vous voulez en apprendre plus sur la mise en place d'architecture et la gestion de containers, vous pouvez vous renseigner sur:
- [kubernetes](https://kubernetes.io/fr/docs/concepts/overview/what-is-kubernetes/)
- [lazydocker](https://github.com/jesseduffield/lazydocker)
- [docker hub](https://hub.docker.com/)
- [docker swarm](https://docs.docker.com/get-started/swarm-deploy/).

## Auteurs:
- [Tom Chauveau](https://github.com/TomChv)
- [Jérome Collet](https://github.com/JeromeCGithub)
- [Paul Monnery](https://github.com/PaulMonnery/)
