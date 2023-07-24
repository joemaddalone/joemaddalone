---
title: 'CSS Grid'
layout: layout
date: 2023-07-24
tags: ['post']
excerpt: 'clever thing.'
permalink: '/{{ title | slugify }}/'
---

<style>
	.container > div {
		outline: 1px solid orange;
	}
	.two > .container {
		display: grid;
		grid-template-columns: 50% 50%;
	}
	.three > .container {
		display: grid;
		grid-template-columns: 33.33% 33.33% 33.33%;
	}

	.four > .container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.five > .container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	.six > .container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 15px;
}
</style>

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

Grid seems hard. So let's simplify it.

Our basic markup

```html
<style>
  .container {
  }
  .container > div {
      outline: 1px solid orange;
  }
</style>
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  ...
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
```

<div class="ui segment one">
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>

Let's add two even 50% columns.

```css
.container {
    display: grid;
    grid-template-columns: 50% 50%;
}
```

<div class="ui segment two">
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>

Or how about 3 even 33.33% columns.

```css
.container {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
}
```

<div class="ui segment three">
<div class="container">
<div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>

That gets tedious quick. So we can use fraction units to create an even 4 columns instead of 25%.

```css
.container {
    display: grid;
    /* grid-template-columns: 25% 25% 25% 25%; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

<div class="ui segment four">
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>

Still... I hate typing so... repeat to the rescue.

```css
.container {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-template-columns: repeat(4, 1fr);
}
```

<div class="ui segment five">
<div class="container">
<div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>

gap. seems legit.

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
}
```

<div class="ui segment six">
<div class="container">
<div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>
