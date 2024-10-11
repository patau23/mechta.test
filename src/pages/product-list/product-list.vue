<script setup lang="ts">
import { useProductList, type FilterType } from '~/src/entities/product/model/useProductList';
import UiProductCard from '~/src/shared/ui/UiProductCard.vue';

const { productList, filterList, currFilter } = useProductList();
const selectedFilter = ref<FilterType>();

const filterProductList = (filter: FilterType) => {
    console.log(filter, selectedFilter.value)
    selectedFilter.value = filter
    console.log(filter, selectedFilter.value)
    filterList(filter)
}

const currFilterStyle = (filter: FilterType) => {
    return selectedFilter.value === filter ? 'text-[#2667FF] border-b-[2px] border-[#2667FF] box-border' : ''
}

onMounted(() => {
    selectedFilter.value = currFilter.value
})
</script>

<template>
    <section class="container xxl:px-[312px]">
        <div class="mt-4">
            <div class="text-sm text-[#2667FF]">
                <a href="#" class="hover:underline">Смартфоны и гаджеты</a>
                <span> > </span>
                <a href="#" class="hover:underline">Смартфоны</a>
            </div>
        </div>
        <!-- Filters -->
        <div class="mt-4 flex justify-between items-center text-[14px]">
            <div class="w-full border rounded-[8px] border-[#F0F0F0] px-5">
                <div class="flex h-[40px] gap-8">
                    <div class="h-full flex items-center text-[#322F38]">Сортировка:</div>
                    <div class="flex gap-4 justify-between text-[#6A707C]">
                        <button :class="[currFilterStyle('popularity'), 'border-b-[2px_#2667FF]']"
                            @click="filterProductList('popularity')">
                            По популярности
                        </button>
                        <button :class="[currFilterStyle('cost_asc')]" @click="filterProductList('cost_asc')">
                            Сначала подешевле
                        </button>
                        <button :class="[currFilterStyle('cost_desc')]" @click="filterProductList('cost_desc')">
                            Сначала подороже
                        </button>
                        <button :class="[currFilterStyle('new')]" @click="filterProductList('new')">
                            Сначала новое
                        </button>
                        <button :class="[currFilterStyle('alphabetic')]" @click="filterProductList('alphabetic')">
                            По алфавиту
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- cards -->
    <section class="container xxl:px-[312px] mx-auto mt-6">
        <div class="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ui-product-card v-for="(product, i) in productList" :key="`product-${i}`" :product="product" />
        </div>
    </section>
</template>