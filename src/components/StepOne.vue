<template>
    <div class="absolute justify-self-center self-center">
            <div class="bg-[url('../assets/images/bg-triangle.svg')] bg-no-repeat relative w-[20rem] h-[17.5rem]">
                <div @click="getUserChoice" id="paper" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA absolute -top-20 -left-20 cursor-pointer">
                    <img id="paper" src="../assets/images/icon-paper.svg" alt="">
                </div>
                <div @click="getUserChoice" id="scissors" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA absolute -top-20 -right-20 cursor-pointer">
                    <img id="scissors" src="../assets/images/icon-scissors.svg" alt="">
                </div>
                <div @click="getUserChoice" id="rock" class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA absolute -bottom-20 left-20 cursor-pointer">
                    <img id="rock" src="../assets/images/icon-rock.svg" alt="">
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getUserChoice, resetAll } from '../../store/store'

onMounted(() => {
    resetAll()
})
</script>