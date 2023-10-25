---
title: 'Missed CSS: counters'
layout: layout
date: 2023-10-23
tags: ['post']
excerpt: 'Numbering without ordered lists.'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

## CSS Counters

### HTML

```html
<div>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>
```
### CSS

```css
div {
  counter: number;
}
div p {
  counter-increment: number;
}
div p:before {
  content: counter(number);
  width: 1.5em;
  height: 1.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 0.3em;
  background: #000;
  color: #fff;
}
```

<style>
	div.a {
		counter: number;
	}

	div.a p {
		counter-increment: number;
	}

	div.a p:before {
		content: counter(number);
		width: 1.5em;
		height: 1.5em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin-right: 0.3em;
		background: #000;
		color: #fff;

	}
</style>

And now we have numbering without ordered list.  The immediate benefit being that we can style as we see fit.

<div class="ui segment a">
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>

With a small tweak we can choose different formats.

### CSS

```css
div p:before {
  content: counter(number, upper-roman);
  <-- lower-roman, lower-greek, upper-alpha, etc...-->
  ...
}
```

<style>
	div.b {
		counter: numberB;
	}

	div.b p {
		counter-increment: numberB;
	}

	div.b p:before {
		content: counter(numberB, upper-roman);
		width: 1.5em;
		height: 1.5em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin-right: 0.3em;
		background: #000;
		color: #fff;

	}
</style>

<div class="ui segment b">
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>



