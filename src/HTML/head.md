
# Head

```html
<head>
  <title>Hamburg Coding School</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="last-modified" content='Mon, 06 Jan 2020 16:23:39 CET'>
  <meta name="description" content="Programmier-Kurse, die Spaß machen.">
  <meta property="og:title" content="Hamburg Coding School"/>
  <meta property="og:description" content="Programmier-Kurse, die Spaß machen."/>
  <meta property="og:image" content="https://hamburgcodingschool.com/class-201811.jpg"/>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
  <link rel="stylesheet" href="https://hamburgcodingschool.com/css/codingschool.css">
  <link rel="shortcut icon" href="/favicon.png">
  <style>
    h1 { color:red; }
    p { color:blue; }
  </style>
  <script>
    window.onload = function() {
    if (window.matchMedia("(max-width: 48em)").matches) {
      location.hash = "#content-start";
    }
    }
</script>
</head>
```

|            |                                                              |
| ---------- | ------------------------------------------------------------ |
| `<title>`  | Contains the title of the website = the name that is displayed in the browser tab. |
| `<meta>`   | Includes meta information that is used for e.g. displaying snippets in search results or link previews in social media. |
| `<link>`   | Includes CSS into the document, or loads the favicon (shortcut icon) |
| `<style>`  | Defines local CSS styles.                                    |
| `<script>` | Defines local JavaScript                                     |

- [ Tag - w3schools](https://www.w3schools.com/tags/tag_head.asp)
- [ head - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

------




## Metadata

The `<meta>` tags contain metadata: Data that is not displayed on the page, but is machine parsable. Meta elements typically contain information about:

- page description
- keywords
- author of the document
- last modified or
- thumbnail image

Metadata is mostly used by search engines or by social media to display snippets with title, description and a thumbnail image.

- [ Tag - w3schools](https://www.w3schools.com/tags/tag_meta.asp)
- (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

------

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
```

- [The Viewport - w3schools](https://www.w3schools.com/css/css_rwd_viewport.asp)
- [Viewport - MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)

------

## Link

```html
<head>
  <link rel="stylesheet" href="./css/styles.css" type="text/css">
</head>
```

- [> Tag - w3schools](https://www.w3schools.com/tags/tag_link.asp)
- [link - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

------

## FavIcon

Fav Icon dem Titel hinzufügen:

```html
<link rel="icon" href="images/icon.png" type="image/png">
```

- [Favicon - w3c](https://www.w3.org/2005/10/howto-favicon)

------