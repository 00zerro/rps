yourScore = 0
aiScore = 0
textAI = ['Rock', 'Paper', 'Scissors']

const scoreText = document.querySelector('#score')
const aiChose = document.querySelector('#aiChose')
const youChose = document.querySelector('#youChose')

function doAction(i){
    let ai = Math.floor(Math.random()*3) // choses a number from between 0, 1 and 2.

    if ( i == ai ){
        return
    }

    if ( i == 0 && ai == 2 ){
        yourScore++
    }

    if ( i == 2 && ai == 1 ){
        yourScore++
    }

    if ( i == 1 && ai == 0 ){
        yourScore++
    }

    // COMPUTER WINS
    if (ai == 0 && i == 2 ){
        aiScore++
    }

    if (ai == 2 && i == 1 ){
        aiScore++
    }

    if (ai == 1 && i == 0 ){
        aiScore++

    }

    scoreText.innerHTML = yourScore + " : " + aiScore
    aiChose.innerHTML = 'Computer chose ' + textAI[ai]
    youChose.innerHTML = 'You chose ' + textAI[i]

}