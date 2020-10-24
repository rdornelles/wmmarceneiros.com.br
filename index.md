---
layout: default
---

<div id="slider-home" markdown="1">
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
</div>
<script>
slider ({
    container: '#slider-home p',
    mouseDrag: true,
    autoplay: true,
    items: 1,
});
</script>

{%if site.posts %}
<div class="row">
    {%for post in site.posts %}
    <div class="col s12 m6 l3">
        <img src="{{ post.image }}">
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.description }}</p>
    </div>
    {% endfor %}
</div>
{% endif %}