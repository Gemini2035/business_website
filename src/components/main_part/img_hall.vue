<!--
 * @Date: 2023-08-12 16:21:57
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-17 15:27:07
 * @FilePath: /business-website/src/components/main_part/img_hall.vue
-->
<script lang="ts" setup>
import { ref } from 'vue';

// static
const imgList: Array<string> = [
    '/assets/main/hallimg/icon-qianzheng.png',
    '/assets/main/hallimg/icon-航旅.png',
    '/assets/main/hallimg/icon-dujia.jpg',
    '/assets/main/hallimg/icon-shanglv.png'
];
// respond
const mouseOverListener = ref<Array<boolean>>(Array(imgList.length).fill(false));
// method
const mouseOverHandle = (e: any) => {
    if (!e.target.id) return;
    mouseOverListener.value[parseInt(e.target.id)] = true;
}

</script>

<template>
    <div class="hall-container" @mouseover="mouseOverHandle">
        <img v-for="(item, index) in imgList" :key="index" :id="index.toString()" :src="item" alt="" class="img-content"
            :style="{ transform: `translateX(${(mouseOverListener[index] ? 0 : 74) + 15 * index}%)` }">
    </div>
</template>

<style lang="scss" scoped>
.hall-container {
    padding-top: 72px;
    height: 50vw;
    min-height: 700px;
    position: relative;
    width: 100vw;
    min-width: 900px;
    overflow: hidden;

    .img-content {
        width: 75%;
        height: auto;
        position: absolute;
        transition: 0.6s ease-in-out;
        cursor: pointer;
    }

    .img-content:first-child {
        transform: translateX(0) !important;
    }
}
</style>