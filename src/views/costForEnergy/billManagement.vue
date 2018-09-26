<template>
    <div class="bill-management">
        <div class="subpage-title">{{title}}</div>

        <div class="bill-management-content">

            <!--条件选择栏-->
            <div class="bill-management-content-condition">
                <div class="item energy-type fl">
                    <!--电水气-->
                    <v-tabs-btn
                        :options="energyType"
                        @checked="energyTypeChecked"
                    ></v-tabs-btn>
                </div>

                <!--时间筛选-->
                <div class="item date-check fl">
                    <span class="fl">时间筛选：</span>

                    <div class="fl date-item start-date">
                        <el-date-picker :type="dateType"
                                        v-model="startDateValue"
                                        placeholder="开始日期"
                                        size="small">
                        </el-date-picker>
                    </div>
                    <div class="fl space">至</div>
                    <div class="fl date-item end-date">
                        <el-date-picker :type="dateType"
                                        v-model="endDateValue"
                                        placeholder="结束日期"
                                        size="small">
                        </el-date-picker>
                    </div>
                </div>

                <!--查询-->
                <div class="item query-submit fl" @click="energySearch">
                    <i class="el-icon-search"></i> 查 询
                </div>
            </div>

            <!--图-->
            <div class="bill-management_charts">
                <vCharts :option="option" ref='bill-management_charts'></vCharts>
            </div>

            <!--表-->
            <div class="bill-management_table">
                <div class="bill-management_table_title ub">
                    <div class="cut_off_rule"></div>
                    <div class="">{{tableName}}</div>
                </div>
                <div class="bill-management_table_content">
                    <el-table
                        :data="tableData"
                        style="width: 100%;text-align: center;"
                        stripe
                        :header-cell-style="{background:'#f1f1f1',textAlign:'center'}"
                        :cell-class-name="fstyle">
                        <el-table-column
                            v-for="(item,index) in tableKey"
                            :key="index"
                            :prop="item.name"
                            :label="item.value">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import vCharts from '../../components/common/charts.vue'
import {EnergyTypeEnum} from "./energyEnum";
import vTabsBtn from "../../components/formComponents/tabsBtn.vue";
import GlobalUtil from "../../utils/globalUtil";

