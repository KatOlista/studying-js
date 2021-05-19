let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart');
let oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; 1 < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

heart.forEach(function (item, i, hearts) {
    item.style.backgroundColor = 'yellowgreen';
});

let div = document.createElement('div');
text = document.createTextNode('Tut byla ja');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

// div.innerHTML = '<h1>Hello world!</h1>';

div.textContent = 'Hello world!';

console.log(div);