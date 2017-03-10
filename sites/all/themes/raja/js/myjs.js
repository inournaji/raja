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


    //jQuery(mobile_img).slick({
    //    infinite: true,
    //    autoplay: true,
    //    arrows: false,
    //    dots:true,
    //    variableWidth:true,
    //    responsive: [
    //        {
    //            breakpoint: 1024,
    //            settings: {
    //                slidesToShow: 3,
    //            }
    //        },
    //        {
    //            breakpoint: 600,
    //            settings: {
    //                slidesToShow: 2,
    //            }
    //        },
    //        {
    //            breakpoint: 480,
    //            settings: {
    //                slidesToShow: 1,
    //            }
    //        }
    //    ]
    //});

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
            start: [ 1, 10 ],
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

        snapSlider.noUiSlider.on('slide', function( values, handle ) {
            snapValuesRam[handle].value = values[handle];
            document.getElementById('ram-min-value').innerHTML = document.getElementById('edit-field-ram-value-min').value;
            document.getElementById('ram-max-value').innerHTML = document.getElementById('edit-field-ram-value-max').value;
            jQuery('#edit-field-ram-value-min').change();
            jQuery('#edit-field-ram-value-max').change();
        });

      /* END RAM */


      /* SCREEN */

        var snapSlider = document.getElementById('slider-snap-screen');

        noUiSlider.create(snapSlider, {
            start: [ 3, 13 ],
            snap: true,
            connect: true,
            range: {
                'min': 3,
                '10%': 3.5,
                '20%': 4,
                '30%': 4.7,
                '40%': 5.5,
                '50%': 6,
                '60%': 6.5,
                '70%': 7,
                '80%': 9,
                '90%': 10,
                'max': 13
            }
        });

        var snapValuesScreen = [
            document.getElementById('edit-field-screen-size-value-min'),
            document.getElementById('edit-field-screen-size-value-max')
        ];

        snapSlider.noUiSlider.on('slide', function( values, handle ) {
            snapValuesScreen[handle].value = values[handle];
            document.getElementById('screen-min-value').innerHTML = document.getElementById('edit-field-screen-size-value-min').value;
            document.getElementById('screen-max-value').innerHTML = document.getElementById('edit-field-screen-size-value-max').value;
            jQuery('#edit-field-screen-size-value-min').change();
            jQuery('#edit-field-screen-size-value-max').change();

        });

      /* END SCREEN */

      /* PRICE */

        var snapSlider = document.getElementById('slider-snap-price');

        noUiSlider.create(snapSlider, {
            start: [ 10000, 600000 ],
            snap: true,
            tooltips: [ false, wNumb({}), true ],
            connect: true,
            range: {
                'min': 10000,
                '10%': 25000,
                '20%': 50000,
                '30%': 75000,
                '40%': 100000,
                '50%': 150000,
                '60%': 200000,
                '70%': 300000,
                '80%': 400000,
                '90%': 500000,
                'max': 600000
            }
        });

        var snapValuesPrice = [
            document.getElementById('edit-field-price-value-min'),
            document.getElementById('edit-field-price-value-max')
        ];

        snapSlider.noUiSlider.on('slide', function( values, handle ) {
            snapValuesPrice[handle].value = values[handle];
            document.getElementById('price-min-value').innerHTML = parseInt( document.getElementById('edit-field-price-value-min').value).toString();
            document.getElementById('price-max-value').innerHTML =  parseInt(document.getElementById('edit-field-price-value-max').value).toString();
            jQuery('#edit-field-price-value-min').change();
            jQuery('#edit-field-price-value-max').change();
        });

      /* END PRICE */

    }

  /* END MOBILE RANGE SLIDER */
//    Warranty page
    jQuery(document).ajaxSuccess(function() {
        jQuery( "body" ).addClass('submit')
    });


    // change all selects first item text
    jQuery('select option:first-child').text('All')
});