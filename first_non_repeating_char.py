'''
Problem description:
Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").
'''
def first_non_repeating_letter(string):
    '''
    Function takes in a string
    and returns the first non repeating char in that string
    '''
    lower_str = string.lower()
    for index, char in enumerate(lower_str):
        if lower_str.count(char) < 2:
            return string[index]
    return ''
