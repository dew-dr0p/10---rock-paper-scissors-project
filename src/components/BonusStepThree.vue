<template>
    <div class="absolute justify-self-center self-center items-center justify-items-center grid -mt-20 scale-[.65] md:scale-100">
        <div class="grid grid-flow-col gap-40 md:gap-20">
            <div class="grid justify-items-center items-center">
                <p class="mb-20 hidden md:block text-center tracking-widest text-3xl">You Picked</p>
                <div :innerHTML="rawHTML" class="transition-transform"></div>
                <!-- <div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div> -->
                <p class="mt-20 block md:hidden text-center tracking-widest text-2xl">You Picked</p>
            </div>
            <div class="mt-20 hidden md:block">
                <p class="text-center font-bold text-5xl tracking-widest mb-5">{{ showResult }}</p>
                <p @click="(bonusComponent = 'BonusStepOne')" class="bg-[#FFF] rounded-xl p-14 py-3 cursor-pointer text-2xl tracking-widest text-text-dark">Play Again</p>
            </div>
            <div class="grid justify-items-center items-center">
                <p class="mb-20 hidden md:block text-center tracking-widest text-3xl">The House Picked</p>
                <div :innerHTML="computerElement"></div>
                <!-- <div id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA scale-150">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div> -->
                <p class="mt-20 block md:hidden text-center tracking-widest text-2xl">The House Picked</p>
            </div>
        </div>
        <div class="mt-20 block md:hidden w-fit">
            <p class="text-center font-bold text-5xl tracking-widest mb-5">{{ showResult }}</p>
            <p @click="(bonusComponent = 'BonusStepOne')" class="bg-[#FFF] rounded-xl p-14 py-3 cursor-pointer text-2xl tracking-widest text-text-dark">Play Again</p>
        </div>
    </div>
</template>

<style>
.animation {
    animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.05), 0 0 0 4rem rgba(255, 255, 255, 0.05), 0 0 0 8rem rgba(255, 255, 255, 0.05);
  }
  100% {
    box-shadow: 0 0 0 4rem rgba(255, 255, 255, 0.05), 0 0 0 8rem rgba(255, 255, 255, 0.05), 0 0 0 12rem rgba(255, 255, 255, 0.05);
  }
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { bonusComponent, userChoice, userElement, computerChoice, computerElement, getBonusResult, updateScore } from '../store/bonusStore';

const rawHTML = `${userElement.value.outerHTML}`

const result = getBonusResult(userChoice.value, computerChoice.value)

onMounted(() => {
    document.getElementById(result)?.classList.add('animation')
})

const showResult = userChoice.value === result ? ("You Win") : (computerChoice.value === result ? "You Lose" : "It's a Tie")

showResult === 'You Win' ? updateScore('increase') : (showResult === 'You Lose' ? updateScore('decrease') : console.log("Score doesn't change"))
</script>