function start() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  document.querySelector('#time').innerHTML = h + ":" + m + ":" + s;
  
  var color =  "#" + h + m + s;
  changeColor(color);

  setTimeout(function() {
    start();
  }, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function changeColor(color) {
  document.querySelector('#color').innerHTML = color;
  document.body.style.background = color;
}