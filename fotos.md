---
title: Galeria de Fotos
---

## Galeria de Fotos ##

{%if site.pages %}>
{%for page in site.pages %}
{% if page.category == "galeria" %}
<section class="row">
    <img src="{{ page.image }}" alt="{{ page.title}} <"/>
    <span>
        <a href="{{ page.url }}"><h5>{{page.title}}</h5></a>
        <p>{{ page.description }}</p>
    </span>
</section>
{% endif %}
{% endfor %}
{% endif %}