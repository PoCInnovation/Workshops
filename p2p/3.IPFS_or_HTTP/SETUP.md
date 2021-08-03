# Setup

In order to launch our music platform, you have to download a few things.
* [Docker](./SETUP.md#dockerhttpswwwdockercom-fish)
  * [What is Docker ?](./SETUP.md#what-is-dockerhttpswwwdockercom--question)
  * [Installation on Ubuntu](./SETUP.md#installation-on-ubuntu)
  * [Installation on Fedora](./SETUP.md#installation-on-fedorahttpsdocsdockercomengineinstallfedora)
* [Docker-Compose](./SETUP.md#docker-compose)
  * [Docker comp...what ?](./SETUP.md#docker-comp-what-)
  * [Installation](./SETUP.md#installation)

## [Docker](https://www.docker.com/) :fish:

### What is [Docker](https://www.docker.com/) ? :question: 

Docker enables developers to easily pack, ship, and run any application as a lightweight, portable, self-sufficient container,
which can run virtually anywhere : that implies we can run our platform locally without any trouble.

### Installation on Ubuntu
I highly recommend you to use your official package manager.
Otherwise, open a tab, and follow those [steps](https://docs.docker.com/engine/install/ubuntu/).

### [Installation on Fedora](https://docs.docker.com/engine/install/fedora/)
Just click on the title.

## Docker-Compose
### Docker comp... what ?
You have come so far to understand that docker is a container used to run any type of application, with any technology.
Here, we are using it for Django in python language, but you could have used it wth node with JavaScript or anything !
Now, imagine you want to run two different services, with two different technologies. In our case, we have the django backend, but we use PostgreSQL as database, and as the backend interacts with the storage, which is hold by the database, we have two completely
different services that needs to interact with each other ? So, what de we do ? Do we write two different `Dockerfile` in order to
have two different containers ? No ! It is easier than that : we have a `docker-compose.yml` file that manage multi containers
and their interactions !!

### [Installation](https://docs.docker.com/compose/install/)
The default open tab is for Mac users. Make sure you click on linux to have the correct manual !

And that is it !