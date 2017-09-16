# Pico Web Controller

this is a controller that is meant for [pico-8](https://www.lexaloffle.com/pico-8.php) games that have been exported to html.  It's a bit of JavaScript and CSS that makes the game more responsive and adds some touch sensitive controls under the game screen.
<img width="322" alt="screen shot 2017-09-16 at 10 46 53 am" src="https://user-images.githubusercontent.com/18574792/30513699-7cfb10bc-9acd-11e7-93e8-f4c4e84c36f2.png">

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
