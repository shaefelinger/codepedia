# Static Files - Express

eg CSS, JS, Images,...

- using the middleware `express.static(path)` (where `path` is the absolute path of the folder)

- eg. use `/public` folder


- all the files are not accessable by the uses, but the /public folder is


use

```js
app.use(express.static(path.join(__dirname, 'public')));
```

-> the gives the public-folder read permission

to access it: this is the root-folder you are in

```html
<link rel="stylesheet" href="/css/main.css" />
```

- you can use multiple public folders

https://discuss.codecademy.com/t/what-does-static-public-do/401137


------

### [Serving static files](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#serving_static_files)

You can use the [express.static](http://expressjs.com/en/4x/api.html#express.static) middleware to serve static files, including your images, CSS and JavaScript (`static()` is the only middleware function that is actually **part** of *Express*).



E.g. to serve images, CSS files, and JavaScript files from a directory named '**public'** at the same level as where you call node:

```js
app.use(express.static('public'));	
```

Any files in the public directory are served by adding their filename (*relative* to the base "public" directory) to the base URL. So for example:

```
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

You can call `static()` multiple times to serve multiple directories.

 If a file cannot be found by one middleware function then it will be passed on to the subsequent middleware (the order that middleware is called is based on your declaration order).

```
app.use(express.static('public'));
app.use(express.static('media'));
```

You can also create a virtual prefix for your static URLs,

```js
app.use('/media', express.static('public'));
```

Now, you can load the files that are in the `public` directory from the `/media` path prefix.

```
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

**Note**: See also [Serving static files in Express](https://expressjs.com/en/starter/static-files.html).

------

### 
