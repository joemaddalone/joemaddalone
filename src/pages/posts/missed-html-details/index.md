---
title: 'Missed HTML: details'
date: 2021-12-13
tags: ['post']
excerpt: 'The details tag is often overlooked and reinvented.'
---

<hgroup>
	<h1>Missed HTML: details</h1>
	<p>The details tag is often overlooked and reinvented.</p>
</hgroup>

## &lt;details&gt;

> The &lt;details&gt; HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the &lt;summary&gt; element. - [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

### HTML

```html
<details>
    <summary>Detail</summary>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</details>
<details>
    <summary>Detail2</summary>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</details>
```

<div class="ui segment">
<details>
    <summary>Detail</summary>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</details>
<details>
    <summary>Detail2</summary>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</details>
</div>

### And with a little css and nesting.

```html
<style>
    details.css summary:hover,
    details.css li:hover {
        color: blue;
    }
    details.css {
        cursor: pointer;
    }
    details.css > details {
        margin-left: 12px;
    }
    details.css > details > details {
        margin-left: 24px;
    }
    details.css ul {
        margin: 0;
    }
</style>

<details class="css">
    <summary>Root</summary>
    <details>
        <summary>Dir</summary>
        <details>
            <summary>file list</summary>
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </details>
    </details>
</details>
```

<style>
	details.css summary:hover, details.css li:hover {
		color: blue;
	}
	details.css {
		cursor: pointer;
	}
	details.css > details {
		margin-left: 12px;
	}
	details.css > details > details {
		margin-left: 24px;
	}
	details.css ul {
		margin: 0;
	}
</style>
<div class="ui segment">
	<details class="css">
		<summary>Root</summary>
		<details>
			<summary>Dir</summary>
			<details>
			<summary>file list</summary>
			<ul>
				<li>a</li>
				<li>b</li>
				<li>c</li>
			</ul>
		</details>
		</details>
	</details>
</div>
