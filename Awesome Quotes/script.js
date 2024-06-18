
function fetchQuote() {
    
    fetch('https://api.quotable.io/random')
        .then(function(response) {
        
            return response.json();
        })
        .then(function(data) {
           
            document.getElementById('quote').textContent = '"' + data.content + '"';
            document.getElementById('author').textContent = '— ' + data.author;
        })
        .catch(function(error) {
           
            console.error('Error fetching quote:', error);
        });
}


document.getElementById('quote-button').addEventListener('click', fetchQuote);
