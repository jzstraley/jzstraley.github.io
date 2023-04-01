---
title: News and To-Dos
author: J. Austin Straley, DO
date: 2023-03-27
layout: post
permalink: /news
---

### To-Dos
- 05/08/2023 - Photo Session #2
- 05/04/2023 - Photo Session #1 
- 04/24/2023 - Photo Signups [#Due](#tag)[#Required](#tag)
- 04/14/2023 - Clinician Educator Track and the upcoming PGY2 representation on our Program Effectiveness Committee (PEC) [#Due](#tag)[#Required](#tag)
- 04/11/2023 - Collective Outreach & Research Engagement (CORE) Survey [#Due](#tag)
- 04/09/2023 - ACGME Program Survery [#Due](#tag)
- 04/01/2023 - Resident Spotlights [#Due](#tag)[#Required](#tag)

<!-- not built -->
### News
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>