document.getElementById('atom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const atomicNumber = document.getElementById('atomic-number').value;
    console.log('Atomic Number:', atomicNumber);
});
