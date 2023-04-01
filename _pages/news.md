---
title: News
author: J. Austin Straley, DO
date: 2023-03-27
layout: post
permalink: /news

---

<!-- not built -->
<ul>
  {% for post in site.posts.news %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>