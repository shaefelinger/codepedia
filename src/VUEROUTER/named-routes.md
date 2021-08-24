# Using Named Routes

`router.js` each of our routes has a `name`

instead of:

```html
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
```

We can write:

```html
<router-link :to="{ name: 'home' }">Home</router-link> |
<router-link :to="{ name: 'about' }">About</router-link>
```

If the URL changes later, we’d only have to change that path in one place instead of everywhere in our app.
