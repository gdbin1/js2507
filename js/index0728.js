var d = document;
let hotel = 150000;
let pool = 35000;
let park = 20000;
let result;
// ------------------------------
result = hotel + pool * 0.95;
d.getElementById('p1').innerHTML = `<b>첫번째 패키지: 숙박+수영장 5%할인 ${result}</b>`;
result = hotel + pool + park * 0.8;
d.getElementById('p3').innerHTML = `<b>첫번째 패키지:${result}</b>`;

result = hotel + park *0.9