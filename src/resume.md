---
title: 'joe works'
layout: layout
---


## Experience 

<div class="ui divided items">

{% for work in resume.work %}
<div class="item">
  <div class="content">
			<div class="header">{{work.company}} ({{work.from}} - {{work.to}})</div>
			<div class="meta i">{{work.title}}</div>
      <ul>
      {% for highlight in work.highlights %}<li class="meta pt0">{{highlight}}</li>{% endfor %}
      </ul>
	</div>
</div>
{% endfor %}

</div>