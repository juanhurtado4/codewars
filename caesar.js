const isAlpha = (char) => {
    const isLower = 97 <= char.charCodeAt() && char.charCodeAt() <= 122;
    const isUpper = 65 <= char.charCodeAt() && char.charCodeAt() <= 90;
    return isLower || isUpper;
};

const getAlphaStart = asciiValue => {
    const alphaStart = 97;
    const alphaEnd = 97 + 25;
    const charIsLowerCase = alphaStart <= asciiValue && asciiValue <= alphaEnd;

    if (charIsLowerCase) {
        return alphaStart;

    } else {
        const upperCaseStart = 65;
        return upperCaseStart;

    }
};

const rotate = (char, key) => {
    const asciiValue = char.charCodeAt();
    const alphaStart = getAlphaStart(asciiValue);
    const charAlphaIndex = asciiValue - alphaStart;
    const lettersInAlpha = 26;
    const encodedIndex = ( charAlphaIndex + key ) % lettersInAlpha + alphaStart;

    // Get string from ascii value
    return String.fromCharCode(encodedIndex);
};

const caesar = (plainTxt, key) => {
    let encodedStr = '';

    for (let char of plainTxt) {

        encodedStr += isAlpha(char) ? rotate(char, key) : char;
    }

    return encodedStr;

}

// Testing

const answers = [
    {
        plainTxt: 'a',
        rotation: 1,
        answer: 'b'
    },
    {
        plainTxt: 'b',
        rotation: 3,
        answer: 'e'
    },
    {
        plainTxt: 'z',
        rotation: 1,
        answer: 'a'
    },
    {
        plainTxt: 'z',
        rotation: 0,
        answer: 'z'
    },
    {
        plainTxt: 'a',
        rotation: 0,
        answer: 'a'
    },
    {
        plainTxt: 'z',
        rotation: 26,
        answer: 'z'
    },
    {
        plainTxt: 'z',
        rotation: 27,
        answer: 'a'
    },
    {
        plainTxt: 'js',
        rotation: 1,
        answer: 'kt'
    },
    {
        plainTxt: 'react',
        rotation: 5,
        answer: 'wjfhy'
    },
    {
        plainTxt: 'go',
        rotation: 12,
        answer: 'b'
    },
    {
        plainTxt: 'python',
        rotation: 300,
        answer: 'wfaovu'
    },
    {
        plainTxt: 'zzz',
        rotation: 1000,
        answer: 'eee'
    }
];

answers.forEach(answer => {
    console.log('---------------------------------');


    console.log('PlainTxt: ', answer.plainTxt);
    console.log('Rotation: ', answer.rotation);
    console.log('Correct answer: ', answer.answer);
    console.log('Given answer: ', caesar(answer.plainTxt, answer.rotation));
    console.log('Is correct: ', caesar(answer.plainTxt, answer.rotation) === answer.answer);

    console.log('---------------------------------\n');
});
