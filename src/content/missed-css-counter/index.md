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
<style>
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
</style>
<div>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>
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

<div class="ui segment a">
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>
