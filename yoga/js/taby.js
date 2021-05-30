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

    // Timer

    let deadline = '2021-06-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),//parse - prevrashaet v milisekundy
        seconds = Math.floor((t/1000) % 60),// Math.floor - tolko celyje 4isla, % - delim na 60 i zapiszem v rezultat tolko ostatok
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        if (t <= 0) {
            hours = '0';
            minutes = '0';
            seconds = '0';
        }

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            }

            if(t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            }

            if(t.hours < 10) {
                hours.textContent = '0' + t.hours;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
});