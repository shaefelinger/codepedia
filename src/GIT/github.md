# GitHub

## What is GitHub

While git is a software, GitHub is a platform to host your git repositories.

------

## Remote Repositories

### GIT TEAMWORK

> hies sind noch ein paar sachen doppelt

by using *remotes*. A remote is a shared Git repository that allows multiple collaborators to work on the same Git project.  In order to get your own replica you’ll need to *clone* it with:

```
git clone remote_location clone_name
```

->is your *local* copy of the Git project. If you commit changes to the project here, they are still only local.

One thing that Git does behind the scenes when you clone is give the remote address the name *origin*, so that you can refer to it. In this case, the cloned original remote is *origin*.

You can see a list of a Git project’s remotes with the command:

```
git remote -v
```

- ​		Git lists the name of the remote, origin, as well as its location.
- ​		Git automatically names this remote origin, because it refers to the remote repository of origin. However, it is possible to safely change its name.
- ​		The remote is listed twice: once for (fetch) and once for (push).

------

A git repository is a project, or the root folder of your project. (created with `git init`)

### What is a remote? 

A *remote* is a Git repository that lives *outside* your Git project folder.

Remote is your server where you store your git repository.  Remotes can live on the web, on a shared network or even in a separate folder on your local computer.With that, you synchronize your local repository that is on your laptop.



### `git clone` 

```
git clone <url of a remote repository>
```

Clone repository - create a copy of a remote repository

### `add origin` 

```
git remote add origin <url to your GitHub repository>
```

Create a remote copy of your repository:

1. Create an empty new repository on GitHub
2. Upload your local repository to this new GitHub repository

### `show` 

```
git remote showgit remote show
```

To see if you have a remote, and what its alias is.

- Remotes have a name,also called an alias, and a URL(the link to the remote)
- This shows origin. This is the name or alias for our remote server. That’s the default name that every remote repository gets

```
`git remote show origin`
```

To see what the URL of the remote is

------

## Push, Pull, Fetch

### push

`git push` - push local, committed changes to your remote repository

`git push -u origin <branch name>` - If your branch is new, you need to add something to upload it

### fetch

`git fetch` - To see if there are changes that someone else pushed to remote

### pull

`git pull` - To pull these changes to your local repository

------

## Pull Requests

A pull request is a request to merge a branch back to master (or back into the original branch where you branched it from)

The easiest way to create a Pull Request is to do so from the GitHub website

Pull Requests are a good way to have your team mates look at your code before it is merged and do a code review.

#### Workflow:

*On Github:*

1. Click  "Create pull request"
2. Check your changes below. Check for mistakes. If you find any, push them again
3. Give the PR a meaningful title and a description if it is a larger change
4. Create the pull request
5. Choose someone to give you a code review
6. If they request changes, change the code and push again
7. If they approve, click "Squash and merge" (if there are conflicts, solve them directly in Github if possible)
8. After merging, click "Delete branch" to delete the merged branch

*Locally*

1. Go to the master/main branch 

   ```
   git checkout main
   ```

2. Get the new commits of the merged branch

   ```
   git pull
   ```

3. Delete the old branch

   ```
   git branch -d *oldBranch*
   ```

   

------

### Git workflow

The workflow for Git collaborations typically follows this order:

- Fetch and merge changes from the remote
- Create a branch to work on a new project feature
- Develop the feature on your branch and commit your work
- Fetch and merge from the remote again (in case new commits were made while you were working)
- *Push* your branch up to the remote for review

Steps 1 and 4 are a safeguard against *merge conflicts*, which occur when two branches contain file changes that cannot be merged with the git merge command

We also learned the following commands

- ​		git clone: Creates a local copy of a remote.
- ​		git remote -v: Lists a Git project’s remotes.
- ​		git fetch: Fetches work from the remote into the local copy.
- ​		git merge origin/master: Merges origin/master into your local branch.
- ​		git push origin <branch_name>: Pushes a local branch to the origin remote.

------

## Solve Conflicts

There might be a situation where both your team mate and you changed the same file, and now you want to merge both changes into master -> conflict

-> look at the Coding-School Handout, or [here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

------

## Rebase

Following situation: Your branch has changes, but master also has changes. You don't want to merge master into your branch, but you want your branch to build on the newest commits on master.

Rebasing is a difficult thing. It can be a valuable skill knowing how to use rebase, but if you have little experience, it is ok to not know the details.

- [Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
- [Rewriting History](

------

> ab hier codecademy



[**mastering git:**](https://thoughtbot.com/upcase/mastering-git)

------

## GitHub

*GitHub* is popular hosting service for Git repositories.GitHub allows you to store your local Git repositories in the cloud. With GitHub, you can backup your personal files, share your code, and collaborate with others.

profile-page

in repositories > new  -  creates a new  repo



ititialize with readme etc. only if starting from scratch, otherwise there can be merge problems... -> better initialise without files!!

readme

gitignore

```
git remote -v 
```

-> shows remote

------

### git hub

1. neues repo erzeugen
2. git remote add origin -> erzeugtes repo dem arbeitsfolder zuweisen
3. git push - u origin master -> inhalt des folders hochpushen

[**https://guides.github.com/introduction/flow/**](https://guides.github.com/introduction/flow/)

------

### Pull Request

*Pull Requests initiate discussion about your commits. Because they're tightly integrated with the underlying Git repository, anyone can see exactly what changes would be merged if they accept your request.*

*By using GitHub's @mention system in your Pull Request message, you can ask for feedback*

 *If you're using a Fork & Pull Model, Pull Requests provide a way to notify project maintainers about the changes you'd like them to consider. If you're using a Shared Repository Model, Pull Requests help start code review and conversation about proposed changes before they're merged into the main branch.*

*Pull Request comments are written in Markdown, so you can embed images and emoji, use pre-formatted text blocks, and other lightweight formatting.*

------

[**Video serie: get up and running**](https://www.youtube.com/playlist?list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-)

[**GitHub Learning Lab**](https://lab.github.com/)

[**GitHub Guides**](https://guides.github.com/)

------

## .gitignore

[how-to-use-gitignore](https://www.pluralsight.com/guides/how-to-use-gitignore-file)

[Github collection of .gitignore-templates](https://github.com/github/gitignore)

------

## Change from Password to SSH

check the current remote URL:

```
$ git remote -v
```

```
git remote set-url origin ***@vs-ssh.visualstudio.com:v3/***/PROJ/PROJ
```

