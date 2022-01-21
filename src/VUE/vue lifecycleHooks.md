# Vue Livecycle-Hooks

```js
// when component is mounted:
mounted() {
  console.log('mounted');
},
```

| Hook          | when?                   |
| ------------- | ----------------------- |
| beforeCreate  |                         |
| created       |                         |
| beforeMount   |                         |
| mounted       | runs, when vue is ready |
| beforeUpdate  |                         |
| updated       |                         |
| beforeDestroy |                         |
| destroyed     |                         |

[https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks](https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks)

[https://v3.vuejs.org/guide/instance.html#lifecycle-diagram](https://v3.vuejs.org/guide/instance.html#lifecycle-diagram)

------

#### Fetch data

often on the mounted-lifecycle -> add `v-if` to the display-elements!
