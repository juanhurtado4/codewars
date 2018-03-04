function reverseWord(stringInput) {
   let wordsArray = stringInput.split(' ');
   let reverseArray = [];

   for (let i = wordsArray.length - 1; i > -1; i--) {
       reverseArray.push(wordsArray[i]);

    }

   let result = '';

   for (let i = 0; i < reverseArray.length; i++) {
       let word = reverseArray[i];
       for (let j = word.length - 1; j > -1; j--) {
           result += word[j];

        }
        if (i !== reverseArray.length - 1) {
            result += ' ';
        }

    }

   return result;


}

console.log(reverseWord('hi al'));