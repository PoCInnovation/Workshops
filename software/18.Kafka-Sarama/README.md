# Workshop 18 - Setup Kafka in a microservice architecture

**What you will learn:**

:heavy_check_mark: Setting up Apache Kafka using Docker containers

:heavy_check_mark: Write a Kafka Producer using Sarama

:heavy_check_mark: Write a Kafka Consumer

:heavy_check_mark: Send a video using your producer

:heavy_check_mark: Receive the video using your consumer

## Introduction

> What am I going to do ?

You'll build an application composed of:

- A Kafka producer, which will publish a video to Kafka
- A Kafka consumer, which will consume the video stream sent to Kafka

> But what is Kakfa anyway ? Why do I need it for this use case ?

Kafka is a message broker, meaning that someone is responsible for sending message to Kafka - the **producer** - and 
someone else will receive these messages - the **consumer**. Other message brokers exists, like RabbitMQ, but Kafka 
is much more resilient, because it is designed to support stream interruptions.

I'm not going to lie, Kafka is a bit *overkill* for this workshop. Well it is still a good way to learn its behaviour 
and how to interact with Kafka using your own producer / consumer.

## Step 0 - Setup

Please follow the instructions available [here](./SETUP.md).

## Step 1 - Setting up Kafka with Docker containers