export default {
    data() {
        return {
            energyType: GlobalUtil.deepCopy(EnergyTypeEnum),
            startDateValue: '',
            endDateValue: '',
            dateType: "date",

            title: '账单查询',
            tableName: '账单明细表',
            option: '',
            actives: 1,
            datevalue: '',
            tableTit: '',
            tableData: ''
        }
    },
    components: {
        vCharts,
        vTabsBtn
    },
    inject: ['breadNavRightSlot'],
    created() {
        this.option = {
            tooltip: { rigger: 'axis' },
            legend: {
                data: ['供电局抄表', '系统抄表']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12']
            },
            yAxis: {
                type: 'value',
                name: 'kWh'
            },
            series: [{
                    name: '供电局抄表',
                    type: 'line',
                    itemStyle: {
                        color: '#FEC068',
                        normal: {
                            lineStyle: {
                                color: '#FEC068'
                            }
                        }
                    },
                    data: [120, 132, 101, 134, 190, 230, 210, 220, 182, 191, 234, 290, 330]
                },
                {
                    name: '系统抄表',
                    type: 'line',
                    itemStyle: {
                        color: '#F58E6A',
                        normal: {
                            lineStyle: {
                                color: '#F58E6A'
                            }
                        }
                    },
                    data: [220, 182, 191, 234, 100, 80, 310, 120, 132, 101, 134, 90, 230]
                }
            ]
        }
        this.tableKey = [
            {
                name: 'itemName',
                value: '账单日期',
            },
            {
                value: '1月',
                name: "jan",
            }, {
                value: '2月',
                name: "feb"
            }, {
                value: '3月',
                name: "mar"
            }, {
                value: '4月',
                name: "apr"
            }, {
                value: '5月',
                name: "may"
            }, {
                value: '6月',
                name: "jun"
            }, {
                value: '7月',
                name: "jul"
            }, {
                value: '8月',
                name: "aug"
            }, {
                value: '9月',
                name: "sep"
            }, {
                value: '10月',
                name: "oct"
            }, {
                value: '11月',
                name: "nov"
            }, {
                value: '12月',
                name: "dec"
            }
        ];
        this.tableData = [
            {
            itemName: '供电局抄表（kWh）',
            jan: 30,
            feb: 2,
            mar: 30,
            apr: 10,
            may: 40,
            jun: 30,
            jul: 20,
            aug: 30,
            sep: 10,
            nov: 60,
            oct: 10,
            dec: 20,
        }, {
            itemName: '供电局收费（元）',
            jan: 30,
            feb: 2,
            mar: 30,
            apr: 10,
            may: 40,
            jun: 30,
            jul: 20,
            aug: 30,
            sep: 10,
            nov: 60,
            oct: 10,
            dec: 20,
        }, {
            itemName: '系统抄表（kWh）',
            jan: 30,
            feb: 2,
            mar: 30,
            apr: 10,
            may: 40,
            jun: 30,
            jul: 20,
            aug: 30,
            sep: 10,
            nov: 60,
            oct: 10,
            dec: 20,
        }, {
            itemName: '系统差额（元）',
            jan: 30,
            feb: 2,
            mar: 30,
            apr: 10,
            may: 40,
            jun: 30,
            jul: 20,
            aug: 30,
            sep: 10,
            nov: 60,
            oct: 10,
            dec: 20,
        }, {
            itemName: '误差率',
            jan: '30%',
            feb: '20%',
            mar: '30%',
            apr: '10%',
            may: '40%',
            jun: '30%',
            jul: '20%',
            aug: '30%',
            sep: '10%',
            nov: '60%',
            oct: '10%',
            dec: '20%'
        }]

        this.setBreadNavRightSlot();
    },
    methods: {
        energyTypeChecked(checked){
            console.log("电水气：" + checked)
            //更新数据
        },

        setBreadNavRightSlot(){
            this.breadNavRightSlot.show = true;
            this.breadNavRightSlot.text = "电费单录入";
            this.breadNavRightSlot.click = this.setBaselineList
            this.breadNavRightSlot.icon = "el-icon-setting"
        },
        clearBreadNavRightSlot(){
            this.breadNavRightSlot.show = false;
            this.breadNavRightSlot.text = null;
            this.breadNavRightSlot.click = null;
            this.breadNavRightSlot.icon = '';
        },
        energySearch(){
            this.energySearchParams.startTime = this.startDateValue;
            this.energySearchParams.endTime = this.endDateValue;

        },

        get_bill_type(e) {
            console.log(1);
            this.actives = e.target.getAttribute('data-active');
            this.option.series = [{
                    name: '供电局抄表',
                    type: 'line',
                    data: [220, 132, 101, 134, 190, 230, 210, 220, 182, 191, 234, 290, 330]
                },
                {
                    name: '系统抄表',
                    type: 'line',
                    data: [10, 182, 191, 234, 100, 80, 310, 120, 132, 101, 134, 90, 230]
                }
            ];
        },
        fstyle(i) {
            if (i.columnIndex == 0) {
                return "lee";
            }

        }
    },
    beforeDestroy(){
        this.clearBreadNavRightSlot()
    }
}

</script>

<style scoped lang="scss">

.bill-management {
    background: #fff;
    min-height: 900px;
    width: 100%;
    position: relative;
    .subpage-title{
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        font-weight: 600;
        padding: 0 0 0 30px;
        border: 1px #E5EEF3 solid;
        color: #2274A4;
        background: #F5F9F9;
    }
}


.bill-management-content-condition{
    padding: 10px;
    overflow: hidden;

    .item{
        margin: 10px 20px 0;
    }
}

.energy-type {
    width: 100px;
    height: 28px;
    font-size: 12px;
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


.active {
    background: #1881BF;
    color: #ffffff;
}

.bill-management_charts {
    width: 100%;
    height: 400px;
    padding: 10px;
}

.cut_off_rule {
    width: 4px;
    height: 18px;
    background: #1881BF;
}

.bill-management_table .bill-management_table_title {
    height: 18px;
    padding-left: 30px;
    text-indent: 1em;
    line-height: 20px;
    color: #1881BF;
}

.bill-management_table_content {
    padding: 30px;
}

</style>
