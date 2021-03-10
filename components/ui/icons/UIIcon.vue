<template>
  <Component :is="name" class="icon" :class="[`icon--size_${size}`]" />
</template>

<script>
import * as Svg from './src';
// type IconType = {
//   name: keyof typeof Svg
// }
export default {
  components: {
    ...Svg,
  },
  props: {
    size: {
      default: 'default',
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    name: {
      validator(value) {
        return Object.keys(Svg)
          .map(i => i)
          .includes(value);
      },
    },
  },
};
</script>

<style lang="css">
.icon {
  display: inline-flex;
  fill: currentColor;
  flex: none;
  height: 1em;
  line-height: 1em;
  position: relative;
  vertical-align: middle;
  width: 1em;

  &--size {
    &_default {
      font-size: 24px;
    }

    &_128 {
      font-size: 128px;
    }
  }
}
</style>
