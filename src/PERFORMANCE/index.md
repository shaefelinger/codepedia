# Performance

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
- Article [Reflows & Repaints: CSS Performance Making Your JavaScript Slow?](