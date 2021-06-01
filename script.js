

let wordEl = document.querySelector('#input1 ~ .words')
let meanEl = document.querySelector('#input2 ~ .words')
let synonymEl = document.querySelector('#input3 ~ .words')
let antonymEl = document.querySelector('#input4 ~ .words' )



const words = [
    'Aquatic (Adj)'
]

const means = [
    'Sống dưới nước, thủy sinh'
]

const synonyms = [
    'Submersed, Marine, Subaqueous, Subaquatic...'
]

const antonyms = [
    'Terrestrial, Amphibious, Surface, Overhead, Fauna'
]









function renderWord() {
    let wordResults =  words.map(word => {
        return `
        <div class ="word">
            <p>${word}
        </div>
    `
    })
    wordEl.innerHTML = wordResults.join('')
}
renderWord()

function renderMean() {
    let wordResults =  means.map(word => {
        return `
        <div class ="word">
            <p>${word}
        </div>
    `
    })
    meanEl.innerHTML = wordResults.join('')
}
renderMean()

function renderSynonym() {
    let wordResults =  synonyms.map(word => {
        return `
        <div class ="word">
            <p>${word}
        </div>
    `
    })
    synonymEl.innerHTML = wordResults.join('')
}
renderSynonym()

function renderAntonym() {
    let wordResults =  antonyms.map(word => {
        return `
        <div class ="word">
            <p>${word}
        </div>
    `
    })
    antonymEl.innerHTML = wordResults.join('')
}
renderAntonym()



let textEl = document.querySelector('.search-bar input[type ="text"]')
let sentenceEl = document.querySelector('.sentence-searched')
let button = document.querySelector('button')
textEl.onchange  = (e) => {
    
    button.onclick = getInfo(e.target.value)
    
}

function getInfo(value) {
    fetch(`https://api.tracau.vn/WBBcwnwQpV89/s/${value}/en`)
    .then(response => response.json())
    .then(result => {
        return result.sentences.map(sentence => {
            return `<div class="sentence">
                        <div class="vietnamese">
                            <p> ${sentence.fields.vi}
                        </div>
                        <div class="english">
                            <p> ${sentence.fields.en}
                        </div>
                    </div>
            `
        })
    })
    .then(result => sentenceEl.innerHTML = result.join(''))
}