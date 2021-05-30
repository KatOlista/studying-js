//window.addEventListener('load'); obrabot4ik sobytij load 
//- js budet vypolniatsa posle zagruzki vseh kartinok, elementov i drugogo iz html i css

//window.addEventListener('DOMContentLoaded'); //- srabatyvajet kogda polnostju zagruzilas dom-struktura
// t.e.to s 4em my bydem rabotat uze zagruzeno, a kartinki i t.d. jesze gruzatsa

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});