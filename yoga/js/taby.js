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
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

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

/*    let deadline = '2021-05-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),//parse - prevrashaet v milisekundy
        seconds = Math.floor((t/1000) % 60),// Math.floor - tolko celyje 4isla, % - delim na 60 i zapiszem v rezultat tolko ostatok
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        if (t <= 0) { // 00 pri okon4anii taimera
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


            // function addZero(num){
            //     if(num <= 9) {
            //         return '0' + num;
            //     } else return num;
            // };

            // hours.textContent = addZero(t.hours);
            // minutes.textContent = addZero(t.minutes);
            // seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);               
            }
        }
    }
    setClock('timer', deadline);
}); */
let deadline = '2021-06-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

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
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else {
                            return num;
                        }
                    }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);


    // Modal

    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn'),
        btnLe4enie = descriptionBtn[0],
        btnOtdych = descriptionBtn[1],
        btnPriroda = descriptionBtn[2],
        btnYoga = descriptionBtn[3];
     
        btnLe4enie.addEventListener('click', function knowMore() {
            overlay.style.display = 'block';
            descriptionBtn[0].classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        btnOtdych.addEventListener('click', function knowMore() {
            overlay.style.display = 'block';
            descriptionBtn[1].classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        btnPriroda.addEventListener('click', function knowMore() {
            overlay.style.display = 'block';
            descriptionBtn[2].classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        btnYoga.addEventListener('click', function knowMore() {
            overlay.style.display = 'block';
            descriptionBtn[3].classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

    // Form

    let message = {
        loading: "Zagruzka",
        success: "Spasibo my s vami sviazemsa",
        failure: "4to ot poshlo nie tak"
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        

        form.addEventListener('submit', function(event) { // sobytie naveshivajem nie na knopku a na formu
            event.preventDefault(); // otmeniajet povedenie brauzera po umol4aniu
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded'); //oby4nyj format otpravlajemyh dannyh
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // dla otpravki dannyh v JSON formate

            let formData = new FormData(form);

            let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;                
            });
            let json = JSON.stringify(obj); // prevrashaem formData v JSON format ( script na4inajetsa so stroki let obj)

            request.send(json);

            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;                  
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;                 
                } else {
                    statusMessage.innerHTML = message.failure;                   
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
    });

       

// Kontact form

        let contactForm = document.getElementById('form'),
            contactInput = contactForm.getElementsByTagName('input');

            console.log(contactForm);
            console.log(contactInput[0]);

            contactInput[0].name = 'email';
            contactInput[1].name = 'telefon';

        contactForm.addEventListener('submit', function(event){
            event.preventDefault();
            
            contactForm.appendChild(statusMessage);
            
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

            let contactFormData = new FormData(contactForm);
            request.send(contactFormData);

            request.addEventListener('readystatechange', function(){
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }
        
        });
   
});

