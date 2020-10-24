---
layout: default
---

#### Decks, pergolados, piso taboão, escadas e mais... ####
<div class="carousel carousel-slider" markdown="1">
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
![img](http://www.wmmarceneiros.com.br/slider_inicial_files/csss_images1/p_20161011_181809.jpg)
</div>


#### 30 Anos de Experiência ####
{%if site.posts %}
<div class="row">
    {%for post in site.posts %}
    <div class="col s12 m6 l3">
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="{{ post.image }}">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{ post.title }}<i class="material-icons right">more_vert</i></span>
            <p><a href="{{ post.url }}">galeria</a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{ post.title }}<i class="material-icons right">close</i></span>
            <p>{{ post.description }}</p>
        </div>
    </div>
    </div>
    {% endfor %}
</div>
{% endif %}