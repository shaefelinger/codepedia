# Built-in Vue Router Components

### `<router-view/>`

Is a placeholder where the contents of the “view” component will be rendered onto the page.

To let vue know, where to render that component, use the `router-view`-placeholder

### `<router-link>`

Is a component (from the vue-router library) whose job is to link to a specific route.

Like a special anker-tag, to load the router-view. The `to` attribute behaves similar to `href`.

```vue
<router-link to="/about">About</router-link>
```

> under the hood: will render as an a-tag

```vue
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
```

------

## Named router-views

for multiple router-views on the same level

define multiple components per route

-> give the router-views names (just like named slots)

you can have one unnamed router-view on the same level - this is the default router-view

```vue
<main>
    <router-view></router-view>
  </main>
<footer>
    <router-view name="footer"></router-view>
  </footer>
```

```js
 {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },

    },
```

---

