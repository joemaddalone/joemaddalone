---
title: '2022 in the Books'
layout: layout
date: 2022-11-29
tags: ['post']
excerpt: 'A bunch of things I read.'
permalink: '/{{ title | slugify }}/'
---

# {{ title }}


<div class="ui divided items">
{% for book in books2022 %}
<div class="item">
			<div class="image"><img src="https://covers.openlibrary.org/b/isbn/{{book.isbn}}-M.jpg" /></div>
		<div class="content">
			<div class="header">{{book.title}}</div>
			<div class="meta i">{{book.subtitle}}</div>
			<div class="meta pt2">{{book.author}}</div>
		</div>
</div>

{% endfor %}
</div>
