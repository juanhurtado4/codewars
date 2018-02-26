`There is one line of input: a single string, .

Note: As the original message is just SOS repeated  times, 's length will be a multiple of .

Constraints

 will contain only uppercase English letters.
Output Format

Print the number of letters in Sami's message that were altered by cosmic radiation.

Sample Input 0

SOSSPSSQSSOR
Sample Output 0

3
Explanation 0

 = SOSSPSSQSSOR, and signal length . Sami sent  SOS messages (i.e.: ).

Expected signal: SOSSOSSOSSOS
Recieved signal: SOSSPSSQSSOR

We print the number of changed letters, which is `

function marsExploration(s) {

    let f = 0; let total = 0;
    while (f + 2 < s.length) {
        let first = s[f]; let second = s[f + 1]; let third = s[f + 2];
        if (first !== 'S') {
            total += 1
        }
        if (second !== 'O') {
            total += 1
        }
        if (third !== 'S') {
            total += 1
        }
        f += 3
    }
    return total
}