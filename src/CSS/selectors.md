# CSS Selectors

## Selectors & combining Selectors

| Selector                                                     | Example                  | Info                                                         | Learn CSS tutorial                                           |
|:------------------------------------------------------------ |:------------------------ | :------------------------------------------------------------ |:------------------------------------------------------------ |
| [Type selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) | `h1`                     | All `<h1>` - Tags                                            | [Type selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Type_selectors) |
|                                                              |                          |                                                              |                                                              |
| [Class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) | `.box`                   | - All Elements with `class="box"`                            | [Class selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Class_selectors) |
|                                                              | `ul.important`           | All `<ul>` Elements with `class="important"`                 |                                                              |
|                                                              | `#big.wide`              | Elements with `id="big"` and `class="wide"`                  |                                                              |
|                                                              | `li.big.elegant`         | All `<li>` Elements with `class="big"` and `class="elegant"` |                                                              |
|                                                              |                          |                                                              |                                                              |
| [ID selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) | `#unique`                | Elements with `id="unique"`                                  | [ID selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#ID_Selectors) |
|                                                              |                          |                                                              |                                                              |
| [Universal selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) | `*`                      | All Elements selects everything, but cascading is no longer working! - be careful | [Universal selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#The_universal_selector) |
|                                                              |                          |                                                              |                                                              |
| Comma Combinator                                             | `p, .fun`                | All `<p> `Elements **and** all Elements with `class="fun"`   |                                                              |
|                                                              | `a, p, div`              | All `<a>`, `<p> `and `<div>` Elements                        |                                                              |
|                                                              |                          |                                                              |                                                              |
| [Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) | `p strong`               | - All `<strong>` Elements **inside** any `<p>` -             | [Descendant combinator](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Descendant_Selector) |
|                                                              | `#fancy span`            | Any `<span>` inside Element with `id="fancy`                 |                                                              |
|                                                              | `.box p`                 | Any `<p>` inside Element with `class="box"` -                |                                                              |
|                                                              | `div *`                  | All elements inside any `<div>`                              |                                                              |
|                                                              | `ul.fancy *`             | Every element inside all `<ul class="fancy">` elements.      |                                                              |
|                                                              | `#list li:first-child a` | All `<a>` Elements inside `<li>` that are first-child from `#list` |                                                              |
|                                                              |                          | *The last element after the spaces is selected - doesn't have to be a direct child* |                                                              |
|                                                              |                          |                                                              |                                                              |
| [Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`                 | Every `<p>` Element that **directly follows** a `<h1>`       | [Adjacent sibling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Adjacent_sibling) |
|                                                              | `p + .intro`             | Every element with `class="intro"` that directly follows a `<p>` |                                                              |
|                                                              |                          |                                                              |                                                              |
|                                                              |                          |                                                              |                                                              |
| [General sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) | p ~ span                 | All `<span>` that **follow** a `<p>`                         | [General sibling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#General_sibling) |
|                                                              |                          |                                                              |                                                              |
| [Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) | div > span               | All `<span>` that are **direct children** of`<div>`          | [ Child combinator](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Child_combinator) |









## [Pseudo-Class Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
[Pseudo-classes Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class)

| Selector                | Example                                                      | Info                                                         |
|:----------------------- |:------------------------------------------------------------ | :------------------------------------------------------------ |
| :first-child            | `:first-child`                                               | All **first child** Elements.                                |
|                         | `p:first-child`                                              | All first child `<p>` elements                               |
|                         | `div p:first-child`                                          | all first child `<p>` elements that are in a `<div>`         |
| :only-child             | `span:only-child`                                            | `<span>` elements that are the **only child** of some other element. |
|                         | `ul li:only-child`                                           | The only `<li>` element that are in a `<ul>`.                |
| :last-child             | `span:last-child`                                            | All **last child** `<span>` Elements                         |
|                         | `ul li:last-child`                                           | last `<li>` elements inside of any `<ul>`                    |
| :nth-child(A)           | `:nth-child(8)`                                              | Every element that is the **8th child** of another element.  |
|                         | `div p:nth-child(2)`                                         | Second `<p>` in every `<div>`                                |
| :nth-last-child(A)      | `:nth-last-child(2)`                                         | All second-to-last child elements                            |
| :first-of-type          | `span:first-of-type`                                         | First `<span>` in any element.                               |
| :nth-of-type(A)         | `div:nth-of-type(2)`                                         | second instance of a `<div>`                                 |
|                         | `.example:nth-of-type(odd)`                                  | All odd instances of a the example class.                    |
| :nth-of-type(An+B)      | `span:nth-of-type(6n+2)`                                     | every 6th instance of a `<span>`, starting from (and including) the second instance. |
| :only-of-type           | `p span:only-of-type`                                        | `>span<` within any `>p<` if it is the only `>span<` in there. |
| :last-of-type           | `div:last-of-type`                                           | last `>span<` in every p                                     |
| :empty                  | `div:empty`                                                  | all empty `>div<` elements                                   |
| :not(X)                 | `:not(#fancy)`                                               | all elements that do not have `id="fancy"`                   |
|                         | `div:not(:first-child)`                                      | every `>div<` that is not a first child                      |
|                         | `:not(.big, .medium)`                                        | all elements that do not have `class="big"` or `class="medium"` |
| Other Pseudo-Classes... | `:first­-line``:first­-letter``:hover``:active``:focus``:first``:checked`... | [Pseudo-class selectors](https://developer.mozilla.org//en-US/docs/Web/CSS/Pseudo-classes) |






## [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

[Attribute Selector Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)

| Selector                                              | Example                                                      | Info                                                         |
|:----------------------------------------------------- |:------------------------------------------------------------ | :------------------------------------------------------------ |
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

------

## Selector Links

<!-- <img src="./assets/css selectors evans.jpeg" alt="css selectors evans" style="zoom: 50%;" /> -->

- [CSS Selector Reference - w3schools](https://www.w3schools.com/cssref/css_selectors.asp)
- [CSS Selector Tester - w3schools](https://www.w3schools.com/cssref/trysel.asp)
- [CSS Selectors - MDN Webdocs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [shay howe - Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)
- [CSS Dinner-Game - flukeout.github.io/](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

