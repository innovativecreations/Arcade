
document.getElementById('atom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const atomName = document.getElementById('atom-name').value;

    console.log('Atom Name:', atomName);
});
    