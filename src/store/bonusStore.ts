import { ref } from 'vue'
import BonusStepOne from '@/components/BonusStepOne.vue'
import BonusStepTwo from '@/components/BonusStepTwo.vue'
import BonusStepThree from '@/components/BonusStepThree.vue'

const bonusComponents: any = {
    BonusStepTwo,
    BonusStepOne,
    BonusStepThree
}

const bonusComponent = ref('BonusStepOne')

const bonusChoices = ["rock", "spock", "paper", "lizard", "scissors"]

const map: Record<string, any> = {}
// let map = new Map()
// let map = new Object()

console.log(map)

bonusChoices.forEach((choice, i) => {
    map[choice] = {};
    for (let j = 0, half = (bonusChoices.length-1)/2; j < bonusChoices.length; j++) {
        const opposition = (i+j)%bonusChoices.length
        if (!j)
            map[choice][choice] = "Tie"
        else if (j <= half)
            map[choice][bonusChoices[opposition]] = bonusChoices[opposition]
        else
            map[choice][bonusChoices[opposition]] = choice
    }
})

const score = ref(0)

const computerChoice = ref('')
const userChoice = ref()

const userElement = ref()
const computerElement = ref()

const rockElement = `<div id="rock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA scale-150">
<img id="rock" src="src/assets/images/icon-rock.svg" alt="">
</div>`
const paperElement = `<div id="paper" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA scale-150">
<img id="paper" src="src/assets/images/icon-paper.svg" alt="">
</div>`
const scissorsElement = `<div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
<img id="scissors" src="src/assets/images/icon-scissors.svg" alt="">
</div>`
const lizardElement = `<div id="lizard" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-lizardA scale-150">
<img id="lizard" src="src/assets/images/icon-lizard.svg" alt="">
</div>`
const spockElement = `<div id="spock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-cyanA scale-150">
<img id="spock" src="src/assets/images/icon-spock.svg" alt="">
</div>`

const getBonusUserChoice = (event: Event) => {
    userElement.value = (event.target as HTMLElement)
    if (userElement.value.constructor === HTMLImageElement){
        userElement.value = userElement.value.parentElement
    }
    userElement.value.classList.remove('absolute')
    userElement.value.classList.remove('-top-20')
    userElement.value.classList.remove('-left-20')
    userElement.value.classList.add('scale-150')
    userChoice.value = userElement.value.id
    bonusComponent.value = 'BonusStepTwo'
}

const generateBonusComputerChoice = () => {
    if (Math.random() < 0.2) {
        computerChoice.value = 'rock'
        computerElement.value = rockElement
    } else if (Math.random() < 0.4) {
        computerChoice.value = 'spock'
        computerElement.value = spockElement
    } else if (Math.random() < 0.6) {
        computerChoice.value = 'paper'
        computerElement.value = paperElement
    } else if (Math.random() < 0.8) {
        computerChoice.value = 'lizard'
        computerElement.value = lizardElement
    } else {
        computerChoice.value = 'scissors'
        computerElement.value = scissorsElement
    }
}

// Using Record or Object

const getBonusResult = (choice1: string, choice2: string) => (map[choice1] || {})[choice2] || "Invalid choice"

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
    bonusComponents,
    bonusComponent,
    score,
    userElement,
    userChoice,
    computerElement,
    computerChoice,
    generateBonusComputerChoice,
    getBonusUserChoice,
    getBonusResult,
    updateScore,
    resetAll
}
