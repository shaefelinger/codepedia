# Programmatic navigation

Navigate from inside js-code, eg. after some code has run.

use `this.$router`

methods:

- `push()` -> add new route to the browser history
- `back()` / `forward()`
- ...

```js
this.$router.push({ name: 'Profile', params: { char_id } });
```

---
