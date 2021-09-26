# Passing data with Route Parameter

```js
{path: '/teams/:teamId'},
{path: '/teams/new'},
```

-> you can access the data inside the component

> the order matters: -> `/new` will not work!

```js
routes: [
  ...{
    path: '/user/:username',
    name: 'user',
    component: User,
  },
];
```

`:username` is called a dynamic segment. Anything after `/user/` is to be treated as a dynamic route.

------

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

A \`$route` object represents the state of the current active route. It contains data about the route including the params.

https://router.vuejs.org/api/#the-route-object

---

Also we can link to dynamic routes by placing parameters in our links:

```html
<router-link :to="{ name: 'user', params: { username: 'Joe' }  }"
  >Joe</router-link
>
```

##### Example

#### Route Parameters

```vue
//router:
{
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
},
  
  
// acces value in view:
  <p>The Job ID is: {{ $route.params.id}}</p>  

```

or inside component-object:

```js
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
```

```vue
<p>The Job ID is: {{ id }}</p>  
```

------

#### 

---

## Using Props for Routes

`$route.params` limits the flexibility of the component. Usually it is better to pass the params as props

A more modular way to create dynamic components is to set `props: true` in your route configuration.

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

Inside the component, receive this prop:

**User.vue**

```html
<template>
  <div class="user">
    <h1>{{ username }}</h1>
  </div>
</template>

<script>
  export default {
    props: ['username'],
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

---

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

---

## Add a watcher to `$route`

Route Parameters can be tricky

if you are on a page and want to go to a different value, the data is not updated. The component doesn't get destroyed an re-created when the urls changes.

```js
methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId;
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },

  created() {
    this.loadTeamMembers(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute);
    }
  }
```

------

 		

