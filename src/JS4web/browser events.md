# Working with Browser Events

Event handlers are crucial for creating interactive websites with JavaScript.

### Monitor Events in Chrome

`monitorEvents()`Chrome Browser [monitorEvents documentation](https://developers.google.com/web/tools/chrome-devtools/console/events#monitor_events) . For development/testing purposes only

```js
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
```

------

## List of Events

- [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

- [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) on MDN

------

## Add and remove Event Listeners

[Inspect event listeners in Chrome DevTools](https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners)

### `.addEventListener()`

The `addEventListener()` method can be used to add multiple event handler functions to a single event.

```js
<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
```

an event listener needs three things:

1. an event target - this is called the **target**. everything on the web is an event target (e.g. the `document` object, a `<p>` element, etc.).
2. the type of event to listen for - this is called the **type**
3. a function to run when the event occurs - this is called the **listener**

```js
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', () => {
  console.log('The heading was clicked!');
});
```

### change listeners

 A change listener listens for changes in the text content of an element.

for example for form input fields

```js
element.addEventListener('change', (event) => {
  /* ... */;
})  
```

It’s best practice to create a named event handler function instead of using an anonymous function as the event handler. The code will remain more organized and reusable.

```js
function eventHandlerFunction() {
  // this block of code will run when click event happens
}
 
eventTarget.addEventListener('click', eventHandlerFunction);	
```

> !!! No () after the function-name, or it will be evoked immediately!!!
>

- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on MDN



### .`onevent`

Event Handlers can also be registered by setting an `.onevent` property on a DOM element (event target).  `.onevent` can only register a single event listener

```js
eventTarget.onclick = eventHandlerFunction;
```

The pattern for registering a specific event is to append an element with `.on` followed by the lowercased event type name. 

The `.onclick` property allows you to assign a function to run on a click event on an element:

```js
let element = document.getElementById('interact');
element.onclick = function() { element.style.backgroundColor = 'blue' };
```

- https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick




### `.removeEventListener()`

`.removeEventListener()` needs both the exact event type name and the name of the event handler you want to remove. If `.addEventListener()` was provided an anonymous function, then that event listener cannot be removed.

Removing An Event Listener -  requires you to pass *the same exact listener function* to it as the one you passed to `.addEventListener()`.

This code will add and then remove an event listener:

```js
function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);
```

this would *not* work (it does *not* remove the event listener):

```js
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});
```

Two functions can look the same, but live in two different places in memory.

- [removeEventListener on MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)


------

## Event Object Properties

JavaScript stores events as [Event objects](https://developer.mozilla.org/en-US/docs/Web/API/Event) with their related data and functionalities as properties and methods. 

When an event is triggered, the event object can be passed as an argument to the event handler function.


```js
document.addEventListener('click', (event) => {  
   console.log('The document was clicked');
   console.log(event);
});	
```

Some Properties:

### `.target` 

 [`.target` property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) to reference the element that the event is registered to.

Gives  direct access to the element that was clicked. We can eg. access its `.textContent`, modify its styles, update the classes it has, etc.

### `.type`

 [`.type` property](https://developer.mozilla.org/en-US/docs/Web/API/Event/type) to access the name of the event.

### `.timeStamp`

 [`.timeStamp` property](https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp) to access the number of milliseconds that passed since the document loaded and the event was triggered

```js
function eventHandlerFunction(event){
   console.log(event.timeStamp);
}
 
eventTarget.addEventListener('click', eventHandlerFunction);
```

### `.preventDefault()`

to prevent the default action from occurring! For example:

-  prevent page-refresh after a submit
-  some code and display some output when you <u>click a link</u> instead navigate of navigating to the location
-  When you submit a form, by default, it will send the data to the location in its `action` attribute. What if we wanted to validate the data before sending it?

```js
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});
```



### `.target.nodeName`

-> Example: Event Delegation

```js
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
    myCustomDiv.appendChild(newElement);
}

function respondToTheClick(event) {
    if (event.target.nodeName === 'P') {
        console.log('A paragraph was clicked.', event.target.textContent );
    }
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);
```

The `.nodeName` property will return a *capital* string, not a *lowercase* one!!

```js
> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}
```

- [Article: Event delegation](https://javascript.info/event-delegation)
- [Article: How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)



------

## Event Types

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) on MDN

### Mouse Events

https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

- `click`
- `wheel`
- `mousedown` event is fired when the user presses a mouse button down. This is different from a `click` event because `mousedown` doesn’t need the mouse button to be released
- The `mouseup` event is fired when the user releases the mouse button
- `mouseover` event is fired when the mouse enters the content of an element.
- `mouseout` event is fired when the mouse leaves an element.

### Keyboard Events

- `keydown` event is fired while a user presses a key down.
- `keyup` event is fired while a user releases a key.
- `keypress` event is fired when a user presses a key down and releases it. 
- Keyboard events have unique properties assigned to their event objects like the `.key` property that stores the values of the key pressed by the user. 



------

## Event Phases

There are three different phases during the lifecycle of an event. They are:

- the **capturing** phase
- the **at target** phase
- and the **bubbling** phase

<!-- <img src="https://video.udacity-data.com/topher/2017/December/5a2f0488_ud117-phases-of-event-flow/ud117-phases-of-event-flow.svg" alt="ud117-phases-of-event-flow" style="zoom: 25%;" /> -->



There's actually a *third* argument to the `.addEventListener()` method; the *useCapture* argument.

By default, when `.addEventListener()` is called with only two arguments, the method defaults to using the bubbling phase.

The code below uses `.addEventListener()` with only two arguments, so it will invoke the listener during the bubbling phase:

```js
document.addEventListener('click', function () {
   console.log('The document was clicked');
});
```

However, in this code, `.addEventListener()` is called with *three arguments* with the third argument being `true` (meaning it *should invoke the listener earlier, during the capturing phase*!).

```js
document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);
```

[Event dispatch and DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) on W3C

- [capture phase](https://www.w3.org/TR/DOM-Level-3-Events/#capture-phase) on W3C

- [target phase](https://www.w3.org/TR/DOM-Level-3-Events/#target-phase) on W3C

- [bubble phase](https://www.w3.org/TR/DOM-Level-3-Events/#bubble-phase) on W3C
