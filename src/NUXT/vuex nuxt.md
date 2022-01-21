# Vuex - Nuxt

## Creating an Event Service

a vuex module for handling event data

- actions make API-calls
- result commits a mutation -› updates the state

/services/EventService.js

```js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  },
};
```

use folder `store`



------

<!-- <img src="./assets/vuex.png" /> -->

use fetch-hook

Hook, that works on client & server-side to fill the store *before* rendering the page

<!-- <img src="./assets/fetch_hook.png" /> -->

---

state has to return an anonymous function

```js
import EventService from '@/services/EventService.js';

export const state = () => ({
  events: [],
});
```

```js
export const state = () => ({
  events: [],
});

export const mutations = {
  SET_EVETNS(state, events) {
    state.events = events;
  },
};

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response);
    });
  },
};
```

by default, all vuex-modules are namespaced

Take note that `state` value should **always be a** `function` to avoid unwanted _shared_ state on the server side. Another thing to keep in mind is that we need to return a promise from our `fetchEvent` action. This will help our component know when this promise is resolved so it can continue loading the page.

The `fetch` page component hook works on the client & server-side to fill the store before rendering the page. Unlike `asyncData` this doesn’t have a return value that merges with component data, which we don’t need anymore.

```js
   <script>
    import EventCard from '@/components/EventCard.vue'
    import { mapState } from 'vuex'  // <--- To map event
    export default {
      ...
      async fetch({ store, error }) {
        try {
          await store.dispatch('events/fetchEvents')
        } catch (e) {
      ...
      },
      computed: mapState({
        events: state => state.events.events
      })
    }
    </script>
```

