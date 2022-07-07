# Fake API

## JSON placeholder

[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

comments:

[https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)

[https://jsonplaceholder.typicode.com/comments?_page=1](https://jsonplaceholder.typicode.com/comments?_page=1)

------

## JSON-server local

Fake-API

[json-server](https://github.com/typicode/json-server)



Install JSON Server

```
npm install -g json-server
```

Create a `db.json` file with some data

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```
json-server --watch db.json
```

Now if you go to http://localhost:3000/posts/1, you'll get

```
{ "id": 1, "title": "json-server", "author": "typicode" }
```



```
  json-server --watch db.json
```

also runs on port 3000. To change the port of nuxt:

```
   PORT=3001 npm run dev
```

simulate slow server:

```
json-server --watch db.json --delay 2000
```



------

## JSON-Server online

[https://my-json-server.typicode.com/](https://my-json-server.typicode.com/)

1. Create a repository on GitHub  (`<your-username>/<your-repo>`)
2. Create a **`db.json`** file
3. Visit [https://my-json-server.typicode.com/**/**](https://my-json-server.typicode.com/typicode/demo) to access your server

> Example
>
> [https://my-json-server.typicode.com/shaefelinger/vuemastery_realworld_vue3](https://my-json-server.typicode.com/shaefelinger/vuemastery_realworld_vue3)
>
> bzw.
>
> [https://my-json-server.typicode.com/shaefelinger/vuemastery_realworld_vue3/events](https://my-json-server.typicode.com/shaefelinger/vuemastery_realworld_vue3/events)

------

## 

------

## 