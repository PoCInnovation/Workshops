# WORKSHOP_MQTT_ESP32

## Summary
  - [Summary](#summary)
  - [Story](#story)
  - [Setup](#setup)
  - [**`Step 01`** - Turn on an LED](#step-01---turn-on-an-led)
  - [**`Step 02`** -  LED flash](#step-02----led-flash)
  - [**`Step 03`** - Connect to WI-FI](#step-03---connect-to-wi-fi)
  - [**`Step 04`** - SetUp Mosquitto](#step-04---setup-mosquitto)
  - [**`Step 05`** - SetUp your first Subscribe to Mosquitto](#step-05---setup-your-first-subscribe-to-mosquitto)
  - [**`Step 06`** - Publish with Mosquitto](#step-06---publish-with-mosquitto)
  - [**`Step 07`** - Set MQTT with your esp32](#step-07---set-mqtt-with-your-esp32)
  - [**`Step 08`** - Create your Broker](#step-08---create-your-broker)
  - [:tada: Congratulation !](#tada-congratulation-)
  - [Authors](#authors)


## Story

The schema below shows the architecture of broker MQTT:
![Data scheme](../../.github/assets/hardware/Mqtt/mqtt.png)

**Explanation** <br/>
Each device can publish on a broker local or global.<br/>
The Broker is an intermediary between devices and subscribers. <br/>
It allows to store, process and share the data to other entities. <br/>
Whether it is another broker or his phone to be aware of an alert according to the data.<br/>

## Setup:
- [SETUP](../SETUP.md)

## **`Step 01`** - Turn on an LED

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>  

### 📑 Description: 
Your first objective is to light an LED on your ESP32 with code.

### 📌 Tasks:
Use the LED on your card or an external LED and turn it on.  

### 📚 Documentation:
- [Tutorial PlatformIO and ESP32](https://www.youtube.com/watch?v=JmvMvIphMnY)
- [Turn on LED function](https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/)

## **`Step 02`** -  LED flash

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

### 📑 Description: 
Now it's time to make your LED blink.  <br/>
To do this, implement some code in your ESP32. <br/>

### 📌 Tasks:
Your LED must blink with 500 ms.

### 📚 Documentation:
- [Tutorial PlatformIO and ESP32](https://www.youtube.com/watch?v=JmvMvIphMnY)
- [Turn on LED Tutorial ESP32](https://circuits4you.com/2018/02/02/esp32-led-blink-example/)

## **`Step 03`** - Connect to WI-FI

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

### 📑 Description:  

For this step, you will set ssid and password for connect your board to the WI-Fi. <br/>
Integred conditional state for print Wi-fi and Ip Address of your device. <br/>

* For print data you must use serial connection.
* The first purpose of the MQTT IOT is a Wi-Fi.

### 📌 Tasks:

- Create an Access Point named: `MQTT_{yourName}`
  - with a `password` only you know
- Print `ip` of your board in `serial monitor`

### 📚 Documentation:
- [ESP32 Wi-Fi configuration](https://tttapa.github.io/ESP8266/Chap07%20-%20Wi-Fi%20Connections.html)
- [Function to serial connection](https://www.arduino.cc/reference/en/language/functions/communication/serial/)
- [Init Serial Connection](https://www.arduino.cc/reference/en/language/functions/communication/serial/ifserial/)

### ✔️ Validation:

- Ping your device.  
If this step is ending you can go out to the next step. :tada:


## **`Step 04`** - SetUp Mosquitto

<details>
    <summary> 🛠️ Required Hardware:</summary>

- Your Computer

</details>

### 📑 Description:  

Now that you have an network to your esp32. <br/>
This is the first step. <br/>
Then you must understand and work MQTT IoT. <br/>

- Take your computer and [download Mosquitto](https://everythingsmarthome.co.uk/howto/how-to-install-an-mqtt-broker-mosquitto-install-config-on-debian-ubuntu-mint-fedora-raspbian/). <br/>
- On this piece you have a [Broker MQTT](https://www.journaldunet.fr/web-tech/dictionnaire-de-l-iot/1440686-mqtt-comment-fonctionne-ce-protocole/) with a raspberry. <br/>

### 📌 Tasks:

* Call a manager to explain how a broker works. :wave:

### 📚 Documentation:
- [Download Mosquitto](https://everythingsmarthome.co.uk/howto/how-to-install-an-mqtt-broker-mosquitto-install-config-on-debian-ubuntu-mint-fedora-raspbian/)
- [Broker MQTT](https://www.journaldunet.fr/web-tech/dictionnaire-de-l-iot/1440686-mqtt-comment-fonctionne-ce-protocole/)

## **`Step 05`** - SetUp your first Subscribe to Mosquitto

<details>
    <summary> 🛠️ Required Hardware:</summary>

- Your computer

</details>

### 📑 Description:

Now it's time to know how subscribes to a topic.

### 📌 Tasks:

> This information is necessary to communicate with the Broker :rocket:

**Topic** : /Workshop/Hardware/MQTT  
**Username** : MosquiFruit  
**Password** : SendMeYourEmail  

- First step : Subscribe to all topics
- Second step : Subscribe to specifique topic /Workshop/Hardware/MQTT
> :blush: Subscribe to the topic

### 📚 Documentation:
- [Subscribe Mosquitto](https://mosquitto.org/man/mosquitto_sub-1.html)
- [Template subscribe](https://docs.solace.com/Open-APIs-Protocols/MQTT/MQTT-Topics.htm)
- [Example Subscribe](https://projetsdiy.fr/mosquitto-broker-mqtt-raspberry-pi/)
- [Mosquitto information](https://everythingsmarthome.co.uk/howto/how-to-install-an-mqtt-broker-mosquitto-install-config-on-debian-ubuntu-mint-fedora-raspbian/)

### ✔️ Validation:  

If your received message, you can jump to the task 06 :tada:


## **`Step 06`** - Publish with Mosquitto

<details>
    <summary> 🛠️ Required Hardware:</summary>

- Your Computer
</details>

### 📌 Tasks:
You will now publish your epitech :e-mail: to the topic **/Workshop/Hardware/**. <br/>
You can find all information in the step 05 to send me your email. <br/>
If the messages appear in my log you have successfully completed this step! <br/>

Let's continue to the next step! :clap:

### 📚 Documentation:
- [Publish Mosquitto](https://mosquitto.org/man/mosquitto_pub-1.html)
- [Example Pusblish](https://projetsdiy.fr/mosquitto-broker-mqtt-raspberry-pi/)
- [Mosquitto information](https://everythingsmarthome.co.uk/howto/how-to-install-an-mqtt-broker-mosquitto-install-config-on-debian-ubuntu-mint-fedora-raspbian/)

## **`Step 07`** - Set MQTT with your esp32

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

### 📑 Description:

We will set up network on your esp32 and understand how use MQTT. <br/>
Now you must publish and subcribe to topic with your esp32.

### 📌 Tasks:
- Create client
- Subscribe to `/Workshop/Hardware/Step07/`
- Publish the date time.

> :point_right: Don't forget information for the communication with the broker local.

Surprise The Broker respond to you :sunglasses: <br/>

You can pass to the last step of this Workshop !

### 📚 Documentation:
- [Code example](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [Other example](https://www.emqx.com/en/blog/esp32-connects-to-the-free-public-mqtt-broker)

## **`Step 08`** - Create your Broker

<details>
    <summary> 🛠️ Required Hardware:</summary>

- Raspberry Pi
- USB cable

</details>

### 📑 Description:

Come and see a supervisor and ask for a raspberry pi :surfer:

The raspberry is almost configurate.

### 📌 Tasks:

Your job if you accept it is :
- to change the mosquitto configuration to subscribe to /Workshop/Hardware/Success.
- Redirect the messages to the main broker.

> :blush: After change config, don't forget to restart service.

### 📚 Documentation:
- [Configuration MQTT](http://www.steves-internet-guide.com/mosquitto-bridge-configuration/)
- [Configuration mosquitto.conf](https://stackoverflow.com/questions/33867534/how-to-conditionally-forward-messages-between-two-bridged-mqtt-broker)

## :tada: Congratulation !

You now know the basics of MQTT ESP32. Feel free to use your imagination to impletement IoT Communcation.
Or combine the previous exercises for new results.


## Authors

| [<img src="https://github.com/OnsagerHe.png?size=85" width=85><br><sub>Albert VALENTIN</sub>](https://github.com/OnsagerHe) | 
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

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.