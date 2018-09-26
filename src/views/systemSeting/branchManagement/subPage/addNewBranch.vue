<template>
    <div class="add-or-edit-branch">
        <div class="input-groups">
            <div class="item"
                 v-for="(item, key) in staticTextStart">
                <v-title-input-group
                    :type="item.type"
                    :title-text="item.titleText"
                    :input-width="item.inputWidth"
                    show-border="false"
                    bg-color="gray"
                    :title-text-width="item.titleWidth"
                    :disabled="item.disabled"
                    :required="item.required"
                    :data-arr="item.dataArr"
                    :input-value="item.currentValue"
                    v-model="item.currentValue"
                >
                </v-title-input-group>
            </div>
            
            <!--能耗类型-->
            <div class="item">
                <v-title-input-group
                    :type="energyhtype.type"
                    :title-text="energyhtype.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :data-arr="energyhtype.dataArr"
                    :input-value="energyhtype.currentValue"
                    v-model="energyhtype.currentValue"
                    @change="energyhtypeCb"
                >
                </v-title-input-group>
            </div>
            <!--所属设备类型-->
            <div class="item">
                <v-title-input-group
                    :type="devicetype.type"
                    :title-text="devicetype.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :data-arr="devicetype.dataArr"
                    :input-value="devicetype.currentValue"
                    v-model="devicetype.currentValue"
                    @change="devicetypeCb"
                >
                </v-title-input-group>
            </div>
            <!--户号-->
            <div class="item">
                <v-title-input-group
                    :type="accountno.type"
                    :title-text="accountno.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="accountno.disabled"
                    :input-value="accountno.currentValue"
                    v-model="accountno.currentValue"
                >
                </v-title-input-group>
            </div>
            <!--是否虚拟支路-->
            <div class="item">
                <v-title-input-group
                    :type="virtual.type"
                    :title-text="virtual.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="virtual.disabled"
                    :data-arr="virtual.dataArr"
                    :input-value="virtual.currentValue"
                    v-model="virtual.currentValue"
                    @change="virtualCb"
                >
                </v-title-input-group>
            </div>
            <!--计量设备类型-->
            <div class="item">
                <v-title-input-group
                    :type="measuretype.type"
                    :title-text="measuretype.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :data-arr="measuretype.dataArr"
                    :disabled="measuretype.disabled"
                    :input-value="measuretype.currentValue"
                    v-model="measuretype.currentValue"
                >
                </v-title-input-group>
            </div>
            <!--电表地址-->
            <div class="item">
                <v-title-input-group
                    :type="electricaddr.type"
                    :title-text="electricaddr.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="electricaddr.disabled"
                    :input-value="electricaddr.currentValue"
                    v-model="electricaddr.currentValue"
                >
                </v-title-input-group>
            </div>
            <!--是否总表-->
            <div class="item">
                <v-title-input-group
                    :type="totalgauges.type"
                    :title-text="totalgauges.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="totalgauges.disabled"
                    :data-arr="totalgauges.dataArr"
                    :input-value="totalgauges.currentValue"
                    v-model="totalgauges.currentValue"
                >
                </v-title-input-group>
            </div>
            <!--配电柜编号-->
            <div class="item">
                <v-title-input-group
                    :type="electricnumber.type"
                    :title-text="electricnumber.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="electricnumber.disabled"
                    :input-value="electricnumber.currentValue"
                    v-model="electricnumber.currentValue"
                >
                </v-title-input-group>
            </div>
            <!--配电回路编号-->
            <div class="item">
                <v-title-input-group
                    :type="loopnumber.type"
                    :title-text="loopnumber.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="loopnumber.disabled"
                    :input-value="loopnumber.currentValue"
                    v-model="loopnumber.currentValue"
                >
                </v-title-input-group>
            </div>
            <!--是否单个设备-->
            <div class="item">
                <v-title-input-group
                    :type="onedevice.type"
                    :title-text="onedevice.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="onedevice.disabled"
                    :data-arr="onedevice.dataArr"
                    :input-value="onedevice.currentValue"
                    v-model="onedevice.currentValue"
                    @change="onedeviceCb"
                >
                </v-title-input-group>
            </div>
            <!--对应设备编号-->
            <div class="item">
                <v-title-input-group
                    :type="devicenumber.type"
                    :title-text="devicenumber.titleText"
                    show-border="false"
                    bg-color="gray"
                    title-text-width="105px"
                    :disabled="devicenumber.disabled"
                    :input-value="devicenumber.currentValue"
                    v-model="devicenumber.currentValue"
                >
                </v-title-input-group>
            </div>
    
            <div class="item"
                 v-for="(item, key) in staticTextLast">
                <v-title-input-group
                    :type="item.type"
                    :title-text="item.titleText"
                    :input-width="item.inputWidth"
                    show-border="false"
                    bg-color="gray"
                    :title-text-width="item.titleWidth"
                    :disabled="item.disabled"
                    :required="item.required"
                    :data-arr="item.dataArr"
                    :input-value="item.currentValue"
                    v-model="item.currentValue"
                    @change=""
                >
                </v-title-input-group>
            </div>
        </div>
        
        <div class="branch-table-list">
            <v-table-data-list
                :v-table-data="tableData"
            ></v-table-data-list>
        </div>
        
        <div class="foot-text" v-if="!isAddNew">
            <p class="ft-item inline_block">
                创建用户
                <span class="item-val">
                    {{ itemData.creater }}
                </span>
            </p>
            <p class="ft-item inline_block">
                创建时间
                <span class="item-val">
                    {{ itemData.createat }}
                </span>
            </p>
        </div>
        
        <div class="footer">
            <div class="save">
                <v-button
                    type="blue"
                    text=" 保 存 "
                    width="90px"
                    @click="saveSubmit"
                ></v-button>
            </div>
            <v-button
                type="white"
                text=" 取 消 "
                width="90px"
                @click="cancel"
            ></v-button>
        </div>
    </div>
