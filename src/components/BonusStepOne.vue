<template>
    <div class="absolute justify-self-center self-center -mt-20 md:mt-0">
        <div class="bg-[url('../assets/images/bg-pentagon.svg')] bg-no-repeat relative w-[20rem] h-[17.5rem] -mt-5 scale-75 md:scale-100">
            <div @click="getBonusUserChoice" id="spock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-cyanA absolute -left-20 top-10 cursor-pointer">
                <img id="spock" src="../assets/images/icon-spock.svg" alt="">
            </div>
            <div @click="getBonusUserChoice" id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA absolute -top-20 left-20 cursor-pointer">
                <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
            </div>
            <div @click="getBonusUserChoice" id="paper" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA absolute -right-20 top-10 cursor-pointer">
                <img id="paper" src="../assets/images/icon-paper.svg" alt="">
            </div>
            <div @click="getBonusUserChoice" id="lizard" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-lizardA absolute -bottom-28 -left-5 cursor-pointer">
                <img id="lizard" src="../assets/images/icon-lizard.svg" alt="">
            </div>
            <div @click="getBonusUserChoice" id="rock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA absolute -bottom-28 -right-5 cursor-pointer">
                <img id="rock" src="../assets/images/icon-rock.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getBonusUserChoice, resetAll } from '../store/bonusStore'

onMounted(() => {
    resetAll()
})
</script>