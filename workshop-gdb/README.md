# Reverse engineering

Welcome to our 2nd Reverse Engineering workshop, this time focused on using GDB to dynamically reverse engineer binaries.

## Some important links

* https://github.com/longld/peda - GDB PEDA

* https://slides.com/loicphasme/forensic - The slides of the workshop

* https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf - A GDB cheat sheet

## Step 1 - translate

The objective of this exercise is to read the `step1-translate` binary using GDB, and to guess the original C code that provided it.

Your goal is to recreate the same C code, then call an assistant!

## Step 2 - PoC Arena

Let's deep dive into reverse engineering with the `step2-arena` binary ! This challenge is composed of three parts, each requiring you to input a different flag.

Your goal is to understand what the program does to find which flag it is waiting for.

## Step 3 - VM

This time again your goal is to find the flag awaited by the `step3-vm` program, nothing more :)