---
title: "Missed CSS: accent color"
date: 2025-09-23
tags: ["post"]
excerpt: "dead simple."
short: 'CSS: accent'
---

<hgroup>
	<h1>Missed CSS: accent-color</h1>
	<p>Dead simple form component customizing.</p>
</hgroup>

## accent-color

### HTML

```html
<input type="range" />
<input type="radio" name="g" />
<input type="radio" name="g" />
<input type="checkbox" checked />
```

### CSS

```css
input {
  accent-color: rebeccapurple;
}
```

<style>
	input {
		accent-color: rebeccapurple;
	}
</style>

And viola!

<div class="not-prose flex items-center justify-center gap-6" style="transform: scale(1.2);">
  <div><input type="range" /></div>
	<div><input type="radio" name="g" /> <input type="radio" name="g" checked /></div>
	<div><input type="checkbox" checked /></div>
</div>
