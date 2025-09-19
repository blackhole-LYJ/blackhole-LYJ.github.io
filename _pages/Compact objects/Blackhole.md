---
title: "Blackhole"
layout: archive
permalink: /Compact objects/Blackhole/
sidebar_main: true
types: posts
taxonomy:
sidebar:
  nav: "sidebar-category"
  enabled: true
---

{%- assign filtered =
   site.posts
   | where_exp: "p", "p.categories contains 'Compact objects'"
   | where_exp: "p", "p.categories contains 'Blackhole'"
-%}

{%- for post in filtered -%}
  {%- include archive-single.html type=page.entries_layout -%}
{%- endfor -%}