---
title: "Basic_Stellar_Astrophysics"
layout: archive
permalink: /Stellar Astrophysics/Basic_Stellar_Astrophysics/
sidebar_main: true
sidebar:
  nav: "sidebar-category"
  enabled: true
---

{% assign posts_filtered = site.posts 
  | where_exp: "p", "p.categories contains 'Stellar Astrophysics'"
  | where_exp: "p", "p.categories contains 'Basic_Stellar_Astrophysics'" %}

<ul>
{% for post in posts_filtered %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>