<template>
  <component
    :is="tag"
    class="ui-text"
    :class="[
      hasWeight && `ui-text--weight-${hasWeight}`,
      hasSize && `ui-text--size-${hasSize}`,
      hasColor && `ui-text--color-${hasColor}`,
      hasAlign && `ui-text--align-${hasAlign}`,
      hasOverflow && 'ui-text--overflow',
      hasTextTransform && `ui-text--transform-${hasTextTransform}`,
      hasLineThrough && `ui-text--line-through`,
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UIText',
  props: {
    tag: {
      default: 'div',
      type: String,
    },
    hasWeight: {
      type: String,
      default: '',
    },
    hasSize: {
      type: String,
      default: '',
    },
    hasColor: {
      type: String,
      default: '',
    },
    hasAlign: {
      type: String,
      default: '',
    },
    hasOverflow: {
      type: Boolean,
    },
    hasTextTransform: {
      type: String,
      default: '',
    },
    hasLineThrough: {
      type: Boolean,
    },
  },
};
</script>

<style lang="css">
.ui-text {
  font-size: 2rem;
  line-height: normal;
  margin: 0;
  padding: 0;
  color: var(--typo-color-primary);

  &--weight {
    &-regular {
      font-weight: normal;
    }

    &-medium {
      font-weight: 500;
    }

    &-bold {
      font-weight: 700;
    }
  }

  &--size {
    &-rem15 {
      font-size: 1.5rem;
    }

    &-rem3 {
      font-size: 3rem;
    }

    &-rem8 {
      font-size: 8rem;
    }
  }

  &--align {
    &-center {
      text-align: center;
    }

    &-right {
      text-align: right;
    }
  }

  &--overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &--transform {
    &-uppercase {
      text-transform: uppercase;
    }
  }

  &_line-through {
    text-decoration: line-through;
  }
}
</style>
