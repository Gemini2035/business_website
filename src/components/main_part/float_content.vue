<!--
 * @Date: 2023-08-12 21:41:10
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-16 12:56:57
 * @FilePath: /business-website/src/components/main_part/float_content.vue
-->
<script lang="ts" setup>

// static
const imgList: Array<{ title: string, icon: string }> = [
    { title: '客服咨询', icon: '/assets/float_content/客服.png' },
    { title: '微信咨询', icon: '/assets/float_content/微信.png' },
    { title: '电话咨询', icon: '/assets/float_content/电话.png' }
];
</script>

<template>
    <div class="float-container">
        <div class="item-container" ref="ItemContainer">
            <div v-for="(item, index) in imgList" :key="index" class="img-item" :class="`item` + index">
                <img :src="item.icon" alt="">
                <p>{{ item.title }}</p>
                <hr class="divider" v-if="index !== imgList.length - 1">
            </div>
            <img src="/assets/footer/chat.png" class="hover1">
            <p class="hover2">19008223009</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.float-container {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 1000;

    .item-container {
        background-color: #9a8256;
        text-align: center;
        p {
            color: white;
        }
        .divider {
            margin-top: 10px;
        }
        .img-item {
            padding: 10px;
            img {
                width: 25px;
                height: auto;
                padding: 5px;
            }
        }
        .img-item:hover{
            cursor: pointer;
        }
    }

    .hover1 {
        width: 125px;
        height: auto;
        position: absolute;
        border: 3px solid #9a8256;
        border-radius: 5px;
        left: -160%;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    .hover2 {
        position: absolute;
        border: 3px solid #9a8256;
        border-radius: 5px;
        left: -160%;
        padding: 0 10px;
        bottom: 10%;
        color: black !important;
        background-color: white;
        display: none;
    }

    .item1:hover ~ .hover1 {
        display: block;
    }

    .item2:hover ~ .hover2{
        display: block;
    }
}
</style>