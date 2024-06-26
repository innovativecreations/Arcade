document.getElementById('generate-button').addEventListener('click', function() {
    const celebrities = [
        "Taylor Swift", "Kanye West", "Kim Kardashian", "Brad Pitt", 
        "Angelina Jolie", "Justin Bieber", "Selena Gomez", "Tom Cruise", 
        "Scarlett Johansson", "Chris Hemsworth", "Ariana Grande", 
        "Leonardo DiCaprio", "Beyoncé", "Jay-Z", "Rihanna", "Drake"
    ];

    const actions = [
        "was spotted", "was seen", "was caught", "was rumored to be", 
        "is planning to", "is reportedly", "is allegedly", "is considering"
    ];

    const situations = [
        "buying a mansion in Beverly Hills", "dating a mystery person", 
        "starting a new fashion line", "working on a secret project", 
        "having a public meltdown", "planning a surprise concert", 
        "joining a new movie franchise", "getting back with their ex"
    ];

    const randomCelebrity = celebrities[Math.floor(Math.random() * celebrities.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomSituation = situations[Math.floor(Math.random() * situations.length)];

    const gossip = `${randomCelebrity} ${randomAction} ${randomSituation}!`;
    document.getElementById('gossip-display').innerText = gossip;
});
