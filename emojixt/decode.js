const emojiDict = {
    "😀": "a",
    "😃": "b",
    "😄": "c",
    "😁": "d",
    "😆": "e",
    "😅": "f",
    "🤣": "g",
    "😂": "h",
    "🙂": "i",
    "🙃": "j",
    "😉": "k",
    "😊": "l",
    "😇": "m",
    "🥰": "n",
    "😍": "o",
    "🤩": "p",
    "😘": "q",
    "😗": "r",
    "😚": "s",
    "😋": "t",
    "😛": "u",
    "😜": "v",
    "🤪": "w",
    "😝": "x",
    "🤑": "y",
    "🤗": "z",
    "⬛": " "
};

function decryptText() {
    const emojiText = document.getElementById('inputText').value;
    const decryptedOutputDiv = document.getElementById('output');
    decryptedOutputDiv.innerHTML = '';

    for (let char of emojiText) {
        const letter = emojiDict[char] || char;
        console.log(emojiDict[char] || char);
        const span = document.createElement('span');
        span.textContent = letter;
        decryptedOutputDiv.appendChild(span);
    }
}
