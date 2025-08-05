let myBtn2 = document.getElementById('myBtn2')
let result2 = document.getElementById("result2")

document.getElementById('myBtn').addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("result").innerHTML = Date();
}
// --------------------------
function myMOver() {
    result2.innerHTML = "마우스 갖다댐"
}
function myMClick() {
    result2.innerHTML = "마우스 클릭함"
}
function myMOut() {
    result2.innerHTML = "마우스 벗어남"
}
myBtn2.addEventListener("mouseover", myMOver)
myBtn2.addEventListener("click", myMClick)
myBtn2.addEventListener("mouseout", myMOut)
// 
let p1 = 5;
let p2 = 7;
document.getElementById("Btn").addEventListener("click", function () {
    myFunction(p1, p2);
});
function myFunction(a, b) {
    document.getElementById("result3").innerHTML = a * b;
}

// --------------------------------
document.getElementById("myDIV").addEventListener("mousemove", myFunction)
function myFunction() {
    document.getElementById("result4").innerHTML = Math.random();
}
function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction)
}
// ---------------------------------
window.addEventListener("resize", function () {
    document.getElementById("result5").innerHTML = Math.random();
})

// ------------------------
document.getElementById("myP1").addEventListener("click", function () {
    alert("너 흰색 눌렀지?");
}, false);

document.getElementById("myDiv1").addEventListener("click", function () {
    alert("보라색 눌렀지?");
}, false);

document.getElementById("myP2").addEventListener("clikck", function () {
    alert("너 흰색 눌렀지???");
}, true);
document.getElementById("myDiv2").addEventListener("click", function () {
    alert("너ㅓㅓㅓ보라색 눌렀지!!!!!!!!");
}, true);