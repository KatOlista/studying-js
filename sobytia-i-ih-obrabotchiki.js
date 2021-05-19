let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('Vy nazali 1 knopku');
// };

btn[0].addEventListener('click', function(event) {
    // console.log(event);
    // console.log('Vy opiat nazali 1 knopku');
    // let target = event.target;
    // target.style.display = 'none';
    console.log('Proizoshlo sobytie: ' + event.type + ' na elemente ' + event.target);
});

wrap.addEventListener('click', function() {
    console.log('Proizoshlo sobytie: ' + event.type + ' na elemente ' + event.target);
});
// btn[0].addEventListener('mouseenter', function() {
//     alert('Vy naveli na 1 knopku');
// });

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Proizoshlo sobytie: ' + event.type + ' na elemente ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('vyshli');
    })
});