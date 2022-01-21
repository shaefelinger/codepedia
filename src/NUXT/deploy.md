# Deploy - Nuxt

## Universal Mode Deployment

use Github

```
http://my-json-server.typicode.com/Code-Pop/real-world-nuxt/events
```

### Building our Production App

```
$ npm run build
```

builds the app

```
npm run start
```

This runs a node server in production from our `/.nuxt/dist` directory using the files it generated there.



Nuxt can be deployed on any server that can run Node. Our server needs to be able to run:

- npm install
- npm run build
- npm run start

------

#### Heroku

**1. Install Heroku CLI & Create App**

```
heroku create
```

Heroku gave us back two things. First is the URL where our application will be deployed (when we deploy it), and the second is the git repo we need to push our code into which will trigger Heroku to deploy it.

**2. Set node server configuration**

We need to tell Heroku to install the `devDependencies` of the project (to be able to launch `npm run build`) so we’ll run this from the command line:

```
    $ heroku config:set NPM_CONFIG_PRODUCTION=false
```

Also, we want our application to listen on the host `0.0.0.0` and run node in production mode:

```
    $ heroku config:set HOST=0.0.0.0
    $ heroku config:set NODE_ENV=production
```

we want our application to listen on the host `0.0.0.0` and run node in production mode:

```
    $ heroku config:set HOST=0.0.0.0
    $ heroku config:set NODE_ENV=production
```

**3. Tell Heroku to run `npm run build`**

add script to package.json

```
  "scripts": {
        "dev": "nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "nuxt generate",
        "heroku-postbuild": "npm run build" // <-----
    }
```

**4. Add Procfile**

a file literally named `Procfile` with no extension

 **/Procfile**

```
web: npm run start
```

This will tell Heroku to start your application and to direct external HTTP traffic to it.



**5. Push git repo to Heroku to deploy**

```
git push heroku master
```



not working -> try it with CapRover

------



### Customizing your app build with `nuxt.config.js`

Nuxt and webpack give you lots of ways to customize and tweak the way your application is deployed. Inside the `nuxt.config.js` file you’ll find two configuration options you might want to learn about.

There is the `build` property which lets you customize the webpack configuration for how your application is built. You can tweak things like webpack loaders & plugins, minify, filenames, and directory output. There’s also the `server` property that lets you define the server connection variables for your application, like port, https, socket, and using the timing API.

To learn more about the [build](https://nuxtjs.org/api/configuration-build/) and [server](https://nuxtjs.org/api/configuration-server#the-server-property) inside the Nuxt documentation.

------

## Static Site Deployment

##### Universal Deployment

- HTML is generated on every request

##### Static Deployment

- HTML is generated once and deplyed to server

### What Universal Mode is Great For

When the data on our webpages is changing often, universal mode works great since our pages are pre-rendered on the server every time a request comes in.

When the data doesn’t change as often, Universal Mode can be overkill when we’re pulling from the API and rendering our pages on every request.

------

```
npm update
```

------

add `target: 'static',` to nuxt.config



```
$ npm run generate
```

creates /dist directory

### deploy-netlify

build-command

```
npm run generate
```

publish directory: `dist`

you can specify a different branch, eg "production" -› every commit gets deployed

# 