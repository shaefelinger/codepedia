# VUE Forms

- -> encapsulate all forms into components.
- buld reusable components
- default for input is `text` if nothing is declared

------

2 way to get data from input:

- use `v-model` -> has 2-way binding
- or `@input`-event-listener (might be good for validation)

------

## v-model

 `v-bind`, creates a one-way binding, from the data to the template. 

`v-model` is creating **two-way data binding**.

v-model is a combination of `:value` and `@input`

```js
<input type="text" :value="name" @input="setName"/>
```

- two-way data binding

```vue
 <label>EMAIL</label>
 <input type="email" required v-model="email" />
```

```vue
<label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
```

##### checkbox

```vue
   <div class="terms">
      <input type="checkbox" require v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>
```

##### multiple checkboxes with same v-model

- adds value to the array

```vue
<div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="yoshi" v-model="names" />
      <label>yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="mario" v-model="names" />
      <label>mario</label>
    </div>
```



##### keyboard

-> access to event

```vue
<input type="text" v-model="tempSkill" @keyup="addSkill" />
//

methods: {
	addSkill(event) {
		console.log(event);
	},
},
```

### v-model in Depth

this

```vue
<RegisterUserForm
	v-model=form
/>
```

is the same as:

```vue
<RegisterUserForm
	:model-value="form"
	@update:model-value="(newForm) => (form = newForm)"
/>
```

### useVModel - vueUse

gets rid of a bunch of boiler-plate code:

```vue
<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  count: Number,
})
const emit = defineEmits(['update:count'])

const count = useVModel(props, 'count', emit)
</script>

<template>
  <div>
    <button @click="count = count - 1">-</button>
    <button @click="count = 0">Reset to 0</button>
    <button @click="count = count + 1">+</button>
  </div>
</template>
```

first define the prop we want to attach to the `v-model`:

```jsx
const props = defineProps({
  count: Number,
})
```

Then we emit an event that uses the `v-model` naming convention of `update:<propName>`:

```jsx
const emit = defineEmits(['update:count'])
```

Now we can use the `useVModel` composable to bind the prop and event to a ref:

```jsx
const count = useVModel(props, 'count', emit)
```

This `count` ref will change whenever the prop changes. But whenever it’s changed from this component, it will emit the `update:count` event to trigger the update through the `v-model` directive.

We can use this `Input` component like this:

```html
<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'

const count = ref(50)
</script>

<template>
  <div>
    <Input v-model:count="count" />
    {{ count }}
  </div>
</template>
```

The `count` ref here is synced to the `count` ref inside of the `Input` component through the `v-model` binding.

