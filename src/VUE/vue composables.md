# Vue Composables - Hooks

Also called "custom composition functions"

- js-function, that is ment to be called inside the setup-method. 
- Hooks can be versatile and you easily see  what is coming from the hook

- convention: start function-name with `use`

- you can also send arguments to a hook.

  

you can for example export the elements as an array:

export

```js
export default function useAlert() {
  const alertIsVisible = ref(false);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}

```

import

```js
 setup() {
    const [alertIsVisible, showAlert, hideAlert] = useAlert();

    return { alertIsVisible, showAlert, hideAlert };
  },
```



