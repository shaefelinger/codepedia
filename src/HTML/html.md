

### Text Formatting

HTML brings some tags for structuring and formatting your text.

|           |                                                              |
| --------- | ------------------------------------------------------------ |
| `<p>`     | A paragraph. Adds space before and after the text. The most used HTML element - the default block-level element |
| `<br>`    | A line break. Single tag without closing tag.                |
| `<div>`   | A box. Unlike `<p>`, `<div>` doesn’t add space before or after the text. |
| `<h1>`    | A headline. You can choose from `<h1>` (largest) to `<h6>` (smallest). |
| `<b>`     | Makes the text bold. Inline tag: does not break the text.    |
| `<i>`     | Makes the text italic. Inline tag: does not break the text.  |
| `<u>`     | Underlines the text. Inline tag: does not break the text.    |
| `<small>` | Makes the text smaller. Inline tag: does not break the text. |

- [HTML Text Formatting - w3schools](https://www.w3schools.com/html/html_formatting.asp)
- [b - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
- [Simple HTML Guide - Cheatsheet](https://www.simplehtmlguide.com/cheatsheet.php#)

------

### HTML File-Paths

| Path                              |                                                              |
| --------------------------------- | ------------------------------------------------------------ |
| `<img src="picture.jpg">`         | The "picture.jpg" file is located in the same folder as the current page |
| `<img src="images/picture.jpg">`  | The "picture.jpg" file is located in the images folder in the current folder |
| `<img src="/images/picture.jpg">` | The "picture.jpg" file is located in the images folder at the root of the current web |
| `<img src="../picture.jpg">`      | The "picture.jpg" file is located in the folder one level up from the current folder |
| `./resources/css/index.css`       |                                                              |
| `./`                              | same folder                                                  |

It is best practice to use relative file paths (if possible).

- [File Paths - w3schools](https://www.w3schools.com/html/html_filepaths.asp) 
- [Files Webpage - MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)

------

### Entities

| Entity   | Result             |
| ---- | ---- |
| `&gt;` | >    |
| `&lt;` | <    |
| `&amp;` | &    |
| `&quot;` | "    |
| `&apos;` | '    |
| `&euro;` | €    |
| `&copy;` | ©    |
| `&nbsp;`  | non breaking Space   |

- [Entities - w3schools](https://www.w3schools.com/html/html_entities.asp)

------

### Images

```
<img src="path/to/picture.jpg" alt="funny cat picture" />
```

Most retina displays use double the amount of pixels, so it is a good rule of thumb to make your images double the size of how you want them to include in your HTML document. In the example of the 500x500 pixels profile picture, you need to prepare the image so that it is 1000x1000 pixels wide

|      |                                                              |
| ---- | ------------------------------------------------------------ |
| jpg  | compressed image                                             |
| png  | background kann sich bewegen/verändern? -> braucht mehr Speicher |
| gif  | bewegen sich                                                 |
| svg  | Scalable Vector Graphics: Vector                             |

- [Images - w3schools](https://www.w3schools.com/html/html_images.asp)
- [Image Element - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

------

### Lists

|                                         |                                           |
| --------------------------------------- | ----------------------------------------- |
| `<li>`                                  | List Item                                 |
| `<ul> </ul>`                            | Unordered List                            |
| `<ul style="list-style-type:*circle*">` | disk *(default)* / circle / square / none |
| `<ol type=? start=?> </ol>`             | Ordered List                              |
| type="1"                                | 1. 2. 3.                                  |
| type="A"                                | A. B. C.                                  |
| type="a"                                | a. b. c.                                  |
| type="I"                                | I. II. III.                               |
| type="i"                                | i. ii. iii.                               |

- [Lists - w3schools](https://www.w3schools.com/html/html_lists.asp)
- [Lists - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

------

### Tables

|                        |                                                    |
| ---------------------- | -------------------------------------------------- |
| `<table>`              | Tabelle                                            |
| `<tr>`                 | Table Row - Zeile                                  |
| `<td>`                 | Table Data - Zelle                                 |
| `<th>`                 | Table Header - Überschrift                         |
| `<th scope="row/col">` | Ausrichtung der Überschrift Zeile/Spalte           |
| `<tg colspan="?">`     | Inhalt über mehrere Zellen verbinden               |
| `<tg rowspan="?">`     | Inhalt über mehrere Zeilen verbinden               |
| `<thead> </thead>`     | Table Head - eigener Abschnitt für die Überschrift |
| `<tfoot> </tfoot>`     | Table Foot - eigener Abschnitt für die Fusszeile   |
| `<tbody> </tbody>`     | Table Body - eigener Abschnitt für den Body        |

- [Tables - w3schools](https://www.w3schools.com/html/html_tables.asp)
- [ Tables - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [A Complete Guide to the Table Element - CSS Tricks](https://css-tricks.com/complete-guide-table-element/)

------

### Forms

#### Form-Overview

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

#### Form: Input

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

#### Form: Radio Buttons

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

#### Form: Checkboxes

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

#### Form: Dropdown

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

#### Form: Textarea

```html
<textarea name="post" rows="10" cols="80">
    Your blog post
</textarea>
```

------

#### Form: Button

```html
...
<button type=”reset”>Reset fields</button>
```

The main difference to the `<input type=”submit”>` field is that you have more type options:

|                          |                                                              |
| ------------------------ | ------------------------------------------------------------ |
| `<button type=”submit”>` | Submits the form. Submit is the default option for a <button>, so you can leave that attribute off. |
| `<button type=”reset”>`  | Resets all form fields.                                      |
| `<button type=”button”>` | A click button for a different action that you define yourself (e.g. with JavaScript). |

- [A Complete Guide to Links and Buttons - CSS Tricks](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)

------

#### Form: Datalist

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

#### Form: Label

To associate a `<label>` and an `<input>`, the `<input>` needs an `id` attribute. We then assign the `for` attribute of the `label` element with the value of the `id` attribute of `<input>:`

```html
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input> type="text" name="food" id="meal">
</form>
```

------

#### Form: Email-Button

```html
<form action="mailto:joe@example.com?subject=feedback" method="POST">
  <button type="submit">SEND MESSAGE</button>
</form>
<a class="btn" href="mailto:name@email.com">CONTACT ME</a>
```

------

#### Form: Action

Every form should define a form action with the `action=”...”` attribute. The action attribute specifies where to send the form-data when a form is submitted.

```html
<form action="/sign-in.php">
```

------

#### Diverse Infos: Form & Input:

- `placeholder=` statt `value=` verschwindet dann beim Eintippen
- Bei **Client-Side-Verification** überprüft der Browser die eingegebenen Daten, bevor sie zum Server gesendet werden:
- `required`-Attribut, verlangt zwingend ein Eingabe.
- `min` und `max` begrenzen die mögliche Eingabe in ein Number-Feld
- `minlengh` und `maxlength` machen das gleiche für ein Textfeld
- Bei `method="POST"` erscheinen die eingegebenen Daten (im Gegensatz zu `method="GET"`) nicht in der Adresszeile der Browsers. Gut für Logins etc.
- Mit `pattern=` kann man festlegen, dass die Eingabe einem bestimmten [Pattern](https://html.com/attributes/input-pattern/) entsprechen soll. Sogenannter [regex.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

------

### SemanticHTML

Den Code strukturieren für bessere Lesbarkeit und SEO:

Z.B. `<header> <footer> <nav> <main> usw.`

- [Semantic Elements - w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Semantic HTML - codecademy](https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html/cheatsheet)
- [Semantic HTML - interneting is hard](https://www.internetingishard.com/html-and-css/semantic-html/)

------

### Audio-Video

`<audio>, <video> and <embed> (embed is self-closing):`

```html
<!-- Audio Tag -->
<audio src="koreanhiphop.mp3" controls autoplay></audio>

<!-- Video Tag -->
<video src="4kvideo.mp4">video not supported</video>

<!-- Embed Tag -->
<embed src="babyyoda.gif"/>
```

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes

------

### <br>Data-Attribute

The `data-*` attribute is used to store custom data private to the page or application.

https://www.w3schools.com/tags/att_data-.asp



------

# LINKS

### Referenz-Links

- [MDN HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [w3schools HTML Tutorial](https://www.w3schools.com/html/default.asp#)
- [devdocs](https://devdocs.io/html/)
- [Stanford HTML Cheatsheet](https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf)
- [HTML by Category - w3schools](https://www.w3schools.com/tags/ref_byfunc.asp)
- [HTML cheatsheet.com](https://htmlcheatsheet.com)
- [Simple HTML guide cheatsheet](https://www.simplehtmlguide.com/cheatsheet.php#)
- [Handout HTML Hamburg Coding School](files/Handout - HTML & CSS.pdf)

------

### Diverse Links

- [codepen.io](https://codepen.io)
- [HTTP Request](https://www.codecademy.com/articles/http-requests)
- [Debugging HTML - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Markup Validator - w3.org](https://validator.w3.org/)
- [HTML Coding Conventions - w3schools](https://www.w3schools.com/html/html5_syntax.asp)

