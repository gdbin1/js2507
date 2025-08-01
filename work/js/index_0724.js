let color = document.querySelector('#color');
color.onclick = function () {
    color.style.color = "blue";
}

const PI = 3.14;
let radius = prompt("반지름 입력하세요");
var area = PI * radius * radius;
alert(`반지름은 ${area} 입니다.`)