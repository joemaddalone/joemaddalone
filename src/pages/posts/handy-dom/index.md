---
title: 'Handy DOM'
date: 2023-01-18
tags: ['post']
excerpt: 'handy dom stuff.'
---

<hgroup>
	<h1>Handy DOM</h1>
	<p>handy dom stuff.</p>
</hgroup>

## valueAsNumber

Get actual numbers.

```html
<input id="a" type="number" />
<script>
  a.addEventListener('input', (e) => {
    console.log(typeof e.target.value); // string
    console.log(typeof e.target.valueAsNumber); // number
  });
</script>
```

## valueAsDate

Get actual dates.

```html
<input id="d" type="date" />
<script>
  d.addEventListener('input', (e) => {
    console.log(e.target.value); // string
    console.log(e.target.valueAsDate); // object
  });
</script>
```

## document.createDocumentFragment

Create DOM trees off screen, in memory, and without causing reflows.

```js
const real = document.querySelector('#ul');
const fragment = document.createDocumentFragment();
const letters = ['a', 'b', 'd'];
// Build our DOM nodes in memory.
letters.forEach((letter) => {
  const li = document.createElement('li');
  li.textContent = letter;
  li.classList.add(`list-item ${letter}`)
  fragment.appendChild(li);
});
// Append fragment "tree" all at once.
real.appendChild(fragment);
```
