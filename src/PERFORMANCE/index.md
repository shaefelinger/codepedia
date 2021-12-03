# Performance

very important - Site should load in 2s max

### 3 main places for improvement

- frontend
- network latency
- backend

------

## Minimize Text

uglify js -> minify

webpack - build process

## Optimize Images

- choose the right file type
- reduze size
- compress as much as possible

### Image-Size

Resize to the size it will be displayed

- mac-preview: tools-adjust size

Use different sized imeges for different screen-sizes 

##### media queries - check screen size

- [media-queries-for-standard-devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [https://gist.github.com/bartholomej/8415655]https://gist.github.com/bartholomej/8415655

### File format

- **jpg:** fotos, images, with **colors**. no transparency
- **gif**: less colors, small **animations**
- **png**: limit colour, smaller. for logos etc. have **transparency**
- **svg**: vector. Simple icons, logos etc.

new file formats: jpeg2000 etc. but might have compatibility issues

### Reduce:

- [Reduce PNG: https://tinypng.com/](https://tinypng.com/)
- [Reduce JPEG: http://jpeg-optimizer.com/](http://jpeg-optimizer.com/)

Lower JPEG IMG-Quality (30-60%)

### Tools

#### Imageoptim

[https://imageoptim.com/mac](https://imageoptim.com/mac)

or commandline:

```
brew install imageoptim
```

#### imagemagick

-> jpg kleiner

```
brew install imagemagick
```

[https://legacy.imagemagick.org/Usage/resize/](https://legacy.imagemagick.org/Usage/resize/)

```
convert bla.jpg -scale 1000 bla-klein.jpg
```

-> you can also make the img bigger

### CDNs

imgix [https://imgix.com/](https://imgix.com/)

### Remove metadata 

[https://www.verexif.com/en/](https://www.verexif.com/en/)

------

## Testing Code Performance 

`performance.now()` returns a timestamp that is measured in milliseconds, so it's extremely accurate

it starts measuring from the time the page loaded.

[performance.now() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)	

These are the steps:

1. use `performance.now()` to get the initial start time for the code
2. run the code you want to test
3. execute `performance.now()` to get another time measurement
4. subtract the initial time from the final time

[Performance Interface on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

------

### Further Research

- [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884) course by Udacity
- [Minimizing browser reflow](https://developers.google.com/speed/articles/reflow) from PageSpeed Tools Guides
- [Avoid Large, Complex Layouts and Layout Thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing) from Google's Web Fundamentals Guides
- [Performance Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering) from Google's Web Fundamentals Guides
- Article [Reflows & Repaints: CSS Performance Making Your JavaScript Slow?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)

------

