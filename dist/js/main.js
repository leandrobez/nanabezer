/**SLIDER */

var sliderTime = 12000,
  move = 0,
  current = 0,
  allSlider = document.querySelectorAll('.il-slider--item'),
  nav1 = document.querySelector('#nav1 span'),
  nav2 = document.querySelector('#nav2 span'),
  nav3 = document.querySelector('#nav3 span'),
  limit = allSlider.length,
  opacityPanel = document.querySelector('.il-slider--opac'),
  portraitPanel = document.querySelector('.il-portrait'),
  allNavs = document.querySelectorAll('.il-slider--choices li span'),
  retart = null;
const styleLeft = '-150%';
const styleOpacity = 0.5;
const sliderDelay = 300;

/**nav mobil */
let ilBtn = document.querySelector('.il-btn--mobil'),
  navPainel = document.querySelector('.il-nav'),
  showNavPainel = false;

/**nav float */
let btnFloat = document.getElementById('#il-header');
let navFloat = document.querySelector('.il-float--menu');
let showFloat = false;
let spanLink = document.querySelectorAll('.il-span--link');

spanLink.forEach((item) => {
  
  item.addEventListener('click', () => {
    navFloat.classList.remove('float-show');
    showFloat = false;
  })
})

btnFloat.addEventListener('click', (e) => {
  e.preventDefault();
  if (!showFloat) {
    navFloat.classList.add('float-show');
    showFloat = true;
  } else {
    navFloat.classList.remove('float-show');
    showFloat = false;
  }
  console.log(showFloat)
});

ilBtn.addEventListener('click', () => {
  if (!showNavPainel) {
    navPainel.classList.add('il-nav--show');
    portraitPanel.classList.add('il-portrait--show');
    opacityPanel.classList.add('il-slider--opac__slider');
    showNavPainel = true;
  } else {
    navPainel.classList.remove('il-nav--show');
    portraitPanel.classList.remove('il-portrait--show');
    opacityPanel.classList.remove('il-slider--opac__slider');
    showNavPainel = false;
  }
});
/**Inicia os sliders */
function init() {
  let ilHash = window.location.hash;

  const elementAbout = document.querySelector('.il-section--about');
  if (ilHash == '#about') {
    elementAbout.classList.add('animated', 'bounceInLeft');
  } else {
    elementAbout.classList.remove('animated', 'bounceInLeft');
  }

  const elementVideo = document.querySelector('.il-section--video');
  if (ilHash == '#videos') {
    elementVideo.classList.add('animated', 'fadeInDownBig');
  } else {
    elementVideo.classList.remove('animated', 'fadeInDownBig');
  }

  const elementProfile = document.querySelector('.il-section--profile');
  if (ilHash == '#profile') {
    elementProfile.classList.add('animated', 'fadeInUp');
  } else {
    elementProfile.classList.remove('animated', 'fadeInUp');
  }

  const elementContact = document.querySelector('.il-section--contact');
  if (ilHash == '#contact') {
    elementContact.classList.add('animated', 'rotateInDownLeft');
  } else {
    elementContact.classList.remove('animated', 'rotateInDownLeft');
  }
  /*reconfigura os sliders*/
  const restartSlider = index => {
    clearTimeout(restart);
    active = index;
    allNavs[index].classList.add('active');
    for (var i = 0; i < allSlider.length; i++) {
      if (i !== index) {
        allSlider[i].style.opacity = styleOpacity;
        allSlider[i].style.left = styleLeft;
        allNavs[i].classList.remove('active');
      } else {
        allSlider[i].style.opacity = 1;
        allSlider[i].style.left = 0;
      }
    }
    setInterval(() => {
      active++;
      allNavs[active - 1].classList.remove('active');
      if (active == limit) {
        active = current;
      }
      moveSlider(active);
    }, sliderTime);
  };

  /**Reinicia os sliders */
  const reset = () => {
    allNavs[0].classList.add('active');
    for (var i = 0; i < allSlider.length; i++) {
      if (i > 0) {
        var e = allSlider[i];
        e.style.opacity = styleOpacity;
        e.style.left = styleLeft;
      }
    }
  };
  /**Movimentas os sliders */
  const moveSlider = active => {
    var sliderActive = allSlider[active];
    sliderActive.style.left = 0;
    sliderActive.style.opacity = 1;
    allNavs[active].classList.add('active');
    setInterval(() => {
      allSlider[active].style.opacity = styleOpacity;
    }, sliderTime - sliderDelay);
  };
  //prepara os slider para iniciar o processo
  var active = current;
  reset();
  restart = setInterval(() => {
    active++;
    allSlider[active - 1].style.opacity = styleOpacity;
    allSlider[active - 1].style.left = styleLeft;
    allNavs[active - 1].classList.remove('active');
    if (active == limit) {
      active = current;
    }
    //changeBack(active);
    moveSlider(active);
  }, sliderTime);

  nav1.addEventListener('click', function() {
    restartSlider(0);
  });
  nav2.addEventListener('click', function() {
    restartSlider(1);
  });
  nav3.addEventListener('click', function(e) {
    restartSlider(2);
  });
}

/**Carrega os slider quando dom estiver pronto */
document.addEventListener('DOMContentLoaded', init, false);
