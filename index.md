---
layout: full
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

{%if site.posts %}
<br/>
<section class="row container">
    {%for post in site.posts %}
    <a class="col item s6 m3" alt="{{ post.description }}" href="{{ post.url }}">
        <span>{{ post.title }}</span>
        <img src="{{ post.image }}" alt="{{ post.description }}">
    </a>
    {% endfor %}
<section>
{% endif %}
