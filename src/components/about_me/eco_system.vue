<!--
 * @Date: 2023-08-13 18:50:17
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-15 12:39:35
 * @FilePath: /business-website/src/components/about_me/eco_system.vue
-->
<script lang="ts" setup></script>

<template>
    <div class="part2-container">

        <img src="/assets/about_me/aboutus2.png" alt="" class="img-content">
        <div class="text-group">
            <h1>云鸿航旅生态链</h1>
            <h2>AEROPLUS Universe</h2>
            <p>
                旅行社（Travel Agency）我们将建立与旅行社坚固的行业关系，通过协助他们发展业务和我们杰出的航旅资源嫁接，为旅客提供无缝的航空旅行预定体验。<br><br>
                航空公司（Airline）我们庞大的交易数字解决方案将为航司分析趋势、捕捉业务增长机会，并简化触达消费者的成本和流程。<br><br>
                大型企业（Corporate)商务旅行是拓展业务的好方法，我们在商务航旅中的每一步都与您相伴，提供管理良好航空旅行计划中的各种必需品。
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.part2-container {
    padding: 96px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(240, 240, 240);

    .text-group {
        width: 40%;
        margin-left: 25px;

        h1 {
            font-size: 36px;
        }

        h2 {
            font-size: 16px;
        }

        p {
            padding-top: 15px;
        }
    }

    .img-content {
        width: 55%;
        height: auto;
    }
}
</style>