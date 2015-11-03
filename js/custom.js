var options = [
    {
        selector: '#navbar',
        offset: 10,
        callback: 'Materialize.showStaggeredList("#navbar")'
  },
    {
        selector: '#work-experience',
        offset: 700,
        callback: 'Materialize.showStaggeredList("#work1-card")'
  },
    {
        selector: '#work-experience',
        offset: 1000,
        callback: 'Materialize.showStaggeredList("#work2-card")'
  },
    {
        selector: '#work-experience',
        offset: 1300,
        callback: 'Materialize.showStaggeredList("#work3-card")'
  }
];
Materialize.scrollFire(options);

$(document).ready(function () {
    $('.parallax').parallax();
});

