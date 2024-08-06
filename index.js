const texts = [
    'Miau! Ich bin Katinator und kann deine Gedanken lesen. Hehehe',
    'Schaue mir tief in meine bezaubernden Augen und denke an deinen Song!',
    'Eine Pfote wäscht die andere, hehe. Jetzt will ich mein Gold!',
    'Hehehe Miau!'
]

let index = 0;

type = function() {
    const text = texts[index++];
    const element = document.getElementById('text');
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = null;
    element.innerText = text;
}

let click = 0;
document.getElementById('area').onclick = function() {
    type();
    if (click == 1)
        process();
    if (click == 3)
        swap_background();
    ++click;
}

process = function() {
    setTimeout(show_wheel, 10 * 1000);
    setTimeout(hide_wheel, 10 * 1000 + 4 * 1000);
}

show_wheel = function() {
    const element = document.createElement('div');
    element.id = 'wheel';
    element.classList = 'container';
    element.innerHTML = '<div class="loader"></div>'
    document.getElementById('area').appendChild(element);
}

hide_wheel = function() {
    document.getElementById('wheel').remove();
}

swap_background = function() {
    document.body.classList = 'cat2';
}

random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}