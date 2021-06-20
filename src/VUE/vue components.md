# VUE Components

## Components & Props

Components are the building blocks of an app, Any given web page may be composed of multiple components, and it’s common for components to be “parents” that have child components nested within them.

A component is like a custom HTML-element. -> reuseable Pieces of HTML with connected Data and logic

- Components are used to build UIs by combining them
- reuse
- smaller piecesComponente buil "parent-child" relations and use "unidirectional data flows" for communication

> Convention: The Name Should be made up of 2 words

------

## Import Component

1. **Import**: (VSCode Snippet `vimport`) 

   ```js
   import EventCard from '@/components/EventCard.vue'
   ```

2. **register** this component as a child component (snippet `vcomponents`) 

   ```js
   components: {
   	EventCard
   }
   ```

   > because we’re using ES6, this is the same as:
   >
   > ```js
   > components: {
   > 	EventCard: Eventcard
   > }
   > ```

3. use in template 

   ```vue
   <template>
   	<EventCard/>
   </template>
   ```

------

or

#### Register Component in `main.js`

`main.js`

```js
app.component('active-element', ActiveElement);
```

------

