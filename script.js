var draw = document.getElementById('canvas');
var drawpx = draw.getContext('2d');


// hat
drawpx.beginPath();
drawpx.rect(75, 0, 240, 80);
drawpx.fillStyle = '#00A551';
drawpx.fill();

// body
drawpx.beginPath();
drawpx.rect(10, 80, 380, 80);
drawpx.fillStyle = '#00A551';
drawpx.fill();

// wheel left
drawpx.beginPath();
drawpx.fillStyle="#CDCDCD"
drawpx.arc(70, 210, 50, 0, 2 * Math.PI);
drawpx.fill();
drawpx.stroke();

// wheel right
drawpx.beginPath();
drawpx.fillStyle="#CDCDCD"
drawpx.arc(330, 210, 50, 0, 2 * Math.PI);
drawpx.fill();
drawpx.stroke();
