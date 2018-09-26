<template>
    <div class="analysis position_r">

        <div class="u-layout-title">节能量分析</div>

        <div class="analysis_content">
            <div class="analysis_content_condition">
                <!--电水气-->
                <div class="item energy_type text-center fl">
                    <v-tabs-btn
                        :options="energyType"
                        @checked="energyTypeChecked"
                    ></v-tabs-btn>
                </div>

                <!--时间粒度-->
                <div class="item time_granularity fl">
                    <span class="fl">时间粒度：</span>
                    <div class="granularity_tabs fl">
                        <v-tabs-btn
                            :options="timeGranularity"
                            @checked="timeGranularityChecked"
                        ></v-tabs-btn>
                    </div>
                </div>

                <!--时间筛选-->
                <div class="fl">
                    <v-date-picker
                        :v-date-type="dateOptions.dateType"
                        :v-start-date-value="dateOptions.startDateValue"
                        :v-end-date-value="dateOptions.endDateValue"
                        @changed="dateChanged">
                    </v-date-picker>
                </div>

                <!--查询-->
                <div class="item query-submit fl" @click="energySearch">
                    <i class="el-icon-search"></i> 查 询
                </div>
            </div>
            <div class="analysis_content_charts">
                <div class="charts">
                    <v-charts :option="energyEchartOption" class="echarts-container"></v-charts>
                </div>
            </div>
            <div class="analysis_table">
                <div class="analysis_table_title ub">
                    <div class="blue_box fl"></div>
                    <span>{{ currentEnergyType }}节能明细表</span>
                </div>
                <div class="analysis_table_content">
                    <v-table></v-table>
                </div>
            </div>
        </div>

        <!-- button setting  -->
        <el-dialog
                custom-class="baseline-list-set"
                :visible.sync="dialogVisible"
                width="956px"
                :before-close="handleClose">

                <div class="title-text">节能量分析基准设置</div>

                <div class="dialog_content">
                    <div class="dialog_content_top">
                        <div class="item energy_type fl">

                            <v-tabs-btn
                                :options="BaselineListEnergyType"
                                @checked="BaselineListEnergyTypeChecked"
                            ></v-tabs-btn>

                        </div>

                        <div class="item dialog-select fl">
                            <el-select v-model="value4" clearable placeholder="请选择" size='mini' width="100px">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="item reference-range fl">
                            <span class="fl">基准范围：</span>
                            <div class="reference-range-select fl">
                                <el-select v-model="standardvalue" clearable placeholder="请选择" size='mini' width="100px">
                                    <el-option v-for="item in standardoptions" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <!--时间筛选-->
                        <div class="item date-check fl">

                            <span class="fl">时间设置：</span>

                            <div class="fl date-item start-date">
                                <el-date-picker :type="dialogDateype"
                                                v-model="startDateValue"
                                                placeholder="开始日期"
                                                size="small">
                                </el-date-picker>
                            </div>
                            <div class="fl space">至</div>
                            <div class="fl date-item end-date">
                                <el-date-picker :type="dialogDateype"
                                                v-model="endDateValue"
                                                placeholder="结束日期"
                                                size="small">
                                </el-date-picker>
                            </div>
                        </div>

                        <div
                            class="item energy-query el-icon-search fl">
                            查询
                        </div>
                    </div>
                    <div class="reference-table">
                        <div class="table">
                            <el-table :data="tableData" style="width: 100%;text-align: center;" stripe :header-cell-style="{background:'#f1f1f1',textAlign:'center'}" @cell-dblclick="editInput">
                                <el-table-column v-for="(item,index) in tableKey" :key="index" :prop="item.name" :label="item.value">
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                </div>

                <span slot="footer"
                      class="dialog-footer">
                    <el-button
                        class="form-submit save"
                        type="primary"
                        @click="dialogVisible = false"
                        round
                        style=" background: #1881BF;">保 存</el-button>
                    <el-button
                        @click="handleClose"
                        round
                        class="form-submit cancel"
                    >取 消</el-button>
                </span>
            </el-dialog>
    </div>
</template>

<script>
import vCharts from '../../components/common/charts.vue';
import vTable from '../../components/common/table.vue';
import vTabsBtn from "../../components/formComponents/tabsBtn.vue";
import vDatePicker from "../../components/formComponents/datePicker.vue";

