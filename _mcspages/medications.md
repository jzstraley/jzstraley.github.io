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

<html>
  <head>
    <link href="{{site.baseurl}}/assets/style_guide.css" rel="stylesheet">
{%- assign grouped_chapter = site.medications | group_by: "chapter" -%}
{%- assign sorted_chapters = grouped_chapter | sort: "name" -%}
    </head>
  <body>
    <div>
  <ul>
    {%- for y in sorted_chapters -%}
    <h2><a href="{{site.baseurl}}{{y.items[0].url}}"> Chapter {{ y.name }} - {{ y.items[0].title }}</a></h2> 
      {%- assign sectionsorted = y.items | group_by: "section" -%}
      {%- assign lessonsorted = sectionsorted | sort: "name" -%}
        <ul>
          {%- for x in lessonsorted -%}
            {%- if x.items[0].title != y.items[0].title -%}
            {%- endif -%}
          {%- endfor -%}
        </ul>
    {%- endfor -%}
  </ul>
    </div>
  </body>
</html>