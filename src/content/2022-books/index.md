---
title: '2022 in the Books'
layout: layout
date: 2022-11-29
tags: ['post']
excerpt: 'A bunch of things I read.'
permalink: '/{{ title | slugify }}/'
---

# {{ title }}


<div class="ui two column grid">
{% for book in books2022 %}
<div class="column">
	<div class="ui fluid card" style="height: 150px;">
		<div class="content">
			<div class="header">{{book.title}}</div>
			<div class="meta i">{{book.subtitle}}</div>
			<div class="meta pt2">{{book.author}}</div>
		</div>
	</div>
</div>



{% endfor %}
</div>
