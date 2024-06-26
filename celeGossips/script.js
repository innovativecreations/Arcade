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

    const numHeadlines = parseInt(document.getElementById('num-headlines').value);
    let headlines = "";

    for (let i = 0; i < numHeadlines; i++) {
        const randomCelebrity = celebrities[Math.floor(Math.random() * celebrities.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        const randomSituation = situations[Math.floor(Math.random() * situations.length)];

        const gossip = `${randomCelebrity} ${randomAction} ${randomSituation}!`;
        headlines += `<p>${gossip}</p>`;
    }

    document.getElementById('gossip-display').innerHTML = headlines;
    document.getElementById('save-button').style.display = 'inline-block';
    document.getElementById('share-link').style.display = 'inline-block';
});

document.getElementById('save-button').addEventListener('click', function() {
    const headlines = document.getElementById('gossip-display').innerText;
    const blob = new Blob([headlines], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'headlines.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.getElementById('share-link').addEventListener('click', function(event) {
    const headlines = document.getElementById('gossip-display').innerText;
    const url = new URL(window.location.href);
    url.searchParams.set('headlines', encodeURIComponent(headlines));
    document.getElementById('share-link').href = url.toString();
    event.preventDefault();
    alert(`Share this link: ${url.toString()}`);
});
