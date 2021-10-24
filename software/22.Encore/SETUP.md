# Workshop 22 - Setup

In this workshop, you'll need:

- [docker-ce](https://docs.docker.com/engine/install/fedora/): docker community edition
- [go](https://golang.org/doc/install): golang language and compiler
- [encore CLI](https://encore.dev/docs/quick-start#install-the-encore-cli): encore official CLI

## Installation

### Docker

First, remove these packages if installed on your dump:

```bash
sudo dnf remove docker                   \
                docker-client            \
                docker-client-latest     \
                docker-common            \
                docker-latest            \
                docker-latest-logrotate  \
                docker-logrotate         \
                docker-selinux           \
                docker-engine-selinux    \
                docker-engine
```

Then for fedora, install `docker-ce`:

```bash
# To add the docker repository to dnf
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

# To install docker's latest version:
sudo dnf install docker-ce docker-ce-cli containerd.io
```

> If you're not on fedora, [a tutorial for other distros is available](https://docs.docker.com/engine/install)

#### Enable docker

Once the installation is complete, start the docker service with `sudo systemctl start docker`

> If you want Docker to run every time you start your computer, run `sudo systemctl enable docker`

For this workshop, you have to run your docker commands with `sudo`, if you find a command on the Internet without it, it will not work without adding your user to the docker group (which requires logging out of your session, which we will not do).

#### Fedora 31+

:warning: If you are running fedora 31 or above, you'll probably have cgroups errors like:

```
docker: Error response from daemon: cgroups: cannot found cgroup mount destination: unknown.
```

To fix them, follow this [solution](https://github.com/docker/for-linux/issues/219#issuecomment-375160449) on docker's github. This solution requires to be executed each time you reboot

### Golang

To install Go, run the following commands:
```shell
# Download go
wget https://golang.org/dl/go1.16.7.linux-amd64.tar.gz

# Extract the archive and add the binaries to /usr/local
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.16.7.linux-amd64.tar.gz
```

Then, open your .zshrc or .bashrc file and append the following line at the end:
```shell
export PATH=$PATH:/usr/local/go/bin
```

### Encore CLI

Install the CLI following the [official tutorial](https://encore.dev/docs/quick-start#install-the-encore-cli).

Add those lines into your shellrc (should be `.bashrc` or `.zshrc`)
```bash
export ENCORE_INSTALL="/home/vasek/.encore"
export PATH="$ENCORE_INSTALL/bin:$PATH"
```

To verify that the CLI is correctly installed, tip the command below
```shell
encore version
encore version v0.17.2
```

## Build foundation

Now we are going create an Encore application.

### Creation

To create an app with `encore`, tip the following command
```shell
encore app create
```

Then follow the steps given by the CLI
- Login to encore website
- Tip your application's name (e.g `poc-workshop-encore`)
- Choose the `Hello World` template
- Wait until the project is created

Now, you should see a new folder in your current directory with your application's name

Let's check what is in that folder

``` shell
# Jump into your application's folder (e.g cd poc-workshop-encore)
cd <application's name>

# List files in your application
tree
.
├── encore.app # Encore config file
├── go.mod     # Go module
├── go.sum     # Go dependencies
└── hello      # Hello service
    ├── hello.go      # Hello API
    └── hello_test.go # Hello API Test
```

### Test

Let's start our application to be sure that everything works

```shell
encore run
```

It should display you something like below

```

  ✔ Building Encore application graph... Done!
  ✔ Analyzing service topology... Done!
  ✔ Generating boilerplate code... Done!
  ✔ Compiling application source code... Done!

  Encore development server running!

  Your API is running at:     http://localhost:4000
  Development Dashboard URL:  http://localhost:41121/delivery-api-rrqi

2:35PM INF registered endpoint endpoint=World path=/hello/:name service=hello

```

Execute a `curl` on the `World` endpoint
```
curl localhost:4000/hello/John
{
  "Message": "Hello, John!"
}
```

You can now stop the application with a `CTRL +C` in the running terminal.

> :bulb: You can also run application's test with `encore test ./<your service>`
> E.g `encore test ./hello`

[Go back to the exercises](./README.md)
