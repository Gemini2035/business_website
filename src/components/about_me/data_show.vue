<!--
 * @Date: 2023-08-13 16:35:08
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-13 21:15:30
 * @FilePath: /business-website/src/components/about_me/data_show.vue
-->
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

// static
const showData: Array<{ data: number, title: string, type: 'persontage' | 'number' }> = [
    { data: 918397, title: '累计购票', type: 'number' },
    { data: 99.0, title: '出票成功率', type: 'persontage' },
    { data: 5118, title: '累计受理申请', type: 'number' },
    { data: 99.8, title: '累计受理申请', type: 'persontage' }
];

// respond
const increaseData = reactive(Array(showData.length).fill(0));

// method
const updateCounter = (index: number) => {
      const target = showData[index].data;
      const c = increaseData[index]
      const increment = target / 200

      if(c < target) {
          increaseData[index] = Math.ceil(c + increment);
          setTimeout(updateCounter, 3, index);
      } else {
          increaseData[index] = target;
          return;
      }
}

const stringFormate = (data: number, type: 'persontage' | 'number') => {
    const originData = data.toString();
    if (type === 'persontage') return (originData.indexOf('.') !== -1)? (originData + '%') : (originData + '.0%');
    else if (type === 'number') return originData.toLocaleString();
    return originData + 'e'
}

onMounted(() => {
    for (const i in increaseData) updateCounter(parseInt(i));
});
</script>

<template>
    <div class="data-container">
        <h1 class="title">我们的数据</h1>
        <p class="sub-title">2021年1月1日至2022年7月31日，我们的接待数据</p>
        <div class="data-set">
            <div v-for="(item, index) in showData" :key="index" class="set-item">
                <p class="data">{{stringFormate(increaseData[index], item.type)}}</p>
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.data-container {
    width: 100%;
    height: 45vh;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/assets/about_me/banner-aboutme.png') no-repeat center;
    justify-content: center;
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 36px;
    }

    .sub-xstitle {
        margin-top: 20px;
    }

    .data-set {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-top: 70px;

        .set-item {
            text-align: center;
            .data {
                font-size: 44px;
            }
        }
    }
}
</style>