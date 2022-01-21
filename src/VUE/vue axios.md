# VUE Axios

## HTTP Requests

Backend - Firebase - RealtimeDB

always use `@submit.prevent` -> no reload of the page

default: the browsers sends a http-request to the same server, the page is served. usually not useful.

-> also, do frontent-validation

### `fetch()`

-> sends "behind the scenes"-HTTP-request

- first argument is the url. use the url provided by firebase and add: `dbname.json`

- second argument is a configuraion-object.
  `method: 'POST'` or `method: 'GET'`, or DELETE, PATCH, ...
  `header` -format
  `body` - the data

```js
fetch('https://the-url', {
	method: 'POST',
  headers: {
  	'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  	// ...
  })
})
```

------

### HTTP Verbs

There are **different "kinds"** of Http requests you could say - defined by the method (`POST`, `GET`, `DELETE`, ...) you attach to them (via the "**method**" you define on an outgoing request). The **server** may then react in which ever way it is configured. For example: It may store data in a database for an incoming POST request, it may fetch data for a GET request.

Typically, servers are built to work as a "**REST API**" - that means they have **clearly defined "endpoints"** (**URL + Http method** combinations) for which they do different things.

[https://academind.com/learn/node-js/building-a-restful-api-with/what-is-a-restful-api-/](https://academind.com/learn/node-js/building-a-restful-api-with/what-is-a-restful-api-/)

[https://academind.com/learn/web-dev/how-the-web-works/](https://academind.com/learn/web-dev/how-the-web-works/)

------

## Axios Instead Of "fetch()"

## Install Axios (vue ui)

[https://github.com/axios/axios](https://github.com/axios/axios)

```
npm install axios
```

### Why Axios?

- you have to **write less code**. 

- It automatically sets the `Content-Type` header for you, 

- GET, POST, PUT, and DELETE requests

- Add authentication to each request

- Set timeouts if requests take too long

- Configure defaults for every request

- Intercept requests to create middleware

- Handle errors and cancel requests properly

- Properly serialize and deserialize requests & responses

- it also automatically converts the body data to JSON

- And more…

  

- **BUT - as a downside - you have to add an extra package** -›  increases the size of the app



::: tip

`fetch()` and Axios return a `Promise`, hence we can use `then()`, `catch()` and `async`/ `await` there.

:::

 replace the `fetch()` code  with this Axios code:

Instead of:

```js
fetch('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: this.enteredName,
    rating: this.chosenRating,
  }),
});
```

you can write this code with Axios:

```js
import axios from 'axios'; 

...
axios.post('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
  name: this.enteredName,
  rating: this.chosenRating,
});
```



------

### Get-request

GET is default -> don't have to set it in the options. Also on body and header is needed

method to get data from firebase realtime database:

```js
 loadExperiences() {
      fetch(
        'https://vue-http-demo-maxudemy-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          this.results = results;
        });
    }
```

-> data is a js-object that has a nested object inside...

-> convert to array

------

### Error handling

`.catch` at the end of the then-chain handles the errors

catch shows technical errors.

--

responses with 400/500 are not a technical error -> `catch` is not picking it up (but axios would catch that errors too)

Handle Server side-errors:

```js
fetch('https://vue-http-demo-maxudemy-default-rtdb.europe-west1.firebasedatabase.app/surveys.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating
          })
        }
      )
        .then(response => {
          if (response.ok) {
            // ...
          } else {
            throw new Error('Could not save data');
          }
        })
        .catch(err => {
          console.log(err);
          this.error = err.message;
        });
```



------

## Create Service-File



> use created-hook to fetch data  
>
> ```js
> <script>
> 
> import axios from 'axios'
> 
> export default {
>    data() {
>     return {
>       events: null
>     }
>   },
>   created() {
>     axios.get('https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events')
>       .then(response => {
>         this.events = response.data
>       })
>       .catch(error => {
>         console.log(error)
>       })
>   }
> }
> </script>
> ```
>
> we could’ve used the alternative `[async` / `await`] syntax instead of `.then`.
>
> -> better not to import axios in the components (creates a new axios-instance every time)



-> better:

Folder /services -> file EventService.js

```js
import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/shaefelinger/vuemastery_realworld_vue3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
```

- import Axios


-   `apiClient` constant,  holds a singule Axios instance. 
   -  set up a `baseURL` and some other configurations for Axios to use as it communicates with our server.

-  we still have access to the Axios `get` method, and we’re passing in `'/events'` as the argument when making this call. This string will be added to our `baseURL`, so the request will be made to: `'https://my-json-server.typicode.com/.../events'`


Next up,  use this new **EventService** within the **EventList.vue** component,  importing the EventService, and running its `getEvents()` call.

```js
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
```

> or
>
> ```js
>   async created() {
>     try {
>       const response = await EventService.getEvents();
>       this.events = response.data;
>     } catch (err) {
>       console.log(err);
>     }
>   },
> ```

a practical example:

```vue
<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading events
    </p>
  </div>
</template>

<script>
import axios from 'axios'
import EventCard from '../components/EventCard'

export default {
  components: { EventCard },
  data () {
    return {
      isLoading: true,
      events: []
    }
  },
  created () {
    axios.get('//localhost:3000/dashboard').then(({ data }) => {
      this.events = data.events.events
      this.isLoading = false
    })
  }
}
</script>

```

------

