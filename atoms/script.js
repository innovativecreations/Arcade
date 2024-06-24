document.getElementById('atom-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const atomicNumber = document.getElementById('atomic-number').value;

    if (atomicNumber < 1 || atomicNumber > 118) {
        alert("Please enter a valid atomic number (1-118).");
        return;
    }

    console.log('Atomic Number:', atomicNumber);

    document.getElementById('loader').style.display = 'block';
    document.getElementById('app').classList.add('blurred');
    document.getElementById('atom-info').innerHTML = '';
    document.getElementById('orbital-svg').innerHTML = '';

    setTimeout(() => {
        const atoms = {
            1: { name: 'Hydrogen', symbol: 'H', atomicMass: 1.008, state: 'Gas', electronConfig: '1s1', orbitals: [1] },
            2: { name: 'Helium', symbol: 'He', atomicMass: 4.0026, state: 'Gas', electronConfig: '1s2', orbitals: [2] },
            3: { name: 'Lithium', symbol: 'Li', atomicMass: 6.94, state: 'Solid', electronConfig: '[He] 2s1', orbitals: [2, 1] },
            4: { name: 'Beryllium', symbol: 'Be', atomicMass: 9.0122, state: 'Solid', electronConfig: '[He] 2s2', orbitals: [2, 2] },
            5: { name: 'Boron', symbol: 'B', atomicMass: 10.81, state: 'Solid', electronConfig: '[He] 2s2 2p1', orbitals: [2, 3] },
            6: { name: 'Carbon', symbol: 'C', atomicMass: 12.011, state: 'Solid', electronConfig: '[He] 2s2 2p2', orbitals: [2, 4] },
            7: { name: 'Nitrogen', symbol: 'N', atomicMass: 14.007, state: 'Gas', electronConfig: '[He] 2s2 2p3', orbitals: [2, 5] },
            8: { name: 'Oxygen', symbol: 'O', atomicMass: 15.999, state: 'Gas', electronConfig: '[He] 2s2 2p4', orbitals: [2, 6] },
            9: { name: 'Fluorine', symbol: 'F', atomicMass: 18.998, state: 'Gas', electronConfig: '[He] 2s2 2p5', orbitals: [2, 7] },
            10: { name: 'Neon', symbol: 'Ne', atomicMass: 20.180, state: 'Gas', electronConfig: '[He] 2s2 2p6', orbitals: [2, 8] },
            11: { name: 'Sodium', symbol: 'Na', atomicMass: 22.990, state: 'Solid', electronConfig: '[Ne] 3s1', orbitals: [2, 8, 1] },
            12: { name: 'Magnesium', symbol: 'Mg', atomicMass: 24.305, state: 'Solid', electronConfig: '[Ne] 3s2', orbitals: [2, 8, 2] },
            13: { name: 'Aluminum', symbol: 'Al', atomicMass: 26.982, state: 'Solid', electronConfig: '[Ne] 3s2 3p1', orbitals: [2, 8, 3] },
            14: { name: 'Silicon', symbol: 'Si', atomicMass: 28.085, state: 'Solid', electronConfig: '[Ne] 3s2 3p2', orbitals: [2, 8, 4] },
            15: { name: 'Phosphorus', symbol: 'P', atomicMass: 30.974, state: 'Solid', electronConfig: '[Ne] 3s2 3p3', orbitals: [2, 8, 5] },
            16: { name: 'Sulfur', symbol: 'S', atomicMass: 32.06, state: 'Solid', electronConfig: '[Ne] 3s2 3p4', orbitals: [2, 8, 6] },
            17: { name: 'Chlorine', symbol: 'Cl', atomicMass: 35.45, state: 'Gas', electronConfig: '[Ne] 3s2 3p5', orbitals: [2, 8, 7] },
            18: { name: 'Argon', symbol: 'Ar', atomicMass: 39.948, state: 'Gas', electronConfig: '[Ne] 3s2 3p6', orbitals: [2, 8, 8] },
            19: { name: 'Potassium', symbol: 'K', atomicMass: 39.098, state: 'Solid', electronConfig: '[Ar] 4s1', orbitals: [2, 8, 8, 1] },
            20: { name: 'Calcium', symbol: 'Ca', atomicMass: 40.078, state: 'Solid', electronConfig: '[Ar] 4s2', orbitals: [2, 8, 8, 2] },
            21: { name: 'Scandium', symbol: 'Sc', atomicMass: 44.955908, state: 'Solid', electronConfig: '[Ar] 3d1 4s2', orbitals: [2, 8, 9, 2] },
            22: { name: 'Titanium', symbol: 'Ti', atomicMass: 47.867, state: 'Solid', electronConfig: '[Ar] 3d2 4s2', orbitals: [2, 8, 10, 2] },
            23: { name: 'Vanadium', symbol: 'V', atomicMass: 50.9415, state: 'Solid', electronConfig: '[Ar] 3d3 4s2', orbitals: [2, 8, 11, 2] },
            24: { name: 'Chromium', symbol: 'Cr', atomicMass: 51.9961, state: 'Solid', electronConfig: '[Ar] 3d5 4s1', orbitals: [2, 8, 13, 1] },
            25: { name: 'Manganese', symbol: 'Mn', atomicMass: 54.938045, state: 'Solid', electronConfig: '[Ar] 3d5 4s2', orbitals: [2, 8, 13, 2] },
            26: { name: 'Iron', symbol: 'Fe', atomicMass: 55.845, state: 'Solid', electronConfig: '[Ar] 3d6 4s2', orbitals: [2, 8, 14, 2] },
            27: { name: 'Cobalt', symbol: 'Co', atomicMass: 58.933195, state: 'Solid', electronConfig: '[Ar] 3d7 4s2', orbitals: [2, 8, 15, 2] },
            28: { name: 'Nickel', symbol: 'Ni', atomicMass: 58.6934, state: 'Solid', electronConfig: '[Ar] 3d8 4s2', orbitals: [2, 8, 16, 2] },
            29: { name: 'Copper', symbol: 'Cu', atomicMass: 63.546, state: 'Solid', electronConfig: '[Ar] 3d10 4s1', orbitals: [2, 8, 18, 1] },
            30: { name: 'Zinc', symbol: 'Zn', atomicMass: 65.38, state: 'Solid', electronConfig: '[Ar] 3d10 4s2', orbitals: [2, 8, 18, 2] },
            31: { name: 'Gallium', symbol: 'Ga', atomicMass: 69.723, state: 'Solid', electronConfig: '[Ar] 3d10 4s2 4p1', orbitals: [2, 8, 18, 3] },
            32: { name: 'Germanium', symbol: 'Ge', atomicMass: 72.63, state: 'Solid', electronConfig: '[Ar] 3d10 4s2 4p2', orbitals: [2, 8, 18, 4] },
            33: { name: 'Arsenic', symbol: 'As', atomicMass: 74.9216, state: 'Solid', electronConfig: '[Ar] 3d10 4s2 4p3', orbitals: [2, 8, 18, 5] },
            34: { name: 'Selenium', symbol: 'Se', atomicMass: 78.96, state: 'Solid', electronConfig: '[Ar] 3d10 4s2 4p4', orbitals: [2, 8, 18, 6] },
            35: { name: 'Bromine', symbol: 'Br', atomicMass: 79.904, state: 'Liquid', electronConfig: '[Ar] 3d10 4s2 4p5', orbitals: [2, 8, 18, 7] },
            36: { name: 'Krypton', symbol: 'Kr', atomicMass: 83.798, state: 'Gas', electronConfig: '[Ar] 3d10 4s2 4p6', orbitals: [2, 8, 18, 8] },
            37: { name: 'Rubidium', symbol: 'Rb', atomicMass: 85.4678, state: 'Solid', electronConfig: '[Kr] 5s1', orbitals: [2, 8, 18, 8, 1] },
            38: { name: 'Strontium', symbol: 'Sr', atomicMass: 87.62, state: 'Solid', electronConfig: '[Kr] 5s2', orbitals: [2, 8, 18, 8, 2] },
            39: { name: 'Yttrium', symbol: 'Y', atomicMass: 88.90585, state: 'Solid', electronConfig: '[Kr] 4d1 5s2', orbitals: [2, 8, 18, 9, 2] },
            40: { name: 'Zirconium', symbol: 'Zr', atomicMass: 91.224, state: 'Solid', electronConfig: '[Kr] 4d2 5s2', orbitals: [2, 8, 18, 10, 2] },
            41: { name: 'Niobium', symbol: 'Nb', atomicMass: 92.90638, state: 'Solid', electronConfig: '[Kr] 4d4 5s1', orbitals: [2, 8, 18, 12, 1] },
            42: { name: 'Molybdenum', symbol: 'Mo', atomicMass: 95.96, state: 'Solid', electronConfig: '[Kr] 4d5 5s1', orbitals: [2, 8, 18, 13, 1] },
            43: { name: 'Technetium', symbol: 'Tc', atomicMass: [98], state: 'Solid', electronConfig: '[Kr] 4d5 5s2', orbitals: [2, 8, 18, 13, 2] },
            44: { name: 'Ruthenium', symbol: 'Ru', atomicMass: 101.07, state: 'Solid', electronConfig: '[Kr] 4d7 5s1', orbitals: [2, 8, 18, 15, 1] },
            45: { name: 'Rhodium', symbol: 'Rh', atomicMass: 102.90550, state: 'Solid', electronConfig: '[Kr] 4d8 5s1', orbitals: [2, 8, 18, 16, 1] },
            46: { name: 'Palladium', symbol: 'Pd', atomicMass: 106.42, state: 'Solid', electronConfig: '[Kr] 4d10', orbitals: [2, 8, 18, 18] },
            47: { name: 'Silver', symbol: 'Ag', atomicMass: 107.8682, state: 'Solid', electronConfig: '[Kr] 4d10 5s1', orbitals: [2, 8, 18, 18, 1] },
            48: { name: 'Cadmium', symbol: 'Cd', atomicMass: 112.414, state: 'Solid', electronConfig: '[Kr] 4d10 5s2', orbitals: [2, 8, 18, 18, 2] },
            49: { name: 'Indium', symbol: 'In', atomicMass: 114.818, state: 'Solid', electronConfig: '[Kr] 4d10 5s2 5p1', orbitals: [2, 8, 18, 18, 3] },
            50: { name: 'Tin', symbol: 'Sn', atomicMass: 118.710, state: 'Solid', electronConfig: '[Kr] 4d10 5s2 5p2', orbitals: [2, 8, 18, 18, 4] },
            51: { name: 'Antimony', symbol: 'Sb', atomicMass: 121.760, state: 'Solid', electronConfig: '[Kr] 4d10 5s2 5p3', orbitals: [2, 8, 18, 18, 5] },
            52: { name: 'Tellurium', symbol: 'Te', atomicMass: 127.60, state: 'Solid', electronConfig: '[Kr] 4d10 5s2 5p4', orbitals: [2, 8, 18, 18, 6] },
            53: { name: 'Iodine', symbol: 'I', atomicMass: 126.90447, state: 'Solid', electronConfig: '[Kr] 4d10 5s2 5p5', orbitals: [2, 8, 18, 18, 7] },
            54: { name: 'Xenon', symbol: 'Xe', atomicMass: 131.293, state: 'Gas', electronConfig: '[Kr] 4d10 5s2 5p6', orbitals: [2, 8, 18, 18, 8] },
            55: { name: 'Cesium', symbol: 'Cs', atomicMass: 132.90545196, state: 'Solid', electronConfig: '[Xe] 6s1', orbitals: [2, 8, 18, 18, 8, 1] },
            56: { name: 'Barium', symbol: 'Ba', atomicMass: 137.327, state: 'Solid', electronConfig: '[Xe] 6s2', orbitals: [2, 8, 18, 18, 8, 2] },
            57: { name: 'Lanthanum', symbol: 'La', atomicMass: 138.90547, state: 'Solid', electronConfig: '[Xe] 5d1 6s2', orbitals: [2, 8, 18, 18, 9, 2] },
            58: { name: 'Cerium', symbol: 'Ce', atomicMass: 140.116, state: 'Solid', electronConfig: '[Xe] 4f1 5d1 6s2', orbitals: [2, 8, 18, 19, 9, 2] },
            59: { name: 'Praseodymium', symbol: 'Pr', atomicMass: 140.90766, state: 'Solid', electronConfig: '[Xe] 4f3 6s2', orbitals: [2, 8, 18, 21, 8, 2] },
            60: { name: 'Neodymium', symbol: 'Nd', atomicMass: 144.242, state: 'Solid', electronConfig: '[Xe] 4f4 6s2', orbitals: [2, 8, 18, 22, 8, 2] },
            61: { name: 'Promethium', symbol: 'Pm', atomicMass: 145, state: 'Solid', electronConfig: '[Xe] 4f5 6s2', orbitals: [2, 8, 18, 23, 8, 2] },
            62: { name: 'Samarium', symbol: 'Sm', atomicMass: 150.36, state: 'Solid', electronConfig: '[Xe] 4f6 6s2', orbitals: [2, 8, 18, 24, 8, 2] },
            63: { name: 'Europium', symbol: 'Eu', atomicMass: 151.964, state: 'Solid', electronConfig: '[Xe] 4f7 6s2', orbitals: [2, 8, 18, 25, 8, 2] },
            64: { name: 'Gadolinium', symbol: 'Gd', atomicMass: 157.25, state: 'Solid', electronConfig: '[Xe] 4f7 5d1 6s2', orbitals: [2, 8, 18, 25, 9, 2] },
            65: { name: 'Terbium', symbol: 'Tb', atomicMass: 158.92535, state: 'Solid', electronConfig: '[Xe] 4f9 6s2', orbitals: [2, 8, 18, 27, 8, 2] },
            66: { name: 'Dysprosium', symbol: 'Dy', atomicMass: 162.500, state: 'Solid', electronConfig: '[Xe] 4f10 6s2', orbitals: [2, 8, 18, 28, 8, 2] },
            67: { name: 'Holmium', symbol: 'Ho', atomicMass: 164.93033, state: 'Solid', electronConfig: '[Xe] 4f11 6s2', orbitals: [2, 8, 18, 29, 8, 2] },
            68: { name: 'Erbium', symbol: 'Er', atomicMass: 167.259, state: 'Solid', electronConfig: '[Xe] 4f12 6s2', orbitals: [2, 8, 18, 30, 8, 2] },
            69: { name: 'Thulium', symbol: 'Tm', atomicMass: 168.93422, state: 'Solid', electronConfig: '[Xe] 4f13 6s2', orbitals: [2, 8, 18, 31, 8, 2] },
            70: { name: 'Ytterbium', symbol: 'Yb', atomicMass: 173.04, state: 'Solid', electronConfig: '[Xe] 4f14 6s2', orbitals: [2, 8, 18, 32, 8, 2] },
            71: { name: 'Lutetium', symbol: 'Lu', atomicMass: 174.9668, state: 'Solid', electronConfig: '[Xe] 4f14 5d1 6s2', orbitals: [2, 8, 18, 32, 9, 2] },
            72: { name: 'Hafnium', symbol: 'Hf', atomicMass: 178.49, state: 'Solid', electronConfig: '[Xe] 4f14 5d2 6s2', orbitals: [2, 8, 18, 32, 10, 2] },
            73: { name: 'Tantalum', symbol: 'Ta', atomicMass: 180.94788, state: 'Solid', electronConfig: '[Xe] 4f14 5d3 6s2', orbitals: [2, 8, 18, 32, 11, 2] },
            74: { name: 'Tungsten', symbol: 'W', atomicMass: 183.84, state: 'Solid', electronConfig: '[Xe] 4f14 5d4 6s2', orbitals: [2, 8, 18, 32, 12, 2] },
            75: { name: 'Rhenium', symbol: 'Re', atomicMass: 186.207, state: 'Solid', electronConfig: '[Xe] 4f14 5d5 6s2', orbitals: [2, 8, 18, 32, 13, 2] },
            76: { name: 'Osmium', symbol: 'Os', atomicMass: 190.23, state: 'Solid', electronConfig: '[Xe] 4f14 5d6 6s2', orbitals: [2, 8, 18, 32, 14, 2] },
            77: { name: 'Iridium', symbol: 'Ir', atomicMass: 192.217, state: 'Solid', electronConfig: '[Xe] 4f14 5d7 6s2', orbitals: [2, 8, 18, 32, 15, 2] },
            78: { name: 'Platinum', symbol: 'Pt', atomicMass: 195.084, state: 'Solid', electronConfig: '[Xe] 4f14 5d9 6s1', orbitals: [2, 8, 18,]}
        };

        const atom = atoms[atomicNumber];

        if (atom) {
            document.getElementById('atom-info').innerHTML = `
                <h2>${atom.name} (${atom.symbol})</h2>
                <p>Atomic Number: ${atomicNumber}</p>
                <p>Atomic Mass: ${atom.atomicMass}</p>
                <p>State at Room Temperature: ${atom.state}</p>
                <p>Electron Configuration: ${atom.electronConfig}</p>
            `;

            visualizeOrbitals(atom.symbol, atom.orbitals);
        } else {
            document.getElementById('atom-info').innerHTML = `
                <p>No information available for atomic number ${atomicNumber}.</p>
            `;
            document.getElementById('orbital-svg').innerHTML = '';
        }

        document.getElementById('loader').style.display = 'none';
        document.getElementById('app').classList.remove('blurred');
    }, 1000);
});

