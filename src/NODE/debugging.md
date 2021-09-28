# Debugging Node

## Errors

Types of Errors

#### Syntax Errors

you get an error message and just have to find the error

#### Runtime Errors

code doesn't run

#### Logical Errors

no Error message, can be hard to find

## Debugger

in VS Code:

run>debug

-> choose node.js

set breakpoints



- you can run code in the debug-console (like in dev-tools), eg.
- you can change values of variables in the debugger

```js
parsedBody.split('=')
```

> ##### auto-restart debugger
>
> run> add configuration
>
> -> edit `launch.json`
>
> add
>
> ```js
> "restart": true,
> "runtimeExecutable": "nodemon",
> "console": "integratedTerminal"
> ```
>
> -> this needs nodemon to be installed globally



https://code.visualstudio.com/docs/nodejs/nodejs-debugging

https://nodejs.org/en/docs/guides/debugging-getting-started/

------

# 