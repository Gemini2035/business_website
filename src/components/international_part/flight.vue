<!--
 * @Date: 2023-09-02 15:09:22
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-02 20:22:13
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
    const temp: typeof flightDataList.value = flightDataList.value.filter(item => item.area === AreaCode[index.value]);
    return temp[0]? temp[0].ticketList : [];
});

onMounted(async() => flightDataList.value = await (await fetch('/data/international_info.json')).json())
</script>

<template>
    <div class="flight-container">
        <div v-for="(item, index) in showDataList" :key="index" class="flight-item">
            <div class="flight-title">
                <span>{{ item.startCity }}</span>
                <img src="assets/international/flight.png" alt="">
                <span>{{ item.endCity }}</span>
            </div>
            <p class="flight-time">{{ item.timeInfo }}</p>
            <div class="flight-info">
                <p>{{ item.week }}</p>
                <p class="flight-number"> {{ item.flightNumber }}</p>
            </div>
            <img src="/assets/international/fire.png" alt="" class="icon">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flight-container {
    width: 100%;
    padding: 5px;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .flight-item {
        width: calc(20% - 27px);
        margin-right: 15px;
        margin-bottom: 15px;
        background-color: rgb(247, 248, 249);
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90px;
        position: relative;
        transition: 0.1s ease;

        .flight-title {
            display: flex;
            align-items: center;
            font-size: 16px;
            color: rgb(49, 50, 49);
            
            span:first-child {
                margin-right: 15px;
            }
            
            span:last-child {
                margin-left: 15px;
            }

            img {
                width: 30px;
                height: auto;
            }
        }

        .flight-time {
            font-size: 12px;
            color: rgb(128, 128, 128);
        }

        .flight-info {
            font-size: 12px;
            color: #888;
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: baseline;

            .flight-number {
               font-size: 19px; 
               color: #9a8256;
            }
        }
        .icon {
            height: 30px;
            width: auto;
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
    .flight-item:hover {
        width: calc(20% - 29px);
        height: 88px;
        border: 1px solid rgb(200, 200, 200);
        cursor: pointer;
    }
}
</style>