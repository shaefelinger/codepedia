# Vue Advanced reactivity

## Problem with calling methods inside `{{}}`:

it gets called everytime anything on the page changes. -> bad performance

-> Methods are not the best way, to output dynamically calulated values

## Computed Properties

Computed properties provide a performance improvement. They are like Methods, but only update, when a value changes.

> expexts an Object, where you define methods - just like methods

```js
computed: {
  image() {
    return this.variants[this.selectedVariant].image
  },
  inStock() {
    return this.variants[this.selectedVariant].quantity
  }
}
```

- naming: the computed property is used like a data-property, not like a method. so name it as you would name a data-property
- important: don't call the computed property, just point at it -> write without `()` !
- computed properties are used to output data, not like a function
- always return a value


Computed Properties can  watch **multiple properties**

```js
 computed: {
    fullname() {
			return this.name + ' ' + this.lastName
    },
  },
```

(whenever one of the properties change, the computed property will update)

------

## Watch

Function to execute, if one of its dependecies changes. 

> expexts an Object, where you define methods - just like methods

```js
watch: {
	  name() {

    }
},
```

Watcher uses a name used in a data- or computed-property.

-> whenever the property changes, the watcher method will run.

- watchers don't return anything

- watchers automatically have the value of the property as an argument

  ```js
   watch: {
      name(value) {
        this.fullname = value + ' Doe'
      },
    },
  ```

- you can also have the previous value as an argument:

  ```js
  watch: {
  	name(newValue, oldValue) {...}
  }
  ```

- Watchers can only watch **ONE Property**


Watchers are used  for example to check if a value exeeds a certain Number:

```js
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    },
  },
```

or to send HTTP_requests, if certain data changes, or set a timer...

## Methods vs. Computed vs. Watchers

**Methods:** for event- or data-binding. Data-binding: re-executed for every re-render. Use for events or data that needs to be re-evaluated every time

**Computed:** data-binding. only re-evaluated if one of their used values changed. Use for data that depends on other data

**Watch:** not directly used in template. Run code in reaction to changed data. Use for non-data updates