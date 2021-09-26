# History Mode

```
history: createWebHistory(process.env.BASE_URL),
```

no # for navigation

## The Hash

- “Hash mode” is the default mode for Vue2 Router
- uses the URL hash to simulate a full URL so the page isn’t reloaded every time the URL changes.

## History Mode

In order to remove that, add some configuration to **router.js** :

`mode: 'history'`

```javascript
    ...
    export default new Router({
      mode: 'history', // <----
      routes: [
       ...
      ]
    })
```

This tells Vue to use the browser `history.pushState` API to change the URL without reloading the page.

Normally when you load up `/about-us` on a server it would look for an `about-us.html` file.

No matter what URL is called up, we must load up `index.html` which is where our application is loaded, and then our router will take over and load up the proper page.

If you deploy the application you need to ensure the server has the proper configuration to serve up index.html no matter what route is navigated to.

The Vue Router documentation has a bunch of [example configurations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

More about [History Mode here](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations).
