# Workshop 23 - Setup

Please make sure to read this until the end, before running any command !

## Installing necessary dependencies

To run elixir, you will need to install the following versions of
    - [npm](https://www.npmjs.com/)
    - [node](https://github.com/nodejs/node)
    - [erlang](https://www.erlang.org/downloads)
    - [elixir](https://elixir-lang.org/)


You can install them manually, but you might not have the correct versions, depending on your Linux distribution.

### ASDF

A good way to manage your dependencies for `Elixir` is by using [ASDF](https://asdf-vm.com/).
It supports all we need, and is a simple way to manage our dependencies.
Moreover, it leaves at the root of your repository and little `.tool-versions` file, specifying your versions.
This can then be used by other developpers to be easely up to speed.

Provided you're using `bash`, you can install `asdf` like so:
```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.9.0
echo ". $HOME/.asdf/asdf.sh" >> ~/.bashrc
echo ". $HOME/.asdf/completions/asdf.bash" >> ~/.bashrc
source ~/.bashrc
```

If you're using another shell, please have a look at install instructions [here](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies).

### Node

```bash
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs latest

cd workshop         # or any other directory in which you want to build your app
asdf local nodejs latest
```

### Erlang

```bash
asdf plugin add erlang https://github.com/asdf-vm/asdf-erlang.git
asdf install erlang latest

cd workshop         # or any other directory in which you want to build your app
asdf local erlang latest
```

### Elixir

```bash
asdf plugin add elixir https://github.com/asdf-vm/asdf-elixir.git
asdf install elixir latest

cd workshop         # or any other directory in which you want to build your app
asdf local elixir latest
```

### npm

```bash
# Ubuntu
sudo apt install -y npm

# Archlinux
sudo pacman -Sy npm

# Fedora
sudo dnf install -y npm
```

## Testing, testing...

When writing this workshop, here were my following versions. Any version above these should be fine:
```bash
$ elixir -v
Erlang/OTP 24 [erts-12.1.5] [source] [64-bit] [smp:16:16] [ds:16:16:10] [async-threads:1] [jit]

Elixir 1.13.0-rc.1 (2765e0f) (compiled with Erlang/OTP 24)

$ npm --version
8.1.2

$ node -v
v16.13.2
```

As you can tell from the first command's output, `Elixir` should be compiled with `Erlang OTP/24`.
