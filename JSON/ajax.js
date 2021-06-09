let inputRub = document.querySelector('.RUB__input'),
    inputUsd = document.querySelector('.USD__input');

 inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass); // method get - polu4aem dannye s servera, method post - otpravlaem dannyje na server
    // async - esli stoit false to poka server nie otvetit stranica visit
    // url - put k serveru
    request.open('GET', 'server.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // method setRequestHeader - nastrojki HTTP zaprosov
    //request.send(body); // otkyvajet soedinenie i otpravlajet zapros na server
    // argument mozet byt body ili head, body - jesli my otpravlaem na server infu s klientskoj 4asti

    request.send();

    // svojstva servera:
    // status - otvet v vide koda kotoryj pokazyvajet sostojanie servera - 404, 0, 200 ili drugie
    // statusText - v tekstovom vide otvet - t.e. pishet OK ili server nie otve4aet ili drugoje
    // responseText - tekst otveta servera - naprimer spisik tovarov
    // readyState - coderzit tekushee sostojanie zaprosa:
    //       - UNSENT - objekt sozdan no metod open jeshe nie wyzywalsa
    //       - OPENED - metod open() byl vyzvan
    //       - HEADERS_RECEIVED - metod send() byl vyzvan, dostupny zagolovki i status
    //       - LOADING - zagruzka, responceText soderzit 4asti4nyje dannyje
    //       - DONE - operacija zavershena

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
            // inputRub.value = inputUsd.value * data.usd;
        } else {
            inputUsd.value = "4to-to poshlo nie tak";
            console.log(request.status, request.readyState);
        }
    });
});
