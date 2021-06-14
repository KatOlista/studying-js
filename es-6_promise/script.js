// let drink = 0;

// function shoot(arrow, headshot, fail) {
//     console.log('you do shoot');

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail('vy promahnulis');
//     }, 3000)
// };

// function win() {
//     console.log('vy pobiedili');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('vam kupili pivo');
// }

// function giveMoney() {
//     console.log('Vam zaplatili');
// }

// function loose() {
//     console.log('vy proigrali');
// }

// shoot({},
//     function(mark) {
//         console.log("vy popali v cel!");
//         win(mark, buyBeer, giveMoney);
//     },
//     function(miss) {
//         console.error(miss);
//         loose();
//     }
//     );


//______________________________
// promise

let drink = 0;

function shoot(arrow) {
    console.log('you do shoot');

    let promise = new Promise(function(resolve, reject) {
       setTimeout(function(){
        Math.random() > .5 ? resolve({}) : reject('vy promahnulis');
    }, 3000); 
    });

    
       return promise;
};

function win() {
    console.log('vy pobiedili');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('vam kupili pivo');
}

function giveMoney() {
    console.log('Vam zaplatili');
}

function loose() {
    console.log('vy proigrali');
}

shoot({})
        .then(mark => console.log("vy popali v cel!"))
        .then(win)
        .catch(loose);
    

