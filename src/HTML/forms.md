
# HTML-Forms
[[toc]]

## Form-Overview

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| `<form></form>` | Root element that defines the form.                          |
| `action=”...”`  | The program that is executed when the submit button is pressed. |
| `<input ...>`   | An input field.                                              |
| `type=”text”`   | Attribute for input, creates a text input field.             |
| `type=”submit”` | Attribute for input, creates a button.                       |
| `name=”...”`    | A name or id for an input field.                             |
| `value=”...”`   | The default value that is displayed in a field. In case of the submit button, it is the button label. |

- [ Tag - w3schools](https://www.w3schools.com/tags/tag_form.asp)
- [Form Elements - w3schools](https://www.w3schools.com/html/html_form_elements.asp)
- [ - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [> Forms - codecademy](https://www.codecademy.com/learn/learn-html/modules/learn-html-forms/cheatsheet)
- [HTML5-Rocks: Forms](https://www.html5rocks.com/en/tutorials/forms/html5forms/)

------

## Input

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">` (default value)
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`

```html
<form action="/action_page.php">
  <label for="firstname">First name:</label>
  <input type="text" id="fname" name="firstname" value="Max"><br>
  <label for="lastname">Last name:</label>
  <input type="text" id="lname" name="lastname" value="Mustermann"><br>
  <input type="submit" value="Submit">
</form>
```

- [ Tag](https://www.w3schools.com/tags/tag_input.asp)
- [](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [Input Attributes](https://www.w3schools.com/html/html_form_attributes.asp)

------



## Radio Buttons

```html
<form>
  <input type="radio" name="role" value="student" checked> Student<br>
  <input type="radio" name="role" value="teacher"> Teacher<br>
  <input type="radio" name="role" value="administrative"> Administrative
</form>
```

|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| `type=”radio”` | Attribute for input, creates a radio button (for selecting one of many choices). |
| `name=”...”`   | Name for the input field group. All radio buttons that belong to the same group should have the same name. |
| `value=”...”`  | An ID for the item. This value is sent to the program where the data of the form is sent to when the user presses the submit button. |

------

## Checkboxes

```html
<form>
  <input type="checkbox" name="course" value="html"> HTML & CSS<br>
  <input type="checkbox" name="course" value="l2c"> Learn to Code<br>
  <input type="checkbox" name="course" value="js4w"> JavaScript for Web<br>
</form>
```

|                   |                                                              |
| ----------------- | ------------------------------------------------------------ |
| `type=”checkbox”` | Attribute for input, creates a checkbox.                     |
| `name=”...”`      | Name for the input field group. All checkboxes that belong to the same group should have the same name. |
| `value=”...”`     | An ID for the item. This value is sent to the program where the data of the form is sent to when the user presses the submit button. |

------

## Dropdown

```html
<form>
  <select name="salutation">
    <option value="mr">Mr.
    <option value="mrs">Mrs.
  </select>
</form>
```

|                     |                                                              |
| ------------------- | ------------------------------------------------------------ |
| `<select></select>` | Creates the selection group for the drop-down menu.          |
| `<option></option>` | Defines one element in the drop-down.                        |
| `value=”...”`       | An ID for the item. This value is sent to the program where the data of the form is sent to when the user presses the submit button. |

------

## Textarea

```html
<textarea name="post" rows="10" cols="80">
    Your blog post
</textarea>
```


------

## Button

```html
...
<button type=”reset”>Reset fields</button>
```

The main difference to the `<input type=”submit”>` field is that you have more type options:

|                          |                                                              |
| ------------------------ | ------------------------------------------------------------ |
| `<button type=”submit”>` | Submits the form.  Default   |
| `<button type=”reset”>`  | Resets all form fields.                                      |
| `<button type=”button”>` | A click button for a different action that you define yourself (e.g. with JavaScript). |

- [A Complete Guide to Links and Buttons - CSS Tricks](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)

------




##  Datalist

```html
<label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser">

  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
```

------

## Label

To associate a `<label>` and an `<input>`, the `<input>` needs an `id` attribute. We then assign the `for` attribute of the `label` element with the value of the `id` attribute of `<input>:`

```html
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input> type="text" name="food" id="meal">
</form>
```

------

## Email-Button

```html
<form action="mailto:joe@example.com?subject=feedback" method="POST">
  <button type="submit">SEND MESSAGE</button>
</form>
<a class="btn" href="mailto:name@email.com">CONTACT ME</a>
```

------

## Action

Every form should define a form action with the `action=”...”` attribute. The action attribute specifies where to send the form-data when a form is submitted.

```html
<form action="/sign-in.php">
```

------

## Misc. Infos: Form & Input

- `placeholder=` statt `value=` verschwindet dann beim Eintippen
- Bei **Client-Side-Verification** überprüft der Browser die eingegebenen Daten, bevor sie zum Server gesendet werden:
- `required`-Attribut, verlangt zwingend ein Eingabe.
- `min` und `max` begrenzen die mögliche Eingabe in ein Number-Feld
- `minlengh` und `maxlength` machen das gleiche für ein Textfeld
- Bei `method="POST"` erscheinen die eingegebenen Daten (im Gegensatz zu `method="GET"`) nicht in der Adresszeile der Browsers. Gut für Logins etc.
- Mit `pattern=` kann man festlegen, dass die Eingabe einem bestimmten [Pattern](https://html.com/attributes/input-pattern/) entsprechen soll. Sogenannter [regex.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

