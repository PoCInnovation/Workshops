# Workshop 18 - Setup Kafka in a microservice architecture

:heavy_check_mark: Start Kafka and ZooKeeper using docker compose

:heavy_check_mark: Create a producer service

:heavy_check_mark: Create two consumer services

:heavy_check_mark: Publish messages into Kafka

## Introduction

> What am I going to do during this workshop ?

You will create a microservice architecture enhanced by Kafka.

Take a look at the schema below:

![Project architecture](../../.github/assets/software/kafka/architecture.png)

Let's describe the situation:
- The waiter asks the kitchen to prepare a pizza of type [margherita](https://www.marmiton.org/recettes/recette_la-pizza-margherita-recette-realisable-a-la-maison_335446.aspx) for table 17
- Since this restaurant has a lot of orders, you'll help them scale up using Kafka
- Once the order has been published into Kafka, two consumers will consume this order
- The cook will prepare the order
- The manager keeps track of the orders and record it in a file (like a database)

> But what *is* Kafka ? What do I need this anyway ?

Kafka is a [message broker](https://www.ibm.com/cloud/learn/message-brokers), meaning that someone is responsible for sending messages to Kafka - the producer - and someone else will receive these messages - the consumer.
Other message brokers exists, like [RabbitMQ](https://www.rabbitmq.com/), but Kafka is much more resilient, because it is designed to support stream interruptions.

I'm not going to lie, Kafka is a bit overkill for this workshop.
Well it is still a good way to learn its behaviour and how to interact with Kafka using your own producer / consumer.

At the end of the workshop, you'll be able to scale up even further this application with more producers / consumers.

## Step 0 - Setup

Please follow the instructions available [here](./SETUP.md).

## Step 1 - Start Kafka and ZooKeeper

### :bookmark_tabs: **Description**:
You'll need to start Kafka in a docker container, but Kafka actually relies on ZooKeeper, which you can learn more about [here](http://cloudurable.com/blog/kafka-architecture/index.html).

Those services will start into docker containers.

### :pushpin: **Tasks**:
- Create a `docker-compose.yaml` file

In this file, create a `zookeeper` service:
- It uses the following docker image: `confluentinc/cp-zookeeper:latest`
- It binds the container port `22181` to your local `22181` port
- Initialize the required environment variables you can find [here](https://docs.confluent.io/platform/current/installation/docker/config-reference.html#zk-configuration)

Then, create a second service, named `kafka`:
- It uses the following docker image: `confluentinc/cp-kafka:latest`
- It binds the following container ports to your local ports:
  - 29092 to 29092, the internal listener
  - 9092 to 9092, the external listener
- Initialize the required environment variables you can find [here](https://docs.confluent.io/platform/current/installation/docker/config-reference.html#confluent-ak-configuration)
- It depends on the `zookeeper` service

### :books: **Documentation**:

- [Control startup and shutdown order in docker compose](https://docs.docker.com/compose/startup-order/)
- [Kafka listeners explained](https://www.confluent.io/blog/kafka-listeners-explained/)
- [Kafka configuration properties](https://jaceklaskowski.gitbooks.io/apache-kafka/content/kafka-properties.html)

### :heavy_check_mark: **Validation**:

Run `docker-compose up --build`, wait 30 seconds and in a new terminal run `docker-compose logs kafka | grep -i 
started`. 
It should print:
```shell
$ docker-compose logs kafka | grep -i started
kafka_1      | [2021-08-08 14:06:44,854] DEBUG [ReplicaStateMachine controllerId=1002] Started replica state machine with initial state -> HashMap() (kafka.controller.ZkReplicaStateMachine)
kafka_1      | [2021-08-08 14:06:44,856] DEBUG [PartitionStateMachine controllerId=1002] Started partition state machine with initial state -> HashMap() (kafka.controller.ZkPartitionStateMachine)
kafka_1      | [2021-08-08 14:06:44,866] INFO [SocketServer listenerType=ZK_BROKER, nodeId=1002] Started data-plane acceptor and processor(s) for endpoint : ListenerName(LISTENER_IN) (kafka.network.SocketServer)
kafka_1      | [2021-08-08 14:06:44,867] INFO [SocketServer listenerType=ZK_BROKER, nodeId=1002] Started data-plane acceptor and processor(s) for endpoint : ListenerName(LISTENER_OUT) (kafka.network.SocketServer)
kafka_1      | [2021-08-08 14:06:44,867] INFO [SocketServer listenerType=ZK_BROKER, nodeId=1002] Started socket server acceptors and processors (kafka.network.SocketServer)
kafka_1      | [2021-08-08 14:06:44,872] INFO [KafkaServer id=1002] started (kafka.server.KafkaServer)
kafka_1      | [2021-08-08 14:10:13,068] DEBUG [ReplicaStateMachine controllerId=1002] Started replica state machine with initial state -> HashMap() (kafka.controller.ZkReplicaStateMachine)
kafka_1      | [2021-08-08 14:10:13,070] DEBUG [PartitionStateMachine controllerId=1002] Started partition state machine with initial state -> HashMap() (kafka.controller.ZkPartitionStateMachine)
kafka_1      | [2021-08-08 14:10:13,099] INFO [SocketServer listenerType=ZK_BROKER, nodeId=1002] Started data-plane acceptor and processor(s) for endpoint : ListenerName(LISTENER_IN) (kafka.network.SocketServer)
kafka_1      | [2021-08-08 14:10:13,100] INFO [SocketServer listenerType=ZK_BROKER, nodeId=1002] Started data-plane acceptor and processor(s) for endpoint : ListenerName(LISTENER_OUT) (kafka.network.SocketServer)
kafka_1      | [2021-08-08 14:10:13,100] INFO [SocketServer listenerType=ZK_BROKER, nodeId=1002] Started socket server acceptors and processors (kafka.network.SocketServer)
kafka_1      | [2021-08-08 14:10:13,104] INFO [KafkaServer id=1002] started (kafka.server.KafkaServer)
```

