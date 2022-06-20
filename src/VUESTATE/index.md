# Composition-API-Store

- to make store available in all components: import in `Root App.vue` and `provide`
- you can directly `v-model` the state
- then use computed property with get and set method
- optional: make readonly

**pro:**

- flexible
- no need to use mutation & actions

**cons:**

- no dev-tools support
- no plugins (like eg vuex-persist)
- store has to be injected in every component

`store/index.js`

```js
import { reactive, readonly } from 'vue';

const state = reactive({
  counter: 0,
});

const methods = {
  decreaseCounter() {
    state.counter--;
  },
  increaseCounter() {
    state.counter++;
  },
};

const getters = {
  doubleCounter() {
    return state.counter * 2
  },
};

export default {
  state,
  methods,
  getters,
};
```

> you don't have to put the methods in the methods-object. also possible on root-level & export

> it might be good to use a readonly state. But then you also have to define a set-method and there's no direct  `v-model`	
>
> ```js
> export default {
>   state: readonly(state),
>   methods,
>   getters,
> };
> ```

`Home.vue`

```vue
<template>
  <div >
    <div class="counter">{{ store.state.counter }}</div>
    <div>Double Counter: {{ store.getters.doubleCounter() }}</div>
    <div >
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const store = inject("store");
</script>
```

`App.vue`

```vue
<script>
import { provide } from 'vue';
import store from '@/store';

export default {
  setup() {
    provide('store', store);
  },
};
</script>
```

[Video: Composition API for State Management ](https://www.youtube.com/watch?v=_k4GM5cmm68)
