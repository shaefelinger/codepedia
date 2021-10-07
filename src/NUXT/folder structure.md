# Nuxt Folder Structure

> the newest version of nuxt doesn't create all of the folders

no `/src` directory

- layouts
- pages - generate the routes
- components - ruseable components

nuxt adds functionality based on wicht folder a file is in

- store - vuex files
- static - files served from `/` (eg `robots.txt`, `favicon`)
- assets - uncompiled assets (sass, images, fonts)
- plugins - js plugins to load before starting the Vue.app
- middleware - custom functions to run before rendering a layout or page



## `/store`

A folder to contain all of your app’s Vuex Store Files. Nuxt gives you two different ways to create your store and we’ll dive deeper into how as the course progresses.

## `/static`

Use this directory for storing static assets. For example, `robots.txt` or your favicon. Every single file in this directory is mapped to the server root, usually at `/`.

## `/assets`

This directory contains un-compiled assets such as Stylus or Sass files, images, or fonts. By default, Nuxt uses vue-loader, file-loader and url-loader webpack loaders for strong assets serving. If you don’t want assets to be affected by webpack, use the `static` directory for storing those assets.

## `/plugins`

This folder contains your JavaScript plugins that you want to run before instantiating the root Vue.js Application. This directory is helpful when using your own libraries or Vue plugins.

## `/middleware`

Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layouts). This folder contains your application middleware for that purpose.

Finally, you’ll notice a configuration file called `nuxt.config.js`. 

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

------

all of this can be modified if needed

------



## Image Assets Example

Usually we’ll want to place all our images in the `assets` directory where Nuxt will use vue-loader, file-loader, and url-loader for effective asset serving.

**/pages/index.vue**

```html
    <img src="~/assets/logo.png">
```

**When we build our project, if our image is >= 1 kb**, it will use version hashes for caching and render out:

```html
    <img src="/_nuxt/img/82f7965.png">
```

**When we build our project, if our image is < 1 kb** it will inline the image to reduce http requests, looking something like this:

------

## Pages/routes

Nuxt autogenerates the routes for us. We don’t need to write this code:

```js
    const router = new Router({
     routes: [
        {
          path: '/',
          component: 'pages/index.vue'
        },
        {
          path: '/create',
          component: 'pages/create.vue'
        }
      ]
    })
```

------

## Layouts

All you need in your layout is three lines of code which will render the page component.

layouts/default.vue

```html
<template>
  <Nuxt />
</template>
```

`<Nuxt />` behaves a lot like  `<router-view />`. This is where the `/page` components get rendered.

------

## NavBar Component

```html
    <template>
      <div class="nav">
        <nuxt-link to="/" class="brand">Real World Events</nuxt-link>
        <nav>
          <nuxt-link to="/">List</nuxt-link>&nbsp;|
          <nuxt-link to="/create">Create</nuxt-link>
        </nav>
      </div>
    </template>
```

the the `nuxt-link` to generate our links instead of `router-link`.

------

use the navbar in `layouts/default.vue`

```html
 <template>
      <div id="app">
        <nav-bar/>
        <nuxt/>
      </div>
    </template>
    
    <script>
    import NavBar from "~/components/NavBar.vue";
    export default {
      components: {
        NavBar
      }
    };
    </script>
```

> it is also working without the script-import - auto-import??

