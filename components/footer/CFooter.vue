<template>
  <footer class="footer">
    <div class="wrapper">
      <UIText>© 2017 - {{ datetime }}</UIText>
    </div>
  </footer>
</template>

<script>
import UIText from '~/components/ui/UIText.vue';
export default {
  name: 'CFooter',
  components: { UIText },
  data() {
    return {
      datetime: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="css">
.footer {
  padding: 4rem 0;
}
</style>
