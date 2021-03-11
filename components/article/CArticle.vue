<template>
  <div class="articles__item">
    <div class="articles__item-img">
      <img :src="imageSrc" :title="imageTitle" :alt="imageAlt" />
    </div>
    <div class="articles__item-footer">
      <div class="articles__item-name">{{ title }}</div>
      <div class="articles__item-date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CArticle',
  props: {
    imageSrc: {
      type: String,
    },
    imageTitle: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    title: {
      type: String,
    },
    date: {
      type: String,
    },
  },
};
</script>
