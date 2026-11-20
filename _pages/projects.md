---
layout: page
title: Projects
permalink: /projects/
description: Selected work across AI, robotics, systems, and computational biology.
nav: true
nav_order: 1
---

<!-- pages/projects.md -->
<div class="projects">
  {% assign featured_projects = site.projects | where: "featured", true | sort: "featured_order" %}
  {% assign sorted_projects = site.projects | sort: "importance" %}

{% if featured_projects.size > 0 %}

<section class="project-section" aria-labelledby="selected-projects">
<h2 id="selected-projects" class="project-section-title">Selected Projects</h2>
<div class="featured-project-list">
{% for project in featured_projects %}
{% include projects_featured.liquid %}
{% endfor %}
</div>
</section>
{% endif %}

  <section class="project-section" aria-labelledby="more-projects">
    <h2 id="more-projects" class="project-section-title">More Projects</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {% for project in sorted_projects %}
        {% unless project.featured %}
          {% include projects.liquid %}
        {% endunless %}
      {% endfor %}
    </div>
  </section>
</div>
