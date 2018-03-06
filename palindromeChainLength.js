`Problem:
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

For example, start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4
`

let palindromeChainLength = function (num) {
    let curr = num.toString();
    let rev;
    let steps = 0;
    let isNumPalindrome = isPalindrome(curr);
    if (isNumPalindrome) { return 0 }
    while (!isNumPalindrome) {
        rev = reverseStr(curr);
        let numsAdded = parseInt(rev) + parseInt(curr);
        curr = numsAdded.toString();
        steps += 1;
        isNumPalindrome = isPalindrome(curr);
    }
    return steps
};

let isPalindrome = function (num1) {
    let curr = num1.toString();
    let left;
    let right = curr.length - 1;
    for (let i = 0; i < curr.length; i++) {
        left = i;
        if (curr[left] !== curr[right]) { return false }
        if (left >= right) { return true }
        right -= 1;
    };

}

let reverseStr = function (num2) {
    let reversedNum = '';
    for (let i = num2.length - 1; i > -1; i--) {
        reversedNum += num2[i];
    }
    return reversedNum
};

let result = palindromeChainLength(87);
result === 4 ? console.log(true) : console.log(false);