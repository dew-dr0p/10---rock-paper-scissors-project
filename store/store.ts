import { ref } from 'vue'

const choices = ["rock", "paper", "scissors"]
const bonusChoices = ["rock", "spock", "paper", "lizard", "scissors"]

const map: Record<string, any> = {}

// let map = new Map()

// let map = new Object()

console.log(map)

choices.forEach((choice, i) => {
    console.log(map)

    // Using Record
    map[choice] = {}
    map[choice][choice] = "Tie"
    map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    map[choice][choices[(i+2)%3]] = choice + " wins"

    // Using Map
    // map.set(choice, {})
    // map.set(choice, {choice: 'Tie'})
    // map.set(choice, {choices,[(i+1)%3]: choices[(i+1)%3] + " wins"})
    // map.set(choice, {choices,[(i+2)%3]: choice + " wins"})

    // Using Object
    // map[choice] = {};
    // map[choice][choice] = "Was a tie"
    // map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    // map[choice][choices[(i+2)%3]] = choice + " wins"
    console.log(map)
})

bonusChoices.forEach((choice, i) => {
    console.log(map)
    map[choice] = {};
    for (let j = 0, half = (bonusChoices.length-1)/2; j < bonusChoices.length; j++) {
        const opposition = (i+j)%bonusChoices.length
        if (!j)
            map[choice][choice] = "Tie"
        else if (j <= half)
            map[choice][bonusChoices[opposition]] = bonusChoices[opposition] + " wins"
        else
            map[choice][bonusChoices[opposition]] = choice + " wins"
    }
    console.log(map)
})

const computerChoice = ref('')
const userChoice = ref('')

const generateComputerChoice = () => {
    if (Math.random() < 0.33) {
        computerChoice.value = 'rock'
    } else if (Math.random() < 0.67) {
        computerChoice.value = 'paper'
    } else {
        computerChoice.value = 'scissors'
    }
}

const generateBonusComputerChoice = () => {
    if (Math.random() < 0.2) {
        computerChoice.value = 'rock'
    } else if (Math.random() < 0.4) {
        computerChoice.value = 'spock'
    } else if (Math.random() < 0.6) {
        computerChoice.value = 'paper'
    } else if (Math.random() < 0.8) {
        computerChoice.value = 'lizard'
    } else {
        computerChoice.value = 'scissors'
    }
}

// Using Record or Object
const getResult = (choice1: string, choice2: string) => console.log((map[choice1] || {})[choice2] || "Invalid choice")
const getBonusResult = (choice1: string, choice2: string) => console.log((map[choice1] || {})[choice2] || "Invalid choice")

// Using Map
// const getResult = (choice1: string, choice2: string) => console.log(map.get(choice2))

const getUserChoice = (event: Event) => {
    userChoice.value = (event.target as HTMLElement)?.id
    generateComputerChoice()
    getResult(userChoice.value, computerChoice.value)
}

export {
    generateComputerChoice,
    generateBonusComputerChoice,
    getResult,
    getBonusResult,
    getUserChoice
}
