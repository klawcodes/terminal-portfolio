var i = 0;
var txt = 'muhammad dimas presents zeskil';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('title').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
