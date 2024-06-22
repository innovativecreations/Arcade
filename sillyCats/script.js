async function getRandomCatFact() {
    const loader = document.getElementById('loader');
    const catFact = document.getElementById('cat-fact');
    const catMeme = document.getElementById('cat-meme');

    loader.style.display = 'block';
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

    loader.style.display = 'none';
    catFact.style.opacity = 1;
    catMeme.style.opacity = 1;
}

getRandomCatFact();
