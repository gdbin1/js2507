function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("이름을 반드시 입력하세요")
        return false;
    }
}
function myFunction() {
    // id가 'numb인 값 가져오기
    let x = document.getElementById("numb").value;
    // x가 숫자가 아니거나 1보다 작거나 10보다 큰 경우 실행하는 텍스트
    let text;
    if (isNaN(x) || x < 1 || x > 10){
        text = "1~10중에 숫자 입력하시라구요";
    } else {
        text = "입력 확인"
    }

document.getElementById("result").innerHTML = text;
}