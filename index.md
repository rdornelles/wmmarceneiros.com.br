---
layout: full
redirect_from:
  - fotos
---

<br/>
{% include facebook.html%}
<br/>

<section class="container">
<div class="carousel carousel-slider" markdown="1">
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
</div>
</section>

{%if site.pages %}
<br/>
<section class="row container">
    {%for page in site.pages %}
    {% if page.category == "galeria" %}
    <a class="col item s6 m3" title="{{ page.description }}" href="{{ page.url }}">
        <span>{{ page.title }}</span>
        <img src="{{ page.image }}" alt="{{ page.description }}" class="border">
    </a>
    {% endif %}
    {% endfor %}
<section>
{% endif %}