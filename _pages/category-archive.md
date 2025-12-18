---
title: "Posts by Category"
layout: single
permalink: /categories/
author_profile: true
sidebar:
  nav: "sidebar-category"
---

<div class="category-grid">
  {% for category_hash in site.data.categories %}
    {% assign slug = category_hash[0] %}
    {% assign info = category_hash[1] %}
    <a href="#{{ slug }}" class="category-card">
      <div class="category-icon">
        <i class="{{ info.icon }}"></i>
      </div>
      <div class="category-name">
        {{ info.name }}
      </div>
    </a>
  {% endfor %}
</div>

{% for category_hash in site.data.categories %}
  {% assign slug = category_hash[0] %}
  {% assign info = category_hash[1] %}
  <div id="{{ slug }}" class="category-section">
    <h2><i class="{{ info.icon }}"></i> {{ info.name }}</h2>
    <p>{{ info.description }}</p>
    <ul>
      {% assign found = false %}
      {% for post in site.posts %}
        {% if post.categories contains info.name or post.categories contains slug %}
          <li><a href="{{ post.url }}">{{ post.title }}</a></li>
          {% assign found = true %}
        {% endif %}
      {% endfor %}
      {% if found == false %}
        <li>No posts yet.</li>
      {% endif %}
    </ul>
  </div>
{% endfor %}
