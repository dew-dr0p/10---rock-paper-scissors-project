<template>
    <div class="p-7 border-2 border-[#FFF] rounded-2xl max-w-[50vw] m-auto border-opacity-50 uppercase">
        <div class="grid grid-cols-2 gap-80">
            <img src="../assets/images/logo.svg" alt="Rock Paper Scissor Logo">
            <div class="bg-[#FFF] text-text-dark justify-center items-center flex flex-col rounded-xl">
                <p class="text-gradients-paperA text-xl">Score</p>
                <h5 class="text-7xl font-bold">{{ score }}</h5>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { score } from '../store/store'
</script>