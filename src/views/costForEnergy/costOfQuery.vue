<template>
    <div class="cost-query position_r">

        <div class="left-side-bar position_a">
            <div class="top">
                <!--电水气-->
                <v-tabs-btn
                    :options="energyType"
                    @checked="energyTypeClick">
                </v-tabs-btn>
            </div>

            <div class="organization_type content_box">
                <div class="electricity-sub-tabs"
                     v-if="energyTypeChecked.key === 'electricity'">
                    <!--电 sub tabs-->
                    <v-tabs-list
                        :options="electricitySubTabs"
                        @checked="electricitySubTabsClick">
                    </v-tabs-list>
                </div>

                <div class="tree">
                    <el-tree
                        :data="treeitems"
                        show-checkbox
                        :check-on-click-node="false"
                        :expand-on-click-node="true"
                        :default-expanded-keys="[2]"
                        :default-checked-keys="[5]"
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :props="defaultProps"
                        @check-change="handleCheckChange"
                        @node-click="setCheckedKeys">
                    </el-tree>
                </div>
            </div>
        </div>

        <div class="right-content position_a">
            <div class="cost-content">
                {{ energyTypeChecked.text }}耗费用查询
            </div>
            <div class="query-detail content_box">
                <div class="query_Detail_top">
                    <div class="settlement inline_block">
                        <span class="inline_block">条件设置：</span>
                        <div class="condition inline_block">
                            <v-tabs-btn
                                :options="conditionEnum"
                                @click="conditionEnum(checked)">
                            </v-tabs-btn>
                        </div>
                    </div>
                    <div class="item time_granularity inline_block">
                        <span class="inline_block">时间粒度：</span>
                        <div class="granularity_tabs inline_block">
                            <v-tabs-btn
                                :options="timeGranularity"
                                @checked="timeGranularityChecked"
                            ></v-tabs-btn>
                        </div>
                    </div>
                    <div class="item contrast_conditions inline_block">
                        <span class="inline_block">对比条件：</span>
                        <div class="contrast inline_block">
                            <v-tabs-btn
                                :options="compareConditionEnum"
                                @checked="compareConditionChecked"
                            ></v-tabs-btn>
                        </div>
                    </div>
                    <div class="item date-check inline_block">
                        <span class="inline_block">时间筛选：</span>

                        <div class="inline_block date-item start-date">
                            <el-date-picker :type="dateType"
                                            v-model="startDateValue"
                                            placeholder="开始日期"
                                            size="small">
                            </el-date-picker>
                        </div>
                        <div class="inline_block space">至</div>
                        <div class="inline_block date-item end-date">
                            <el-date-picker :type="dateType"
                                            v-model="endDateValue"
                                            placeholder="结束日期"
                                            size="small">
                            </el-date-picker>
                        </div>
                    </div>

                    <!--查询-->
                    <div class="item query-submit inline_block" @click="energySearch">
                        <i class="el-icon-search"></i> 查 询
                    </div>
                </div>


                <div class="charts">
                    <v-charts :option="option2" class="echarts-container"></v-charts>
                </div>
                <div class="section_comparison">
                    <div class="secom_title ub">
                        <div class="time_quantum ub-f1 w1" style="text-align: right;">
                            218-01-01 至 2018-01-12
                        </div>
                        <div class="ub-f1 w1" style="text-indent: 2em;">各科室费用对比</div>
                    </div>
                    <div class="section_comparison_table">
                        <el-table :data="tableData" style="width: 100%;text-align: center;" stripe size="mini" :header-cell-style="{background:'#f1f1f1',textAlign:'center'}">
                            <el-table-column prop="name" :label="sectionName">
                            </el-table-column>
                            <el-table-column prop="id" :label="ActualEnergy">
                            </el-table-column>
                            <el-table-column prop="amount3" :label="QuotaPoor" sortable>
                            </el-table-column>
                            <el-table-column prop="amount1" :label="percentage" sortable>
                            </el-table-column>
                            <el-table-column prop="amount2" :label="basis" sortable>
                            </el-table-column>
                            <el-table-column label="ActualEnergy" prop="id" v-if="false"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import vCharts from '../../components/common/charts.vue'
