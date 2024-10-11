<script lang="ts" setup>
withDefaults(defineProps<{
  src?: string
  alt?: string
  isLoading?: boolean
}>(), {
  src: '',
  alt: 'img',
  isLoading: false,
})

const emit = defineEmits(['on-load'])

const onLoad = () => {
  emit('on-load')
}
</script>

<template>
  <img
    class="ui-img"
    :src="src"
    loading="lazy"
    :alt="alt"
    @load="onLoad"
  >
</template>

<style
    lang="scss"
    scoped
>
.ui-img {
  user-select: none;
}
</style>
