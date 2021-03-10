<template>
  <main class="articles">
    <div class="wrapper">
      <UISpacer margin="4rem">
        <UIText tag="h1" has-align="center" has-weight="bold" has-size="rem8"> My post</UIText>
      </UISpacer>
      <div class="articles__list">
        <div class="articles__item">
          <div class="articles__item-img"></div>
          <div class="articles__item-footer">
            <div class="articles__item-name"></div>
            <div class="articles__item-date"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UIText from '~/components/ui/UIText.vue';
import UISpacer from '~/components/ui/UISpacer.vue';

export default {
  name: 'Articles',
  components: { UISpacer, UIText },
};
</script>

<style lang="css">
.articles {
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
