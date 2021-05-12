let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("hello world!");
console.log(num);

// function calc(a, b) {
//     return (a+b);
// }

// let calc = function(a, b) {
//     return(a + b);
// }

let calc = (a, b) => a+b

console.log(calc(3, 4));
console.log(calc(8, 4));

function retVar() {
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

let twelve = "12.2";
console.log(Math.round(twelve));

let elewen = "12.2px";
console.log(parseInt(elewen)); // vozvraszczaet celoe 4islo
console.log(parseFloat(elewen));// vozvraszczaet desiati4noje



