window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-149666898-1');

// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);


// adaptation of this concept
// https://designmodo.com/create-full-screen-slider/

$(document).ready(function() {
  var $radios = $('input[class*="slide-radio"]');
  var radiosLength = $radios.length;

  updateButtons()

  $('.controls__button--next').click(function() {
    handleNext();
  });
  $('.controls__button--prev').click(function() {
    handlePrev();
  });

  function handleNext() {
    // get active radio
    var $activeRadio = $('input[class*="slide-radio"]:checked');

    // find out which index number it is
    var currentIndex = $activeRadio.index();

    // uncheck everything
    $radios.prop('checked', false);

    // if we're on the last slider
    if (currentIndex >= radiosLength - 1) {

      $radios
        .first()
        .prop('checked', true);

    } else {

      $activeRadio
        .next('input[class*="slide-radio"]')
        .prop('checked', true); //// TODO: make this work
    }
    updateButtons()
  }

  function handlePrev() {
    // get active radio
    var $activeRadio = $('input[class*="slide-radio"]:checked');

    // find out which index number it is
    var currentIndex = $activeRadio.index();

    // uncheck everything
    $radios.prop('checked', false);

    // console.log(currentIndex);

    // if we're on the first slider
    if (currentIndex == 0) {
      $radios
        .last()
        .prop('checked', true);
    } else {
      $activeRadio
        .prev('input[class*="slide-radio"]')
        .prop('checked', true); //// TODO: make this work
    }
    updateButtons()
  }

  function updateButtons() {
    // get active radio
    var $activeRadio = $('input[class*="slide-radio"]:checked');
    // find out which index number it is
    var currentIndex = $activeRadio.index();

    // if on the first item
    if (currentIndex == 0) {
      $('.controls__button--prev')
        .addClass('controls__button--inactive')
        .prop('disabled', true);
    } else if (currentIndex >= radiosLength - 1) { // if on the last item
      $('.controls__button--next').addClass('controls__button--inactive')
    } else {
      $('.controls__button--prev').removeClass('controls__button--inactive');
      $('.controls__button--next').removeClass('controls__button--inactive')
    }

  }
});
