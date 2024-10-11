<script setup lang="ts">
import { useProduct } from '~/src/entities/product/model/useProduct';
import UiSvg from '~/src/shared/ui/UiSvg.vue';
import type { ProductEntity } from '~/src/entities/product/model/types/product.entity';

const props = withDefaults(
    defineProps<{
        productId: ProductEntity['id']
    }>(),
    {}
)


const route = useRoute();

const { } = useProduct(props.productId)
</script>

<template>
    <!-- Breadcrumbs -->
    <section class="container mx-auto px-[312px] mt-4 text-gray-500">
        <div class="text-sm">
            <a href="#" class="hover:underline">
                Смартфоны и гаджеты
            </a>
            >
            <a href="#" class="hover:underline">Смартфоны</a> > <a href="#" class="hover:underline">
                iPhone
            </a>
        </div>
    </section>

    <!-- title -->
    <section class="container mx-auto px-[312px] mt-6">
        <h1 class="text-2xl font-bold">Apple iPhone 15 Pro</h1>
        <div class="flex items-center space-x-2 mt-2">
            <span class="text-yellow-500">★★★★★</span>
            <span class="text-gray-500 text-sm">256 отзывов</span>
        </div>
    </section>

    <!-- Product Details -->
    <section class="container mx-auto px-[312px] mt-5">
        <div class="grid grid-cols-1 lg:grid-cols-[746px_526px] gap-8">

            <!-- Left: Product Image -->
            <div class="bg-white p-6 shadow-md rounded-lg">
                <img src="/image/product-image.png" alt="Product Image" class="w-full rounded-lg">
            </div>

            <!-- Right: Product Info -->
            <div class="bg-white p-6 shadow-md rounded-lg">
                <p class="text-gray-600 mt-4">
                    Дисплей Super Retina XDR <br>
                    Полноэкранный OLED-дисплей с диагональю 6.7 дюйма <br>
                    Разрешение 2778 на 1284 пикселя при 458 ppi <br>
                    Класс защиты IP68 <br>
                </p>

                <div class="mt-4">
                    <h3 class="text-lg font-semibold">О товаре</h3>
                    <ul class="mt-2 text-gray-600">
                        <li><span class="font-bold">Страна-изготовитель:</span> Китай</li>
                        <li><span class="font-bold">Материал оправы:</span> ABS пластик</li>
                        <li><span class="font-bold">Материал линзы:</span> Пластик</li>
                        <li><span class="font-bold">Ширина линзы, мм:</span> 65</li>
                        <li><span class="font-bold">Разъем:</span> Обычный</li>
                    </ul>
                </div>

                <!-- Price and Buy Button -->
                <div class="mt-6 bg-gray-100 p-6 rounded-lg shadow-inner">
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="text-2xl font-bold text-red-500">1 119 890 Т</span>
                            <span class="line-through text-gray-400 text-sm ml-2">1 279 970 Т</span>
                        </div>
                        <button class="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center">
                            🛒 Купить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>