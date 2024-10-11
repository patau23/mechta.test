<script setup lang="ts">
import UiSvg from '~/src/shared/ui/UiSvg.vue';
import UiImg from '~/src/shared/ui/UiImg.vue';
const search = ref<string>();

const searchProduct = () => {

}
</script>

<template>
    <header class="">
        <nav class="bg-[#2667FF] p-4">
            <div class="container mx-auto px-[312px] flex justify-start items-center gap-6">
                <!--  -->
                <ui-img src="/image/logo.svg" />
                <div class="relative w-[636px]">
                    <input type="text" class="w-full p-2 px-6 text-base rounded-[50px] border border-gray-300"
                        placeholder="Поиск товара">
                    <span class="absolute right-6 top-2.5 text-gray-400">
                        <ui-svg name="search-outline" size="lsmall" color="#979797" />
                    </span>
                </div>
                <div class="flex items-center gap-[26px]">
                    <button class="text-white">
                        <ui-svg name="heart-filled" size="big" color="#979797" />
                    </button>
                    <button class="text-white">
                        <ui-svg name="cart-filled" size="big" color="#979797" />
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>