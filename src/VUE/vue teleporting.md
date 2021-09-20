# VUE Teleporting

`<teleport to="use-a-css-selector-here">`

```vue
<teleport to="body">
	<error-alert v-if="inputIsInvalid">
		<h2>Input is Invalid</h2>
		<p>please enter a few characters...</p>
		<button @click="confirmError">Ok</button>
	</error-alert>
</teleport>
```

render directly in the body element (good mostly for semantic reasons)
