function start() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
    
  var color =  "#" + h + m + s;
  document.querySelector('#time').innerHTML = color;
  changeBackgroundColor(color);

  setTimeout(function() {
    start();
  }, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function changeBackgroundColor(color) {
  document.body.style.background = color;
}