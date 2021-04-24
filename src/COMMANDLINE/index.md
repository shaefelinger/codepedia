# The command line

## Bash

**Bash**, or the **B**ourne-**A**gain **SH**ell

Bash is the default shell for Linux and Mac

https://en.wikipedia.org/wiki/Bash_(Unix_shell)

https://www.gnu.org/software/bash/

MacOS version 10.15 (Catalina) and higher uses a similar, but slightly different default shell called **Z shell** or **Zsh**. In most ways Zsh is an exact replacement for Bash, so there is no need to switch over or install Bash instead.



In the terminal, the first thing you see is $. This is called a *shell prompt*.

When a file, directory, or program is passed into a command, it is called an ***argument** (*the 2015 directory is an argument for the cd command.)

```
$ cd 2015
```

------

### Commands

### Helper Commands

- ​		`clear` clears the terminal
- ​		`tab` autocompletes the name of a file or directory
- ​		↑ and ↓ allow you to cycle through previous commands

`echo "Hello Command Line" >> hello_cli.txt` to create a new file named **hello_cli.txt** and add "Hello Command Line"

`cat hello_cli.txt` to print the contents of the **hello_cli.txt**

`~` is User-Home Directroy

- alt-click -> textstelle auswählen
- `ctrl-a` -> to start of line
- `ctrl-e`-> to end of line
- `ctrl-u`-> clear line



`open -a Atom Text.txt` -> opens file in application

Space: `\ `

------

## Basic Command Stucture

```
Command [option] [parameter] [umleitung] [ziel der umleitung]	
```

------

### Quick Overview

| Commands            |                                              |
| ------------------- | -------------------------------------------- |
| `ls`                | List Files                                   |
| `pwd`               | Arbeitsverzeichnis (print working directory) |
| `cd <directory>`    | change directory                             |
| `cd ..`             | one level up                                 |
| `mkdir <directory>` | make directory - Verzeichnis erstellen       |
| `rmdir <directory>` | Verzeichnis löschen                          |
| `rm -r <folder>`    | Delete a folder and all contents             |
| `rm <file>`         | delete File                                  |
| `touch <file>`      | Create File                                  |
| `open`              | Open File                                    |

------

### ls - list

`ls`

- ​		`-a` - lists all contents, including hidden files and directories
- ​		`-l` - lists all contents of a directory in long format, as well as the file permissions
- ​		`-t` - orders files and directories by the time they were last modified.

```
$ ls -l

drwxr-xr-x 5 cc eng 4096 Jun 24 16:51 action
drwxr-xr-x 4 cc eng 4096 Jun 24 16:51 comedy
drwxr-xr-x 6 cc eng 4096 Jun 24 16:51 drama
-rw-r--r-- 1 cc eng   0 Jun 24 16:51 genres.txt
```

The `-l` option lists files and directories as a table with seven columns separated by spaces:

1. Access rights.
2. Number of hard links. This number counts the number of child directories and files. This number includes the parent directory link (..) and current directory link (.).
3. The username of the file’s owner. Here the username is cc.
4. The name of the group that owns the file. Here the group name is eng.
5. The size of the file in bytes.
6. The date & time that the file was last modified.
7. The name of the file or directory.

In addition to using each option separately, like `ls -a` or `ls -l`, multiple options can be used together, like `ls -alt`

ls `-alt` lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.

------

### Cat

`cat` command outputs the contents of a specified file.

------

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

------

### Wildcards

we can use special characters like * to select groups of files.

```
cp * my_directory/
```

copy all files in the current working directory into another directory.

```
cp w*.txt my_directory/
```

selects all files in the working directory starting with “w” (prefix) and ending with “.txt” (suffix), and copies them to ***my_directory/\***.

------

### mv - Move

similar to cp in its usage, also:

```
mv file_origin.txt file_renamed.txt
```

->To rename a file, use mv with the old file as the first argument and the new file as the second argument

------

### rm - Delete

`rm -r` removes directories

`-r` is an option that modifies the behavior of the `rm` command. The `-r` stands for “recursive,” and it’s used to delete a directory and all of its child directories.

```
rm -r unwanted_directory
```

Be careful when you use `rm`! It deletes files and directories permanently. There isn’t an undelete command, so once you delete a file or directory with `rm`, it’s gone.

------

### `sudo` 

-> super User do -> Admin-Rights 

> `sudo rm -rf --no-preserve-root/` erase entire drive, no recovery

------

## (I/O) redirection.

Through *redirection* you can direct the input and output of a command to and from other files and programs, and chain commands together in a pipeline

- *standard input*, abbreviated as **stdin**, is information inputted into the terminal through the keyboard or input device.
- *standard output*, abbreviated as **stdout**, is the information outputted after a process is run.
- *standard error*, abbreviated as **stderr**, is an error message outputted by a failed process.

Redirection reroutes standard input, standard output, and standard error to or from a different location.

redirects standard output of a command to a file, overwriting previous content.

redirects the standard output to a file

```
echo "Hello" > hello.txt
```

"Hello" is entered as the standard input, and is then redirected to the file **hello.txt** by > .

```
$ cat deserts.txt > forests.txt
```

------

### `>`

 takes the standard output of the command on the left, and redirects it to the file on the right. 

Note that > overwrites all original content 

------

### `>>`

