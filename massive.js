// let arr = ["first", 2, 3, "four", 5];

// // arr.pop(); // udalit poslednij element massiva
// // arr.push("5"); // dobavit element v konce
// // arr.shift(); // udalit piervyj element
// // arr.unshift("1"); // dobavit element v na4alo

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (massive: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key in mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(','); // razdelajet vvedennyje dannyje na elementy massiva po zapiatoj
// console.log(arr);

// let arr = ["faerh", "wRGeh", "GAET", "RGr"],
//     i = arr.join(', '); // skleivajet elementy v 1 stroku razdelennyje zapiatoj
//     console.log(arr);
//     console.log(i);


let arr = ["faerh", "wRGeh", "GAET", "RGr"],
    i = arr.sort(); // sortirujet po alfavitu, cyfry sortirujet toze po alfavitu a nie po zna4eniu
    console.log(arr);

    let omg = [1, 15, 4];
    i = arr.sort(compareNum); // tak mozno cyfry otsortirovat po zna4eniu

    function compareNum(a, b) {
        return a-b;
    }
    console.log(omg);
    