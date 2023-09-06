<!--
 * @Date: 2023-08-11 20:37:20
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-09-06 15:22:19
 * @FilePath: /business-website/src/components/main_part/ticket_selector.vue
-->
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue';

// static
interface airportInfo {
    "country": string,
    "city": string,
    "Pinyin": string,
    "EngName": string,
    "type": string,
    "Portname": string,
    "Display": string
};
const { isInternational } = defineProps<{ isInternational: boolean }>();
const showData: Array<string> = ['搜索', '选择', '预定', '提交'];
const showButton: Array<{ title: string, key: number }> = [
    { title: '单程', key: 0 },
    { title: '往返', key: 1 },
    { title: '定制行程', key: 2 }
];
const vipKeys: Array<{ name: string, key: string, type: string }> = [
    { name: '您的电话号码:', key: 'phoneNumber', type: 'tel' },
    { name: '您的名字:', key: 'name', type: 'text' },
    { name: '您的邮箱:', key: 'mail', type: 'email' },
    { name: '设置订单查询密码:', key: 'password', type: 'text' },
];

// respond
const typeIndex = ref<number>(0);
const isInternal = ref<boolean>(true);
const isDirect = ref<boolean>(false);
const formInput = reactive([
    {
        startCity: '',
        endCity: '',
        startDate: '',
        endDate: '',
        more: '经济舱',
    },
    {
        descrption: '',
        [vipKeys[0].key]: '',
        [vipKeys[1].key]: '',
        [vipKeys[2].key]: '',
        [vipKeys[3].key]: ''
    }
]);

const airPortList = ref<Array<airportInfo>>([]);
const showList = reactive([false, false, false]);
const internalAirport = computed(() => {
    return airPortList.value.filter(item => { return item.type === '2' });
});
const internationalAirport = computed(() => {
    return airPortList.value.filter(item => { return item.type === '1'});
})


// method
const searchHandle = (targetList: Array<airportInfo>,  key: 'startCity' | 'endCity') => {
    return targetList.filter(item => {
        const value: string = formInput[0][key]!;
        if (!value) return true;
        for (const everykey of Object.keys(item)) {
            if (((item as any)[everykey] as string).indexOf(value) !== -1) return true;
        }
        return false;
    })
}
const changeTypeIndex = (target: number) => {
    typeIndex.value = target;
};

const urlFormate = (data: {}) => {
    let result: string = '';
    Object.keys(data).forEach(key => {
        if (key !== 'type') result += (' ' + (data as any)[key]);
    });
    return result;
}

const clearShowList = () => {
    showList.fill(false);
}

const startCityClickHandle = (data: airportInfo) => {
    formInput[0].startCity = urlFormate(data);
    showList[0] = false;
}

const endCityClickHandle = (data: airportInfo) => {
    formInput[0].endCity = urlFormate(data);
    showList[1] = false;
}

const moreClickHandle = (data: string) => {
    formInput[0].more = data;
    showList[3] = false;
}

const openHandle = (index: number) => {
    clearShowList();
    showList[index] = true;
}

const submit = () => {
    console.log(formInput)
    console.log(isDirect.value)
}

const loadData = async () => {
    airPortList.value = await (await fetch('/data/airport.json')).json();
}

onMounted(() => {
    loadData();
})
</script>

