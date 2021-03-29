const toggle = document.querySelector('.toggle-menu')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})