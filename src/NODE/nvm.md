# NVM Node Version Manager

https://github.com/nvm-sh/nvm#usage

To download, compile, and install the latest release of node, do this:

```bash
nvm install node # "node" is an alias for the latest version
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

