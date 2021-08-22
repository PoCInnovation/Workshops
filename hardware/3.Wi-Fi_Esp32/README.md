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
>**Constraints**: You don't have to produce any code for this execise. You may not use the 3.3V pin of your board.

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

## **`Step 03`** - Connect to WI-FI

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

Connecting to Wi-Fi is good but creating your own local network is better.

> * Create your local network and set `Wi-Fi ESP32 - [Initial]` as the network name.

To verify that your network is created, take your phone and look at the Wi-FI networks.
If you manage to connect to yours, go to the next step!

## **`Step 04`** - Create an HTML page

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

Now that you have your local network, you will add some style to your page.

> Display `Hello World !` on your local network using HTML.

If you open your web browser on your phone and write the IP address of your ESP32 followed by the port.
You should get `Hello World !`.

## **`Step 05`** - Define a client

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32 
- USB cable

</details>

Now it's time to know when a user joins your HTML page.

> Define a client and display `Connection` when a user connects and `Disconnection` when he disconnects.

If you see Connection and Disconnection in your monitor, you can go to the next step!

## **`Step 06`** - Create Button

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable

</details>

You will now create three buttons and define a message in your monitor as follows:
* :red_square: `Red`: Print `This color is Red`.
* :blue_square: `Blue`: Print `This color is Blue`.
* :purple_square: `Purple`: Print `This color is Purple`.

If the messages appear in your monitor when you click on the buttons you have successfully completed this step!

Let's continue to the next step!

## **`Step 07`** - Set the colors of your LED RGB

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32 
- USB cable
- BreadBoard
- Jumpers
- LED RGB
- 3x Resistor
- 3x Button

</details>

We will create a circuit that will change the color of the RGB LED with three buttons.
Register your code to define your local server and your three buttons.

Each button will define a color on your RGB LED:
* Red color :red_square:
* Blue color :blue_square:
* Purple color :purple_square:

## **`Step 08`** - Change colors using your local server

<details>
    <summary> 🛠️ Required Hardware:</summary>

- ESP32
- USB cable
- BreadBoard
- Jumpers
- LED RGB
- 3x Resistor

</details>

We will change the color of our RGB LED directly by pressing the buttons of our local server.

Take your three buttons on your HTML page.
The color will be defined according to the button:
* Red color :red_square:
* Blue color :blue_square:
* Purple color :purple_square:

When you press the buttons the color of your RGB LED should change.

## :tada: Congratulation !

You now know the basics of WI-FI ESP32. Feel free to use your imagination to create circuits.
Or combine the previous exercises for new results.

## Authors
- [Albert VALENTIN](https://github.com/OnsagerHe)

Made with :heart: by PoC.

## Organization

- [📒 Linkedin](https://www.linkedin.com/company/pocinnovation/mycompany/)
- [📷 Instagram](https://www.instagram.com/pocinnovation/)
- [🖱️ Website](https://www.poc-innovation.fr/)
- [🌐 Discord](https://discord.gg/Yqq2ADGDS7)

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.%  
