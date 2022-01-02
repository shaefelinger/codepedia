# Vue Composition-API

Different Way of writing the Component Code - optional

## OptionsAPI

Limitations in bigger apps

- code that belongs together is aplit up across multiple options (data, methods, computed)

- resuing logic across components can be tricky or cumbersome

- <img src="./assets/vue comp-api1.png" />

  

------

## Overview

<img src="./assets/vue comp-api3.png" />

<img src="./assets/vue comp-api4.png" />



------

## Replacing `data` with `refs`

### with `refs`

instead of

```js
export default {
  data() {
    return {
      userName: 'Maximilian',
    };
  },
};
```

use:

```js
import { ref } from 'vue';

export default {
  setup() {
    const uName = ref('MaximilianXX');

    return { userName: uName };
  }
```

or

```js
export default {
  setup() {
    const userName = ref('Maximilian');
    
    return { userName };
  }
```

> or script setup:
>
> ```vue
> <script setup>
>  import { ref } from 'vue';
>  const userName = ref('Maximilian');
> </script>
> ```

- import `ref` ref creates a reactive value (under the hood an object…)
- don't use `this` - it's not available…
- always return an object - with all the things you want to expose to the template
- access value with `.value`
- `v-model` works with refs

### Reactive Objects

```js
const user = ref({
      name: 'Max',
      age: 31
    });
    return { user }
```

use in template: `user.name` and `user.age`

### `reactive`

Better: user `rective` - ist like `ref` but made for objects. you don't have to use `.value` on the keys

```js
import { reactive } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'Max',
      age: 31
    });

    setTimeout(() => {
      user.name = 'Hans';
      user.age = 32;
    }, 2000);

    return { user };
  }
};
```



so: `reactive` is for objects, `ref` for all kind of data, but you have to use the additional `.value`

### Helper-Function:

`iSReactive`, `isRef`

to check, if something it is reactive

### `toRefs`

makes all the values of an object reactive

```js
import { ref, reactive, toRefs } from 'vue';

const userRefs = toRefs(user);

return { userName: userRefs.name, userAge: userRefs.age };
// -> you can user userName and userAge in the template (reactive)
```

------

## Replace `methods`

setup() is run, when vue creates the component. Only once!

-> you can write regular functions -> return the function

```js
   function setNewData() {
      user.age++;
    }

    return { user, setNewData };
```



> or script setup:
>
> ```vue
> <script setup>
> import { reactive } from 'vue';
> 
> const user = reactive({
> name: 'Max',
> age: 31
> });
> 
> function setNewData() {
> user.age++;
> }
> </script>
> ```

access value of ref with `.value`

------

## Replace Computed



```js
<script>
import { ref, computed } from 'vue';
....

		const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });
```



- computed is (like a ref) an object with a value property
- but computed is read-only!

------

## Replace Watchers

```
watch(dependency, function)
```



```js
import { ref, computed, watch } from 'vue';
...
	watch(uAge, function(newValue, oldValue) {
      console.log(newValue, oldValue);
  });

```

you can also pass an array of dependencies: whenever any of theese values changes, the function is run

```js
 	watch([uAge, uName], function(newValues, oldValues) {
      ...		
  });
```

-› you get an array for `newValues` and `oldValues`

```js
  watch([uAge, uName], (newValue, oldValue) => {
      console.log(newValue, oldValue);
      console.log('Old age', oldValue[0]);
      console.log('New age', newValue[0]);
      console.log('Old name', oldValue[1]);
      console.log('New name', newValue[1]);
    });
```



------



## Template Refs

you have to define the template refs like the other refs

access with

```js
<input type="text" placeholder="Last Name" ref="lastNameInput" />
...
...
const lastNameInput = ref();
...
lastName.value = lastNameInput.value.value;
```

------

## Components, Props

```vue
<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    return {
      uName
    };
  }
};
</script>
```

> script setup: use `defineProps`
>
> ```vue
> <script setup>
> import { computed, defineProps } from 'vue';
> 
> const props = defineProps(['firstName', 'lastName']);
> const uName = computed(() => {
> return props.firstName + ' ' + props.lastName;
> });
> </script>
> ```

### Using a watcher with props

props is recative, but the values inside are not

either use the whole props-object in the watcher or make the values reactive with `toRef`

```js
 const { user } = toRefs(props);

    watch(user, () => {
      enteredSearchTerm.value = '';
    });
```



------

## Emitting Custom Events

setup always gets a second argument: the context

```js
    context.emit('save-data', 1); // works like this.$emit('save-data', 1)
```

------

## Provide-Inject



provide with the options-api:

```js
provide() {
  return {age: this.age}
}
```

composition-api:

```js
    provide('userAge', uAge);
```

child:

```js
const age = inject('userAge');
```

(you have to import `provide` and `inject`)

only change the value in the place where you provide it!

------

## Lifecycle-Hooks

you have functions, you can import to acces the hoks



`beforeCreate` and `created` is not needed -› `setup()` repeaces theese

<img src="./assets/vue comp-api2.png" />



```js
import {
...
	onBeforeMount,
  onMounted, 
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';


```

pass a function to the hook-function:

```js
    onBeforeMount(function() {
      console.log('onBeforeMount');
    });
```

------



------

## Routing

options-api: `this$.router` and `this.$route`

composition-api:  `useRoute`, `useRouter` -composables

1. you can pass a prop to the route

   ```js
    routes: [
       { path: '/', redirect: '/products' },
       { path: '/products', component: AllProducts },
       { path: '/products/:pid', component: ProductDetails, props: true },
       { path: '/products/add', component: AddProduct },
     ],
   ```



2. access the route & router-objects

```js
import { useRoute } from 'vue-router'
```

hooks/composables: special functions to use with the composition-api

```js
const route = useRoute()
```

eg access the params:

```js
  const selectedProduct = computed(() =>
      products.value.find((product) => product.id === route.params.pid)
  );
```

also: `useRouter`

```js
import { useRouter } from 'vue-router';
...
const router = useRouter();
...
router.push('/products');
```

------

## VUEX

```js
import { useStore } from 'vuex';
...
const store = useStore();
...
store.dispatch('increment');

```

```js
 const counter = computed(() => {
      return store.getters.counter;
    });
```

------

## Script Setup

[learn vue script setup](https://learnvue.co/2021/05/explaining-the-new-script-setup-type-in-vue-3-major-takeaways-from-the-rfc/)



```vue
<template>
  <button @click="$emit('change')">Click Me</button>
</template>
<script setup>
  import { defineProps, defineEmit, useContext } from 'vue'

  const props = defineProps({
    foo: String
  })
  const emit = defineEmit(['change', 'delete'])

  const { slots, attrs } = useContext()
</script>
```

