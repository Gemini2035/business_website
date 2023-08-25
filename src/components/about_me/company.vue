<!--
 * @Date: 2023-08-13 16:30:18
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-14 20:01:56
 * @FilePath: /business-website/src/components/about_me/company.vue
-->
<script lang="ts" setup></script>

<template>
    <div class="part1-container">
        <div class="text-group">
            <h1>云鸿航旅</h1>
            <h2>AEROPLUS</h2>
            <p>AEROPLUS云鸿航旅诞生于冠状病毒肆虐的2020年11月，是沐昂集团（集合商旅Corporate Travel、度假Leisure Travel和航旅Air Travel为一体的旅业集团）旗下的创新科技品牌。<br>
                成立之初，云鸿航旅就荟聚了大量航旅精英，每位雇员都平均深耕航空服务领域超过12年。<br><br>
                云鸿团队积极进取，富有创造力，协作并以解决方案为导向。我们的精英们敢于大胆思考，迎接挑战，并探索新的想法来引领旅游业的发展。<br><br>
                凭借兢兢业业的深耕、优质的服务、合作伙伴和客户的支持信任和信赖，此次被正式批准成为国际航协认可代理人，对于云鸿来说，既是荣幸，也是挑战。<br><br>
                我们承诺，我们将秉承初心，新的起点，再次启航。为信任我们的乘客友友们提供更加全面，更加放心，更加优质的服务！
            </p>
        </div>
        <img src="/assets/about_me/aboutus.jpg" alt="" class="img-content">
    </div>
</template>

<style lang="scss" scoped>
.part1-container {
    padding: 96px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .text-group {
        width: 40%;
        margin-right: 25px;

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