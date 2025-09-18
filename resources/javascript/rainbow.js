// Change color every second
const ic = document.getElementById('rainbow');
setInterval(rainbow, 1000);
function rainbow() {
  // i.c. random color
  ic.style.color = getRandomColor();
}

// Random Colors, returns hex value
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}