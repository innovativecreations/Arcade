async function getRandomCatFact() {
    const overlay = document.getElementById('overlay');
    const loader = document.getElementById('loader');
    const catFact = document.getElementById('cat-fact');
    const catMeme = document.getElementById('cat-meme');

    overlay.style.display = 'block';
    loader.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = 1;
        loader.style.opacity = 1;
    }, 0);
    catFact.style.opacity = 0;
    catMeme.style.opacity = 0;

    const factResponse = await fetch('https://catfact.ninja/fact');
    const factData = await factResponse.json();
    catFact.innerText = factData.fact;

    const factLength = factData.fact.length;
    const minFontSize = 1;
    const maxFontSize = 2.5;
    const maxFactLength = 200;

    const fontSize = Math.max(minFontSize, maxFontSize - (factLength / maxFactLength) * (maxFontSize - minFontSize));
    catFact.style.fontSize = `${fontSize}em`;

    const memeResponse = await fetch('https://api.thecatapi.com/v1/images/search');
    const memeData = await memeResponse.json();
    catMeme.src = memeData[0].url;

    catMeme.onload = () => {
        overlay.style.opacity = 0;
        loader.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none';
            loader.style.display = 'none';
        }, 500); 
        catFact.style.opacity = 1;
        catMeme.style.opacity = 1;
    };
}

getRandomCatFact();