import api from '../../axios/api.js';

import {EnergyTypeEnum, TimeGranularityEnums} from "./energyEnum";
import {CompareConditionEnum, ConditionEnum, ElectricitySubTabsEnum, mockTableData} from "./costOfQueryEnum";
import { CostForEnergyFactory } from "./costForEnergyFactory";

import vTabsBtn from "../../components/formComponents/tabsBtn.vue";
import vTabsList from "../../components/formComponents/tabsList"
import GlobalUtil from "../../utils/globalUtil";

export default {
    components: {
        vCharts,
        vTabsBtn,
        vTabsList
    },
    data() {
        return {
            energyType: GlobalUtil.deepCopy(EnergyTypeEnum),
            energyTypeChecked: null,
            electricitySubTabs: GlobalUtil.deepCopy(ElectricitySubTabsEnum),

            conditionEnum: GlobalUtil.deepCopy(ConditionEnum),
            conditionEnumChecked: null,

            timeGranularity: GlobalUtil.deepCopy(TimeGranularityEnums),

            compareConditionEnum: GlobalUtil.deepCopy(CompareConditionEnum),

            dateType: "date",
            dateTypeId: "",
            startDateValue: '',
            endDateValue: '',

            energySearchParams: {
                pageNum: 0,
                pageSize: 10,
                energyType: 0,
                timeUnit: 1,
                startTime: "",
                endTime: "",
            },

            typeshows: 1,
            shows: 1,
            Organization: 1,
            Condition: 1,
            Datetype: 1,
            Comparison: 1,
            treeitems: [],
            defaultProps: {
                children: 'children',
                label: 'labelname'
            },
            sectionName: '对象名称',
            ActualEnergy: '累计费用（元）',
            QuotaPoor: '平均值（元）',
            percentage: '最大值（元）',
            basis: '最大值产生事时间',
            tableData: mockTableData,
            datevalue: '',
            option2: {
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    name: '时间',
                    splitLine: {
                        show: true
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '元'
                }],
                series: [{
                        name: '口腔门诊',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: { color: '#42C77B' } },
                        data: [1000, 1342, 2154, 5433, 2660, 8730, 7710]
                    },
                    {
                        name: '后勤保障科',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: { color: '#5EADDB' } },
                        data: [3350, 1852, 4434, 7915, 3904, 3430, 9410]
                    },
                    {
                        name: '保卫科',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [4434, 9410, 4434, 7915, 3904, 3430, 3156]
                    },
                    {
                        name: '水电',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [7915, 1000, 4434, 7915, 3904, 3430, 6344]
                    },
                    {
                        name: '东院门诊',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [3430, 3904, 4434, 7915, 3904, 3430, 7564]
                    },
                    {
                        name: '牙周医院',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [1320, 1132, 6081, 8234, 8120, 7590, 4620]
                    }
                ]
            },

        }
    },
    created(){
        CostForEnergyFactory.setEnergyTypeBase(this.energyType, {
            radius: "0",
            bgColor: "gray",
            activeItemHasBorderBottom: true,
            itemShowIcon: true
        });

        this.gettreeitems();
        this.energyTypeCheckedInit()
    },
    methods: {
        initDateValue(){
            //根据时间粒度类型初始化时间值
            if(this.dateTypeId === 1){
                //日
                this.startDateValue = GlobalUtil.getPreviousDateTime();
                this.endDateValue = GlobalUtil.getCurrentDateTime();

            } else if(this.dateTypeId === 4){
                //月
                this.startDateValue = new Date().getFullYear() + "-1";
                this.endDateValue = GlobalUtil.getCurrentYearAndMonth();
            }
        },
        energyTypeClick(item){
            console.log(item)
            this.energyTypeChecked = item
        },
        electricitySubTabsClick(checked){
            console.log(checked)
        },
        energyTypeCheckedInit(){
            for(let i = 0, len = this.energyType.dataArr.length; i < len ;i++){
                if(this.energyType.dataArr[i].checked){
                    this.energyTypeChecked = this.energyType.dataArr[i]
                }
            }
        },
        timeGranularityChecked(checked){
            console.log(checked)
        },
        compareConditionChecked(checked){
            console.log(checked)
        },
        energySearch(){
            this.energySearchParams.startTime = this.startDateValue;
            this.energySearchParams.endTime = this.endDateValue;
            /*CostForEnergyServices.instance()
                .getSavingList(this.energySearchParams)
                .then((res)=>{
                    console.log(res)
                })*/
        },


        getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
        },
        getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys());
        },
        handleCheckChange(data) {
            console.log(data);
        },
        setCheckedKeys(data) {
            let keys = this.$refs.tree.getCheckedKeys();
            keys.push(data.id);
            this.$refs.tree.setCheckedKeys(keys);
        },
        gettreeitems() {
            api.ajax('/treeitems/list').then(res => {
                console.log(res);
                this.treeitems = res.data;
            })
        },
        getquota() {
            api.ajax('/sectionQuota/list').then(res => {
                console.log(res);
                this.option = res.data;
                console.log(this.option)
            })
        },
        typeshow(e) {
            this.typeshows = e.target.getAttribute('data-select');
        },
        getDateType(e) {
            this.Datetype = e.target.getAttribute('data-active');
        },
        getOrganization(e) {
            this.Organization = e.target.getAttribute('data-active');
        },
        getCondition(e) {
            this.Condition = e.target.getAttribute('data-active');
        },
        getComparison(e) {
            this.Comparison = e.target.getAttribute('data-active');
        }


    }

}

