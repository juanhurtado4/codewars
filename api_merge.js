const merge = (first, second) => {

  let result = [];
  if (first.length === second.length) {
    first.forEach((item, ind) => {
      result.push(item);
      result.push(second[ind]);
    })

  } else {
    let bigArr = first.length > second.length ? first : second;

    for (let i = 0; i < bigArr.length; i++) {

      if (i < first.length) {
        result.push(first[i]);
      }

      if (i < second.length) {
        result.push(second[i]);
      }
    }

  }
  return result;
}
