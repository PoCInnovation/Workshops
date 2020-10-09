# Setup

## Installation

You will need:
- [node (version 10 minimum)](https://github.com/nodejs/node): javascript interpreter
- [npm](https://www.npmjs.com/): node package manager
- [npx](https://www.npmjs.com/package/npx) : node_modules command executor

To install node:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

Then `sudo npm install -g npx`.

To start using prisma, just run the following command:
```bash
curl https://codeload.github.com/prisma/quickstart/tar.gz/master | tar -xz --strip=2 quickstart-master/javascript/starter
```

This will download a small project provided by Prisma developers to help you understand the basics. Just enter your newly created `starter` folder and run:

```sh
npm install
```

There are 5 important files in the `stater` folder:

- `package.json`: lists the npm dependencies.
- `prisma/schema.prisma`: the Prisma schema file that defines the database models.
- `prisma/.env`: Sets the database connection with its URL as environment variable.
- `prisma/dev.db`: SQLite database file.
- `script.js`: File in which you will code your functions.

You can also display the database via a web interface:
```sh
npx prisma studio --experimental
```

## Prisma in javascript code

We will see line by line what is in the `script.js` file:
```js
const { PrismaClient } = require("@prisma/client");
```

Node will look for the `@prisma/client` dependency in the `node_modules` folder (created with `npm install`).

<br>

```js
const prisma = new PrismaClient();
```
This line creates a new instance of a prisma client.

<br>

```js
async function main() {
  // ... you will write your Prisma Client queries here
}
```
Here we create an asyncronous function. We will code inside later.
> if you need more informations on how async functions work, [read this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

<br>

```js
main()
  .catch(e => {
    throw e
  });
  .finally(async () => {
    await prisma.$disconnect()
  });
```

Finally, this part of the code calls our `main` function, displays a message if an error has occurred and disconnects the prisma client once all actions have been completed.

Currently, if you do `npm run dev`, nothing should happen. We will prepare the basics for the next exercises, so add the following line to your main function:
```js
console.log("getUsers:\n", await getUsers())
```

and add above your `main` function:
```js
function getUsers() {
  return prisma.user.findMany();
}
```

If you run `npm run dev` again, you should have this output:
```js
getUsers:
 [ { id: 1, email: 'sarah@prisma.io', name: 'Sarah' },
  { id: 2, email: 'maria@prisma.io', name: 'Maria' } ]
```

**If you have finished all these steps, you can now move on to the exercises**.

[Go back to the exercises](./README.md)
