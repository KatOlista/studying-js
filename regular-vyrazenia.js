

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

       box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });
 

    // new RegExp('pattern', 'flags');

    // /pattern/flags

    // let ans = prompt('vvedite vasze imia');

    // let reg = /n/g;

    // console.log(ans.search(reg)); // ishet tolko piervoje vyrazenie

    // console.log(reg.test(ans));
    // FLAGI
    // i - iskat niezavisimo ot registra
    // g- ishem vse bukvy
    // m - mnogo strok

    // \d - ishet cyfry
    // \ww - ishet bukvy
    // \s - ishet probely
    // \D - ishet nie cyfry
    // \W - ishet vse krome bukv
    // \S - ishet krome probelov



    // console.log(ans.match(reg));

    // let pass = prompt('Vvedite parol');

    // console.log(pass.replace(/./g, '*'));
    // alert('12-34-56'.replace(/-/g, ':'));



    // let ans = prompt('vvedite 4islo');

    // let reg = /\d/g;

    // console.log(ans.match(reg));



    let str = 'My name is /R2D2';
    console.log(str.match(/\w\d\w\d/i));
    console.log(str.match(/\//i));

});