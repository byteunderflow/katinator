const texts = [
    'Miau! Ich bin Katinator und kann deine Gedanken lesen. Hehehe',
    'Schaue mir tief in meine bezaubernden Augen und denke an deinen Song!',
    'Eine Pfote wäscht die andere, hehe. Jetzt will ich mein Gold!',
    'Hehehe Miau!'
]

const textElement = document.getElementById('text');
let textIndex = 0;
let index = 0;
let content = '';

type = function() {
    const text = texts[textIndex];

    if (index < text.length) {
        content += text.charAt(index);
        textElement.innerText = content;
        ++index;
        setTimeout(type, 1);
    } else {
        ++textIndex;
        index = 0;
        content = '';
    }
}

let clickIndex = 0;
document.getElementById('area').onclick = function() {
    type();

    if (clickIndex == 1)
        process();

    if (clickIndex == 3)
        swap_background();

    ++clickIndex;
}

process = function() {
    setTimeout(show_wheel, 1 * 1000);
    setTimeout(hide_wheel, 1 * 1000 + 2 * 1000);
}

show_wheel = function() {
    const wheelElement = document.createElement('div');
    wheelElement.id = 'wheel';
    wheelElement.classList = 'container';
    wheelElement.innerHTML = '<div class="loader"></div>'
    document.getElementById('area').appendChild(wheelElement);
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