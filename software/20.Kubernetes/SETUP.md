# Workshop 20 - Introduction to Kubernetes Setup Guide

This guide contains all the necessary steps to install **Kubernetes** on your machine.

## Installing `Docker`

You can install `Docker` using the [official guide](https://docs.docker.com/get-docker/) or by running the [official convenience installation script](https://get.docker.com/).

Run these commands to download and execute the installation script.

```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

#### Enable docker

Once the installation is complete, start the docker service with `sudo systemctl start docker`

> :bulb: If you want Docker to run every time you start your computer, run `sudo systemctl enable docker`

If your installation was successful, you should be able to run the following command without any issues.

```
docker run hello-world
```

Depending on how you installed Docker, you might have to prefix all docker commands with `sudo` as shown below.

```
sudo docker run hello-world
```

If you're unable to install Docker, you can alternatively use [podman](https://podman.io/getting-started/installation) which works just like Docker. To use podman, simply replace `docker` by `podman` in every command that you run as shown below. 

```
podman run hello-world
```

## Installing `Minikube`

You can install `Minikube` using the [official guide](https://minikube.sigs.k8s.io/docs/start/) through binary download.

If your installation was successful, you should be able to start a cluster using the following command. It will start a local Kubernetes cluster on your machine.

```
minikube start
```

If you failed to install minikube, you can use [kind](https://kind.sigs.k8s.io/docs/user/quick-start/) instead by following this [guide](https://kind.sigs.k8s.io/docs/user/quick-start/#installation).

## Installing `kubectl`

You can install `kubectl` using the [official guide](https://kubernetes.io/docs/tasks/tools/#kubectl) through binary download.

Make sure you setup [kubectl bash autocompletion](https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-bash-linux/) too!

If you're on zsh, you can run the following command to enable the autocompletion.
```
source <(kubectl completion zsh)
```

Once that's done, you can go back to the [exercises page](./README.md)!
