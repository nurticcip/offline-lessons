const create = document.querySelector('.create')
const open = document.querySelector('.open')
const name = document.querySelector('.name')
const blocks = document.querySelector('.blocks')
const lastName = document.querySelector('.last-name')
const imageUrl = document.querySelector('.url')

create.addEventListener('click', () => {
    if (name.value.length !== 0 && lastName.value.length !== 0 && imageUrl.value.length !== 0) {
        let obj = {
            name: name.value,
            lastName: lastName.value,
            url: imageUrl.value
        }

        getInfo()

        let getData = JSON.parse(localStorage.getItem('something')) || []
        getData.push(obj)
        localStorage.setItem('something', JSON.stringify(getData))

        name.value = ''
        lastName.value = ''
        imageUrl.value = ''
    }
    else {
        alert('Enter all inputs!')
        name.value.length === 0 ? name.style.border = '1px solid red' : name.style.border = '1px solid green'
        lastName.value.length === 0 ? lastName.style.border = '1px solid red' : lastName.style.border = '1px solid green'
        imageUrl.value.length === 0 ? imageUrl.style.border = '1px solid red' : imageUrl.style.border = '1px solid green'
    }
})

function getInfo() {
    let newData = JSON.parse(localStorage.getItem('something')) || []
    newData.forEach((el, idx) => {
        

        const blockInput = document.createElement('div')
        blockInput.setAttribute('class', 'block-input')
        blockInput.append(image, nameH2, lastNameH2, inputIcons)
        
        const image = createElement('img')
        image.innerHTML = el.url

        const nameH2 = createElement('h2')
        nameH2.innerHTML = `Name: ${el.name}`

        const lastNameH2 = createElement('h2')
        lastNameH2.innerHTML = `LastName: ${el.lastName}`

        const inputIcons = document.createElement('div')
        inputIcons.setAttribute('class', 'input-icons')
        inputIcons.append(remove, dislike, like, edit)


        const remove = document.createElement('ion-icon')
        remove.setAttribute('class', 'remove')
        remove.name = 'trash-outline'

        const dislike = document.createElement('ion-icon')
        dislike.setAttribute('class', 'dislike')
        dislike.name = 'heart-outline'
        dislike.addEventListener('click', () => {
            like.style.display = 'block'
            dislike.style.display = 'none'
        })

        const like = document.createElement('ion-icon')
        like.setAttribute('class', 'like')
        like.name = 'heart-sharp'

        const edit = document.createElement('ion-icon')
        edit.setAttribute('class', 'edit')
        edit.name = 'create-outline'

        remove.addEventListener('click', () => { delInfo(idx) })

    });
}
getInfo()

function delInfo(n) {
    let removeAll = JSON.parse(localStorage.getItem('something')) || []
    removeAll.splice(n, 1);
	localStorage.setItem('card', JSON.stringify(removeAll));
    getCard();
    removeAll.style.transition = '1s'
}

