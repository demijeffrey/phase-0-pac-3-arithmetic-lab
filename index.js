function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n = a, b) {
    return (n += 1)
}

function decrement(n) {
    return (n -= 1)
}

function makeInt(n) {
    return parseInt(n, 10).toString()
}

function preserveDecimal(n) {
    return parseFloat(n)
}