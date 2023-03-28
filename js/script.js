let menu = document.querySelector('header ul')
let abri = document.querySelector('.menu-btn')
let fechar = document.querySelector('ul')
abri.addEventListener('click', menuShow)
fechar.addEventListener('click', sairMenu)

function menuShow() {

    if (menu.classList.contains('open')) {
        menu.classList.remove('open')

        document.querySelector('.menu-btn img').src = 'icon/menu.svg'
    } else {
        menu.classList.add('open')
        document.querySelector('.menu-btn img').src = 'icon/close.svg'
    }

}

function sairMenu() {
    fechar = (menu.classList.remove('open'))
    document.querySelector('.menu-btn img').src = 'icon/menu.svg'
}

let button = document.querySelector("button");
let modal = document.querySelector("dialog");
let buttonClose = document.querySelector("dialog button")

button.onclick = function () {
    modal.show()
}
buttonClose.onclick = function () {
    modal.close()
}