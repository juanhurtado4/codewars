# Given a string add a space after every character
# Do not add a space at the end of the character
# Return a string e.g. "hello world" -> "h e l l o w o r l d"
def tespace(user_input):
    '''
    Function adds a space after every character
    user_input: String
    Returns String
    '''
    new_str = ''
    for char in user_input:
        if char == ' ':
            new_str += char
            continue
        new_str += char + ' '
    return new_str[:-1]
