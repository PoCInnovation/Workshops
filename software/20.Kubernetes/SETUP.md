# Workshop 17 - Introduction to Kubernetes Setup Guide

This guide contains all the necessary steps to install **Kubernetes** on your machine.

## Installing `Docker`

You can install `Docker` using the [official guide](https://docs.docker.com/get-docker/) or by running the [official convenience installation script](https://get.docker.com/).

If your installation was successful, you should be able to run the following command without any issues.

```
docker run hello-world
```

## Installing `Minikube`

You can install `Minikube` using the [official guide](https://minikube.sigs.k8s.io/docs/start/) through binary download. 

If your installation was successful, you should be able to start a cluster using the following command.

```
minikube start
```

## Installing `kubectl`

You can install `kubectl` using the following command.

```shell
minikube kubectl -- get po -A
```

Or through this [guide](https://kubernetes.io/docs/tasks/tools/#kubectl)

