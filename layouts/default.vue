<script setup lang="ts">
import { LayoutHeader } from '~/src/widgets/layout-header';
useHead({
    bodyAttrs: {
        class: 'bg-gray-50'
    }
})
</script>

<template>
    <layout-header />
    <main class="">
        <slot />
    </main>
</template>

<style scoped></style>
