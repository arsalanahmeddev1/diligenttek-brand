setTimeout(function () {
  $('#loading-screen').fadeOut('slow', function () {
    $(this).remove();
  });
}, 3000);

var servicesBannerSlider = new Swiper('.services-banner-slider', {
  loop: true,  
  speed: 300, 
  autoplay: true,
  spaceBetween: 30,
  breakpoints: {
    1600: {
      slidesPerView: 4,  
      slidesPerGroup: 1, 
      loop: true, 
    },
    1336: {
      slidesPerView: 3,  
      slidesPerGroup: 1, 
      loop: true, 
    },
    1024: {
      slidesPerView: 2,  
      slidesPerGroup: 1, 
      loop: true, 
    },
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const whoWeAreSec = document.querySelector(".who-we-r-sec");
const wwrSecRight = document.querySelectorAll('.wwr-right-content');
const cursorColorChange = document.querySelectorAll('.sec-2.services-sec .white-card , .form-wrapper ,  .inner-banner , .flip-card , .discover-card-right-content , .job-card , .about-sec-2 .lg-card , .results-card ');
const servicesBannerCard = document.querySelector('.services-banner-slider');
const servicesSecSlider2 = document.querySelector('.services-sec-slider');

const setExploreState = () => {
  cursor.style.display = "none";
  gsap.to(cursor2, {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
  });
  cursor2.textContent = 'Explore';
  cursor2.style.fontSize = '15px';
  cursor2.style.fontWeight = 600;
  cursor2.style.color = '#4252DA';
  cursor2.style.display = 'flex';
  cursor2.style.justifyContent = 'center';
  cursor2.style.alignItems = 'center';
  cursor2.style.padding = '20px';
  cursor2.style.whiteSpace = 'nowrap';
}
const setDrag = () => {
  setExploreState();
  gsap.to(cursor2, {
    width: 50,
    height: 50,
  });
  cursor2.textContent = 'Drag';
  cursor2.style.fontSize = '12px';
  cursor2.style.boxShadow = 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px';
}

const resetCursor2 = () => {
  gsap.to(cursor2, {
    width: 15,
    height: 15,
    backgroundColor: ""
  });
  cursor2.textContent = '';
  cursor2.style.fontSize = '';
  cursor2.style.fontWeight = '';
  cursor2.style.display = '';
  cursor2.style.justifyContent = '';
  cursor2.style.alignItems = '';
  cursor2.style.padding = '';
  cursor2.style.whiteSpace = '';
}
body.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
    ease: "black.out",
  });
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
    ease: "black.out",
  });
});
if (whoWeAreSec) {
  whoWeAreSec.addEventListener("mouseenter", setExploreState);
  whoWeAreSec.addEventListener("mouseleave", () => {
    cursor.style.display = "block";
    resetCursor2();
  });
  wwrSecRight.forEach(element => {
    element.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
      resetCursor2();
    });
    element.addEventListener("mouseleave", setExploreState);
  });
}
const cursorWhite = () => {
  gsap.to(cursor2, {
    backgroundColor: "#fff",
  });
  gsap.to(cursor, {
    filter: "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(284deg) brightness(104%) contrast(104%)",
  });
}
const cursorWhiteReset = () => {
  gsap.to(cursor2, {
    backgroundColor: "var(--primary-theme)",
  });
  gsap.to(cursor, {
    filter: "unset",
  });
}
if (cursorColorChange) {
  cursorColorChange.forEach(cursor => {
    cursor.addEventListener('mouseenter', () => {
      cursorWhite();
    })
    cursor.addEventListener("mouseleave", cursorWhiteReset);
  })
}
if(servicesSecSlider2) {
  servicesSecSlider2.addEventListener("mouseenter", setDrag);
  servicesSecSlider2.addEventListener("mouseleave", () => {
    cursor.style.display = "block";
    resetCursor2()
  });
}
AOS.init();
// desktop menu 
let navs = document.querySelector('.side-bar-menu-wrap');
let menuIcon = document.querySelectorAll('.menu-toggle');
let menuIconChild = document.querySelector('.menu-icon i')
let subMenuList = document.querySelector('.sub-menu-list');
let subMenu = document.querySelector('.sub-menu');
let navAnchor = document.querySelectorAll('.main-anchors');
let sideBarImg = document.querySelector('.side-bar-img');
let subMenuToggle = document.querySelector('.sub-menu-toggle');
let tlN = gsap.timeline({ paused: true });
// Create the animation once
tlN.from(".main-list li a", {
  y: 20,
  opacity: 0,
  duration: 0.1,
  delay: 0.9,
  stagger: 0.2,
});

