<!--
 * @Date: 2023-09-01 23:28:47
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 23:35:45
 * @FilePath: /business-website/src/components/international_part/ticket_info.vue
-->
<script lang="ts" setup>
import { ref } from 'vue';
import HeaderPart from './header.vue';

const now = ref<number>(0);
</script>

<template>
    <div>
        <HeaderPart :index="now" />
        <div>111</div>
    </div>
</template>

<style lang="scss" scoped></style>