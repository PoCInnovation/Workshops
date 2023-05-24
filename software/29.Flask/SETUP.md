# Setup

## Python & Flask

In this workshop, we will create an HTTP REST server using Flask and interact with a MySQL database.
First of all, you have make sure you have [**Python 3.7** or higher installed](https://www.python.org/downloads/).

If you have the right version installed, you should have something similar:
```sh
python --version || python3 --version
> Python 3.10.6 # OK
```

We'll now create our project in a virtual environment and install packages we need:
```sh
mkdir flask-workshop-poc && cd flask-workshop-poc

python -m venv venv
source venv/bin/activate

pip install flask mysql-connector-python python-dotenv
```

## MySQL

We'll use MySQL as our database, but it's installation can be quite complicated so we'll run it inside a docker container.
> If you want to play a little bit with Docker, you can follow this [tutorial](https://docker-curriculum.com) or even our [workshop](https://github.com/PoCInnovation/Workshops/tree/master/software/04.Docker) 😉

If you don't have `docker` and its `compose` plugin yet, you can install them by following [these instructions](https://docs.docker.com/engine/install/).

Then all you have to do is to run the following command in [the `db` folder](./src/db/):
```sh
docker compose up -d
```

and you are ready to go 🚀

> 💡 For this workshop we will use the `root` user present by default, but it's usually better to [create another user with scoped privileges](https://www.hostinger.com/tutorials/mysql/how-create-mysql-user-and-grant-permissions-command-line).

[Go back to the exercises](./README.md)
