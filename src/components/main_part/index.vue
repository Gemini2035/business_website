<!--
 * @Date: 2023-08-11 20:12:13
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-15 12:12:49
 * @FilePath: /business-website/src/components/main_part/index.vue
-->
<script setup lang="ts">
import TicketSelector from './ticket_selector.vue';
import Introduce from './introduce.vue';
import ImgHall from './img_hall.vue';
import Cooperator from './cooperator.vue';
import FloatContent from './float_content.vue';
</script>

<template>
    <div class="home-container">
        <div class="ticket-container box-item">
            <TicketSelector is-international />
        </div>
        <Introduce />
        <ImgHall />
        <Cooperator />
        <FloatContent />
    </div>
</template>

<style scoped lang="scss">
.home-container {
    margin-top: 3px;
    min-width: 900px;

    .box-item {
        width: 100vw;
        height: 90vh;
        min-width: inherit;
        position: relative;
    }
    .ticket-container {
        background: url('/assets/main/bgimg/banner.png') no-repeat center;
    }
}
</style>