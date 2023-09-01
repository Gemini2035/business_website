<!--
 * @Date: 2023-08-13 15:46:33
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 15:02:10
 * @FilePath: /business-website/src/components/overseas_student_part/index.vue
-->
<script lang="ts" setup>
import { ref } from 'vue';
import AirInfo from './air_info.vue';
const isDetail = ref(false);
</script>

<template>
    <div class="overseas-container">
        <img src="/assets/overseas_student/banner-lxs.jpg" alt="" class="placement-img">
        <div class="ticket-info">
            <div v-if="isDetail">222</div>
            <AirInfo v-else />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overseas-container {
    margin-top: 3px;
    min-width: 900px;

    .placement-img {
        width: 100vw;
        height: auto;
        display: block;
    }

    .ticket-info {
        width: 100%;
        background-color: rgb(241, 241, 241);
        padding: 20px 0;
    }
}
</style>