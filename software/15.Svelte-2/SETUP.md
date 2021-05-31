# Setup

## Required:  node, npx, axios, direnv,  docker


<u>1- Node + Npx</u><br/>
To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

Then: `sudo npm install -g npx`




Amazing! You are now ready to create your Svelte project!

--> `$ npx degit sveltejs/template nameOfProject`


While you're there, you can also install Axios

```
$ cd projectFolder
$ npm install axios
$ npm i
```

<u>2- direnv</u><br/>
This will allow you to use the environements variables in the `.envrc` file as configuration for the docker image

```
$ curl -sfL https://direnv.net/install.sh | bash # Install direnv
$ chmod +x direnv # Give execution permission
$ sudo mv -t /usr/local/bin direnv # Put it in your path
```

> :bulb: You can follow the [official documentation](https://direnv.net/docs/installation.html) to install the binary.

Run the command `direnv allow` to allow your shell to use the variables in the .envrc file

<u>3- Docker</u><br>
> If you do not have docker and docker-compose already installed, refer to this tutorial:<br/>
https://github.com/PoCInnovation/Workshops/blob/master/software/04.Docker/SETUP.md


To launch the api, use the command `docker-compose up`<br/>
To stop it, use `docker-compose down`

<strong>/!\ </strong> Make sure that the file docker-compose.yml is in your current directory, with the .envrc file<br/>
