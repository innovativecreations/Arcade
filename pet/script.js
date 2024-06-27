// document.getElementById('dance-button').addEventListener('click', function() {
//     const rock = document.getElementById('pet-rock');
//     const music = document.getElementById('dance-music');
//     let danceInterval;

//     const danceMoves = [
//         { transform: 'translateX(50px)' },
//         { transform: 'translateX(-50px)' },
//         { transform: 'translateY(50px)' },
//         { transform: 'translateY(-50px)' },
//         { transform: 'rotate(20deg)' },
//         { transform: 'rotate(-20deg)' }
//     ];

//     const startDancing = () => {
//         music.play();
//         danceInterval = setInterval(() => {
//             const randomMove = danceMoves[Math.floor(Math.random() * danceMoves.length)];
//             rock.style.transform = randomMove.transform;
//         }, 500);
//     };

//     const stopDancing = () => {
//         clearInterval(danceInterval);
//         rock.style.transform = '';
//         music.pause();
//         music.currentTime = 0;
//     };

//     startDancing();
//     setTimeout(stopDancing, 5000);
// });




let isDancing = false;
let danceInterval;

document.getElementById('dance-button').addEventListener('click', function() {
    const rock = document.getElementById('pet-rock');
    const music = document.getElementById('dance-music');

    const danceMoves = [
        { transform: 'translateX(50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateY(50px)' },
        { transform: 'translateY(-50px)' },
        { transform: 'rotate(20deg)' },
        { transform: 'rotate(-20deg)' }
    ];

    if (!isDancing) {
        music.play();
        danceInterval = setInterval(() => {
            const randomMove = danceMoves[Math.floor(Math.random() * danceMoves.length)];
            rock.style.transform = randomMove.transform;
        }, 500);
        isDancing = true;
    } else {
        clearInterval(danceInterval);
        rock.style.transform = '';
        music.pause();
        music.currentTime = 0;
        isDancing = false;
    }
});
