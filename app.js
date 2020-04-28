const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

console.log(cvs.height)

const chicken_1 = new Image();
const chicken_2 = new Image();
const chicken_3 = new Image();
const basket = new Image();

chicken_1.src = "images/hen-right.png";
chicken_1.src = "images/hen-right.png";
chicken_1.src = "images/hen-right.png";
basket.src = "images/basket.png";

console.log(basket.width)

onload = function() {
    render();
};

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}


function render() {
    drawRect(0, 0, cvs.width, cvs.height, "#31b6ce");
    drawRect(0, cvs.height-30, cvs.width, 30, "#292929");
    ctx.drawImage(basket, cvs.width/2 - basket.width/2, (cvs.height - basket.height)-8);
}

render();