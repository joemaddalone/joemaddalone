---
title: 'Svg Path Data in Canvas'
layout: layout
date: 2022-01-05
tags: ['post']
summary: 'Building canvas shapes with svg path data'
permalink: '/{{ title | slugify }}/'
---

# {{ title }}

Typically most canvas drawing requires a series of commands. Something like this.

```js
ctx.beginPath();
ctx.moveTo(150, 10);
ctx.lineTo(100, 70);
ctx.lineTo(185, 75);
ctx.lineTo(150, 10);
ctx.stroke();
```
This gives us a triangle.

<canvas width="300" height="80" id="ex1" style="background: white;"></canvas>

<script>
	const c0 = document.getElementById("ex1")
	const ctx0 = c0.getContext('2d');
	ctx0.beginPath();
	ctx0.moveTo(150, 10);
	ctx0.lineTo(115, 70);
	ctx0.lineTo(185, 70);
	ctx0.lineTo(150, 10);
	ctx0.stroke();
</script>

However,using `Path2D` we can utilize the common svg path data commands to accomplish this. In my opinion this is much more simple.

```js
const p = new Path2D('M150 10 L115 70 L185 70 Z');
ctx1.stroke(p);
```

<canvas width="300" height="80" id="ex2" style="background: white;"></canvas>

<script>
	const c1 = document.getElementById("ex2")
	const ctx1 = c1.getContext('2d');
	const p = new Path2D('M150 10 L115 70 L185 70 Z');
	ctx1.stroke(p);
</script>

If you're not familiar with svg path data commands I have a short series to ramp you up.

[SVG Path Video Series](https://youtube.com/playlist?list=PLKiuVKZics1eZrb8UykoOrg293vpelh-6)

Moreover there are a ton of svg path libraries out there that can simplify this even further.  I'll tout [my own library](https://github.com/joemaddalone/path) in this next example.

<script type="module" src="https://unpkg.com/@joemaddalone/path@1.2.9/dist/index.esm.js"></script>

```js
import Path from "@joemaddalone/path";
const p = new Path2D(new Path().triangle(70, 150, 50).toString());
ctx.stroke(p);
```


<canvas width="300" height="80" id="ex3" style="background: white;"></canvas>

<script type="module">
	import Path from "@joemaddalone/path";
	const c2 = document.getElementById("ex3")
	const ctx2 = c2.getContext('2d');
	const p1 = new Path2D(new Path().triangle(70, 150, 50).toString());
	ctx2.stroke(p1);
</script>