</script>

<style scoped lang="scss">
    $topTabsborderColor: #E5EEF3;
    $topTabsBgColor: #F5F9F9;

    .cost-query{
        .left-side-bar{
            left: 0;
            top: 0;
            bottom: 10px;
            width: 270px;
            background: $topTabsBgColor;
        }

        .right-content{
            left: 280px;
            top:0;
            bottom: 10px;
            right: 0;
        }

    }

    .cost-content {
        padding-left: 40px;
        text-align: left;
        color: rgba(34, 116, 164, 1);
        overflow: hidden;
        font-size: 16px;
        color: #505050;
        line-height: 36px;
        height: 36px;
        width: 100%;
        background: $topTabsBgColor;
    }

    .electricity-sub-tabs{
        width: 100%;
        height: 28px;
        padding:20px 0 0 0;
    }

    .top .item:not(:last-child):after{
        content: "";
        width: 1px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: $topTabsborderColor;
    }

    .top .item.item-active{
        background: #fff;
        border-bottom: 0;
    }


    .granularity_tabs{
        width: 60px;
        height: 28px;
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
        background: #1881BF;
        color: #fff;
        text-align: center;
        cursor: pointer;
        height: 28px;
        line-height: 28px;
    }


    .content_box_top {
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
    }

    .content_box_btn {
        width: 30%;
        height: 22px;
        line-height: 23px;
        border: 1px solid #909A9A;
        border-radius: 12px;
        text-align: center;
        margin-right: 10px;
    }

    .active {
        background: rgba(24, 129, 191, 1);
        color: #ffffff;
    }

    .query_Detail_top {
        padding: 10px 40px;
        border-bottom: 1px solid #EAEAEA;
        line-height: 24px;

        .item{
            margin:10px 20px;
        }
    }

    .query_Detail_top .settlement .condition {
        width: auto;
        height: 28px;
    }



    .contrast_conditions {
        margin-left: 36px;
    }

    .contrast_conditions .contrast {
        width: auto;
        height: 28px;
    }



    .time_granularity {
        margin-left: 36px;
    }


    .charts {
        width: 100%;
        height: 400px;
        /*background: #203246;*/
    }

    .section_comparison {
        margin-top: 50px;
    }

    .section_comparison .secom_title {
        color: #3a3a3a;
        font-size: 16px;
        line-height: 24px;
        font-family: 'MicrosoftYaHei';
        /*font-weight: regular;*/
    }

    .section_comparison_table {
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 40px;
        padding-bottom: 40px;
    }

    .select {
        background: #ffffff;
        color: rgba(34, 116, 164, 1);
    }

    .query_search {
        margin-left: 60px;
    }

</style>
