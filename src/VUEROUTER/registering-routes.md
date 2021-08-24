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



