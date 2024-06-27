// let isDancing = false;
// let danceInterval;
// let imageInterval;

// const rockImages = [
//     'dino.png',
//     'dino1.png',
//     'dino2.png',
//     'dino3.png'
// ];

// document.getElementById('dance-button').addEventListener('click', function() {
//     const rock = document.getElementById('pet-rock');
//     const music = document.getElementById('dance-music');

//     const danceMoves = [
//         { transform: 'translateX(50px)' },
//         { transform: 'translateX(-50px)' },
//         { transform: 'translateY(50px)' },
//         { transform: 'translateY(-50px)' },
//         { transform: 'rotate(20deg)' },
//         { transform: 'rotate(-20deg)' }
//     ];

//     if (!isDancing) {
//         music.play();
//         danceInterval = setInterval(() => {
//             const randomMove = danceMoves[Math.floor(Math.random() * danceMoves.length)];
//             rock.style.transform = randomMove.transform;
//         }, 500);

//         imageInterval = setInterval(() => {
//             const randomImage = rockImages[Math.floor(Math.random() * rockImages.length)];
//             rock.style.backgroundImage = `url(${randomImage})`;
//         }, 1000);

//         isDancing = true;
//     } else {
//         clearInterval(danceInterval);
//         clearInterval(imageInterval);
//         rock.style.transform = '';
//         rock.style.backgroundImage = `url('dino.png')`;
//         music.pause();
//         music.currentTime = 0;
//         isDancing = false;
//     }
// });
let isDancing = false;
let danceInterval;
let imageInterval;

const rockImages = [
    'dino4.png',
    'dino1.png',
    'dino2.png',
    'dino3.png'
];

document.getElementById('dance-button').addEventListener('click', function() {
    const rock = document.getElementById('pet-rock');
    const music = document.getElementById('dance-music');
    const discoLight = document.createElement('div');
    discoLight.id = 'disco-light';

    const danceMoves = [
        { transform: 'translateX(50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateY(50px)' },
        { transform: 'translateY(-50px)' },
        { transform: 'rotate(20deg)' },
        { transform: 'rotate(-20deg)' }
    ];

    if (!isDancing) {
        document.body.appendChild(discoLight);
        music.play();
        document.getElementById("dance-button").innerText = "let me catch my breath"
        danceInterval = setInterval(() => {
            const randomMove = danceMoves[Math.floor(Math.random() * danceMoves.length)];
            rock.style.transform = randomMove.transform;
        }, 500);

        imageInterval = setInterval(() => {
            const randomImage = rockImages[Math.floor(Math.random() * rockImages.length)];
            rock.style.backgroundImage = `url(${randomImage})`;
        }, 1000);

        isDancing = true;
    } else {
        clearInterval(danceInterval);
        clearInterval(imageInterval);
        rock.style.transform = '';
        rock.style.backgroundImage = `url('dino.png')`;
        music.pause();
        music.currentTime = 0;
        document.body.removeChild(document.getElementById('disco-light'));
        isDancing = false;
        document.getElementById("dance-button").innerText = "Don't stop guys, party has just started"
    }
});
