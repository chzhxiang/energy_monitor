<template>
    <div class="alexpression">
        <div class="clear">
            <div style="width: 320px;display: inline-block;float: left">
                {{inTabsIndex}}
                <el-tabs v-model="tabsName" type="card" @tab-click="handleClick">
                    <el-tab-pane v-for="(tab,i) in this.inTabsData" :key="i"
                                 :label="tab.name"
                                 :name="tab.name">
                        <ul class="transferUl">
                            <li v-for="(jtem,j) in tab.resList" :class="{act:inTabsIndex[i] == j}"
                                @click="addExpression(jtem,j,i)">
                                <span>{{jtem.name}}</span>
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div style="width:100px;display: inline-block;float: left" class="operator">
                <p class="operationalCharacterTit">运算符</p>
                <div class="operationalCharacter ">
                    <div v-for="ope in operatorCfg" :class="{numberSty:ope.type =='inputNumber' ? true:false}" @click="operatorClick(ope.type)">
                        {{ope.label}}
                    </div>
                </div>
            </div>
            <div style="width: 320px;display: inline-block;float: left">
                <p class="transdataTit">支路表达式</p>
                <div class="transdataBox">
                    <ul class="transferUl">
                        <li v-for="(item,key) in resule" :class="{act:resuleId == key}">
                            <div style="display: inline-block;min-width: 100px" @click="liClick(key,'resuleId')">
                                <span v-if="item.type=='code'">{{item.name}}</span>
                                <span v-else-if="item.type=='number'">{{item.value}}</span>
                                <el-input-number v-else-if="item.type=='inputNumber'"
                                                 :controls="false"
                                                 v-model="item.value"
                                                 @blur="inputBlur(key)">
                                </el-input-number>
                                <span v-else>{{item.type || '空'}}</span>
                            </div>
                            <div class="optionbt" style="display: inline-block;float: right">
                                <button @click="expressionBtn(key,'up')"><i class="el-icon-sort-up"></i></button>
                                <button @click="expressionBtn(key,'down')"><i class="el-icon-sort-down"></i></button>
                                <button @click="expressionBtn(key,'del')"><i class="el-icon-close"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tabsData: {
                type: Array,
                default: function () {
                    return [
                        {
                            name: '支路选择',
                            resList: [
                                {name: '[A000001]变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5},
                                {name: '[A000001]变压器变压器变压器变压器变压器变压器变压器变压器变压器变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5},
                                {name: '[A000001]变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5},
                                {name: '[A000001]变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5},
                                {name: '[A000001]变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5},
                                {name: '[A000001]变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5},
                                {name: '[A000001]变压器', id: 1},
                                {name: '[B000002]水泵', id: 2},
                                {name: '[C000003]电表', id: 3},
                                {name: '[D000004]照明', id: 4},
                                {name: '[E000005]空调', id: 5}
                            ]
                        },
                        {
                            name: '分项选择',
                            resList: [
                                {name: '<A01>分项1', id: 1},
                                {name: '<B01>分项2', id: 2},
                                {name: '<D01>分项3', id: 3},
                                {name: '<E01>分项4', id: 4},
                                {name: '<A02>分项5', id: 5}
                            ]
                        }
                    ]
                }
            },
        },
        mounted() {
            for (let key in this.inTabsData) {
                if (key == 0) {
                    this.tabsName = this.inTabsData[key].name;
                }
                this.inTabsIndex[key] = 0;
            }
        },
        data() {
            return {
                tabsName: '',
                inTabsData: this.tabsData,
                inTabsIndex: {},
                operatorCfg: [
                    {type: '+', label: '+'},
                    {type: '-', label: '-'},
                    {type: '*', label: '*'},
                    {type: '/', label: '/'},
                    {type: '(', label: '('},
                    {type: ')', label: ')'},
                    {type: 'inputNumber', label: '数 字'}
                ],
                resuleId: -1,
                resule: [
                    {type: '('},
                    {type: 'code', name: 'A001|电', value: '1'},
                    {type: '+'},
                    {type: 'code', name: 'A002|电', value: '2'},
                    {type: ')'},
                    {type: '/'},
                    {type: 'number', value: '3'},
                ],
            };
        },
        methods: {
            addAction() {
                const [...result] = this.resule;
                //TODO 做公式判断
                console.log(result);
                this.$emit('retuenData', result);
            },
            isHide() {
                this.$emit('isHide', false);
            },
            addExpression(item, i, index) {
                const obj = {type: 'code', name: item.name, value: item.id};
                if (this.resuleId >= 0) {
                    this.resule.splice(this.resuleId, 1, obj);
                } else {
                    this.resule.push(obj)
                }
                this.inTabsIndex[index] = i;
            },
            operatorClick(type) {
                const obj = {type: type};
                if (type == 'inputNumber') {
                    obj.value = !this.resule[this.resuleId] ? 0 : this.resule[this.resuleId].value;
                }
                if (this.resuleId >= 0) {
                    this.resule.splice(this.resuleId, 1, obj);
                } else {
                    this.resule.push(obj)
                }
            },
            liClick(id, name) {
                if (id == this[name]) {
                    this[name] = -1;
                } else {
                    this[name] = id;
                }
            },
            expressionBtn(key, type) {
                if (type == 'del') {
                    this.resule.splice(key, 1)
                } else if (type == 'up') {
                    this.resule.splice(key, 0, {type: '空'})
                } else if (type == 'down') {
                    this.resule.splice(key + 1, 0, {type: '空'})
                }
            },
            inputBlur(key) {
                this.resule[key].type = 'number';
            }
        }
    };
</script>
<style scoped>
    .transferUl li {
        cursor: pointer;
    }

    .act {
        background-color: #188FBF;
        color: #fff;
    }

    .operator div {
        cursor: pointer;
    }

    div, li {
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
</style>
<style>
    .alexpression .el-tabs__item{
        height: 36px;
        line-height: 36px;
    }
    .alexpression .el-tabs__content{
        overflow: auto;
        height: 360px;
        box-sizing: border-box;
        padding-top: 15px;
        border: 1px #e4e7ed solid;
        border-top: none;
        background: rgba(247,251,252,1);
    }
    .alexpression .el-tabs__content ul.transferUl li span{
        white-space:nowrap;
        padding-left: 10px;
    }
    .alexpression .el-tabs__header{
        margin: 0;
    }
    .alexpression .el-tabs__item.is-active{
        background: rgba(247,251,252,1);
        color: #188FBF;
        border-bottom: 0
    }
    .alexpression .operationalCharacter{
        height: 360px;
        margin: 0 10px;
        border: 1px rgba(228,231,239,1) solid;
    }
    .alexpression .operationalCharacter div{
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
    }
    .alexpression .operationalCharacterTit{
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-weight: bold;
        color: #188FBF;
    }
    .alexpression .operationalCharacter .numberSty{
        border: 1px rgba(195,201,213,1) solid;
        color: #3A3A3A;
        border-radius: 15px;
        font-size: 14px;
        margin: 10px 10px 0 10px;
    }
    .alexpression .transdataTit{
        height: 36px;
        line-height: 36px;
        padding-left: 10px;
        font-weight: bold;
        color: #188FBF;
    }
    .alexpression .transdataBox{
        border: 1px rgba(228,231,239,1) solid;
        height: 360px;
        background: #F7FBFC;
    }
    .alexpression .transdataBox ul li{
        padding: 0 10px;
        border-bottom: 1px rgba(210,210,210,0.3) solid;
    }
    .alexpression .transdataBox ul li .optionbt button{
        text-align: center;
        border: none;
        color: #C3C9D5;
        cursor: pointer;
        font-size: 14px;
        outline: none;
        font-weight: bold;
        background:transparent;
    }
    .alexpression .transdataBox ul li .el-input__inner{
        height: 100%;
        line-height: inherit;
    }
</style>
