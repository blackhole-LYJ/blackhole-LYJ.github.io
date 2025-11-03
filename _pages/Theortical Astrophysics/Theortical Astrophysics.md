---
title: "Theortical Astrophysics"
layout: archive
permalink: /Theortical Astrophysics/
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

{%- assign filtered =
   site.posts
   | where_exp: "p", "p.categories contains 'Theortical Astrophysics'"
-%}

{%- if filtered.size > 0 -%}
  {%- for post in filtered -%}
    {%- include archive-single.html type=page.entries_layout -%}
  {%- endfor -%}
{%- else -%}
  <p>준비 중인 글입니다. 곧 업데이트될 예정입니다.</p>
{%- endif -%}
