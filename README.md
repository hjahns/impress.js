jquery-impress
============

It's a presentation framework based on the power of CSS3 transforms and
transitions in modern browsers and inspired by the idea behind prezi.com.

This is a fork of [impress.js](https://github.com/impress/impress.js).

Usage
---------------

[Minimal Example](bootstrap.html) | [Full Presentation](index.html)

**Dependencies:**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.impress.min.js"></script>
````
**Optional Dependencies:**

```html
  <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet" />
````

**Init:**

```javascript
$('#impress').impress();
````

Changelog
---------------

- js/jquery.wrapper.js was added to wrap impress.js and create a jquery plugin
- bower dependencies for animate-css and jquery added
- gulp concat and uglify to bundle both repositories and create /dist


BROWSER SUPPORT
-----------------

This project supports only the major [evergreen](http://eisenbergeffect.bluespire.com/evergreen-browsers/) desktop browsers that have implemented:

* [DataSet API](http://caniuse.com/#search=dataset)
* [ClassList API](http://caniuse.com/#search=classlist)
* [CSS 3D Transforms](http://caniuse.com/#search=css%203d)
* [CSS Transitions](http://caniuse.com/#search=css%20transition)

Copyright 2017 Horst Jahns - Released under the MIT [License](LICENSE)
