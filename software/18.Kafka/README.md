# Workshop 18 - Setup Kafka in a microservice architecture

:heavy_check_mark: Start Kafka and ZooKeeper using docker compose

:heavy_check_mark: Create a producer service

:heavy_check_mark: Create two consumer services

:heavy_check_mark: Publish messages into Kafka

## Introduction

> What am I going to do during this workshop ?

You will create a microservice architecture enhanced by Kafka.

Take a look at the schema below:

![](../../.github/assets/software/kafka/architecture.png)

Let's describe the situation:
- The waiter asks the kitchen to prepare a pizza of type margherita for table 17
- Since this restaurant has a lot of orders, you'll help them scale up using Kafka
- Once the order has been published into Kafka, two consumers will consume this order
- The cook will prepare the order
- The manager keeps track of the orders and record it in a file (like a database)

> But what *is* Kafka ? What do I need this anyway ?

Kafka is a message broker, meaning that someone is responsible for sending messages to Kafka - the producer - and someone else will receive these messages - the consumer.
Other message brokers exists, like RabbitMQ, but Kafka is much more resilient, because it is designed to support stream interruptions.

I'm not going to lie, Kafka is a bit overkill for this workshop.
Well it is still a good way to learn its behaviour and how to interact with Kafka using your own producer / consumer.

At the end of the workshop, you'll be able to scale up even further this application with more producers / consumers.

## Step 0 - Setup

Please follow the instructions available [here](./SETUP.md).

## Step 1 - Start Kafka and ZooKeeper

