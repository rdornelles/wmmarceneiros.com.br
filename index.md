---
layout: full
redirect_from:
---

<br/>
{% include facebook.html%}
<br/>

<section class="container">
<div class="carousel carousel-slider" markdown="1">
![deck para piscina](/images/slide_wm_000.jpg)
![desck hidromassagem](/images/slide_wm_001.jpg)
![deck para piscina](/images/slide_wm_002.jpg)
![deck hidromassagem](/images/slide_wm_003.jpg)
![deck para piscina](/images/slide_wm_004.jpg)
![deck hidromassagem](/images/slide_wm_005.jpg)
![pergolado](/images/slide_wm_006.jpg)
</div>
</section>

{%if site.pages %}
<br/>
<section class="row container">
    {%for page in site.pages %}
    {% if page.category == "galeria" %}
    <a class="col item s6 m3" title="{{ page.description }}" href="{{ page.url }}">
        <span>{{ page.title }}</span>
        <img src="{{ page.image }}" alt="{{ page.description }}" class="border w100">
    </a>
    {% endif %}
    {% endfor %}
<section>
{% endif %}
