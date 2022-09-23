onst getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('Error!')
    }
}



const getcomputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}



const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'computer won'
        } else {
            return 'user won'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'computer won'
        } else {
            return 'user won'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'computer won'
        } else {
            return 'user won'
        }
    }
}

const playGame = () => {
    var userChoice = getUserChoice("rock")
    console.log(userChoice)
    var computerChoice = getcomputerChoice()
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()