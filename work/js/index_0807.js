function Book(title, author, price,pages) {
    this.title = title
    this.author = author     
    this.price  = price
    this.pages  = pages
}
const book1 = new Book(8, "월", 7, "일");
document.getElementById("p1").innerHTML = book1.title + " " + book1.author + " " + book1.price + " " + book1.pages;
const book2 = new Book("js", "obj", "배운거", "복습");
document.getElementById("p2").innerHTML = book2.title + " " + book2.author + " " + book2.price + " " + book2.pages;
const book3 = new Book("하기", "이건", "Book", "으로");
document.getElementById("p3").innerHTML = book3.title + " " + book3.author + " " + book3.price + " " + book3.pages;
const book4 = new Book("만", "든", "것", "임");
document.getElementById("p4").innerHTML = book4.title + " " + book4.author + " " + book4.price + " " + book4.pages;
const book5 = new Book("객체", "생성자", "함수", "임");
document.getElementById("p5").innerHTML = book5.title + " " + book5.author + " " + book5.price + " " + book5.pages;

const made1 = {
    name1: "김",
    name2:"dasdasda",
    age1:"나이"
};

const made1_1 = {
    name2: "가빈",
    age2: 26
}
const made3 = Object.assign(made1, made1_1);
document.getElementById("p10").innerHTML = made3.name1 + " " + made3.name2 + " " + made3.age1 + " " + made3.age2;

// 선언부
let userNumber = parseInt(prompt('1+1은?'));

// 구현부
if (userNumber === 2) {
    let link = document.createElement('a'); 
    link.href = "./work/index_0807.html"; 
    link.textContent = '0807로 이동'; 
   
} else  {
    alert('!!!!!!!!!땡!!!!!!!!!')
    window.location.href = 'about:blank';} 