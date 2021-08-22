# Workshop 17 - Introduction to Kubernetes

Welcome to this workshop about [Kubernetes](https://kubernetes.io/), the leading container orchestration system! In 3 hours time you will learn to deploy a web application on Kubernetes and grow familiar with multiple Kubernetes concepts.

Most of this workshop will consist in putting together **YAML files** that define your Kubernetes resources. You can find many examples of those on the web.

## Step 0 - Setup

To get started, please follow the installation steps listed in [this guide](./SETUP.md).

> :warning: It's essential that you complete the setup guide before attempting any of the steps.

## Step 1 - Hello Pods

Your web application is going to have to run somewhere. [Pods](https://kubernetes.io/fr/docs/concepts/workloads/pods/) are the perfect place!

A Pod is a type of Kubernetes resource which runs multiple containers *(Yes, like Docker containers!)*.

Your first task is to configure and run a single pod on your local Kubernetes cluster. To do so, you will have to write a **YAML file** for your Pod resource and **apply it** with `kubectl`.

Your Pod resource must:

- Be of `kind` Pod.
- Have the name `my-pod`.
- Feature one container based on the `hello-world` image.

If you struggle to understand the syntax, make use of the `kubectl explain`.

For example, `kubectl explain pod` will help you figure out the syntax for defining a Pod resource. You can also ask `kubectl` to explain a specific field like with `kubectl explain pod.metadata`.

> :bulb: Check out the links in the **Resources** section for guidance.

If you have completed this step successfuly, you should be able to see your Pod when running the following command.

```
kubectl get pods
```

You can also access the output of your Pod through the following command.

```
kubectl logs pod/my-pod
```

The output of your Pod should match the output of the following command.

```
docker run hello-world
```

**Resources**

- `kubectl explain pod.*`
- [Understanding Kubernetes objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)
- [Pod documentation](https://kubernetes.io/docs/concepts/workloads/pods/)
- [Managing resources](https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/)

## Step 2: Deployments?

Congratulations on completing the first step!

It's now time to define [deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) for your web application. Deployments are like Pods but better! Deployments represent a group of one or multiple pods. When your app grows, deployments allow you to quickly **scale the number of pods**.

The application you ought to deploy is split into two main parts: the **web server** (written in [Golang](https://golang.org/)) and the **database** ([MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_france_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624521)). In this step you will have to create two deployments, one for each.

The Deployment resource for the database must:

- Be of kind `Deployment`.
- Have the name `mongo-deployment`.
- Have one replica.
- Feature one container based on the `mongo` image.
- Have the `spec.selector.matchLabels.app` field set to `mongo`. This will be important for later.

The Deployment resource for the web server must:

- Be of kind `Deployment`.
- Have the name `server-deployment`.
- Have one replica.
- Feature one container based on the `poc-workshops/k8s-server` image.

Once your deployments YAML are valid, **apply** them with the `kubectl` command.

If you have completed this step successfuly, you should be able to see both your deployments and their associated pods when running the following command.

```
kubectl get all
```

**Resources**

- `kubectl explain deployment.*`
- [Deployment documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

## Step 3 - At your service

You might have noticed, that when you run `kubectl get all`, the pod associated to the `server-deployment` is in a state of `CrashLoopBackOff` and is said to have restarted multiple times.

```
...
NAME                                    READY   STATUS             RESTARTS   AGE
pod/server-deployment-5ddbdc478-qqcwr   0/1     CrashLoopBackOff   4          115s
...
```

If we investigate the issue by inspecting the deployment's logs  (`kubectl logs deployment.apps/server-deployment`)  we get the following output.

```
panic: server selection error: context deadline exceeded, current topology: { Type: Unknown, Servers: [{ Addr: mongo-service:27017, Type: Unknown, Average RTT: 0, Last error: connection() error occured during connection handshake: dial tcp: lookup mongo-service on 10.96.0.10:53: server misbehaving }, ] }

goroutine 1 [running]:
gokube/models.init.0()
	/app/models/db.go:26 +0x2d4
```

Weird! The server application is telling us it cannot connect to the Mongo database.

That's because, for now, the `mongo-deployment` and the `server-deployment` are isolated from one another. They cannot comunicate.

This is where [Kubernetes services](https://kubernetes.io/docs/concepts/services-networking/service/) come into play. A service allows Kubernetes object to expose themselves to other objects.

Your job is to create a service for the `mongo-deployment` so it's accessible by other objects.

The service for the `mongo-deployment` must:

- Be of kind `Service`.
- Have the name `mongo-service`.
- Forward the port `27017` to the target port `27017`.
- Have the `spec.selector.app` set to `mongo`. This will ensure the service is linked to your `mongo-deployment`.

Once it's done, apply all your changes and run `kubectl get all`. Your deployments should be running without any errors.

You can inspect the `server-deployment`'s logs to make sure everything is okay.

**Resources**

- `kubectl explain service.*`
- [Service documentation](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Connecting applications using services](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)
- [Kubernetes services](https://www.bmc.com/blogs/kubernetes-services/)

## Step 4: Make it robust

You never know what can happen with your application. Crashes happen all the time and as a developper you can't afford **downtime** or **data loss**.

Kubernetes already shields you against your app going offline. It will identify crashes and restart your app so it's always available. However, it's your job to make sure your data persists!

In this final step, your job is to create a [persistent storage](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) for your database in case it crashes.

You must:

- Create a `PersistentVolumeClaim` resource.
  - It must be named `mongo-pvc`.
  - Have a storage limit of `256Mi`.
- Link the `PersistentVolumeClaim` to your `mongo-deployment`.
  - The mount path must be set to `/data/db`. *(This is where MongoDB stores its data)*.


## Authors
- [Diego Rojas](https://github.com/rojasdiegopro/)

## Organization

- [📒 Linkedin](https://www.linkedin.com/company/pocinnovation/mycompany/)
- [📷 Instagram](https://www.instagram.com/pocinnovation/)
- [🖱️ Website](https://www.poc-innovation.fr/)
- [🌐 Discord](https://discord.gg/Yqq2ADGDS7)

Made with :heart: by PoC.
