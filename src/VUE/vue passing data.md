# VUE Passing Data

Use a single source of truth…

**props** -› pass data from parent to child: downwards

**emit** custom Events -› data from component to main-app: upwards

## Props

Parent => child

Props = properties. Act like custom HTML-Attributes

Each component has its own isolated scope. **Props** are custom attributes for passing data into a component.

Props should be defined in advance. (also define type, required etc.)

simplest form: an Array (props as strings) (more for prototyping)

- (camelCase): vue automatically converts camelCase to kebap-case. (HTML-template should use kebap)
- props are available just like data: use in template and in script with `.this`
- make sure to have no name clashes with data- and computed-properties

in parent - pass the data via attribute:

```vue
  <Modal header="Sign up now"/>
```

in child: register the prop (has to be a string)

```js
  export default {
      props: ['header'],
  };
```

use in child:

```vue
<h1>{{ header }}</h1>
```

#### Multiple Props

```vue
<Modal header="Sign up now !" text="Grab it for half price"/>
```

```js
props: ['header', 'text'],
```

#### Data-Bind	

to pass data that is not a string - eg an Array, variables, etc.

In Parent:

```vue
<Modal :header="header" :text="text"/>
```

#### Class data-bind

parent:

```vue
<Modal :header="header" :text="text" theme="sale"/>
```

child	

if condition is true, apply 'sale'

```vue
<div class="modal" :class="{ sale: theme === 'sale'}">
```

```js
export default {
	props: ['header', 'text', 'theme'],
};
```

::: danger

#### Props should not be mutated!

:::

-> unidirectional Data-flow.

2 ways to handle it:

1. send event to the parent and chnge the data there
2. Use as initial value: make a copy and change it in the component, but it will not change th original data from the parent!

```js
props: ['isFavorite'], 
data() { return { friendIsFavorite: this.isFavorite, }
```

#### Validating Props

Using an Array is only ok with very simple projects, prototypes etc

```js
props: ['name', 'phoneNumber', 'emailAdress'],
// This is only OK when prototyping
```

Vue’s props feature has built-in validation, so we can specify things like the prop’s `type` and whether it’s `required`, etc.

Use an Object and provide the type:

```js
props: { 
  name: String, 
  phoneNumber: String,
  emailAddress: String, 
  isFavorite: String 
}
```

or even more detailled: provide an object for every prop

```js
props: { 
	name: { 
		type: String, 
		required: true, 
	}, 
	isPremium: { 
		type: Boolean,
		required: false, 
	}, 
	isFavorite: { 
		type: Boolean, 
		required: false, 
		default: false, 
		validator(value) { 
			// check... // return true or false 
		}, 
}
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

[https://v3.vuejs.org/guide/component-props.html#prop-types](https://v3.vuejs.org/guide/component-props.html#prop-types)

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

```js
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

#### Passing Multiple Props

Instead of:

```js
<User
	:name="user.name" 
	:profile="user.profile" 
	:twitter="user.twitter"
/>
```

just `v-bind` an Object:

```js
<User v-bind="user"/>
```



---

## Emit

child => parent

Custom-event: fired from a component, can be listened from the parent-component 

- **up:** emit an event, telling the parent that it happened.
- Give the component the ability to let its parent know an event happened within it.

* Custom Events are emmited (via \$emit) to trigger a method in a parent component

##### emit the event

```js
// child
methods: {
	closeModal() {
		this.$emit('closeModal')
	}
}
```

parent - can listen to the custom event

```vue
// parent
<Modal :header="header" :text="text" theme="sale" @closeModal="toggleModal"/>
```

the custom event will fire from the child to the parent

* they can contain data (eg. data the user has entered, the id of a selected element, etc.)

> No Neighbour communication!! -> you have to use the parent component

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

```js
addToCart() { this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
},
```

-> id is the payload

```js
// child
toggleFavorite() {
	this.$emit('toggle-favorite', this.id);
},
```

```js
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

[https://v3.vuejs.org/guide/component-attrs.html](https://v3.vuejs.org/guide/component-attrs.html)

---

## Provide & Inject

If data has to travel though a lot of "pass-through-components", you can use Provide-inject:

- Provide data in the parent component (not in a neighbour) and pass it directly to any child-component, no matter how deeply nested it is.


- to avoid pass-through-components. 
- use only when nescessary. it makes the code less understandable. props & custom events should be the default communication

```js
provide: {
    topics: [
      {
        id: 'basics',
        title: 'The Basics',
        description: 'Core Vue basics you have to know',
        fullText:
          'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!'
      },
    ]
  },
```

Better: use a method, that returns an object -> you can access data from the data-property

```js
 provide() {
    return {
      topics: this.topics
    };
  },
```

inject works like props. 

```js
inject: ['topics'],
```

you can also provide methods:

### inject Function

```js
// child
<button @click="selectTopic(id)">Learn More</button>

// ...
export default {
  inject: ['selectTopic'],
```

```js
// parent

 provide() {
    return {
         selectTopic: this.activateTopic
    };
  },
   methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find(topic => topic.id === topicId);
    }
  }
```
