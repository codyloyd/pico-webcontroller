# Pico Web Controller

this is a controller that is meant for [pico-8](https://www.lexaloffle.com/pico-8.php) games that have been exported to html.  It's a bit of JavaScript and CSS that makes the game more responsive and adds some touch sensitive controls under the game screen.

## Installation
after exporting your pico-8 game to html, drop all 4 of the files in this repo into the same folder as your html and js files then add the following lines to your html file, at the end right before the closing `</body>` tag.

```html
<link rel="stylesheet" href="webcontroller.css">
<script src="webcontroller.js"></script>
```
I would also suggest adding this line to the `head` of the html file so that it scales correctly on most phones.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```