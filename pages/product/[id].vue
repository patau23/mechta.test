<script lang="ts" setup>
import { ProductPage } from '~/src/pages/product-page';

const { } = useRoute().params
</script>

<template>
    <product-page :product-id="'1'" />
</template>
