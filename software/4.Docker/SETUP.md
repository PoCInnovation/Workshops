# Setup

This workshop only requires you to install docker, its dependencies and to activate the docker service. You'll need:

- [docker-ce](https://docs.docker.com/engine/install/fedora/) : docker community edition
- [docker-compose](https://docs.docker.com/compose/install/) : complementary tool to simplify the creation of images and containers

## Installation

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

To install `docker-compose`:

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

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

#### Moulinette

Finally, download the EPITECH's "moulinette" 's image with `sudo docker pull epitechcontent/epitest-docker`.

**If you have finished all these steps, you can now move on to the exercises**

[Go back to the exercises](./README.md)
