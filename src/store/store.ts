import { ref } from 'vue'
import StepOne from '../components/StepOne.vue'
import StepTwo from '../components/StepTwo.vue'
import StepThree from '../components/StepThree.vue'

const components: any = {
    StepOne,
    StepTwo,
    StepThree,
}

const component = ref('StepOne')

const choices = ["rock", "paper", "scissors"]

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

const score = ref(0)

const computerChoice = ref('')
const userChoice = ref()

const userElement = ref()
const computerElement = ref()

const rockElement = `<div id="rock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA scale-150">
<img id="rock" src="/assets/icon-rock.svg" alt="">
</div>`
const paperElement = `<div id="paper" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA scale-150">
<img id="paper" src="/assets/icon-paper.svg" alt="">
</div>`
const scissorsElement = `<div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
<img id="scissors" src="/assets/icon-scissors.svg" alt="">
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

// Using Record or Object
const getResult = (choice1: string, choice2: string) => (map[choice1] || {})[choice2] || "Invalid choice"

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
    score,
    userElement,
    userChoice,
    computerElement,
    computerChoice,
    generateComputerChoice,
    getResult,
    getUserChoice,
    updateScore,
    resetAll
}
