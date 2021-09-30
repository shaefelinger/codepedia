# Express Responses

There are a [number of other response methods](https://expressjs.com/en/guide/routing.html#response-methods) for ending the request/response cycle, eg., you could call `res.json()` to send a JSON response or `res.sendFile()` to send a file.



## Send

```js
res.send('Hello World');
```

use `res.send()`

- send sets the header to 'html' by default
- send ends the request.

> you could use 
>
> - `res.setHeader`
> - `res.write`
>
> but you don't have to…
>

------

## redirect

```
res.redirect('/');
```

------

## Send HTML-Pages

use `res.sendFile()`

This method needs an absolute file path. eg. `/views` -folder

```
absolutePath = __dirname + relativePath/file.ext
```

------

#### 