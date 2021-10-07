# File-based Routing

with Nuxt we simply place components in the pages directory and Nuxt generates our router.js for us.

If we want to inspect the router.js file that Nuxt is creating for us then look in the `.nuxt` directory 

**📜/.nuxt/router.js**

```
  ...
  routes: [{
    path: "/create",
    component: _cc2d1894,
    name: "create"
  }, {
    path: "/",
    component: _5e85d808,
    name: "index"
  }],
  ...
```

 to nest a route, we can simply put it inside a folder.

## Viewing a specific Event

URL will look something like the following: `/event/12345`, where `12345` represents the id of the event.

## Nuxt Dynamic Routes

In Nuxt you prefix the Vue component in your `pages` folder with an underscore ( `_` ) followed by the name of the parameter to create a dynamic route.

creates a dynamic segment: `path: "/event:id"`

access wirh  `this.$route.params.id`

**/pages/event/_id.vue**

```html
    <template>
      <div>
        <h1>Individual Event: {{ this.$route.params.id }}</h1>
      </div>
    </template>
```

Just like Vue, Nuxt gives you access to `$route` 

### SEO

```vue
<template>
  <div>
    <h1>Individual Event # {{ id }}</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know ablut event #' + this.id,
        },
      ],
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
```

for `http://locahost:3000/event`

create a new `/event/index.vue` component.



------

## Root Dynamic Routes

tocreate a root dynamic route like twitter `twitter.com/vuemastery`:



simply create a **Root Dynamic Route** by creating a `/pages/_username.vue` component. We’d then access the username parameter through: `{{ this.$route.params.username }}`.



**child routes under a dynamic route**

example: `twitter.com/vuemastery/following`.

In this case, the folder gets the underscore: 

<img src="./assets/childroutes.png" />

------

## Customizing the Error Page

nuxt default error code:

add to /layouts/error.vue

> treated as a page, not as a layout

Nuxt is also giving proper status codes! (vue doesn't do that...)

good for SEO

```vue
  <template>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
          <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
        </svg>
        <div class="title">
          {{ message }} 
        </div>
        <p v-if="statusCode === 404">
          <nuxt-link to="/">
            Return to homepage
          </nuxt-link>
        </p>
      </div>
    </template>
    <script>
    export default {
      name: 'NuxtError',
      props: {
        error: {  // <--- Send in the error
          type: Object,
          default: null
        }
      },
      head() {
        return {
          title: this.message // <--- Set the SEO title
        }
      },
      computed: {
        statusCode() {  // <--- Get the status code
          return (this.error && this.error.statusCode) || 500
        },
        message() {  // <--- Print the error
          return this.error.message
        }
      }
    }
    </script>
```

