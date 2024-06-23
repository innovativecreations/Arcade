document.getElementById('potato').addEventListener('click', growPotato);

function growPotato() {
    const potato = document.getElementById('potato');
    const currentWidth = potato.clientWidth;
    const currentHeight = potato.clientHeight;


    const newWidth = currentWidth * 1.1;
    const newHeight = currentHeight * 1.1;

    if (newHeight >= window.innerHeight) {
        potato.style.width = '200px';
        potato.style.height = '200px';
    } else {
        potato.style.width = newWidth + 'px';
        potato.style.height = newHeight + 'px';
    }
}
