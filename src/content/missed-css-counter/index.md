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
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</div>
```
### CSS

```css
div {
  counter: number;
}
div span {
  display:block;
  counter-increment: number;
}
div span:before {
  content: counter(number);
  width: 1.5em;
  height: 1.5em;
  border-radius: 1.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.3em;
  margin-bottom: 0.5em;
  background: #000;
  color: #fff;
}
```

<style>
	div.a {
		counter: number;
	}

	div.a span {
		display:block;
		counter-increment: number;
	}

	div.a span:before {
		content: counter(number);
		width: 1.5em;
		height: 1.5em;
		border-radius: 1.5em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.3em;
		margin-bottom: 0.5em;
		background: #000;
		color: #fff;
	}
</style>

And now we have numbering without ordered list.  The immediate benefit being that we can style as we see fit.

<div class="ui segment a">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</div>

With a small tweak we can choose different formats.

### CSS

```css
div span:before {
  content: counter(number, upper-roman);
  <-- lower-roman, lower-greek, upper-alpha, etc...-->
  ...
}
```

<style>
	div.b {
		counter: numberB;
	}

	div.b span {
		display:block;
		counter-increment: numberB;
	}

	div.b span:before {
		content: counter(numberB, upper-roman);
		width: 1.5em;
		height: 1.5em;
		border-radius: 1.5em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.3em;
		margin-bottom: 0.5em;
		background: #000;
		color: #fff;
	}
</style>

<div class="ui segment b">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
</div>

### counter-reset

Using css counters we can define when to reset the counter.  Here we'll use a section element to reset the counter.

```css
div {
  counter: number;
  counter-reset: section;
}
```

```html
<div>
  <section>
    <span>First</span>
    <span>Second</span>
    <span>Third</span>
  </section>
  <section>
    <span>First</span>
    <span>Second</span>
    <span>Third</span>
  </section>
</div>
```

<style>
	div.c {
		counter: numberC;
		counter-reset: section;
	}

	div.c section {
		border-bottom: 1px solid #222;
		padding: 15px 0;
	}

	div.c span {
		display:block;
		counter-increment: numberC;
	}

	div.c span:before {
		content: counter(numberC, upper-roman);
		width: 1.5em;
		height: 1.5em;
		border-radius: 1.5em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.3em;
		margin-bottom: 0.5em;
		background: #000;
		color: #fff;

	}
</style>

<div class="ui segment c">
	<section>
		<span>First</span>
		<span>Second</span>
		<span>Third</span>
	</section>
	<section>
		<span>First</span>
		<span>Second</span>
		<span>Third</span>
	</section>
</div>
