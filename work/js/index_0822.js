let site = prompt("HTML, JS, REACT 중 보러 가고싶은 과제 사이트는?");
let url;

switch (site) {
    case "HTML":
        url = "https://gdbin1.github.io/html2507/";
        break;
    case "JS":
        url = "https://gdbin1.github.io/js2507/";
        break;
    case "REACT":
        url = "https://gdbin1.github.io/react-test2508/";
        break;
    default:
        alert("보기 중에 없는 사이트세요");
}

if (url) {
    location.href = url;
}