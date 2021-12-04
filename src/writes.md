---
title: 'joe writes'
layout: layout
---


<ul class="postlist mt2">
{% assign posts = collections.post | reverse %}
{%- for post in posts -%}
<li class="postlist-item">
    <a href="{{ post.url }}" class="postlist-link">{{ post.data.title }}</a>
    <p><i>{{post.data.summary}}</i></p>
  </li>
{%- endfor -%}
</ul>
