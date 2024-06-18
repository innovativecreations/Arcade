document.getElementById('changeColorButton').addEventListener('click', changeColors);

function changeColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    
    document.body.style.backgroundColor = randomColor1;
    document.getElementById('changeColorButton').style.backgroundColor = randomColor2;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