</template>

<script>
    import vTitleInputGroup from "../../../../components/formComponents/input/titleInputGroup.vue";
    import vTableDataList from "../../../../components/formComponents/tableDataList.vue";
    import vButton from "../../../../components/formComponents/input/button.vue";
    import GlobalUtil from "../../../../utils/globalUtil";
    import {EnergyTypeEnumBase} from "../../../../../static/enum/energyTypeCommonEnum";
    
    export default {
        name: "vAddNewBranch",
        components:{
            vTitleInputGroup,
            vTableDataList,
            vButton
        },
        props: ['itemData', "isAdd"],
        data(){
            return {
                isAddNew: true,
                staticTextStart: {
                    pmName: {
                        currentValue: "",
                        titleText: "项目名称",
                        type: "select",
                        required: true,
                        titleWidth: "105px",
                        dataArr:[
                            {
                                label: '南山智园C区',
                                value: 0
                            },
                            {
                                label: '科技园中国储能大厦',
                                value: 2
                            },
                            {
                                label: '南山智园B区',
                                value: 1
                            }
                        ]
                    },
                    buid: {
                        currentValue: "",  //id  number
                        titleText: "所属楼栋",
                        type: "select",
                        required: true,
                        titleWidth: "105px",
                        dataArr: [
                            {
                                label: "C1",
                                value: 31
                            },
                            {
                                label: "C2",
                                value: 32
                            },
                            {
                                label: "C3",
                                value: 33
                            }
                        ]
                    },
                    name: {
                        currentValue: "",
                        titleText: "支路名称",
                        type: "text",
                        required: true,
                        titleWidth: "105px",
                    },
                    pid: {
                        currentValue: "",
                        titleText: "所属支路",
                        type: "select",
                        titleWidth: "105px",
                        dataArr: [
                            {
                                label: "南山智园干线A1",
                                value: 11
                            },
                            {
                                label: "南山智园干线B1",
                                value: 21
                            },
                            {
                                label: "南山智园干线C2",
                                value: 32
                            }
                        ]
                    },
                    order: {
                        currentValue: "",
                        titleText: "支路序号",
                        type: "text",
                        titleWidth: "105px",
                    }
                },
                energyhtype: {
                    currentValue: "",
                    titleText: "能耗类型",
                    type: "select",
                    dataArr: GlobalUtil.deepCopy(EnergyTypeEnumBase)
                },
                //所属设备类型
                devicetype: {
                    currentValue: "",
                    titleText: "所属设备类型",
                    type: "select",
                    disabled: true,
                    dataArr:[
                        {
                            label: "直流发电机",
                            value: "1"
                        },
                        {
                            label: "交流发电机",
                            value: "0"
                        }
                    ]
                },
                //户号
                accountno: {
                    currentValue: "",
                    titleText: "户号",
                    type: "text",
                    disabled: true
                },
                //是否虚拟支路
                virtual: {
                    currentValue: "1",
                    titleText: "是否虚拟支路",
                    type: "radio",
                    dataArr: [
                        {
                            label: "是",
                            value: 0,
                            default: true,
                        },
                        {
                            label: "否",
                            value: 1
                        }
                    ]
                },
                //计量设备类型
                measuretype: {
                    currentValue: "",
                    titleText: "计量设备类型",
                    disabled: true,
                    type: "select",
                    dataArr: [
                        {
                            label: "I",
                            value: 1
                        },
                        {
                            label: "II",
                            value: 2
                        },
                        {
                            label: "III",
                            value: 3
                        },
                        {
                            label: "IV",
                            value: 4
                        }
                    ]
                },
                //电表地址
                electricaddr: {
                    currentValue: "",
                    titleText: "电表地址",
                    type: "text",
                    disabled: true
                },
                //是否总表
                totalgauges: {
                    currentValue: "",
                    titleText: "是否总表",
                    type: "radio",
                    disabled: true,
                    dataArr: [
                        {
                            label: "是",
                            value: 0,
                        },
                        {
                            label: "否",
                            value: 1,
                            default: true
                        }
                    ]
                },
                //配电柜编号
                electricnumber:  {
                    currentValue: "",
                    titleText: "配电柜编号",
                    type: "text"
                },
                //配电回路编号
                loopnumber:  {
                    currentValue: "",
                    titleText: "配电回路编号",
                    type: "text"
                },
                //是否单个设备
                onedevice: {
                    currentValue: "",
                    titleText: "是否单个设备",
                    type: "select",
                    dataArr: [
                        {
                            label: "设备A001",
                            value: 1
                        },
                        {
                            label: "设备C33",
                            value: 2
                        },
                        {
                            label: "设备D69",
                            value: 3
                        }
                    ]
                },
                //对应设备编号
                devicenumber: {
                    field: "",
                    currentValue: "",
                    titleText: "对应设备编号",
                    disabled: true,
                    type: "text"
                },
                staticTextLast: {
                    electrictype: {
                        currentValue: "",
                        titleText: "配电元件类型",
                        type: "select",
                        titleWidth: "105px",
                        dataArr: [
                            {
                                label: "低压电器",
                                value: 1
                            },
                            {
                                label: "低压配电电器",
                                value: 2
                            },
                            {
                                label: "低压主令电器",
                                value: 3
                            },
                            {
                                label: "低压控制电器",
                                value: 4
                            },
                            {
                                label: "低压保护电器",
                                value: 5
                            },
                            {
                                label: "低压执行电器",
                                value: 6
                            }
                        ]
                    },
                    communicationway: {
                        currentValue: "",
                        titleText: "通信方式",
                        type: "select",
                        titleWidth: "105px",
                        dataArr: [
                            {
                                label: "光纤专网",
                                value: 1
                            },
                            {
                                label: "配电线载波",
                                value: 2
                            },
                            {
                                label: "无线专网",
                                value: 3
                            },
                            {
                                label: "无线公网",
                                value: 4
                            }
                        ]
                    },
                    reserve: {
                        currentValue: "",
                        titleText: "是否备用",
                        type: "radio",
                        titleWidth: "105px",
                        dataArr: [
                            {
                                label: "是",
                                value: 0
                            },
                            {
                                label: "否",
                                value: 1,
                                default: true
                            }
                        ]
                    },
                    status: {
                        currentValue: "",
                        titleText: "支路状态",
                        type: "radio",
                        titleWidth: "105px",
                        dataArr: [
                            {
                                label: "启用",
                                value: 0
                            },
                            {
                                label: "禁用",
                                value: 1,
                                default: true
                            }
                        ]
                    },
                },
                //表格
                tableData: {
                    tHead: [
                        {
                            text: '采集命令',
                            prop: "pmName"
                        }, {
                            text: '数值类型',
                            prop: "electricaddr"
                        }, {
                            text: '额定功率',
                            prop: "parentName"
                        }, {
                            text: '单位',
                            prop: "status"
                        }, {
                            text: '变化',
                            prop: "updateat"
                        }, {
                            text: '上限',
                            prop: "creater"
                        }, {
                            text: '下限',
                            prop: "creater"
                        }, {
                            text: '支路表达式',
                            prop: "creater"
                        }
                    ],
                    data: [],
                    height: 160,
                    total: 0
                },
                //新增-参数，编辑（项目名称、电表地址不可变）
                submitParams: {
                    //建筑ID       number
                    buid: null,
                    //是否备用      number
                    reserve: null,
                    //配电柜编号    string
                    electricnumber: "",
                    //对应设备编号   string
                    devicenumber: "",
                    //是否单个设备   number
                    onedevice: null,
                    //项目id        bumber
                    pmid: null,
                    //通讯方式       number
                    communicationway: null,
                    //序号           number
                    order: null,
                    //是否总表        number
                    totalgauges: null,
                    //能耗类型        string
                    energyhtype: null,
                    //是否虚拟支路     number
                    virtual: null,
                    //上级id(所属支路) number
                    pid: null,
                    //所属设备类型     number
                    devicetype: null,
                    //电表地址         sring
                    electricaddr: "",
                    //计量设备类型     number
                    measuretype: null,
                    //配电回路编号     sring
                    loopnumber: "",
                    //配电元件类型     string
                    electrictype: null,
                    //户号            string
                    accountno: "",
                    //支路名称         string
                    name: "",
                    //支路描述         string
                    describe: "",
                    //状态             number
                    status: null,
                    //指令             string 未见用处
                    gathers: ""
                }
            }
        },
        created(){
    
            if(!this.itemData) return;
            
            if(this.isAdd){
                //新增
                this.isAddNew = true;
            }else{
                //编辑
                this.isAddNew = false;
                this.editInitData(this.itemData);
            }
        },
        methods: {
            //编辑初始化参数，编辑--项目名称、电表地址不可改
            editInitData(itemData){
                this.staticTextStart.pmName.disabled = true;
                this.electricaddr.disabled = true;
                console.log("编辑");
                console.log(itemData);
                this.editInitValue(itemData)
            },
            editInitValue(data){
                this.staticTextStart.buid.currentValue = data.build;
                this.staticTextLast.reserve.currentValue = data.reserve;
                this.electricnumber.currentValue = data.electricnumber;
                this.devicenumber.currentValue = data.devicenumber;
                this.onedevice.currentValue = data.onedevice;
                this.staticTextStart.pmName.currentValue = data.pmid;
                this.staticTextLast.communicationway.currentValue = data.communicationway;
                this.staticTextStart.order.currentValue = data.order;
                this.totalgauges.currentValue = data.totalgauges;
                this.energyhtype.currentValue = data.energyhtype;
                this.virtual.currentValue = data.virtual;
                this.staticTextStart.pid.currentValue = data.pid;
                this.devicetype.currentValue = data.devicetype;
                this.electricaddr.currentValue = data.electricaddr;
                this.measuretype.currentValue = data.measuretype;
                this.loopnumber.currentValue = data.loopnumber;
                this.staticTextLast.electrictype.currentValue = data.electrictype;
                this.accountno.currentValue = data.accountno;
                this.staticTextStart.name.currentValue = data.name;
                this.staticTextLast.status.currentValue = data.status;
            },
            editInitDisabledStatus(){
                if(this.virtual.currentValue){
                    this.devicetype.disabled = true;
                    this.electricaddr.disabled = true;
                    this.totalgauges.disabled = true;
                }
                
                if(this.onedevice.currentValue){
                    this.devicenumber.disabled = true;
                }
                
            },
            saveSubmit(){
                this.getParams();
                //http
                console.log(this.submitParams);
            },
            getParams(){
                this.submitParams.buid = this.staticTextStart.buid.currentValue;
                this.submitParams.reserve = this.staticTextLast.reserve.currentValue;
                this.submitParams.electricnumber = this.electricnumber.currentValue;
                this.submitParams.devicenumber = this.devicenumber.currentValue;
                this.submitParams.onedevice = this.onedevice.currentValue;
                this.submitParams.pmid = this.staticTextStart.pmName.currentValue;
                this.submitParams.communicationway = this.staticTextLast.communicationway.currentValue;
                this.submitParams.order = this.staticTextStart.order.currentValue;
                this.submitParams.totalgauges = this.totalgauges.currentValue;
                this.submitParams.energyhtype = this.energyhtype.currentValue;
                this.submitParams.virtual = this.virtual.currentValue;
                this.submitParams.pid = this.staticTextStart.pid.currentValue;
                this.submitParams.devicetype = this.devicetype.currentValue;
                this.submitParams.electricaddr = this.electricaddr.currentValue;
                this.submitParams.measuretype = this.measuretype.currentValue;
                this.submitParams.loopnumber = this.loopnumber.currentValue;
                this.submitParams.electrictype = this.staticTextLast.electrictype.currentValue;
                this.submitParams.accountno = this.accountno.currentValue;
                this.submitParams.name = this.staticTextStart.name.currentValue;
                this.submitParams.status = this.staticTextLast.status.currentValue;
            },
            cancel(){
                //关闭弹窗
                this.$emit('isHide')
            },
            energyhtypeCb(res){
                console.log("能耗类型", res);
            },
            devicetypeCb(res){
                console.log("所属设备类型", res);
                if(res){
                    //启用 户号
                    this.accountno.disabled = false;
                }else{
                    // 禁用
                    this.accountno.disabled = true;
                }
            },
            virtualCb(res){
                //console.log("是否虚拟支路", res);
                if(res.value){ //1  否
                    // 计量设备类型、电表地址（新增）、是否总表 变为可编辑
                    this.measuretype.disabled = false;
                    this.isAdd && (this.electricaddr.disabled = false);
                    this.totalgauges.disabled = false;
                }else{
                    //不可编辑
                    this.devicetype.disabled = true;
                    this.electricaddr.disabled = true;
                    this.totalgauges.disabled = true;
                }
            },
            onedeviceCb(value){
                console.log("是否单个设备", value);
                if(value){
                    //启用 对应设备编号
                    this.devicenumber.disabled = false;
                }else{
                    //禁用
                    this.devicenumber.disabled = true;
                }
            }
        },
        watch: {
        
        },
        updated(){
        
        },
        beforeDestroy(){
        
        }
    }
</script>

<style scoped lang="scss">
    
    .add-or-edit-branch{
        padding:20px;
        box-sizing: border-box;
        
        .input-groups{
            overflow: hidden;
        }
        
        .item{
            float: left;
            width: 256px;
            margin: 10px 10px 10px 0;
        }
        
        .branch-table-list{
            margin-top: 20px;
        }
        
        .foot-text{
            padding:20px 0;
            
            .ft-item{
                padding-right: 60px;
                
                .item-val{
                    padding-left: 10px;
                }
            }
        }
        
        .footer{
            text-align: center;
            .save{
                display: inline-block;
               margin-right: 30px;
            }
        }
    }
</style>
