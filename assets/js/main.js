// navbar shrink
window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }

// carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop:true,
      margin:10,
      // nav:true,
      responsiveClass:true,
      // 
      navigation: true,
      navText: ["<img src='./assets/images/left.png'>","<img src='./assets/images/right.png'>"],
      responsive:{
          0:{
          items:1,
          nav:true,
          },
          700:{
              items:2,
              nav:true,
          },
          800:{
              items:3,
              nav:false
          },
          1300:{
              items:4,
              nav:true,
              loop:false
          }
      },
      
  }
  );
});


window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);

// const loading = document.getElementById("loading");

// window.addEventListener("load", () => {
//   loading.classList.add('loading-none');
// });
