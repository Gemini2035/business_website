<!--
 * @Date: 2023-08-13 16:27:19
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-01 14:54:16
 * @FilePath: /business-website/src/components/about_me/index.vue
-->
<script lang="ts" setup>
import DataShow from './data_show.vue';
import Company from './company.vue';
import EcoSystem from './eco_system.vue';
import Honer from './honer.vue';
</script>

<template>
    <div class="self-container">
        <DataShow />
        <Company />
        <EcoSystem />
        <Team />
        <Honer />
    </div>
</template>

<style lang="scss" scoped>
.self-container {
    margin-top: 3px;
    min-width: 900px;
}
</style>