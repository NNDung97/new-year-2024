const svg = document.querySelector('.dojo2-dragon');
const paths = svg.getElementsByTagName('path');
const button = document.querySelector('.toggle-animation');

function animateDragon() {
  svg.classList.add('outlined');
  svg.classList.remove('animate');

  // set up path styles
  for (const path of paths) {
    // get length of each path, and use it to set the stroke length and offset
    // if we just used a set number, they would finish transitioning at different times
    const length = path.getTotalLength();
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    // trigger a layout so path styles are calculated
    path.getBoundingClientRect();
    
    path.style.stroke = '#fff';
    path.style.strokeWidth = '0.4';
    // add transition
    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
  }

  // now add the animation class
    svg.classList.add('animate');
    if (svg.classList.contains('animation-finished')) {
        svg.classList.remove('outlined');
    }
}

svg.addEventListener('transitionend', () => {
  console.log('transition ended');
  svg.classList.add('animation-finished');
  if (svg.classList.contains('animation-finished')) {
    svg.classList.remove('outlined');
    for (const path of paths) {
      path.style.strokeOpacity = '0.1';
    }
  }
  // change path transition
  for (const path of paths) {
    path.style.transition = 'fill 5s ease';
    path.style.stroke = '#000';
    path.style.strokeWidth = '0.4';
    // path.style.strokeOpacity = '0.1';
  }
});

setTimeout(animateDragon,5000);
