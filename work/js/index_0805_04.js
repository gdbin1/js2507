// const para = document.createElement("p");
// const node = document.createTextNode("새로운거");
// para.appendChild(node);

// const element = document.getElementById("div1");
// const child = document.getElementById("p1");
// element.insertBefore(para, child);

// ----------------

// function myFunction(){
//     document.getElementById("p3").remove();
// }

// -------------------------------

// const parent = document.getElementById("div2");
// const child = document.getElementById("p5");
// parent.removeChild(child);

const parent = document.getElementById("div3");
const child = document.getElementById("p7");
const PI = document.createElement("p");
const node = document.createTextNode("이건 새로운거");
PI.appendChild(node);
parent.replaceChild(PI,child);