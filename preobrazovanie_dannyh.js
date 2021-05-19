// to string
//1
let a = String(4);
console.log(typeof(a));

//2
let b = ("" + 5);
console.log(typeof(b));
//primer dobavlenia v katalog nomera tovara
console.log('https://vk.com/catalog/' + 5);
/////////////////////////////////////////////////////////////////////
// to number
//1
let c = (Number(4));
console.log(typeof(c));

//2
console.log(typeof(+'5'));
console.log(typeof(5 + +'5'));// vtoroj + prevrashaet '5' v 4islo

//3
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('Hello?', ''); // - vvedennyje polzovatelem dannyje budut s4ityvatsa kak tip dannyh number

/////////////////////////////////////////////////////////
//  logi4eskoje preobrazovanie
//1) false eto 0, '', null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log("working..");
}

switcher = 1;

if (switcher) {
    console.log("working..");
}

//2)
console.log(typeof(Boolean('5')));
//3)
console.log(typeof(!!'5'));

