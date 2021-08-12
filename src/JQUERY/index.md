## jQuery

```js
$('h1').css('color', 'red')
```

`$` is short for `jQuery`

cdn-link needs own script link - before the `index.js` link

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./index.js"></script>
```

---

> check, if iQuery is ready:( when in the `<head>`-tag) -> not needed, when cdn is at bottom of body-tag
>
> ```
> $(document).ready(function(){
>
> })
> ```

---

## Selecting Elements with jQuery

```js
$('h1')

// instead of

document.querySelector('h1')
```

```
$('h1.title')
```

also:

```js
$('button')

// is the same as

document.querySelectorAll('button')
```

---

## Manipulating Styles

```js
// $(element).css(property, value)

$('h1').css('color', 'red')
```

2 values set the value of the property

### Get Styles

```js
console.log($('h1').css('color'))
console.log($('button').css('font-size'))
```

1 value reads the value of the property

---

### Adding/Removing Class to Element

```js
$('h1').addClass('big-title')

$('h1').removeClass('big-title')

// multiple classes:
$('h1').addClass('big-title margin-50')
```

---

### hasClass

```js
$('h1').hasClass('margin-50')
//-> true
```

---

## Manipulating Text

```js
$('h1').text('Halli Hallo')
```

### manipulate HTML

```js
$('h1').html('<em>Hey</em> You')
```

---

### Manipulate Attributes

```js
$('a').attr('href', 'https://www.yahoo.com')

console.log($('h1').attr('class'))
```

---

### Adding EventListeners

```js
$('h1').click(() => {
  $('h1').css('color', 'purple')
})
```

```js
$('button').click(() => {
  $('h1').css('color', 'purple')
})

// instead of

for (let i = 0; i < 5; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', () => {
    document.querySelector('h1').style.color = 'purple'
  })
}
```

```js
$('input').keypress((event) => {
  console.log(event.key)
})

// also:
$(document).keypress((event) => {
  console.log(event.key)
})
```

#### `.on`

```js
$('h1').on('mouseover', () => {
  $('h1').css('color', 'red')
})
```

---

## Adding and removing Elements

```js
$('h1').before('<button>New</button>')

$('h1').after('<button>New</button>')

// inside the Element:
$('h1').prepend('<button>New</button>')

$('h1').append('<button>New</button>')
```

##### remove

```js
$('button').remove()
```

---

## Animation

```js
$('button').click(() => {
  $('h1').hide()
})
```

```js
$('button').click(() => {
  $('h1').show()
})
```

```js
$('button').click(() => {
  $('h1').toggle()
})
```

```js
$('button').click(() => {
  $('h1').fadeOut()
})

$('button').click(() => {
  $('h1').fadeIn()
})

$('button').click(() => {
  $('h1').fadeToggle()
})
```

```
.slideUp()
.slideDown()
.slideToggle()
```

### .animate

```js
$('button').click(() => {
  $('h1').animate({ opacity: 0.5 })
})

// -> only numeric values

$('button').click(() => {
  $('h1').animate({ margin: '20%' })
})
```

chaining:

```js
$('button').click(() => {
  $('h1')
    .slideUp()
    .slideDown()
    .animate({ opacity: 0.5 })
    .animate({ margin: '10px' })
})
```
