---
title: Medications
author: J. Austin Straley, DO
layout: post
header: true
chapter: '9'
section: 00
weight: 90
lesson: 00
date: 2022-12-18
quote: '"Never have a good idea on a Friday" - James Campbell, MD"'
---

<body>
{% for post in site.medications %}
    <li>
    <a href="{{ post.url }}">
        {{ post.title}}
    </a>
    </li>
{% endfor %}
</body>