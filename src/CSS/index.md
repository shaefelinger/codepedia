# CSS - Basics

[[TOC]]

------

## CSS Syntax

<img src="./assets/CSS Syntax3.png" alt="CSS Syntax" style="zoom:50%;" />

------


## CSS Comments

`/* comment */`

------

## Add CSS

### Inline CSS

Inside the `style`-attribute of an HTML-Tags: `style="css-code;"`

```html
<p style=”color: grey; font-size: 12px;”>Lorem ipsum</p>
```

------

### Internal CSS

In the  `<head>` of the HTML-Code

```html
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>HTML and CSS Course</title>
      <style>
        body {
          background-color: gold;
        }
          h1 {
          color: #3c3c3c;
        }
      </style>
    </head>
  <body>
  <h1>HTML and CSS Course</h1>
  <p>In this course, we are going to learn ...</p>
  ...
</body>    
</html>
```

------

### External CSS

Defined in an external file (eg styles.css) and added via `<link>` inside the `<head>`-tag 

```html
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>HTML and CSS Course</title>
      <link rel="stylesheet" type="text/css" href="courses.css">
    </head>
    <body>
    <h1>HTML and CSS Course</h1>
      <p>In this course, we are going to learn ...</p>
      ...
    </body>
  </html>
```

------

