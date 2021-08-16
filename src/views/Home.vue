<template>
  <div class="home">
    <h1>Wait for the new version</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss">
.home {
  padding: 32px 16px;

  h1 {
    font-size: 48px;
    line-height: 64px;
    background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%) 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    text-decoration: none;
  }
}

@keyframes shine {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 490px;
  }
}
</style>
