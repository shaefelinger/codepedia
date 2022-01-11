# HTML-Basics

[[toc]]

---

## HTML Syntax

<img src="./assets/HTML Syntax2.png" alt="HTML Syntax2.png" style="zoom:50%;" />

---

## Head

```html
<head>
  <title>Hamburg Coding School</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="last-modified" content="Mon, 06 Jan 2020 16:23:39 CET" />
  <meta name="description" content="Programmier-Kurse, die Spaß machen." />
  <meta property="og:title" content="Hamburg Coding School" />
  <meta
    property="og:description"
    content="Programmier-Kurse, die Spaß machen."
  />
  <meta
    property="og:image"
    content="https://hamburgcodingschool.com/class-201811.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1"
  />
  <link
    rel="stylesheet"
    href="https://hamburgcodingschool.com/css/codingschool.css"
  />
  <link rel="shortcut icon" href="/favicon.png" />
  <style>
    h1 {
      color: red;
    }
    p {
      color: blue;
    }
  </style>
  <script>
    window.onload = function() {
      if (window.matchMedia('(max-width: 48em)').matches) {
        location.hash = '#content-start';
      }
    };
  </script>
</head>
```

|            |                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| `<title>`  | Contains the title of the website = the name that is displayed in the browser tab.                                      |
| `<meta>`   | Includes meta information that is used for e.g. displaying snippets in search results or link previews in social media. |
| `<link>`   | Includes CSS into the document, or loads the favicon (shortcut icon)                                                    |
| `<style>`  | Defines local CSS styles.                                                                                               |
| `<script>` | Defines local JavaScript                                                                                                |

