



# Visual Studio Code

## Run Code in Visual Studio .json

```
{
// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
"version": "0.2.0",
"configurations": [
    {
        "type": "node",
        "request": "launch",
        "name": "My Awesome Code Launcher",
        "skipFiles": [
            "/**"
        ],
        "program": "${file}",
        "console": "integratedTerminal"
    }
]
}  
```

------



## Emmet

Snippet then tab or enter

### Base Elements

> - `div`
> - `h1`
> - `p`
> - `nav`

### Id and Class Attributes

Add '.' followed by classname

- `.container` -> div with a class of container
- `div.container` -> div with a class of container
- `h3.text-center` -> h3 with class of text-center
- `div.container.flex-container` -> div with class of container AND flex-container

Add '#' followed by id

- `#mainContainer` -> div with id of mainContainer
- `div#mainContainer` -> div with id of mainContainer
- `h1#header` -> h1 with id of header

Combine class and id

- `div.container#mainContainer` -> div with class of container and id of mainContainer
- `h1.text-center#header` -> h1 with class of text-center and id of header

### Multiplications

> `h1*3` -> 3 h1's
>
> `li*3` -> 3 li's

### Numbering

use the '$' operator combined with a multiplication to apply an index to an element

- `ul>li.item$*5` -> ul with 5 elements that have classes of item1, item2, etc.

### Child

Use '>' to add children

- `div>h1` -> div with a child of H1
- `ul>li` -> ul with child of li
- `ul>li*3` -> ul with 3 li children

### Sibling

Use '+' to add siblings

- `div>h1+p` -> div with two children, h1 and p
- `ul>li+li` -> ul with two li children
- `form>input:text+input:text+input:submit` -> form with two text input children and a child submitt button

### Groupings

Use parenthesis to group things together...think complex children

- `div>(form>input:text+input:text+input:submit)+p` -> div with two children a form (with two inputs and a submit button) and a p tag

### Custom Attribute

Set custom attributes with brackets '[]'

- `p[title="Hello world"]` -> p with title attribute set to 'Hello world'

### Text

Set inner text for text elements with curly braces '{}'

- `p{hello}` -> p with inner text of hello
- `a{Click here}` -> anchor tag with inner text of Click here

### Good to know

Here's some extra ones to know!

- `!`
- `link:css`
- `script:src`
- `input:text|email|password|date|number|submit|button`
- `btn`

`lorem`->tab in vs-code creates LopremIpsum!

`lorem20`-> tab defines lenght of loremipsum

------

## Linting

[VS Code ES Lint - Traversity](https://www.youtube.com/watch?v=SydnKbGc7W8)

[eslint.org](https://eslint.org/)

[airbnb styleguide github](https://github.com/airbnb/javascript)	

[prettier.io](https://prettier.io/)

[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

[eslint-prettier-airbnb-react](https://github.com/paulolramos/eslint-prettier-airbnb-react)

[algoexpert.io](https://algoexpert.io)

------

## ES Lint Setup & AirBnB Style

### Workflow

> global install
>
> ```bash
> sudo npm i -g eslint
> ```
>
> ------

```
npm init -y
```



```bash
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

`-D` for devDependencies

dann

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

### Add Config-files:

```
.prettierrc

{
	"singleQuote": true
}
```

-> Options: https://prettier.io/docs/en/options.html

```
.eslintrc.json

{
    "extends": ["airbnb", "prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        
        "object-shorthand": "off",
        "class-methods-use-this":"off"
    }
}
```



------

## Tips & Tricks



------



# Links

- [Debugging](https://code.visualstudio.com/docs/editor/debugging)
- [Version Control](https://code.visualstudio.com/docs/editor/versioncontrol)
- [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
- [freecodecamp - Course](https://www.freecodecamp.org/news/learn-visual-studio-code-to-increase-productivity/)
- [freecodecamp - Visual Studio Code Snippets](https://www.freecodecamp.org/news/definitive-guide-to-snippets-visual-studio-code/)
- [James Quick - Visual Studio Code Cheatsheet](files/VS_Code_Cheat_Sheet.pdf)
- [markdown to html converter](https://markdowntohtml.com/)



## 15 VS Code Extensions For Front-End Developers in 2019

https://www.youtube.com/watch?v=LdF2RcelRg0


------
