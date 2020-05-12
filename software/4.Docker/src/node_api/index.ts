import express from "express";
import { get } from "env-var";


const app = express();

const port: number = get('PORT').required().asPortNumber();

async function initServer() {
  app.listen(port, 'localhost');
  console.log("Server listen on http://localhost:" + port);
}

async function main() {
  await initServer();

  app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to the workshop!")
  });
}

main()
  .catch((e) => console.error(e));