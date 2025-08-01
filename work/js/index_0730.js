const cars = ["BMW", "볼보", "사브", "피아트", "아우디", "BMW", "볼보", "사브", "피아트", "아우디"];
let text = "";
for (let i = 0; i < cars.length; i++) {
    console.log(i)
    console.log(cars[i])
    text +=[i+1] +" " +  cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;