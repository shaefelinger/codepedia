# Registering Routes

in the `routes`-array pass a JS-Object for every route



example - whole file:

```js
import { createApp } from 'vue';

import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: TeamsList
    },
    {
      path: '/users',
      component: UsersList
    }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');

```

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

## Using Named Routes

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

------

