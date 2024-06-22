async function getRandomCatFact() {

    const factResponse = await fetch('https://catfact.ninja/fact');
    const factData = await factResponse.json();
    const catFactElement = document.getElementById('cat-fact');
    
    catFactElement.innerText = factData.fact;


    const memeResponse = await fetch('https://api.thecatapi.com/v1/images/search');
    const memeData = await memeResponse.json();
    document.getElementById('cat-meme').src = memeData[0].url;
}

getRandomCatFact();
