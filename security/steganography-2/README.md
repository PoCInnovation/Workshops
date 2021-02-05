# Introduction
Steganography is the use of various methods to hide information from unwanted eyes. In ancient times, steganography was mostly done physically. In the centuries that followed, more modern forms of steganography were invented, such as invisible inks. Today, steganography has moved to the digital world.

Steganography works by hiding information in a way that doesn’t arouse suspicion. Malicious hackers use steganography for a variety of tasks such as hiding malicious payloads and script files. Malware developers often use LSB steganography to hide the code for their malware in images of celebrities and famous songs and execute them with another program after the file is downloaded on the victim’s computer.

The term ‘Trojan Horse’ is used to describe a dangerous file hidden within a harmless file. 

Steganography is often compared to cryptography. While steganography hides information, cryptography focuses on rendering the data unreadable to everyone except its intended recipient. Once a stream of data is encrypted, only a person who has access to its decryption key will be able to unlock it.

But if cryptography provides better protection for secret data, why use steganography at all?
The presence of cryptography reveals that something is hidden, and in many cases, this is enough to get the sender in trouble.

During this subject, we will introduce you to the concept of steganography and some of it's techniques. 
You'll learn to detect those techniques but also to counter them in order to get the data they are trying to hide from you.

## What you'll do

 - Extract data from various types of files
-  Hide data in various type of files

## What you'll learn

- LSB
- Some ways to detect steganography in files
- The use of various tools that will help you practice steganography

# [](https://github.com/PoCInnovation/Pool2021/blob/master/Security/Steganography/student.md#useful-tools) Ressources
 - [Stegsolve](https://www.wechall.net/de/forum/show/thread/527/Stegsolve_1.3/) is an old but very useful tool that allows you to analyse an image with some filters.
 - [Steghide](https://github.com/StefanoDeVuono/steghide) is a steganography program that hides data in various kinds of image and audio files , only supports these file formats : `JPEG, BMP, WAV and AU`. but it’s also useful for extracting embedded and encrypted data from other files.
 - Strings is a basic linux command that displays the displayable strings in a file of any type. This should be one of the reflex that you should have when you see a file that you think contains hidden data.
 - [Sonic visualizer](https://www.sonicvisualiser.org) is a tool for viewing and analyzing the contents of audio files, however it can be helpful when dealing with audio steganography. You can reveal hidden shapes in audio files.
 - [exiftool](https://exiftool.org) is a great tool for working with metadata in image, audio, and video files. exiftool enables you to read, write, copy, and edit the metadata. It is interesting to note that exiftool can write to read-only files if the user has write permission in the directory.
 - [binwalk](https://github.com/ReFirmLabs/binwalk)  is a tool for searching a given binary image for embedded files and executable code. Specifically, it is designed for identifying files and code embedded inside of firmware images.

# [](https://github.com/PoCInnovation/Pool2021/blob/master/Security/Steganography/student.md#challenges)Challenges

## [](https://github.com/PoCInnovation/Pool2021/blob/master/Security/Steganography/student.md#pdf) Newbies
As the name is saying this challenge is very easy. You can flag it without any tool. However you could also use a tool if you feel more comfortable with a tool. I just want my flag back.

This challenge is only here to introduce you to the mentality of steganography so if you are ready you will find everything you need is `newbies.zip`

Good luck and may the force be with you !

## Booh	 
In `booh.zip` there is an audio that I made myself to have fun but I forgot what I hide in the audio so it will be very lovely from you to help me recover the data that I lost in this file. I don't exactly remember what I was doing that evening but I remember that the technique I was using was spectral analysis.

## Satoshi Nakamoto
Well for this challenge there will be no `.zip` just the link to a tweet and from this tweet you will have to find the hidden flag.
You will find the tweet at [this](https://twitter.com/etarc0s/status/1356688435042545671) link and now I guess it's your turn to find how to retrieve data from this tweet.

## [](https://github.com/PoCInnovation/Pool2021/blob/master/Security/Steganography/student.md#filter-pictures) French Touch
This challenge is here to introduce you to a reflex that you should have in every steganography challenge when you have an image or even an audio, analyzing the metadata. When a picture is taken/create metadata will be given with the file. For example some phones will put in the metadata the GPS coordinates where the photo was taken. In this challenge your job is to analyse the picture and find the flag.

 As always the challenge files are in `french_touch.zip`
 
## Aviator
My friend sent me this audio with absolutely no context. Help me to find what he is trying to say to me and of course I will give you some points. I am sure he is trying to make a joke or something but I can't be sure without the data hidden in the audio.

You will find the .wav in `aviator.zip`


## [](https://github.com/PoCInnovation/Pool2021/blob/master/Security/Steganography/student.md#filter-pictures) Magic
A friend sent you this photo saying it was very important,it's now time for you to challenge the Magic box !

 As always the challenge files are in `magic.png`
 
## [](https://github.com/PoCInnovation/Pool2021/blob/master/Security/Steganography/student.md#lsb) LSB

One of the most popular techniques is 'least significant bit (LSB) steganography. In this type of steganography, the information hider embeds the secret information in the least significant bits of a media file.

For instance, in an image file each pixel is comprised of three bytes of data corresponding to the colors red, green, and blue (some image formats allocate an additional fourth byte to transparency, or ‘alpha’).

LSB steganography changes the last bit of each of those bytes to hide one bit of data. So, to hide one megabyte of data using this method, you’ll need an eight-megabyte image file.

Since modifying the last bit of the pixel value doesn’t result in a visually perceptible change to the picture, a person viewing the original and the steganographically modified images won’t be able to tell the difference.

[![LSB](https://camo.githubusercontent.com/26cfadd3746657a94b32b6ceda3d7908ccf24a01d515e9a663df8e579625ecd2/68747470733a2f2f70776e68342e636f6d2f6c73622e706e67)](https://camo.githubusercontent.com/26cfadd3746657a94b32b6ceda3d7908ccf24a01d515e9a663df8e579625ecd2/68747470733a2f2f70776e68342e636f6d2f6c73622e706e67)

This technique consists of encoding the data to hide to base64 and wrote, bit per bit, to the byte describing the image content.
The same scheme can be applied to other digital media (audio and video), where data is hidden in parts of the file that result in the least change to the audible or visual output.

The disadvantage is that you can detect the use of this technique if you open the image at high contrast and check the pixel color : if it’s not as uniform as it appeared to be, some content must be stored with the LSB technique.

Now that I gave you an introduction I think it's time for you to do the challenge `lsb.zip`  using the knowledge you just gain.
