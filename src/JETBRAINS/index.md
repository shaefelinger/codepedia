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
| File Structure       |                  | ⌘ + F12   | File Structure                                               |
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

------

## Bookmarks

mark specific lines, add notes

> - Do an action search for bookmarks to bring up all options
> - "Toggle Bookmark with Mnemonic" lets you assign a character to a specific bookmark



| Action Search                 | Windows      | Mac    | Description                                                  |
| ----------------------------- | ------------ | ------ | ------------------------------------------------------------ |
| Toggle Bookmark               | F11          | F3     | Add/Remove bookmark at current caret location                |
| Show Bookmarks                | SHIFT + F11  | ⌘ + F3 | Open Bookmarks menu                                          |
| Edit Bookmark Description     | CTRL + ENTER | F2     | While cursor is on a bookmark, this action   opens the Bookmark Description menu to add/edit a description |
| Toggle Bookmark with Mnemonic | CTRL + F11   | ⌥ + F3 | Assign a letter or a number to a specific bookmark           |

------

## Editor Tabs

- Run an action search for "split" to bring up different options to split your editor:
  - Split and Move Down/Right: splits the editor and sends current file to the new section Split Horizontally/Vertically: splits the editor and duplicates current file in the new section
  - Run an action search for "unsplit" to remove one or multiple split sections

| Action Search             | Windows    | Mac     | Description                  |
| ------------------------- | ---------- | ------- | ---------------------------- |
| Switcher                  | CTRL + TAB | ⌃ + TAB | Switches between recent tabs |
| Recent Files              | CTRL + E   | ⌘ + E   | Recent Files menu            |
| split/unsplit             |            |         |                              |
| split and move right/down |            |         |                              |
| unsplit all               |            |         |                              |

------

## **Text Selection**

IntelliJ provides all common editor functions to select text plus a couple of enhanced versions.

| Action Search    | Windows                   | Mac                | Description                                                  |
| ---------------- | ------------------------- | ------------------ | ------------------------------------------------------------ |
|                  | SHIFT + up/down           | ⇧ + up/down        | Select text line by line                                     |
|                  | SHIFT + left/right        | ⇧ + left/right     | Select character by character                                |
|                  | CTRL + SHIFT + left/right | ⇧ + ⌥ + left/right | Select word by word                                          |
|                  | CTRL + A                  | ⌘+ A               | Select all text in file                                      |
|                  | SHIFT + HOME              | FN + ⇧ + left      | Select all text from current caret position to the beginning of a line |
|                  | SHIFT + END               | FN + ⇧ + right     | Select all text from current caret position to the end of a line |
| Extend Selection | CTRL + W                  | ⌥ + up             | Smart code block selection                                   |
| Shrink Selection | CTRL + SHIFT + W          | ⌥ + down           | Smart code block de-selection                                |

## **Cursor Management**

| Action Search                      | Windows               | Mac             | Description                                             |
| ---------------------------------- | --------------------- | --------------- | ------------------------------------------------------- |
|                                    | HOME / END            | FN + left/right | Navigate to the beginning/end of  the line              |
|                                    | PG UP / PG DN         | FN + up/down    | Paged navigation                                        |
|                                    | CTRL + PG UP/PG DN    | FN +⌘+ up/down  | Place cursor at the top or bottom of the visible editor |
|                                    | CTRL + up/down        | -               | Scroll with keyboard without moving                     |
|                                    | ALT + up/down         | -               | Jump to next or previous method in a file               |
|                                    | CTRL + CTRL + up/down | ⌥ + ⌥ + up/down | Duplicate cursor                                        |
| Go to Line/Column                  | CTRL + G              | ⌘ + L           | Go to Line/Column menu                                  |
| Edit: Column Selection Mode        | ALT + SHIFT + Insert  | ⇧ + ⌘ + 8       | Toggle virtual spaces on and off                        |
| Replace                            | CTRL + R              | ⌘+ R            | Search & Replace menu                                   |
| Add Selection For  Next Occurrence | ALT + J               | ⌃ + G           | Selects next occurrence and duplicates caret            |
|                                    | SHIFT + ALT + click   | ⇧ +⌥+ click     | Duplicate cursor with mouse                             |
|                                    | SHIFT + ALT + drag    | ⇧ +⌥+ drag      | multiple selections                                     |

## **Basic Editing**

| Action Search              | Windows               | Mac             | Description                               |
| -------------------------- | --------------------- | --------------- | ----------------------------------------- |
|                            | SHIFT + ENTER         | ⇧ + ENTER       | Add a newline from anywhere               |
| Duplicate Line             | CTRL + D              | ⌘ + D           | Duplicate current line                    |
| Delete Line                | CTRL + Y              | ⌘ + Backspace   | Delete current line                       |
| Paste from History         | CTRL + SHIFT + V      | ⌘ + ⇧ + V       | Paste text from clipboard                 |
| Undo                       | CTRL + Z              | ⌘ + Z           | Undo latest action                        |
| Rollback                   | CTRL + ALT + Z        | ⌘ + ⌥ + Z       | Rollback change at caret                  |
|                            | SHIFT + ALT + up/down | ⇧ + ⌥ + up/down | Move selected code block                  |
| Toggle Case                | CTRL + SHIFT + U      | ⌘ + ⇧ + U       | Make selection upper case or lower case   |
| Comment With Line Comment  | CTRL + /              | ⌘ + /           | Comment out selection with line comments  |
| Comment With Block Comment | CTRL + SHIFT + /      | ⌘ + ⌥ + /       | Comment out selection with block comments |

------

## **Code Auto-generation**
