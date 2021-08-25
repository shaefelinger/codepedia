# Navigation Guards

eg for authentications, or to prevent that a user leaves a site where he has unsaved edits in eg a form

Guards = methods, that get called automatically, when a page changes

## `.beforeEach()`

runs before each nav

```js
router.beforeEach((to, from, next) => {});
```

`to` and `from` are route-objects

`next` is a function that gets celled to eather confirm or cancel the navigation action

## `next()`

- `next()` or `next(true)`- confirms/allows the navigation

- `next(false)` cancels the nav
  - `next('/teams')` or `next({name:'teams'})` calls that route

## Set Guard to specific routes

```js
{
	path: '/users',
	components: { default: UsersList, footer: UsersFooter },
	beforeEnter(to, from, next) {
		console.log('users before enter');
		console.log(to, from);
		next();
	}
},
```

OR

in the component add

## `beforeRouteEnter()`

```js
beforeRouteEnter(to, from, next) {
    // this will be run, before navigation to thie component is confirmed
}
```

order:

`global > route config > component`

## `beforeRouteUpdate()`

in components that are reused.

```js
beforeRouteEnter(to, from, next) {
    // this will be run,  before the componente is reused with new data
}
```

---

## Global "afterEach"-Guard

```js
router.afterEach((to, from) => {
  // this runs after the navigation has been confirmed
});
```

eg. to send analytics data to a server

---

## Route Leave Guards

eg unsaved changes in a form

inside of the component:

```js
beforeRouteLeave(to, from, next) {
 //...
},
```

eg. check, if the user really wants to leave

```js
 beforeRouteLeave(to, from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure?');
      next(userWantsToLeave);
    }
  },
```

> confirm returns a boolean
