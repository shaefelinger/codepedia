# Vue Conditional Rendering

## `v-if`

```html
<p v-if="inStock">In Stock</p>
<p v-else>Out of Stock</p>
```

This element will render only if `inStock` is truthy.

::: tip

in the condition you can use Javascript, computed properties, methods that return a boolean-value,...

:::

## `v-else` /`v-else-if`

`v-else` has to be used on an element that comes directly after the element with `v-if`

chained:

```vue
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
<p v-else>Out of Stock</p>
```

---

## `v-show`

Is used for **toggling** an element’s **visibility** instead of adding and removing the element from the DOM  (like `v-if` does).

- The element is still present in the DOM, but it’s now hidden with an inline style of `display: none;` added to it


- This is a **more performant** option if something is toggling off and on the screen often.
