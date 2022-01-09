# NVM Node Version Manager

[github nvm -usage](https://github.com/nvm-sh/nvm#usage)

To download, compile, and install the latest release of node, do this:

```bash
nvm install node # "node" is an alias for the latest version
```

long-term support (LTS):

```
nvm install --lts
```

To install a specific version of node:

```
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
```

The first version installed becomes the default. 

use default version

```
nvm use node
```

run a specific version:

```
nvm exec 4.2 node --version
```

## System Version of Node

If you want to use the system-installed version of node, you can use the special default alias "system":

```
nvm use system
nvm run system --version
```

## Listing Versions

If you want to see what versions are installed:

```
nvm ls
```

If you want to see what versions are available to install:

```
nvm ls-remote
```



## Set Default Version

```
# Set 12.20.1 (or another version) as default
nvm alias default 12.20.1
```

------

## Links

- [https://betterprogramming.pub/how-to-change-node-js-version-between-projects-using-nvm-3ad2416bda7e](https://betterprogramming.pub/how-to-change-node-js-version-between-projects-using-nvm-3ad2416bda7e)
- [https://javascript.plainenglish.io/a-complete-guide-to-updating-your-node-js-version-via-nvm-4953d32df312](https://javascript.plainenglish.io/a-complete-guide-to-updating-your-node-js-version-via-nvm-4953d32df312)

