---
layout: full
redirect_from:
---

<br/>
{% include facebook.html%}
<br/>

<section class="container">
<div class="carousel carousel-slider" markdown="1">
![Lareira](/images/variedade_mirante_zona_sul.jpg)
![deck](/images/pergolas_wm_001.jpg)
![deck](/images/deck_wm_002.jpg)
![deck](/images/escadas_wm_003.jpg)
![Portão de maderia](/images/variedade_ponte_jardim_0.jpg)
![deck](/images/pergolas_wm_005.jpg)
![deck](/images/deck_wm_006.jpg)
![deck](/images/escadas_wm_007.jpg)
![Fachada de loja](/images/variedade_fachada_loja.jpg)
![deck](/images/pergolas_wm_009.jpg)
![deck](/images/deck_wm_009.jpg)
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
