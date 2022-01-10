# The command line

## Bash

**Bash**, or the **B**ourne-**A**gain **SH**ell

Bash is the default shell for Linux and Mac

[wiki Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

[https://www.gnu.org/software/bash/](https://www.gnu.org/software/bash/)

MacOS version 10.15 (Catalina) and higher uses a similar default shell called **Z shell** or **Zsh**. 

 

------

## Basic Command Stucture

`$`is called the _shell prompt

```
Command [options][arguments]  [redirect] [redirect destination]
```

- Commands are case sensitive
- **argument** indicates on what the command is to perform its action (file(s)/folder)
- **Options** are generally preceded by a hyphen (**-**)
- for most commands, options can be strung together: `ls -al` or seperated: `ls -a -l`
- redirect: 
  -  `>` is used for redirecting the output of a program to something other than stdout (standard output, which is the terminal by default). Overwrites the file if it exists or creates it if it doesn't exist
  -  `>>` appends to a file or creates the file if it doesn't exist



---

## Helper Commands

-  `clear` clears the terminal
-  `tab` autocompletes the name of a file or directory
-  ↑ and ↓ allow you to cycle through previous commands

`echo "Hello Command Line" >> hello_cli.txt` to create a new file named **hello_cli.txt** and add "Hello Command Line"

`cat hello_cli.txt` to print the contents of the **hello_cli.txt**

`~` is User-Home Directroy

- alt-click -> textstelle auswählen
- `ctrl-a` -> to start of line
- `ctrl-e`-> to end of line
- `ctrl-u`-> clear line

`open -a Atom Text.txt` -> opens file in application

Space: `\`

`/` root

`~` User-directory

---

## Commands Overview

| Commands            |                                                              |
| ------------------- | ------------------------------------------------------------ |
| `ls`                | List Files                                                   |
| `pwd`               | Arbeitsverzeichnis (print working directory)                 |
| `cd <directory>`    | change directory                                             |
| `cd ..`             | one level up                                                 |
| `mkdir <directory>` | make directory - Verzeichnis erstellen                       |
| `rmdir <directory>` | Verzeichnis löschen                                          |
| `rm -r <folder>`    | Delete a folder and all contents                             |
| `rm <file>`         | delete File                                                  |
| `touch <file>`      | Create File                                                  |
| `open`              | Open File                                                    |
| `say`               | speech output                                                |
| echo                | [display a line of text](https://www.howtogeek.com/446071/how-to-use-the-echo-command-on-linux/) |

---

### ls - list

`ls`

-  `-a` - lists all contents, including hidden files and directories
-  `-l` - lists all contents of a directory in long format, as well as the file permissions
-  `-t` - orders files and directories by the time they were last modified.

```
$ ls -l

drwxr-xr-x 5 cc eng 4096 Jun 24 16:51 action
drwxr-xr-x 4 cc eng 4096 Jun 24 16:51 comedy
-rw-r--r-- 1 cc eng   0 Jun 24 16:51 genres.txt
```

The `-l` option lists files and directories as a table with 7 columns:

1. Access rights.
2. Number of hard links. Counts child directories and files. Includes the parent directory link (..) and current directory link (.).
3. Username of the file’s owner
4. name of the group that owns the file
5. size of the file in bytes.
6. date & time that the file was last modified.
7. name of the file or directory.

multiple options can be used together, like `ls -alt`

ls `-alt` lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.

[ls command main options](https://www.rapidtables.com/code/linux/ls.html)

------

### open

`open. ` opens the current folder

`open -a "Visual Studio Code"` open application

` open -a "visual studio code" index.md` open file with application

---

### cat

`cat` command outputs the contents of a specified file.

---

### cp - Copy

`cp` copy files or directories

```
cp source.txt destination.txt
```

-> copy the contents of a source file into a destination file:

```
cp source.txt destination/
```

-> copy a file to a destination directory:

copy multiple files into a directory, use `cp` with a list of source files as the first arguments, and the destination directory as the last argument.

```
cp file1.txt file2.txt my_directory/
```

---

### Wildcards

we can use special characters like \* to select groups of files.

```
cp * my_directory/
```

copy all files in the current working directory into another directory.

```
cp w*.txt my_directory/
```

selects all files in the working directory starting with “w” (prefix) and ending with “.txt” (suffix), and copies them to **\*my_directory/\***.

---

### mv - Move

similar to cp in its usage, also:

```
mv file_origin.txt file_renamed.txt
```

->To rename a file, use mv with the old file as the first argument and the new file as the second argument

trick: rename:

```
mv index.html about.html
```

---

### rm - Delete

`rm -r` removes directories

`-r` is an option that modifies the behavior of the `rm` command. The `-r` stands for “recursive,” and it’s used to delete a directory and all of its child directories.

```
rm -r unwanted_directory
```

Be careful when you use `rm`! It deletes files and directories permanently. There isn’t an undelete command, so once you delete a file or directory with `rm`, it’s gone.

---

### `sudo`

-> super User do -> Admin-Rights

> `sudo rm -rf --no-preserve-root/` erase entire drive, no recovery

---

## (I/O) redirection.

To direct the input and output of a command to and from other files and programs, and to chain commands together in a pipeline

- **stdin** _standard input_: information inputted into the terminal through the keyboard or input device.
- **stdout** _standard output_: information outputted after a process is run.
- **stderr** _standard error_:  an error message outputted by a failed process.

Redirection reroutes standard input, standard output, and standard error to or from a different location.

e.g. redirects standard output of a command to a file, overwriting previous content.

redirects the standard output to a file

```
echo "Hello" > hello.txt
```

"Hello" is entered as the standard input, and is then redirected to the file **hello.txt** by > .

```
$ cat deserts.txt > forests.txt
```

---

### `>`

takes the standard output of the command on the left, and redirects it to the file on the right.

Note that > overwrites all original content

---

### `>>`

redirects standard output of a command to a file, appending new content to old content.

if we want to be able to add to a file without losing the original text? We can use the >> command!

---

### `<`

redirects standard input to a command.

`<` takes the standard input from the file on the right and inputs it into the program on the left.

```
cat < deserts.txt
```

---

### `|`

`|` is a “pipe.” redirects standard output of a command to another command.

---

### `sort`

sort takes the standard input and orders it alphabetically for the standard output (it doesn’t change the file itself)

sorts lines of text alphabetically.

```
$ sort continents.txt
```

```
$ cat glaciers.txt | sort > sorted-glaciers.txt
```

takes the standard output from cat glaciers.txt and “pipes” it to sort. The standard output of sort is redirected to a new file named **sorted-glaciers.txt**.

---

### `wc` word count

---

### `uniq`

 “unique.” 

- Filters out adjacent, duplicate lines in a file.

- An effective way to use `uniq` is to call `sort` to alphabetize a file, and “pipe” the standard output to uniq: Here we simply send filtered contents to **uniq-deserts.txt**,

  ```
  sort deserts.txt | uniq > uniq-deserts.txt
  ```

---

### `grep`

 “global regular expression print”

- searches for a text pattern and outputs it.
- searches files for lines that match a pattern and then returns the results. 
- case sensitive.

```
$ grep Europe continents.txt
```

grep searched for anything that matched “Europe” in **continents.txt**.

`grep -i`  case insensitive

`grep -R` searches all files in a directory and outputs filenames and lines containing matched results. -R stands for “recursive”.

```
grep -R Arctic /home/ccuser/workspace/geography
/home/ccuser/workspace/geography/deserts.txt:Arctic Desert
/home/ccuser/workspace/geography/oceans.txt:Arctic Ocean
```

`grep -R` searched the **/home/ccuser/workspace/geography** directory for the string “Arctic” and outputted **filenames and lines** with matching results.

`grep -Rl` searches all files in a directory and outputs **only filenames** with matched results (no lines)

---

### `sed`

 “stream editor.”

- searches for a text pattern, modifies it, and outputs it.


- accepts standard input and modifies it based on an _expression_, before displaying it as output data. similar to “find and replace.”


```
sed 's/snow/rain/' forests.txt
```

-  s: stands for “substitution.” It is _always_ used when using sed for substitution.
-  searches **forests.txt** for the word “snow” and replaces it with “rain.” Will only replace the first instance of “snow” on a line.

```
sed 's/snow/rain/g' forests.txt
```

-  `g` expression, meaning “global. _all_ instances of “snow” on a line will be turned to “rain.”


------

## The Nano-editor

`nano` 

- If you are having trouble in nano and need to exit, use Ctrl + C
- Ctrl + O saves a file. O stands for output.
- Ctrl + X exits the nano program. X stands for exit.
- Ctrl + G opens a help menu.

https://www.nano-editor.org/

---

## VIM editor

| Key | Command     |
| --- | ----------- |
| i   | insert mode |
| esc |             |
| :wq |             |
| .x  | exit        |

---

## The command line environment

Preferences and settings of the current user.

### Bash Profile

is a file used to store environment settings for your terminal 

`~/.bash_profile.`

-  The ~ represents the user’s home directory.
-  The . indicates a hidden file.
-  The name `~/.bash_profile` is important, this is how the command line recognizes the bash profile

To open and edit the bash profile, you can use

```
nano ~/.bash_profile
```

for zsh:

```
nano ~/.zshrc
```

To activate the changes made in `~/.bash_profile` for the current session, use this following command (without closing the terminal):

```
source ~/.bash_profile
```

for zsh

```
source ~/.zshrc
```

---

### alias

create shortucts

```
alias pd="pwd"
alias hy="history"
alias ll="ls -la"
```

#### My Personal Alias-Setup

```
alias zshrc="source ~/.zshrc"
alias zs="code ~/.zshrc"
alias c="clear" 
alias gs="git status"
alias gc="git checkout"
alias gb="git branch"
alias gl="git lg"
alias gp="git push"
alias gcb="git checkout -b"
alias gac="git add . && git commit -m"

alias nrd="npm run dev"
alias o="open"
alias L="ls -lF"
alias l="ls -F"
alias ü="cd .."
```



---

### Environment Variables

_Environment variables_  can be used across commands and programs and hold information about the environment.

store this in `~/.bash_profile` (or `~/.zshrc` )

set and export an environment variable:

```
export VARIABLE="Value"
```



`export` makes the variable to  available 

-  `USER` is the name of the current user.
  - `export USER="Jane Doe"` sets the environment variable USER.
  - the command `echo $USER` returns the value of the variable. Note that `$` is always used when returning a variable’s value.
-  `PS1` is the command prompt. `export PS1=">> "`
-  `HOME` is the home directory. It is usually not customized. `~` is short for HOME
-  `PATH` returns a colon `:` separated list of file paths. It is customized in advanced cases.
-  `env` returns a list of environment variables. You can redirect the output, using grep to select the variable you want to see.

### Excercise

https://www.codecademy.com/courses/learn-the-command-line/articles/command-line-offline-project

------

### zsh

- [Learn Zsh in 80 Minutes](https://www.youtube.com/watch?v=MSPu-lYF-A8)
- reload: `source ~/.zshrc`
- [getting started with oh-my-zsh](https://dienbui.medium.com/using-oh-my-zsh-f65be6460d3f)
- [Use Zsh and Oh-my-zsh to Always Show Git Status in Your Terminal](https://www.youtube.com/watch?v=ktYqOVwnyTs)
- [Top 12 Oh My Zsh Themes](https://travis.media/top-12-oh-my-zsh-themes-for-productive-developers/)
- [powerline fonts](https://fmacedoo.medium.com/oh-my-zsh-with-powerline-fonts-pretty-simple-as-you-deserve-fbe7f6d23723)
- [agnoster-theme in vs code](https://blog.zhaytam.com/2019/04/19/powerline-and-zshs-agnoster-theme-in-vs-code/)

configuring the promt:

`%d` , `%/` Current working directory. If an integer follows the ‘`%`’, it specifies a number of trailing components of the current working directory to show; zero means the whole path. A negative integer specifies leading components, i.e. `%-1d` specifies the first component.

- [promt reference](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion)
- [Add Git Branch Name to Terminal Prompt (bash) ](https://gist.github.com/joseluisq/1e96c54fa4e1e5647940)
- [Add Git branch information to your ZSH prompt](https://www.themoderncoder.com/add-git-branch-information-to-your-zsh-prompt/)



------

## iTerm2

[alternative Terminal](http://sourabhbajaj.com/mac-setup/iTerm/README.html)

------

## Links

- [Explainshell](https://explainshell.com/)
- [Linux Commands Handbook](https://www.freecodecamp.org/news/the-linux-commands-handbook/)
- [OSX Bash profile
- [https://www.learnenough.com/command-line-tutorial/basics ](https://natelandau.com/my-mac-osx-bash_profile/)
- [commandlinepoweruser.com](https://commandlinepoweruser.com/)

------

## Tips

cmd-shift-. shows hidden Files in Finder

