<template>
  <img
    :src="url"
    class="d-inline-block v-align-middle line-height-0 circle border"
    :style="{
      width: `${size || 22}px`,
      height: `${size || 22}px`
    }"
  />
</template>

<script>
export default {
  props: ['space', 'size', 'symbolIndex'],
  computed: {
    url() {
      const file = this.symbolIndex
        ? this.symbolIndex === 'space'
          ? 'space'
          : `logo${this.symbolIndex}`
        : 'logo';
      return `https://assets.stampers.app/spaces/master/spaces/${this.space}/${file}.png`;
    }
  }
};
</script>
