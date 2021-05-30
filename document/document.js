let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

let widthOffset = box.offsetWidth,
    heightOffset = box.offsetHeight;

let widthScroll = box.scrollWidth,
    heightScroll = box.scrollHeight;

    console.log(width);
    console.log(height);

    console.log(widthOffset);
    console.log(heightOffset);

    console.log(widthScroll);
    console.log(heightScroll);

    btn.addEventListener('click', function() {
        // box.style.height = box.scrollHeight + 'px';
        // console.log(box.scrollTop);
        box.scrollTop = 0; // peremeshaet v naczalo stranicy
    })

    console.log(box.getBoundingClientRect()); // koordinaty nashego elementa
    console.log(box.getBoundingClientRect().left);// tolko 1 parametr iz koordinat

    console.log(document.documentElement.clientWidth);// shyrina nashej stranicy
    console.log(document.documentElement.clientHeight); // vysota stranicy

    console.log(document.documentElement.scrollTop); // vysota otmotannogo documenta ot naczala scrolla

    scrollBy(0, 200);//(x, y)petemeshaem stranicu otnositelno nashego tekushego polozenia
    scrollTo(0, 200); //(x, y) peremestit v opredelennyje koordinaty na stranice otnositelno na4ala stranicy

