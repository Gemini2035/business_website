<!--
 * @Date: 2023-08-29 16:46:27
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-08-29 18:47:56
 * @FilePath: /business-website/src/components/overseas_student_part/air_info.vue
-->
<script lang="ts" setup>
const infoData: Array<any> = [
    {
        state: "北美洲",
        ticketList: [
            {
                title: "美国航空(AA)北京/上海飞往美国东海岸城市留学生单程票价13600元起",
                dateInfo: '2022-05-01 - 2022-09-15',
            },
            {
                title: "美国航空(AA)北京/上海飞往美国中西海岸城市留学生单程票价12500元起",
                dateInfo: '2022-05-01 - 2022-09-15',
            },
            {
                title: "美国达美航空(DL)北京/上海飞往美国中西海岸城市留学生单程票价9600元起",
                dateInfo: '2022-05-01 - 2022-09-15',
            },
            {
                title: "美国达美航空(DL)北京/上海飞往美国东海岸城市留学生单程票价12800元起",
                dateInfo: '2022-05-01 - 2022-09-15',
            },
            {
                title: "美国联合航空(UA)北京/上海飞往美国中西海岸城市留学生单程票价10900元起",
                dateInfo: '2022-05-01 - 2022-09-15',
            },
            {
                title: "美国联合航空(UA)北京/上海飞往美国东海岸城市留学生单程票价11800元起",
                dateInfo: '2022-05-01 - 2022-09-15',
            },
        ]
    },
    {
        state: '大洋洲',
        ticketList: [
            {
                title: '国航(CA)北京/上海飞往悉尼墨尔本留学生单程票价5960元起',
                dateInfo: '2022-07-01 - 2022-12-25'
            },
            {
                title: '南方航空（CZ)广州飞往奥克兰基督城留学生单程票价5900元起',
                dateInfo: '2022-07-01 - 2022-12-25'
            },
            {
                title: '南方航空（CZ)北京飞往澳洲留学生单程5890元起',
                dateInfo: '2022-07-01 - 2022-12-25'
            },
            {
                title: '国航（CA)北京飞往澳洲留学生单程票价3300元起',
                dateInfo: '2022-07-01 - 2022-12-25'
            }
        ]
    },
    {
        state: '欧洲',
        ticketList: [
            {
                title: '德国汉莎航空(LH)中国飞往欧洲留学生单程票价13500元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '法国航空(AF)中国飞往欧洲留学生单程票价13800元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '荷兰皇家航空(KL)中国飞往欧洲城市留学生单程票价13800元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '俄罗斯航空(SU)中国飞往欧洲城市留学生单程票价11300元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '国泰航空(CX)中国飞往欧洲留学生单程票价11800元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '中国国际航空(CA)中国飞往欧洲留学生单程票价13200元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '阿联酋航空(EK)中国飞往欧洲留学生单程票价12700元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            },
            {
                title: '阿提哈德航空(EY)中国飞往欧洲留学生单程票价12600元起',
                dateInfo: '2022-05-01 - 2022-09-30'
            }
        ]
    }
];
</script>

<template>
    <div class="info-container">
        <div v-for="(item, index) in infoData" :key="index" class="state-container">
            <h1 class="state-title">{{ item.state }}</h1>
            <ul class="ticket-list">
                <li v-for="(ticket, index) in item.ticketList" :key="index" class="ticket-item">
                    <p>{{ ticket.title }}</p>
                    <p>{{ ticket.dateInfo }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>.state-container {
    width: 80%;
    background-color: #fff;
    margin: 50px auto;
    padding: 20px;
    border-radius: 3px;

    .state-title {
        padding-bottom: 10px;
        border-bottom: 1px dashed;
        font-size: 36px;
    }

    .ticket-list {
        width: 90%;
        margin: 10px auto;

        .ticket-item {
            display: flex;
            justify-content: space-between;
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            position: relative;
            cursor: pointer;
        }

        .ticket-item::before {
            content: '.';
            color: #9a8256;
            font-size: 36px;
            position: absolute;
            left: 0;
            top: -20%;
        }
    }
}
</style>