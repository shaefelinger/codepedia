# Dates

```js
new Date()
```

## current date and timestamp

```js
const date = new Date()
```

- `.getDate()` - date
- `date.getHours()`
- `date.getTime()` time(ms) since 1.1.1970

```js
const date2= new Date("1980-02-02")
```

different formats

- you can calculate `date - date2`

- number of days: 

  - ```js
    (date - date2) / 1000 / 60 / 60 /24
    ```

## Links

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [https://momentjs.com/](https://momentjs.com/)