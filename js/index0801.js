// 두 숫자의 곱을 계산하는 함수

// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// let result = myFunction(4, 3)
// console.log (`정답은: ${result}`)

// 함수 호출
// function toCelsius(f) {
//     return (5 / 9) * (f-32);
// }
// let value = toCelsius(77);
// console.log(value);

// 잘못된 예
// value 변수선언 문장의 값으로 들어갈 toCelsius의 괄호에 숫자가 없음 -> Not a Number
// function toCelsius(f) {
//     return (5 / 9) * (f-32);
// }
// let value = toCelsius();
// console.log(value)

// 잘못된 예2
// value 변수선언 문장에 toCelsius가 함수다 ()라는 괄호를 안함
// function toCelsius(f) {
//     return (5 / 9) * (f-32);
// }
// let value = toCelsius;
// console.log(value)

// 화살표 함수 (쓰기 전)
// result에 적은 4,3 값이 return으로 돌아와서 변수 a,b에 값을 넣음
// let myFunction = function(a, b) {return a * b};
// let result = myFunction(4,3);
// console.log(result);

// 화살표 함수 (써보기)
// 화살표를 쓰면 쓰기 전보다 더 간단히 코딩 가능, return대신 들어가서 return을 생략 가능한듯
// myFunction = (a, b) => a * b;
// let result = myFunction(4, 5);
// console.log(result);

// 지역 변수
// let text = "Outside: " + typeof carName;
// console.log(text);
// function myFunction(){
//     let carName = "volvo";
//     let text = "Inside: " + typeof carName + " " + carName;
//     console.log (text);
// }
// myFunction();

// 매개 변수
// function greet(name, age) {
//     return "Hello" + name + "! You are" + age + "years old.";
// }
// console.log(greet);

// 인수
// function greet(name, age) {
//     return "Hello " + name + "! You are " + age + " years old.";
// }
// document.getElementById("demo").innerHTML = greet("John", 21)


let text = "The temperature is " + toCelsius(77) + "Celsius.";
console.log(text);
function toCelsius(fahrenheit) {
    return (5/9) * (fahreenheit-32);
}