<template>
  <ul class="menu">
    <li class="menu__item">
      <nuxt-link tag="a" to="/" :class="['menu__link']">Главная</nuxt-link>
    </li>
    <li class="menu__item">
      <nuxt-link tag="a" to="/articles" :class="['menu__link']">My posts</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CMenu',
  data() {
    return {};
  },
};
</script>

<style lang="css">
.menu {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  &__item {
    padding: 1rem;
  }

  &__link {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--typo-color-primary);
    text-decoration: none;
  }
}
</style>
