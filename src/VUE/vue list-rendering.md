# Vue List Rendering

## Loop through an array

```vue
<ul>
	<li v-for="detail in details">{{detail}}</li>
</ul>	
```

##### Example

```html
<button v-on:click="toggleShowBooks">
	<span v-if="showBooks">Hide Books</span>
	<span v-else>Show Books</span>
</button>
```

```js
books: [
	{ title: 'name of the wind', author: 'patrik rothfuss'},
	{ title: 'the final empire', author: 'brandon sanderson'},
	{ title: 'the way of kings', author: 'brandon sanderson'},
],
```

## Variations:

### Using the index:

```vue
<li v-for="(detail, index) in details">{{detail}} - {{index}}</li>
```

### Loop through Objects

```vue
<li v-for="value in { name: 'Hans', age:39}">
	{{value}}
</li>
```

### With Key-Name

```vue
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>

```

### With Key-Name and Index

```vue
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

### Loop trough a range of numbers

```vue
<li v-for="num in 10">{{num}}</li>
```

### Destructuring

```vue
<li
	v-for="{ name, id } in users" 
    :key="id"
	>
		{{ name }}
</li>
```

### Object / grab the key

```vue
<li v-for="(value, key) in { 
  name: 'Lion King', 
  released: 2019,
	director: 'Jon Favreau',
}">
	{{ key }}: {{ value }}
</li>

```

with index:

```vue
 <li v-for="(value, key, index) in { 
 	name: 'Lion King',
	released: 2019,
	director: 'Jon Favreau',
}">
	#{{ index + 1 }}. {{ key }}: {{ value }}
</li>
```



------

## Key Attribute

Essential for list items! Each DOM element needs a unique key.

```vue
<div v-for="variant in variants" :key="variant.id">
	{{ variant.color }}
</div>
```

>  `:key`is shorthand for `v-bind` 

- Key needs a uniqe value für each element.
  - Usually IDs (don't use index)
  - can be the whole object
  
- to keep frontend-ui in sync

- performance improvements

- you can use template literals:

  ```vue
  <li v-for="(detail, index) in details" :key="`key${index}`">{{detail}}</li>
  ```

------

## `v-if` and `v-for`:

DON'T use them on the same element. use a wrapper with v-if instead!

