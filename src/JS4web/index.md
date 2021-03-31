# Adding Javascript

## The `<script>` tag

The `<script>` element allows you to add JavaScript code inside an HTML file.

Linking code is preferable because of a programming concept called Separation of Concerns (SoC). Instead of having messy code that is all in the same file, web developers separate their code into different files

```html
<script src="./exampleScript.js"></script>
```

### Defer attribute

By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file,

When the HTML parser comes across a `<script>` element, it stops to load its content. Once loaded, the JavaScript code is executed and the HTML parser proceeds to parse the next element in the file. This can result in a slow load time for your website. 

The *defer attribute* specifies scripts should be executed after the HTML file is completely parsed. 

```html
<script src="example.js" defer></script> 
```

When a script contains functionality that requires interaction with the DOM, the `defer` attribute is the way to go. it ensures that the entire HTML file has been parsed before the script is executed.

### Async attribute

The `async` attribute loads and executes the script asynchronously with the rest of the webpage. 

the HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, with the `async` attribute, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded.

```
<script src="example.js" async></script>
```

`async` is useful for scripts that are independent of other scripts in order to function accordingly. Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option as it optimizes web page load time.

### Convention

The old convention was to put scripts right before the `</body>` tag to prevent the script from blocking the rest of the HTML content. Now, the convention is to put the script tag in the `<head>` element and to use the `defer` and `async` attributes.

https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html



## `DOMContentLoaded` event

An *alternative* solution to moving the script at the botoom of the HTML would be to use browser events!

When the document object model has been fully loaded, the browser will fire an event.

```js
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
```

`document.onload(...)`

fires later than `DOMContentLoaded` -- `load` waits until all of the images, stylesheets, etc. have been loaded (everything referenced by the HTML.) Many older developers use `load` in place of `DOMContentLoaded` as the latter wasn't supported by the very earliest browsers. But if you need to detect when your code can run, `DOMContentLoaded` is generally the better choice.

if you do have JavaScript code that needs to run *as soon as possible*, then you could put that code in the `<head>` and wrap it in a `DOMContentLoaded` event listener. This way it will run as early as possible, but not too early that the DOM isn't ready for it.

- [DOMContentLoaded Event docs on MDN](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)

------

## Add JS (appbrewery)

### inline JS

as Attribute inside HTML-Tag - try to avoid!!

```html
<body onload="alert('Hello')";
```

### internal JS

inside `<script>`Tag

```html
<script>
	alert("Hello");
</script>
```

### external JS

`<sccript>`Tag with scr-Attribute