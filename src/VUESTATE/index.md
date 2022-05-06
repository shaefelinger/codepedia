# Composition-API-Store

- to make store available in all components: import in Root App.vue and provide
- you can directly v-model the state
- make readonly
- then use computed property with get and set method

pro:

- flexible
- no need to use mutation & actions

cons:

- no dev-tools support
- no vuex-plugins (like vuex-persist)
- store has to be injected in every component

store/index.js

```js
import { reactive, readonly } from 'vue';

const state = reactive({
  counter: 0,
  colorCode: 'blue',
});

const methods = {
  setColorCode(val) {
    state.colorCode = val;
  },
  decreaseCounter() {
    state.counter--;
  },
  increaseCounter() {
    state.counter++;
  },
};

const getters = {
  counterSquared() {
    return state.counter * state.counter;
  },
};

export default {
  state: readonly(state),
  methods,
  getters,
};
```

> you don't have to put the methods in the methods-object. also possible on root-level & export

Home.vue

```vue
<template>
  <div class="home">
    <div class="counter" :style="{ color: store.state.colorCode }">
      {{ store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ store.state.counter }}
      <sup>2</sup> = {{ store.getters.counterSquared() }}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <div>
      <input type="text" placeholder="Enter color code" v-model="colorCode" />
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const store = inject("store");

const colorCode = computed({
  get() {
    return store.state.colorCode;
  },
  set(val) {
    console.log("val", val);
    store.methods.setColorCode(val);
  },
});
</script>
```

App.vue

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

