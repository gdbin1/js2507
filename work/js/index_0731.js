let memNum = parseInt(prompt('입장객 몇명?'));
let colNum = parseInt(prompt('한줄에 몇명씩?'));

if (memNum % colNum == 0) {
    rowNum = memNum / colNum;
}
else {
    rowNum = parseInt(memNum / colNum) + 1;
}


document.writeln('<table>');

for (let i = 0; i <rowNum; i++){
    document.writeln('<tr>');
    for (let j = 1; j <=colNum; j++){
        seatNo = i * colNum + j;
        if (seatNo > memNum) break;
        document.writeln(`<td> 좌석 ${seatNo} </td>`);
    }
    document.writeln('</tr>'); 
}
document.writeln('</table>');