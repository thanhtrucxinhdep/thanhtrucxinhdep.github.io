const textFields = document.querySelectorAll('input');
const errorMessages = document.querySelectorAll('.errormessage');
let password = '';


const submitBtn = document.querySelector('.main-content-tool a')
textFields.forEach((input,index) => {
    input.oninput = e => {
        e.path[1].classList.remove('error');
        errorMessages[index].innerHTML = '';
    }
    
})

textFields[1].oninput = e => {
    e.path[1].classList.remove('error')
    password = e.target.value
}

textFields[0].onblur = e => {
    usernameValidate(e.target)
}

const usernameValidate = (input) => {
    if (!input.value){
        input.parentElement.classList.add('error')
        errorMessages[0].innerHTML = 'Tên đăng nhập không được để trống'
    } else if (input.value.indexOf('_') === -1){
        input.parentElement.classList.add('error')
        errorMessages[0].innerHTML = 'Tên đăng nhập phải đúng theo cú pháp HO_TEN'
    }
}

const passwordValidate = (input) => {
    if (!input.value){
        input.parentElement.classList.add('error');
        errorMessages[1].innerHTML = 'Mật khẩu không được để trống';
    }
}

textFields[1].onblur = e => {
    passwordValidate(e.target)
}

const repeatPasswordValidate = (input) => {
    if (!input.value){
        input.parentElement.classList.add('error');
        errorMessages[2].innerHTML = 'Nhập lại mật khẩu không được để trống'
    } else if (input.value !== password) {
        input.parentElement.classList.add('error');
        errorMessages[2].innerHTML = 'Mật khẩu không giống nhau'
    }
}

textFields[2].onblur = e => {
    repeatPasswordValidate(e.target)
}


const emailValidate = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!input.value){
        input.parentElement.classList.add('error')
        errorMessages[3].innerHTML = 'Email không được để trống'
    } else if (re.test(input.value)) {
        input.parentElement.classList.remove('error')
    } else {
        input.parentElement.classList.add('error')
        errorMessages[3].innerHTML = 'Email bạn vừa nhập không hợp lệ, vui lòng kiểm tra lại'
    }
}

textFields[3].onblur = e => {
    emailValidate(e.target)
}

submitBtn.onclick = e => {
    e.preventDefault()
    usernameValidate(textFields[0])
    passwordValidate(textFields[1])
    repeatPasswordValidate(textFields[2])
    emailValidate(textFields[3])
    let isValidate = true;

    textFields.forEach(input => {
        if (input.parentElement.classList.contains('error')) {
            isValidate = false
        }
    })
    
    if (isValidate){
        const info = {
            username: textFields[0].value,
            password: textFields[1].value,
            repeatPassword: textFields[2].value,
            email: textFields[3].value
        }
        location.assign('../pages/vgta-gifts.html')
    }
}

