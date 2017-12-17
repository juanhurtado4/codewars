// Problem: You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    //your code here
    let even = 0;
    let odd = 0;
    let currentInteger;

    for (let i = 0; i < 3; i++) {
        currentInteger = integers[i];
        if (currentInteger === 0 || currentInteger % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    }

    if (even > odd) {
        for (let i = 0; i < integers.length; i++) {
            currentInteger = integers[i]
            if (currentInteger === 0) {
                continue
            }
            if (currentInteger % 2 !== 0) {
                return currentInteger;
            }
        }
    } else {
        for (let i = 0; i < integers.length; i++) {
            currentInteger = integers[i]
            if (currentInteger % 2 === 0) {
                return currentInteger;
            }
        }
    }
}