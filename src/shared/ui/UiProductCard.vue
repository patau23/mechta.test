<script setup lang="ts">
import type { ProductEntity } from '~/src/entities/product/model/types/product.entity';
import UiSvg from './UiSvg.vue';

const props = withDefaults(
    defineProps<{
        product: ProductEntity
    }>(),
    {}
)

const route = useRoute();

const filledStarsAmount = computed(() => Math.ceil(props.product.rating / 20))
const outlinedStarsAmount = computed(() => 5 - filledStarsAmount.value)
</script>

<template>
    <div class="relative flex flex-col items-center gap-6 border rounded-2xl border-[#E7E7E7] px-5 py-6 bg-white">
        <button class="absolute top-3 right-3 rounded-full bg-[#545454] opacity-30 p-2 z-50">
            <ui-svg name="heart-outline" size="xmedium" color="white" />
        </button>
        <div class="relative">
            <div class="h-[300px] px-4 py-0.5">
                <img src="/image/product-image.png" alt="Product Image" class="w-full h-full object-contain">
                <!-- <img :src="product.image" alt="Product Image" class="w-full"> -->
            </div>
            <div class="flex flex-col gap-2 justify-center items-start ">
                <h2 class="text-sm leading-[1.2] font-normal mt-2">Apple iPhone 15 Pro</h2>
                <div class="flex gap-1.5 items-center">
                    <div class="flex space-x-1">
                        <ui-svg v-for="(_, i) in filledStarsAmount" :key="'stars-f-' + i" name="star-filled"
                            size="xsmall" color="#363842" />
                        <ui-svg v-for="(_, i) in outlinedStarsAmount" :key="'stars-o-' + i" name="star-filled"
                            size="xsmall" color="#BDBEC2" />
                    </div>
                    <span class="text-gray-500 text-sm">256 отзывов</span>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between items-end">
            <div class="flex flex-col">
                <div class="w-full space-x-2">
                    <span class="line-through text-[#979797] text-[1rem]">
                        {{ Math.floor(product.price * product.discount / 100 + product.price) }}
                    </span>
                    <span class="rounded-2xl text-xs text-white px-2 py-[2.5px] bg-[#F63B00]">
                        -{{ product.discount }}%
                    </span>
                </div>
                <h1 class="text-[2rem] leading-none font-bold">
                    {{ Math.floor(product.price) }} ₸
                </h1>
            </div>
            <button class="rounded-lg flex items-center justify-center text-white bg-blue-500 p-3">
                <ui-svg name="cart-outline" size="small" />
            </button>
        </div>
    </div>

</template>