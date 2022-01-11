
# Units

- [CSS Units - w3schools](https://www.w3schools.com/cssref/css_units.asp)
- [CSS Values and Units - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [When to use rem vs em](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)
- [Understanding the Difference Between CSS Resolution and Device Resolution](https://medium.com/@elad/understanding-the-difference-between-css-resolution-and-device-resolution-28acae23da0b)

------

## Absolute Units

| Unit | Description        |
| ---- |:------------------ |
| px   | pixels             |
| pt   | points             |
| pc   | picas (apc = 12 pt |
| cm   | centimeters        |
| mm   | milimeters         |
| in   | inches             |

- In web development, you usually use **px for height and width**, and **pt for font-size**.

- Pixel values (px) actual size on the screen depends on the screen of the device. It is good practice to test your website on multiple devices.
- `0` is the same for all units 

## Relative Units

| Unit | Description                                                  |
| ---- |:------------------------------------------------------------ |
| em   | Relative to the element’s font size (2em = 2 times the font size) |
| rem  | Relative to the font size of the root element - **most used!** |
| vw   | Relative to 1% of the viewport width                         |
| vh   | Relative to 1% of the height of the viewport                 |
| %    | Relative to the parent element                               |

- It is good practice to use **em** and **rem** a lot. It helps create good responsive websites. 
- **vw** is also a useful unit, but has to be tested especially on small devices.

------

## Default Size

100%=16px, 1em=16px
