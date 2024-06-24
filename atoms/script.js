document.getElementById('atom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const atomicNumber = document.getElementById('atomic-number').value;

    if (atomicNumber < 1 || atomicNumber > 118) {
        alert("Please enter a valid atomic number (1-118).");
        return;
    }

    console.log('Atomic Number:', atomicNumber);

    const atoms = {
        1: { name: 'Hydrogen', symbol: 'H', atomicMass: 1.008, orbitals: [1] },
        2: { name: 'Helium', symbol: 'He', atomicMass: 4.0026, orbitals: [2] },
        3: { name: 'Lithium', symbol: 'Li', atomicMass: 6.94, orbitals: [2, 1] },
        4: { name: 'Beryllium', symbol: 'Be', atomicMass: 9.0122, orbitals: [2, 2] },
        5: { name: 'Boron', symbol: 'B', atomicMass: 10.81, orbitals: [2, 3] },
        6: { name: 'Carbon', symbol: 'C', atomicMass: 12.011, orbitals: [2, 4] },
        7: { name: 'Nitrogen', symbol: 'N', atomicMass: 14.007, orbitals: [2, 5] },
        8: { name: 'Oxygen', symbol: 'O', atomicMass: 15.999, orbitals: [2, 6] },
        9: { name: 'Fluorine', symbol: 'F', atomicMass: 18.998, orbitals: [2, 7] },
        10: { name: 'Neon', symbol: 'Ne', atomicMass: 20.180, orbitals: [2, 8] },
        11: { name: 'Sodium', symbol: 'Na', atomicMass: 22.990, orbitals: [2, 8, 1] },
        12: { name: 'Magnesium', symbol: 'Mg', atomi:, },
    };


    
    const atom = atoms[atomicNumber];

    if (atom) {
        document.getElementById('atom-info').innerHTML = `
            <h2>${atom.name} (${atom.symbol})</h2>
            <p>Atomic Number: ${atomicNumber}</p>
            <p>Atomic Mass: ${atom.atomicMass}</p>
        `;

        visualizeOrbitals(atom.orbitals);
    } else {
        document.getElementById('atom-info').innerHTML = `
            <p>No information available for atomic number ${atomicNumber}.</p>
        `;
        document.getElementById('orbital-svg').innerHTML = '';
    }
});

function visualizeOrbitals(orbitals) {
    const svg = document.getElementById('orbital-svg');
    svg.innerHTML = ''; 
    const centerX = svg.clientWidth / 2;
    const centerY = svg.clientHeight / 2;

    orbitals.forEach((radius, index) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', radius * 40); 
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('fill', 'none');
        svg.appendChild(circle);
    });
}
