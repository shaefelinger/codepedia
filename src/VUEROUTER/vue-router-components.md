# Built-in Vue Router Components

### `<router-view/>`

Is a placeholder where the contents of the “view” component will be rendered onto the page.

To let vue know, where to render that component, use the `router-view`-placeholder

### `<router-link>`

is a component (from the vue-router library) whose job is to link to a specific route.

like a special anker-tag, to load the router-view. The `to` attribute behaves similar to `href`.

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
