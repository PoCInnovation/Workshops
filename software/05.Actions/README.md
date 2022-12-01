# Workshops 5 - Github Actions

This workshop is an introduction about devOps and continuous Integration (CI).

You'll learn the base of the CI thanks to github actions, but also some good practices and coding method.

## Step 0: Put the bases

We will create a CI for a simple Epitech project: do-op. We have unit-tests and functional tests. 

The finality is to execute those tests on `pull_request` from `dev` to `master`. It's an easy way to verify the code evaluated by "Marvin".

In order to setup your workflow, in your repository:
  - complete the [setup](https://github.com/PoCInnovation/Workshops/blob/master/software/05.Actions/SETUP.md)
  - create a branch `dev`
  - checkout in branch `dev`
  - create a directory `.github/workflows`

> Commonly, `.github` folder also contains an `assets` directory that stores your png used in README ect, another folder: `ISSUE_TEMPLATE` can be useful to setup template of bug_report or feature... 

Thanks to the `Makefile`, your objective is to run unit-tests and functional tests in the `epitest docker image`. 
We will create the same behavior in your CI so it's cool to understand steps first.

You can create a container thanks to the command: `sudo docker run --rm -it -v $PWD:/home/ -w /home epitechcontent/epitest-docker /bin/zsh`. It will setup a shell in the container.

Now, run tests in the container

> Check the `Makefile` to find the good command

Your CI will do the same things, but automatically in a [github runner](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

## Step 1: Your first action

Now it's time ! To begin with, you'll do a simple action by following these steps

##### Setup workflow

Create a file named `test.yaml` in the folder `.github/workflows`

Write a github Action with the following properties:
  - name: Tests
  - trigger event: `push` on branches `dev` and `main`
  - one job called `hello-world` which run on `ubuntu-20.04`
    
##### First step

Add a step called `Say hello world` which will execute the bash command "echo Welcome to the Github Actions workshop !".
Push your work and check on `https://github.com/<your-github-username>/<your-repository>/actions`.

Congratulation, you've written your first action !

> Check the help about workflow syntax [here](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

## Step 2: Run test

Now, we want to test our do-op, the objective is to run tests after push

Add a new job called `unit-test` composed of **3** steps:
  - Checkout repository thanks to [checkout action](https://github.com/marketplace/actions/checkout)
  - Run unit-tests
  - Run coverage

Use command from `step 0` to run tests 

⚠️ Your job must run on a container that support Criterion, use the Epitech image

Don't forget to define a name for each step, it's important to clarify your workflow.

> A [tip](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontainer) that can help you to run a job in a container

## Step 3: Artifact

Your tests run it's cool, but it's better to save information from your workflow.

A basic way to do that is an [artifact](https://github.com/marketplace/actions/upload-a-build-artifact).

Modify your previous job to redirect test and coverage output into file then add a new step which uploads a file from coverage file.

Your artifact must be called `coverage_outputs`.

**The step must run even if previous steps fail**.

> Find help about condition [here](https://docs.github.com/en/actions/learn-github-actions/contexts)

## Step 4: Functional test

The last step is about functional test (a good CI never lack of tests).

Write a new job in `test.yaml` that run functional test and upload result in an artifact named `function-tests_outputs`.

You should do **3** steps:
  - Checkout
  - Run functional tests
  - Upload artifacts

You can use steps from the previous exercise to help you.
 
In order to win time, your CI must now be triggered on `pull_request` on branches `dev` or `master`.
You must also protect your branch `master` from merge if the `pull request` isn't approved by peer (it's really useful when you work in group)
 
Congratulation, you have setup a clean workflow to do your Epitech project, us this to keep your project away from bad surprise.
 
## To go further

You've learned how make a continuous integration (CI). But remember, there is also continuous development !

Try to create a CD of this project, for example you can:
  - Create an image of the program with a Dockerfile
  - Create a new workflow that wait test to be successful and then build and push the image on docker hub or github package

If you like web development, you can:
  - Create a little API
  - Create a [Postman](https://www.postman.com/) collection to test your API
  - Create a workflow that test your API thanks to [Newman Action](https://github.com/marketplace/actions/newman-action)

You can also check these links
  - [Marketplace](https://github.com/marketplace?type=actions)
  - [Documentation](https://docs.github.com/en/actions)
  - [Write your own action](https://levelup.gitconnected.com/how-to-write-github-actions-30b54ddf6f52)
  
## Authors

| [<img src="https://github.com/TomChv.png?size=85" width=85><br><sub>Tom Chauveau</sub>](https://github.com/TomChv) | [<img src="https://github.com/PaulMonnery.png?size=85" width=85><br><sub>Paul Monnery</sub>](https://github.com/PaulMonnery)
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
