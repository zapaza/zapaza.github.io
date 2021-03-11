<template>
  <header class="header">
    <nav class="header__menu">
      <!--      <CMenu></CMenu>-->
    </nav>
  </header>
</template>

<script>
// import CMenu from '~/components/menu/CMenu.vue';

export default {
  name: 'CHeader',
  components: {
    // CMenu,
  },
};
</script>

<style lang="css">
.header {
  padding: 1.5rem 2rem;
  margin-bottom: 8rem;

  &__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
