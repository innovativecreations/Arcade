document.getElementById('atom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const atomicNumber = document.getElementById('atomic-number').value;

    if (atomicNumber < 1 || atomicNumber > 118) {
        alert("Please enter a valid atomic number (1-118).");
        return;
    }

    console.log('Atomic Number:', atomicNumber);


    const atoms = {
        1: { name: 'Hydrogen', symbol: 'H', atomicMass: 1.008 },
        2: { name: 'Helium', symbol: 'He', atomicMass: 4.0026 },

    };

    const atom = atoms[atomicNumber];

    if (atom) {
        document.getElementById('atom-info').innerHTML = `
            <h2>${atom.name} (${atom.symbol})</h2>
            <p>Atomic Number: ${atomicNumber}</p>
            <p>Atomic Mass: ${atom.atomicMass}</p>
        `;
    } else {
        document.getElementById('atom-info').innerHTML = `
            <p>No information available for atomic number ${atomicNumber}.</p>
        `;
    }
});
