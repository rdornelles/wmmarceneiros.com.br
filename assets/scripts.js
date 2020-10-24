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
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});

/**
 * @description sidenav menu init
 */
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

/**
 * @description image zoom init
 */
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});