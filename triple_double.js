function tripledouble(num1, num2) {
    let histo1 = getHisto(num1.toString());
    let histo2 = getHisto(num2.toString());
    for (let value in histo1) {
        if histo1.value
  }




}

function getHisto(numStr) {
    let histo = {};
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] in histo) {
            histo[firstNum[i]] += 1;
        } else {
            histo[firstNum[i]] = 1;
        }
    }
    return histo;
}