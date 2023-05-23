# Typescript Compiler Settings

### Watch-Mode

```
tsc app.ts -w
tsc app.ts --watch
```

#### Compiling Entire Project

define project

```
tsc --init
```

-> creates `tsconfig.json`

and then:

```
tsc
```

#### Including/excluding Files

in tsconfig.json

```
  "exclude": [
    "analytics.ts"
  ]
```

use wildcards

```
"*.dev.ts"
"**/*.dev.ts"
```

typical

```
  "exclude": [
    "node_modules"
  ]
```

> ist automatically excluded as a default setting

##### Include

```
"include": [
    "app.ts"
  ]
```

will only compile what's specified

> so it will compile include minus exclude

##### files

also possible (no folders)

```
 "files": [
    "app.ts"
  ]
```

------

## Compiler Options

##### Compilation target

- target - with version. eg "es5"
  - (ctrl-space to see available options)
  - standard: ES2016 in Vue 3

##### lib

- specify the features
- if not specified, all dom-apis are available

```
     "lib": [
       "DOM",
       "DOM.Iterable",
       "ES2016",
       "scripthost"
     ],   
```

#### other options

- allowjs
- checkjs (could be nice, to use ts-features without using ts)

##### sourceMap

- -> see and debug ts-files in browser dev-tools

**outDir** -> eg: `"outDir": "./dist"`   - folder-structure of source is copied

**rootDir** -> eg `"rootDir": "./src"`

removeComments

noEmit - don't generate js files - just check

downlevelIteration - can help with loops for older js-versions

**noEmitOnError** - if any file has errors, nothis is generated



### **strict**

- also individual strict-options
- noImplicitAny -> always declare type of punction-params
- strictNullChecks -> 
- strictFunctionTypes -> 

### codeQuality

```
    "noUnusedLocals": true, 
    "noUnusedParameters": true,      
    "noImplicitReturns": true,  
```

------

### vs code

- eslint
- prettier
- debugger for chrome -> javascript debugger

------

These links might also be interesting:

- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

------



