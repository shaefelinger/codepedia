# Styling active Links

active links have the class: `router-link-active`

```css
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
```

also `router-link-exact-active`

-> only to the navitem that is **exactly** the path

Theese classes can be changed:

```js
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'router-link-active', // default
  ....
```
