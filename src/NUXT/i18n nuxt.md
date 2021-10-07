# i18n - Nuxt

[https://i18n.nuxtjs.org/setup](https://i18n.nuxtjs.org/setup)

[https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/](https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/)

[https://i18n.nuxtjs.org/](https://i18n.nuxtjs.org/)

[https://i18n.nuxtjs.org/api](https://i18n.nuxtjs.org/api)

```
npm i @nuxtjs/i18n
```

create folder `config` and file `i18n`

config/i18n.js

```js
import en from '../i18n/en.json'
import de from '../i18n/de.json'

export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, de }
}
```

create folder `i18n` nd two files, `en.json` and `de.json`, which will contain all our translations.

```js
// locales/en.json
{
  "message": "Hello!"
}
```

```js
// locales/de.json
{
  "message": "Hallo!"
}
```

add to `nuxt.config.js`

```js
import i18n from './config/i18n'
 
buildModules: [
 /* other modules */
 [
  'nuxt-i18n',
  {
    vueI18nLoader: true,
    defaultLocale: 'fr',
     locales: [
      {
         code: 'en',
         name: 'English'
      },
      {
         code: 'fr',
         name: 'Français'
      }
    ],
    vueI18n: i18n
  }
 ]
]
```

