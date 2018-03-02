decodeMorse = function (morseCode) {
    const morseWords = morseCode.trim().split('   ');
    const morseChars = morseWords.map((morseWord) => {
        return morseWord.split(' ');
    });

    let decodeMsg = '';
    for (let i = 0; i < morseChars.length; i++) {
        let mChars = morseChars[i]
        for (let j = 0; j < mChars.length; j++) {
            decodeMsg += MORSE_CODE[mChars[j]];
        }
        if (i !== morseChars.length - 1) {
            decodeMsg += ' ';
        }
    }

    return decodeMsg;