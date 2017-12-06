function printerError(s) {
    var badLetters = 'opqrstuvwxyz';
    var count = 0;

    for (var i = 0; i < s.length; i++) {
        if (badLetters.indexOf(s[i]) !== -1) {
            count += 1;
        };
    };
    return `${count}/${s.length}`;
};