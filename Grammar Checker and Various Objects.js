let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
console.log(storyWords)
let count = 0
storyWords.forEach((word) => {
    count += 1
})
console.log(count)
storyWords = storyWords.filter((word) => {
    if (word != unnecessaryWord) {
        return word
    }
})
storyWords = storyWords.map((word) => {
    if (word === misspelledWord) {
        return "beatiful"
    } else {
        return word
    }
})
console.log(storyWords.join(" "))

let badWordIndex = storyWords.findIndex((word) => {
    return (word === badWord)

})
console.log(badWordIndex)
storyWords[78] = "really"
console.log(storyWords[78])

let lengthCheck = storyWords.every((word) => {
    return word.length < 10
})

console.log(lengthCheck)

storyWords.filter((word) => {
        word.length > 10 && console.log(word)
    }
)


const menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck
        } else {
            console.log("error")
        }
    },


    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck
        } else {
            console.log("error")
        }
    },

    get todaysSpecial () {
        if (this._meal && this._price) {
            return `Todays Special is ${this._meal} for ${this._price}`
        } else {
            return 'Meal or price was not set correctly!'
        }

    }

};


menu.meal = "Pizza"
menu.price = 20

console.log(menu.todaysSpecial)

const team = {
    _players : [{firstName : "Jason", lastName : "Statham", age : 20},  {firstName : "Bruh", lastName : "Moment", age : 31},
        {firstName : "Cringe", lastName : "Central", age : 25}],
    _games : [{opponent : "team1", teamPoints : 100, opponentPoints : 98}, {opponent : "team1", teamPoints : 110, opponentPoints : 99},
        {opponent : "team1", teamPoints : 120, opponentPoints : 100}],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName : newFirstName,
            lastname : newLastName,
            age : newAge
        }
        this.players.push(player)
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent : newOpponent,
            teamPoints : newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this.games.push(game)

    }

}
team.addPlayer("Bugs", "Bunny", 76)
team.addGame("Titans", 100, 98)
console.log(team._players)
console.log(team._games)