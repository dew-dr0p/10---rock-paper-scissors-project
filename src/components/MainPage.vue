<template>
    <div class="grid w-[calc(100vw-4rem)] h-[calc(100vh-14rem)] uppercase">
        <component :is="components[component]" />
        <p class="text-2xl fixed justify-self-end self-end border-2 border-[#FFF] rounded-2xl p-10 py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Rules</p>
    </div>
</template>

<script setup lang="ts">
import {components, component} from '../../store/store'
</script>