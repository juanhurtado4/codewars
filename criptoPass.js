`
* Shift each letter by a given number
* Replace each digit by its complement when added you get 9
* Keep such as non alphabetic and non digit characters
* Uppercase & Downcase each letter
* Reverse the whole result

#Example:

Text: "BORN IN 2015!"

Step 1, 2, 3:  "CPSO JO 7984!"

Step 4: "CpSo jO 7984!"

Step 5: "!4897 Oj oSpC"
`

const playPass = (str, num) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    let result = '';
    for (let char of str) {
        const baseChar = char.toLowerCase();
        const isCharInAlphabet = alphabet.includes(baseChar);
        if (isCharInAlphabet) {
            result += handleLetter(baseChar, num, result);

        } else if (nums.includes(baseChar)) {
            result += handleNum(parseInt(baseChar));

        } else {
            result += baseChar;
        }
    }
    return reverseStr(result);
};

const shiftLetter = (letter, rot) => {
    const unicodeNum = letter.charCodeAt(letter);
    const numToShift = rot + unicodeNum;
    const position = numToShift > 122 ? numToShift % 122 + 96 : numToShift;
    return String.fromCharCode(position);
};

const toLowerOrUpperCase = (letter, lettersSoFar) => {
    return lettersSoFar.length % 2 ? letter : letter.toUpperCase();
};

const handleLetter = (char, num, result) => {
    let newLetter = shiftLetter(char, num);
    return toLowerOrUpperCase(newLetter, result);
};

const handleNum = (num) => (9 - num).toString();

const reverseStr = (str) => {
    let result = '';
    for (let i = str.length - 1; i > -1; i--) {
        result += str[i];
    }
    return result;
};
