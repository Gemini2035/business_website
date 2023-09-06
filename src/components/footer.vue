<!--
 * @Date: 2023-08-12 18:15:13
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-06 10:24:12
 * @FilePath: /business-website/src/components/footer.vue
-->
<script lang="ts" setup>
// static 
const prop = defineProps<{ changeIndex: Function }>();
const infoData: Array<{ title: string, content: string, icon: string }> = [
    {
        title: '方便快捷的服务',
        content: '7X24小时服务，随时随地为您解决订票、出票、改期及退票等问题',
        icon: '/assets/footer/icon-fbkjfw.png'
    },
    {
        title: '灵活对结算周期',
        content: '提供一个自然月结账模式，更有根据情况提供最长6个月的结算周期',
        icon: '/assets/footer/icon-lhjszq.png'
    },
    {
        title: '品牌优势，这里更诚信',
        content: '专业机票20年，随时获取最低折扣，机票机位有保障',
        icon: '/assets/footer/icon-ppys.png'
    },
    {
        title: '云鸿航旅优势',
        content: '资深客服团队，直接获取500余家航空公司的折扣票价，7x24小时专人服务',
        icon: '/assets/footer/icon-kxwys.png'
    }
];
const operateData: Array<{ title: string, key: number}> = [
    { title: '首页', key: 0 },
    { title: '关于我们', key: 4 },
    { title: '联系我们', key: 5 },
    { title: '预定须知', key: 6 }
];
const certificationData: Array<{ icon: string, url: string }> = [
    { icon: '/assets/footer/card-zzrz.png', url: ''},
    { icon: '/assets/footer/card-cata.png', url: ''},
    { icon: '/assets/footer/card-beian.png', url: ''},
    { icon: '/assets/footer/card-webbeian.png', url: ''},
    { icon: '/assets/footer/card-shiming.png', url: ''}
];

// method
const footerClick = (target: number) => {
    prop.changeIndex(target);
    let top: number = document.documentElement.scrollTop;
      const timeTop: number = setInterval(() => {
        document.documentElement.scrollTop = top -= 100;
        if (top <= 0) clearInterval(timeTop);
      }, 5);
}
</script>

<template>
    <div class="footer-container">
        <div class="info-container">
            <div class="info-item" v-for="(item, index) in infoData" :key="index">
                <div class="img-container">
                    <img :src="item.icon" alt="">
                </div>
                <div class="text-container">
                    <h2>{{item.title}}</h2>
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div>
        <div class="footer-operation">
            <div v-for="(item, index) in operateData" :key="item.key" class="operate-item">
                <span @click="footerClick(item.key)" class="operate-title">{{item.title}}</span>
                <span class="divider" v-if="index !== operateData.length - 1">-</span>
            </div>
        </div>
        <div class="certification-container">
            <img v-for="(item, index) in certificationData" :key="index" :src="item.icon" alt="">
        </div>
        <img src="/assets/footer/chat.png" alt="" class="wechat">
    </div>
</template>

<style lang="scss" scoped>
.footer-container {
    width: 100vw;
    min-width: 900px;
    background-color: rgb(33, 33, 33);
    position: relative;
    padding-bottom: 100px;
    .info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 50px 30px;
        border-bottom: 1px solid rgb(137, 137, 137);
        .info-item {
            width: 25%;
            display: flex;
            align-items: center;

            .img-container {
                width: 50px;
                height: 50px;
                background-color: white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 75%;
                    height: auto;
                }
            }

            .text-container {
                margin-left: 10px;
                width: 80%;
                p {
                    color: rgb(137, 137, 137);
                }
            }
        }
    }
    .footer-operation {
        display: flex;
        align-items: center;
        padding: 30px 20px;

        .operate-item {
            font-size: 14px;
            color: rgb(137, 137, 137);

            .operate-title:hover {
                cursor: pointer;
            }
            .divider {
                margin: 0 20px;
            }
        }
    }

    .certification-container {
        display: flex;
        align-items: center;
        padding: 0 20px;
        justify-content: start;
        img {
            margin-right: 30px;
        }
    }
    .wechat {
        position: absolute;
        bottom: 5%;
        right: 1%;
        width: 150px;
        height: auto;
    }
}
</style>