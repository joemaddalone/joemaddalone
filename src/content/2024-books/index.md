---
title: '2024 in the Books'
layout: layout
date: 2024-12-31
tags: ['post']
excerpt: 'A bunch of things I read in 2024.'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

<div class="ui divided items">
{% for book in books2024 %}

<div class="item">
		<div class="image">{% if book.isbn %}{% assign img = book.isbn | append: ".jpg" %}{% image img, book.title %}{% endif %}</div>
		<div class="content">
			<div class="header">{{book.title}}</div>
			<div class="meta i">{{book.subtitle}}</div>
			<div class="meta pt2">{{book.author}}</div>
		</div>
</div>

{% endfor %}
</div>
