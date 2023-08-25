<!--
 * @Date: 2023-08-13 21:07:55
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-13 21:26:40
 * @FilePath: /business-website/src/components/link_me/index.vue
-->
<script setup lang="ts">
import LinkTitle from './link_title.vue';
import InfoContent from './info_content.vue';
</script>

<template>
    <div class="link-container">
        <LinkTitle />
        <InfoContent />
    </div>
</template>

<style lang="scss" scoped>
.link-container {
    margin-top: 3px;
    min-width: 900px;
}
</style>