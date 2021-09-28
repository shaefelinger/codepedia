# Express Responses

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

`/views` -folder

use `res.sendFile()`