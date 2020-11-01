// Select element function 

const menuBtn = document.querySelector('.menu-btn');
const navlist = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay'); 
const navlistRemove = document.querySelector('.navlist-remove'); 


let menuOpen = false;    // hethy lezem besh el menu-btn tawlich tet3amel b db-cl
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navlist.classList.add('active');
    overlay.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open'); 
    navlist.classList.remove('active');
    overlay.classList.remove('active');
    menuOpen = false;
  }
}); 
overlay.addEventListener('click', () => {
    navlist.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.classList.remove('open');
    menuOpen = false; 
});  



$(document).ready(function(){  

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    })

    $('nav a[href*="#"]').on('click', function() {                 
        $('html, body').animate({                              
            scrollTop: $($(this).attr('href')).offset().top + 4        
        }, 2000);                                                       
    });

    $(".navlist-remove").click(function(){ 
      $(".menu-btn").removeClass("open");
      $(".nav-list").removeClass("active");
      $(".overlay").removeClass("active"); 
      menuOpen = false;  // hethy lezema besh menu-btn tawlich lezem naaml db-click besh tekhdem
    });
    

    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 300) {
        $('.up').addClass('active');
      } else {
        $('.up').removeClass('active');
      }
    });

    $('#up').on('click', function() {   
      $('html, body').animate({ 
          scrollTop: 0
      }, 2000);
    });
 

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next ',
            prevEl: '.swiper-button-prev ',
        },
    });

    $(".num").counterUp({delay:100,time:4000}); 
    
    $('.brand-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsive:{
          0:{
            items:1 
          },
          470:{
            items:2
          },
          600:{
            items:2
          }, 
          800:{
            items:3
          },
          1000:{
            items:4
          },
          1200:{
            items:5
          }
        }
      }) 
});
  



