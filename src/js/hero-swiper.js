var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    pagination: {
        el: '.hero-swiper-pagination',
        type: 'fraction',

        renderFraction: function (currentClass, totalClass) {
            const line = '&nbsp;&nbsp;&#9135;&#9135;&nbsp;';
            return `0<span class="${currentClass}"></span> ${line} 0<span class="${totalClass}"></span>`;
        },
    },
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    loop: true ,
});
   