# Initial Setup: PostgreSQL and Express.js with Prisma

## Step 1: Installing Necessary Tools

Make sure Node.js and npm are installed on your machine. Then, install the following dependencies:

1. PostgreSQL: Download and install PostgreSQL from the official website.
2. Create a PostgreSQL database (e.g., `workshop`).

## Step 2: Initializing the Express.js Project

1. Create a new folder for your project and open it in the terminal.
2. Run the following commands:

```bash
npm init -y
npm install express
```

## Step 3: Installing Prisma

Install Prisma as a development dependency:

```bash
npm install prisma --save-dev
```

Initialize Prisma by running the following command:

```bash
npx prisma init
```

Follow the instructions to set up the connection to your PostgreSQL database. Make sure to use the connection information for the database you created earlier.

## Step 4: Creating a Simple Express.js Application

Create an index.js file in the root of your project.

In index.js, set up Express.js to start a basic HTTP server:

```javascript

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Step 5: Using Prisma in Your Application

In the prisma folder, open the schema.prisma file.
Define your database models. For example:

```prisma
model User {
  id       Int      @id @default(autoincrement())
  username String
  email    String   @unique
  posts    Post[]
}

model Post {
  id      Int      @id @default(autoincrement())
  title   String
  content String
  author  User     @relation(fields: [authorId], references: [id])
  authorId Int
}
```

Run the following command to generate the corresponding Prisma files:

```bash
npx prisma generate
```

Use Prisma in your Express.js application:

```javascript
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```


## Step 6: Running the Application

Start the Express.js server:

```bash
node index.js
```