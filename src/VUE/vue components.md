# 		VUE Components

## Components 

Components are the building blocks. A component is like a custom HTML-element. -> reuseable Pieces of HTML with connected Data and logic:

- Components are used to build UIs by combining them
- reuse
- smaller pieces 
- Components build "parent-child" relations and use "unidirectional data flows" for communication

::: tip
Convention: 

- The Name Should be made up of 2 words

- start with capital-letter. 
- not the same name as a html-tag
- put in components-folder

:::

## Single File Components

`.vue` - files

A typical .vue component has three sections: `<template>`, `<script>`, and `<style>`.

Traditionally, these sections are written in HTML, JavaScript and CSS.

Use Pug, TypeScript and SCSS instead by adding the appropriate `lang` attributes.

```html
    <template lang="pug">
    </template>
    
    <script lang="ts">
    </script>
    
    <style lang="scss" scoped>
    </style>
```

> (Make sure you have the proper loaders setup and your Webpack is configured to handle these alternatives). 
>
> For example,  to use SCSS,  make sure to install sass-loader and its peer dependency node-sass:
>
> ```
> npm install --save-dev sass-loader node-sass
> ```
>
> Check out the [Vue Loader docs](https://vue-loader.vuejs.org/guide/pre-processors.html).
>

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
   > 	EventCard: EventCard
   > }
   > ```

3. **use** in template (as if it were an HTML-tag)

   ```vue
   <template>
   	<EventCard />
   </template>
   ```

------

or import directly:

```js
  components: {
    'task' : require('components/Task.vue').default
  }
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

Vue3:

```js
// Vue 3
import { createApp } from 'vue';
import GlobalComponent from './GlobalComponent.vue';
const app = createApp({}) 
app.component('GlobalComponent', GlobalComponent);
```

Vue 2:

```js
// Vue 2
import Vue from 'vue';
import GlobalComponent from './GlobalComponent.vue'; 
Vue.component('GlobalComponent', GlobalComponent);
```

or:

```js
//main.js - vue2
const app = createApp(App);
app.component('user-info', UserInfo);
app.mount('#app');
```

Can be used anywhere in the whole app!

Downside: 

- they all have to be loaded initially. Problem in bigger apps
- list can get very long
- use this sparingly!

### 2. Local Components

```js
import TheHeader from './components/TheHeader.vue';

export default {
  components: { 'the-header': TheHeader },
```

components-property wants an object with key-value pairs. key= name of the custom tag, value= the component

##### vue automatically translates between PascalCase and kebap-case

You can also write:

```
 components: { TheHeader: TheHeader },
```

Simpler Syntax: (modern JS-Syntax)

```
components: { TheHeader }
```

`TheHeader` can be used in the template as: `the-header`or as `<TheHeader />` (this can also be self-closing)

------

## Styles

### `scoped` 

CSS is always global  - is applied to all components! (Usually you define global CSS in app.vue)

-> To just use it in the component add `scoped`-attribute to the style-tag

This way, these styles are specific to this component and won’t affect any other part of our application.

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
>
> - vue adds data-attribute to html and css-selectors
>
> - -> performance-issues
>
> - -> sometimes it's better to just write a more specific css-selector !!
>
>   ```css
>   modal h1 {
>   	...
>   }
>   ```
>

### Global Styles

- Several different ways to handle this. The simplest way is to add styles to the **App.vue** file - the root component of our app.  
- It’s recommended to only store your global styles in one place to avoid potential conflicts.
- You can also place content in our **App.vue**’s template that you want to be displayed globally across every view of our application.


Don't scope the root-component. Use global Stylesheet `global.css` in assets folder (or `main.css`). Import in main.js

```js
import './assets/global.css'
```

------

## Boolean props

common practice when creating components to set props that are meant to toggle on and off (also known as “flags”) to a default of `false`. 

-› allows to set them to “on” with a very clean syntax on the instance of the component. 

For example, with the `vertical` prop, if the user wants to have their group laid out vertically, they would simply add the keyword to the instance like so:

```html
<BaseRadioGroup
  v-model="event.pets"
  vertical
/>
```

Boolean props in Vue that are not specifically bound are assumed to be **true**. So in the above example, `vertical` is the same as `:vertical="true"`.

`vertical` is the same as: `:vertical = "true"`
