<template>
  <main class="articles">
    <div class="wrapper">
      <UISpacer margin="4rem">
        <UIText tag="h1" has-align="center" has-weight="bold" has-size="rem8"> My post</UIText>
      </UISpacer>
      <div class="articles__list">
        <CArticle title="" date="" image-alt="" image-src="" image-title="" />
      </div>
    </div>
  </main>
</template>

<script>
import UIText from '~/components/ui/UIText.vue';
import UISpacer from '~/components/ui/UISpacer.vue';
import CArticle from '~/components/article/CArticle.vue';

export default {
  name: 'Articles',
  components: { CArticle, UISpacer, UIText },
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
