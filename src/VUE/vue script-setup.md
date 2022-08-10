# Vue Script-Setup

nicer Syntax for composition-api

[learn vue script setup](https://learnvue.co/2021/05/explaining-the-new-script-setup-type-in-vue-3-major-takeaways-from-the-rfc/)

## data

instead of:

```js
export default {
  setup() {
    const userName = ref('Maximilian');
    
    return { userName };
  }
```

use script setup:

 ```vue
 <script setup>
 import { ref } from 'vue';
 const userName = ref('Maximilian');
 </script>
 ```

## methods

you can write regular functions -> return the function

```js
   function setNewData() {
      user.age++;
    }

    return { user, setNewData };
```



```vue
<script setup>
import { reactive } from 'vue';

const user = reactive({
name: 'Max',
age: 31
});

function setNewData() {
user.age++;
}
</script>
```

## props

use `defineProps`

```js
<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps(['firstName', 'lastName']);
const uName = computed(() => {
	return props.firstName + ' ' + props.lastName;
});
</script>
```

------

## Emit

```vue
<script setup>
import { ref, defineEmits } from 'vue';

const name = ref('');
const emit = defineEmits(['formSubmitted']);

function onSubmit() {
  emit('formSubmitted', { name: name.value });
}
</script>
```



------

## Example

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

------

## Async

[async script setup](https://stackoverflow.com/questions/69183835/vue-script-setup-top-level-await-causing-template-not-to-render)

------

## Private properties with script setup

 You can limit what properties are available when a component is accessed by $ref :

```js
export default {
 expose: ['makeItPublic'],

data() { 
  return {
		privateData: 'Keep me a secret!', 
  };
},

computed: 
  { 
    makeItPublic() {
			return this.privateData.toUpperCase(); 
    },
	}, 
};
```

With only makeItPublic exposed, you can't access the privateData property through a $ref anymore:

```js
this.$refs.component.privateData // Will always be undefined
```

If you're using <script setup> , everything is locked down by default. If you want to expose a value you have to do so explicitly:

```vue
<script setup>
  import { ref, computed } from 'vue';
  const privateData = ref('Keep me a secret!'); 
	const makeItPublic = computed(
  	() => privateData.value.toUpperCase() 
  );
  	// We don't need to import this because it's a compiler macro 
	defineExpose({
  	makeItPublic
  }); 
</script>

```

`defineExpose` is a compiler macro, not an actual function, so we don't have to import anything.
(You can find more info on this in the docs)[https://vuejs.org/api/options-state.html%23expose]
