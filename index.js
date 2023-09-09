const header = document.querySelector('.header')
const menu = document.querySelector('.header-hamb')

menu.addEventListener('click', () => {
    const menuImg = document.querySelector('.header-hamb img')

    header.classList.toggle('active')

    if(menuImg.classList.contains('menu-hamburguer')) {
        menu.innerHTML = '<img src="./images/icon-close.svg" alt="Menu Close" class="menu-close">'
    } else {
        menu.innerHTML = '<img src="./images/icon-hamburger.svg" alt="Menu Hamburguer" class="menu-hamburguer">'
    }
})