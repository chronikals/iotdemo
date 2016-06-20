#Common UX Icons

Common UX Icons are built from SVG images into an svg sprite.

###Getting started:

1. Install node and npm globaly
2. ```npm install```
3. ```gulp icons```

###Usage:

After running the gulp icons task, there will be an _out_ folder, containing _symbol_ and _view_ folders.

_symbol_ and _view_ are two different methods of implementing/using the icons.

* Symbol:
	* Single svg sprite that contains all the icons.
	* Has the benefit of being able to be styled with CSS, as you have a proper svg-element in the html document.
	* It is preferable to make a helper to inject the necessary svg fragment.
	* Usage:	
	
```
<svg class="icon-small icon">
	<use xlink:href="out/symbol/svg/sprite.symbol.svg#edit-small"></use>
</svg>
```
	
	
* View:
	* Single svg sprite that contains all the icons.
	* Style sheet distributed as Scss
	* Used css background image
	* Cannot be styled with css
	* Usage:

```
<i class="abb-icon-edit-small"></i>
```

###Examples

Usage examples are created during the gulp task, and can be found in the out child folders.
