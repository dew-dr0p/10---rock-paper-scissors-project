<template>
     <div class="justify-self-center self-center grid grid-flow-col gap-40 -mt-20">
            <div class="grid justify-items-center items-center">
                <p class="mb-20 text-center tracking-widest text-3xl">You Picked</p>
               <div :innerHTML="rawHTML" class="transition-transform"></div>
                <!-- <div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div> -->
            </div>
            <div class="grid justify-items-center items-center">
                <p class="mb-20 text-center tracking-widest text-3xl">The House Picked</p>
                <div v-if="!computerElement" class=" w-40 h-40 bg-gradients-backgroundB opacity-30 rounded-full scale-150 animate-ping"></div>
                <div v-else :innerHTML="computerElement" class="transition-shadow"></div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { component, userElement, computerElement, generateComputerChoice } from '../../store/store'

const rawHTML = `${userElement.value.outerHTML}`

setTimeout(() => {
    generateComputerChoice()
    setTimeout(() => {
        component.value = 'StepFour'
    }, 1000);
}, 2500);
</script>