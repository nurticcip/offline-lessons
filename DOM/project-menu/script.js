const imageURL = document.querySelector('.image-url')
const foodName = document.querySelector('.food-name')
const price = document.querySelector('.price')
const create = document.querySelector('.create')
const menuImage = document.querySelector('.main-image')
const menuInfo = document.querySelector('.main-info')
const mainCost = document.querySelector('.main-cost')


getData()

create.addEventListener('click', () => {
    create.style.background = 'green'
    addData()
    }
)

function addData() {
    let obj = {
        img: imageURL.value,
        name: foodName.value,
        price: price.value

    }
    let data = JSON.parse(localStorage.getItem('food')) || []
    data.push(obj)
    localStorage.setItem('food', JSON.stringify(data))
    getData()  
    // mainMenu.setAttribute('class', 'main-menu')
    // addData() += mainMenu

}

function getData() {
    let newData = JSON.parse(localStorage.getItem('food')) || []
    newData.forEach((el) => {
        menuImage.innerHTML = el.img;
        menuInfo.innerHTML = el.name;
        mainCost.innerHTML = el.price;
    });
}