// Click event for menu toggle
menuIcon.forEach(function (e) {
  e.addEventListener('click', function () {
    const menuIconChild = this.querySelector('.menu-icon i');
    if (!menuIconChild) {
      console.error('Menu icon child not found');
      return;
    }
    navs.classList.toggle('active');
    navs.style.maxWidth = '555px';
    subMenu.classList.remove('active');
    sideBarImg.classList.remove('active');
    if (innerWidth > 992) {
      if (navs.classList.contains('active')) {
        menuIconChild.classList.replace('fa-bars', 'fa-xmark');
      } else {
        menuIconChild.classList.replace('fa-xmark', 'fa-bars');
      }
    }
    if (navs.classList.contains('active')) {
      tlN.restart();
    } else {
      tlN.reverse();
    }
  });
});
if (innerWidth > 991) {
  subMenuList.addEventListener('mouseenter', function () {
    navs.style.maxWidth = '100%';
    subMenu.classList.add('active');
    sideBarImg.classList.add('active');
  })
  navAnchor.forEach(el => {
    el.addEventListener('mouseenter', function () {
      navs.style.maxWidth = '555px';
      subMenu.classList.remove('active');
      sideBarImg.classList.remove('active');
    })
  })
} else {
  subMenuList.addEventListener('click', function () {
    navs.style.maxWidth = '100%';
    subMenu.classList.add('active');
    sideBarImg.classList.add('active');
  })
  subMenuToggle.addEventListener('click', function () {
    subMenu.classList.remove('active');
  })

}

document.addEventListener('click', function (event) {
  if (!navs.contains(event.target) && !Array.from(menuIcon).some(icon => icon.contains(event.target))) {
    navs.classList.remove('active'); // Close the menu
  }
  if (navs.classList.contains('active')) {
    menuIconChild.classList.replace('fa-bars', 'fa-xmark');
  } else {
    menuIconChild.classList.replace('fa-xmark', 'fa-bars');
  }
  // navs.style.maxWidth = '555px'
});
// for lazy load in images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
});

const swiper = new Swiper('.faqs-slider', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  speed: 300,
  breakpoints: {
    1620: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: ".swiper-pagination-faqs",
        clickable: true,
      },
    },
  },
});
const marqueSlider = (sliderSlector) => {
  const sldierVariable = new Swiper(sliderSlector, {
    spaceBetween: 0,
    centeredSlides: false,
    speed: 3500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    cssMode: false,
    initialSlide: 1,
    effect: 'slide',
  });
}
marqueSlider('.banner-slider')
marqueSlider('.career-brand-slider')

var formSlider = new Swiper('.form-slider', {
  loop: true,  
  speed: 300, 
  navigation: {
    nextEl: '.form-slider-right-arrow', 
    prevEl: '.form-slider-left-arrow'  
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,  
      slidesPerGroup: 1, 
      loop: true, 
    },
    600: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});
