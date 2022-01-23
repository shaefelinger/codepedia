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
