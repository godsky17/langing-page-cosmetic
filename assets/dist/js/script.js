let btnOpenMenu = document.querySelector('#hamberger') 
btnOpenMenu.addEventListener('click', showMenu)

function showMenu(){
    let panelMenu = document.querySelector('#float__menu')
    if(panelMenu.classList.contains('hidden__menu')){
        panelMenu.classList.remove('hidden__menu')
        panelMenu.classList.add('menu__active')
    }else{
        panelMenu.classList.add('hidden__menu')
        panelMenu.classList.remove('menu__active')  
    }
}

const lis = document.querySelectorAll('#float__menu li')
for (const li of lis) {
    li.addEventListener('click', () => {
        let panelMenu = document.querySelector('#float__menu')
        panelMenu.classList.add('hidden__menu')
        panelMenu.classList.remove('menu__active')
    })
}