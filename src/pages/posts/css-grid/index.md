---
title: 'CSS Grid'
date: 2023-07-24
tags: ['post']
excerpt: 'clever thing.'
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
		grid-template-columns: 20% auto 20%;
		grid-gap: 15px;
  }

  .seven .container {
    display: grid;
    grid-template-columns: 20% auto 20%;
  }

  .eight .container {
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-gap: 15px;
  }
</style>

<hgroup>
	<h1>CSS Grid</h1>
	<p>clever thing.</p>
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

grid-template-* provides flexibility.  We can use percentages, fractions, repeat, and even auto.


```css
.container {
    display: grid;
    grid-template-columns: 20% auto 20%;
}
```

<div class="ui segment seven">
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
    grid-template-columns: 20% auto 20%;
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

Now we can hang some meaningful items on our grid positioned by column and row.

<style>
  .eight .container {
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-gap: 15px;
  }

.eight .container .logo {
    grid-column: 1;
    grid-row: 1;
  }

  .eight .container .nav {
    grid-column: 1;
    grid-row: 2;
  }

  .eight .container .aside {
    grid-column: 3;
    grid-row: 1;
  }

  .eight .container .main {
    grid-column: 2;
    grid-row: 1;
  }
</style>

```css
.container {
  display: grid;
  grid-template-columns: 20% auto 20%;
  grid-gap: 15px;
}

.logo {
  grid-column: 1;
  grid-row: 1;
}

nav {
  grid-column: 1;
  grid-row: 2;
}

aside {
  grid-column: 3;
  grid-row: 1;
}

main {
  grid-column: 2;
  grid-row: 1;
}
```

<div class="ui segment eight">
<div class="container">
  <div class="logo">Logo</div>
  <div class="nav">Nav</div>
  <div class="main">Main</div>
  <div class="aside">Aside</div>
</div>
</div>

And adjust the row span of aside and main.

<style>
  .nine .container {
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-gap: 15px;
  }

.nine .container .logo {
    grid-column: 1;
    grid-row: 1;
  }

  .nine .container .nav {
    grid-column: 1;
    grid-row: 2;
  }

  .nine .container .aside {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  .nine .container .main {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
</style>

```css
aside {
  grid-column: 3;
  grid-row: 1 / span 2;
}

main {
  grid-column: 2;
  grid-row: 1 / span 2;
}
```

<div class="ui segment nine">
<div class="container">
  <div class="logo">Logo</div>
  <div class="nav">Nav</div>
  <div class="main">Main</div>
  <div class="aside">Aside</div>
</div>
</div>


Let's tweak the height of the grid.

<style>
  .ten .container {
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-gap: 15px;
    height: 400px;
  }

.ten .container .logo {
    grid-column: 1;
    grid-row: 1;
  }

  .ten .container .nav {
    grid-column: 1;
    grid-row: 2;
  }

  .ten .container .aside {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  .ten .container .main {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
</style>

```css
.container {
  display: grid;
  grid-template-columns: 20% auto 20%;
  grid-gap: 15px;
  height: 400px;
}
```

<div class="ui segment ten">
<div class="container">
  <div class="logo">Logo</div>
  <div class="nav">Nav</div>
  <div class="main">Main</div>
  <div class="aside">Aside</div>
</div>
</div>

A problem appears, the logo is way too tall.  We can utilize grid-template-rows to solve this.


<style>
  .eleven .container {
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-template-rows: 60px auto;
    grid-gap: 15px;
    height: 400px;
  }

.eleven .container .logo {
    grid-column: 1;
    grid-row: 1;
  }

  .eleven .container .nav {
    grid-column: 1;
    grid-row: 2;
  }

  .eleven .container .aside {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  .eleven .container .main {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
</style>

```css
.container {
  display: grid;
  grid-template-columns: 20% auto 20%;
  grid-template-rows: 60px auto;
  grid-gap: 15px;
  height: 400px;
}
```

<div class="ui segment eleven">
<div class="container">
  <div class="logo">Logo</div>
  <div class="nav">Nav</div>
  <div class="main">Main</div>
  <div class="aside">Aside</div>
</div>
</div>








