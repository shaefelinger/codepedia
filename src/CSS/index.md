# CSS - Basics

[[TOC]]

------

<img src="./assets/css isnt easy evans.jpeg" alt="assets/css isnt easy evans.jpeg" style="zoom: 50%;" />


## CSS Syntax

<img src="./assets/CSS Syntax.png" alt="assets/CSS Syntax.png" style="zoom:33%;" /> <img src="assets/CSS Syntax 2.png" alt="assets/CSS Syntax2.png" style="zoom: 25%;" />

------


## CSS Comments

`/* comment */`

------

## Add CSS

### Add CSS: Inline

Im Style-Attribut eines HTML-Tags: `style="css-code;"`

```html
<p style=”color: grey; font-size: 12px;”>Lorem ipsum</p>
```

------

### Add CSS: Internal

Im `<head>`-Part des HTML-Codes mit `<style>`-Tag

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

### Add CSS: External

CSS wird in externem File definiert (z.B. styles.css) und über `<link>` im `<head>`-Tag eingebunden.

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


