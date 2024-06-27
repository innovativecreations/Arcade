const emojiDict = {
    "a": "😀",
    "b": "😃",
    "c": "😄",
    "d": "😁",
    "e": "😆",
    "f": "😅",
    "g": "🤣",
    "h": "😂",
    "i": "🙂",
    "j": "🙃",
    "k": "😉",
    "l": "😊",
    "m": "😇",
    "n": "🥰",
    "o": "😍",
    "p": "🤩",
    "q": "😘",
    "r": "😗",
    "s": "😚",
    "t": "😋",
    "u": "😛",
    "v": "😜",
    "w": "🤪",
    "x": "😝",
    "y": "🤑",
    "z": "🤗",
    " ": "⬛" // Use a block or space emoji for spaces
};

function translateText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    for (let char of inputText) {
        const emoji = emojiDict[char] || char; // Default to the character if no emoji is found
        const span = document.createElement('span');
        span.textContent = emoji;
        outputDiv.appendChild(span);
    }
}