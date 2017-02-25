jQuery(document).ready(function() {

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


/* var $grid = jQuery('.mobile-grid .view-content').isotope({
	// options
	itemSelector: '.mobile-item',
	layoutMode: 'fitRows',
	getSortData: {
	    name: '.mobile-name'
	}
});
*/

jQuery('.btn-filter').on( 'click' , function() {
  var filterValue = jQuery( this ).attr('data-filter');
  var text = jQuery(this).html();
  $grid.isotope({ filter: filterValue });
  jQuery('.block-title').html(text);
});


});