<template>
    <div class="book-ticket-container" @click="clearShowList">
        <div class="book-title">预定国际航班</div>
        <div class="book-tree">
            <ul>
                <li v-for="(item, index) in showData" :key="index" :class="index === 0 ?
                    'cur' : ''"><span>{{ item }}</span><i></i></li>
            </ul>
        </div>
        <p class="book-tip">选择出发到达的城市以及时间</p>
        <div class="type-button">
            <template v-for="item in showButton">
                <button class="button-item" :class="item.key === typeIndex ? 'cur' : ''" v-if="item.key < 1 || isInternational"
                @click="changeTypeIndex(item.key)">{{ item.title }}</button>
            </template>
        </div>
        <Transition name="change" mode="out-in">
            <div class="internal-choose" v-show="isInternational && typeIndex !== 2">
                <div class="choose-item" @click="isInternal = true" :class="isInternal ? 'cur' : ''">
                    <div class="dot" />
                    <span class="title">中国大陆始发</span>
                </div>
                <div class="choose-item" @click="isInternal = false" :class="isInternal ? '' : 'cur'">
                    <div class="dot" />
                    <span class="title">境外始发</span>
                </div>
            </div>
        </Transition>
        <div class="form-input">
            <TransitionGroup name="form">
                <div v-show="typeIndex !== 2" :key="1" class="form-item">
                    <div class="input-and-choose">
                        <div class="input-item">
                            <img src="/assets/main/ticket/icon_start.png" alt="">
                            <span>出发城市</span>
                            <i />
                            <input type="text" v-model="formInput[0].startCity" placeholder="请输入您的出发城市"
                                @focus="openHandle(0)" @click.stop="">
                        </div>
                        <Transition name="list">
                            <div class="airport-container" v-show="showList[0]">
                                <div class="list-item"
                                    v-for="(item, index) in searchHandle(((isInternal || !isInternational) ? internalAirport : internationalAirport), 'startCity')"
                                    :key="index" @click.stop="startCityClickHandle(item)">
                                    <template v-for="keyName in Object.keys(item)">
                                        <span v-if="keyName != 'type'">{{ (item as any)[keyName] }}</span>
                                    </template>
                                </div>
                            </div>
                        </Transition>
                    </div>
                    <div class="input-and-choose">
                        <div class="input-item">
                            <img src="/assets/main/ticket/icon_end.png" alt="">
                            <span>到达城市</span>
                            <i />
                            <input type="text" v-model="formInput[0].endCity" placeholder="请输入您的目的城市"
                                @focus="openHandle(1)" @click.stop="">
                        </div>
                        <Transition name="list">
                            <div class="airport-container" v-show="showList[1]">
                                <div class="list-item"
                                    v-for="(item, index) in searchHandle((isInternational? (isInternal? internationalAirport : internalAirport) : internalAirport), 'endCity')"
                                    :key="index" @click.stop="endCityClickHandle(item)">
                                    <template v-for="keyName in Object.keys(item)">
                                        <span v-if="keyName != 'type'">{{ (item as any)[keyName] }}</span>
                                    </template>
                                </div>
                            </div>
                        </Transition>
                    </div>
                    <div class="input-and-choose" :class="typeIndex ? 'back' : ''">
                        <div class="input-item">
                            <img src="/assets/main/ticket/icon_sdate.png" alt="">
                            <span>出发日期</span>
                            <i />
                            <input type="date" v-model="formInput[0].startDate">
                        </div>
                        <div class="input-item" v-show="typeIndex === 1">
                            <span>到达日期</span>
                            <i />
                            <input type="date" v-model="formInput[0].endDate">
                        </div>
                    </div>
                    <div class="input-and-choose" v-show="isInternational">
                        <div class="input-item">
                            <img src="/assets/main/ticket/icon_start.png" alt="">
                            <span>更多选择</span>
                            <i />
                            <input type="text" v-model="formInput[0].more" @focus="openHandle(2)" @click.stop="">
                        </div>
                        <Transition name="list">
                            <div class="airport-container" v-show="showList[2]">
                                <div class="list-item" v-for="(item, index) in ['经济舱', '商务舱', '头等舱']" :key="index"
                                    @click.stop="moreClickHandle(item)">
                                    <span>{{ item }}</span>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div v-show="typeIndex === 2" :key="2" class="other-item">
                    <p class="tips">亲！请写下您的行程，剩下的交给我们来办</p>
                    <textarea placeholder="如果可以，请尽量详细描述，以便我们能更好为您量身设计行程！" class="description-input" required
                        v-model="formInput[1].descrption" />
                    <div class="input-container">
                        <div v-for="item in vipKeys" :key="item.key" type="text" class="input-item">
                            <input :type="item.type" :placeholder="item.name" v-model="(formInput[1] as any)[item.key]">
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
        <button @click="submit" class="submit-button" :class="(typeIndex < 2)? 'common' : ''">{{ (typeIndex < 2)? '搜索航班' : '提交' }}</button>
        <div class="check-box" v-if="isInternational">
            <input type="checkbox" name="direct" v-model="isDirect">
            <label for="direct">仅查直飞</label>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.book-ticket-container {
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3%;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgb(137, 137, 137);
    width: 634px;
    min-height: 606px;
    padding: 20px 50px 30px 50px;
    box-sizing: border-box;

    .book-title {
        font-size: 32px;
        font-weight: 700;
        line-height: 44px;
        height: 50px;
    }

    .book-tree {
        position: relative;
        padding: 1px;
        border-bottom: 1px dashed;

        ul {
            position: absolute;
            right: 0;
            top: -36px;
            width: 196px;
            display: flex;
            justify-content: space-between;

            li {
                list-style: none;
                position: relative;
                margin-left: 15px;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                width: 30px;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                float: left;

                span {
                    width: 50px;
                    white-space: nowrap;
                    margin-bottom: 10px;
                    color: rgb(137, 137, 137);
                }

                i {
                    position: relative;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 1px solid rgb(137, 137, 137);
                }

                i::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: rgb(137, 137, 137);
                }
            }

            .cur i {
                border: 1px solid #9a8256;
            }

            .cur i::before {
                background-color: #9a8256;
            }
        }
    }

    .book-tip {
        font-size: 18px;
        font-weight: 700;
        line-height: 45px;
        height: 45px;
    }

    .type-button {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .button-item {
            width: 30%;
            font-size: 25px;
            letter-spacing: 0.3rem;
            color: white;
            background-color: rgb(137, 137, 137);
            border: none;
            border-radius: 5px;
            padding: 5px 0;
            position: relative;
        }

        .button-item:hover {
            cursor: pointer;
            background-color: #aaa;
        }

        .button-item.cur {
            background-color: #9a8256;
        }

        .button-item.cur::after {
            content: '';
            border-width: 10px 10px 0 10px;
            border-style: solid;
            border-color: #9a8256 transparent #9a8256 transparent;
            position: absolute;
            left: 75px;
            top: 44px;
        }
    }

    .internal-choose {
        display: flex;
        align-items: center;
        margin-top: 15px;

        .choose-item {
            margin-right: 50px;
            display: flex;
            align-items: center;
            cursor: pointer;

            .dot {
                width: 9px;
                height: 9px;
                border-radius: 50%;
                background-color: rgb(137, 137, 137);
                position: relative;
            }

            .dot::before {
                position: absolute;
                content: '';
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 1px solid rgb(137, 137, 137);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .title {
                margin-left: 5px;
            }
        }

        .choose-item.cur {
            .dot {
                background-color: #9a8256;
            }

            .dot::before {
                border: 1px solid #9a8256;
            }
        }

    }

    .form-item {
        margin-top: 15px;
        position: relative;

        .input-and-choose {
            width: 97.5%;
            border: 1px solid rgb(137, 137, 137);
            border-radius: 5px;
            margin-bottom: 5px;
            padding: 10px 5px;
            text-align: center;

            .input-item {
                display: flex;
                justify-content: start;
                align-items: center;

                img {
                    height: 50px;
                    width: auto;
                }

                span {
                    margin-left: 3px;
                    font-size: 20px;
                    font-weight: bold;
                }

                i {
                    padding: 15px 1px;
                    border-left: 2px solid rgb(137, 137, 137);
                    margin-left: 5px;
                }

                input {
                    height: 45px;
                    width: 65%;
                    border: none;
                    margin-left: 3px;
                    outline: none;
                }

                input.do {
                    width: 150px;
                }

                .back-date {
                    display: flex;
                    align-items: center;
                }
            }
        }

        .input-and-choose.back {
            display: flex;
            justify-content: space-between;

            .input-item {
                width: 50%;

                input {
                    width: 40%
                }
            }
        }

        .airport-container {
            border: 1px solid rgb(137, 137, 137);
            margin-top: 3px;
            max-height: 240px;
            overflow-y: auto;
            position: absolute;
            background-color: white;
            width: 99.5%;
            transform: translateX(-6.5px);
            z-index: 2;

            .list-item {
                margin-bottom: 10px;
                span{
                    margin-right: 5px;
                }
            }

            .list-item:hover {
                background-color: rgb(137, 137, 137);
                cursor: pointer;
            }
        }
    }

    .other-item {
        margin: 15px 0;

        .tips {
            color: rgb(137, 137, 137);
        }

        .description-input {
            margin-top: 5px;
            width: 100%;
            height: 100px;
            resize: none;
            border-radius: 5px;
            padding: 10px;
            outline-color: #9a8256;
        }

        .input-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 104%;

            .input-item {
                width: 49%;
                height: 75px;
                display: flex;
                align-items: center;
                justify-content: center;

                input {
                    height: 75%;
                    width: 100%;
                    border-radius: 10px;
                    border: 1px solid rgb(137, 137, 137);
                    outline-color: #9a8256;
                    padding: 0 5px;
                }
            }
        }
    }

    .submit-button {
        width: 40%;
        font-size: 30px;
        padding: 5px 0;
        border-radius: 5px;
        border: none;
        color: white;
        background-color: #9a8256;
        position: absolute;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%);
        cursor: pointer;
    }
    .submit-button.common {
        transform: none;
        left: 8%;
    }

    .check-box {
        position: absolute;
        left: 55%;
        display: flex;
        align-items: center;

        input[type=checkbox] {
            cursor: pointer;
            position: relative;
            width: 18px;
            height: 18px;
            font-size: 12px;
        }
 
        input[type=checkbox]::after {
            position: absolute;
            top: 0;
            color: #000;
            width: 18px;
            height: 18px;
            display: inline-block;
            visibility: visible;
            padding-left: 0px;
            text-align: center;
            content: ' ';
            border-radius: 3px
        }
 
        input[type=checkbox]:checked::after {
            content: "✓";
            color: #fff;
            font-size: 15px;
            font-weight: bold;
            background-color: #9a8256;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}

.change-enter-from {
    transform: translateX(500px);
}

.change-enter-active,
.change-leave-active {
    transition: 0.3s ease-in-out;
}

.change-enter-to,
.chenge-leave-from {
    transform: translateX(0);
}

.change-leave-to {
    transform: translateX(-500px);
}

.form-move,
.form-enter-active,
.form-leave-active {
    transition: all 0.3s ease;
}

.form-enter-from,
.form-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.form-leave-active {
    position: absolute;
    width: 546px;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}

.list-enter-active,
.list-leave-active {
    transition: 0.3s ease-in-out;
}
</style>