[Check out the docs for `useVModel` here.](https://vueuse.org/core/usevmodel/#usevmodel)



##### another example:

```vue
<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:model-value'])

const form = useVModel(props, 'modelValue', emit)
</script>

<template>
  <q-form class="q-gutter-y-md">
    <q-input v-model="form.name" filled label="Name" />
    <q-input v-model="form.email" filled label="Email" />
    <q-select
      v-model="form.fav_potato"
      filled
      :options="['Yukon Gold', 'Russet', 'Laura', 'Vitelotte', 'Kennebec']"
      label="Favourite Type Of Potato"
    />
  </q-form>
</template>

<style lang="scss" scoped></style>

```

parent:

```vue
<script setup>
import { ref } from 'vue'
import RegisterUserForm from './RegisterUserForm.vue'

const form = ref({
  name: '',
  email: '',
  fav_potato: '',
})
</script>

<template>
  <q-page padding>
    <q-card style="max-width: 550px">
      <q-card-section>
        <RegisterUserForm
          v-model="form"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
```

------

### v-model-Modifiers

#### `.number`

-> forces a number

`v-model.number`  is a modifier that typecasts the value as a number.



- even with `type="number"`, the value of HTML input elements always returns a string.

- ```js
  <input id="age" name="age" type="number" />
  ```

- if you use a ref, no automaric type-conversion takes place


But with vue, this returns a number - with vue3:

```vue
<input v-model.number="age" type="number" />
```

other modifiers:

#### `.lazy` 

- don't update immedialtely

#### `.trim` 

trims extra whitespace on beginning/end  (like using the `trim()` -function)

------

## Form-Elements

### Dropdowns

`v-model` works on `<select>`

```vue
<div >
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
</div>
```

------

### Checkboxes





for a single checkbox

```vue
<input
	type="checkbox"
	id="confirm-terms"
	name="confirm-terms"
	v-model="confirm"
/>
```

-> you get true or false

- add a `value`-attribute and `v-model` to every checkbox

- use an empty array for the data -> you get an array with the value of all the options

```vue
<div >
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="News"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="Tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="Nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
```

------

Checkboxes have a few quirks.

- checkbox inputs bind their state to a `checked` property,  not directly to `value`.
- The property `value` of checkboxes is  usually not used on the frontend - its main purpose is to provide a value when submitted to the backend via a submit button. If omitted, this `value` defaults to `on`
- inputs with type `checkbox` don’t trigger `input` events, but `change` events whenever they are selected and unselected.

- For checkboxes we are not emitting the target’s value through `$event.target.value`, but instead the checked status through `$event.target.checked`.

```vue
 <input
    type="checkbox"
    :checked="modelvalue"
    class="field"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label v-if="label">{{ label }}</label>
```

------

### Radio Buttons

#### BaseRadio

Radio buttons in HTML have a unique feature that we need to be aware of.

- they do not work as a single input, like a checkbox would. They are part of a group of radio buttons that have a single state. 
- Depending on the group’s state, a radio button may be *active* or *inactive* in relation to those in its own group.

- the `BaseRadio` component will also have another component to group them, the `BaseRadioGroup`.

- Similarly to checkboxes, radio buttons don’t bind to the `value` property, but use the `checked` property instead.

```js
<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>
```

#### BaseRadioGroup

you almost always want to provide at *least* two radios per each group

- we always want to have our `BaseRadio` elements grouped, it makes sense to create a component that contains the logic for this grouping: the `BaseRadioGroup`.

```vue
 <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
```

------

### Select

- Select elements fire a `change` event whenever the user makes a new selection

> Since `$attrs` is an object, we can use the JavaScript spread operator to combine our binds into a single object. We will first spread the `$attrs` into our v-bind, and then bind the `change` event into our `v-bind`.

```vue
<select
    :value="modelValue"
    class="field"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue'), $event.target.value
      },
    }"
  >
```

- In Vue 3: remember that if we choose not to use the `@` sign syntax, the event will be prefixed by the keyword `on`, in this case `onChange` since were listening to the `change` event.

- All event listeners that are received in `$attrs` from the parent are prefixed with the `on` keyword, and the first letter is capitalized.

  > @change = onChange
  >
  > @input = onInput

------

## Form Validation

validate on 

- submit method
- every keystroke
- wehenever an element looses focus ('blur') `@blur="validateInput"`

```vue
 <div class="form-control">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateInput"
      />
      <p v-if="usernameValidity === 'invalid'">Please enter a valid name!</p>
</div>
      
...

validateInput() {
      if (this.userName === '') {
        this.usernameValidity = 'invalid';
      } else {
        this.usernameValidity = 'valid';
      }
    }
```

------

## Build Custom Element 

### Binding to the value

you can use `v-model` on custom components. it uses a special prop "**modelValue**" and a special event "**update:modelValue**"

use `props: ['modelValue'],`

```js
props: ['modelValue'],
emits: ['update:modelValue'],
```

in the custom element: eg.

#### `modelValue`

By default in Vue 3, `v-model` expects a property named `modelValue` to be on your v-model-capable component. 

```js
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      activeOption: this.modelValue
    };
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
};
```

another example:

```vue
<template>
  <label v-if="label">{{ label }}</label>
  <input
    :value="modelValue"
    :placeholder="label"
    class="field"
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },  
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
```

#### Emitting  `update:modelValue` 

All components that are capable of being `v-modeled` have to emit an event in order for the parent to be able to catch the updates to that component’s data.

In Vue 3, by default all `v-model` contracts expect for your component to emit an `update:modelValue` event

```vue
 <input
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
```

------

### Passing $attrs

for: Attributes, classes & styles

- when you pass down attributes, classes and styles from a parent to a child, Vue will attempt to automatically figure out where inside your template these attributes should be injected.

- In single root components (components with a single wrapping element), Vue will inject all the attributes, classes and styles into the root element.

- In multi-root components, Vue can’t figure out which one of the nodes, or fragments, it should inject the attributes to.

   ->  you have to manually bind the `$attrs` object to the element. 

```vue
<input
		v-bind="$attrs"
    class="field"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
/>
```

