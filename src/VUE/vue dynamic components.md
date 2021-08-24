# VUE Dynamic Components

`<component is="">`

```vue
<button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
<button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>

<component :is="selectedComponent"></component>

...

methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
```

-> "selectedComponent" has the name of the component, that will be shown instead of `<component>`

## Keep dynamic components alive

-> entered content gets lost, if the component is switched to another component

-> use `<keep-alive>` (works together with `<component>`)

```vue
    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
```

the state of the components stays stored.

