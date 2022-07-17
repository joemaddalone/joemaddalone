---
title: 'My self-hosted stuff'
layout: layout
date: 2022-03-14
tags: ['post']
excerpt: 'Hosting all the things from a closet.'
permalink: '/{{ title | slugify }}/'
---

# {{ title }}

I've always had a media server setup running in our house, but during the pandemic I got much more interested in self hosting various services.  This list of self hosted applications on my home server changes all the time.


{% react 'components/homeserver/diagram' %}



_With the exception of Snapraid and MergerFS these are all running in docker and are accessed in a browser._

{% for app in apps %}
<div class="ui segment">
<div class="flex justify-between">

### [{{app.app}}]({{app.url}})

</div>


<p>{{app.description}}</p>

</div>
{% endfor %}


