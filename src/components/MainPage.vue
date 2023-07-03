<template>
    <div class="grid w-[calc(100vw-4rem)] h-[calc(100vh-14rem)]">
        <div class="absolute justify-self-center self-center">
            <div class="bg-[url('../assets/images/bg-triangle.svg')] bg-no-repeat relative w-[20rem] h-[17.5rem]">
                <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-paperA absolute -top-20 -left-20">
                    <img src="../assets/images/icon-paper.svg" alt="">
                </div>
                <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-scissorsA absolute -top-20 -right-20">
                    <img src="../assets/images/icon-scissors.svg" alt="">
                </div>
                <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[20px] border-gradients-rockA absolute -bottom-20 left-20">
                    <img src="../assets/images/icon-rock.svg" alt="">
                </div>
            </div>
        </div>
        <p class="uppercase text-2xl justify-self-end self-end border-2 border-[#FFF] rounded-2xl p-10 py-3 m-3 cursor-pointer tracking-wider hover:bg-[#fff] hover:bg-opacity-25">Rules</p>
    </div>
<!-- <div class="grid">
    <img src="../assets/images/bg-triangle.svg" alt="" class="absolute justify-self-center self-center">
        <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[14px] border-gradients-paperA">
            <img src="../assets/images/icon-paper.svg" alt="">
        </div>
        <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[14px] border-gradients-scissorsA">
            <img src="../assets/images/icon-scissors.svg" alt="">
        </div>
        <div class="bg-[#FFF] rounded-full w-40 h-40 justify-center items-center flex border-[14px] border-gradients-rockA">
            <img src="../assets/images/icon-rock.svg" alt="">
        </div>
</div> -->
</template>

<script setup lang="ts">

</script>