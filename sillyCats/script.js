async function getRandomCatFact() {

    const factResponse = await fetch('https://catfact.ninja/fact');
    const factData = await factResponse.json();
    console.log(factData);
    document.getElementById('cat-fact').innerText = factData.fact;

   const memeResponse = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!memeResponse.ok) {
            throw new Error('Failed to fetch cat meme');
        }
        const memeData = await memeResponse.json();
        document.getElementById('cat-meme').src = memeData[0].url;
}


getRandomCatFact();
