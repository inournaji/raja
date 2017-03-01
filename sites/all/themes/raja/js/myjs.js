jQuery(document).ready(function() {

  /* LOADER */

    jQuery(window).load(function () {
        jQuery(".spinner").fadeOut("slow");
    });

  /* SLICK SLIDER */


  /* MULTI IMAGE INSIDE THE MODAL */
    var mobile_img = ".mob-multi-img";

  /* BIG SLIDER */
    var big_slider = ".big-slider > .view-content";


    jQuery(mobile_img).slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots:true,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    jQuery(big_slider).slick({
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
    });


    var mini_slider = ".home-page-mini-slider >  .view-content";

    jQuery(mini_slider).slick({
        cssEase: 'linear',
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
    });

  /* END SLICK SLIDER */


  /* MOBILE RANGE SLIDER */

    if (location.pathname.split("/")[1] == "mobiles"){

      /* RAM */

        var snapSlider = document.getElementById('slider-snap-ram');

        noUiSlider.create(snapSlider, {
            start: [ 1, 4 ],
            snap: true,
            connect: true,
            range: {
                'min': 1,
                '10%': 2,
                '20%': 3,
                '30%': 4,
                '40%': 5,
                '50%': 6,
                '60%': 7,
                '70%': 8,
                '80%': 9,
                'max': 10
            }
        });

        var snapValuesRam = [
            document.getElementById('edit-field-ram-value-min'),
            document.getElementById('edit-field-ram-value-max')
        ];

        snapSlider.noUiSlider.on('update', function( values, handle ) {
            snapValuesRam[handle].value = values[handle];
            document.getElementById('ram-min-value').innerHTML = document.getElementById('edit-field-ram-value-min').value.change;
            document.getElementById('ram-max-value').innerHTML = document.getElementById('edit-field-ram-value-max').value.change;
        });

      /* END RAM */


      /* SCREEN */

        var snapSlider = document.getElementById('slider-snap-screen');

        noUiSlider.create(snapSlider, {
            start: [ 1, 4 ],
            snap: true,
            connect: true,
            range: {
                'min': 1,
                '10%': 1.5,
                '20%': 2,
                '30%': 2.5,
                '40%': 3,
                '50%': 3.5,
                '60%': 4,
                '70%': 4.5,
                '80%': 5,
                'max': 6
            }
        });

        var snapValuesScreen = [
            document.getElementById('edit-field-screen-size-value-min'),
            document.getElementById('edit-field-screen-size-value-max')
        ];

        snapSlider.noUiSlider.on('update', function( values, handle ) {
            snapValuesScreen[handle].value = values[handle];
            document.getElementById('screen-min-value').innerHTML = document.getElementById('edit-field-screen-size-value-min').value;
            document.getElementById('screen-max-value').innerHTML = document.getElementById('edit-field-screen-size-value-max').value;
        });

      /* END SCREEN */

      /* PRICE */

        var snapSlider = document.getElementById('slider-snap-price');

        noUiSlider.create(snapSlider, {
            start: [ 10000, 30000 ],
            snap: true,
            connect: true,
            range: {
                'min': 10000,
                '10%': 15000,
                '20%': 20000,
                '30%': 30000,
                '40%': 50000,
                '50%': 70000,
                '60%': 100000,
                '70%': 150000,
                '80%': 200000,
                'max': 250000
            }
        });

        var snapValuesPrice = [
            document.getElementById('edit-field-price-value-min'),
            document.getElementById('edit-field-price-value-max')
        ];

        snapSlider.noUiSlider.on('update', function( values, handle ) {
            snapValuesPrice[handle].value = values[handle];
            document.getElementById('price-min-value').innerHTML = document.getElementById('edit-field-price-value-min').value;
            document.getElementById('price-max-value').innerHTML = document.getElementById('edit-field-price-value-max').value;
        });

      /* END PRICE */

    }

  /* END MOBILE RANGE SLIDER */

});