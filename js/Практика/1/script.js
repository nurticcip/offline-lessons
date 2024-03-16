//! Условные операторы

// && запинаетсся на лжи   (and)
// || запинается на правде (or)


// console.log( NaN || 2 || undefined );                    // 2
// console.log( NaN && 2 && undefined );                    // NaN
// console.log( 1 && 2 && 3 );                              // 3
// console.log( !1 && 2 || !3 );                            // false
// console.log( 25 || null && !3 );                         // 25
// console.log( NaN || null || !3 || undefined || 5);       // 5
// console.log( NaN || null && !3 && undefined || 5);       // 5
// console.log( 5 === 5 && 3 > 1 || 5);                     //true



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }                                                        // Done!



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }                                                        // Done!



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }



//! while циклы


// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 56);

// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// }



// let result = ''
// const lenght = 7
// for (let i = 1; i < lenght; i++){
//     for (let j = 0; j < i; j++){
//          result += '#'
//     }
//     result += '\n'
// }
// console.log(result)



// for (let i = 5; i <= 10; i++){
//     console.log(i)
// }


// for (let i = 20; i >= 10; i--){
//     if (i === 13){
//         break;
//     }
//     console.log(i)
// }


// for (let i = 2; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
    

// let n = 2
// while (n < 16) {
//     if (n % 2 === 0) {
//         n++
//         continue
//     } else {
//         console.log(n)
//         n++
//     }
// }



// let arr = [];
// for (let i = 5; i <= 10; i++) {
//     arr.push(i);
// }

// console.log(arr);