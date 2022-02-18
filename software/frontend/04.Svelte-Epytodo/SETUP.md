# Workshop 15 - Setup

## 1 - Installation

Please make sure you have the following programs installed:

- [node (version 14 or higher)](https://github.com/nodejs/node): javascript interpreter
- [npm](https://www.npmjs.com/): node package manager
- [docker](https://www.docker.com/): powerful container engine

To install `node` and `npm`:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

To install [docker](https://www.docker.com/), follow the [tutorial](https://github.com/PoCInnovation/Workshops/blob/master/software/4.Docker/SETUP.md) from our docker workshop.

## 2 - Project boostrap

Amazing! You are now ready to create your Svelte project!

```shell
$ npx degit sveltejs/template poc-workshop-svelte-epytodo
```

Install axios dependencies in the project

```shell
$ cd poc-workshop-svelte-epytodo
$ npm install axios
```

## 3 - Direnv

You must install [direnv](https://direnv.net/) to easily use the environment config file `.envrc`.

You can install it through the command :

```shell
$ curl -sfL https://direnv.net/install.sh | bash # Install direnv
$ chmod +x direnv # Give execution permission
$ sudo mv -t /usr/local/bin direnv # Put it in binary
```

> :bulb: You can follow the [official documentation](https://direnv.net/docs/installation.html) to install the binary.

You must add the following hook in your shell source :

```shell
# In .zshrc
eval "$(direnv hook zsh)"

# In .bashrc
eval "$(direnv hook bash)"
```

**Don't forget to reload your shell to enable the hook.**

## 4 - Run container

:warning: Don't forget to download the [source](./source/) directory and move those files in your current directory.

#### Run the codebase

```shell
$ direnv allow
direnv: export +MYSQL_ALLOW_EMPTY_PASSWORD +MYSQL_DATABASE +MYSQL_HOST +MYSQL_PASSWORD +MYSQL_ROOT_PASSWORD +MYSQL_USER +SECRET +SERVER_HOST +SERVER_PORT

$ ls -a
.  ..  docker-compose.yml  .envrc  epytodo.sql

$ docker-compose up -d
```

:bulb: The API should run on http://localhost:8000/

#### Stop codebase

```shell
$ docker-compose down -v
```

You don't need to do more, just start the workshop :rocket:

[Go back to the exercise](./README.md)