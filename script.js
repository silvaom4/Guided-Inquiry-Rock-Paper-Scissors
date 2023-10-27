const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let winner = document.querySelector('.winner')
let reset = document.querySelector('.reset')
const cpuChoice = document.querySelector('.cpu-choice')
const humanScore = document.querySelector('.human')
const draws = document.querySelector('.draws')
let cpuScore = document.querySelector('.cpu')

let count = 0
let count2 = 0 
let count3 = 0

function setHumanScore() {
    count++
    humanScore.textContent = count 
}

function setCpuScore() {
    count2++
    cpuScore.textContent = count2
}

function setDrawsScore() {
    count3++
    draws.textContent = count3

}


let myOptions = ['rock', 'paper', 'scissors'];

// let options = myOptions[Math.floor(Math.random(4)* myOptions.length)]

rock.addEventListener('click', function() {
    console.log('Rock workin')
    let options = myOptions[Math.floor(Math.random()* myOptions.length)]
    console.log(options)
    cpuChoice.textContent = options
    if(options === 'rock'){
        winner.textContent ='Results: ' + 'Tie'
        setDrawsScore()
    } else if (options === 'paper'){
        winner.textContent ='Results: ' + 'CPU Wins'
        setCpuScore()
    } else {
        winner.textContent ='Results: ' + 'You win'
        setHumanScore()
}
})




paper.addEventListener('click', function() {
    console.log('Paper workin')
    let options = myOptions[Math.floor(Math.random(4)* myOptions.length)]
    console.log(options)
    cpuChoice.textContent = options
    if(options === 'paper'){
        winner.textContent ='Results: ' + 'Tie'
        setDrawsScore()
    } else if (options === 'rock'){
        winner.textContent ='Results: ' + 'You Win'
        setHumanScore()
    } else {
        winner.textContent ='Results: ' + 'You lose'
        setCpuScore()
    }
})

scissors.addEventListener('click', function() {
    console.log('Scissors workin')
    let options = myOptions[Math.floor(Math.random(4)* myOptions.length)]
    console.log(options)
    cpuChoice.textContent = options

    if(options === 'scissors') {
        winner.textContent ='Results: ' + 'Tie'
        setDrawsScore()
    } else if (options === 'paper'){
        winner.textContent ='Results: ' + 'You win'
        setHumanScore()
    }
    else {
        winner.textContent ='Results: ' + 'You lose'
        setCpuScore()
    }
})

reset.addEventListener('click', function(){
    count = 0
    count2 = 0
    count3 = 0
    humanScore.textContent = count
    cpuScore.textContent = count2
    draws.textContent = count3
    winner.textContent = ''
    cpuChoice.textContent = ''
})






    // if(options === 'rock'){
    //     document.getElementById('you-win').innerHTML = 'Tie'
    // } else if (options === 'paper'){
    //     document.getElementById('you-win').innerHTML = 'CPU Wins'

    // } else if (options === 'scissors') {
    //     document.getElementById('you-win').innerHTML = 'You win'
    // }
    // })