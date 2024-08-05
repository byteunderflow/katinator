const texts = [
    'Miau! Ich bin Katinator und kann deine Gedanken lesen. Hehehe',
    'Schau mir tief in meine bezaubernden Augen und denke an deinen Song!',
    'Miau'
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

random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let clickIndex = 0;
document.getElementById('area').onclick = function() {
    if (clickIndex < 2)
        type();
    ++clickIndex;

    if (clickIndex == 2) {
        process();
    }
}

process = function() {
    setTimeout(wheel, 1 * 1000);
}

wheel = function() {
    const wheelElement = document.createElement('div');
    wheelElement.classList = 'loader-container';
    wheelElement.innerHTML = '<div class="loader"></div>'
    document.getElementById('area').appendChild(wheelElement);
}