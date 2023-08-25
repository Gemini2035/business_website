<!--
 * @Date: 2023-08-12 15:26:10
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-12 16:57:21
 * @FilePath: /business-website/src/components/main_part/introduce.vue
-->
<script lang="ts" setup>
// static
const showData: Array<{ title: string, content: string, src: string }> = [
    {
        title: '航协认证',
        content: '我公司是政府采购机票的定点单位，具备国际航协及国内航协的认可资质，同时具有中航鑫港公司的政府采购机票担保函',
        src: '/assets/main/description/img-xy.png'
    },
    {
        title: '采购优惠',
        content: '各政府部门、科学院校、医院等事业单位。持有公务卡的公务员、老师、医生等相关人员；在我单位购买机票可享受全价票8.8折，折扣票9.5折的优惠',
        src: '/assets/main/description/img-cg.png'
    },
    {
        title: '对公转账',
        content: '我司保证所有出票及支付内容均为对公转账，保障财产安全',
        src: '/assets/main/description/img-zf.png'
    },
    {
        title: '合作伙伴',
        content: '国内四大航、世界SkyTrax五星航司等在内的90+航企；还与超过130所北美高校、80所以上的欧洲排名高校达成战略合作伙伴',
        src: '/assets/main/description/img-omsh.png'
    }
]
</script>

<template>
    <div class="introduce-container">
        <h1 class="header">政府采购定点机票代理商</h1>
        <p class="description">
            根据中国民用航空局印发的《关于加强公务机票管理有关事项的通知》以及（财库{2014}33号文件，以下简称《通知》）中明确的购票人在国内出差、
            <br>因公临时出国时所购买的机票规定。中国财政部和民用航空局经过严格的审核，筛选出政府机票采购供应商
        </p>
        <div class="introduce-form">
            <div v-for="(item, index) in showData" :key="index" class="form-item">
                <div class="img-container">
                    <img :src="item.src" alt="">
                </div>
                <div class="text-container">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.introduce-container {
    padding-top: 100px;

    .header {
        font-size: 66px;
        text-align: center;
        color: rgb(137, 137, 137);
    }

    .description {
        margin-top: 32px;
        color: rgb(137, 137, 137);
        font-size: 16px;
        line-height: 32px;
        text-align: center;
    }

    .introduce-form {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        padding: 40px;

        .form-item {
            width: 300px;
            overflow: hidden;
            box-shadow: 1px 1px 5px rgb(137, 137, 137);

            .img-container {
                height: 210px;
                overflow: hidden;
                img {
                    height: 100%;
                    width: auto;
                    transition: 0.6s ease-in-out;
                    cursor: pointer;
                    margin: auto;
                }
                img:hover {
                    transform: scale(1.2);
                }
            }
            .text-container {
                margin-top: 30px;
                text-align: center;
                h2 {
                    font-size: 24px;
                }
                p {
                    padding: 30px;
                    color: rgb(137, 137, 137);
                    font-size: 14px;
                }
            }
        }
    }
}
</style>