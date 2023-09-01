<!--
 * @Date: 2023-08-11 18:06:13
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 12:04:23
 * @FilePath: /business-website/src/App.vue
-->
<script setup lang="ts">
import { ref } from 'vue';

import Header from './components/header.vue';
import HomePart from './components/main_part/index.vue';
import InternationalPart from './components/international_part/index.vue';
import InternalPart from './components/internal_part/index.vue';
import OverseasStudentPart from './components/overseas_student_part/index.vue';
import AboutMePart from './components/about_me/index.vue';
import LinkMe from './components/link_me/index.vue';
import Tips from './components/tips/index.vue';
import Footer from './components/footer.vue';

// respond
const index = ref<number>(0);

// method
const changeIndex = (target: number) => {
  index.value = target;
};
</script>

<template>
  <div class="all-container">
    <Header :changeIndex="changeIndex" :activeIndex="index" />
    <div class="content-container">
      <HomePart v-if="index === 0" />
      <InternationalPart v-else-if="index === 1" />
      <InternalPart v-else-if="index === 2" />
      <OverseasStudentPart v-else-if="index === 3" />
      <AboutMePart v-else-if="index === 4" />
      <LinkMe v-else-if="index === 5" />
      <Tips v-else-if="index === 6" />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.all-container {
  width: 100vw;
  height: 100vh;
}
</style>
