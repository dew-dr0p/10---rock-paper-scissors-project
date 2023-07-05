<template>
    <div class="justify-self-center self-center items-center justify-items-center grid grid-flow-col gap-20 -mt-20">
            <div class="grid justify-items-center items-center px-12">
                <p class="mb-20 text-center tracking-widest text-3xl">You Picked</p>
                <div :innerHTML="rawHTML" class="transition-transform"></div>
                <!-- <div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div> -->
            </div>
            <div class="mt-20">
                <p class="text-center font-bold text-5xl tracking-widest mb-5">{{ showResult }}</p>
                <p @click="(component = 'StepOne')" class="bg-[#FFF] rounded-xl p-14 py-3 cursor-pointer text-2xl tracking-widest text-text-dark">Play Again</p>
            </div>
            <div class="grid justify-items-center items-center">
                <p class="mb-20 text-center tracking-widest text-3xl">The House Picked</p>
                <div :innerHTML="computerElement"></div>
                <!-- <div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div> -->
            </div>
        </div>
</template>

<script setup lang="ts">
import { component, userChoice, userElement, computerChoice, computerElement, getResult, updateScore } from '../../store/store';

const rawHTML = `${userElement.value.outerHTML}`

const result = getResult(userChoice.value, computerChoice.value)

const showResult = userChoice.value === result ? ("You Win") : (computerChoice.value === result ? "You Lose" : "It's a Tie")
showResult === 'You Win' ? updateScore('increase') : (showResult === 'You Lose' ? updateScore('decrease') : console.log("Score doesn't change"))
</script>