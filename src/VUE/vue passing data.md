# VUE Passing Data

## Props

Parent => child

Props = properties. Act like custom HTML-Attributes

each component has its own isolated scope. **Props** are custom attributes for passing data into a component.

Props should be defined in advance. (also define type, required etc.)

simplest form: an Array (props as strings) (more for prototyping)

- (camelCase): vue altomatically converts camelCase to kebap-case. (HTML-template should use kebap)
- props are available just like data: use in template and in script with `.this`
- make sure to have no name clashes with data- and computed-properties

pass the data via attribute:

```vue
<friend-contact name="John Doe"></friend-contact>
```

send the data with v-bind:

```vue
<product-details :details="details"></product-details>
```

#### Props should not be mutated!

-> unidirectional Data-flow.

2 ways to handle it:

1. send event to the parent and chnge the data there
2. Use as initial value: make a copy and change it in the component, but it will not change th original data from the parent!

```vue
props: ['isFavorite'], data() { return { friendIsFavorite: this.isFavorite, }
```

#### Validating Pro ps

Using an Array is only ok with very simple projects, prototypes etc

```
props: ['name', 'phoneNumber', 'emailAdress'],
// This is only OK when prototyping
```

Vue’s props feature has built-in validation, so we can specify things like the prop’s `type` and whether it’s `required`, etc.

Use an Object and provide the type:

```vue
props: { name: String, phoneNumber: String, emailAddress: String, isFavorite:
String }
```

or even more detailled: provide an object for every prop

```vue
props: { name: { type: String, required: true, }, isPremium: { type: Boolean,
required: false, }, isFavorite: { type: Boolean, required: false, default:
false, validator(value) { // check... // return true or false }, }
```

default can also be a function

```
default: function() {}

default() {
 //
},

```

add a validator check:

```
validator(value) {
	// check...
	// return true or false
},
```

https://v3.vuejs.org/guide/component-props.html#prop-types

Specifically, the following value types (`type` property) are supported:

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

But `type` can also be any constructor function (built-in ones like `Date` or custom ones).

#### Dynamic Prop Values

If the prop needs a Non-String-Value, you have to v-bind it:

```
:isFavorite="true"
```

but also to make the content dynamic, to use `v-for`, `v-if`

```vue
<friend-contact
	v-for="friend in friends"
	:key="friend.id"
	:name="friend.name"
</friend-contact>
```

---

## Emit

child => parent

- props are a way to pass data **down** into a component
- **up:** emit an event, telling the parent that it happened.

* Custom Events are emmited (via \$emit) to trigger a method in a parent component
* they can contain data (eg. data the user has entered, the id of a selected element, etc.)

> No Neighbour communication!! -> you have to use the parent component

Give the component the ability to let its parent know an event happened within it.

The child-components emits a custom event, that the parent can listen for.

use `this.$emit`

- Emit needs at least one Argument: the name of the event
- convention: use kebap-case

```vue
methods: { addToCart() { this.$emit('add-to-cart') } ... }
```

-> listen for that event from within the parent scope,

```vue
<product-display @add-to-cart="updateCart"></product-display>
```

When that event is “heard” by the parent, it will trigger a new method by the name of `updateCart`

You can add as many arguments as you want: that is data that you pass together with the event

the emit can contain data:

```vue
addToCart() { this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
},
```

-> id is the payload

```
// child
toggleFavorite() {
	this.$emit('toggle-favorite', this.id);
},
```

```
// parent
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
  },
```

### Defining & validating custom Events

use `emits`-property

-> especially to document the component

```
emits: ['toggle-favorite'],
```

you can also specify an object:

then use a function, that recieves the data you will emit as parameters. and for example add validation in the function

```js
emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('Id is missing');
        return false;
      }
    },
  },
```

---

## Prop Fallthrough

You can set props (and listen to events) on a component which you haven't registered inside of that component.

Vue has built-in support for **prop (and event) "fallthrough"**.

You can get access to these fallthrough props on a built-in `$attrs` property (e.g. `this.$attrs`).

https://v3.vuejs.org/guide/component-attrs.html

---
