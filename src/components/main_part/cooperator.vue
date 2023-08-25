<!--
 * @Date: 2023-08-12 17:48:07
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-13 21:16:32
 * @FilePath: /business-website/src/components/main_part/cooperator.vue
-->
<script lang="ts" setup>
// static
const imgList: Array<string> = [
    '/assets/main/cooperator/合作伙伴_0001_中国国航.png',
    '/assets/main/cooperator/合作伙伴_0002_厦门航空.png',
    '/assets/main/cooperator/合作伙伴_0003_南方航空.png',
    '/assets/main/cooperator/合作伙伴_0004_美联航.png',
    '/assets/main/cooperator/合作伙伴_0005_国泰航空.png',
    '/assets/main/cooperator/合作伙伴_0006_法荷航-拷贝.png',
    '/assets/main/cooperator/合作伙伴_0007_东方航空.png',
    '/assets/main/cooperator/合作伙伴_0008_北欧航空.png',
    '/assets/main/cooperator/合作伙伴_0009_澳门航空.png',
    '/assets/main/cooperator/合作伙伴_0010_阿联酋航空.png',
    '/assets/main/cooperator/合作伙伴_0011_卡塔尔航空.png',
    '/assets/main/cooperator/合作伙伴欧商会.png'
];
</script>

<template>
    <div class="cooperator-container">
        <h1 class="title">合作伙伴</h1>
        <p class="title-tip">简单订票、轻松旅行 用我们的专业为您提供最优质的服务</p>
        <div class="img-container">
            <div class="img-item" v-for="(item, index) in imgList" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cooperator-container {
    padding-top: 100px;
    text-align: center;

    .title {
        font-size: 36px;
    }

    .title-tip {
        color: rgb(137, 137, 137);
        font-size: 18px;
    }

    .img-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 70px 0;

        .img-item {
            width: 20vw;
            margin-bottom: 75px;

            img {
                height: 75px;
                width: auto;
            }
        }
    }
}
</style>