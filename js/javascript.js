// matrix
var s = window.screen;
var width = q.width = s.width;
var height = q.height = s.height;
var letters = Array(256).join(1).split('');

var colors = ["#fc93bf", "#73fb98", "#9c56c3"];
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
