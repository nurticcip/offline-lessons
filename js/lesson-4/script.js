// let num = prompt('Enter mounth: ')
// if (num === 12 || num === 1 || num === 2) {
//     console.log('Winter')
// } else if (num === 3 || num === 4 || num === 5) {
//     console.log('Spring')
// } else if (num === 6 || num === 7 || num === 8) {
//     console.log('Summer')
// } else if (num === 9 || num === 10 || num === 11) {
//     console.log('Autumn')
// } else {
//     console.log('Error')
// }



// let num = '1234'
// console.log(+num)
// console.log(Number(num))
// console.log(parseInt(num))

// let str = 1234
// console.log(str + '')
// console.log(String(str))
// console.log(str.toString())

// let str = '1234motion'        --> NaN
// console.log(+str)

// console.log(10 + undefined)   --> NaN



// let num1 = +prompt('Enter first number: ')
// let act = prompt("Whar we'll do?")
// let num2 = +prompt('Enter second number: ')
// if (act == '+') {
//     console.log(num1 + num2)
// } else if (act == '-') {
//     console.log(num1 - num2)
// } else if (act == '*') {
//     console.log(num1 * num2)
// } else if (act == '/') {
//     console.log(num1 / num2)
// }



// let str  = 'Nurtilek'
// console.log(str)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(0, 3)) // обрезает буквы
// console.log(str.replace('t', 'n')) //console.log(str.replace(/t/g, 'n')) тамгаларды алмаштырып коет
// console.log(str.includes('n'))
// console.log(str.concat(' Abibillaev'))
// console.log(str.length)
// // console.log(str.trim) //лишний пробледерди алып салат
// console.log(str.length > 10)



// let str = 'motion academy'
// if (str.includes('school')) {
//     console.log(str.replace('school', 'academy'))
// } else if (str.includes('academy')) {
//     console.log(str.replace('academy', 'school'))
// }



// let age = prompt('Enter your age: ')
// if (age > 1 && age < 5) {
//     console.log('kindergarden')
// } else if (age > 5 && age < 18) {
//     console.log('school')
// } else if (age > 18 && age <= 25) {
//     console.log('university')
// } else if (age > 25 && age <= 60) {
//     console.log('worker')
// } else {
//     console.log('pencioner')
// }



let age = +prompt('Введите ваш возвраст: ')
if (age === 1) {
    console.log(age + " год")
} else if (age >= 2 && age <= 4) {
    console.log(age + ' года')
} else if (age >= 5 && age <= 20) {
    console.log(age + ' лет')
} else if (age >= 21 && age <= 24) {
    console.log(age + ' года')
} else {
    console.log( age + ' лет')
}









