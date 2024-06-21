function getRandomCatFact() {

    const factResponse = fetch('https://catfact.ninja/fact');
    const factData = factResponse.json();
    console.log(factData);
}


getRandomCatFact();
