# Data-binding

## Expressions - {{  }}

also called **Interpolation Syntax**

```html
<h1>{{ product }}</h1>
```

-> bound to data-object "product"

Inside the double curly braces  JavaScript expressions are used

### Other ways to use expressions

```html
{{ product + '?'}}
{{ firstName + ' ' + lastNamre}}
{{ message.split('').reverse().join('') }}
```

or call a method, that is defined under methods:

```vue
{{ myMethod() }}
```

you can use ternary expression, but no complex code eg. if-statements

------

## Reactivity

Vue is **reactive**.the instance’s data is linked to every place that data is being referenced. So not only can Vue make its data appear within the HTML that references it, but that HTML will be updated to display new values any time that referenced data changes.

------

## Attribute Binding

{{}} is only availyble between html-tags -> to output content. to dynamically change attributes use the `v-bind`-directive

### v-bind-directive

```
<img v-bind:src="image-path" >
```

shorthand

```
<img :src="image-path" >
```

Dynamically bind an attribute to an expression. 

In this case, the attribute is `src` and the expression is whatever is in that attribute’s quotes: `"image"`

Imagine it looking like this: `v-bind:src="{{ image }}"`. 



There are many different HTML attributes, so there are many use cases for `v-bind`. 

For example: 

-  binding a description to an `alt` attribute
- binding a URL to an `href` 
- binding some dynamic styles to a `class` or `style` attribute, 
- disabling and enabling a button
- ...

