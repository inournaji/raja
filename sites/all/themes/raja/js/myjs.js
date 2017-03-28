//update mobile grid colors
function update_mobile_colors() {
    if(jQuery('.view.view-mobile-grid').length > 0) {
        jQuery('.view.view-mobile-grid .col-lg-3').each(function () {
            console.log(jQuery.trim(jQuery(this).find('.views-field-field-brand-color').text()));
            var color = jQuery.trim(jQuery(this).find('.views-field-field-brand-color').text());
            jQuery(this).find('.mobile-name').css('background', color);
            var box_shadow = '0 0 5px 1px ' + color;
            jQuery(this).find('.mobile').css('box-shadow', box_shadow)
        });
    }
}
function update_accessories_color() {
    if(jQuery('.accessories').length > 0) {
        jQuery('.accessories .accessories-item').each(function() {
            var color = jQuery.trim(jQuery(this).find('.views-field.views-field-field-brand-color.hidden').text());
            jQuery(this).find('.accessories-title').css('background', color);
            var box_shadow = '0 0 5px 1px ' + color;
            jQuery(this).find('.views-field-nothing a').css('box-shadow', box_shadow)
        })
    }
}
jQuery(document).ready(function() {
    //update_mobile_colors();
    //update_accessories_color();
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
        arrows: false,
        dots: true
    });


    var mini_slider = ".home-page-mini-slider >  .view-content";
    jQuery(mini_slider).each(function () {
        if(jQuery(this).find('>div').length > 3 ) {
            jQuery(this).slick({
                cssEase: 'linear',
                adaptiveHeight: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
            });
        }
    });


  /* END SLICK SLIDER */


  /* MOBILE RANGE SLIDER */

    if (location.pathname.split("/")[1] == "mobiles"){

      /* RAM */

        var snapSlider = document.getElementById('slider-snap-ram');
        jQuery('#edit-field-ram-value-min').val('1').change();
        jQuery('#edit-field-ram-value-max').val('10').change();

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

        jQuery('#edit-field-screen-size-value-min').val('3').change();
        jQuery('#edit-field-screen-size-value-max').val('13').change();

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

      //default hidden filters values
        jQuery('#edit-field-price-value-min').val('25000').change();
        jQuery('#edit-field-price-value-max').val('600000').change();

        var snapSlider = document.getElementById('slider-snap-price');

        noUiSlider.create(snapSlider, {
            start: [ 10000, 600000 ],
            snap: true,
            connect: true,
            range: {
                'min': 25000,
                '10%': 50000,
                '20%': 75000,
                '30%': 100000,
                '40%': 150000,
                '50%': 200000,
                '60%': 300000,
                '70%': 400000,
                '80%': 500000,
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
        jQuery( "body" ).addClass('submit');
        //update_mobile_colors();
        //update_accessories_color();
    });
    new WOW().init();

    // change all selects first item text
    jQuery('select option:first-child').text('All')
    if(jQuery('#block-block-8').length > 0) {
        jQuery('#block-block-8').insertAfter('#edit-field-screen-size-value-wrapper')
        jQuery('form#views-exposed-form-mobile-grid-block .views-exposed-widgets > div:not(:first-child), #block-block-8').wrapAll('<div class="panel panel-default"><div id="collapse1" class="panel-collapse collapse"></div></div>')
        jQuery('<div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">'+ Drupal.t('Advanced Search')+' </a></h4></div>').insertBefore('#collapse1');
    }
});