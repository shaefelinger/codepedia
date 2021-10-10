# YARN

[YARN DOC](https://yarnpkg.com/)

[YARN CLI docs](https://yarnpkg.com/cli)

------

## Different Commands

|         Command          |                 npm                  |              yarn              |
| :----------------------: | :----------------------------------: | :----------------------------: |
|   Install dependencies   |            `npm install`             |             `yarn`             |
|     Install package      |       `npm install [package]`        |      `yarn add [package]`      |
|   Install dev package    |  `npm install --save-dev [package]`  |   `yarn add --dev [package]`   |
|    Uninstall package     |      `npm uninstall [package]`       |    `yarn remove [package]`     |
|  Uninstall dev package   | `npm uninstall --save-dev [package]` |    `yarn remove [package]`     |
|          Update          |             `npm update`             |         `yarn upgrade`         |
|      Update package      |        `npm update [package]`        |    `yarn upgrade [package]`    |
|  Global install package  |   `npm install --global [package]`   |  `yarn global add [package]`   |
| Global uninstall package |  `npm uninstall --global [package]`  | `yarn global remove [package]` |

## Identical Commands

|            npm             |            yarn             |
| :------------------------: | :-------------------------: |
|         `npm init`         |         `yarn init`         |
|         `npm run`          |         `yarn run`          |
|         `npm test`         |         `yarn test`         |
| `npm login` (and `logout`) | `yarn login` (and `logout`) |
|         `npm link`         |         `yarn link`         |
|       `npm publish`        |       `yarn publish`        |
|     `npm cache clean`      |     `yarn cache clean`      |



------

## Basic Commands

### [Starting a new project](https://yarnpkg.com/cli/init)

```bash
yarn init
```

### [Installing all the dependencies](https://yarnpkg.com/cli/install)

```bash
yarn
yarn install
```

### [Adding a dependency](https://yarnpkg.com/cli/add)

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

##### Adding a dependency to different categories of dependencies

```bash
yarn add [package] --dev  # dev dependencies
```

### [Upgrading a dependency](https://yarnpkg.com/cli/up)

```bash
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]
```

### [Removing a dependency](https://yarnpkg.com/cli/remove)

```bash
yarn remove [package]
```

### [Upgrading Yarn itself](https://yarnpkg.com/cli/set/version)

```bash
yarn set version latest
yarn set version from sources
```

------

