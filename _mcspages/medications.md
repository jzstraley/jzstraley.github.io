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
    {% for section in site.data.medications %}}
        <li> {{ site.data.medications.chapter.title }} </li>
        {% for post in site.medications %}
            {% if post.section = section %}
            <li>
                <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | xml_escape }}</a>
            </li>
            {% endif %}
        {% endfor %}
    {% endfor %}
</body>