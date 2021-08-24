# VUE Components

## Components 

Components are the building blocks of an app, Any given web page may be composed of multiple components, and it’s common for components to be “parents” that have child components nested within them.

A component is like a custom HTML-element. -> reuseable Pieces of HTML with connected Data and logic

- Components are used to build UIs by combining them
- reuse
- smaller piecesComponente buil "parent-child" relations and use "unidirectional data flows" for communication

> Convention: The Name Should be made up of 2 words

## Single File Components

.vue - files

A typical .vue component has three sections: `<template>`, `<script>`, and `<style>`.

Traditionally, these sections are written in HTML, JavaScript and CSS.

You could use Pug, TypeScript and SCSS instead by adding the appropriate `lang` attributes.

```javascript
    <template lang="pug">
    </template>
    
    <script lang="ts">
    </script>
    
    <style lang="scss" scoped>
    </style>
```

You’d just need to make sure you have the proper loaders setup and your Webpack is configured to handle these alternatives. 

For example, if we wanted to use SCSS, we’d need to make sure we install sass-loader and its peer dependency node-sass. We can quickly do this from the command line with:

```
npm install --save-dev sass-loader node-sass
```

 to figure out what dependencies you’d need for other languages, check out the [Vue Loader docs](https://vue-loader.vuejs.org/guide/pre-processors.html).

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

## Local vs Global Components

registering Components

### 1. Global Components:

```js
//main.js

const app = createApp(App);

app.component('user-info', UserInfo);

app.mount('#app');
```

Can be used anywhere in the whole app!

Downside: 

- they all have to be loaded initially. Problem in bigger apps
- list can get very long

### 2. Local Components

```js
import TheHeader from './components/TheHeader.vue';

export default {
  components: { 'the-header': TheHeader },
```

components-property wants an object with key-value pairs. key= name of the custom tag, value= the component

You can also write:

```
 components: { TheHeader: TheHeader },
```

`TheHeader` can be used in the template as: `the-header`

or as `<TheHeader />` (this can also be self-closing)

-> vue automatically translates between PascalCase and kebap-case

Simpler Syntax: (modern JS-Syntax)

```
components: { TheHeader }
```

------

## Styles

#### `scoped` 

that allows us to *scope* and isolate these styles to just this component. This way, these styles are specific to this component and won’t affect any other part of our application.

CSS is always global

usually you define global CSS in app.vue

-> for components add `scoped`-attribute to the style-tag

```vue
<style scoped >
header {
...
}
</style>
```

> under the Hood: vue gives the components special data-atributes
>
> ```
> header h1[data-v-9a9f6144] {...}
> ```

#### Global Styles

There are several different ways to handle this. The simplest way is to add styles to the **App.vue** file - the root component of our app.  It’s recommended to only store your global styles in one place to avoid potential conflicts.

We can also place content in our **App.vue**’s template that we want to be displayed globally across every view of our application.

