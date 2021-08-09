# Workshop Serverless - SETUP

### Package Managers
Please make sure you have the following programs installed:
- [node (version 14 or higher)](https://github.com/nodejs/node): javascript interpreter
- [npm](https://www.npmjs.com/): node package manager
- [yarn](https://yarnpkg.com/): a better package manager

To install `node` and `npm`:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

To install `yarn`: `npm install --global yarn`

### Github
> Lets create your app repository and get the base 🤲
- Create a Github repositoty (named: `Serverless-Gifs-App` for example) and clone it
- Download this [file](https://downgit.github.io/#/home?url=https://github.com/adrienfort/Workshop-Serverless/tree/master/Netlify-App)
- Unzip the file and move what's inside into your repository (don't forget the files starting by a `.`)
  <details>
    <summary>You should have this :</summary>
  
   ![](Netlify-App/public/setupFiles.png)

  </details>
> Now we gonna verify that the app is working 👍
- Run `yarn install` to install the dependencies
- Run `yarn start` to start the server
- In your favorite browser, go to `http://localhost:3000`
  <details>
    <summary>You should see :</summary>
  
   ![](Netlify-App/public/setupPage.png)

  </details>
- Shut down the server (Ctrl + C)

> To finish this part, we gonna push everything on github 📌
- Commit and push

### Netlify
- Go [here](https://www.netlify.com/) and create an account (signup using github) if you haven't already one

### Giphy
- Go [here](https://developers.giphy.com/docs/sdk/)
- Click the "Create an App" button
- Create an account
- You should get a private key

### Serverless Framework
- TODO

[Go back to the exercise](./README.md)
