# Setup

## Android Studio

In this workshop, you'll have to install:
- [Android Studio](https://developer.android.com/studio): Android apps IDE
- Android SDK: Android development tools
- [VSCode](https://code.visualstudio.com/): Visual Studio Code
- [Chromium](https://www.chromium.org/chromium-projects/): Chromium browser
- [Flutter](https://docs.flutter.dev/get-started/install/linux): A cross-platform framework for building mobile apps
- [Dart](https://dart.dev/get-dart): A modern programming language for building apps

To install Android SDK:
- Open `Android Studio`
- Go to `File -> Settings -> Appearance & Behavior -> System Settings -> Android SDK`
- Click on `SDK Tools` tab
- Select `Android SDK Command-line Tools`
- Click on `Apply -> OK -> Finish` buttons

To install VSCode (with [snapd](https://snapcraft.io/docs/installing-snapd)):
- Run `sudo snap install code --classic`

To install Chromium (with [snapd](https://snapcraft.io/docs/installing-snapd)):
- Run `sudo snap install chromium`
- Export `export CHROME_EXECUTABLE=$(which chromium)`

To install Flutter (with [snapd](https://snapcraft.io/docs/installing-snapd)):
- Run `sudo snap install flutter --classic`
- Run `flutter doctor`

```sh
[✓] Flutter (Channel stable, 3.0.1, on Arch Linux 5.17.9-arch1-1, locale en_US.UTF-8)
[✓] Android toolchain - develop for Android devices (Android SDK version 32.1.0-rc1)
[✓] Chrome - develop for the web
[✓] Linux toolchain - develop for Linux desktop
[✓] Android Studio (version 2021.2)
[✓] VS Code
[✓] Connected device (2 available)
[✓] HTTP Host Availability
```
- If there are issues with `flutter doctor`, follow the instructions on the result of the command.

To install `Flutter` & `Dart` extensions on Android Studio:
- Go to `File -> Settings -> Plugins`
- Search for `Flutter` extension (it'll automatically install `Dart` extension)

To install `Flutter` & `Dart` extensions on VSCode:
- Go to `Extensions`
- Search for `Flutter` extension (it'll automatically install `Dart` extension)

To install `Flutter` & `Dart` extensions on another IDE:
- You can use the [flutter commands](https://docs.flutter.dev/reference/flutter-cli) to install the extensions.

## Emulation

This workshop is for mobile development, so you need a smartphone to see what you are doing.

To create a smartphone emulator:
- Open `Android Studio`
- Go to `Virtual Device Manager`
- Click on `Create device`
- Select `Pixel 4`
- Click on `Download` to the `API 33`
- Then `Next` and `Finish`

## VsCode

For this workshop, I recommend you to code on vsCode instead of Android Studio

Here is a tutorial to help you with [VSCode for Flutter](https://docs.flutter.dev/development/tools/vs-code)

## Project setup

```sh
# At the root of your workshop repository, create a folder
mkdir -p flutter-workshop

# Move in this folder
cd flutter-workshop

# Create a Flutter project
flutter create myapp

# Enter the folder
cd myapp

# Launch the application
flutter run
```

To run the project with `VSCode`, if you have downloaded the `Flutter` extension, you just have to open the `lib/main.dart` file and you will have a button `Start Debugging` in top right of your VSCode.

**If it start the application in your emulator and launch the *Flutter Demo Home Page*, then you can start the exercises!**

[Go back to the exercises](./README.md)
