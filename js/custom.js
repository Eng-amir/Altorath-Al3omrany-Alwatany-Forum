

    var $window = $(window);

    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // $('.card-title').addClass('acc-title');
    $(document).ready(function() {


    $('[data-toggle="tooltip"]').tooltip();
    //$('#showTooltip').tooltip('toggleEnabled')
    $('.header').on('click', '.search-toggle', function (e) {
        var selector = $(this).data('selector');
        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');

        e.preventDefault();
    });

    //Circular Carousel
        scrollinit("carousel2", 3, 1, true, true, true, true, true);
        let bsHeight = document.getElementsByClassName('bespoke-active')[0].clientHeight;
        $('#articlehold').css({'height':bsHeight+'px'});

    //countdown timer

   var countDownDate = new Date("Dec 5, 2019 15:37:25").getTime();

//Update the count down every 1 second
   var x = setInterval(function () {

       // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        //console.log(distance)
        // Time calculations for days, hours, minutes and seconds


        var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
        var weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = "<div class='timer'>" +
            "<ul class='list-inline text-center'>" +
            "<li class='list-inline-item'>" + "<strong class='numbers'>" + months + "</strong>" + "<br />" + "شهر " + "</li>" +
            "<li class='list-inline-item'>" + "<strong class='numbers'>" + weeks + "</strong>" + "<br />" + "أسبوع " + "</li>" +
            "<li class='list-inline-item'>" + "<strong class='numbers'>" + days + "</strong>" + "<br />" + "يوم " + "</li>" +
            "<li class='list-inline-item'>" + "<strong class='numbers'>" + hours + "</strong>" + "<br />" + "ساعة " + "</li>" +
            "</ul>" +
            "</div>";




        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "انتهت";
        }
    }, 1000);

    //speakers slider

        $('#speakers').owlCarousel({
            //stagePadding: 100,
            rtl: true,
            loop: true,
            // center: false,
            items: 7,
            // mouseDrag: true,
            dots: false,
            responsiveClass: true,
            margin: 10,
            lazyLoad: true,
            autoplay: true,
            //autoplayTimeout: 8000,
            smartSpeed: 500,
            nav: true,
            navText: ['<img src="images/small-right-arrow.png">', '<img src="images/small-left-arrow.png">'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                768: {
                    items: 4
                },
                991: {
                    items: 5
                },
                1200: {
                    items: 7
                }
            }
        });

    //platini slider

        $('#platini-slider').owlCarousel({
            //stagePadding: 100,
            rtl: true,
            loop: false,
            rewind: true,
            onInitialized: callback,
            //center: false,
            //items: 5,
            // mouseDrag: true,
            dots: false,
            responsiveClass: true,
            margin: 10,
            lazyLoad: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            nav: false,
            navText: ['<img src="images/small-right-arrow.png">', '<img src="images/small-left-arrow.png">'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }


        });


    function callback(event) {
        var items = event.item.count;
        console.log(items);
        if (items <= 5) {
            // console.log("less than 5");
            this.options.rewind = false;
        }
        else{
            // console.log("more than 5");
            this.options.rewind = true;
        }
    }

    //golden slider

        $('#golden-slider').owlCarousel({
            //stagePadding: 100,
            rtl: true,
            loop: false,
            rewind: true,
            onInitialized: callbackGolden,
            //center: false,
            //items: 5,
            // mouseDrag: true,
            dots: false,
            responsiveClass: true,
            margin: 10,
            lazyLoad: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            nav: false,
            navText: ['<img src="images/small-right-arrow.png">', '<img src="images/small-left-arrow.png">'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }


        });


    function callbackGolden(event) {
        var items = event.item.count;
        console.log(items);
        if (items <= 5) {
            // console.log("less than 5");
            this.options.rewind = false;
        }
        else{
            // console.log("more than 5");
            this.options.rewind = true;
        }
    }

    //fedi slider

        $('#fedi-slider').owlCarousel({
            //stagePadding: 100,
            rtl: true,
            loop: false,
            rewind: true,
            onInitialized: callbackFedi,
            //center: false,
            //items: 5,
            // mouseDrag: true,
            dots: false,
            responsiveClass: true,
            margin: 10,
            lazyLoad: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            nav: false,
            navText: ['<img src="images/small-right-arrow.png">', '<img src="images/small-left-arrow.png">'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }


        });


    function callbackFedi(event) {
        var items = event.item.count;
        console.log(items);
        if (items <= 5) {
            // console.log("less than 5");
            this.options.rewind = false;
        }
        else{
            // console.log("more than 5");
            this.options.rewind = true;
        }
    }

    //mobader slider

        $('#mobader-slider').owlCarousel({
            //stagePadding: 100,
            rtl: true,
            loop: false,
            rewind: true,
            onInitialized: callbackMobader,
            //center: false,
            //items: 5,
            // mouseDrag: true,
            dots: false,
            responsiveClass: true,
            margin: 10,
            lazyLoad: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            nav: false,
            navText: ['<img src="images/small-right-arrow.png">', '<img src="images/small-left-arrow.png">'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }


        });


    function callbackMobader(event) {
        var items = event.item.count;
        console.log(items);
        if (items <= 5) {
            // console.log("less than 5");
            this.options.rewind = false;
        }
        else{
            // console.log("more than 5");
            this.options.rewind = true;
        }
    }

    //testimonials slider

        $('#testimonials-slider').owlCarousel({
            //stagePadding: 100,
            rtl: true,
            loop: true,
            // center: false,
            items: 1,
            // mouseDrag: true,
            dots: true,
            responsiveClass: true,
            margin: 20,
            lazyLoad: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 500,
            nav: false,
            //navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        });

    //article slider
    $('#article-slider').owlCarousel( {
        stagePadding: 0,
        rtl:true,
        loop: true,
        // rewind:true,
        //center: true,
        items: 1,
        autoHeight:false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        dots:false,
        responsiveClass:true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 500,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        nav:true,
        navText: ['<img src="images/slider-right-arrow.png">','<img src="images/slider-left-arrow.png">'],

    });

    //related-images2
    $('#related-images').owlCarousel( {
        //stagePadding: 100,
        rtl:true,
        loop: true,
        // center: false,
        items: 5,
        // mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 20,
        lazyLoad:true,
        autoplay: true,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        responsive: {
            0:{
                stagePadding: 0,
                items:1,
                // nav: false,
                // loop:true,

            },
            480:{
                items:2,
                stagePadding: 0,
                loop:true
            },
            768:{
                items:3,
                stagePadding: 0,
                loop:true
            },
            991:{
                items:4,
                loop:true

            },
            1200:{
                items:5,
                loop:true
            }
        }
    });

    //related videos
    $('#related-videos').owlCarousel( {
        //stagePadding: 100,
        rtl:true,
        loop: true,
        //merge: false,
        video:true,
        lazyLoad:false,
        videoWidth: true, // Default false; Type: Boolean/Number
        videoHeight: 260, // Default false; Type: Boolean/Number
        center: false,
        merge:false,
        items: 3,
        // mouseDrag: true,
        dots:false,
        responsiveClass:true,
        margin: 10,
        autoplay: true,
        //autoplayTimeout: 8000,
        smartSpeed: 500,
        nav:true,
        navText: ['<img src="images/small-right-arrow.png">','<img src="images/small-left-arrow.png">'],
        responsive: {
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
});

    $window.on('load', function(){


    });
