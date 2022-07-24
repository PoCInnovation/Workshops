# Workshop 27 - Auth :rocket:

:heavy_check_mark: Discover how to manage authentification with nodejs and mongodb database.  
:heavy_check_mark: Learn services logics  
:heavy_check_mark: Improve your Typescript and architecture design skills

## Step 0: Setup

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)

## Step 1: Create your REST API

First of all, you need to create three routes thanks to [Express Routing](https://expressjs.com/fr/guide/routing.html):

- A login route
- A register route
- A profile route

:bulb: You can use [Postman](https://www.postman.com/) to test your routes, [here](https://www.guru99.com/postman-tutorial.html) is how to deal with it.
<br><br/>
## Step 2: Connect to the database and create schemas

To interact with MongoDB, you need to create a MongoDB instance using docker.
You can use the following command:

```
docker run --rm --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=your_username -e MONGO_INITDB_ROOT_PASSWORD=your_password -e MONGO_INITDB_DATABSE=your_database -d mongo
```

Then, take a look at the [MongoDB Documentation](https://www.npmjs.com/package/mongodb) in order to connect to your database!

:bulb: As MongoDB is *not* a relational database management system, we recommend you to take a look at the [data modeling](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/) and to create defined types using [Typescript interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
<br><br/>
## Step 3: Use JsonWebToken to authenticate your users

Now that your database schemas are created, the next step is to generate Json Web Tokens using the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) Node module.

In your register route, you need to `register` the new user to the database thanks to the information you find in the `body` of the request.

:bulb: Don't forget to add error handling! (incomplete body, already used username/email...)

In the login route, you need to `check` the credentials from the `body` (again :upside_down:) and, if correct, use the `jwt.sign()` function to create a new JWT that will then be used as a proof of the connection of the user.

Finally, you will need to check the given `JWT` in the profile route to determine if a user is linked to this token. If so, you can respond to the request with the user information.
<br><br/>
## Step 4: Add an email verification

Your backend application is now able to authenticate users. What you need to do now is to make it stronger, a perfect example would be to verify new users with their email address.

To do so, let's use the [Nodemailer](https://www.npmjs.com/package/nodemailer) node package.

> To test your program, you can use the [Ethereal Mail Service](https://ethereal.email/) to create a temporary mail. Here is the default configuration for it:

```js
let testAccount = {
  user: "your mail",
  pass: "your password",
};

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});
```

Once your email is setup, you can modify your `register` route to send an email.

:bulb: You can modify your User schema to add a boolean verified, and deny login attempts while the user email is not verified.
<br><br/>
## Bonus

Congratulations, you now have a functional authentication portal using MongoDB, Nodemailer and JsonWebToken! However, you can still enhance it, here are some ideas to do so:

- Setup 2FA (2-Factor-Authentication) using either mail or phone messages.
- Use [OAuth](https://www.npmjs.com/package/client-oauth2) to create another ways to connect (using other accounts such as Google, Microsoft, Github...)
- Create backup routes (reset password, admin routes...)

## Authors

| [<img src="https://github.com/tonida-rodda.png?size=85" width=85><br><sub>Toni Da Rodda</sub>](https://github.com/tonida-rodda) | [<img src="https://github.com/EdenComp.png?size=85" width=85><br><sub>Florian Lauch</sub>](https://github.com/EdenComp)
| :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

