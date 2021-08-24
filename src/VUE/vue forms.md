# VUE Forms

## Forms Vue mastery

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

------

## v-model-Modifiers

### `.number`



`v-model.number`  is a modifier that typecasts the value as a number.

```vue
<input id="age" name="age" type="number" />
```

even with `type="number"`, the value of HTML input elements always returns a string.

if you use a ref, no automaric type-conversion takes place

But with vue, this returns a number - with vue3:

```vue
<input v-model.number="age" type="number" />
```

-> forces a number

other modifiers:

### `.lazy` 

- don't update immedialtely

### `.trim` 

trims extra whitespace on beginning/end  (like using the `trim()` -function)

------

## Dropdowns

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

## Radio and Checkboxes

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

## Form Validation

validate on 

- submit method
- every keystroke
- wehenever an element looses focus ('blur') `@blur="validateInput"`

```js
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

## Build Custom Element - 

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

In Vue 3, by default all `v-model` contracts expect for your component to emit an `update:modelValue` event,

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


