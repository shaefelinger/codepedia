# Vue Animations & Transitions

use vue/js to start animation by adding an animation class, but css is doing the animation

```js
<div class="block" :class="{ animate: animatedBlock }"></div>
```

css:

```css
.block {
  transition: transform 0.3s ease-in;
}

.animate {
  transform: translateX(-150px);
}
```

or:

```css
.animate {
  animation: slide-fade 0.3s ease-out forwards;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
```



vue can delay the disappearance of an element until a animation has finished

------

### Use vue for animation

wrap content that gets shown/removed woth `v-if` or `v-shoe`  in `<transition>`

can only contain 1 child

adds css utility classes to that element - vue applies the classes

mount:

- `v-enter-from`  start stare
- `v-enter-active`
- `v-enter-to` end state

removal

- leave-from
- leave-active
- leave-to

-> makes it possible, to remove an element after the animation finished

css:

animation for adding:

```css
  .v-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }
  .v-enter-active {
    transition: all 0.3s ease-out;
  }
  .v-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
```

for removing:

```css
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
```



##### Transition can also be used for animation:

```css
.v-enter-active {
  animation: slide-scale 0.3s ease-out;
}

.v-leave-active {
  animation: slide-scale 0.3s ease-out;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
```

------

### Custom CSS class names

to use multiple transition-elemnts in one component:

instead of `v-` you can use a different prefix, like `para-enter-active` / `para-leave-active`. Use the name property:

```vue
<transition name="para">
	<p v-if="paraIsVisible">only sometimes visible...</p>
</transition>
...
```

```css
.para-enter-active {
  animation: slide-scale 0.3s ease-out;
}
.para-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}
```

to change the whole-name:

```vue
<transition enter-to-class="some-class" enter-active-class="...">
	<p v-if="paraIsVisible">only sometimes visible...</p>
</transition>
```

------

##### Use tranistion on a component with mutliple root-elements

-> move the transition inside the component and use `:open="condition"` instead of `v-if="condition"`

-> use as aprop inside the component

------

you can use reverse to have the same animation backwards:

```css
.modal-enter-active {
  animation: modal 0.3s ease-out;
}
.modal-leave-active {
  animation: modal 0.3s ease-out reverse;
}
```

------

### Transition between Mutliple Elements

if you toggle between two elements (only one will be on the dom), you can also have 2 elements inside the `<transition>`

use `v-else`

##### `mode`  

- `in-out`  first, the transition is run, then the other element is removed
- `out-in`  removal is animated first, and then the transition is run for the new element

css like this

```css
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
```

------

### Transition Events

to run JS code, when animation starts or ends ect.

transition emits various events

- `@before-enter`  runs, when `-enter-from`-class i added
- `@enter` - like `-enter-active` css class
- `@after-enter`  after the enter-animation is done
- `@before-leave`
- `@leave`
- `@after-leave`

 you always get the element as an argument

```vue
methods: {
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);
    },
    enter(el) {
      console.log('enter');
      console.log(el);
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    
    ...
```

------

### Use JS instead of CSS for Transition

animation library

https://greensock.com/



enter has a second argument: -> the function to be called, when the function is done -> so afterEnter is emitted after enter is really done

```
enter(el, done)
```

fade-in

```js
   enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      const interval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(interval);
          done();
        }
      }, 20);
```

#### Cancelled

`@enter-cancelled`

`@leave-cancelled`

better to store the interval in a data-property:

```js
 enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
```

so you can use this:

```js
enterCancelled() {
	clearInterval(this.enterInterval);
},
```

------

#### Disable CSS Transitions

if you controll all of the animation with js, you can add: `    :css="false"`

-> tell vue, that it will not use CSS for the transition -> vue skips the analysis, better performance

------

## Animated Lists

> remove element fron an array:
>
> ```
> removeUser(user) {
>    this.users = this.users.filter(usr => usr !== user);
>  },
> ```

to use multiple elements, use `<transition-group>`

```vue
<transition-group tag="ul" name="user-list">
	<li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
	</li>
</transition-group>
```

-> renders an element to the dom

`tag` defines, what element to render to the dom (any html-element or custom component)

`name` is the prefix for `-enter-from`... etc.



Vue adds class to `transition-group` to controll the other elements in the list

`prefix-move`

vue wil use transform for the animation of the other elements

## Animating Routes

in older version of vue, you can: 

```js
 <transition name="route">
    <router-view></router-view>
  </transition>
```

css:

```css
.route-enter-from {
}
.route-enter-active {
  animation: slide-scale 1s ease-out;
}
.route-enter-to {
}

.route-leave-active {
  animation: slide-scale 1s ease-in;
}
```

no longer works 

### in vue3 - now:

access slotProps

```vue
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
```

the animation also runs on the first load, because vue starts with an empty router

to avoid that, you can use:

```js
// main.js
router.isReady().then(() => {
  app.mount('#app');
});

```

be aware:

> `<transition>` **needs exactly one child element** 
>
> Your route components **must NOT have multiple root elements!** 

------

