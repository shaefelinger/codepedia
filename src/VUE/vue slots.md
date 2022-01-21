# VUE Slots

## Slots

To use a component as a wrapper (eg a Card) around content -› pass more complex data to child.

- Allows to receive HTML-Content (with Vue-Features) from outside of the component.

- (think: Props=data, slots=html-code)

- The Parent provides the HTML-Code, that is inside of the slot
- not self-closing

eg:

parent:

```vue
<div v-if="showModal">
    <Modal theme="sale" @closeModal="toggleModal">
      <h1>Headline</h1>
      <p>text</p>
    </Modal>
</div>
```

child: add `<slot>`

```vue
<div class="modal" :class="{ sale: theme === 'sale'}">
	<slot></slot>
</div>
```

or:

```vue
// BaseCard.vue

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
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

Example- Modal:

```html
<div class="backdrop" @click.self="closeModal">
    <div class="modal " :class="{ sale: theme === 'sale'}">
        <slot>Default content if no data was passed</slot>
        <div class="actions">
            <slot name="links"></slot>
        </div>
    </div>
</div>
```

------

## Named Slots

if you use more than one slot in your component, you can add names to the slot:

-> wrap in `<template >` and add `v-slot:`-directive

> you don't have to name all slots, one unnamed default-slot is ok

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
<BaseCard >
	<template v-slot:header>
		<h3>{{ fullName }}</h3>
	</template>
	<p>{{ infoText }}</p>
</BaseCard >
```

content, that is not in the `<template>` will automatically go to the (unnamed) default-slot.

to make this clear, you can also use `v-slot:default`: (reserved name)

```vue
<BaseCard>
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
</BaseCard>
```

### v-slot shorthand `#` ###

`<template #header>` is equal to:

`<template v-slot:header>`



### Styling Slots

scope

the styling and the data ist not passed to the slot-component, still only available inside of the parent-component (the content is evaluated and styled before it is sent to the slot-component)

### slot default-content

you can provide default content, that is used if no content is sent to that slot

```vue
<header>
	<slot name="header">
		<h2>Default Content</h2>
	</slot>
</header>
```

### check, if slot gets data

`this.$slots` holds info about the slot data.this component receives 

`this.$slots.default` accesses the default slot



-> you can check if slot receives data and only render it if it has data:

```vue
<header v-if="$slots.header">
	<slot name="header"> </slot>
</header>
```

## Scoped Slots

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

