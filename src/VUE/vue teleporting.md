# VUE Teleporting

Push content of a component to a totally different location (not in the #app)

E.g. Render directly in the body element (good mostly for semantic reasons)

- `<teleport>` instead of `<div>`
- -> use a  `to=css-selector` 
- stylings can get lost

```vue
<teleport to="body">
	<error-alert v-if="inputIsInvalid">
		<h2>Input is Invalid</h2>
		<p>please enter a few characters...</p>
		<button @click="confirmError">Ok</button>
	</error-alert>
</teleport>
```

`<teleport to="use-a-css-selector-here">`

##### Example

```vue
<teleport to=".modals" v-if="showModal">
    <Modal theme="" @closeModal="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Headline</h1>
      <p>text</p>
    </Modal>
</teleport>
```

index-html

```html
 <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <div class="modals"></div>
  </body>
```
