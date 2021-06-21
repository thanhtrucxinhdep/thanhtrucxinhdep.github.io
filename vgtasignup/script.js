const tl = gsap.timeline()
const giftBtn = document.querySelector('.action button:nth-of-type(2)')
const gifts = document.querySelector('.gifts')
const times = document.querySelector('.gifts i')
const input = document.querySelectorAll('input')
const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const repeatPassword = document.querySelector('.repeat-password')
const submit = document.querySelector('.action button')

submit.onclick = e => {
    e.preventDefault()
    if (!username.querySelector('input').value){
        username.classList.add('error')
        username.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
    }
    if (!email.querySelector('input').value){
        email.classList.add('error')
        email.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
    }
    if (!password.querySelector('input').value){
        password.classList.add('error')
        password.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
    }
    if (!repeatPassword.querySelector('input').value){
        repeatPassword.classList.add('error')
        repeatPassword.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
    }
}

let passwordValue = ''

const formValidate = () => {
    username.querySelector('input').onblur = e => {
        if (!e.target.value){
            username.classList.add('error')
            username.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
        }
    }
    email.querySelector('input').onblur = e => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(e.target.value)){
                email.querySelector('.form-message').innerHTML = 'Trường này không phải là email'
                email.classList.add('error')
        } else {
            email.classList.remove('error')
        }
        if (!e.target.value){
            email.classList.add('error')
            email.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
        }
    }
    
    password.querySelector('input').onblur = e => {
        if (!e.target.value){
            password.classList.add('error')
            password.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
        } else if (e.target.value.length <= 6){
            password.classList.add('error')
            password.querySelector('.form-message').innerHTML = 'Vui lòng tối thiểu 6 kí tự'
        }
        passwordValue = e.target.value
    }
    repeatPassword.querySelector('input').onblur = e => {
        if (!e.target.value){
            repeatPassword.classList.add('error')
            repeatPassword.querySelector('.form-message').innerHTML = 'Vui lòng nhập trường này'
        } else if (e.target.value !== passwordValue){
            repeatPassword.classList.add('error')
            repeatPassword.querySelector('.form-message').innerHTML = 'Mật khẩu không khớp'
        }
    }
}

formValidate()
username.querySelector('input').oninput = e => {
        username.classList.remove('error')
        username.querySelector('.form-message').innerHTML = ''
}
email.querySelector('input').oninput = e => {
        email.classList.remove('error')
        email.querySelector('.form-message').innerHTML = ''
}
password.querySelector('input').oninput = e => {
        password.classList.remove('error')
        password.querySelector('.form-message').innerHTML = ''
}
repeatPassword.querySelector('input').oninput = e => {
        repeatPassword.classList.remove('error')
        repeatPassword.querySelector('.form-message').innerHTML = ''
}



const emailValidate = value => {
    let regex = ' const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    return regex.test(value) ? '' : 'Trường này không phải là email'
}
const openPopUp = e => {
    gifts.classList.add('active')
}
const hidePopUp = e => {
    gifts.classList.remove('active')
}
giftBtn.onclick = openPopUp
times.onclick = hidePopUp
tl.to('.username', {x: 0, duration: 2})
tl.to('.email', {x: 0, duration: 2})
tl.to('.password', {x: 0, duration: 2})
tl.to('.repeat-password', {x: 0, duration: 2}, '-=2')
tl.fromTo('.form-heading', {opacity: 0}, {opacity: 1, duration: 2})
tl.fromTo('.button', {opacity: 0}, {opacity: 1, duration: 2}, '-=2')
