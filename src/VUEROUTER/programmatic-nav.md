# Programmatic navigation

Navigate from inside js-code, eg. after some code has run.

-> access history. go back & forth / push route to the history

###  `this.$router`  

to access the router(history etc). 

methods:

- `push()` -> add new route to the browser history
- `back()` / `forward()`
- `replace()` -› you can't go back...
- ...

```js
this.$router.push({ name: 'Profile', params: { char_id } });
```

```js
this.$router.replace('/coaches');
```



```js
export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'Home' })
      },
      back() {
        this.$router.go(-1)
      },
      forward() {
        this.$router.go(1)
      },
    },
  };
```



---

### `$route` 

for info about the current route

