<!--
 * @Date: 2023-09-01 23:32:47
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-02 15:17:41
 * @FilePath: /business-website/src/components/international_part/area_header.vue
-->
<script lang="ts" setup>
import { toRefs } from 'vue';

// static
const props = defineProps<{ index: number, changeAreaIndex: Function }>();
const areaHeaderInfo: Array<{ readonly name: string; readonly key: number }> = [
    { name: '美洲航线', key: 0 }, { name: '欧洲航线', key: 1 }, { name: '亚洲航线', key: 2 }, { name: '中东非航线', key: 3 }
];

// respond
const { index } = toRefs(props);

// method
const hoverHandle = (targetIndex: number) => {
    props.changeAreaIndex(targetIndex);
}
</script>

<template>
    <div class="area-option">
        <p v-for="item in areaHeaderInfo" :key="item.key" class="area-item" :class="index === item.key? 'isHover': ''" @mouseover="hoverHandle(item.key)">{{ item.name }}</p>
    </div>
</template>

<style scoped lang="scss">
.area-option {
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgb(218, 218, 218);
    height: 50px;

    .area-item {
        padding: 10px;
        font-size: 18px;
        margin-right: 30px;
        cursor: pointer;
        transition: 0.3s all;
        color: #888;
    }

    .area-item.isHover {
        color: #9a8256;
        border-bottom: 2px solid #9a8256;
    }
}
</style>