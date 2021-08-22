# Workshop 22 - SETUP

## Dependencies
Please make sure you have the following programs installed:
- [node (version 14 or higher)](https://github.com/nodejs/node): javascript interpreter
- [npm](https://www.npmjs.com/): node package manager
- [yarn](https://yarnpkg.com/): a better package manager

To install `node` and `npm`:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

To install `yarn`: `npm install --global yarn`

## Github
> You will need a github repository in order to use Netlify 📂
- Create a Github repositoty (named: `Serverless-Gifs-App` for example) and clone it with `git clone [YOUR REPO SSH KEY]`
- Download the [files](./Netlify-App.zip)
- Run `mv Netlify-App/* Netlify-App/.* [YOUR REPO NAME]`
- Run `cd [YOUR REPO NAME]`
- Run `yarn install` to install the dependencies
> Now we gonna verify that the app is working 👍
- Run `yarn start` to start the server
- In your favorite browser, go to `http://localhost:3000`
  <details>
    <summary>You should see :</summary>
  
   ![Netlify Setup Page](.github/assets/setupPage.png)

  </details>
- Shut down the server (Ctrl + C)

> To finish this part, we gonna push everything on github 📌
- Commit and push

## Netlify
- Go to [Netlify website](https://www.netlify.com/) and create an account (signup using github) if you haven't already one

## Giphy
- Go to [Giphy website](https://developers.giphy.com/docs/sdk/)
- Click the `Create an App` button
- Create an account
- You should get a private key on your dashboard
- Take care of it, you will need it sooner !

## Serverless Framework
**Not inside your github repository created above**
- Install [serverless framework](https://www.serverless.com) with `npm install -g serverless`
- Download the [files](./Serverless-API.zip)
- Run `unzip Serverless-API.zip`
- Run `cd Serverless-API`
- Run `run yarn install` to install the dependencies
> Now we gonna verify that the api is working 👍
- Run `yarn test` to verify that everythin works
- You should the get all the tests successfull (in green)

[Go back to the exercise](./README.md)
