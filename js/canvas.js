var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(150, 72, 0, 150, 72, 72);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0');

ctx.fillStyle = gradient;
ctx.fillRect(0,0,300,150);

