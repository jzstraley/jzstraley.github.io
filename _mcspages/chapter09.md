---
title: Medications
author: J. Austin Straley, DO
layout: post
header: true
chapter: 9
section: 00
weight: 90
lesson: 00
date: 2022-12-18
---

*<center><mark>"Never have a good idea on a Friday" - James Campbell, MD</mark></center>*

<html>
  <head>
    <link href="{{site.baseurl}}/assets/style_guide.css" rel="stylesheet">
    {% assign grouped_chapter = site.mcspages | group_by: "chapter" %}
    {% assign sorted_chapters = grouped_chapter | sort: "name" %}
    {% assign sorted_chapter = sorted_chapters | where: "name",page.chapter %}
    </head>
  <body>
    <div>
      <ul>
        {% for y in sorted_chapter %}
          <li> Chapter {{ y.name }} -
            <a href="/{{ y.items[0].url }}"> 
              {{ y.items[0].title }}
            </a> 
            {% assign sectionsorted = y.items | group_by: "section" %}
            {% assign lessonsorted = sectionsorted | sort: "name" %}
            <ul>
              {% for x in lessonsorted %}
                {% if x.items[0].title != y.items[0].title %}
                  <li>
                    <a href="{{site.baseurl}}{{x.items[0].url}}"> 
                    {{ x.items[0].title }} 
                    </a>
                  {% assign yearTitlesSorted = x.items | sort: "lesson" %} 
                    <ul>
                      {% for t in yearTitlesSorted %}
                          {% if t.title != y.items[0].title %}
                            {% if t.title != x.items[0].title %}
                              <li>
                                <a href="{{site.baseurl}}{{t.url}}"> 
                                  {{ t.title }} 
                                </a>
                              </li>
                            {% endif %}
                          {% endif %}
                      {% endfor %}
                    </ul>
                  </li>
                {% endif %}
              {% endfor %}
            </ul>
          </li>
        {% endfor %}
      </ul>
    </div>
  </body>
</html>