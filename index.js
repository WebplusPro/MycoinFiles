$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    touchThreshold: 12,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 732,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  const locationButton = document.querySelector('.locat__button');
  const locationPopUp = document.querySelector('.location__successful');

  if (locationButton && locationPopUp) {
    locationButton.addEventListener('click', function () {
      locationPopUp.classList.add('loc__pop__show');
    });
  }

  const selectHeader = document.querySelectorAll('.select__header');
  const selectItems = document.querySelectorAll('.select__item');
  const currentText = document.querySelectorAll('.select__current');
  const currencyReverse = document.querySelector('.cash__dekor-svg');

  const selects = document.querySelectorAll('.select');

  const crDwn = document.querySelectorAll('.select__body');

  document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(crDwn[0]);
    for (let i = 0; i < crDwn.length; i++) {
      if (!e.composedPath().includes(crDwn[i]) && !e.composedPath().includes(selectHeader[i]) && selects[i]) {
        selects[i].classList.add('is-active');
      }
    }
  });

/*  if (currencyReverse) {
    currencyReverse.addEventListener('click', function () {
      const currencyClone = currentText[0].innerHTML;
      currentText[0].innerHTML = currentText[1].innerHTML;
      currentText[1].innerHTML = currencyClone;
    });
  }*/

  const select = function () {
    for (let i = 0; i < selects.length; i++) {
      if (selectHeader[i]) {
        selectHeader[i].addEventListener('click', function () {
          if (i == 1) {
            selects[0].classList.add('is-active');
            selects[i].classList.toggle('is-active');
          } else if (i == 0) {
            selects[1].classList.add('is-active');
            selects[i].classList.toggle('is-active');
          }
        });
      }
    }
    for (let a = 0; a < selectItems.length; a++) {
      selectItems[a].addEventListener('click', function () {
        if (a < 3) {
          selects[0].classList.add('is-active');
          currentText[0].innerHTML = this.innerHTML;
        } else {
          selects[1].classList.add('is-active');
          currentText[1].innerHTML = this.innerHTML;
        }
      });
    }
  };

  select();
});