- [ Tag - w3schools](https://www.w3schools.com/tags/tag_head.asp)
- [ head - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

---

## Metadata

The `<meta>` tags contain metadata: Data that is not displayed on the page, but is machine parsable. Meta elements typically contain information about:

- page description
- keywords
- author of the document
- last modified or
- thumbnail image

Metadata is mostly used by search engines or by social media to display snippets with title, description and a thumbnail image.

- [ Tag - w3schools](https://www.w3schools.com/tags/tag_meta.asp)
- [metadata MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

---

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- [The Viewport - w3schools](https://www.w3schools.com/css/css_rwd_viewport.asp)
- [Viewport - MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

---

## Link

```html
<head>
  <link rel="stylesheet" href="./css/styles.css" type="text/css" />
</head>
```

- [> Tag - w3schools](https://www.w3schools.com/tags/tag_link.asp)
- [link - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

---

## FavIcon

Fav Icon dem Titel hinzufügen:

```html
<link rel="icon" href="images/icon.png" type="image/png" />
```

- [Favicon - w3c](https://www.w3.org/2005/10/howto-favicon)

---

## Anchor Links

```html
<a href="https://hamburgcodinschool.com">Where i learned HTML</a>
```

There are 3 types of destinations you can define:

- anchor targets, to navigate within the same page
- relative URLs, usually to navigate within the same website
- absolute URLs, usually to navigate to another website

You can also use additional attributes besides a and href:

- specify the relationship between the current and linked document with the `rel` attribute
- specify where to open the linked document with the `target` attribute

- [a-Tag - w3schools](https://www.w3schools.com/tags/tag_a.asp)
- [a - MDN](https://developer.mozilla.org/de/docs/Web/HTML/Element/a)

---

## Download-Link

```html
<a href="/assets/file.pdf" download>Download PDF... </a>
```

---

## Text Formatting Tags

HTML brings some tags for structuring and formatting your text.

| Tag       |                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `<p>`     | A paragraph. Adds space before and after the text. The most used HTML element - the default block-level element |
| `<br>`    | A line break. Single tag without closing tag.                                                                   |
| `<div>`   | A box. Unlike `<p>`, `<div>` doesn’t add space before or after the text.                                        |
| `<h1>`    | A headline. You can choose from `<h1>` (largest) to `<h6>` (smallest).                                          |
| `<b>`     | Makes the text bold. Inline tag: does not break the text.                                                       |
| `<i>`     | Makes the text italic. Inline tag: does not break the text.                                                     |
| `<u>`     | Underlines the text. Inline tag: does not break the text.                                                       |
| `<small>` | Makes the text smaller. Inline tag: does not break the text.                                                    |

- [HTML Text Formatting - w3schools](https://www.w3schools.com/html/html_formatting.asp)
- [b - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
- [Simple HTML Guide - Cheatsheet](https://www.simplehtmlguide.com/cheatsheet.php#)

---

## HTML File-Paths

| Path                              |                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| `<img src="picture.jpg">`         | The "picture.jpg" file is located in the same folder as the current page              |
| `<img src="images/picture.jpg">`  | The "picture.jpg" file is located in the images folder in the current folder          |
| `<img src="/images/picture.jpg">` | The "picture.jpg" file is located in the images folder at the root of the current web |
| `<img src="../picture.jpg">`      | The "picture.jpg" file is located in the folder one level up from the current folder  |
| `./resources/css/index.css`       |                                                                                       |
| `./`                              | same folder                                                                           |

It is best practice to use relative file paths (if possible).

- [File Paths - w3schools](https://www.w3schools.com/html/html_filepaths.asp)
- [Files Webpage - MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)

---

## Entities

| Entity   | Result             |
| -------- | ------------------ |
| `&gt;`   | >                  |
| `&lt;`   | <                  |
| `&amp;`  | &                  |
| `&quot;` | "                  |
| `&apos;` | '                  |
| `&euro;` | €                  |
| `&copy;` | ©                  |
| `&nbsp;` | non breaking Space |

- [Entities - w3schools](https://www.w3schools.com/html/html_entities.asp)

---

## Images

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

---

## Lists

|                                         |                                           |
| --------------------------------------- | ----------------------------------------- |
| `<li>`                                  | List Item                                 |
| `<ul> </ul>`                            | Unordered List                            |
| `<ul style="list-style-type:*circle*">` | disk _(default)_ / circle / square / none |
| `<ol type=? start=?> </ol>`             | Ordered List                              |
| type="1"                                | 1. 2. 3.                                  |
| type="A"                                | A. B. C.                                  |
| type="a"                                | a. b. c.                                  |
| type="I"                                | I. II. III.                               |
| type="i"                                | i. ii. iii.                               |

- [Lists - w3schools](https://www.w3schools.com/html/html_lists.asp)
- [Lists - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

---

## Tables

| Tag                    | Description                                        |
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

---

## SemanticHTML

Structure the Code for better Readability and SEO:

eg. `<header> <footer> <nav> <main> etc.`

- [Semantic Elements - w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Semantic HTML - codecademy](https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html/cheatsheet)
- [Semantic HTML - interneting is hard](https://www.internetingishard.com/html-and-css/semantic-html/)

Here’s what a typical webpage could include:

- `<header>` as the first element of the page, that can include the logo and the tagline.
- `<nav>` as a list of links that go to the different pages of the website.
- `<h1>` as the title of the page.
- `<article>` as the main content of the page, like a blog post.
- `<footer>` as the last element of the page, located at the bottom.

<img src="./assets/HTML sectioning.png" alt="html-sectioning-elements" style="zoom:33%;" />

---

## Audio-Video

`<audio>, <video> and <embed>` (embed is self-closing):

```html
<!-- Audio Tag -->
<audio src="koreanhiphop.mp3" controls autoplay></audio>

<!-- Video Tag -->
<video src="4kvideo.mp4">video not supported</video>

<!-- Embed Tag -->
<embed src="babyyoda.gif" />
```

- [mdn - audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes)

---

## Data-Attribute

The `data-*` attribute is used to store custom data private to the page or application.

<!-- (https://www.w3schools.com/tags/att_data-.asp) -->

[w3-schools - data attribute](https://www.w3schools.com/tags/att_data-.asp)

---

## Meter

[MDN Meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)

```html
<label for="fuel">Fuel level:</label>

<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  at 50/100
</meter>
```

---

## Progress

```html
<label for="file">File progress:</label>

<progress id="file" max="100" value="70"> 70% </progress>
```

[MDN progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)

