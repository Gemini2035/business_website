<!--
 * @Date: 2023-08-13 15:46:33
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-13 16:04:47
 * @FilePath: /business-website/src/components/overseas_student_part/index.vue
-->
<script lang="ts" setup></script>

<template>
    <div class="overseas-container">
        <img src="/assets/overseas_student/banner-lxs.jpg" alt="" class="placement-img">
        <div class="placeholder">
            <div class="overseas-area" />
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

    .placeholder {
        height: 175px;
        width: 100vw;
        background-color: rgb(241, 241, 241);
        display: flex;
        align-items: center;
        .overseas-area {
            background-color: #fff;
            border-radius: 4px;
            height: 60px;
            width: 100vw;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }
}
</style>