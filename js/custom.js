var options = [
    {
        selector: '#work-experience-timeline',
        offset: 500,
        callback: 'Materialize.showStaggeredList("#work1-card")'
  },
    {
        selector: '#work-experience-timeline',
        offset: 800,
        callback: 'Materialize.showStaggeredList("#work2-card")'
  },
    {
        selector: '#work-experience-timeline',
        offset: 1100,
        callback: 'Materialize.showStaggeredList("#work3-card")'
  }
];
Materialize.scrollFire(options);

$(document).ready(function () {
    $('.parallax').parallax();
});
