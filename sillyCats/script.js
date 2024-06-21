async function getRandomCatFact() {

    const factResponse = await fetch('https://catfact.ninja/fact');
    const factData = await factResponse.json();
    console.log(factData);
    document.getElementById('cat-fact').innerText = factData.fact;
    
}


getRandomCatFact();
