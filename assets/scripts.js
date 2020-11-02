/**
 * @description carousel mount and init
 */
document.addEventListener('DOMContentLoaded', () => {
    // get elements carousel
    var elems = document.querySelectorAll('.carousel');
    elems.forEach(function(elem) {
        var carrousel = "";
        // find for elements in tag p
        elem.childNodes[1].childNodes.forEach( (elem) => {
            if (elem.outerHTML) {
                carrousel += `<div class="carousel-item">${elem.outerHTML}</div>`;
            }
        });
        elem.innerHTML = carrousel;
    });
    // init carousel
    M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});

/**
 * @description galery mount and init
 */
document.addEventListener('DOMContentLoaded', () => {
    // get elements galery
    var elems = document.querySelectorAll('.galery');
    elems.forEach(function(elem) {
        var galery = "";
        elem.childNodes[1].childNodes.forEach( (elem) => {
            if (elem.outerHTML) {
                elem.className = "materialboxed w100"; 
                M.Materialbox.init(elem);
            }
        });
        elem.childNodes[1].childNodes.forEach( (elem) => {
            if (elem.outerHTML) {
                galery += `<div class="col s12 m6">${elem.outerHTML}</div>`;
            }
        });
        elem.innerHTML = galery; 
    });
});

/**
 * @description sidenav menu init
 */
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});

/**
 * @description image zoom init
 */
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
});