## Programmatic navigation

Navigate from inside js-code, eg. after some code has run.

use `this.$router`

methods:

- `push()` -> add new route to the browser history
- `back()` / `forward()`
- ...

```
this.$router.push({ name: 'Profile', params: { char_id } });
```

------





## Passing data with Route Parameter

the order matters: -> `/new` will not work!

```js
{path: '/teams/:teamId'},
{path: '/teams/new'},
```

-> you can access the data inside the component

```js
routes: [
        ...
        {
          path: '/user/:username',
          name: 'user',
          component: User
        }
      ]
```

 `:username` is called a dynamic segment. Anything after `/user/` is to be treated as a dynamic route. 

## Dynamic Paths

use `this.$route`

- `this.$route.path`
- `this.$route.params` -> contains the parameters

access this parameter with `$route.params.name`

**/pages/user.vue**

```html
<template>
	<div class="user">
		<h1>This is a page for {{ $route.params.username }}</h1>
	</div>
</template>
```

A $route object represents the state of the current active route. It contains data about the route including the params.

https://router.vuejs.org/api/#the-route-object

------

Also we can link to dynamic routes by placing parameters in our links:

```html
    <router-link :to="{ name: 'user', params: { username: 'Joe' }  }">Joe</router-link>
```



------

## Using Props for Routes

 `$route.params`  limits the flexibility of the component. Usually it is better to pass the params as props

 A more modular way to create  dynamic components is to set `props: true` in your route configuration.

**router.js**

```javascript
    ...
    export default new Router({
      routes: [
        {
          path: "/user/:username",
          name: "user",
          component: User,
          props: true
        }
      ]
    });
```

This will cause the `$route.params` to be sent into your component as a normal prop. instead of the `$route.params`. -> you get a prop with the name "username"

Inside the component,  receive this prop:

**User.vue**

```html
    <template>
      <div class="user">
        <h1>{{ username }}</h1>
      </div>
    </template>
    
    <script>
    export default {
      props: ["username"]
    };
    </script>
```

Everything will now work the same, but the component can now be reused as a child component elsewhere, passing in username as a prop.

```js
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">

```

> direct access in template:
>
> ```vue
> <span>Event #{{ $route.params.id }}</span>
> ```

------

## History Mode

```
history: createWebHistory(process.env.BASE_URL),
```

no # for navigation

### The Hash

- “Hash mode” is the default mode for Vue2 Router  
- uses the URL hash to simulate a full URL so the page isn’t reloaded every time the URL changes.

In order to remove it we need to add some configuration to  **router.js** :

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

On our application no matter what URL is called up, we must load up `index.html` which is where our application is loaded, and then our router will take over and load up the proper page.

This is  the default functionality on our development server, 

but if we go to deploy our application we’ll need to ensure our server has the proper configuration to serve up our index.html no matter what route is navigated to. 

The Vue Router documentation has a bunch of [example configurations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations) 

------

## Handling 404s

 you should be aware of is that when we go to an invalid URL, we are no longer given the proper 404 file not found error.

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

### Catch-All routes

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

------

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

Top-moset `<router-view>` only shows the root-route

ChildRoute: 

you have to create a `router-view` in the component, where the child components should be displayed.

> `router-link-exact-active` will not be added to the <a>element!

Children can also contain children...

------

## Named Routes

makes it simpler to manage and change the routes

`to` can also take an object instead of a string

add a name property to ths routes in the route-config:

```js
{
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
```

add params:

```js
 computed: {
    teamMembersLink() {
      return {
        name: 'team-members',
        params: {
          teamId: this.id
        }
      };
    }
  }
```

you can also provide the same kind of object to `this.$router.push()`



------

## Using Query Params

pass extra-information as part of the URL, eg `?sort=asc`

...optional

```js
 computed: {
    teamMembersLink() {
      return {
        name: 'team-members',
        params: {
          teamId: this.id
        },
        query: {
          sort: 'asc'
        }
      };
    }
  }
```

-> the query gets automatically added to the url

access in the component with:

```
this.$route.query
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

------

### Controlling Scroll behaviour

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

------

### Route Metadata

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

------

