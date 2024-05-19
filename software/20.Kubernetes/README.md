# Workshop 20 - Introduction to Kubernetes

✔️ Discover the Dev Ops universe

✔️ Learn about basic Kubernetes concepts

✔️ Deploy a web application

Welcome to this workshop about [Kubernetes](https://kubernetes.io/), the leading container orchestration system! In 3 hours time you will learn how to deploy a web application on Kubernetes and grow familiar with multiple Kubernetes concepts.

Most of this workshop will consist in putting together [YAML files](https://fr.wikipedia.org/wiki/YAML) that define your Kubernetes resources. You can find many examples of those on the web.

## Step 0 - Setup

To get started, please follow the installation steps listed in [this guide](./SETUP.md).

> ⚠️ It's essential that you complete the setup guide before attempting any of the steps.

## Step 1 - Hello Pods

Let's start deploying on Kubernetes!

First, your web application is going to have to run somewhere. [Pods](https://kubernetes.io/fr/docs/concepts/workloads/pods/) are the perfect place.

A Pod is a type of Kubernetes resource which runs multiple containers *(Yes, like Docker containers!)*.

Your first task is to configure and run a single pod on your local Kubernetes cluster. To do so, you will have to write a **YAML file** for your Pod resource and **apply it** with `kubectl`.

Your Pod resource must:

- Be of `kind` Pod.
- Have the name `my-pod`.
- Feature one container based on the `hello-world` image.

If you struggle to understand the syntax, make use of the `kubectl explain`.

For example, `kubectl explain pod` will help you figure out the syntax for defining a Pod resource. You can also ask `kubectl` to explain a specific field like with `kubectl explain pod.metadata`.

> 💡 Check out the links in the **Resources** section for guidance.

If you have completed this step successfully, you should be able to see your Pod when running the following command:

```shell
kubectl get pods
```

You can also access the output of your Pod through the following command:

```shell
kubectl logs pod/my-pod
```

The output of your Pod should match the output of this command:

```shell
docker run hello-world
```

### Resources

- `kubectl explain pod.*`
- [Kubernetes cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [Understanding Kubernetes objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/)
- [Pod documentation](https://kubernetes.io/docs/concepts/workloads/pods/)
- [Managing resources](https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/)

## Step 2 - Deployments?

Congratulations on completing the first step!

It's now time to define [deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) for your web application. Deployments are like Pods but better! Deployments represent a group of one or multiple pods. When your app grows, deployments allow you to quickly **scale the number of pods**.

The application you ought to deploy is split into two main parts: the **web server** (written in [Golang](https://golang.org/)) and the **database** ([MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_france_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624521)). In this step you will have to create two deployments, one for each.

The Deployment resource for the database must:

- Be of kind `Deployment`.
- Have the name `mongo-deployment`.
- Have one replica.
- Feature one container based on the `mongo` image.
- Have the `spec.selector.matchLabels.app` field and the `spec.template.metadata.labels.app` set to `mongo`. This will be important for later.
- Expose the port `27017`

The Deployment resource for the web server must:

- Be of kind `Deployment`.
- Have the name `server-deployment`.
- Have one replica.
- Feature one container based on the `rojasdiego/ poc-innovation:kubernetes-workshop` image.
- Expose the port `3000`

Once your deployments YAML are valid, **apply** them with the `kubectl` command.

If you have completed this step successfully, you should be able to see both your deployments and their associated pods when running the following command.

```shell
kubectl get all
```

### Resources

- `kubectl explain deployment.*`
- [Deployment documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

## Step 3 - At your service

You might have noticed, that when you run `kubectl get all`, the pod associated to the `server-deployment` is in a state of `CrashLoopBackOff` and is said to have restarted multiple times.

```text
...
NAME                                    READY   STATUS             RESTARTS   AGE
pod/server-deployment-5ddbdc478-qqcwr   0/1     CrashLoopBackOff   4          115s
...
```

If we investigate the issue by inspecting the deployment's logs (`kubectl logs deployment.apps/server-deployment`) we get the following output.

```text
panic: server selection error: context deadline exceeded, current topology: { Type: Unknown, Servers: [{ Addr: mongo-service:27017, Type: Unknown, Average RTT: 0, Last error: connection() error occurred during connection handshake: dial tcp: lookup mongo-service on 10.96.0.10:53: server misbehaving }, ] }

goroutine 1 [running]:
gokube/models.init.0()
    /app/models/db.go:26 +0x2d4
```

Weird! The server application is telling us it cannot connect to the Mongo database.

That's because, for now, the `mongo-deployment` and the `server-deployment` are isolated from one another. They cannot communicate.

This is where [Kubernetes services](https://kubernetes.io/docs/concepts/services-networking/service/) come into play. A service allows a Kubernetes object to expose itself to other objects.

Your job is to create a service for the `mongo-deployment` so it's accessible by other objects.

The service for the `mongo-deployment` must:

- Be of kind `Service`.
- Have the name `mongo-service`.
- Forward the port `27017` to the target port `27017`.
- Have the `spec.selector.app` set to `mongo`. This will ensure the service is linked to your `mongo-deployment`.

Once it's done, apply all your changes and run `kubectl get all`. Your deployments should be running without any errors.

> 💡 Make sure to restart any deployment or resource that might be affected by the changes you made.

You can inspect the `server-deployment`'s logs to make sure everything is okay.

### Resources

- `kubectl explain service.*`
- [Service documentation](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Connecting applications using services](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)
- [Kubernetes services](https://www.bmc.com/blogs/kubernetes-services/)

## Step 4 - Make it robust

You never know what can happen with your application. Crashes happen all the time and as a developer you can't afford **downtime** or **data loss**.

Kubernetes already shields you against your app going offline. It will identify crashes and restart your app so it's always available. However, it's your job to make sure your data persists!

In this final step, your job is to create a [persistent storage](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) for your database in case it crashes.

You must:

- Create a `PersistentVolumeClaim` resource.
  - It must be named `mongo-pvc`.
  - Have a storage limit of `256Mi`.
- Link the `PersistentVolumeClaim` to your `mongo-deployment`.
  - The mount path must be set to `/data/db`. *(This is where MongoDB stores its data)*.

> 💡 Make sure to restart any deployment or resource that might be affected by the changes you made.

To make sure your `PersistentVolumeClaim` works, we can create a document in our database through the web app.

To do so we have to send an HTTP request to the web server.

To access the web server, you need to forward the API port. The following command will link the port `3000` of your localhost to the port `3000` of the `server-deployment`.

```shell
kubectl port-forward deployments.apps/server-deployment 3000:3000
```

In another terminal, you can then send a request to create a new post in the database using the following command.

```shell
curl --data '{"title":"A simple post","body":"Lorem ipsum dolor sit amet"}' -i localhost:3000/posts
```

You should receive an `OK` response from the server like so:

```text
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8
Date: Wed, 25 Aug 2021 09:49:13 GMT
Content-Length: 105

{"created":{"id":"61261219c3db3a060d691ddb","title":"A simple post","body":"Lorem ipsum dolor sit amet"}}
```

Now make a request to see all the posts.

```shell
curl -i localhost:3000/posts
```

You should see your post appear in the output.

```text
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Wed, 25 Aug 2021 09:55:30 GMT
Content-Length: 105

{"posts":[{"id":"61261219c3db3a060d691ddb","title":"A simple post","body":"Lorem ipsum dolor sit amet"}]}
```

Now delete the `mongo-deployment` and `server-deployment` using `kubectl`. Once that's done, your database should be gone. Now you must recreate your `mongo-deployment` and `server-deployment` using `kubectl apply`. Don't forget to re-forward the port of the `server-deployment`!

We simulated a crash of your application. If your `PersistentVolumeClaim` works, you should still be able to see your post when running the following command.

```shell
curl -i localhost:3000/posts
```

Good job! You can now stop your cluster with `minikube stop`, you've nailed this workshop!

## Going further

There's still a lot you can look into with Kubernetes. Feel free to experiment with other Kubernetes objects like [StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/).

You can also play around with tools like [helm](https://helm.sh/), [rancher](https://rancher.com/), [kustomize](https://kustomize.io/) which will speed up your Kubernetes hacking.

## Authors

| [<img src="https://github.com/rojas-diego.png?size=85" width=85><br><sub>Diego Rojas</sub>](https://github.com/rojas-diego) |
| :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

