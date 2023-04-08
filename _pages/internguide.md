---
title: 2023 Intern Guide
author: J. Austin Straley, DO
date: 2022-11-14
layout: post
permalink: /internguidepages
---

<html>
  <head>
    <link href="{{site.baseurl}}/assets/style_guide.css" rel="stylesheet">
    </head>
  <body>
    <div>
      <br>
      <center><mark>
        Disclaimer: This guide is intended for residents of the CAMC health system only. This is not endorsed nor is it recommended by WVU/CAMC.
        </mark></center>
       <center><h5><i><strong>
        I also don’t recommend this guide, but it’s better than nothing
        </strong></i></h5></center>
       <center><h5>
        By: J. Austin Straley, DO
        </h5></center>
      <br>
      </div>
 
{%- assign grouped_chapter = site.internguidepages -%}
{%- assign sorted_chapters = grouped_chapter | sort: "chapter" -%}
    {%- for y in sorted_chapters -%}
              {{ y.chapter }}<br>
                          {%- endfor -%}



{% comment %}
{%- assign sorted_chapters = grouped_chapter | sort: "name" -%}
  <ul>
    {%- for y in sorted_chapters -%}
      <h2>
        <a href="{{site.baseurl}}{{y.items[0].url}}"> 
          {{ y.name }} - {{ y.items[0].title }}
        </a>
      </h2> 
          <ul>
            {%- assign yearTitlesSorted = y.items | sort: "lesson" -%}
            {%- for t in yearTitlesSorted -%}
                {%- if t.title != y.items[0].title -%}
                  {%- if t.title != x.items[0].title -%}
                    <li>
                      <a href="{{site.baseurl}}{{t.url}}"> 
                        {{ t.title }} 
                      </a>
                    </li>
                  {%- endif -%}
                {%- endif -%}
            {%- endfor -%}
          </ul>
    {%- endfor -%}
  </ul>
</body>
{% endcomment %}