document.addEventListener('keydown', handleKeyDown);

var carImage = document.getElementById('car');

var car = {
  angle: 0,
  state: 'off',
  position: [0, 0]
};

function handleKeyDown(event) {
  if (event.code === 'Space') {
    if (car.state === 'off') {
      car.state = 'on';
    } else {
      car.state = 'off';
    }
  } else if (event.code === 'ArrowLeft') {
    car.angle -= 10;
  } else if (event.code === 'ArrowRight') {
    car.angle += 10;
  }
  carImage.style.transform = 'rotate(' + car.angle + 'deg)';
}
