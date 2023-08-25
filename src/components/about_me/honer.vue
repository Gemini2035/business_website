<!--
 * @Date: 2023-08-13 20:48:16
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-13 21:06:14
 * @FilePath: /business-website/src/components/about_me/honer.vue
-->
<script setup lang="ts">
// static
const honerList: Array<string> = [
    '/assets/about_me/1.jpg',
    '/assets/about_me/2.jpg'
];
</script>

<template>
    <div class="honer-container">
        <h2 class="title">资质荣誉</h2>
        <div class="honer-content">
            <div v-for="(item, index) in honerList" :key="index" class="img-item">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.honer-container {
    padding: 90px 0;
    background-color: rgb(240, 240, 240);
    text-align: center;

    .title {
        font-size: 36px;
        line-height: 48px;
    }

    .honer-content {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        .img-item {
            padding: 15px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            img {
                height: 350px;
                width: auto;
            }
        }
    }
}
</style>