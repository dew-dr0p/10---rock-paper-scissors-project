<template>
    <p @click="goToNormal" class="text-2xl fixed justify-self-end self-start uppercase border-2 border-[#FFF] rounded-2xl p-10 py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Normal</p>
    <div class="p-7 border-2 border-[#FFF] rounded-2xl max-w-[50vw] m-auto border-opacity-50 uppercase">
        <div class="grid grid-cols-2 gap-40">
            <img src="../assets/images/logo-bonus.svg" alt="Rock Paper Scissor Spock Liard Logo">
            <div class="bg-[#FFF] text-text-dark justify-center items-center flex flex-col rounded-xl">
                <p class="text-gradients-paperA text-xl">Score</p>
                <h5 class="text-7xl font-bold">{{ score }}</h5>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { score } from '../store/bonusStore'

const goToNormal = () => {
    router.push('/')
}
</script>