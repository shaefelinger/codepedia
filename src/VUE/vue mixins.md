# Vue Mixins

reuse code across components

## Mixins (Options API)

create a file. eg `/mixins/alert.js`, then:

```vue
<script>
import alertMixin from '@/mixins/alert.js';

export default {
  mixins: [alertMixin],
};
</script>
```

-› share reused logic



the mixin-options are merged with the options-api. if there is a clash, the components-option overwrite the mixin

if the mixin has a lifecycle-hook, both hooks run, the component last



## Global Mixins

(for every component)

not that usefull, eg for a logger

-> define in main.js

```js
import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from '@/mixins/logger.js'

const app = createApp(App)

app.mixin(loggerMixin)

app.mount('#app');
```



## Disadvantages of mixins

in bigger app/teams, it can get hard to understand the code

the options-api can be cumbersome…