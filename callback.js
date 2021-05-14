function first() {
    setTimeout( function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log("Ja uczu " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("Ja proszel 3 urok!");
});