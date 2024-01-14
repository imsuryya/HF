let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar'); // Selected the 'header' element

menu.onclick = () => {
    console.log('Menu button clicked!');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// for window scrool 

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
};

//for home 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlide: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },

  });


var swiper = new Swiper(".homw-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlide: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },

  });


