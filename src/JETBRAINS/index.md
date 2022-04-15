# Jetbrains Webstorm/IntelliJ

## General

Use **action-search** `cmd-shift-A` 

or **search-all** 2x shift

## Layout Overview

main layout components in IntelliJ:

- Tool Windows 
- Main Menu 
- Editor

| Action Search    | Windows            | Mac         | Description                                                |
| ---------------- | ------------------ | ----------- | ---------------------------------------------------------- |
| Terminal         | ALT + F12          | ⌥ + F12     | Open Terminal  window                                      |
| Project          | ALT + 1            | ⌘ + 1       | Open Project View                                          |
| Hide all windows | CTRL + SHIFT + F12 | ⌘ + ⇧ + F12 | Brings focus back to the editor and hides all open Windows |
|                  |                    | ⌃ -F2       | Focus to top menu                                          |

## Search

- Text search - looks through everything in the current project to match to the provided sequence of characters. It can be slow or have too many results
- Targeted component search - more efficient
  - supports camel case search (Like everything else in Intellij)
    - Search Everywhere
    - Class Search
    - File Search - project files only
    - Symbol search - code symbols like method and class names, and constants
    - Action search - all actions, menus, and commands available

| Action Search | Windows                | Mac       | Description       |
| ------------- | ---------------------- | --------- | ----------------- |
|               | SHIFT + SHIFT          | ⇧+ ⇧      | Search Everywhere |
|               | CTRL + SHIFT +A        | ⌘ + ⇧ + A | Action Search     |
| Find in Path  | CTRL + SHIFT +F        | ⌘ + ⇧ + F | text search       |
| Go To Class   | CTRL + N               | ⌘ + O     | Class Search      |
| Go To File    | CTRL + SHIFT +N        | ⌘ + ⇧ + O | File Search       |
| Go To Symbol  | CTRL + SHIFT + ALT + N | ⌘ + ⌥ + O | Symbol Search     |

## Code Exploration

understand the structure of a project

| Action Search        | Windows          | Mac       | Description                                                  |
| -------------------- | ---------------- | --------- | ------------------------------------------------------------ |
|                      |                  | ⌘ + F12   | File Structure                                               |
| Go To Implementation | CTRL + ALT + B   | ⌘ + ⌥ + B | Navigates to the implementation of the method                |
| back                 |                  |           |                                                              |
| Recent Locations     | CTRL + SHIFT     | ⌘ + ⇧ + E | recent locations menu                                        |
| Go to Super Method   | CTRL + U         | ⌘+U       | Navigates to the interface or super method                   |
| Call Hierarchy       | CTRL + ALT + H   | ⌃ + ⌥ + H | Call Hierarchy: allocations where current method gets invoked (alt-F7 is similar) |
| Find Usages          | ALT + F7         | ⌥ + F7    | Find Usages: to see where current symbol gets used           |
| Go to   Line/Column  | CTRL + G         | ⌘ + L     | Line/Column menu: navigate to a particular line coordinate   |
| Quick Definition     | CTRL + SHIFT + I | ⌥ + SPACE | Quick Definition window:  peek at the implementation of a method without navigating away from current location |
| Parameter Info       | CTRL + P         | ⌘+P       | Display method parameters                                    |
| Quick Documentation  | CTRL + Q         | F1        | documentation for method at caret                            |

