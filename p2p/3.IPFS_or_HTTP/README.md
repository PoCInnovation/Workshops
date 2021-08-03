# Learn the differences between HTTP and IPFS !

## Table of contents
* [Introduction]()
* [Step 0 - Setup]()
* [Step 1 - HTTP]()
    * [Discover the basics]()
    * [Storage]()
* [Step 2 - IPFS]()
    * [Change the hosting]()
    * [Improve the storage]()
    * [Retrieve]()
* [Going further]()
  
## Introduction

## Step 0 - Setup
Please follow each instruction on the `SETUP.md`file.

## Step 1 - HTTP
### 1.0 Discover the basics
Wanna launch the platform ? Alright, make sure you are on the parent directory where there is the `Dockerfile` and `docker-compose.yml`.

```bash
sudo docker-compose build
```
You have to only use this command once. After several steps, you should have this output:
```bash
Successfully built a998a543950c
Successfully tagged music-share_web:latest
```
The number `a998a543950c` is the id of your container, it's ok if yours is different.

Then, each time you want to launch your website, run :
```bash
docker-compose up
```
you should have this log :
```bash
Starting music-share_db_1 ... done
Starting music-share_web_1 ... done
Attaching to music-share_db_1, music-share_web_1
db_1   | 
db_1   | PostgreSQL Database directory appears to contain a database; Skipping initialization
db_1   | 
db_1   | 2021-08-02 20:48:37.281 UTC [1] LOG:  starting PostgreSQL 13.2 (Debian 13.2-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
db_1   | 2021-08-02 20:48:37.281 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db_1   | 2021-08-02 20:48:37.281 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db_1   | 2021-08-02 20:48:37.283 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db_1   | 2021-08-02 20:48:37.286 UTC [25] LOG:  database system was shut down at 2021-08-02 20:48:32 UTC
db_1   | 2021-08-02 20:48:37.289 UTC [1] LOG:  database system is ready to accept connections
web_1  | No changes detected
web_1  | Operations to perform:
web_1  |   Apply all migrations: admin, auth, contenttypes, musicshare, sessions
web_1  | Running migrations:
web_1  |   No migrations to apply.
web_1  | Watching for file changes with StatReloader
web_1  | Performing system checks...
web_1  | 
web_1  | System check identified no issues (0 silenced).
web_1  | August 02, 2021 - 20:48:39
web_1  | Django version 3.1.6, using settings 'music_share_project.settings'
web_1  | Starting development server at http://0.0.0.0:8000/
web_1  | Quit the server with CONTROL-C.

```
As you can see, `db_1` is our database which seems okay and ready to accept new connections,
and `web_1` is the backend of our website. You can open your favorite browser like Firefox or Chrome (or Opera,
no discrimination here) and go to this url : [http://0.0.0.0:8000/](http://0.0.0.0:8000/).

You should see our beautiful website !!
When you go back to the terminal, there are some strange logs :
```bash
web_1  | [02/Aug/2021 20:52:09] "GET / HTTP/1.1" 200 6049
```
The first part of the message is obviously the datetime. The second one is the method, `GET`, because we want to just
get the page (we will see other methods later) ; we are asking the server to give us the `/` route which is the home page.
Then, the `HTTP` protocol and finally two numbers. The `200` is the most interesting : it is a status, preview code. `200` means
that the server is ok to give us that page from the `/` route, and it has been delivered correctly.

If you want to shutdown the server, use `Ctrl` + `C` and then run `docker-compose down`.

### 1.1 Storage

Go to [this](https://freemusicarchive.org/music/Scott_Holmes/rock-background-music/country-road-drive) website and download the song.
By the way, you can look for any other genres of music you prefer on this website, it is free and open source. For the example, we are going to
stick with this song.
Go back to [http://0.0.0.0:8000/](http://0.0.0.0:8000/), scroll down and click on the button `upload a song`.
Fill the form correctly and validates it. 

You can find the code of the form in `./musichare/forms.py`, and the associate model object in `./musicshare/models.py`.

Then, you can click on `back to home` and see : the song you just download has been added up to the database!




## Step 2 - IPFS
At its core, IPFS is a distributed system for storing and accessing files, websites, applications, and data.
Instead of referring to data (photos, articles, videos) by location, or which server they are stored on, IPFS refers to everything by that data’s hash, meaning the content itself.
The idea is that if you want to access a particular page from your browser, IPFS will ask the entire network, “does anyone have the data that corresponds to this hash?” A node on IPFS that contains the corresponding hash will return the data, allowing you to access it from anywhere (and potentially even offline).

(TODO: mettre un schéma ici)
### 2.0 Change the hosting
### 2.1 Improve the storage
### 2.2 Retrieve

## Going further