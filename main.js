document.addEventListener('keydown', handleKeyDown);

var carImage = document.getElementById('car');
var carLoc = document.getElementById('carDiv');

var intervalID = 0;

var car = {
  angle: 0,
  state: 'off',
  position: [0, 0]
};

var backgroundSize = [2000, 1500];

function handleKeyDown(event) {
  if (event.code === 'Space') {
    if (car.state === 'off') {
      car.state = 'on';
      intervalID = setInterval(drive, 15);
    } else {
      car.state = 'off';
      clearInterval(intervalID);
    }
  } else if (event.code === 'ArrowLeft') {
    car.angle -= 10;
  } else if (event.code === 'ArrowRight') {
    car.angle += 10;
  }
  carImage.style.transform = 'rotate(' + car.angle + 'deg)';
}

function moveCar(distance) {
  if (car.state === 'on') {
    var x = Math.round(distance * Math.cos(car.angle * Math.PI / 180));
    var y = Math.round(distance * Math.sin(car.angle * Math.PI / 180));

    updatePosition(x, y);

  }
}

function updatePosition(x, y) {
  if ((car.position[0] + x < backgroundSize[0] && car.position[0] + x >= 0) && (car.position[1] + y < backgroundSize[1] && car.position[1] + y >= 0)) {
    car.position[0] += x;
    car.position[1] += y;
    carLoc.style.transform = 'translate(' + car.position[0] + 'px, ' + car.position[1] + 'px)';
  }
}

function drive() {
  moveCar(10);
}
