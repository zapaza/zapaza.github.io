<template>
  <div class="is-preload">
    <CSidebar />
    <div id="wrapper">
      <router-view />
    </div>
    <CFooter />
  </div>
</template>

<script>
import CSidebar from "@/components/layouts/CSidebar";
import CFooter from "@/components/layouts/CFooter";

export default {
  components: { CFooter, CSidebar },
};
</script>
