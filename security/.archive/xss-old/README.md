# XSS

Today we are going to learn what is Client Web Security and how we can identify and exploit different types of XSS vulnerabilities.
There is no flag to find in the first challenges, you should only follow what each exercise is asking you to do (make a prompt(1) for example).

Before we start, here are some usefull ressources:
* the slides of this workshop https://slides.com/pwnh4/xss
* a really (really) big collection of [XSS payloads](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection)
* the PortSwigger article about XSS https://portswigger.net/web-security/cross-site-scripting

## Basics

First of all let's see some challenges on how to create basic XSS payloads:
* https://prompt.ml/0
* https://prompt.ml/1
* https://prompt.ml/2

## A little harder

These challenges will take you through de process of bypassing filters:
* https://sandbox.pwnfunction.com/warmups/jefff.html
* https://prompt.ml/3


## Medium

This challenges are close to the one you can get on CTF competition:
* https://sandbox.pwnfunction.com/warmups/ok-boomer.html
* https://sandbox.pwnfunction.com/challenges/me-and-the-bois.html
* https://prompt.ml/4

## Hard

Let's discover mutation XSS. These payloads are remarkably difficult to craft but allow us to bypass really advanced security filters.
This challenge is a replica of a previous XSS vulnerability found on Google services:
* http://ctf.oursin.eu/workshops/01/

![PoC Innovation](../../.github/favicon.png)
