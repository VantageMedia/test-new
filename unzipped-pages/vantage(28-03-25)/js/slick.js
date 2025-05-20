 $('.slider-nav').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   dots: false,
   loop:true,
   focusOnSelect: true,
   nextArrow:"<button type='button' class='slick-next'><svg width='15' height='27' viewBox='0 0 15 27' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.999998 0.750001L13.5 13.25L1 25.75' stroke='#151515' stroke-width='2'/></svg></button>",
   responsive: [
    {
      // mobile portrait
      breakpoint: 479,
      settings: {
        slidesToShow: 1
      }
    }
  ]
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });

 