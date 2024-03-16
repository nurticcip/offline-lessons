// ! Function decloration
// function myFunc(str) {
//     return str
// }
// console.log(myFunc('motion'))



// ! Function expression
// const myFn = function () {
//     return 'hello world!'
// }
// console.log(myFn())



// ! Arrow function =>
// const myFunc = () => {
//     return 'hello world!'
// }
// console.log(myFunc())



// function myFunc(str) {
//     if (str[0] === 'n') {
//         return str + 'academy';
//     }
//     return 'web';
// }
// console.log(myFunc('motion'))


// function plusNumbers(num) {
//     return num ** 2
// }
// console.log(plusNumbers(100))



// function square(number) {
//     let result = number ** 2
//     console.log(result)
// }
// square(10)




//? Exercise 1
// function numbers(numberOne, numberTwo) {
//     return numberOne ** numberTwo
// }
// console.log(numbers(2,3))


// const numbers = function (numberOne, numberTwo) {
//     return numberOne ** numberTwo
// }
// console.log(numbers(2,3))


// const numbers = (numberOne, numberTwo) => {
//     return numberOne ** numberTwo
// }
// console.log(numbers(2, 3))



//? Exercise 2
// function myNumber(a) {
//     return a == 10 ? 'True' : 'False'
// }
// console.log(myNumber(10))

// const myNumber = function (a) {
//     return a == 10 ? 'True' : 'False'
// }
// console.log(myNumber(10))

// const myNumber = (a) => a == 10 ? 'True' : 'False'
// console.log(myNumber(10))



// function myNumber(a) {
//     return a >= 0 ? 'Positive' : 'Negative'
// }
// console.log(myNumber(-10))

// const myNumber = function (a) {
//     return a >= 0 ? 'Positive' : 'Negative'
// }
// console.log(myNumber(1))

// const myNumber = (a) => a >= 0 ? 'Positive' : 'Negative'
// console.log(myNumber(2))



// function myNumber(number) {
//     return number % 2 == 0 ? 'Chetnoe' : 'Nechetnoe'
// }
// console.log(myNumber(44))

// const myNumber = function (number) {
//     return number % 2 == 0 ? 'Chetnoe' : 'Nechetnoe'
// }
// console.log(myNumber(44))

// const myNumber = (number) => number % 2 == 0 ? 'Chetnoe' : 'Nechetnoe'
// console.log(myNumber(44))



// function myNumber(a, b) {
//     return a % b == 0 ? 'Chetnoe' : 'Nechetnoe'
// }
// console.log(myNumber(2, 1))

// const myNumber = function (a, b) {
//     return a % b == 0 ? 'Chetnoe' : 'Nechetnoe'
// }
// console.log(myNumber(4, 2))

// const myNumber = (a, b) => a % b == 0 ? 'Chetnoe' : 'Nechetnoe'
// console.log(myNumber(4, 2))



// function myType(s) {
//     if (typeof s == 'number') {
//         return 'number'
//     }
//     else if (typeof s == 'string') {
//         return 'string'
//     }
//     else if (typeof s == 'boolean') {
//         return 'boolean'
//     }
// }
// console.log(myType(3))

// const myType = (s) => {
//     if (typeof s == 'number') {
//         return 'number'
//     } else if (typeof s == 'boolean') {
//         return 'boolean'
//     } else if (typeof s == 'string') {
//         return 'string'
//     }
// }
// console.log(myType(true))

// const myType = function (s) {
//     if (typeof s == 'string') {
//         return 'string'
//     } else if (typeof s == 'boolean') {
//         return 'boolean'
//     } else if (typeof s == 'number') {
//         return 'number'
//     }
// }
// console.log(myType('gdf'))



// function myNumber(a) {
//     if (a > 1 && a < 9) {
//         return 'True'
//     }
//     else {
//         return 'False'
//     }
// }
// console.log(myNumber(4))

// const myNumber = function (a) {
//     if (a > 1 && a < 9) {
//         return 'True'
//     } else {
//         return 'False'
//     }
// }
// console.log(myNumber(4))

// const myNumber = (a) => a > 1 && a < 9 ? 'True' : 'False'
// console.log(myNumber(4))


// function numPlus(a) {
//     if (a == 3 || a == 7) {
//         return a + 7
//     }
//     else {
//         return a / 7
//     }
// }
// console.log(numPlus(4))

// const numPlus = function (a) {
//     if (a == 3 || a == 7) {
//         return a + 7
//     }
//     else {
//         return a / 7
//     }
// }
// console.log(numPlus(3))

// const numPlus = (a) => a == 3 || a == 7 ? a + 7 : a / 7
// console.log(numPlus(3))

// function numPlus(a) {
//     if (a == 3 || a == 7) {
//         return a + 7
//     } else {
//         return a / 7
//     }
// }
// console.log(numPlus(3))



// const myNumber = (a, b) => a <= 0 && b >= 5 ? a + b : a - b
// console.log(myNumber(-2, 8))

// function myNumber(a, b) {
//     if (a <= 0 && b >= 5) {
//         return a + b
//     } else {
//         return a - b
//     }
// }
// console.log(myNumber(2, 4))

// const myNumber = function (a, b) {
//     if (a <= 0 && b >= 5) {
//         return a + b
//     } else {
//         return a - b
//     }
// }
// console.log(myNumber(2,3))



// const myNumber = (a, b) => (a > 4 && a < 10) && (b >= 7 && a < 17) ? 'true' : 'false'
// console.log(myNumber(7, 14))

// function myNumber(a, b) {
//     if ((a > 4 && a < 10) && (b >= 7 && a < 17)) {
//         return 'True'
//     } else {
//         return 'False'
//     }
// }
// console.log(myNumber(3,4))

// const myNumber = function (a, b) {
//     if ((a > 4 && a < 10) && (b >= 7 && a < 17)) {
//         return 'True'
//     } else {
//         return 'False'
//     }
// }
// console.log(myNumber(3,4))
