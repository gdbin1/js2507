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