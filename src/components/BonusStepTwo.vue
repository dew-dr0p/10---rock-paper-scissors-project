<template>
    <div class="absolute justify-self-center self-center grid grid-flow-col gap-40 -mt-20 scale-[.65] md:scale-100">
           <div class="grid justify-items-center items-center">
               <p class="mb-20 hidden md:block text-center tracking-widest text-3xl">You Picked</p>
              <div :innerHTML="rawHTML" class="transition-transform"></div>
               <!-- <div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
                   <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
               </div> -->
               <p class="mt-20 block md:hidden text-center tracking-widest text-2xl">You Picked</p>
           </div>
           <div class="grid justify-items-center items-center">
               <p class="mb-20 hidden md:block text-center tracking-widest text-3xl">The House Picked</p>
               <div v-if="!computerElement" class=" w-40 h-40 bg-gradients-backgroundB opacity-30 rounded-full scale-150 animate-ping"></div>
               <div v-else :innerHTML="computerElement" class="transition-shadow"></div>
               <p class="mt-20 block md:hidden text-center tracking-widest text-2xl">The House Picked</p>
           </div>
       </div>
</template>

<script setup lang="ts">
import { bonusComponent, userElement, computerElement, generateBonusComputerChoice } from '../store/bonusStore'

const rawHTML = `${userElement.value.outerHTML}`

setTimeout(() => {
   generateBonusComputerChoice()
   setTimeout(() => {
       bonusComponent.value = 'BonusStepThree'
   }, 1000);
}, 2500);
</script>