import {EnergyTypeEnum, StandardOptionsEnums, TimeGranularityEnums, EnergyEchartsOptions} from "./energyEnum";
import {CostForEnergyServices} from "../../services/costForEnergyService";
import GlobalUtil from "../../utils/globalUtil";

import BaseConfig from "../../baseConfig";

export default {
    components: {
        vCharts,
        vTable,
        vTabsBtn,
        vDatePicker
    },
    data() {
        return {
            //EnergyType,深拷贝解决引用类型状态污染问题
            energyType: GlobalUtil.deepCopy(EnergyTypeEnum),
            currentEnergyType: "",

            BaselineListEnergyType: GlobalUtil.deepCopy(EnergyTypeEnum),
            timeGranularity: GlobalUtil.deepCopy(TimeGranularityEnums),
            //created 由初始默认时间粒度类型决定
            //dateType: "date",
            dateTypeId: "",
            startDateValue: '',
            endDateValue: '',
            dialogDateype: "month",
            dateOptions: {
                dateType: "month",
                startDateValue: '',
                endDateValue: '',
            },
            //节能类型查询参数
            energySearchParams: {
                pageNum: 0,
                pageSize: 15,
                energyType: 0,
                timeUnit: 1,
                startTime: "",
                endTime: "",
            },
            //节能基准设置参数
            baselineListParams:{
                energyType: 0,
                startTime: "2018-1-1 00:00:00",
                endTime: "2018-9-30 23:59:59",
            },

            dialogVisible: false,
            actives: 1,
            timeshows: 1,
            energy_actives: 1, //节能分析弹窗
            standardvalue: '选项1', //基准范围
            startvalue: '', //开始时间
            endvalue: '', //结束时间
            standardoptions: GlobalUtil.deepCopy(StandardOptionsEnums),
            energyEchartOption:  GlobalUtil.deepCopy(EnergyEchartsOptions),
            options: [
                {
                value: '选项1',
                label: '冷热源'
            }, {
                value: '选项2',
                label: '热冷源'
            }],
            value4: '选项1',
            tableData: [
                {
                id: '12987122',
                name: '基准（kWh）',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '温度（℃）',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }],
            tableKey: [
                {
                    name: 'name',
                    value: '名称',
                },
                {
                    name: 'id',
                    value: '1月',
                },
                {
                    name: 'amount1',
                    value: '2月',
                },
                {
                    name: 'amount2',
                    value: '3月',
                },
                {
                    name: 'amount3',
                    value: '4月',
                },
                {
                    name: 'amount1',
                    value: '5月',
                },
                {
                    name: 'amount2',
                    value: '6月',
                },
                {
                    name: 'amount3',
                    value: '7月',
                },
                {
                    name: 'id',
                    value: '8月',
                }
            ]
        }
    },
    inject: ['breadNavRightSlot'],

    created(){
        console.log("*********")
        console.log(BaseConfig.PAGE_SIZE)
        //初始获取时间粒度类型
        this.timeGranularityInit(this.timeGranularity.dataArr);
        //初始化日期
        this.initDateValue();
        //初始获取节能量类型
        this.energyTypeInit(this.energyType.dataArr);
        //配置breadnav 右侧slot按钮
        this.setBreadNavRightSlot();
        //初始请求数据
        this.energySearch();
    },
    beforeDestroy(){
        this.clearBreadNavRightSlot();
    },

    methods: {
        //初始化时间默认值
        initDateValue(){
           //根据时间粒度类型初始化时间值
           if(this.dateTypeId === 2){
               //日  yyyy-mm-dd
               this.startDateValue = GlobalUtil.getBerforeWeekDate() + " 00:00:00";
               //yyyy-mm-dd 23:59:59
               this.endDateValue = GlobalUtil.getTodayEndDate();

           } else if(this.dateTypeId === 4){
               //月 yyyy-mm
               this.startDateValue = GlobalUtil.getCurrentYearAndFirstMonth();
               this.endDateValue = GlobalUtil.getCurrentYearAndLastMonth();
           }
           this.dateOptions.startDateValue = this.startDateValue;
           this.dateOptions.endDateValue = this.endDateValue;
        },
        //设置 breadnav 右侧按钮属性
        setBreadNavRightSlot(){
            this.breadNavRightSlot.show = true;
            this.breadNavRightSlot.text = "节能量基准设置";
            this.breadNavRightSlot.click = this.setBaselineList
            this.breadNavRightSlot.icon = "el-icon-setting"
        },
        //清除 breadnav 右侧按钮属性
        clearBreadNavRightSlot(){
            this.breadNavRightSlot.show = false;
            this.breadNavRightSlot.text = null;
            this.breadNavRightSlot.click = null;
            this.breadNavRightSlot.icon = '';
        },
        //时间粒度初始化
        timeGranularityInit(timeGranularityArr){
            for(let i = 0, len = timeGranularityArr.length; i < len; i++){
                if(timeGranularityArr[i].checked){
                    //this.dateType = timeGranularityArr[i].dateType;
                    this.dateOptions.dateType = timeGranularityArr[i].dateType;

                    this.dateTypeId = timeGranularityArr[i].typeId
                    this.energySearchParams.timeUnit = timeGranularityArr[i].typeId;
                    return;
                };
            }
        },
        //时间粒度选择
        timeGranularityChecked(checked){
            //联动日期选择类型
            this.dateTypeId = checked.typeId;
            this.dateOptions.dateType = checked.dateType;
            //更新数据
            this.energySearchParams.timeUnit = checked.typeId;
            //初始化时间类型
            this.initDateValue();
            //查询
            this.energySearch();
        },
        //能源类型初始化
        energyTypeInit(energyTypeArr){
            for(let i = 0, len = energyTypeArr.length; i < len; i++){
                if(energyTypeArr[i].checked){
                    this.currentEnergyType = energyTypeArr[i].text;
                    this.energySearchParams.energyType = energyTypeArr[i].typeId;
                    //更新图标数据
                    this.energyEchartOption.yAxis[0].name = energyTypeArr[i].unit;
                    return;
                };
            }
        },
        //能源类型选择
        energyTypeChecked(checked){
            //联动节能表类型
            this.currentEnergyType = checked.text;
            //更新图标数据
            this.energyEchartOption.yAxis[0].name = checked.unit;
            //更新数据
            this.energySearchParams.energyType = checked.typeId;
            this.energySearch();
        },
        //HTTP -- 获取节能量分析
        energySearch(){

            if(!this.startDateValue || !this.endDateValue) {
                this.$message.error("请选择时间范围");
                return;
            }

            //时间格式转换
            this.startDateValue = this.dateFormat(this.startDateValue, true, this.dateTypeId);
            this.endDateValue = this.dateFormat(this.endDateValue, false, this.dateTypeId);


            this.energySearchParams.startTime = this.startDateValue;
            this.energySearchParams.endTime = this.endDateValue;

            CostForEnergyServices.instance()
                .getSavingList(this.energySearchParams)
                .then((res)=>{
                    /*console.log("查询结果：")
                    console.log(res)*/
            })
        },
        /**
         * 时间格式转换
         * @param dateString
         * @param isStart
         * @param timeUnit
         * @returns {*}
         */
        dateFormat(dateString, isStart, timeUnit){
            //日期格式转换 yyyt-mm-dd  + hh:mm:ss
            if(timeUnit === 2){
                //日   yyyt-mm-dd  hh:mm:ss
                isStart
                    ? dateString = GlobalUtil.formatToStartDate(dateString)
                    : dateString = GlobalUtil.formatToEndDate(dateString);
            }else{
                //月 yyyt-mm  +  -dd hh:mm:ss
                isStart
                    ? dateString = GlobalUtil.forMatToDateOfMonthFirstDay(dateString)
                    : dateString = GlobalUtil.forMatToDateOfMonthLastDay(dateString);
            }
            return dateString;
        },
        //HTTP -- 设置节能量基准
        setBaselineList(){
            //console.info("test: 点击了" + this.breadNavRightSlot.text + "按钮")
            //显示弹窗
            this.dialogVisible = true;

            this.getBaselineList();
        },
        //设置节能量基准
        getBaselineList(){
            CostForEnergyServices.instance()
                .getBaselineList(this.baselineListParams)
                .then( (res) => {
                    console.log(res)
            })
        },
        BaselineListEnergyTypeChecked(checked){
            console.log(checked)
        },

        dateChanged(res){
           /* console.log("当前选择日期：" )
            console.log(res)*/
            this.startDateValue = res.startDateValue;
            this.endDateValue = res.endDateValue;
        },

        add() {
            // console.log(555);
        },

        post_energy_type(e) {
            this.energy_actives = e.target.getAttribute('data-active');
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    this.dialogVisible = false;
                    done();
                })
                .catch(_ => {});
        },
        editInput(row, column, cell, event) {
            if (column.label != '名称') {
                let cellValue = event.target.innerHTML;
                event.target.innerHTML = '';
                let cellInput = document.createElement('input');
                cellInput.value = cellValue;
                cellInput.setAttribute('class', 'cellValue_sty');
                cellInput.setAttribute("type", "text");
                cell.appendChild(cellInput);
                cellInput.focus();
                cellInput.onblur = function(argument) {
                    cell.removeChild(cellInput);
                    event.target.innerHTML = cellInput.value;
                }
            }
        }
    },
    mounted() {
        this.add();
    }
}
</script>

