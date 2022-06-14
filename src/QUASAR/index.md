# Quasar

## Quasar CLI

instead of

```
quasar create my-app
```

use

```
yarn create quasar
```

or

```
npm init quasar
```

start dev-server

```
quasar dev
```

------

## Layout Builder

-> export, and replace the MainLayout

------

## Create pages

```
quasar new page OnePage
```

> use `cmd-P`to switch between files in vs code

------

## Centering on screen

parent: `class="flex flex-center"`

child: `class="full-width" style="max-width: 450px"`

```vue
  <q-page padding class="flex flex-center">
    <q-card class="full-width" style="max-width: 450px"
      ><q-card-section>hallo</q-card-section>
    </q-card></q-page
  >
```

------

## Change Colors

`/css/quasar.variables.scss`

-> change colors

recommendation: just have a primary, secondary and accent-color

------

## Set Dev-Browser

on quasar.config.js

```js
    devServer: {
			...
      open: {
        app: { name: "google chrome" },
      },
    },
```

