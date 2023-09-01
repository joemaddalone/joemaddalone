---
title: '2023 films'
layout: layout
date: 2023-12-31
tags: ['draft']
excerpt: 'A bunch of things I watched for the first time in 2023.'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

These are not all the films I watched for the first time in 2023, just the ones worth mentioning.

<div class="ui divided items">
{% for movie in movies2023 %}

<div class="item">
		<div class="content">
			<div class="header">{{movie.title}}</div>
		</div>
</div>

{% endfor %}
</div>
