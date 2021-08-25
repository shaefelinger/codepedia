# Router extras

## Nested Routes
Router inside of another router. Add `children` -> takes an array of routes. Load different parts inside a component.


```js
{
	path: '/teams',
		component: TeamsList,
			children: [
        {
          path: ':teamId',
          component: TeamMembers,
          props: true
        },
      ]
    },
```

Top-most `<router-view>` only shows the root-route

ChildRoute:

you have to create a `router-view` in the component, where the child components should be displayed.

> `router-link-exact-active` will not be added to the `<a>`element!

Children can also contain children...



---

## Controlling Scroll behaviour

add to router-config object:

```js
...,
scrollBehavior(to, from, savedPosition) {
    // method gets called, whenever the page changes
}
```

`to` and `from` are route-objects (like what you get, when you use `this.$route` inside a component)

`savedPosition` is where the page was scrolled, before the user left the page

scrollBehavior should return an object that describes, where th browser should scroll to (left and top - property)

```js
 scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0}
  }
```

or like this:

```js
 scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
```

if you go back, it uses the savedPosition, otherwise it jums to the top

---

## Route Metadata

add to route:

```
meta:
```

takes any kind of value, eg an object

eg.

```js
meta: {needsAuth: true},
```

-> meta can be accessed with `$route`in the component or in the route guards

example: use global beforeEach to check auth

```js
router.beforeEach(function(to, from, next) {
  if (to.meta.needsAuth) {
    // do something
    next();
  } else {
    next();
  }
});
```

---

