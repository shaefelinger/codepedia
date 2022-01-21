# Vue Dynamic Styling

## Special Syntax

`:style` and `:class` use a **special syntax** for binding: feed an Object.

Inside of this expression, this style object is all JavaScript. So we have to use camelCased unless we want to use ‘kebab-cased’ in quotes

#### camelCase

*recommended*

```js
:style="{ borderColor: 'red' }"
```

Vue takes that information and converts it into the code:`style="{ borderColor: red }"`

#### kebap-case

```js
:style="{ 'border-color': 'red'}"
```

------

## Style-binding

Disadvantage of inline-styles: they overwrite all other style -> usually avoid `style` and use `class` instead

### Ternary expression

```js
:style="{ borderColor: conditionIsTrue ? 'red' : 'blue'}"
```

### Entire Style-object

we can bind to an entire style object that lives within our data.

-> change inline-styling dynamically

```vue
<div :style="styles"></div>

//// 
data() { 
	return { 
		styles: { 
			color: 'red', 
			fontSize: '14px' }
	} 
}
```

------

## Class Binding

### change classes dynamically

-> class is conditionally added to existing classes if true

```js
:class=" conditionIsTrue ? 'active' :'' "
```

nicer syntax

```js
:class="{ active: conditionIsTrue }"
```

the class 'active' is added, if the condition is true

##### Examples

```html
<li v-for="book in books" :class="{ fav: book.isFav }">
```

-> adds the class "fav" if book.isFav is true

```vue
<span :class="{ 'text-green-600 font-bold': entry.HasWon }">...</span> 
```



### Ternary Operators

Use in-line ternary operators to add different classes based upon a condition:

```vue
<div :class="{ isActive ? activeClass : '' }"></div>
```

### Classes and computed properties

you can use computed properties (esp. for more complicated logic):

```js
  computed: {
    boxAClasses() {
      return { active: this.conditionIsTrue }
    },
  },
```

```vue
<div :class="boxAClasses"></div>
```

### Dynamic Classes - Array Syntax

Alternative: pass an Array. esp for multiple classes

```js
:class="['demo', {active: boxSelected}]"
```
