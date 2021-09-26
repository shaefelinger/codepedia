## Changing Routes

If we need to change their paths. Like from `/about` to `/about-us` . How might we deal with this?

### 1: Redirect

```js
const router = new VueRouter({
  routes: [
    ...{
      path: '/about-us',
      name: 'about',
      component: About,
    },
    {
      path: '/about',
      redirect: { name: 'about' },
    },
  ],
});
```





If we’re using named routes then we don’t need to change our `router-link`s at all.

#### Redirecting

```js
{
	path: '/',
	redirect: '/teams'
},
```

or use: (URL doesn't change)

```js
{
	path: '/teams',
	component: TeamsList,
	alias: '/'
},
```

### 2: Alias

Instead of redirecting the old path we might just want to alias it, meaning just provide a duplicate path to the same content.

```js
const router = new VueRouter({
  routes: [
    ...{
      path: '/about-us',
      name: 'about',
      component: About,
      alias: '/about', // <-----
    },
  ],
});
```

---

