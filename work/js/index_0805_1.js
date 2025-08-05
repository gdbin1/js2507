function changeText(id) {
    id.innerHTML = "으아아아아아악!!"
}
// --------------
function displayDate(){
    document.getElementById("result").innerHTML = Date();
}
// ----------------
document.getElementById("myBtn").onclick = displayDate;
function displayDate(){
    document.getElementById("result1").innerHTML = Date();
}
// ------------------------
function checkCookies(){
    let text = "";
    if (navigator.cookieEnabled == true){
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are noe enabled.";
    }
    document.getElementById("result3").innerHTML = text
}
// ------------------------------
function upperCase(){
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
// ---------------------------
function upperCase(){
    const x = document.getElementById("fname1");
    x.value = x.value.toUpperCase();
}

// ----------------------------------------
function mOver(obj) {
    obj.innerHTML = "여ㅓㅓㅓ기"
}
function mOut(obj){
    obj.innerHTML = "마우스 벗어남"
}
// -----------------------
function mDown(obj){
    obj.style.backgroundColor = '#df8817ff'
    obj.innerHTML = "클릭중";
}
function mUp(obj){
    obj.style.backgroundColor = '#7929c4ff'
    obj.innerHTML = "클릭 끝"
}
