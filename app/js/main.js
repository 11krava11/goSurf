$ (function() {

  $('.header__slider').slick({
    infinite: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: "<button class='slick-prev'><img src='images/arrow-left.svg'></button>",
    nextArrow: "<button class='slick-next'><img src='images/arrow-right.svg'></button>",
    });

    $('.serf-slider').slick({
      centerMode: true,
      slidesToShow: 4,
      prevArrow: "<button class='slick-prev'><img src='images/arrow-left.svg'></button>",
      nextArrow: "<button class='slick-next'><img src='images/arrow-right.svg'></button>",
      responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
      });

      $('.map-slider').slick({
        slidesToShow: 8,
        arrows: false,
        focusOnSelect: true,
        });

        $('.holder-slider').slick({
          slidesToShow: 1,
          fade: true,
          prevArrow: "<button class='slick-prev'><img src='images/arrow-left.svg'></button>",
          nextArrow: "<button class='slick-next'><img src='images/arrow-right.svg'></button>",
          });  

  $('.surfboard__box').on('click', function() {
    $(this).toggleClass('active');
  })
  
  var burger = $('.burger');

  burger.on('click', function() {
    $(this).toggleClass('active not-active');
    $('.menu').toggleClass('active');
  });

  new WOW().init();

});

window.onload = function() {

  f1();

  function f1() {
      let slickLi = document.querySelectorAll('.slick-dots li');
      for (let i = 0; i < slickLi.length; i++) {
        slickLi[i].classList.add('dots__item');
      }
      let dotsBtn = document.querySelectorAll('.slick-dots button');
      for (let i = 0; i < dotsBtn.length; i++) {
        dotsBtn[i].classList.add('dots__btn');
      }
      document.getElementById('slick-slide-control00').innerHTML = '<div class="dots__box"><span class="dots__num">01</span><span class="dots__name">North Shore</span></div>';
      document.getElementById('slick-slide-control01').innerHTML = '<div class="dots__box"><span class="dots__num">02</span><span class="dots__name">South Shore</span></div>';
      document.getElementById('slick-slide-control02').innerHTML = '<div class="dots__box"><span class="dots__num">03</span><span class="dots__name">West Shore </span></div>';
      document.getElementById('slick-slide-control03').innerHTML = '<div class="dots__box"><span class="dots__num">04</span><span class="dots__name">East Shore</span></div>';
      
  };

}

let priceOut = document.querySelector('.price');

let nightsOut = document.querySelector('.nights');

function f1() {
  
  nightsOut.innerHTML = +nightsOut.innerHTML - 1;
  priceOut.innerHTML = (+nightsOut.innerHTML * +guestsOut.innerHTML) * 10;
  if(nightsOut.innerHTML < 1) {
    nightsOut.innerHTML = 0;
  }
  if(priceOut.innerHTML < 0) {
    priceOut.innerHTML = 0;
  }
}

document.querySelector('.holder__nights-minus').onclick = f1;

function f2() {
  nightsOut.innerHTML = +nightsOut.innerHTML + 1;
  priceOut.innerHTML = (+nightsOut.innerHTML * +guestsOut.innerHTML) * 10;
  if(nightsOut.innerHTML > 18) {
    nightsOut.innerHTML = 19;
  }
  if(priceOut.innerHTML < 1) {
    priceOut.innerHTML = 0;
  }
}

document.querySelector('.holder__nights-plus').onclick = f2;

let guestsOut = document.querySelector('.guests');

function f3() {
  guestsOut.innerHTML = +guestsOut.innerHTML - 1;
  priceOut.innerHTML = (+nightsOut.innerHTML * +guestsOut.innerHTML) * 10;
  if(guestsOut.innerHTML < 1) {
    guestsOut.innerHTML = 0;
  }
  if(priceOut.innerHTML < 0) {
    priceOut.innerHTML = 0;
  }
}

document.querySelector('.holder__guests-minus').onclick = f3;

function f4() {
  guestsOut.innerHTML = +guestsOut.innerHTML + 1;
  priceOut.innerHTML = (+nightsOut.innerHTML * +guestsOut.innerHTML) * 10;
  if(guestsOut.innerHTML > 18) {
    guestsOut.innerHTML = 19;
  }
  if(priceOut.innerHTML < 1) {
    priceOut.innerHTML = 0;
  }
}

document.querySelector('.holder__guests-plus').onclick = f4;











