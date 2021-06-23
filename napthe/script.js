


const tabHeadings = document.querySelectorAll('.tab-heading')
const contents = document.querySelectorAll('.content')
const tabLine = document.querySelector('.tab-line')

tabLine.style.width = document.querySelector('.tab.active').offsetWidth + 18 + 'px'
tabLine.style.left = document.querySelector('.tab.active').offsetLeft + 'px'

tabHeadings.forEach( (tab, index) => {
    tab.onclick = e => {
        document.querySelector('.content.active').classList.remove('active')
        document.querySelector('.tab.active').classList.remove('active')
        tab.parentElement.classList.add('active')
        contents[index].classList.add('active')
        console.log(e.target.offsetWidth)
        tabLine.style.width = e.target.offsetWidth + 'px'
        tabLine.style.left = e.target.offsetLeft +  'px'
    }
})
