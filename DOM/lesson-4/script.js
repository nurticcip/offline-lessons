const textInput = document.querySelector('.text')
const numberInput = document.querySelector('.number')
const addBtn = document.querySelector('button')
const newList = document.querySelector('.newlist')
const errorword = document.querySelector('.errorword')
const ex = document.querySelector('ex')

addBtn.addEventListener('click', () => {
    addList()
})

numberInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addList()
    }
})
function addList() {
    if (textInput.value !== '' && numberInput !== '') {
        const h3 = document.createElement('h3')
        newList.append(h3)
        h3.innerHTML = `${textInput.value} ${numberInput.value} <button class='ex'>&times;</button>`
        textInput.value = ''
        numberInput.value = ''
        textInput.style.border = '1px solid green'
        numberInput.style.border = '1px solid green'
        word.style.display = 'none'

    } else if (textInput.value === '' || numberInput.value === '') {
        alert('Заполните все строки!')
        textInput.style.border = '1px solid red'
        numberInput.style.border = '1px solid red'
        for (let i = 0; i < 2; i++) {
            const word = document.createElement('h6')
            errorword.append(word)
            word.innerHTML = 'Заполните все строки'
            word.style.color = 'red'
        }     
    }
}
