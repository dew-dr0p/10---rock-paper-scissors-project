<template>
    <div class="grid w-[calc(100vw-4rem)] h-[calc(100vh-15rem)] h uppercase">
        <component :is="bonusComponents[bonusComponent]" />
        <p @click="showPopUp" class="text-lg md:text-2xl fixed justify-self-end self-end border-2 border-[#FFF] rounded-2xl p-7 md:p-10 py-1 md:py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Rules</p>
        <p @click="goToNormal" class="text-lg md:text-2xl block lg:hidden fixed justify-self-start self-end uppercase border-2 border-[#FFF] rounded-2xl p-7 md:p-10 py-1 md:py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Normal</p>
    </div>
    <div v-if="bonusRulesPopUp" class="bg-[#000] absolute w-screen h-screen z-50 top-0 left-0 bg-opacity-50 grid">
        <div class="bg-[#FFF] p-10 md:rounded-xl w-screen h-screen md:w-fit md:h-fit self-center justify-self-center flex flex-col justify-items-center">
            <div class="grid grid-flow-col items-center justify-center md:justify-between mb-10">
                <p class="text-4xl text-gradients-backgroundA uppercase font-bold">Rules</p>
                <img @click="closePopUp" src="../assets/images/icon-close.svg" alt="Close Icon" class="cursor-pointer hidden md:block">
            </div>
            <img src="../assets/images/image-rules-bonus.svg" alt="Rules of rock paper scissors game">
            <img @click="closePopUp" src="../assets/images/icon-close.svg" alt="Close Icon" class="cursor-pointer block md:hidden w-5 self-center mt-60">
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import {bonusComponents, bonusComponent, bonusRulesPopUp, showPopUp, closePopUp} from '../store/bonusStore'

const goToNormal = () => {
    router.push('/')
}
</script>