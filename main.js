var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sound = new Howl({
  src:['https://raw.githubusercontent.com/Uben/Patatap/master/sounds/bubbles.mp3']
});
