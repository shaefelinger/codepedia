# Nuxt Axios Module

If you didn’t install it initially, then run the following command to install it in your project:

```
npm install @nuxtjs/axios
```

After that, open your `nuxt.config.js` file add the following lines:

*nuxt.config.js*

```javascript
    module.exports = {
      modules: [
        '@nuxtjs/axios',
      ]
    }
```

Notice we’re not installing Axios itself, but rather the Nuxt Axios Module. additional features

- Integrated with Nuxt.js Progressbar while making requests
- Integrated with Proxy Module
- Auto retry requests with axios-retry

[https://github.com/nuxt-community/axios-module](https://github.com/nuxt-community/axios-module)

### Where to fetch data?

we’re not going to use the `created()` life-cycle hook. Nuxt gives our components in the pages directory extra hooks, including:

`asyncData()`

`asyncData` is called every time before loading a **page** component, meaning a component located inside the `pages` directory. It will be called server-side once (on the first request to the Nuxt app) and client-side when navigating to further routes. This method receives [the context](https://nuxtjs.org/api/context) as the first argument, can be used it to fetch some data (via API) and then Nuxt will merge the return value with the component data.

The context argument gives you access to various properties like `app`, `$axios`, `params`, `route`, `error`, and more. 

We can use Promises or Asnc/Await

```js
export default {
  asycData(context) {
    return context.$axios
      .get('http://localhost:3000/events')
      .then((response) => {
        return {
          events: response.data, // this will be merged with component data
        }
      })
  },
}
```



to simplify, you can us ES6 destructuing:

```js
 <script>
    export default {
      ...
      asyncData({ $axios }) {
        return $axios.get('http://localhost:3000/events').then(response => {
          return {
            events: response.data
          }
        })
      }
    }
    </script>
```

with error-handling:

```js
 asyncData({ $axios, error }) {
        return $axios.get('http://localhost:3000/events').then(response => {
          return {
            events: response.data
          }
        }).catch(e => {
          error({ statusCode: 503, message: 'Unable to fetch events at this time, please try again' })
        })
      },
```

------

## Progress Bar

in nuxt.config.js

```js
/*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982' },
```

