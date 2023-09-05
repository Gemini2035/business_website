<!--
 * @Date: 2023-08-13 15:46:33
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-05 16:42:38
 * @FilePath: /business-website/src/components/overseas_student_part/index.vue
-->
<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';

import AirInfo from './air_info.vue';
import AirDetail from './air_detail.vue';

// respond
const overseaDetail = inject('overseaDetail');
const detailInfo = ref<Array<{ id: number, title: string, statrCity: string, endCity: string, startDate: string, company: string, priceInfo: string, limiteInfo: string }>>([]);
const indexInfo = ref<number>(0);

// method

const changeState = (e: any) => {
    (overseaDetail as any).value = true;
    let currentNode: any = e.target;
    console.log(currentNode.parentNode)
    while (currentNode.tagName.toLocaleLowerCase() !== 'li') currentNode = currentNode.parentNode;
    indexInfo.value = currentNode.id;

}

onMounted(async() => detailInfo.value = await (await fetch('/data/ticket_info.json')).json());

</script>

<template>
    <div class="overseas-container">
        <img src="/assets/overseas_student/banner-lxs.jpg" alt="" class="placement-img">
        <div class="ticket-info">
            <AirDetail v-if="overseaDetail" :air-info="detailInfo[indexInfo]" />
            <AirInfo v-else @click="changeState" />
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