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
- It returns the created user

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

<Details><Summary><strong>Steps to install Apollo and Nexus</strong></Summary>

- Download the [src](./src) folder from our repo: click [here](https://downgit.github.io/#/home?url=https://github.com/PoCInnovation/Workshops/tree/master/software/3.Prisma)
- Extract the zip into your `starter` folder and replace the `package.json`.
- Run `npm install` in your `starter` folder to install the new dependencies.

</Details>

If you subsequently run `npm run dev`, you will get an error, which is normal. For the server to run properly, you have to add an `objectType` that defines the `Post` table in `schema.js` .  
An example of the `User` table is present in the file, it's up to you to do `Post`.

> [Nexus model documentation](https://nexusjs.org/docs/pluginss/prisma/api#tmodel)

## Step 4: Setting up the CRUD with Nexus

Now that your models are well defined, you can implement the data manipulations seen in Step 2, but this time with Nexus.

You will build in your schema a `Query` object that will contain the methods to read data and a `Mutation` object that will contain the methods to edit data (add / update / delete).

- For them to take effect, you will have to add these objects to the `type` field of your `schema` defined at the end of [schema.js](./src/schema.js).

> [Nexus documentation about CRUD](https://nexusjs.org/docs/pluginss/prisma/api#tcrud)  
> For the different required fields, base yourself on what you see in your `schema.prisma`.

To test the queries/mutations you are going to set up, you can go to http://localhost:4000/ to use a playground that lets you to test your server.

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
<Details><Summary><strong>See Query and Mutations</strong></Summary>
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

## Authors
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Naoufesse Berrada](https://github.com/nowlow/)
- [Cyril de Lajudie](https://github.com/Axoloot/)
