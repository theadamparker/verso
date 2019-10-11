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
    syncVideos()
    ga('send', 'event', 'Navigation Click', 'Next Click', 'Next');
  });
  $('.controls__button--prev').click(function() {
    handlePrev();
    syncVideos()
    ga('send', 'event', 'Navigation Click', 'Prev Click', 'Previous');
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
      $('.controls__button--next').html('Next'); // hacky solution
      // updateButtons();
      $('.controls__button--prev').css('display', 'none');

    } else {

      $activeRadio
        .next('input[class*="slide-radio"]')
        .prop('checked', true);
      $('.controls__button--prev').css('display', 'block'); // hacky solution
      updateButtons();
    }
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
      updateButtons();
    } else {
      $activeRadio
        .prev('input[class*="slide-radio"]')
        .prop('checked', true);
      updateButtons()
    }
  }

  function updateButtons() {
    // get active radio
    var $activeRadio = $('input[class*="slide-radio"]:checked');
    // find out which index number it is
    var currentIndex = $activeRadio.index();

    // if on the first item
    if (currentIndex == 0) {
      $('.controls__button--prev')
        // .addClass('controls__button--inactive')
        .css('display', 'none');
    } else if (currentIndex >= radiosLength - 1) { // if on the last item
      // $('.controls__button--next').addClass('controls__button--inactive');
      $('.controls__button--next')
        .html('Restart');
    } else {
      $('.controls__button--prev')
        .removeClass('controls__button--inactive');
      $('.controls__button--next')
        .removeClass('controls__button--inactive')
        .html('Next');
    }
  }
});

function syncVideos() {
  $('video').each(function() {

  })
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', '${vh}px');
