
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

function handleNext() {

  var $radios = $("input[class*='slide-radio']");
  var $activeRadio = $("input[class*='slide-radio']:checked");

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);
  if (currentIndex >= radiosLength - 1) {
    $radios
      .first()
      .attr('checked', true);
  } else {
    $activeRadio
      .next("input[class*='slide-radio']")
      .attr('checked', true);
  }
}

$('.controls__button--next').click(function() {
  handleNext()
});

// $('.controls__button--next').click(handleNext());
