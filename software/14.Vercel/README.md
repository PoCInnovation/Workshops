# Workshop 14 - Discover the Deployment as a Service with Vercel and Netlify

✔️ Learn how you can deploy website without cost

✔️ Explore Vercel x NextJS potential  

✔️ Use professional tool to deploy your application

✔️ Build a basic REST API

✔️ Automate your continuous deployment

## Step 0 - Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md)

## Story

You are a young developer with many ideas to change the world !
The first step is to create your own website but you want to do it fast because you are young and in a hurry.

Your idea is simple, create a blog to show what you can do to everyone. You want to share your skills in front, backend and operational.<br>
But you have a problem, it will be boring and long to deploy all your stacks, set the SSL certificate and DNS to secure your blog etc...

Don't worry, you like the challenge, you search for some tools to easily set an environment and deploy your application.
You see that [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) can be really cool to achieve your objective.

In this workshop, we will explore the power of CD as services. Here is a schema of the functioning of those services:

![Schema Netlify Vercel](../../.github/assets/software/netlify-vercel/workshop-vercel-netlify.png)


## Step 1 - Quick start

### 📑 Description:
The objective is to deploy your own blog on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), here is a really basic [example](https://nextjs-netlify-blog-template.netlify.app/) of a blog with some articles.

> ⚠️ The primary objective is to discover the power of those platform, don't judge the design.

For this workshop, we are going to use [Vercel](https://vercel.com/) because it has a perfect integration with [NextJS](https://nextjs.org/).

### 📌 Tasks:
Let's start a simple Next project.

- Go to [Vercel](https://vercel.com/)
- Create an account
- Link your [Github](https://github.com/) account
- Create a new project with the **NextJS** template
- Wait until your project is deployed


### 📚 Documentation:
> 💡 There are many templates available [here](https://github.com/vercel/next.js/tree/canary/examples)

Your project is now deployed online.

Now, `clone` the Github repository in your computer.

It should have the following architecture:

### ✔️ Validation:
```shell
.
├── app                    # Typescript source code
│  ├── favicon.ico         
│  ├── global.css          # Global styles
│  ├── layout.tsx
│  └── page.tsx
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js        
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── tailwind.config.ts
└── tsconfig.json    
```

Thanks to [NextJS](https://nextjs.org/) we can both develop the frontend and the backend of our application.

You must install the dependencies with one of those commands:\
Yarn: `yarn`\
Npm:  `npm install`

## Step 2 - Serverless functions

### 📑 Description:
To design our blog, first we will need a backend to store our posts.

First, let's write a simple route to understand how [NextJS](https://nextjs.org/) and [Vercel](https://vercel.com/) work with [serverless functions](https://vercel.com/docs/serverless-functions/introduction).

> NextJS can create an endpoint from a file, for example you can actually reach the endpoint `<your_website>/api/hello>` in your project.

### 📌 Tasks:
#### Ping

Create an `api` folder in the `app` folder, in the `api` folder, create a folder `ping` and in the `ping` folder create a `route.ts` file that will just respond `pong` when you hit the endpoint.

> You can run your project with `yarn dev` or `npm run dev`.

#### Hello dude!

Now the objective is simple: use an url parameter to say hello with a dynamic api route

Create a folder `hello` and a folder named `[name]` in this folder create a file `route.ts`.

It must:
- Retrieve the name in the `url parameter`
- Response with the string `Hello <parameter> !`.

> 💡 Next will automatically reload your application, you don't need to restart your server.

#### Deploy

You had some fun with Next backend, it's time to deploy your changes in public with Vercel!

To do it, just `push` your code, it should reload your application.

Go to your [dashboard](https://vercel.com/dashboard) and click on the `Visit` button to reach your website.

You can now play with the `url` to test your backend. Try to share your url with your friend, they can also test your application.

### 📚 Documentation:
- Creating an API with [NextJS](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- How to use a [dynamic api route](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).


### ✔️ Validation:
If you've done everything good, you should reach your endpoint through <http://localhost:3000/api/ping>. The command below should print `Success`.

```shell
curl -s http://localhost:3000/api/ping | grep "pong" > /dev/null && echo "Success" || echo "Fail"
```

The command below should print `Success`

```shell
curl -s http://localhost:3000/api/hello/John | grep "Hello John \!" > /dev/null && echo "Success" || echo "Fail"
```

## Step 3 - Post posts

### 📑 Description:
It's time to create our backend to manage your post.

Your post must be represented like the following object:
```json
{
  "id": "the post id",
  "title": "A title",
  "content": "My content",
  "created_at": "Date of creation"
}
```

Originally, you should store your data in a [database](https://en.wikipedia.org/wiki/Database) but it would be long so we will just store it.<br>
Create a file named `resources.ts` that export a variable that stores data in an array named `posts`.

Create a folder `posts` in `api` and a `route.ts` in it that will be our REST endpoint to manage posts.

### 📌 Tasks:
- On **GET**: Retrieve all posts stored in the API
- On **POST**: Create a new post
  - The **body** of your request must have a `title` and a `content`, you can generate the `created_at` with `Date`.
- On **GET**: Retrieve the post identified by its `id`
- On **PUT**: Update post data
- On **DELETE**: Delete the post

> You can retrieve the body with `req.body`.

> 💡 You can use [Postman](https://www.postman.com/) to test your API.
>
> 💡 You should create some `fake data` to easily feed your frontend for the next step

### 📚 Documentation:
- What is a [REST API](https://www.sitepoint.com/rest-api/)?

### Deploy

You can now deploy your App on Vercel to update your application.

## Step 4 - The page is the soul's mirror

### 📑 Description:
Now you got your backend, let's create the frontend !

To begin with, we will create the top bar to discover [next syntax](https://nextjs.org/docs/basic-features/pages).

Take a look at a `next frontend architecture`:

```shell
├── app
│   ├── api
│   │    └── # your API
│   ├── favicon.ico
│   ├── globals.css     # Global CSS style
│   ├── layout.tsx
│   └── page.tsx
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── public              # Public assets
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── src
│   ├── resources.ts
│   └── utils.ts
├── tailwind.config.ts
└── tsconfig.json

```
### 📌 Tasks:
In your `src` folder create a `components` folder that will store all your components and now, to create the top bar we need 2 things: a component named `TopBar` wrote in a `topBar.tsx` file and a `stylesheet` named `TopBar.module.css`.

Here we go, first:

- Create a file named `topBar.tsx` that will export a component that displays a topBar.

> You can `return` simple html, it's not different from vanilla html for the moment.

- Create a stylesheet named `TopBar.css` that will apply some style to our component (e.g: position, size, colors, font-size...).

- Now you must display it to your website, go to `page.tsx` and remove all the code in the `return`, replace it with your component, you can use it like a html tag (e.g: `<TopBar/>`).

### ✔️ Validation:
You can now see your topBar 🥳, push your work and share your `website url` to your friends, so they can be impressed by your skills 🚀.

## Step 5 - View posts in your browser

### 📑 Description:
It's time to retrieve your posts and share them with the rest of the world.


### 📌 Tasks:
To do it, you know the recipe, just create a new component named `Posts` and a `stylesheet` named `Posts.module.css`.


### 📚 Documentation:
You will also need to fetch your data from your API. This [documentation](https://nextjs.org/docs/basic-features/data-fetching) can help you to do it.

> 💡 To fetch your **properties**, you should use [axios](https://www.npmjs.com/package/axios)

> 💡 Thanks to the NextJS integration, you don't need to care about [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

### ✔️ Validation:
Now you can publish your beautiful blog online and share it with your friends !

## Further steps

Now that you got the list of your posts, you should add a new `button` that will trigger a form to add a post.

You could also provide a little red cross that will delete the post when you click on it. It's up to you to customize your blog.

## Bonus

You are now an expert of Deployment as a Service. Why don't you try other websites like [Netlify](https://www.netlify.com/).

Deploy a new website in this platform, it's really easy.

Here are the steps to deploy on Netlify:
- Create a git repository
- Sign-in on [Netlify](https://www.netlify.com/)
- Go to `New site from Git`
- Choose your repository
- Push `Deploy`
- It's done, your website is now online 🚀

## Go Further

- [Deploy with GitHub Pages](https://pages.github.com/)
- [What is JamStack](https://jamstatic.fr/2019/02/07/c-est-quoi-la-jamstack/)
- [Next GraphQL](https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql)
- [How to configure Next](https://nextjs.org/docs/api-reference/next.config.js/introduction)
- [Next Crud](https://next-crud.js.org/)
- [Typescript with Next](https://nextjs.org/docs/basic-features/typescript)

## Authors

| [<img src="https://github.com/TomChv.png?size=85" width=85><br><sub>Tom Chauveau</sub>](https://github.com/TomChv) | [<img src="https://github.com/adrienfort.png?size=85" width=85><br><sub>Adrien Fort</sub>](https://github.com/adrienfort)
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
