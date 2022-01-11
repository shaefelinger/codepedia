
# Responsiveness

A website is responsive if it is suitable for all screen sizes, even for small mobile screens. For making a website responsive, we can use media queries. Media queries are styles wrapped in a @media block that defines for which screen size this style applies.

Example: [Non-Responsive](https://content.codecademy.com/courses/freelance-1/unit-5/globe-book-store/index.html) vs [responsive](https://content.codecademy.com/courses/freelance-1/unit-5/globe-book-store/index-responsive.html)

## Media Queries

CSS can detect the size of the current screen and apply different CSS styles

- The conditions that must be met to render the CSS within a media query are called **Media Features**

- Media features can detect many aspects of a user’s browser, including the screen’s width, height, resolution, orientation, and more.

- ```css
  @media only screen and (max-width: 480px) {
    body {
      /* a rule for screens smaller than 480  pixels */
    }
  }
  ```

  The **`only`** keyword is added to indicate that this rule only applies to one media type (screen) and not eg. print

- To target by resolution, we can use the `min-resolution` and `max-resolution` media features. in [dots-per-inch](https://en.wikipedia.org/wiki/Dots_per_inch) (dpi) or dots-per-centimeter (dpc)

  ```css
  @media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
  }
  ```

- By using multiple widths and heights combined by `and`, a range can be set for a media query.

  ```css
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    /* ruleset for 320px - 480px */
  }
  ```

  The `and` operator can be used to chain as many media features as necessary.

  ```css
  @media only screen and (max-width: 480px) and (min-resolution: 300dpi) {
    /* CSS ruleset */
  }
  ```

- If only one of multiple media features in a media query must be met, media features can be separated in a comma separated list.

  ```css
  @media only screen and (min-width: 480px), (orientation: landscape) {
    /* CSS ruleset */
  }
  ```

------

## Common device Sizes

<img src="./assets/screen-sizes3.png" alt="screen sizes"  />



The style without the media query is the smallest and the default style. The style inside the media query is the one for the larger screens and will overwrite the default style if the screen where the website is displayed is larger than specified.

- [Simulate screen sizes in chrome](https://developers.google.com/web/tools/chrome-devtools/device-mode)
- [Media Queries - w3schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [Using media queries - MDN](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries)
- [guidelines for responsive web design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)
