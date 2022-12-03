# WORKSHOP_BLE_ESP32

## Summary
- [WORKSHOP\_BLE\_ESP32](#workshop_ble_esp32)
  - [Summary](#summary)
  - [Setup:](#setup)
  - [**`Step 01`** - Turn on an LED](#step-01---turn-on-an-led)
    - [📚 Documentation:](#-documentation)
  - [**`Step 02`** - LED flash](#step-02---led-flash)
  - [**`Step 03`** - Set BLE server](#step-03---set-ble-server)
    - [📚 Documentation:](#-documentation-1)
  - [**`Step 04`** - Set Client with your phone](#step-04---set-client-with-your-phone)
  - [**`Step 05`** - Chat Client/Server](#step-05---chat-clientserver)
  - [**`Step 06`** - Waiting for a message](#step-06---waiting-for-a-message)
  - [**`Step 07`** - Scan BLE](#step-07---scan-ble)
    - [📚 Documentation:](#-documentation-2)
  - [🎉 Congratulation !](#-congratulation-)
  - [Authors](#authors)


## Setup:
- [SETUP](../SETUP.md)

## **`Step 01`** - Turn on an LED

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable
- BreadBoard
- Jumpers
- LED
- Resistor

</details>  

**Instruction**: Your first objective is to light an LED with your ESP32 without code.
>**Constraints**: You don't have to produce any code for this exercise. You may not use the 3.3V pin of your board.

### 📚 Documentation:
- [Basics Electronics](https://www.physicsclassroom.com/class/circuits/Lesson-2/Electric-Current)
- [What is resistor ?](https://learn.sparkfun.com/tutorials/resistors/all)
- [How Work Breadboard ?](https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-breadboard)
## **`Step 02`** - LED flash

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable
- BreadBoard
- Jumpers
- LED
- Button
- Resistor

</details>

Now it's time to make your LED flash with a button.  
To do this, implement some code in your ESP32.

**Instruction**: When you press the button, your LED will turn off or on.

## **`Step 03`** - Set BLE server

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

We will create a Bluetooth server with our ESP32.

> * Create your local bluetooth and set `BLE ESP32 - [YourName]` as local server name.

To verify that your server is created, take your phone and look at the Bluetooth networks.
If you manage to connect to yours, go to the next step!

### 📚 Documentation:
- [BLE Server](http://www.neilkolban.com/esp32/docs/cpp_utils/html/class_b_l_e_server.html)
## **`Step 04`** - Set Client with your phone

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

Now that we have a BLE server, we will define a client to communicate with our ESP32.<br/>
For this, we will use a mobile application: `Serial Bluetooth Terminal`.<br/>

- Go to `Devices`. 
- Click the settings icon, and select Pair new device.
- Choose and pair with your BLE server.
💡 Make sure you’ve enable your smartphone’s Bluetooth.
- Go back to the `Serial Bluetooth Terminal`.
- Click the icon at the top to connect to the BLE server.

You should get a `Connected` message.

## **`Step 05`** - Chat Client/Server

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

Now we want to define when a client connects or disconnects from our server.

Add two conditions with a `Connection` / `Disconnection` display, depending on the action of your client.

If the messages appear in your monitor when you click on the buttons you have successfully completed this step!*
💡 You can send message between your monitor and `Serial Bluetooth Terminal` !

Let's continue to the next step!

## **`Step 06`** - Waiting for a message

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable
- Breadboard
- Jumpers
- 5x LED
- LED RGB
- 6x Resistor
</details>

For this step we will create an electronic circuit.

The objective is to connect five LEDs that will light up and then go out one after the other while waiting for a message from the server.<br/>
Once a message is received on the client side, an RGB LED will light up GREEN.<br/>
All other LEDs will be off.<br/>
Once the client responds, the process starts again.

We will:
- Blink the five LEDs one after the other when a server-side message is sent.
- Turn off the five LEDs and turn on a green RGB LED when the client has received a message.
- Start the process again when the client sends a message.


## **`Step 07`** - Scan BLE

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

We will now create a bluetooth scanner with a second ESP32.

💡 `#include <BLEScan.h>`, `#include <BLEAdvertisedDevice.h>` <br/>
> ⚠️ Be careful to upload one code at a time on each board. <br/>

If you find the name of your BLE server in the monitor of your scanner, you have succeeded!

### 📚 Documentation:
- [Scan BLE](http://www.neilkolban.com/esp32/docs/cpp_utils/html/class_b_l_e_scan.html)

## 🎉 Congratulation !

You now know the basics of BLE ESP32.<br/>
Feel free to use your imagination to create circuits.<br/>
Or combine the previous exercises for new results.<br/>


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

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

