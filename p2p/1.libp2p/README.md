# Workshop 1 - Building a P2P network with lib2p in golang

✔️ Use libp2p to create a host.

✔️ Use multiaddresses to connect two nodes.

✔️ Connect more nodes using discovery.

✔️ Exchange data between nodes.

## Introduction

Decentralized networks are getting more and more popular these days, and you may have heard of them trough
blockchains and other projects.
But understanding how they work under the hood is a very good way to learn more about network protocols powering them.

Throughout this workshop, we are not going to cover up the topic of _low-level_ network protocols such as
[TCP](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/transmission-control-protocol--tcp)
or [UDP](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/user-datagram-protocol-udp),
because you really don't want to reinvent the wheel.
If you want to learn more about them, take a look at the two links previously given, they are really useful and give
a nice overview of how these protocols work.

We will use [libp2p](https://libp2p.io/), a library built on top of other protocols which allows us to create a
network of nodes that will send data to each other.

This network will be a P2P network, meaning that every node will act as both the server and the client - they will
receive and send data to other nodes.

## Step 0 - Setup

Please refer to the [SETUP.md](./SETUP.md) file.

## Step 1 - Create a bootnode

### :bookmark_tabs: **Description**:

You'll need to create a bootnode, i.e. a node able to handle connections between the first nodes of the network.

It is used to bootstrap the network when all nodes are disconnected from each other.

### :pushpin: **Tasks**:

- Create a `main.go` file
    - This is the file containing your `main` function, it is therefore in the `main` package


- Create a `node/` folder
    - It will - for this task - contain the necessary code to create, start and stop a node


- Create a `node/node.go` file
    - In this file, do the following :
        - Create a [golang interface](https://gobyexample.com/interfaces) named `Node`
        - Every [golang struct](https://tour.golang.org/moretypes/2) that implements the `Node` interface must implement
          the following methods :
            - `Start` which starts the node and will begin the node discovery - returns an error
            - `Stop` which shutdown the node and closes all connections it currently has with other nodes - returns an error
            - `GetMultiAddress` which returns the node's multiaddress in a string format


- Create a `node/bootnode.go` file
    - In this file, do the following :
        - Create a `BootNode` structure
        - It must implement the `Node` interface using the libp2p module
        - If required, use the first available multiaddress during the node startup
        - Create a `NewBootNode` method, which creates and returns a new bootnode

### :books: **Documentation**:

- [MultiAddress format and specification](https://github.com/multiformats/multiaddr)
- [libp2p documentation](https://pkg.go.dev/github.com/libp2p/go-libp2p#New)

### ✔️ **Validation**:

In your main file, call the `node.NewBootNode()`, `yourNode.Start()` and `yourNode.Stop()` methods.
Don't forget to print the multiaddress between the two last function calls, you should see the following printed in
your terminal. Don't worry if the IP address or the multihash is not the same :

```shell
/ip6/2a01:e0a:214:11a0:d435:8690:b245:9613/tcp/43729/p2p/QmdRRWQJMLaHBHwXtgT9hDavVCPkSQLR5PSXmQq8qe95EV
```

## Step 2 - Connect to the bootnode

### :bookmark_tabs: **Description**:

Now that you've got a running bootnode, it could be a good idea to connect to it.

To address nodes, libp2p uses the node's multiaddress, which identifies and locate them at the same time.

### :pushpin: **Tasks**:

- Open the `node/node.go` file
- Add a `Connect` method to the `Node` interface, taking a multiaddress as a parameter


- Open the `node/bootnode.go` file
- In this file, do the following :
    - Implement the `Connect` method, which connects the current node with the one
      addressed by the given multiaddress
    - This method must print `Connected to ` followed byt the multihash of the connected peer when the connection has
      succeeded


- Open the `main.go` file
- Add a `CTRL + C` catch, so that the node can run and not stop immediately
- Add a way to pass the multihash as a program argument, and connect the node if this argument was provided

### :books: **Documentation**:

- [All the node methods, including `Connect`](https://pkg.go.dev/github.com/libp2p/go-libp2p-core/host#Host)
- [Signals in golang](https://gobyexample.com/signals)
- [Address info, used by the Connect method of the node](https://pkg.go.dev/github.com/libp2p/go-libp2p-core@v0.10.0/peer#AddrInfo)

### ✔️ **Validation**:

In a first terminal, run the following command `go run main.go`, and you should get :

```shell
/ip6/2a01:e0a:214:11a0:d435:8690:b245:9613/tcp/43729/p2p/QmdRRWQJMLaHBHwXtgT9hDavVCPkSQLR5PSXmQq8qe95EV
```

In a second terminal, run `go run main.go <MULTIADDRESS_FROM_ABOVE>`, and you should get :

```shell
/ip4/192.168.0.43/tcp/32927/p2p/QmTmLdJMhjc4HN8eKA2uxzeTyADJU2AE5jh4nP9PYFnLVg
Connected to {QmdRRWQJMLaHBHwXtgT9hDavVCPkSQLR5PSXmQq8qe95EV: [/ip6/2a01:e0a:214:11a0:d435:8690:b245:9613/tcp/43729]}
```

## Step 3 - Add a discovery service

### :bookmark_tabs: **Description**:

Well we wanted to create a p2p network right ? So lets implement the peer discovery service.

It will help nodes to find each other automatically by doing the following :

- I'm the node A connected to node B and B only
- Node B is connected to node A and node C
- Node B will tell node A where is node C to create more connections in the network

### :pushpin: **Tasks**:

- Hopefully, libp2p already has a discovery service, you'll just use it


- Create a `node/discovery.go` file
- In this file, do the following :
    - Create a `DiscoveryPing` structure, containing a single field of type `host.Host`
    - It must implement the [Notifee](https://pkg.go.dev/github.com/libp2p/go-libp2p@v0.15.0/p2p/discovery/mdns#Notifee) interface


- Add a `StartDiscovery` method to the `Node` interface
- Make the `BootNode` structure implement this method
- Use the mDNS discovery protocol to implement it, and name it `peer-discovery`
- Don't forget to close the service when the node shutdowns, so you should probably add the service as a structure
  field


- Call the `StartDiscovery` method in the main function

### :books: **Documentation**:

- [Assignation between interface and structures](https://stackoverflow.com/questions/13511203/why-cant-i-assign-a-struct-to-an-interface)
- [libp2p mDNS service](https://pkg.go.dev/github.com/libp2p/go-libp2p@v0.15.0/p2p/discovery/mdns#NewMdnsService)

### ✔️ **Validation**:

First, you'll start the first node by running the following command in a new terminal :

```shell
go run main.go
```

Then, you'll start a second node, connected manually to the first one :

```shell
go run main.go <MULTIADDRESS_OF_FIRST_NODE>
```

Finally, you'll start a third node, not connected to any of the two previous nodes :

```shell
go run main.go
```

You should see this kind of messages appearing in your terminals :

```shell
Found new peer: {QmYbQaq7jFLhgPoj1NtuExnPm28GtRrizEZ7DpSRPwHDtw: [/ip4/127.0.0.1/tcp/35961 /ip4/192.168.0.43/tcp/35961 /ip4/172.17.0.1/tcp/35961 /ip4/172.19.0.1/tcp/35961 /ip6/::1/tcp/43721 /ip6/2a01:e0a:214:11a0:d435:8690:b245:9613/tcp/43721 /ip6/2a01:e0a:214:11a0:8c20:cc8e:345c:41b6/tcp/43721]}
```

## Bonus - Send data to other nodes

Use your skills to send data whenever a peer has been discovered by the mDNS protocol.
Take a look at the [host.Host](https://pkg.go.dev/github.com/libp2p/go-libp2p-core/host#Host) structure, it contains a lot of interesting things you would want to use in this task.

On the other hand, don't forget to add a handler in every node, which will listen for incoming messages...

## Conclusion

Well done ! You've accomplished a lot with libp2p, and there is so much more to discover.
Refer to the [official documentation](https://docs.libp2p.io/) to deep-dive into this very great project.

Hope you enjoyed the workshop !

## Authors

| [<img src="https://github.com/PtitLuca.png?size=85" width=85><br><sub>Luca Georges Francois</sub>](https://github.com/PtitLuca) | 
| :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Follow us on our different social networks, and put a star 🌟 on `PoC's` repositories.

