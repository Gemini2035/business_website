<!--
 * @Date: 2023-09-02 15:09:22
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-02 15:51:34
 * @FilePath: /business-website/src/components/international_part/flight.vue
-->
<script lang="ts" setup>
import { computed, onMounted, ref, toRefs } from 'vue';

// static
enum AreaCode {
    America,
    Europe,
    Asia,
    Others
}
const prop = defineProps<{ index: number }>();

// respond
const { index } = toRefs(prop);
const flightDataList = ref<Array<{ area: string, ticketList: Array<{ startCity: string, endCity: string, timeInfo: string, week: string; flightNumber: string }>}>>([]);

const showDataList = computed(() => {
    return flightDataList.value.filter(item => {
        return item.area === AreaCode[index.value]
    })
});

onMounted(async() => flightDataList.value = await (await fetch('/data/international_info.json')).json())
</script>

<template>
    <div class="flight-container">
        <div v-for="(item, index) in showDataList[0].ticketList" :key="index" class="flight-item">
            {{ item }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flight-container {
    width: 100%;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;

    .flight-item {
        width: calc(20% - 15px);
        margin-right: 15px;
        margin-bottom: 15px;
        background-color: red;
    }
}
</style>