# Express Static Files

eg CSS, JS, Images,...

use `/public` folder

all the files are not accessable by the uses, but the /public folder is

use

```js
app.use(express.static(path.join(__dirname, 'public')));
```

-> the gives the public-folder read permission

to access it: this is the root-folder you are in

```html
<link rel="stylesheet" href="/css/main.css" />
```

you can use multiple public folders

