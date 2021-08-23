# WORKSHOP_WIFI_ESP32

## Summary
- [Setup](#setup)
- [**Step 01** - Turn on an LED](#step-01---turn-on-an-led)
- [**Step 02** -  LED flash](#step-02----led-flash)
- [**Step 03** - Connect to WI-FI](#step-03---connect-to-wi-fi)
- [**Step 04** - Create an HTML page](#step-04---create-an-html-page)
- [**Step 05** - Define a client](#step-05---define-a-client)
- [**Step 06** - Create Button](#step-06---create-button)
- [**Step 07** - Set the colors of your LED RGB](#step-07---set-the-colors-of-your-led-rgb)
- [**Step 08** - Change colors using your local server](#step-08---change-colors-using-your-local-server)


## Setup:
You can follow steps to install [Arduino IDE](https://www.arduino.cc/en/guide/linux)

Also configure your Arduino IDE for [ESP32](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

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

#### Resources
- [Basics Electronics](https://www.physicsclassroom.com/class/circuits/Lesson-2/Electric-Current)
- [What is resistor ?](https://learn.sparkfun.com/tutorials/resistors/all)
- [How Work Breadboard ?](https://www.sciencebuddies.org/science-fair-projects/references/how-to-use-a-breadboard)
## **`Step 02`** -  LED flash

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

#### Resources
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
:blub: Make sure you’ve enable your smartphone’s Bluetooth.
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
:blub: You can send message between your monitor and `Serial Bluetooth Terminal` !

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

:blub: `#include <BLEScan.h>`, `#include <BLEAdvertisedDevice.h>` <br/>
> :warning: Be careful to upload one code at a time on each board. <br/>

If you find the name of your BLE server in the monitor of your scanner, you have succeeded!

#### Resources
- [Scan BLE](http://www.neilkolban.com/esp32/docs/cpp_utils/html/class_b_l_e_scan.html)

## :tada: Congratulation !

You now know the basics of BLE ESP32.<br/>
Feel free to use your imagination to create circuits.<br/>
Or combine the previous exercises for new results.<br/>

## Authors
- [Albert VALENTIN](https://github.com/OnsagerHe)

Made with :heart: by PoC.

## Organization

- [📒 Linkedin](https://www.linkedin.com/company/pocinnovation/mycompany/)
- [📷 Instagram](https://www.instagram.com/pocinnovation/)
- [🖱️ Website](https://www.poc-innovation.fr/)
- [🌐 Discord](https://discord.gg/Yqq2ADGDS7)

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.% 