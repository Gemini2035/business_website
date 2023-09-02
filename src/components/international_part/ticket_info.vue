<!--
 * @Date: 2023-09-01 23:28:47
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-02 15:10:53
 * @FilePath: /business-website/src/components/international_part/ticket_info.vue
-->
<script lang="ts" setup>
import { ref } from 'vue';

import AreaHeader from './area_header.vue';
import Flight from './flight.vue';

// respond
const currentArea = ref<number>(0);

// method
const changeAreaIndex = (target: number) => {
    currentArea.value = target;
}
</script>

<template>
    <div class="info-container">
        <AreaHeader :index="currentArea" :changeAreaIndex="changeAreaIndex" />
        <Flight :index="currentArea" />
    </div>
</template>

<style lang="scss" scoped>
.info-container {
    padding: 0 50px;
    margin: auto;
    padding-top: 10px;
}
</style>
