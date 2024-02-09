---
title: 'joe works'
layout: resume
---



<div class="ui internally celled grid">
  <div class="row">
    <div class="four wide column">
      <b>Get to know me.</b>
    </div>
    <div class="twelve wide column">
        <h2>Experience</h2>
        <div class="ui divided items">
{% for work in resume.work %}<div class="item">
  <div class="content">
			<div class="header">{{work.company}} ({{work.from}} - {{work.to}})</div>
			<div class="meta i">{{work.title}}</div>
      <ul>
      {% for highlight in work.highlights %}<li class="meta pt0">{{highlight}}</li>{% endfor %}
      </ul>
	</div>
</div>{% endfor %}
    </div>
  </div>
</div>

</div>
