<template>
  <div class="page">
    <CHeader></CHeader>
    <div class="page__content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import CHeader from '~/components/header/CHeader.vue';

export default {
  components: {
    CHeader,
  },
};
</script>

<style lang="css">
:root {
  --typo-color-primary: rgb(255, 255, 255);
  --theme-color-primary: rgb(35, 44, 65);
  --theme-color-primary60: rgba(35, 44, 65, 0.6);
  --gradient-black: linear-gradient(221.71deg, #000 4.13%, #676767 93.39%);
  --gradient-blue: linear-gradient(218.57deg, #0038ff 0%, #5ce2ff 93.91%);
  --gradient-orange: linear-gradient(208.27deg, #ff806c 0%, #ff5c00 95.3%);
  --gradient-purpur: linear-gradient(206.14deg, #ff6091 0%, #5127dd 145.34%);
  --functional-pink: #ff6091;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  background: var(--theme-color-primary);
  color: var(--typo-color-primary);
  font-size: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

body {
  font-size: 2rem;
}

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  &__content {
    flex: 1 1 auto;
  }
}

.wrapper {
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