// Initialize Swiper with mousewheel control and slide change event
let swiperElement = document.querySelector('.mySwiper');
if (swiperElement) {
  function initSwiper() {


    var swiper = new Swiper(".mySwiper", {
      direction: window.innerWidth <= 768 ? "horizontal" : "vertical", // Horizontal for mobile, vertical for larger screens
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // mousewheel: {
      //   sensitivity: 6,
      //   releaseOnEdges: true,
      // },
      slidesPerView: 1,
      freeMode: false,
      cssMode: false,
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 1,
        }
      }
    });
    function setSlideHeight() {
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach(slide => {
        const contentHeight = slide.scrollHeight;
        slide.style.height = contentHeight + 'px';
      });
    }
    setSlideHeight();
    window.addEventListener('resize', function () {
      setSlideHeight();
    });
  }
  initSwiper();
  
  window.addEventListener('resize', function () {
    document.querySelector('.mySwiper').swiper.destroy(true, true); // Destroy the existing swiper instance
    initSwiper();
  });
}


$(document).ready(function () {
  function initializeCarousel(carouselSelector, leftArrowSelector, rightArrowSelector) {
    var owl = $(carouselSelector);
    owl.owlCarousel({
      loop: true,
      dots: false,
      margin: 10,
      nav: false,
      responsive: {
        0: { items: 1 },
        767: { items: 1 },
        1000: { items: 2 }
      }
    });
    $(leftArrowSelector).click(function () {
      owl.trigger('prev.owl.carousel');
    });
    $(rightArrowSelector).click(function () {
      owl.trigger('next.owl.carousel');
    });
  }
  initializeCarousel('.discover-all-carousel', '.discover-all-left-arrow', '.discover-all-right-arrow');
  initializeCarousel('.discover-wordpress-carousel', '.discover-wordpress-left-arrow', '.discover-wordpress-right-arrow');
  initializeCarousel('.discover-clinical-carousel', '.discover-clinical-left-arrow', '.discover-clinical-right-arrow');
  initializeCarousel('.discover-salesforce-carousel', '.discover-salesforce-left-arrow', '.discover-salesforce-right-arrow');
  initializeCarousel('.discover-plugins-carousel', '.discover-plugins-left-arrow', '.discover-plugins-right-arrow');
});

// typing
if (window.innerWidth >= 992) {
  let typeElemt = document.querySelector('.typing-text')
  if (typeElemt) {
    var typing = new Typed(".typing-text", {
      strings: ["innovation", "creativity ", "performance"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
  }
}

if (innerWidth >= 1200) {
  let fullPage = document.querySelector("#fullPage");
  if (fullPage) {
    new fullpage('#fullPage', {
      autoScrolling: true,
      responsiveWidth: 1200,
    });
  }
  const jobDetailsSec = document.querySelector('.job-details-sec');
  if(jobDetailsSec) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '.job-details-sec',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.job-details-sec .form-wrapper',
      pinSpacing: false,
      scrub: true,
    });
  }
}

var servicesSecSlider = new Swiper('.services-sec-slider', {
  // loop: true,  
  speed: 300, 
  navigation: {
    nextEl: '.services-ss-slider-right-arrow', // Custom right arrow
    prevEl: '.services-ss-slider-left-arrow',  // Custom left arrow
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

// Function to set a cookie
// function setCookie(name, value, days) {
//     let expires = "";
//     if (days) {
//         const date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

// // Function to get a cookie by name
// function getCookie(name) {
//     const nameEQ = name + "=";
//     const cookiesArray = document.cookie.split(';'); // Get all cookies and split by ";"
//     for (let i = 0; i < cookiesArray.length; i++) {
//         let cookie = cookiesArray[i];
//         while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length); // Remove leading spaces
//         if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length); // Return the cookie value
//     }
//     return null;
// }

// // Set or get a cookie and update the message
// const username = getCookie("username");

// if (username) {
//     document.getElementById("welcomeMessage").innerText = "Welcome back, " + username;
// } else {
//     setCookie("username", "NewUser", 7); // Set a cookie if it doesn't exist
//     document.getElementById("welcomeMessage").innerText = "Hello, new user! We've set a cookie for you.";
// }
