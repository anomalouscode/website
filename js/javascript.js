var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var colors = ["#ff00ff", "#00ff72", "#aa0fe2"];
var color = colors[Math.floor(Math.random() * colors.length)];
var draw = function () {

    q.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
    q.getContext('2d').fillRect(0, 0, width, height);
    q.getContext('2d').fillStyle = colors[Math.floor(Math.random() * colors.length)];
    letters.map(function (y_pos, index) {
        text = String.fromCharCode(3e4 + Math.random() * 33);
        x_pos = index * 30;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw, 50);


var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    console.log("Hola");
}
