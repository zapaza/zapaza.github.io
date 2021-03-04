<template>
  <div class="spacer" :class="[`spacer_margin${margin}`, `spacer_marginRight${marginRight}`]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    margin: {
      default: 16,
      type: [String, Number],
    },
    marginRight: {
      default: 0,
      type: [String, Number],
    },
  },
};
</script>

<style lang="css">
.spacer {
  &_margin {
    &_default,
    &rem2 {
      margin-bottom: 2rem;
    }
  }
  &_marginRight {
    &_default,
    &rem4 {
      margin-right: 4rem;
    }
  }
}
</style>
