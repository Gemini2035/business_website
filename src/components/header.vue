<!--
 * @Date: 2023-08-11 18:18:14
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 12:19:53
 * @FilePath: /business-website/src/components/header.vue
-->
<script setup lang="ts">
import { computed, toRefs } from 'vue';

// static
const props = defineProps<{ changeIndex: Function, activeIndex: number}>();

const { changeIndex } = props;

const headerData: Array<{ title: string, key: number, icon: string }> = [
    { title: '首页', key: 0, icon: '/assets/header/icon-index.png' },
    { title: '国际机票', key: 1, icon: '/assets/header/icon-gj.png' },
    { title: '国内机票', key: 2, icon: '/assets/header/icon-gn.png' },
    { title: '留学生机票', key: 3, icon: '/assets/header/icon-lxs.png' },
    { title: '关于我们', key: 4, icon: '/assets/header/icon-gywm.png' },
    { title: '联系我们', key: 5, icon: '/assets/header/icon-lxwm.png' },
    { title: '行业资讯', key: 6, icon: '/assets/header/icon-zixun.png' }
];

// respond
const { activeIndex } = toRefs(props);

const className = computed(() => {
    if (activeIndex.value === 4 || activeIndex.value === 6) return 'about-me';
    return '';
})
</script>

<template>
    <div class="header-container">
        <div class="pre-header">
            <img src="/assets/header/logo.png" alt="" class="logo">
            <div class="phone-container">
                <img src="/assets/header/icon-phone.png" class="phone-icon" />
                <span class="phone-number">订票热线: 028-87685313  /  19008223009</span>
            </div>
        </div>
        <div class="menu-container" :class="className">
            <div class="menu-item" v-for="item in headerData" :key="item.key" @click="changeIndex(item.key)" :class="activeIndex === item.key? 'choosen' : ''">
                <img :src="item.icon" alt="">
                <span class="menu-title">{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-container {
    width: 100vw;
    min-width: 900px;
    .pre-header {
        display: flex;
        align-items: center;
        position: relative;

        .logo {
            height: 100px;
            width: auto;
            margin-left: 40px;
            margin-top: 10px;
        }

        .phone-container {
            display: flex;
            align-items: center;
            position: absolute;
            right: 3%;
            
            .phone-icon {
                width: 45px;
                height: auto;
            }

            .phone-number {
                font-size: 25px;
                margin-left: 20px;

            }
        }
    }
    .menu-container {
        padding: 0 30px;
        display: flex;
        background-color: rgba(137, 137, 137, 0.8);
        box-shadow: 0 2px 5px black;
        overflow-y: auto;
        .menu-item {
            padding: 12px 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            .menu-title {
                margin-left: 10px;
                font-size: 20px;
                color: white;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .menu-item:hover {
            background-color: #9a8256;
        }
        .menu-item.choosen {
            background-color: #9a8256;
        }
    }

    .menu-container.about-me {
        background-color: rgba(0, 0, 0, 0.75);
    }
}
</style>