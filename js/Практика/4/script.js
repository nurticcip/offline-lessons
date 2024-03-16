//? 1
// const myName = 'Nurtilek'
// const myEmail = 'nurticcip7@gmail.com'
// const myPassword = '12341234'

// const userName = prompt('Enter your name: ')

// if (userName == myName) {
//     const userEmail = prompt('Enter your email address: ')
//     if (userEmail === myEmail) {
//         const userPassword = prompt('Enter your password: ')
//         if (userPassword === myPassword) {
//             console.log('Accapted')
//         }
//         else {
//             console.log('Your password is not  available')
//         }
//     }
//     else {
//         console.log('Your email is not available!')
//     }
// } else {
//     console.log('Your name is not available!')
// }


//? 2
// const plusOne = (num) => num > 0 ? num + 1 : num
// console.log(plusOne(2))


//? 3
// const numPlus = (num) => num > 0 ? num + 1 : num - 2
// console.log(numPlus(-3))


//? 4
// const numbers = (num) => {
//     if (num > 1) {
//         return num + 1
//     } else if (num === 0) {
//         return 10
//     }
//     else {
//         return num - 2
//     }
// }
// console.log(numbers(0))


//? 5
// const numPlus = (a, b, c) => {
//     if (a && b && c > 0) {
//         console.log(a + b + c)
//     }
//     else if(a && b && c < 0){
        
//     }
// }
// console.log(numPlus(0))


//? 6
// const studentsPoint = 70
// let score
// if (studentsPoint > 0 && studentsPoint < 50) {
//     score = 2
// }else if (studentsPoint >= 50 && studentsPoint <= 70) {
//     score = 3
// }else if (studentsPoint >= 71 && studentsPoint <= 85) {
//     score = 4
// }else if (studentsPoint >= 85 && studentsPoint <= 100) {
//     score = 4
// } else {
//     score 0
// }
// console.log(score)






// const nbYear = (p0, percent, aug, reach) => {
//     perc = percent * 0.01;
//     let ear = 0;
//     while (reach > p0) {
//         let sum = p0 + p0 * perc + aug;
//         p0 = Math.floor(sum);
//         ear += 1;
//     }
//     return ear;
// }




// function correctPolishLetters (string) {
//     return string.split('').map((el)=> {
//         if(el === 'ą'){
//             return 'a'
//         } else if(el === 'ć'){
//             return 'c'
//         }else if(el === 'ę'){
//             return 'e'
//         }else if(el === 'ł'){
//             return 'l'
//         }else if(el === 'ń'){
//             return 'n'
//         }else if(el === 'ó'){
//             return 'o'
//         } else if(el === 'ś'){
//             return 's'
//         }else if(el === 'ź' || el === 'ż'){
//             return 'z'
//         } return el
//     }).join('')
//   }
// console.log(correctPolishLetters('Wladysław Reymont'))

// ąćęłńóśźż
// acelnoszz





const generateHashtag = (str) => {
    result = str.split(' ').map(el => {
        return el[0].toUpperCase() + el.slice(1)
    }).join('')
    return '#' + result

}
console.log(generateHashtag(''))