<style scoped lang="scss">

    $bgBlueColor: #1881BF;

    .analysis {
        background: #fff;
        font-size: 14px;
        color: #838383;

       /* .analysis_title {
            width: 100%;
            height: 36px;
            background: rgba(245, 249, 249, 1);
            line-height: 36px;
            padding-left: 28px;
            font-family: MicrosoftYaHei;
            color: rgba(34, 116, 164, 1);
            font-size: 16px;
            box-sizing: border-box;
            border: 1px solid #E5EEF3;
        }*/

        .analysis_content{
            .analysis_content_condition{
                padding-left: 28px;
                margin-top: 15px;
                overflow: hidden;

                .item{
                    margin: 10px 20px;
                    height: 28px;
                    line-height: 28px;
                }
            }
        }
    }

    /*  */
    .energy_type {
        width: 99px;
        height: 28px;
    }

    /* 时间粒度 */
    .time_granularity {
        margin-left: 40px;
        line-height: 28px;

        .granularity_tabs{
            width: 60px;
            height: 28px;
        }
    }

    /* 时间筛选 */
    .date-check{
        height: 28px;
        line-height: 28px;

        .date-item{

            .el-date-editor{
                width: 130px;
            }
        }.space{
            padding:0 5px;
         }
    }

    .query-submit{
        width: 90px;
        border-radius: 28px;
        background: $bgBlueColor;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }

    .analysis_content_charts {
        width: 100%;
        height: 350px;
        margin-top: 40px;
    }

    .charts {
        width: 100%;
        height: 100%;
    }

    .analysis_table {
        font-size: 16px;
        color: $bgBlueColor;
        line-height: 24px;
        height: 24px;
    }

    .blue_box {
        width: 5px;
        height: 18px;
        background: $bgBlueColor;
        margin-left: 34px;
        margin-right: 13px;
        margin-top: 2px;
    }

    .analysis_table_content {
        margin-left: 85px;
        margin-right: 85px;
        margin-top: 23px;
    }

    .active {
        background: $bgBlueColor;
        color: #fff;
    }

    .query_search {
        margin-left: 68px;
    }


    /*el ui 覆盖*/
    .analysis .baseline-list-set {
        position: relative;

        .title-text{
            position: absolute;
            left: 0;
            right: 0;
            height: 36px;
            background: $bgBlueColor;
            top: 0;
            color: #fff;
            line-height: 36px;
            padding:0 10px;
        }

        .el-dialog__footer{

            .dialog-footer{
                width: 100%;
                text-align: center;
                display: block;

                .form-submit{
                    width: 90px;
                    height: 28px;
                    margin:0 15px;
                }
            }
        }

        .reference-table {
            margin-top: 30px;
        }

        .dialog_content_top{
            overflow: hidden;

            .item{
                margin: 10px;
            }

            .dialog-select{
                width: 90px;
            }

            .reference-range{
                .reference-range-select{
                    width: 100px;
                }
            }

            .energy-query {
                width: 90px;
                height: 28px;
                background: #1881BF;
                border-radius: 28px;
                color: #fff;
                line-height: 28px;
                text-align: center;
            }

            .date-check{
                .date-item{
                    .el-date-editor{
                        width: 110px;
                    }
                }
            }
        }
    }
</style>
