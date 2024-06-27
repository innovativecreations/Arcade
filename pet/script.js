document.getElementById('dance-button').addEventListener('click', function() {
    const rock = document.getElementById('pet-rock');

    const danceMoves = [
        { transform: 'translateX(50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateY(50px)' },
        { transform: 'translateY(-50px)' },
        { transform: 'rotate(20deg)' },
        { transform: 'rotate(-20deg)' }
    ];

    const randomMove = danceMoves[Math.floor(Math.random() * danceMoves.length)];
    rock.style.transform = randomMove.transform;

    setTimeout(() => {
        rock.style.transform = '';
    }, 500);
});