redirects standard output of a command to a file, appending new content to old content.

 if we want to be able to add to a file without losing the original text? We can use the >> command!

------

### `<` 

redirects standard input to a command.

`<` takes the standard input from the file on the right and inputs it into the program on the left. 

```
cat < deserts.txt
```

------

### `|`

`|` is a “pipe.” redirects standard output of a command to another command.(checken...)

------

### `wc` word count

------

### `sort` 

sort takes the standard input and orders it alphabetically for the standard output (it doesn’t change the file itself)

sorts lines of text alphabetically.

```
$ sort continents.txt 
```

```
$ cat glaciers.txt | sort > sorted-glaciers.txt 
```

Here, the command takes the standard output from cat glaciers.txt and “pipes” it to sort. The standard output of sort is redirected to a new file named **sorted-glaciers.txt**.

------

### `uniq`

stands for “unique.” It filters out adjacent, duplicate lines in a file. 

A more effective way to use `uniq` is to call `sort` to alphabetize a file, and “pipe” the standard output to uniq:

```
sort deserts.txt | uniq > uniq-deserts.txt 
```

Here we simply send filtered contents to **uniq-deserts.txt**,

------

### `grep`

grep stands for “global regular expression print.”

It searches files for lines that match a pattern and then returns the results. It is also case sensitive. searches for a text pattern and outputs it.

```
$ grep America continents.txt 
```

grep searched for anything that matched “America” in **continents.txt**.

`grep -i` enables the command to be case insensitive

`grep -R` searches all files in a directory and outputs filenames and lines containing matched results. -R stands for “recursive”. 

```
grep -R Arctic /home/ccuser/workspace/geography 
/home/ccuser/workspace/geography/deserts.txt:Arctic Desert
/home/ccuser/workspace/geography/oceans.txt:Arctic Ocean
```

`grep -R` searched the **/home/ccuser/workspace/geography** directory for the string “Arctic” and outputted **filenames and lines** with matching results.

`grep -Rl` searches all files in a directory and outputs **only filenames** with matched results (so no lines)

------

### `sed`

stands for “stream editor.” 

searches for a text pattern, modifies it, and outputs it.

accepts standard input and modifies it based on an *expression*, before displaying it as output data. similar to “find and replace.”

```
sed 's/snow/rain/' forests.txt 
```

- ​		s: stands for “substitution.” It is *always* used when using sed for substitution.
- ​		snow: the search string, or the text to find.
- ​		rain: the replacement string, or the text to add in place.

searches **forests.txt** for the word “snow” and replaces it with “rain.” Importantly, the above command will only replace the first instance of “snow” on a line.

```
sed 's/snow/rain/g' forests.txt
```

The above command uses the `g` expression, meaning “global. *all* instances of “snow” on a line will be turned to “rain.”

------

## The command line environment

The *environment* refers to the preferences and settings of the current user.

## The Nano-editor

- If you are having trouble in nano and need to exit, use Ctrl + C.
- Ctrl + O saves a file. O stands for output. 
- Ctrl + X exits the nano program. X stands for exit.
- Ctrl + G opens a help menu.

https://www.nano-editor.org/	

------

## VIM editor

| Key  | Command     |
| ---- | ----------- |
| i    | insert mode |
| esc  |             |
| :wq  |             |
| .x   | exit        |

------

## Bash Profile

is a file used to store environment settings for your terminal, and it’s accessible by the name `~/.bash_profile.`

- ​		The ~ represents the user’s home directory.
- ​		The . indicates a hidden file.
- ​		The name `~/.bash_profile` is important, since this is how the command line recognizes the bash profile.

To open and edit the bash profile, you can use the command:

```
nano ~/.bash_profile
```

To activate the changes made in `~/.bash_profile` for the current session, use this following command:

```
source ~/.bash_profile
```

This makes the changes in the bash profile available right away without closing the terminal and needing to start a new session.

------

## alias

```
alias pd="pwd"
alias hy="history"
alias ll="ls -la"
```

------

## Environment Variables

*Environment variables* are variables that can be used across commands and programs and hold information about the environment.

store this in `~/.bash_profile`

`export VARIABLE="Value"` sets and exports an environment variable.  

`export` makes the variable to be available to all child sessions initiated from the session you are in

- ​		`USER` is the name of the current user.
  - `export USER="Jane Doe"` sets the environment variable USER.
  - the command `echo $USER` returns the value of the variable. Note that `$` is always used when returning a variable’s value. 
- ​		`PS1` is the command prompt. `export PS1=">> "`
- ​		`HOME` is the home directory. It is usually not customized. `~` is short for HOME
- ​		`PATH` returns a colon `:` separated list of file paths. It is customized in advanced cases.
- ​		`env` returns a list of environment variables. You can redirect the output, using grep to select the variable you want to see.

https://www.codecademy.com/courses/learn-the-command-line/articles/command-line-offline-project

------

## Tips

cmd-shift-. zeigt versteckte File im Finder

------



## Links

- [Explainshell](https://explainshell.com/)
- [Linux Commands Handbook](https://www.freecodecamp.org/news/the-linux-commands-handbook/)
- [OSX Bash profile
- [https://www.learnenough.com/command-line-tutorial/basics	](https://natelandau.com/my-mac-osx-bash_profile/)
- [commandlinepoweruser.com](https://commandlinepoweruser.com/)
- 



