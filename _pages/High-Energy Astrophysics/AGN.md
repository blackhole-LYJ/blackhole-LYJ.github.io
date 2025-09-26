---
title: "AGN"
layout: archive
permalink: /High-Energy Astrophysics/AGN/
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

{%- assign filtered =
   site.posts
   | where_exp: "p", "p.categories contains 'High-Energy Astrophysics'"
   | where_exp: "p", "p.categories contains 'AGN'"
-%}

{%- for post in filtered -%}
  {%- include archive-single.html type=page.entries_layout -%}
{%- endfor -%}