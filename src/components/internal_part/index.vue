<!--
 * @Date: 2023-08-13 15:31:27
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-14 17:31:59
 * @FilePath: /business-website/src/components/internal_part/index.vue
-->
<script lang="ts" setup>
import TicketSelector from '../main_part/ticket_selector.vue';
</script>

<template>
    <div class="internal-container">
        <div class="ticket-container box-item">
            <TicketSelector :is-international="false" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.internal-container {
    margin-top: 3px;
    min-width: 900px;

    .box-item {
        width: 100vw;
        height: 90vh;
        min-width: inherit;
        position: relative;
    }

    .ticket-container {
        background: url('/assets/internal/gn-banner.jpg') no-repeat center;
    }
}
</style>