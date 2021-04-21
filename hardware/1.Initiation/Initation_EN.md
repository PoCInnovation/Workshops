# Workshop HARDWARE

## Introduction

Those exercices have to be done in order and shown to a teacher when finished so they can verify your work.

Even though you may use online tutorials, we advise you first think by yourselves.

Please start by downloading these tools:

* [Arduino IDE](https://www.arduino.cc)
* Arduino IDE configuration for [ESP32](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

If you are ever interested in checking out electronics/hardware youtubers, here's a quick list:

* AvE
* Great Scott
* This old Tony
* NYC CNC
* Electroboom

***Important***: During this workshop, we will use an Arduino board.

## Foreword

Please read this first:

https://en.wikipedia.org/wiki/Resistor

## Exercise 1

Required hardware:

* Board
* USB cable
* Breadboard
* Jumpers
* Leds
* ???

**Instructions**: Make a circuit linking a board with a led so that the led can be turned on. Call a teacher before powering up the board.

**Constraints**: You don't have to produce any code for this execise. You may not use the 3.3V pin of your board.

**Hint**: Can the led take the voltage sent by the board ?

## Exercise 2

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Led
* Push button
* ???

**Instructions**: Make sure that the button changes the led state (on/off) each time you press it.

**Constraints**: Null

## Exercise 3

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Led
* ???

**Instructions: Make sure that the led blinks every second.

**Contraintes**: Null

## Exercise 4

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Led
* Potentiometer
* ???

**Instructions**: Starting with the 3rd exercise's circuit, make sure that the blink delay depends on the potentiometer.

**Constraints**: Null

## Exercise 5

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Led
* Potentiometer
* ???

**Instruction**: Starting with the 4th exercise's circuit, make sure that the led stops blinking, and that it's light's intensity depends on the potentiometer instead.

**Contraintes**: Null

## Exercise 6

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Ultrasonic sensor
* led

**Instruction**: Make a new circuit that gets the distance given by the sensor, and lights up the led if the distance is inferior to 30cm.

**Contraintes**: Null

## Exercise 7

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Ultrasonic sensor

**Instruction**: Starting with the 6th exercise's circuit, display the distance given by the sensor via a serial line to your computer.

## Exercise 8

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Ultrasonic sensor

**Instructions**: Starting with the 7th exercise's circuit and Arduino code, create a program in your language of choice that gets the serial line of your board and displays it on screen.

**Constraings**: You are not allowed to use any library specialized for your board.

**Bonus**: You may display the distance as a graph.

## Exercise 9

Required hardware:

* Board
* USB Cable
* Breadboard
* Jumpers
* Potentiometer
* Servo motor

**Instructions**: Make a new circuit that controls the potition of the servo motor with the potentiometer. Please call a teacher before powering up your circuit.

## Exercise 10

Required hardware:

* ESP32
* jumpers
* led

**Instructions**: Create a webui or gui that lets you control a few leds (for example, it lets you turn on or off a led, or choose the color of an RGB led)

## Exercise 11

Required hardware:

* ESP32
* jumpers
* Ultrasonic sensor

**Instructions**: Connect your board to your phone or computer via bluetooth and display to distance given by the sensor.

**Bonus**: Display the distance as a graph
