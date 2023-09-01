<!--
 * @Date: 2023-09-01 12:03:11
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 12:30:40
 * @FilePath: /business-website/src/components/tips/index.vue
-->
<script lang="ts" setup>
import TextArea from './text-area.vue';
</script>

<template>
    <div class="tips-container">
        <div class="header-container">
            <h1 class="header-title">机票预定须知</h1>
        </div>
        <TextArea />
    </div>
</template>

<style lang="scss" scoped>
.tips-container {
    width: 100vw;
    min-width: 900px;

    .header-container {
        width: 100%;
        height: 300px;
        background: url('/assets/about_me/banner-aboutme.png') no-repeat bottom;
        display: flex;
        align-items: center;
        justify-content: center;
        .header-title {
            color: white;
        }
    }
}
</style>