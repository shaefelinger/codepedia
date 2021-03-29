


## [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

[Attribute Selector Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)

| Selector                                              | Example                                                      | Info                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [attribute]                                           | `a[href]`                                                | all `<a>` elements that have a `href="anything"` attribute   |
|                                                       | `[type]`                                                     | all elements that have a `type="anything"` attribute         |
|                                                       | `input[disabled]`                                            | all `>input<` elements with the disabled attribute           |
| [attribute="value"]                                   | `input[type="checkbox"]`                                     | All checkbox input elements                                  |
| *Attribute Starts With Selector* [attribute^="value"] | `.toy[category^="Swim"]`                                     | Elements with class toy and either `category="Swimwear` or `category="Swimming"` |
| *Attribute Ends With Selector* [attribute$="value"]   | `img[src$=".jpg"]`                                           | All .jpg images                                              |
| *Attribute Wildcard Selector* [attribute*="value"]    | `img[src*="/thumbnails/"]`                                   | All image elements that show images from the "thumbnails" folder |
|                                                       | `[class*="heading"]`                                         | All elements with "heading" in their class, like `class="main-heading"` and `class="sub-heading"` |
| Other Attribute Selectors...                          | [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | [Attribute selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) |




## [Pseudo-element selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

[Pseudo-Element Selector Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element)

| Example               |
| --------------------- |
| `p::first-line`   |
| `::first-letter`|
| `::after`       |
| `::before`      |
| `::placeholder...`    |

<img src="./assets/css%20selectors%20evans.jpeg" alt="css selectors evans" style="zoom: 50%;" />

- [CSS Selector Reference - w3schools](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Selector Tester - w3schools](https://www.w3schools.com/cssref/trysel.asp)
- [CSS Selectors - MDN Webdocs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [shay howe - Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)
- [CSS Dinner-Spiel - flukeout.github.io/](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

------