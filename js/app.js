
$(document).ready(function () {

    setupPieCharts();
    smoothScrollToPageAnchors(); 
    fadeUpCardsOnView();
    enableStickyNavBar();
    
    createGallery(); 
 
 
});



function setupPieCharts(){
    
    const loadPieCharts = function () {
        $('.skills-pie').pieChart({
            barColor: '#F7BB06',
            trackColor: '#636363',
            lineCap: 'square',
            lineWidth: 12,
            size: 100,
            animate: {
                duration: 2500,
                enabled: true
            },
            onStep: function (from, to, percent) {
                $(this.element).find('.pie-value').text(Math.round(percent) + '%');
            },

        });    
    }

    /*ANIMATE PIES WHEN IN VIEWPORT*/
    $(window).scroll(function () {
        const hT = $('#demo-pie-3').offset().top,
            hH = $('#demo-pie-3').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT - wH), wS);
        if (wS > (hT + hH - wH)) {
            loadPieCharts();
        }

    });

}

function smoothScrollToPageAnchors() {
    /*NAV LINKS SCROLL TO ANCHOR*/
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40
        }, 1000);
    });
}

function fadeUpCardsOnView() {

    $(window).scroll(function () {


        let wS = $(window).scrollTop(),
            wH = $(window).height();
        //                    
        //      loop through all the .exp_card elements
        $(".exp_card, .github-card").each(function () {

            let hT = $(this).offset().top,
                hH = $(this).outerHeight() / 4; /*divide by two to load element once 25% of the element is in viewport*/

            if (wS > (hT + hH - wH)) {
                $(this).css('visibility', 'visible');
                $(this).addClass('animated fadeInUp');
            }

        });
    });
}

function enableStickyNavBar() {
    /*STICKY NAV EFFECT*/
    const mn = $(".main_nav_container");
    const mns = "main-nav-scrolled";
    const hdr = $('header').height();


    $(window).scroll(function () {
        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
            $('body').addClass('pt-180');

        } else {
            mn.removeClass(mns);
            $('body').removeClass('pt-180');
        }
    });
}