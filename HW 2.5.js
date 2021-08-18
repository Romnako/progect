"use strict";
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function compound(a, b) {
    return a + b;
}
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function subtraction(a, b) {
    return a - b
}


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function multiplication(a, b) {
    return a * b
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function division(a, b) {
    return a / b
}

/**
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @throws {error}
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return compound(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2)
        case "/":
            return division(arg1, arg2);
        default:
            throw new Error("Операция" + operation + "не предусмотрена");
    }
}

console.log(mathOperation(25, 5, "+"));
console.log(mathOperation(25, 5, "-"));
console.log(mathOperation(25, 5, "*"));
console.log(mathOperation(25, 5, "/"));
console.log(mathOperation(25, 5, "lorem"));