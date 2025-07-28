var d = document;
let hotel = 150000;
let pool = 35000;
let park = 20000;
let result;
// ------------------------------
// 패키지1
result = hotel + pool * 0.85;
d.getElementById('p1').innerHTML = `<b>첫번째 패키지: 숙박+수영장 15%할인 ${result}</b>`;
// 패키지2
result = pool + park *0.9
d.getElementById('p2').innerHTML = `<b>두번째: 수영장+파크 패키지 종일 이용권 5%할인 ${result}</b>`;
// 패키지3
result = hotel + pool + park * 0.85; 
d.getElementById('p3').innerHTML = `<b>세번째: 숙박+수영장+파크 풀패키지 20%할인${result}</b>`;

