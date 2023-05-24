# Workshop 29 - Flask Backend with MySQL

✔️ Discover [Flask](https://flask.palletsprojects.com/), a lightweight framework to build a Python backend.

✔️ Interact with a MySQL database

✔️ Build a basic todo list & authentication system


## Step 0: Initialization

In this workshop, you'll lean how to use Flask to easily create a REST API performing operations on a database.

> 💡 A quick [documentation](https://www.ibm.com/cloud/learn/rest-apis) about REST API.

All the required information to install the workshop's dependencies are given in the [SETUP.md](./SETUP.md)

## Step 1: Create your first endpoint 🚀

Now that everything is installed, let's create a basic Flask application.
> Don't worry, Flask is designed for a quick and simple start 😉

- Create a file `app.py`, in which you will initialize Flask with a basic route:
    - It should listen on the `/` endpoint
    - Use the `GET` method only
    - Respond with `Hello world`

To test your route, you can use `flask run` to launch the server and open your browser at <http://localhost:5000>.

> 💡 Several options can be provided to `flask run` to customize it's behavior (the debug mode can be useful to reload the server when your file changes).  
> You can also run your app from your Python file with specific parameters and launch it with `python app.py` 😉

## Step 2: Register 👨

Congratulations, you have successfully created your first endpoint 🥳  
The next step is to add a route to register users.<br>

When starting your mysql server with docker compose in the setup, [`an SQL file`](./src/db/mysql-dump/db.sql) was run and created a database with 2 tables, `user` and `todo`.<br>
To interact with it, you need a basic [`database.py`](./src/database.py) file. It creates the connection with the DB for you, your job will be to add methods to perform SQL queries and use them in your app.

If you take a look at `database.py`, you'll notice that we are loading several database config variables from the environment. You have to create a `.env` file and add the corresponding values.

> Some of the values can be found in [the `db` folder](./src/db/).

> Flask will automatically load the `.env` file for you 😉

Once you are done, create a `/register` endpoint using the POST method. Every call must provide 2 JSON params: an email and a password.
> 💡 You can access the params using the [request object](https://flask.palletsprojects.com/en/2.2.x/api/#incoming-request-data)

After retrieving these parameters, add a `create_user` method in `database.py` to insert them in the `user` table.
> 💡 The [official documentation of the mysql connector](https://dev.mysql.com/doc/connector-python/en/) will be useful to discover how to perform queries.  
> You will also need to write some SQL, here's [a small cheatsheet](https://www.codecademy.com/learn/learn-sql/modules/learn-sql-manipulation/cheatsheet)
to help you getting starting with SQL 🚀

Test your route using postman, and don't forget to add some error handling in case your insertion failed.  

## Step 3: Login 🔒

Now that we are able to create users, the next logical step is to retrieve a registered user.

But wait, didn't we forget something in the previous step?  
In a real-world scenario, storing the password without any form of encryption is a really bad practice: any person who manages to access our database could log as any user ⚠️

Update your previous code to hash the password before storing it 🔒

> You can use [bcrypt](https://pypi.org/project/bcrypt/) to generate the hash and check it later

Alright, we can now move on to the next route:  
Create a `/login` endpoint with the same characteristics than `/register`, but this time you will check if the data given matches an user in your table.

> 💡 Don't forget what you did just before: the stored password in now hashed 😉

## Step 4: Add a todo 📖

The user part is functional, congratulations!  
Now let's add another simple endpoint to interact with another table of our database:

The goal is to create a todo for an user by POSTing on the `/todos` route.  
> As always, don't forget to handle errors and display a success message at the end 😉

## Step 5: Retrieve todos differently 🤔

Creating todos is great, but being able to retrieve them is better!
For this, you'll use the same endpoint `/todos` but with the `GET` method.

Instead of duplicating your decorators with the only change being the method, you should use [flask_restful](https://flask-restful.readthedocs.io/en/latest/index.html)
to handle this case in a cleaner way 🚀

> 💡 You can return an array of strings corresponding to the todos' content, we don't need the other fields

## To go further

- Use an ORM like [SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/) for easier database interactions
- Add a real authentication using [JWT](https://4geeks.com/lesson/what-is-JWT-and-how-to-implement-with-Flask) and restrict access to `/todos`

## Authors

| [<img src="https://github.com/tonida-rodda.png?size=85" width=85><br><sub>Toni Da rodda</sub>](https://github.com/tonida-rodda) | [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola)
| :---: | :---: |
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
