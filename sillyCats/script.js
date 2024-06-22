async function getRandomCatFact() {

    const factResponse = await fetch('https://catfact.ninja/fact');
    const factData = await factResponse.json();
    const catFactElement = document.getElementById('cat-fact');
    
    catFactElement.innerText = factData.fact;

    
    const factLength = factData.fact.length;
    const minFontSize = 1; 
    const maxFontSize = 2.5; 
    const maxFactLength = 200; 

    const fontSize = Math.max(minFontSize, maxFontSize - (factLength / maxFactLength) * (maxFontSize - minFontSize));
    catFactElement.style.fontSize = `${fontSize}em`;


    const memeResponse = await fetch('https://api.thecatapi.com/v1/images/search');
    const memeData = await memeResponse.json();
    document.getElementById('cat-meme').src = memeData[0].url;
}

getRandomCatFact();
