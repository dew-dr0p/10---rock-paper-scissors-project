<template>
    <div class="grid w-[calc(100vw-4rem)] h-[calc(100vh-14rem)] uppercase">
        <component :is="bonusComponents[bonusComponent]" />
        <p @click="showPopUp" class="text-2xl fixed justify-self-end self-end border-2 border-[#FFF] rounded-2xl p-10 py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Rules</p>
    </div>
    <div v-if="bonusRulesPopUp" class="bg-[#000] absolute w-screen h-screen z-50 top-0 left-0 bg-opacity-50 grid">
        <div class="bg-[#FFF] p-10 rounded-xl w-fit h-fit self-center justify-self-center">
            <div class="grid grid-flow-col items-center justify-between mb-10">
                <p class="text-4xl text-gradients-backgroundA uppercase font-bold">Rules</p>
                <img @click="closePopUp" src="../assets/images/icon-close.svg" alt="Close Icon" class="cursor-pointer">
            </div>
            <img src="../assets/images/image-rules-bonus.svg" alt="Rules of rock paper scissors game">
        </div>
    </div>
</template>

<script setup lang="ts">
import {bonusComponents, bonusComponent, bonusRulesPopUp, showPopUp, closePopUp} from '../store/bonusStore'
</script>