<script lang="ts" setup>
const infoList: Array<{ title: string, content: string }> = [
    { title: '机票咨询预定', content: '028-87685313（免长话费）' },
    { title: '同业代理(微信)', content: '见右侧 ->' },
    { title: '旅游服务热线', content: '19008223009' },
    { title: '电子邮件', content: 'eric.hu@aeroplus.mobi'},
    { title: '地址', content: '成都市高新区交子大道33号中国华商金融中心1栋14层1401室'}
]
</script>

<template>
    <div class="info-container">
        <div class="info-content">
            <h2>联系方式</h2>
            <div class="info-list">
                <div v-for="(item, index) in infoList" :key="index" class="info-item">
                    <span class="title">{{ item.title }}:</span>
                    <span class="content">{{ item.content }}</span>
                </div>
            </div>
        </div>
        <img src="/assets/link_me/chatwhole.jpg" alt="" class="wechat-img">
    </div>
</template>

<style lang="scss" scoped>
.info-container {
    width: 100%;
    height: 900px;
    background-color: white;
    position: relative;

    .info-content {
        background-color: white;
        position: absolute;
        padding: 75px 34px;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #ddd;
        top: 200px;
        left: 10px;
        line-height: 36px;

        h2 {
            font-size: 36px;
        }

        .info-list {
            margin-top: 20px;
            .title {
                font-size: 20px;
            }

            .content {
                font-size: 18px;
            }
        }
    }
    
    .wechat-img {
        position: absolute;
        z-index: 1;
        border: 3px solid rgb(137, 137, 137);
        width: 500px;
        height: auto;
        border-radius: 5px;
        right: 5%;
        opacity: 0.8;
        top: 50%;
        transform: translateY(-50%);
    }
}
.info-container::before {
    content: 'CONTACT US';
    font-size: 150px;
    font-weight: bold;
    color: rgb(234, 245, 255);
    position: absolute;
    top: 5%;
    left: 10%;
}
</style>