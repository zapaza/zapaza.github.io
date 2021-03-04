<template>
  <section
    class="section"
    :class="{
      'section--black': isBlack,
      'section--blue': isBlue,
      'section--purpur': isPurpur,
      'section--orange': isOrange,
    }"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'CSections',
  props: {
    isBlack: {
      type: Boolean,
    },
    isBlue: {
      type: Boolean,
    },
    isPurpur: {
      type: Boolean,
    },
    isOrange: {
      type: Boolean,
    },
  },
};
</script>

<style lang="css">
.section {
  width: 100%;
  border-radius: 20px;
  position: relative;
  background-color: var(--theme-color-primary60);
  padding: 6rem;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 20px;
    left: 0;
    top: 0;
    opacity: 0.6;
    filter: blur(50px);
    z-index: -1;
  }

  &--black::before {
    background: var(--gradient-black);
  }

  &--blue::before {
    background: var(--gradient-blue);
  }

  &--purpur::before {
    background: var(--gradient-purpur);
  }

  &--orange::before {
    background: var(--gradient-orange);
  }
}
</style>
