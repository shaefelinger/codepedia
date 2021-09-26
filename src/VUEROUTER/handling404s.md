# Handling 404s

There are different ways to combat this, one of which is by creating a `/views/FileNotFound.vue` component, which gets loaded if none of the existing paths match. To do this we would place this catch-all route at the bottom of our `routes.js`:

```javascript
    ...
    const router = new VueRouter({
      mode: 'history',
      routes: [
        ...
        { path: '*', component: NotFoundComponent }
      ]
```

https://router.vuejs.org/

## Catch-All routes

Handle invald routes

at the end:

```js
{
	path: '/:notFound(.*)',
	redirect: '/teams'
}
```

> `.*` is a RegEx

or create a "NotFound"-Component...

```js
// catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
```

