let btnOpenMenu = document.querySelector('#hamberger')
btnOpenMenu.addEventListener('click', showMenu)

function showMenu() {
    let panelMenu = document.querySelector('#float__menu')
    if (panelMenu.classList.contains('hidden__menu')) {
        panelMenu.classList.remove('hidden__menu')
        panelMenu.classList.add('menu__active')
    } else {
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


// getion du controle de l'envoie du formulaire

let form = document.querySelector('form')
let error = document.querySelector('#error')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.querySelector('#email')
    let message = document.querySelector('#message')
    if (email.value == "" && message.value == "") {
        error.innerText = ''
        let p = document.createElement('p')
        p.innerText = "Veuillez remplir convenablement le formulaire de contact"
        error.setAttribute('class', 'error')
        error.appendChild(p)
    } else {
        (function () {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
                publicKey: "cuwWQFlK0wjdORcYZ",
            });
        })();

        var params = {
            sender: email.value,
            msg: message.value
        }

        var templateId = 'template_kwof8eh'

        var serviceId = 'service_49l7dvc'

        const send = emailjs.send(serviceId, templateId, params).then(res => {
            window.location = 'mailSucces.html'
        }).catch()
    }
})
