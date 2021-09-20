# Vue Template Refs

Allow to store a reference to a dom element in a variable -> then add normal js to it

```vue
<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" >
  <button @click="handleClick" >Click ME</button>
</template>
```

access with 

```js
this.$refs. <name>
```

```js
 methods: {
      handleClick() {
        console.log(this.$refs.name);
        this.$refs.name.classList.add('active')
      }
    }
```

