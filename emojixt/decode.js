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
    const emojiText = document.getElementById('emojiText').value;
    let decryptedText = '';

    for (let char of emojiText) {
        decryptedText += emojiDict[char] !== undefined ? emojiDict[char] : char;
    }

    const decryptedOutputDiv = document.getElementById('output');
    decryptedOutputDiv.textContent = decryptedText;
}
