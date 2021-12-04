---
title: 'joe writes'
layout: layout
---

<ul class="postlist">
{%- for post in collections.post -%}
<li class="postlist-item">
    <time class="postlist-date" datetime="{{ post.data.date | htmlDateString }}">{{ post.date | readableDate }}</time>
    <a href="{{ post.url }}" class="postlist-link">{{ post.data.title }}</a>
    <p>{{post.data.summary}}</p>
  </li>
{%- endfor -%}
</ul>
