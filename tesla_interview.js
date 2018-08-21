const addSpace = (str) => {
    let newStr = '';
    for (let letter of str) {
        newStr += letter + ' ';
    }
    return newStr.trim();
};

addSpace('hello');
