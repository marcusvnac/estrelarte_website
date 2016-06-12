$(document).ready(function(){
  $('.portfolio-list').slick({	  
	  infinite: true,
	  dots: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  rows: 1,
	  autoplay: true,
	  variableWidth: false,
	  adaptiveHeight: true,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: false
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false
		  }
		}
	  ]
  });
  
});


