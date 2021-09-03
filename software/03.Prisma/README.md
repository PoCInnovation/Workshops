# Workshop 3 - GraphQL API with Prisma2

In this workshop, we will learn how to create GraphQL APIs using [Prisma2](https://www.prisma.io/), Nexus-Prisma and Apollo.

## Step 0: initialization

All the required informations to install the workshop dependencies are available in [SETUP.md](./SETUP.md).

## Step 1: Retrieve posts

You saw in the setup a query that retrieves all users from the database. Now, do the same thing but to get all the posts.

Create the `getPosts` function:
- It doesn't take any parameters
- It returns a list of all the posts in the database.

All the necessary informations about the database schema are in the `schema.prisma`.

## Step 2: Create - Read - Update - Delete

You've seen how data fetching with Prisma works, you'll now implement classic CRUD functions (see the title of this step).

> If needed, refer to this [page](https://www.prisma.io/docs/getting-started/quickstart-typescript#write-data-into-the-database) to see basics operations with Prisma. You will need the keyword `where`.

Create the `addUser` function:
- It takes in parameters `name` and `email`, the name and email of the user that will be created
- It adds the user to the database
- It returns the created userQuery

Create the `addPost` function:
- It takes in parameters `title` and `content`, the title and content of the post, as well as `authorId`, the id of the user who will be the author of the post.
- It adds the post to the database (this post must be connected to the `authorId` received in parameter)
- It returns the created post

Create the `getPostsByUsers` function:
- It takes in parameter `authorId`, the id of the user whose posts we want to retrieve
- It returns the list of posts of the requested user

Create the `removeUser` function:
- It takes in parameter `id`, the id of the user that will be deleted
- It returns the user who has been deleted

Create the `removePost` function:
- It takes in  parameter `id`, the id of the post that will be deleted
- It returns the post that has been deleted

## Step 3: Apollo Server and Nexus

Prisma allows us to retrieve data from the database, but we then have to allow the users to retrieve this data. We will use [GraphQL Nexus](https://nexus.js.org/) and [Apollo server](https://www.apollographql.com/docs/apollo-server/) for this purpose.

You will have to install new packages to do this:

<strong>Steps to install Apollo and Nexus</strong>
- Create a new folder named `prisma-nexus-gql`.
- Download the [zip](./src/3.prisma.zip) from our repo.
- Extract the zip into your `prisma-nexus-gql`.
- Run `npm install` in your `prisma-nexus-gql` folder to install the new dependencies.
- Run `npm run migration` to migrate the prisma schema in the database.
- Run `npm run generate` to generate prisma client and graphql queries.

> You should see a warning message when you generate the schema.

If you subsequently run `npm start`, you will get a warning, which is normal. For the server to run properly, you have to add an `objectType` that defines the `Post` table in the `entities` folder.  
An example of the `User` table is present in the folder, it's up to you to do `Post`.

> [Nexus model documentation](https://nexusjs.org/docs/plugins/prisma/overview)

## Step 4: Setting up the CRUD with Nexus

Now that your models are well defined, you can implement the data manipulations seen in Step 2, but this time with Nexus.

You will build in your schema a `Query` object that will contain the methods to read data and a `Mutation` object that will contain the methods to edit data (add / update / delete).

- For them to take effect, you will have to add these objects to the `type` field of your `schema` defined in `schema.ts`.

> Nexus documentation about [Queries](https://nexusjs.org/docs/api/query-field) and [Mutations](https://nexusjs.org/docs/api/mutation-field)  
> The `resolve` field is where you will call prisma to query data inside the database

To test the queries/mutations you are going to set up, you can go to http://localhost:3000/ to use a playground that lets you to test your server.

We already gave the `getUsers` query and the `signupUser` mutation to let you see what the syntax looks like, and make it easier to create the next ones.  
Below, we also give you examples to test your queries and mutations.

Create the following queries:
- `getPosts`: returns the list of all posts in the database
- `getPostsByUser`: returns the list of all the posts of a user thanks to its `authorId`.
- `getPublishedPosts`: returns a list of all posts that are published.

Create the following mutations:
- `writeDraft`: creates a post with a `title`, a `content` and the `authorId` of its author. By default it is not published.
- `publishDraft`: publishes a post whose `id` is specified.
- `deletePost`: deletes a post whose `id` is specified.

Here are some examples of queries and mutations you can execute in the playground to test your functions
<Details><Summary><strong>See Query and Mutations (Click me!)</strong></Summary>

## Query

### getUsers

```graphql
query {
  getUsers {
    id
    name
    email
    posts {
      id
      title
    }
  }
}
```

### getPosts

```graphql
query {
  getPosts {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

### getPostsByUser

```graphql
query {
  getPostsByUser(authorId: __AUTHOR_ID__) {
    id
    title
    content
  }
}
```
> Note: you must replace **__AUTHOR_ID__** with the current id of an author.

### getPublishedPosts

```graphql
query {
  getPublishedPosts {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```
> NOTE: you will get an empty array if you have not called the mutation to publish a post yet.

## Mutations

### signupUser

```graphql
mutation {
  signupUser(
    name: "Paul"
    email: "paul@prisma.io"
  ) {
    id
  }
}
```

### writeDraft

```graphql
mutation {
  writeDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorId: "__AUTHOR_ID__"
  ) {
    id
    published
  }
}
```

### publishDraft

```graphql
mutation {
  publishDraft(id: __POST_ID__) {
    id
    published
  }
}
```

### deletePost

```graphql
mutation {
  deletePost(id: __POST_ID__) {
    id
    title
  }
}
```

</Details>

## Bonus

If you finished the workshop and don't know what to do until the end, you can try to:
- Use the prisma studio to manipulate your db with a web interface. Run `npx prisma studio --experimental --port 3000`
- Use the Nexus CRUD functions to drastically reduce your code, see the [documentation](https://nexusjs.org/docs/plugins/prisma/overview#example)
- Update the database model to add new columns and tables, and your API with it.

## Authors

| [<img src="https://github.com/PaulMonnery.png?size=85" width=85><br><sub>Paul Monnery</sub>](https://github.com/PaulMonnery) | [<img src="https://github.com/nowlow.png?size=85" width=85><br><sub>Naoufel Berrada</sub>](https://github.com/nowlow) | [<img src="https://github.com/Axoloot.png?size=85" width=85><br><sub>Cyril de Lajudie</sub>](https://github.com/Axoloot) | [<img src="https://github.com/TomChv.png?size=85" width=85><br><sub>Tom Chauveau</sub>](https://github.com/TomChv)
| :---: | :---: | :---: | :---: |
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

