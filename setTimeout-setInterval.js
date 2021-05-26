//setTimeout - zaderzka pered zapuskom

// let timerId = setTimeout(sayHello, 3000); //(function, delay)
// clearTimeout(timerId); //ostanavlivaet zaderzku

// function sayHello() {
//     console.log('Hello world!');
// }

// let timerInterval = setInterval(sayHello, 3000);
// clearTimeout(timerInterval);



// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.blue-square');

    console.log(btn);
    console.log(elem);

    function myAnimation() {
        let pos = 0;
        let timerId = setInterval(frame, 10);

        function frame() {
            if (pos == 350) {
                clearInterval(timerId);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    btn.addEventListener('click', myAnimation);

    let btnBlock = document.querySelector('.btn-block');
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    // if(event.target && event.target.tagName == 'BUTTON' ) {
        //console.log('Hello!');} // vse knopki
    if(event.target && event.target.matches('button.first') ) { // ishem sovpadenie
        //if(event.target && event.target.classList.contains('first') ) // proverka po klassu
        console.log('Hello!'); // konkretnaja knopka
    }
})