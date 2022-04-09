# SCSS / SASS

[https://sass-lang.com/](https://sass-lang.com/)

[guide](https://sass-lang.com/guide)

- Extension to CSS
- preprocessor
- CSS gets messy

- also LASS, Stylus…

## Features

you get

- Variables
- Nesting
- operators
- partials & imports
- mixins, functions
- extends
- control directives

## 2 different syntaxes

### SCSS

- uses CSS style

### SASS 

- indentation, no curly braces

> experiment in codepen

## Comments

```
// comment
/* comment */
```

## Variables `$`

```scss
$color-primary: #f9ed69; // yellow color

nav {
  margin: 30px;
  background-color: $color-primary
}
```

## Nested Selectors

this

```scss
.navigation {
  list-style: none;
  
  li {
    
  }
}
```

is the same as

```css
navigation li {
  
}
```

you can nest inside a nested selector: (use `&`)

```scss
.navigation {
  list-style: none;
  
  li {
    display: inline-block;
    margin-left: 30px;
    
    &:first-child {
      margin: 0;
    }
  }
}
```

## path `&`

`&`is the selector path at this point - attaches directly

```scss
 .navigation li:first-child
// without &:
.navigation li: first-child // doesn't work
```

> don't nest to deeply...

```scss
.navigation {
  list-style: none;
  
  li {
    display: inline-block;
    margin-left: 30px;
    
    &:first-child {
      margin: 0;
    }
    
    a:link {
      text-decoration: none;
      text-transform: uppercase;
      color: $color-text-dark;
    }
  }
}
```

------

### Example: clearfix

> if all elements float, the parent-element gets a size of 0
>
> ```
> .clearfix::after {
> content: "";
> clear: both;
> display: table;
> }
> ```

instead of using a clearfix-class, you can nest it in the element

```scss
nav {
  margin: 30px;
  background-color: $color-primary
    
  &::after {
    content: "";
    clear: both;
    display: table;
  }
}
```

## Mixins

like a variable, but with multiple lines of code

`@mixin`, `@include`

```scss
@mixin clearfix {
    &::after {
    content: "";
    clear: both;
    display: table;
  }
}

nav {
  margin: 30px;
  background-color: $color-primary;
  
  @include clearfix;
}

```

#### Pass Argument to mixin

```scss
@mixin style-link-text($color) {
  text-decoration: none;
  text-transform: uppercase;
  color: $color;
}

a {
      @include style-link-text($color-text-dark);
}
```

------

## Color-functions

eg `darken()`, `lighten()`

```
background-color: darken($color-secondary, 15%);
```

```scss
.btn-main:link ,
.btn-hot:link {
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  text-decoration: none;
  text-transform: uppercase;
  width: $width-button;
}

.btn-main {
    background-color: $color-secondary;
  &:link {
  }
  
  &:hover {
    background-color: darken($color-secondary, 15%);
  }
}
```



Example:

```scss
* {
  margin: 0;
  padding:0;
}

$color-primary: #f9ed69; // yellow color
$color-secondary: #f08a5d; // orange 
$color-tertiary: #b83b5e; // pink
$color-text-dark: #333;
$color-text-light: #eee;

$width-button: 150px;

nav {
  margin: 30px;
  background-color: $color-primary;
    
  &::after {
    content: "";
    clear: both;
    display: table;
  }
}

.navigation {
  list-style: none;
  float: left;
  
  li {
    display: inline-block;
    margin-left: 30px;
    
    &:first-child {
      margin: 0;
    }
    
    a:link {
      text-decoration: none;
      text-transform: uppercase;
      color: $color-text-dark;
    }
  }
}

.buttons {
  float: right;
}

.btn-main,
.btn-hot {
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  text-decoration: none;
  text-transform: uppercase;
  width: $width-button;
  color: $color-text-light;
}

.btn-main {
  &:link {
    background-color: $color-secondary;
  }
  
  &:hover {
    background-color: darken($color-secondary, 15%);
  }
}

.btn-hot {
  &:link {
    background-color: $color-tertiary;
  }
  
  &:hover {
    background-color: lighten($color-tertiary, 15%);
  }
}
```

## Functions

not so often used

```scss
@function divide($a, $b) {
  @return $a / $b;
}
```

to add the unit, multiply: `* 1px`

```scss
@function divide($a, $b) {
  @return $a / $b;
}

nav {
  margin: divide(60, 2) * 1px;
  background-color: $color-primary;
  
  @include clearfix;
}
```

## Extends

placeholder - the other way than mixins

```scss
%btn-placeholder {
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  width: $width-button;
  @include style-link-text($color-text-light);
}


.btn-main {
  &:link {
    @extend %btn-placeholder;
    background-color: $color-secondary;
  }
  ...
```

> not so often used

------

[https://github.com/jonasschmedtmann/advanced-css-course](https://github.com/jonasschmedtmann/advanced-css-course)