function visualizeOrbitals(symbol, orbitals) {
    const svg = document.getElementById('orbital-svg');
    svg.innerHTML = '';

    const centerX = svg.clientWidth / 2;
    const centerY = svg.clientHeight / 2;

    const nucleus = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    nucleus.setAttribute('cx', centerX);
    nucleus.setAttribute('cy', centerY);
    nucleus.setAttribute('r', 20);
    nucleus.setAttribute('fill', 'red');
    svg.appendChild(nucleus);

    const symbolText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    symbolText.setAttribute('x', centerX);
    symbolText.setAttribute('y', centerY + 5);
    symbolText.setAttribute('text-anchor', 'middle');
    symbolText.setAttribute('fill', 'white');
    symbolText.setAttribute('font-size', '16');
    symbolText.setAttribute('font-family', 'Arial');
    symbolText.textContent = symbol;
    svg.appendChild(symbolText);

    orbitals.forEach((electronCount, orbitalIndex) => {
        const radius = (orbitalIndex + 1) * 40;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', radius);
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('fill', 'none');
        svg.appendChild(circle);

        for (let i = 0; i < electronCount; i++) {
            const angle = (i / electronCount) * 2 * Math.PI;
            const electronX = centerX + radius * Math.cos(angle);
            const electronY = centerY + radius * Math.sin(angle);

            const electronGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            electronGroup.setAttribute('class', 'electron-group');
            electronGroup.setAttribute('transform-origin', `${centerX}px ${centerY}px`);
            electronGroup.style.animation = `rotate ${5 + orbitalIndex}s linear infinite`;

            const electron = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            electron.setAttribute('cx', electronX);
            electron.setAttribute('cy', electronY);
            electron.setAttribute('r', 5);
            electron.setAttribute('fill', 'yellow');

            electronGroup.appendChild(electron);
            svg.appendChild(electronGroup);
        }
    });
}
