# VITE

# Vuemastery Vite

next generation of frontend tooling. 

https://vitejs.dev/

- build tool
  - dev server
  - bundles your code for production

- similar to Vue CLI but leaner and faster
- oses native ES-modules

## get started

```
npm init @vitejs/app
```

you can use it with any framework

> npm server. run `npx serve`

There’s not much different from a http server, but if we change things around such as renaming files, Vite reloads everything automatically. 

### Typescript

We can even include TypeScript files in our html like so:

📃 **index.html**

```html
...
<script type="module" src="/main.ts"></script>
...
```

Vite will transpile TypeScript automatically. Vite doesn’t do any type-checking for you. Vite uses es-build to transpile the files, which is about 30 times faster for transpiling than TypeScript itself. If you care about type-checking, you’ll need to import it using:

📃 **main.ts**

```jsx
import type { } from './'
```

 if you’re using a modern editor, you probably get type-checking already in your IDE. Vite can leave that for your IDE, to get the speed boost.



Vite has “**hot updating**” - changes appear without reload!



## Handling NPM Dependencies

Vite also handles NPM dependencies for you. We can see this by importing a library like so:

📃 **main.ts**

```jsx
import { debounce } from 'lodash-es'
```

All then we have to do is install the dependency:

```jsx
$ npm install lodash-es
```

Then we restart our dev server, and if we look into the browser, we can see that the new dependency has been loaded. All of this happened without reloading the browser.

> lodash-es

# CSS & Debugging

lot of projects use PostCSS (also for tailwind)

Vite already uses PostCSS 8 out of the box. if you want to use any PostCSS plugin, all you need to do is install it like so:

```jsx
$ npm install postcss-nested
```

create a file called `postcss.config.js`, which is included by Vite. In there I can include configuration:

```jsx
module.exports = {
 plugins: [
  require('postcss-nested')
 ]
}
```

We just have to restart the server, and CSS nesting should now work for us.

## Debugging

Because Vite uses individual ES Modules, you can use the browser network dev tools tab to do debugging.

## CSS Modules

Vite also allows for CSS Modules, so we could add a file called `example.module.css`. As long as the file ends in `module.css`

I can then import this from my `main.js` like so:

```jsx
import styles from `./example.module.css`
```

gives each CSS selector it’s own hashed scope, so it doesn’t conflict with any other CSS selectors. The CSS selectors in this file then can be used as variables like `styles.title`, and Vite will properly use the correct hashed selector.

## Pre-Processors like SASS or LESS

Both SASS and LESS work out of the box with Vite. I just need to run `npm install SASS`. There is no need to do any additional configuration. I can rename my CSS file to `.scss` and it just works, even with hot reloading.

------

# Working with Assets

In addition to CSS features, Vite can directly import web assembly `.webm`, or you can load up a file with the worker query:

```jsx
import Worker from './food.js?worker'
```

This will load the library as a web worker, which you can instantiate.

------

### Imported Assets

We can import static assets into our `main.js`.

```jsx
import favicon from './favicon.svg'
```

This gives you a string with the correct path, that can be used:

```js
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!!!</h1>
  <img src="${favicon}">
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
```

Will be updated to the correct path on build



When we import assets the file is considered part of our module graph. This variable can then be used inside your templates, and it will return the URL where that static asset will be located. When you build application using Vite, it will use the proper URL.



Then when I use `$ npm run build`, it will: 

- compile our application into our `/dist` directory 
- move the favicon into the `/dist/assets` directory, 
- add a hash the image name.

### Public Assets

If we need certain assets to be served from the same location, without a hash, 

- we can create a *public* directory.

- If we place `favicon.svg` into that directory, we can now reference in our html or javascript `/favicon.svg` and it will be found. 
- Anything in *public* will be served at the server root.

------

# Getting Vite working with Vue

Use CLI:

```
npm init @vitejs/app
```

Manually:

```
npm i -D @vitejs/plugin-vue
```

```
 npm i -D @vue/compiler-sfc  
```

```
npm i vue@next
```

create `vite.config.js`:

```js
import vuePlugin from '@vitejs/plugin-vue';

export default {
  plugins: [vuePlugin()],
};
```



running `npm run build` to build your Vue project

Vite also comes with the `npm run serve` command. (or `npm run preview`)

will run the Vite preview command which starts a production preview server. 



-> simulates a production server (serves the dist folder)

##### build optimisations:

eg. parallel async loading

check out [the documentation](https://vitejs.dev/guide/features.html#build-optimizations). 

# Moving to Vite

## Env Variables

Vite exposes env variables on the `import.meta.env` global.

read more in [this documentation](https://vitejs.dev/guide/env-and-mode.html).

(instead of `process.env`)?

variables prefixed with `VITE_` are exposed to your Vite-processed code. e.g. the following file:

```
DB_PASSWORD=foobar
VITE_SOME_KEY=123
```

Only `VITE_SOME_KEY` will be exposed as `import.meta.env.VITE_SOME_KEY` to your client source code, but `DB_PASSWORD` will not.



## Require vs Import

When using webpack you might use `require` calls. In Vite we strongly recommend against `require`, because it’s technically a node.js concept and it won’t work well with Vite. However, if you’re using a depedency that uses `require` Vite will handle that.

-> use native ES Modules! don't use `require`

## Require.contents

This is a feature of webpack that allows you to look at the files of a directory at runtime. Vite has an equivalent called [Glob Import](https://vitejs.dev/guide/features.html#glob-import), which you’ll want to use instead.

## Learning More

To learn more about Vite, be sure to check out [the documentation](https://vitejs.dev/guide/why.html), or check out [Awesome Vite.js](https://github.com/vitejs/awesome-vite), a curated list of awesome things related to Vite.



