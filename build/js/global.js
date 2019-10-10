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
  // console.log($radios);

  $('.controls__button--next').click(function() {
    handleNext();
    // console.log($radios)
  });

  function handleNext() {
    // get active radio
    var $activeRadio = $('input[class*="slide-radio"]:checked');

    // find out which index number it is
    var currentIndex = $activeRadio.index();

    // uncheck everything
    $radios.attr('checked', false);

    // console.log(currentIndex);

    // if we're on the last slider
    if (currentIndex >= radiosLength - 1) {

      $radios
        .first()
        .prop('checked', true); //// TODO: make this work
      console.log("if true");
      // console.log($radios)
      // console.log($radios.first())

    } else {

      $activeRadio
        .next('input[class*="slide-radio"]')
        .prop('checked', true); //// TODO: make this work
      console.log("else true");
    }

  }

});
