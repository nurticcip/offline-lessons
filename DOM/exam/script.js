const firstName = document.querySelector('.first-name')
const LastName = document.querySelector('.last-name')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const add = document.querySelector('.add')
const inputs = document.querySelectorAll('input')
const edit = document.querySelector('.edit')
const del = document.querySelector('.del')

edit.style.display = 'none'
del.style.display = 'none'

get()

add.addEventListener('click', () => {

    let obj = {
        name: firstName.value,
        surname: LastName.value,
    }
    let getInfo = JSON.parse(localStorage.getItem('person')) || [];
    getInfo.push(obj);
    localStorage.setItem('person', JSON.stringify(getInfo));

    inputs.forEach(el => el.value = '')
    edit.style.display = 'block'
    del.style.display = 'block'
    add.style.display = 'none'

    get()
})

function get() {
    right.innerHTML = ''
    let getData = JSON.parse(localStorage.getItem('person')) || [];
    getData.forEach((el, idx) => {
        const div = document.createElement('div')

        const h1 = document.createElement('h1')
        h1.innerHTML = el.name

        const h2 = document.createElement('h2')
        h2.innerHTML = el.surname

        
        
        
        
        // const del = document.createElement('button')
        // edit.innerHTML = 'delete'
        
        // del.addEventListener('click', () => {
        //     let delFor = JSON.parse(localStorage.getItem('person')) || [];
        //     delFor.splice(idx, 1);
        //     localStorage.setItem('person', JSON.stringify(delFor));
        //     get()
            
        // })


        // const edit = document.createElement('button')
        // edit.innerText = 'edit'

        // edit.addEventListener('click', () => {
        //     firstName.value = el.name
        //     LastName.value = el.surname
        //     edit.style.display = 'block'
        //     add.style.display = 'none'
        //     m = idx;

        // })

        div.append(h1, h2)
        right.append(div)

    })
}
