<!--
 * @Date: 2023-08-13 15:10:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 23:30:24
 * @FilePath: /business-website/src/components/international_part/index.vue
-->
<script lang="ts" setup>
import TicketSelector from '../main_part/ticket_selector.vue';
import TicketInfo from './ticket_info.vue';
</script>

<template>
    <div class="international-container">
        <div class="ticket-container box-item">
            <TicketSelector is-international />
        </div>
        <TicketInfo />    
    </div>
</template>

<style lang="scss" scoped>
.international-container {
    margin-top: 3px;
    min-width: 900px;

    .box-item {
        width: 100vw;
        height: 90vh;
        min-width: inherit;
        position: relative;
    }
    .ticket-container {
        background: url('/assets/international/gj-banner.jpg') no-repeat center;
    }
}
</style>