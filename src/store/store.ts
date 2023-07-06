import { ref } from 'vue'
import StepOne from '../components/StepOne.vue'
import StepTwo from '../components/StepTwo.vue'
import StepThree from '../components/StepThree.vue'
import StepFour from '../components/StepFour.vue'
import BonusStepOne from '@/components/BonusStepOne.vue'

const components: any = {
    StepOne,
    StepTwo,
    StepThree,
    StepFour
}

const component = ref('StepOne')

const bonusComponents: any = {
    BonusStepOne,
}

const bonusComponent = ref('BonusStepOne')

const choices = ["rock", "paper", "scissors"]
// const bonusChoices = ["rock", "spock", "paper", "lizard", "scissors"]

const map: Record<string, any> = {}
// let map = new Map()
// let map = new Object()

console.log(map)

choices.forEach((choice, i) => {
    // Using Record
    map[choice] = {}
    map[choice][choice] = "Tie"
    map[choice][choices[(i+1)%3]] = choices[(i+1)%3]
    map[choice][choices[(i+2)%3]] = choice

    // Using Map
    // map.set(choice, {})
    // map.set(choice, {choice: 'Tie'})
    // map.set(choice, {choices,[(i+1)%3]: choices[(i+1)%3] + " wins"})
    // map.set(choice, {choices,[(i+2)%3]: choice + " wins"})

    // Using Object
    // map[choice] = {};
    // map[choice][choice] = "Tie"
    // map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    // map[choice][choices[(i+2)%3]] = choice + " wins"
})

// bonusChoices.forEach((choice, i) => {
//     console.log(map)
//     map[choice] = {};
//     for (let j = 0, half = (bonusChoices.length-1)/2; j < bonusChoices.length; j++) {
//         const opposition = (i+j)%bonusChoices.length
//         if (!j)
//             map[choice][choice] = "Tie"
//         else if (j <= half)
//             map[choice][bonusChoices[opposition]] = bonusChoices[opposition] + " wins"
//         else
//             map[choice][bonusChoices[opposition]] = choice + " wins"
//     }
//     console.log(map)
// })

const score = ref(0)

const computerChoice = ref('')
const userChoice = ref()

const userElement = ref()
const computerElement = ref()

const rockElement = `<div id="rock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA scale-150">
<img id="rock" src="../assets/images/icon-rock.svg" alt="">
</div>`
const paperElement = `<div id="paper" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA scale-150">
<img id="paper" src="../assets/images/icon-paper.svg" alt="">
</div>`
const scissorsElement = `<div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
<img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
</div>`


const getUserChoice = (event: Event) => {
    userElement.value = (event.target as HTMLElement)
    if (userElement.value.constructor === HTMLImageElement){
        userElement.value = userElement.value.parentElement
    }
    userElement.value.classList.remove('absolute')
    userElement.value.classList.remove('-top-20')
    userElement.value.classList.remove('-left-20')
    userElement.value.classList.add('scale-150')
    userChoice.value = userElement.value.id
    component.value = 'StepTwo'
}

const generateComputerChoice = () => {
    if (Math.random() < 0.33) {
        computerChoice.value = 'rock'
        computerElement.value = rockElement
    } else if (Math.random() < 0.67) {
        computerChoice.value = 'paper'
        computerElement.value = paperElement
    } else {
        computerChoice.value = 'scissors'
        computerElement.value = scissorsElement
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
const getResult = (choice1: string, choice2: string) => (map[choice1] || {})[choice2] || "Invalid choice"
// const getBonusResult = (choice1: string, choice2: string) => console.log((map[choice1] || {})[choice2] || "Invalid choice")

const updateScore = (value: string) => {
    value === 'increase' ? score.value++ : (value === 'decrease' ? score.value-- : console.log("Invalid Score"))
}

// Using Map
// const getResult = (choice1: string, choice2: string) => console.log(map.get(choice2))


function resetAll() {
    userChoice.value = ''
    computerChoice.value = ''
    userElement.value = null
    computerElement.value = null
}

export {
    components,
    component,
    bonusComponents,
    bonusComponent,
    score,
    userElement,
    userChoice,
    computerElement,
    computerChoice,
    generateComputerChoice,
    generateBonusComputerChoice,
    getResult,
    getUserChoice,
    updateScore,
    resetAll
}
