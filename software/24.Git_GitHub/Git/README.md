# Part 1: Git

:heavy_check_mark: Competencies:
- The basics of git (you're probably already familiar with these)
- A good, easy to use git workflow with branches
- Extra stuff about why doing stuff one way or the other

## Introduction

There are a bunch of hyperlinks in this workshop, it is meant to give you as much information as possible so please follow them and read the website content.

There are some git commands that won't really be seen on their own but will be mentioned on some parts where it matters.

If you feel that information has been left out, you can always check the man.

## Step 0 - Initialization

Even though it seems obvious, you need [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed for this workshop

You will have a repo ready on the GitHub Classroom setup for this part.

This workshop is meant to see everything with git, the start may be a bit tedious, but it's better to go over the basics for people who need it rather than skip it.

Check the [Oh My Zsh](#oh-my-zsh) tip.

## Step 1 - Initialize a repository locally and modify its content

### :bookmark_tabs: Description:

There are multiple ways to initialize a repository locally.

### Local and Remote

Throughout all this workshop, we will make references to local and remote repository.

You have to understand that the remote repository is the one hosted onto the server (for example GitHub's servers).
This is where people will retrieve others work from.

Then you have the local repository which is the copy of the remote one that you have on your computer.
This is where you will make all your modifications before pushing those.

### Clone an existing repository

The most known one is to clone a repository using `git clone`.

It is recommended to clone via ssh rather than https.
Check the [HTTPS vs SSH clone](#https-vs-ssh-clone) tip.

#### :pushpin: Tasks:

If you haven't already, go ahead and clone the GitHub repository created for this workshop.

### Initialize a directory as a repository

You can also simply initialize a directory as a git repository by using `git init`

Once again it is recommended to use the SSH URL instead of the HTTPS one.

_This part doesn't require you to do anything it's mainly for knowledge_

Before applying any changes, it is a good reflex to check what has been modified.

### Control what files can be added

It is recommended to use a `.gitignore` file to list all the files you never want to push (like binaries, or your local IDE configs).
You can even have generated ones based on the language you're developing in.

### Check what's been modified

You have multiple ways of doing that.

The first one is to check the status of your local repository with `git status`, you will see what files have been changed.

After that, you can see exactly what lines have been modified using `git diff`.

### Add modifications to the index

When you want to modify the repository content, you have multiple ways of doing that.

The one that you might already know is using `git add`, a lot of people use `git add .` at the root of the repository, but it is not recommended because you might add files that you do not want to.
Also, a better way of adding everything is using `git add --all`, because if you're not at the root of your repository, one will work and not the other.

`git add .` is more intended to be used when you're wandering around in your repo and want to add the folder you're in.

You also have other commands that can be used to modify files such as `git rm` and `git mv`, they are respectively used to remove and move a file.

#### :pushpin: Tasks:

Add a file named `step1.txt` with "Hello World!" written in it.

### Commit your modifications

First, it is important that you understand that the commit history of a repo should not be modified, you may only add commits to the succession of the history.

Once you have modified your files and added these modifications to the index, you can go ahead and commit those.
Keep in mind that a single commit should make as few changes as possible, and should keep the changes on the same topic.
It is completely fine to commit a single line.

I recommend using `git commit` without the `-m` option, this will open your default editor and allow you to write a formatted message.

By default, `vi` will be your default editor, if you want to change it, you can use `git config` and change the value of `core.editor` to your preferred editor.

_You can change your default editor for every program by setting the environment variable EDITOR_

If you wish to include the modifications you have made to all the files already tracked by git but do not wish to add untracked files you can simply use the `-a` option.
Think about signing off your commits when you contribute to public repos with `-s`.

#### :pushpin: Tasks:

Simply commit this file, and try to find a [good commit message](https://cbea.ms/git-commit/) that you will want to read, an easy way to do that is following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/).

### Check the commits

you can now easily check the commits that have been made using `git log`

### Apply your changes to the remote

In order to apply your changes to the remote, you can simply use `git push`.

You probably have heard of force push, you shouldn't use it most of the time, the only reason to use it would be to push
changes you applied to your branch by rebasing your branch on top of main, because it will apply the changes from main
before the changes made on your branch, hence rewriting the history.

#### :pushpin: Tasks:

Go ahead and push your commit.

### Apply changes on the remote to your copy of the repository

Here again you can simply retrieve those changes using `git pull`

In case you have made changes locally, you will need to put these changes away, you can do this using the `git stash` command.

For the record, pull is calling other git commands.
You probably have already seen in your git config that you can set the parameter `pull.rebase` to `true` or `false`.

It allows you to set how git pull acts.
So by default it will run a `git fetch` following by a `git merge origin/my-super-branch`, if you set `pull.rebase` to `true`, it will run a `git rebase origin/my-super-branch` instead of the merge.

### Retrieve changes on the remote without applying them

You can actually check if there have been changes made onto the remote without applying them or checking on a web interface.
For this, you have to use `git fetch`

## Step 2 - Revert changes

### :bookmark_tabs: Description:

Reverting changes comes in handy a lot of times, and you are really happy to know how to do that when you need it.
It takes all the stress off and allows you to do it properly because you are confident of what you are doing and not 
hesitating.
So when you need to do that last minute you will make fewer mistakes by knowing what you are doing.

### Remove a mistake/test made locally

There are multiple ways of doing this but let's see one that I particularly like for its simplicity.
It used the `git stash` command.

So you have made changes to test stuff out and realise that you've made a lot of changes and don't want to undo these by hand.
You can just run `git stash push <files with modifications to drop>` and `git stash drop`, be careful because it isn't retrievable past this point.

For your knowledge, know that `git stash` also has other commands like `pop` and `apply`.
`apply` allows you to reapply the changes stored, whereas `pop`, runs apply followed by drop when there are no conflicts.

### Remove a mistake made by a local commit

Let's say you have committed something locally but not pushed it yet, and you realise that it was a mistake, you can easily delete it with `git reset`.

The exact command would be `git reset --hard HEAD~N` where N is the number of commits you want to delete.
Be careful because you won't be able to retrieve it after the fact.
This could also be used to remove sensitive information, but you would have to rewrite the commit history which isn't that great.

### Remove a mistake made by a pushed commit

First go ahead and add a file named `step2.txt` with "This is a bug", written in it, commit it and push it.

Remember how we said that making small commits was a good thing, well this is where making small commits comes in handy.
Well now you will learn how to revert a commit, which allows fixing bugs easily.

#### :pushpin: Tasks:

Let's assume that the step2.txt was not intended to be pushed, you can simply go ahead and use `git revert` on the commit to revert the changes and get back to the state without this commit.

Go ahead and use `git revert` on your last commit.

## Step 3 - Branches

### :bookmark_tabs: Description:

Now that you know new things about git, you may want to improve your workflow and use branches.

### Create a new branch for a new feature

You will want to create a branch that has the content of main to be able to work on that base and add your feature.
Here there are also multiple ways of doing that, but let's stick with the easiest and safest way, using `git switch`

You can simply create a branch and switch to it at the same time using `git switch -c <my branch name>`.
Yes `git checkout` can also be used but checkout allows more than just switching to branch, so we'll stick to `git switch`.

#### :pushpin: Tasks:

Go ahead and create a branch named `feat/step3`, and push it.
Add a file named `step3.txt` containing "WIP feature".

### Update your branch with changes made on `main`

When changes have been made on main, while you were working on your feature, you will need to first apply these changes on your branch, resolve conflicts and push it to your branch.
After that, you will be able to merge your work into main.

#### :pushpin: Tasks:

First, you will need to update main so switch to main and pull the changes.
For the sake of the workshop, you will push a file named `coworker_feature.txt` on main containing "Most awaited feature".

Then go back to your branch and use `git rebase` onto main.
Now you would resolve conflicts if there are any.
Then you can push, but since you rewrote your history you need to force push, it is recommended to use the `--force-with-lease` option instead of `-f`

### Merge your branch into main

Now that you are completely up-to-date with main and that you have finished your feature, you can switch to main and use `git merge` or `git rebase` with your feature branch to apply the changes to main, and push it.

This process can be made using Pull Requests on GitHub but this is not the focus right now.

#### :pushpin: Tasks:

So go ahead and merge your branch into main using rebase (there are reasons why you want to rebase and not merge but it is not the focus here, and it is explained in the GitHub part of this workshop).

### Manage branches

In the end, you can manage your branches using the `git branch` command, so using it, now delete the `feat/step3` branch you created earlier.

## Step 4 - Restore files

### :bookmark_tabs: Description:

Sometimes you may delete files but want to retrieve them later.

### The old method

We've seen earlier that `git switch` allows to change branch but to retrieve a file this is useless.
There exists a command that allows to switch commits, `git checkout`.

Used well it can help you restore deleted files.

### The more recent method

Another command could be `git restore` which works the same way as you'd do with `git checkout` but is much easier to use.

#### :pushpin: Tasks:

So go ahead and restore the file `step2.txt`

## Summary

During this workshop, we've made you use a particular workflow with git.
This is obviously not the only one that exists, but it is the most widely used one, and it is fairly easy to understand
and use.

So quickly here is how you would work with branches:
- Commit changes on your branch
- Checkout on main
- Pull main
- Checkout on your branch
- Rebase your branch on top of main
- Force push

## To go further

You have learned a lot about git and a lot about processes used in most workflows using git nowadays.

Make good use of it.
There are still a lot of stuff to learn about git so here are a few:
- git bisect
- git cherry-pick
- git clean
- git range-dif
- git shortlog
- git submodule
- git tag
- git remote
- git blame
- Check out `man git`, it links to many man pages about git and good git practices.

There are multiple graphical tools for git, the default one (bundled with git) is `git gui`, but another good one is `gitg`.

## Tips

### Oh My Zsh

<details>

> If you are using OhMyZsh and aren't using the git aliases it comes with you are making a big mistake so check out the available git aliases and try and use those, you will gain time by typing fewer letters and have much more advanced formatting sometimes (thinking about `glods` here).
To see those aliases it's simple: `alias | grep git`

</details>

### HTTPS vs SSH clone

<details>

> SSH repository URLs can be identified as they start with `git@github.com:` whereas HTTPS URLs start with `https://github.com/`
The reason why ssh is recommended is that you don't have to enter your username and password everytime you want to pull or push because your ssh key authenticates you, and it is more secured than your password.

</details>
