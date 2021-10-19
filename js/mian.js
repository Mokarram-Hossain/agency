
$(document).ready(function(){
  
  // sidebar=================
  $('.sidebar-btn').click(function(){
    $('.sidebar').addClass('slide');
  });
  $('.close-btn').click(function(){
    $('.sidebar').removeClass('slide');
  });
  $('.menu-item').click(function(){
    $('.sidebar').removeClass('slide');
  });
  

// sticky navbar============================
window.addEventListener('scroll',function(){
		const header = document.querySelector('.header-section');
		header.classList.toggle("sticky",window.scrollY > 0);
	});

// cursor======================================
var cursor1 = document.querySelector('.cursor1');
var cursor2 = document.querySelector('.cursor2');

document.addEventListener("mousemove", function(e){
  cursor1.style.cssText=cursor2.style.cssText = "left:" + e.clientX + "px; top:" + e.clientY  + "px;";
});





 // isotope================
 var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// active filter-btn======================

// });

// portfolio slider========================
$('.testimonial-active').slick({
    centerMode: false,
    arrows: false,
    dots: true,
    centerPadding: '0px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
  
//   blog slick slider============================
$('.blog-active').slick({
  centerMode: false,
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});
// magnefic-popup=======
$('.image-popup').magnificPopup({
  type: 'image'
  // other options
});

// odometer================

// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

// scroll-btn========


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('.scroll-btn').addClass('show');
  } else {
    $('.scroll-btn').removeClass('show');
  }
});

$('.scroll-btn').click(function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});







});