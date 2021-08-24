# VUE Slots

To use a component as a wrapper (eg a Card) around content. 

Allows to receive HTML-Content (with Vue-Features) from outside of the component.

(think: Props=data, slots=html-code)

The Paredn provides the HTML-Code, that is inside of the slot

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
```

```vue
 <section>
    <BaseCard>
      <header>
        <h3>{{ fullName }}</h3>
      </header>
      <p>{{ infoText }}</p>
    </BaseCard>
  </section>
```

could be registered globally

### Named Slots

if you use more than one slot in your component, you can add names to the slot:

> you don't have to name all slots, one unnamed slot is ok

-> wrap in `<template >` and add `v-slot:`-directive

child:

```vue
<template>
  <div>
    <header>
      <slot name="header"></slot>  
    </header>
    <slot></slot>
  </div>
</template>
```

parent:

```vue
<base-card>
	<template v-slot:header>
		<h3>{{ fullName }}</h3>
	</template>
	<p>{{ infoText }}</p>
</base-card>
```

content, that is not in the `<template>` will automatically go to the (unnamed) default-slot.

to make it clear, you can also use `v-slot:default`: (reserved name)

```vue
<base-card>
	<template v-slot:header>
		<h2>Available Badges</h2>
	</template>
	<template v-slot:default>
		<ul>
			<li>
				<base-badge type="admin" caption="ADMIN"></base-badge>
			</li>
			<li>
				<base-badge type="author" caption="AUTHOR"></base-badge>
			</li>
		</ul>
	</template>
</base-card>
```

#### Styling Slots

scope

the styling and the data ist not passed to the slot-component, still only available inside of the parent-component (the content is evaluated and stylen before it is sent to the slot-component)



#### slot default-content

you can provide default contetn, that is used, if no content is sent to that slot

```vue
<header>
	<slot name="header">
		<h2>Default Content</h2>
	</slot>
</header>
```

#### check, if slot gets data

`this.$slots` holds info about the slot data.this component receives 

`this.$slots.default` accesses the default slot



-> you can check if slot receives data and only render it if it has data:

```vue
<header v-if="$slots.header">
	<slot name="header"> </slot>
</header>
```

#### v-slot shorthand #

`<template #header>` is equal to:

`<template v-slot:header>`



### Scoped Slots

let you pass data from inside the component where you define the slot to the component, where you define the markup



```vue
<li v-for="goal in goals" :key="goal">
 <slot :item="goal" another-prop="some String"></slot>
</li>
```

 the `:item` is available in the component where you pass data for the slot 

```html
   <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
  			<!-- <p>{{ slotProps['another-prop'] }}</p> -->
      </template>
    </CourseGoals>
```

"slotProps" is an Object, where all the props are merged in

 

if you are only using one slot, you can omit the `<template>`

```vue
<CourseGoals #default="slotProps">
	<h2>{{ slotProps.item }}</h2>
	<p>{{ slotProps.anotherProp }}</p>
</CourseGoals>
```

------

### 