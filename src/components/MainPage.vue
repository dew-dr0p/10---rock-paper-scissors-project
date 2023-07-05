<template>
    <div class="grid w-[calc(100vw-4rem)] h-[calc(100vh-14rem)]">
        <div class="absolute justify-self-center self-center">
            <div class="bg-[url('../assets/images/bg-triangle.svg')] bg-no-repeat relative w-[20rem] h-[17.5rem]">
                <div @click="getUserChoice"  id="paper" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA absolute -top-20 -left-20">
                    <img id="paper" src="../assets/images/icon-paper.svg" alt="">
                </div>
                <div @click="getUserChoice"  id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA absolute -top-20 -right-20">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div>
                <div @click="getUserChoice"  id="rock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA absolute -bottom-20 left-20">
                    <img id="rock" src="../assets/images/icon-rock.svg" alt="">
                </div>
            </div>
        </div>
        <p class="uppercase text-2xl justify-self-end self-end border-2 border-[#FFF] rounded-2xl p-10 py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Rules</p>
    </div>
<!-- <div class="grid">
    <img src="../assets/images/bg-triangle.svg" alt="" class="absolute justify-self-center self-center">
        <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[14px] border-gradients-paperA">
            <img src="../assets/images/icon-paper.svg" alt="">
        </div>
        <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[14px] border-gradients-scissorsA">
            <img src="../assets/images/icon-scissors.svg" alt="">
        </div>
        <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[14px] border-gradients-rockA">
            <img src="../assets/images/icon-rock.svg" alt="">
        </div>
</div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';



const choices = ["rock", "paper", "scissors"]
let map: Record<string, any> = {}

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

const computerChoice = ref('')
const userChoice = ref('')

const generateComputerChoice = () => {
    if (Math.random() <= 0.33) {
        computerChoice.value = 'rock'
    } else if (Math.random() <= 0.67) {
        computerChoice.value = 'paper'
    } else {
        computerChoice.value = 'scissors'
    }
}

// Using Record or Object
const getResult = (choice1: string, choice2: string) => console.log((map[choice1] || {})[choice2] || "Invalid choice")

// Using Map
// const getResult = (choice1: string, choice2: string) => console.log(map.get(choice2))

const getUserChoice = (event: Event) => {
    userChoice.value = event.target?.id
    generateComputerChoice()
    getResult(userChoice.value, computerChoice.value)
}


// var choices = ["rock", "paper", "scissors"];
// var map = {};

// choices.forEach(function(choice, i) {
    // map[choice] = {};
    // map[choice][choice] = "Was a tie"
    // map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    // map[choice][choices[(i+2)%3]] = choice + " wins"
// })

// function compare(choice1, choice2) {
//     return (map[choice1] || {})[choice2] || "Invalid choice";
// }


// var choices = ["rock", "spock", "paper", "lizard", "scissors"];
// var map = {};

// choices.forEach(function(choice, i) {
//     map[choice] = {};
//     for (var j = 0, half = (choices.length-1)/2; j < choices.length; j++) {
//         var opposition = (i+j)%choices.length
//         if (!j)
//             map[choice][choice] = "Was a tie"
//         else if (j <= half)
//             map[choice][choices[opposition]] = choices[opposition] + " wins"
//         else
//             map[choice][choices[opposition]] = choice + " wins"
//     }
// })

// function compare(choice1, choice2) {
//     return (map[choice1] || {})[choice2] || "Invalid choice";
// }
</script>