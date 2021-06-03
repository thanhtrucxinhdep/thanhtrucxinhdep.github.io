let minute = document.querySelector('.pomodoro-content span:first-child')
let second = document.querySelector('.pomodoro-content span:last-child')
let secondValue;
let minuteValue;
let calcTime;
let audio = document.querySelector('.audio audio')
let startBtn = document.querySelector('.end .start')




let line = document.querySelector('.line')
let options = document.querySelectorAll('.pomodoro-heading button')

line.style.width = options[0].offsetWidth + 'px'
line.style.left = options[0].offsetLeft + 'px'

options.forEach(optionBtn => {
    optionBtn.onclick = (e) => {
        document.querySelector('.button--change.active').classList.remove('active')
        optionBtn.classList.add('active')

        line.style.width = optionBtn.offsetWidth + 'px'
        line.style.left = optionBtn.offsetLeft + 'px'
        switch (e.target.innerText) {
            case 'Short Break':
                minute.innerHTML = '05'
                second.innerHTML = '00'
                clearInterval(calcTime)
                break;
            case 'Long Break':
                minute.innerHTML = '15'
                second.innerHTML = '00'
                clearInterval(calcTime)

                break;
            default:
                minute.innerHTML = '25'
                second.innerHTML = '00'
                clearInterval(calcTime)

        }
    }
})


function getSecond() {
    minuteValue = parseInt(minute.innerText)
    secondValue = parseInt(second.innerText)
    if (secondValue === 0) {
        secondValue = 60;
        second.innerHTML = secondValue;
        if (minuteValue !== 0) {
            minuteValue -= 1
            if (minuteValue < 10) {
                minute.innerHTML = '0' + minuteValue
            } else {
                minute.innerHTML = minuteValue
            }
        }
    }
    secondValue -= 1;

    if (secondValue < 10){
        second.innerHTML = '0' + secondValue 
    } else {
        second.innerHTML = secondValue
    }
    if (minuteValue === 0 && secondValue === 0 ){
        audio.play()
        clearInterval(calcTime)
        setTimeout(function() {
            audio.pause()
        },10000)
    }
}
let index = 1;
startBtn.onclick = () => {
    if (index % 2 === 0){
        clearInterval(calcTime)
        startBtn.innerHTML = 'Start'
    } else {
        startBtn.innerHTML = 'Resume'
        calcTime = setInterval(getSecond, 1000)
    }
    index++
}
