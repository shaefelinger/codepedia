# Vue Data-Binding

## Reactivity

Vue is **reactive**. 

- The instance’s data is linked to every place that data is being referenced. 

- HTML will be updated to display new values any time that referenced data changes.


------

## Expressions {{}} 

also called **Interpolation Syntax**

```html
<h1>{{ product }}</h1>
```

-> bound to data-object "product"

::: tip

Inside the double curly braces  JavaScript expressions are used

:::

### some other ways to use expressions

```js
{{ product + '?'}}
{{ firstName + ' ' + lastName}}
{{ message.split('').reverse().join('') }}
```

or call a method, that is defined under methods:

```js
{{ myMethod() }}
```

::: warning

you can use ternary expression, but no complex code eg. if-statements

::: 

------

## Attribute Binding

`{{}}` is only availyble between html-tags -> to output content. To dynamically change attributes use the `v-bind`-directive

### v-bind-directive

```js
<img v-bind:src="image-path" >
```

### shorthand `:`

```js
<img :src="image-path" >
```

```html
<a :href="url">Best Website ever</a>
```

```html
<img :src="book.img" :alt="book.title">
```



Dynamically bind an attribute to an expression. 

In this case, the attribute is `src` and the expression is whatever is in that attribute’s quotes: `"image-path"`

> Imagine it looking like this: `v-bind:src="{{ image }}"`. 
>



There are many different HTML attributes, so there are many use cases for `v-bind`. For example: 

- binding a description to an `alt` attribute

- binding a URL to an `href` 

- binding some dynamic styles to a `class` or `style` attribute, 

- disabling and enabling a button

- etc...

  

## v-html-directive

html-content 

```vue
<p v-html="myHtmlData"></p>
```

careful: can introduce security issues!

