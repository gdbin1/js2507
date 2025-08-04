let name = ['김','가','빈'];
let hi = ['고객님 안녕하십니까'];

// 1 concat
let nameHi = name.concat(hi);
document.writeln(`${nameHi} <hr>`);
// 2 join
let string = name.join('_');
document.writeln(`${string} ${hi} <hr>`);

// 3 push
let ret1 = hi.push('!');
document.writeln(`${string} ${hi} <hr>`)

// unshift
let ret2 = name.unshift('수원역 지점');
document.writeln(`${name} ${hi} <hr>`)

// pop
let popped = hi.pop();
document.writeln(`${name} ${hi} <hr>`)

// shift
let popped2 = name.shift();
document.writeln(`${name} ${hi} <hr>`)

// splice
let medern = nameHi.splice(4,0,'오늘도 좋은하루')
document.writeln(`${nameHi} <hr>`)
// slice

document.writeln(string.slice(0,5));