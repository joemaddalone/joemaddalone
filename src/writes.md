---
title: 'joe writes'
layout: layout
---


<ul class="postlist mt2">
{% assign posts = collections.post | reverse %}
{%- for post in posts -%}
<li class="postlist-item">
    <span><a href="{{ post.url }}" class="postlist-link">{{ post.data.title }}</a> : {{post.data.excerpt}}</span>
  </li>
{%- endfor -%}
</ul>
