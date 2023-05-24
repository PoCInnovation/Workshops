# Reverse Engineer with GDB & PEDA!

Reverse Engineering aims to understand what a program does. The goal of the Reverse Engineer is to deduce the source code of a given program from the analysis he made on it.

This field of security is often encountered in:

* video games / software cracking (analysis of the way the game is protected -> binary patching)
* malware analysis (understand the way it works -> conclude how to neutralize it)
* vulnerability analysis

Reverse Engineer implies a certain knowledge of the way the computer memory works and of creation and execution of a binary.
Here are some keywords you should be able to understand to start your Reverse Engineering journey:

* binary file
* ELF
* compilation
* memory segmentation
* stack
* registers

Here are some useful resources to help you understand those words:

* [some nice slides](http://slides.pwnh4.com/reverse)
* [article on the stack](https://beta.hackndo.com/stack-introduction/)

For this workshop, you will need to install `gdb` (if not already installed on your system) and [PEDA](https://github.com/longld/peda), a Python plugin for the debugger.

*N.B: If you don't manage to run the binaries and encounter a "File not found", you must install a 32bits library. You may try glibc.i686*

## 0 - Reflex

### *Challenge Name: reflexes*

Here is the first exercise. The purpose here is to make you have the good reflexes when you start the analysis of a binary.

* What is the format of the *reflexes* binary ?
* What is the targeted architecture ?
* Is it 32 or 64 bits ?
  You should find two ways of finding the password of this challenge.

Keep all this recognition process in mind, it's really useful when you face a reverse engineering challenge.

## 1 - Static Analysis and ASM

### *Challenge Name: translate_me*

Static analysis is the process of studying a program without running it.
To do so, we can use GDB to interpret the asm code in binary form to plaintext binary.
Then we read this code and deduce the way the program work.
So go ahead and open *translate_me* with `gdb ./translate_me` !
To display the asm instructions of a function, use `pdisas function_name` or `pd function_name`.

The purpose of this challenge is not to find a flag but to translate the asm code you get with gdb to C code.

## 2 - Dynamic analysis

### *Challenge Name: Dynamic Analysis*

Now we are going to learn how to analyze dynamically a binary. With GDB we can run our binary instruction by instruction and see, for each one of them, the corresponding values of the registers and the stack.
To dynamically analyze a binary, you can use `start` in gdb.
Here are the most useful commands during a dynamic analysis in GDB:

* `s` to execute the next instruction.
* `finish` to go directly to the next instruction after the current function.
* `b*addr` where addr is the address of an instruction. This sets a breakpoint to this address.
* `run` to go to the next breakpoint or to the end of the program if no breakpoint set.

## 3 - First contact with protection

### *Challenge name: Basic protection*

There various way of protecting a binary from Reverse Engineering, for example:

* obfuscation : you pollute your binary with useless instructions to make the work of the reverse engineer harder.
* dynamic analysis protection with ptrace
* stripped binaries : remove the useful debugging information, which are basically metadata about variables and functions addresses and names.

Try to identify which protection(s) is/are used on *im-protected*. Find a way to bypass it and solve the challenge !

## 4 - The arena

### *Challenge name: arena*

It's time to use your knowledge in a typical CTF exercise. The *arena* binary will take you through various way to check an input.
Each step has its own logic : you have to find ways to go and to validate the final step.
Try to strictly apply all the techniques you have learnt before !

## 5 - Alien

### *Challenge name: alien*

The *alien* binary is different from what we have encountered so far. Find out why and try to flag the challenge anyway.
Find the flag !

<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
