# Setup

## Required:  node, npx + epytodo or docker

In this workshop, <strong>we recommend you to use the docker image</strong> we will provide you (unless you have already parametered CORS policy with your own api version). In case of doubt, just use the provided image.


<u>1- Docker</u><br>
If you do not have docker and docker-compose already installed, refer to this tutorial: https://github.com/PoCInnovation/Workshops/blob/master/software/04.Docker/SETUP.md


To launch the api, use the command `docker-compose up`<br/>
To stop it, use `docker-compose down`

<strong>/!\ </strong> Make sure that the file docker-compose.yml is in your current directory!<br/>

<u>2- Node + Npx</u><br/>
To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

Then: `sudo npm install -g npx`




Amazing! You are now ready to create your Svelte project!

--> `npx degit sveltejs/template nameOfProject`