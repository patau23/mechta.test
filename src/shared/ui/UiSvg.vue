<script lang="ts" setup>
export type UiSvgSize = 'xsmall' | 'msmall' | 'lsmall' | 'small' | 'medium' | 'xmedium' | 'big' | 'xbig'

const props = withDefaults(defineProps<Partial<{
  prefix: string
  name: string
  color: string
  size: UiSvgSize
}>>(), {
  prefix: 'icon',
  name: '',
  color: '#bd1515',
  size: 'medium',
})

const symbolId = () => `#${props.prefix}-${props.name}`
</script>

<template>
  <svg aria-hidden="true" class="ui-svg" :class="`ui-svg_${size}`" :style="{ fill: props.color }">
    <use :href="symbolId()" />
  </svg>
</template>

<style scoped lang="scss">
.ui-svg {
  display: block;
  flex-shrink: 0;
  transition: color .3s ease, transform .3s ease;

  @each $size, $height in (xbig, 48),
  (big, 32),
  (xmedium, 30),
  (medium, 24),
  (small, 20),
  (lsmall, 18),
  (msmall, 16),
  (xsmall, 14),
  (xxsmall, 10),
  {
  &#{'_' + $size} {
    height: $height * 1px;
    width: $height * 1px;
  }
}
}
</style>
