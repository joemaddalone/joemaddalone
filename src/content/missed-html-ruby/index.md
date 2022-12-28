---
title: 'Missed HTML: ruby'
layout: layout
date: 2022-12-28
tags: ['post']
excerpt: 'A quick win for otherwise complicated typography.'
permalink: "/{{ title | slugify }}/"
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

## &lt;ruby&gt;

> The &lt;ruby&gt; HTML element represents small annotations that are rendered above, below, or next to base text... - [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)

### HTML

```html
<ruby>
  <ruby>50<rt>Clicks</rt></ruby>
</ruby>
```

<div class="ui segment">
<ruby>50<rt>Clicks</rt></ruby>
</div>

### And with a little css.

```html
<style>
	ruby.css {
		padding: 10px;
		margin: 15px
	}
	ruby.css {
		font-size: 2rem;
	}
	ruby.css rt {
		font-size: 0.75rem;
	}
	ruby.css.under {
		ruby-position: under
	}
	ruby.css.over {
		ruby-position: over
	}
</style>

<ruby class="css over">50%<rt>CPU Usage</rt></ruby>
<ruby class="css under">14GB<rt>Available RAM</rt></ruby>
<ruby class="css under">🤜🏼<rt>fist bump</rt></ruby>
```

<style>
	ruby.css {
		padding: 10px;
		margin: 15px;
	}
	ruby.css {
		font-size: 2rem;
	}
	ruby.css rt {
		font-size: 0.75rem;
	}
	ruby.css.under {
		ruby-position: under
	}
	ruby.css.over {
		ruby-position: over
	}
</style>

<ruby class="css over">50%<rt>CPU Usage</rt></ruby>
<ruby class="css under">14GB<rt>Available RAM</rt></ruby>
<ruby class="css under">🤜🏼<rt>fist bump</rt></ruby>
