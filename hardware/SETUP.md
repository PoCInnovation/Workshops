# Setup
- [Setup](#setup)
  - [Arduino IDE](#arduino-ide)
    - [Install ESP32 for Arduino IDE](#install-esp32-for-arduino-ide)
  - [PlatformIO](#platformio)
  - [To be able to communicate with the USB](#to-be-able-to-communicate-with-the-usb)
## Arduino IDE

```shell
# Download Arduino IDE
cd ~/Dowloads/
wget https://downloads.arduino.cc/arduino-1.8.16-linux64.tar.xz

# Extract the archive and add the binaries to /usr/local/bin/arduino
tar -xvf arduino-1.8.16-linux64.tar.xz && cd arduino-1.8.16/
sudo ./install.sh
```

### Install ESP32 for Arduino IDE

- [installing-the-esp32-board-in-arduino-ide](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

## PlatformIO

- [Install PlatformIO](https://platformio.org/install/ide?install=vscode)

## To be able to communicate with the USB

You will need to add your user to a group in order to have the rights to communicate with the device (ESP32 or Arduino Uno).
After adding yourself to the group, you need to reboot.

### On Fedora, Ubuntu and most Distros

```shell
sudo usermod -aG dialout $(whoami)
```

### On Archlinux and Arch-Based Distros (Manjaro, EndeavourOs, etc...)

```shell
sudo usermod -aG uucp $(whoami)
```
