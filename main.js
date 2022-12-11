let pickButton = document.getElementById('click-color');

let scrollButton = document.getElementById('scrollable-color');

function colorValue() {
    return Math.floor(Math.random() * 256);
}

function colorChange(event) {
    let randomColor = `rgb(${colorValue()}, ${colorValue()}, ${colorValue()})`;
    event.target.style.backgroundColor = randomColor;
}

pickButton.addEventListener('click', colorChange);

scrollButton.addEventListener('wheel', colorChange)




//`rgb(${colorValue}, ${colorValue}, ${colorValue})`;
//'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';