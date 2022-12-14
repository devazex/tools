
document.addEventListener('mousedown', function (e) {
var buttons = e.buttons;
if ((buttons & 1) === 1) {
    document.getElementById('mouse-1').classList.add('press');
    document.getElementById('mouse-1').classList.add('active');
}
if ((buttons & 2) === 2) {
    document.getElementById('mouse-2').classList.add('press');
    document.getElementById('mouse-2').classList.add('active');
}
if ((buttons & 4) === 4) {
    document.getElementById('mouse-3').classList.add('press');
    document.getElementById('mouse-3').classList.add('active');
}
if ((buttons & 8) === 8) {
    document.getElementById('mouse-4').classList.add('press');
    document.getElementById('mouse-4').classList.add('active');
}
if ((buttons & 16) === 16) {
    document.getElementById('mouse-5').classList.add('press');
    document.getElementById('mouse-5').classList.add('active');
}
});

document.addEventListener('mouseup', function () {
  [1, 2, 3, 4, 5].map(function (i) { return 'mouse-' + i; }).forEach(function (id) {
      document.getElementById(id).classList.remove('active');
  });
});
  var mouseSection = document.querySelector('.mouse-Section');
  mouseSection.addEventListener('contextmenu', function (e) { e.preventDefault() });
  mouseSection.addEventListener('mousedown', function (e) { e.preventDefault() });
  mouseSection.addEventListener('mouseup', function (e) { e.preventDefault() });
  var upId, downId;
  mouseSection.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
      document.getElementById('wheel-down').classList.add('press');
      document.getElementById('wheel-down').classList.add('active');
      window.clearTimeout(downId);
      downId = window.setTimeout(function () {
        document.getElementById('wheel-down').classList.remove('active')
      }, 250);
    } else if (e.deltaY > 0) {
        document.getElementById('wheel-up').classList.add('press');
        document.getElementById('wheel-up').classList.add('active');
        window.clearTimeout(upId);
        upId = window.setTimeout(function () {
          document.getElementById('wheel-up').classList.remove('active')
      }, 250);
    }
  });
function reset(){ 
var resetActive = document.getElementsByClassName('active');
var resetPressed = document.getElementsByClassName('press');
while(resetActive.length > 0 ){
    resetActive[0].classList.remove('active');
}
while(resetPressed.length > 0 ){
    resetPressed[0].classList.remove('press');
}
}