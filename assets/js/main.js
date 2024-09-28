AOS.init();
// desktop menu 
let navs = document.querySelector('.side-bar-menu-wrap')
let menuIcon = document.querySelectorAll('.menu-toggle')
console.log(navs, menuIcon);
menuIcon.forEach(function (e) {
  e.addEventListener('click', function () {
    navs.classList.toggle('active');
  });
});

// for lazy load in images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
});

$('.faqs-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
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
        slidesToScroll: 1
      }
    }
  ]
});
$('.banner-slider').slick({
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: 'linear',
  slidesToShow: 1,
  draggable: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
});
$(document).ready(function () {
  $('.discover-all-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '.discover-all-left-arrow',
    nextArrow: '.discover-all-right-arrow',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.discover-wordpress-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '.discover-wordpress-left-arrow',
    nextArrow: '.discover-wordpress-right-arrow',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Refresh slick sliders when the tab becomes active
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.discover-all-slider, .discover-wordpress-slider').slick('setPosition');
  });
});

$(document).ready(function () {
  $('.discover-clinical-slider').slick({
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 4000,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '.discover-clinical-left-arrow',
    nextArrow: '.discover-clinical-right-arrow',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})
$('.form-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.form-slider-left-arrow',
  nextArrow: '.form-slider-right-arrow',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.leaders-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  // prevArrow: '.form-slider-left-arrow',
  // nextArrow: '.form-slider-right-arrow',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// Initialize Swiper with mousewheel control and slide change event
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  speed: 1000,           // Controls the smoothness of the slide transition
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    sensitivity: 6,
    releaseOnEdges: true, 
  },
  slidesPerView: 1,
  freeMode: false,       // Ensures the slide snaps after scrolling
  cssMode: false,        // Disabling this will allow Swiper's own smooth scrolling to work properly
});


$(document).ready(function(){
  var owl = $('.discover-all-carousel');
  
  // Initialize the Owl Carousel
  owl.owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false, // We disable default navigation
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 2 }
    }
  });

  // Custom Left Arrow Click
  $('.discover-all-left-arrow').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  // Custom Right Arrow Click
  $('.discover-all-right-arrow').click(function() {
    owl.trigger('next.owl.carousel');
  });


  // wordpress carousel
  var owlWordpress = $('.discover-wordpress-carousel');
  owlWordpress.owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 2 }
    }
  });
  // Custom Left Arrow Click
  $('.discover-wordpress-left-arrow').click(function() {
    owlWordpress.trigger('prev.owl.carousel');
  });
  // Custom Right Arrow Click
  $('.discover-wordpress-right-arrow').click(function() {
    owlWordpress.trigger('next.owl.carousel');
  });

  // clinical carousel
  var owlClinical = $('.discover-clinical-carousel');
  owlClinical.owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 2 }
    }
  });
  // Custom Left Arrow Click
  $('.discover-clinical-left-arrow').click(function() {
    owlClinical.trigger('prev.owl.carousel');
  });
  // Custom Right Arrow Click
  $('.discover-clinical-right-arrow').click(function() {
    owlClinical.trigger('next.owl.carousel');
  });
  // salesforce carousel
  var salesforce = $('.discover-salesforce-carousel');
  salesforce.owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 2 }
    }
  });
  // Custom Left Arrow Click
  $('.discover-salesforce-left-arrow').click(function() {
    salesforce.trigger('prev.owl.carousel');
  });
  // Custom Right Arrow Click
  $('.discover-salesforce-right-arrow').click(function() {
    salesforce.trigger('next.owl.carousel');
  });
  // plugins carousel
  var plugins = $('.discover-plugins-carousel');
  plugins.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 2 }
    }
  });
  // Custom Left Arrow Click
  $('.discover-plugins-left-arrow').click(function() {
    plugins.trigger('prev.owl.carousel');
  });
  // Custom Right Arrow Click
  $('.discover-plugins-right-arrow').click(function() {
    plugins.trigger('next.owl.carousel');
  });
});

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});


$('.career-brand-slider').slick({
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: false,
  cssEase: 'linear',
  slidesToShow: 1,
  draggable: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
});



// typing
var typing=new Typed(".typing-text", {
  strings: ["top-class software development", "cutting-edge technology solutions", "innovative digital transformation", "customized IT consulting services", "scalable cloud-based platforms", "Webnext-level enterprise applications"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});






