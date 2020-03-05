function sum(arr) {
    let total = 0;
    for(let i=0; i<arr.lenth; i++) {
        total += arr[i];
    }
    return total;
}

function multiple(a, b) {
    return a*b;
}

function minus(a, b) {
    return a-b;
}

function compare(a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
}

function add(a, b) {
    return a+b;
}

function square(a) {
    return a*a;
}