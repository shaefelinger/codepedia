# Universal Mode

## Problem: Single Page Apps can load slow

Initial load is slow - after load it is fast

universal mode increases the speed of the initial page load

universal mode: the server renders the initial page as html (fast), and then vue is loaded afterwards -> Hydration

code-splitting: 

After initial load + hydration it behaves like a normal SPA

 

This can be slower than you might want, especially on slow internet connections. Why? A browser needs to do a lot:

- Download the index.html
- Download the Vue application JavaScript
- Initialize the Vue app
- Initialize Vue Router and route to proper components
- Do any additional API calls to fetch data to render
- Render templates to the page

Once loaded and running Single Page Applications like this are pretty fast, however that initial load can be slow.

Universal mode helps increase the speed of initial page loading while smart prefetching increases the speed of pages that are code-split.

------

## Smart Prefetching

(nuxt 2.4)

js gets loaded, when nuxt-links is visible in the viewpage

increases speed of pages that are code-split

