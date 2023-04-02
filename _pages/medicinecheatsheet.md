---
title: Medicine Cheatsheet
author: J. Austin Straley, DO
date: 2022-11-15
layout: post
permalink: /medicinecheatsheet
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
       <center><h5>
        By: J. Austin Straley, DO
        </h5></center>
      <br>
      </div>
{%- assign grouped_chapter = site.mcspages | group_by: "chapter" -%}
{%- assign sorted_chapters = grouped_chapter | sort: "name" -%}
  <ul>
    {%- for y in sorted_chapters -%}
    <h2><a href="{{site.baseurl}}{{y.items[0].url}}"> Chapter {{ y.name }} - {{ y.items[0].title }}</a></h2> 
      {%- assign sectionsorted = y.items | group_by: "section" -%}
      {%- assign lessonsorted = sectionsorted | sort: "name" -%}
        <ul>
          {%- for x in lessonsorted -%}
            {%- if x.items[0].title != y.items[0].title -%}
              <li>
                <a href="{{site.baseurl}}{{x.items[0].url}}"> 
                 {{ x.items[0].title }} 
                </a> 
                <ul>
                  {%- assign yearTitlesSorted = x.items | sort: "lesson" -%}
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
              </li>
            {%- endif -%}
          {%- endfor -%}
        </ul>
    {%- endfor -%}
  </ul>
</body>