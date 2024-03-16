// const h1 = document.querySelector('h1')
// h1.style.display = 'none'
// console.log(h1)


// const active = document.querySelector('.active')


//? mouse events
/*
    click
    mousedown
    mouseup
    mouseover
    mouseleave
    mousemove
    mouseout
*/


// active.addEventListener('click', () => {
//     h1.style.color = 'blue'
// })


// const show = document.querySelector('.show')

// show.addEventListener('click', () => {
//     h1.style.display = 'block'
// })


// const clear = document.querySelector('.clear')

// clear.addEventListener('click', () => {
//     h1.style.display = 'none'
// })

// const signUp = document.querySelector('.sign-up')
// const x = document.querySelector('.a')
// const form = document.querySelector('.form')



// signUp.style.display = 'block'
// form.style.display = 'none'
// signUp.addEventListener('click', () => {
//     form.style.display = 'block'
//     signUp.style.display = 'none'
// })

// x.addEventListener('click', () => {
//     form.style.display = 'none'
//     signUp.style.display = 'block'
// })


const createAccaunt = document.querySelector('.page')
const createButton = document.querySelector('.create-btn')
const accept = document.querySelector('.accept')
const ex = document.querySelector('.ex')
const confirm = document.querySelector('.confirm')
const acceptAccept = document.querySelector('.accept-accept')
const ok = document.querySelector('.ok')
const cancel = document.addEventListener('.cancel')
createButton.addEventListener('click', () => {
    accept.style.display = 'block'
    createAccaunt.style.display = 'none'
})
confirm.addEventListener('click', () => {
    acceptAccept.style.display = 'block'
    accept.style.display = 'none'
})
ex.addEventListener('click', () => {
    acceptAccept.style.display = 'none'
    accept.style.display = 'none'
    createAccaunt.style.display = 'block'
})
ok.addEventListener('click', () => {
    createAccaunt.style.display = 'block'
    ex.style.display = 'none'
    acceptAccept.style.display = 'none'
})
cancel.addEventListener('click', () => {
    createAccaunt.style.display = 'block'
    accept.style.display = 'none'
    acceptAccept.style.display = 'none'
})