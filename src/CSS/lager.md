

### [Pseudo-Class Selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-classes)
[Pseudo-classes Tutorial](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class)

| Selector                | Example                                                      | Info                                                         |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| :first-child            | `:first-child`<br> `p:first-child`<br/> `div p:first-child`  | All **first child** Elements.<br/>All first child `<p>` elements <br/>all first child `<p>` elements that are in a `<div>` |
| :only-child             | `span:only-child` <br/>`ul li:only-child`                    | `<span>` elements that are the **only child** of some other element. <br/>The only `<li>` element that are in a <ul>. |
| :last-child             | `span:last-child` <br/>`ul li:last-child`                    | All **last child** `<span>` Elements <br/>last `<li>` elements inside of any `<ul>` |
| :nth-child(A)           | `:nth-child(8)`<br/> `div p:nth-child(2)`                    | Every element that is the **8th child** of another element.<br/> Second `<p>` in every `<div>` |
| :nth-last-child(A)      | `:nth-last-child(2)`                                         | All second-to-last child elements                            |
| :first-of-type          | `span:first-of-type`                                         | First `<span>` in any element.                               |
| :nth-of-type(A)         | `div:nth-of-type(2)`<br/> `.example:nth-of-type(odd)`        | second instance of a `<div>` <br/>All odd instances of a the example class. |
| :nth-of-type(An+B)      | `span:nth-of-type(6n+2)`                                     | every 6th instance of a `<span>`, starting from (and including) the second instance. |
| :only-of-type           | `p span:only-of-type`                                        | `>span<` within any `>p<` if it is the only `>span<` in there. |
| :last-of-type           | `div:last-of-type`                                           | last `>span<` in every p                                     |
| :empty                  | `div:empty`                                                  | all empty `>div<` elements                                   |
| :not(X)                 | `:not(#fancy)`<br/> `div:not(:first-child)`<br/> `:not(.big, .medium)` | all elements that do not have `id="fancy"` <br/>every `>div<` that is not a first child  <br/>all elements that do not have `class="big"` or `class="medium"` |
| Other Pseudo-Classes... | `:first­-line`<br/>`:first­-letter`<br/>`:hover`<br/>`:active`<br/>`:focus`<br/>`:first`<br/>`:checked`... | [Pseudo-class selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-classes) |





### [Attribute selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Attribute_selectors)

[Attribute Selector Tutorial](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)

| Selector                                              | Example                                                      | Info                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [attribute]                                           | `a[href]`<br> `[type]` <br/>`input[disabled]`                | all `<a>` elements that have a `href="anything"` attribute <br/>all elements that have a `type="anything"` attribute <br/>selects all `>input<` elements with the disabled attribute |
| [attribute="value"]                                   | `input[type="checkbox"]`                                     | All checkbox input elements                                  |
| *Attribute Starts With Selector* [attribute^="value"] | `.toy[category^="Swim"]`                                     | Elements with class toy and either `category="Swimwear` or `category="Swimming"` |
| *Attribute Ends With Selector* [attribute$="value"]   | `img[src$=".jpg"]`                                           | All .jpg images                                              |
| *Attribute Wildcard Selector* [attribute*="value"]    | `img[src*="/thumbnails/"]` <br/>`[class*="heading"]`         | All image elements that show images from the "thumbnails" folder<br/><br/> All elements with "heading" in their class, like `class="main-heading"` and `class="sub-heading"` |
| Other Attribute Selectors...                          | [Attribute selector](https://developer.mozilla.org//en-US/docs/Web/CSS/Attribute_selectors) | [Attribute selectors](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) |




### [Pseudo-element selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-elements)

[Pseudo-Element Selector Tutorial](https://developer.mozilla.org//en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element)

| Example                                                      |
| ------------------------------------------------------------ |
| `p::first-line`<br>`::first-letter`<br>`::after`<br>`::before`<br>`::placeholder...` |

<img src="./assets/css%20selectors%20evans.jpeg" alt="css selectors evans" style="zoom: 50%;" />

- [CSS Selector Reference - w3schools](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Selector Tester - w3schools](https://www.w3schools.com/cssref/trysel.asp)
- [CSS Selectors - MDN Webdocs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [shay howe - Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)
- [CSS Dinner-Spiel - flukeout.github.io/](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

------