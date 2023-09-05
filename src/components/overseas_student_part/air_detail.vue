<!--
 * @Date: 2023-09-05 15:12:35
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-05 20:27:53
 * @FilePath: /business-website/src/components/overseas_student_part/air_detail.vue
-->
<script lang="ts" setup>
import { toRefs } from 'vue';

// static
const prop = defineProps<{ airInfo: { title: string, company: string, statrCity: string, endCity: string, startDate: string, priceInfo: string, limiteInfo: string } }>();
const infoList: Array<{ title: string, key: string }> = [
    { title: '[航空公司]: ', key: 'company' },
    { title: '[出发城市]: ', key: 'startCity' },
    { title: '[到达城市]: ', key: 'endCity' },
    { title: '[出发日期]: ', key: 'startDate' },
    { title: '[机票价格]: ', key: 'priceInfo' },
    { title: '[限制条件]: ', key: 'limiteInfo' }
]

// respond
const { airInfo } = toRefs(prop);
</script>

<template>
    <div class="detail-container">
        <div class="read-info">
            <div class="read-title">
                <img src="/assets/overseas_student/earth.png" alt="">
                <h1>{{ airInfo.title }}</h1>
            </div>
            <ul class="airway-info">
                <li v-for="(item, index) in infoList" :key="index">
                    <div class="icon" :class="index === infoList.length - 1 ? 'del' : ''" />
                    <div class="info-content">
                        <label>{{ item.title }}</label>
                        <p>{{ (airInfo as any)[item.key] }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="write-info">
            <p class="write-title">我要预定</p>
            <div class="write-input">
                <textarea class="txt-content" name="" id="txt_content" placeholder="请填写出发城市、到达城市和出发日期以及乘机人信息" cols="30"
                    rows="10" />
                <ul class="txt-box">
                    <li>
                        <span>手机号码：</span>
                        <input type="text" id="txt_phone" maxlength="20" style="border-color: rgb(222, 23, 33);">
                    </li>
                    <li id="div_name">
                        <span>联系人：</span>
                        <input type="text" id="txt_name" maxlength="50">
                    </li>
                    <li id="div_email">
                        <span>邮箱：</span>
                        <input type="text" id="txt_email" maxlength="100">
                    </li>
                    <li>
                        <span class="span_pass">设置订单查询密码：</span>
                        <input type="text" id="txt_pass" maxlength="20">
                    </li>
                </ul>
            </div>
            <div class="btn">提交行程</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.read-info {
    margin-top: 60px;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 65px 50px 65px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;

    .read-title {
        display: flex;
        align-items: center;
        height: 100px;
        border-bottom: 1px dashed grey;
        color: #333;
        white-space: nowrap;


        img {
            height: 50px;
            width: auto;
        }

        h1 {
            font-weight: normal;
            margin-left: 20px;
        }
    }

    .airway-info {
        padding-top: 20px;
        margin: 0;
        list-style: none;

        li {
            line-height: 50px;
            padding-left: 30px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 18px;
            position: relative;
        }

        .icon {
            position: absolute;
            top: 22px;
            left: 10px;
            width: 9px;
            height: 9px;
            border-radius: 10px;
            background-color: #9a8256;
            margin-right: 20px;
        }

        .icon::before {
            content: '';
            position: absolute;
            left: 4px;
            // top: -50px;
            width: 0;
            height: 50px;
            border-left: 1px dashed #9a8256;
        }

        .icon.del::before {
            content: '';
            height: 0;
        }

        .info-content {
            display: flex;

            label {
                white-space: nowrap;
            }
        }
    }
}

.write-info {
    margin-top: 60px;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 65px 50px 65px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;

    .write-title {
        text-align: center;
        font-size: 30px;
        color: #333;
        padding-top: 20px;
    }

    .write-input {
        margin-top: 30px;
        color: #888;

        .txt-content {
            border: 1px solid #888;
            height: 185px;
            display: block;
            resize: none;
            width: 100%;
            padding: 15px;
            outline-color: #888;
        }

        .txt-box {
            display: flex;
            padding: 20px 0;
            list-style: none;
            // background-color: red;
            width: 100%;
            // justify-content: space-between;

            li {
                border: 1px solid #bfbfbf;
                border-radius: 4px;
                height: 46px;
                line-height: 46px;
                overflow: hidden;
                padding: 0 10px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 265px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                margin-left: 16px;

                input {
                    border: none;
                    outline: none;
                }
            }
        }
    }

    .btn {
        color: #fff;
        background-color: #9a8256;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        cursor: pointer;
        width: 20%;
        height: 50px;
        margin: auto;
        display: flex;
    }
}
</style>
