/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    };
}

User.prototype.exit = function(name) {
    console.log('Polzovatel ' + this.name + ' ushel');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

    console.log(ivan);
    console.log(alex);

    ivan.exit();
*/

//'use strict'; //console.log(this) - budet zna4enie undefined

/*function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5); */

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }

};
obj.sum();

//_____________________

let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));  // privjazka funkcii k kontekstu user, mozno peredavat parametr v vide stroki
console.log(sayName.apply(user, ['Snow'])); // privjazka funkcii k kontekstu user. mozno peredavat drugie parametry v vide massiva

function count(number) {
    return this * number;
}

let double = count.bind(2);// bind(2) zamenit dannyje v this. eto jeshe 1 metod privjazki k kontekstu
console.log(double(3));
console.log(double(10));

let btn = document.querySelector("button");

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';

    function showThis() {
        console.log(this);
    }
    showThis();
});

//1) prosto vyzov funkcii rezultat - window/undefined
//2) metod objekta - this = objekt
//3) konstruktor (new) - this = novyj sozdannyj objekt
//4) ukazanie konkretnogo konteksta - call, apply, bind


