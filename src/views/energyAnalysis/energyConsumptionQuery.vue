<style scoped>
.top {
    /*padding-left: 40px;*/
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #505050;
    background: rgba(245, 249, 249, 1);
    line-height: 36px;
    text-align: center;
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



.query_Detail_top {
    padding-bottom: 18px;
    padding-left: 40px;
    padding-right: 40px;
    border-bottom: 1px solid #EAEAEA;
    line-height: 24px;
}

.query_Detail_top .settlement .condition {
    width: 206px;
    height: 22px;
    border: 1px solid #909A9A;
    border-radius: 12px;
    text-align: center;
    overflow: hidden;
}



.Contrast_conditions {
    margin-left: 60px;
}

.Contrast_conditions .Contrast {
    width: 152px;
    height: 22px;
    border: 1px solid #909A9A;
    border-radius: 12px;
    text-align: center;
    overflow: hidden;
}



.time_granularity {
    margin-left: 39px;
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
    font-weight: regular;
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
<template>
    <el-row :gutter="10">
        <el-col :span="4">
            <div class="top ub">
                <div class="electricity ub-f1" :class="{select:typeshows == 1}" @click="typeshow($event)" data-select="1">电</div>
                <div class="water ub-f1 " :class="{select:typeshows == 2}" @click="typeshow($event)" data-select="2" style="border-left:1px solid #E5EEF3;border-right:1px solid #E5EEF3;">水</div>
                <div class="gas ub-f1" :class="{select:typeshows == 3}" @click="typeshow($event)" data-select="3">气</div>
            </div>
            <div class="organization_type content_box pdt18">
                <div class="content_box_top ub">
                    <div class="subentry content_box_btn" :class="{active:Organization == 1}" @click="getOrganization($event)" data-active="1">分项</div>
                    <div class="organion content_box_btn " :class="{active:Organization == 2}" @click="getOrganization($event)" data-active="2">组织机构</div>
                    <div class="distribution content_box_btn" :class="{active:Organization == 3}" @click="getOrganization($event)" data-active="3">配电</div>
                </div>
                <div class="tree">
                    <el-tree :data="treeitems" show-checkbox :check-on-click-node="false" :expand-on-click-node="true" :default-expanded-keys="[2]" :default-checked-keys="[5]" default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps" @check-change="handleCheckChange" @node-click="setCheckedKeys">
                    </el-tree>
                </div>
            </div>
        </el-col>
        <el-col :span="20">
            <div class="top" style="padding-left: 40px;text-align: left;color: rgba(34, 116, 164, 1);">
                电耗费用查询
            </div>
            <div class="query_Detail content_box pdt18">
                <div class="query_Detail_top ub">
                    <div class="settlement ub">
                        <span>条件设置：</span>
                        <div class="condition ub">
                            <div class="condition_btn ub-f1" :class="{active:Condition == 1}" @click="getCondition($event)" data-active="1">能耗</div>
                            <div class="condition_btn ub-f1" :class="{active:Condition == 2}" @click="getCondition($event)" data-active="2" style="border-left: 1px solid #909A9A;border-right: 1px solid #909A9A;">单位面积</div>
                            <div class="condition_btn ub-f1" :class="{active:Condition == 3}" @click="getCondition($event)" data-active="3">单位人数</div>
                        </div>
                    </div>
                    <div class="time_granularity ub">
                        <span>时间粒度：</span>
                        <div class="granularity ub">
                            <div class="granularity_btn ub-f1" :class="{active:Datetype == 1}" @click="getDateType($event)" data-active="1">时</div>
                            <div class="granularity_btn ub-f1 " :class="{active:Datetype == 2}" @click="getDateType($event)" data-active="2" style="border-left: 1px solid #909A9A;border-right: 1px solid #909A9A;">日</div>
                            <div class="granularity_btn ub-f1" :class="{active:Datetype == 3}" @click="getDateType($event)" data-active="3" style="border-right: 1px solid #909A9A;">月</div>
                            <div class="granularity_btn ub-f1" :class="{active:Datetype == 4}" @click="getDateType($event)" data-active="4">年</div>
                        </div>
                    </div>
                    <div class="Contrast_conditions ub">
                        <span>对比条件：</span>
                        <div class="Contrast ub">
                            <div class="contrast_btn ub-f1" :class="{active:Comparison == 1}" @click="getComparison($event)" data-active="1">无对比</div>
                            <div class="contrast_btn ub-f1 " :class="{active:Comparison == 2}" @click="getComparison($event)" data-active="2" style="border-left: 1px solid #909A9A;border-right: 1px solid #909A9A;">同比</div>
                            <div class="contrast_btn ub-f1" :class="{active:Comparison == 3}" @click="getComparison($event)" data-active="3">环比</div>
                        </div>
                    </div>
                </div>
                <div class="time_screen ub mart18">
                    <div class="screen ub">
                        <span>时间筛选：</span>
                        <div class="screen_date">
                            <el-date-picker v-model="datevalue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="query_search query_btn">
                        <div class="query_search_btn el-icon-search">查询</div>
                    </div>
                </div>
                <div class="charts">
                    <v-charts :option="option2" class="echarts-container"></v-charts>
                </div>
                <div class="section_comparison">
                    <div class="secom_title ub">
                        <div class="time_quantum ub-f1 w1" style="text-align: right;">
                            218-01-26
                        </div>
                        <div class="ub-f1 w1" style="text-indent: 2em;">能耗查询明细</div>
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
                        </el-table>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import vCharts from '../../components/common/charts.vue'
import api from '../../axios/api.js';
export default {
    data() {
        return {
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
            tableData: [{
                id: '12987122',
                name: '口腔医院1',
                amount1: '234',
                amount2: '2018-01-12 10:30',
                amount3: 10

            }, {
                id: '12987123',
                name: '口腔医院2',
                amount1: '165',
                amount2: '2018-01-12 10:30',
                amount3: 12
            }, {
                id: '12987124',
                name: '口腔医院3',
                amount1: '324',
                amount2: '2018-01-12 10:30',
                amount3: 9
            }, {
                id: '12987126',
                name: '口腔医院7',
                amount1: '539',
                amount2: '2018-01-12 10:30',
                amount3: 15
            }],
            datevalue: '',
            option2: {
                tooltip: {
                    trigger: 'axis'
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
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
                        data: [915, 550, 530, 719, 597, 600, 124, 592, 834, 731, 809, 604, 125, 79, 297, 958, 325, 603, 162, 506, 657, 92, 174, 897]
                    },
                    {
                        name: '后勤保障科',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: { color: '#5EADDB' } },
                        data: [384, 610, 211, 855, 474, 87, 744, 288, 65, 227, 84, 73, 891, 548, 267, 780, 999, 692, 645, 369, 129, 612, 874, 282]
                    },
                    {
                        name: '保卫科',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [643, 661, 543, 15, 657, 342, 264, 776, 958, 616, 121, 940, 951, 246, 322, 789, 305, 856, 575, 53, 885, 286, 453, 670]
                    },
                    {
                        name: '水电',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [642, 122, 90, 319, 24, 685, 854, 930, 398, 807, 789, 307, 702, 301, 782, 45, 619, 215, 728, 454, 255, 375, 815, 552]
                    },
                    {
                        name: '东院门诊',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [823, 536, 19, 765, 197, 252, 90, 660, 47, 605, 670, 976, 151, 633, 737, 404, 452, 741, 520, 577, 942, 626, 189, 884]
                    },
                    {
                        name: '牙周医院',
                        type: 'line',
                        smooth: true,
                        itemStyle: { normal: {} },
                        data: [540, 918, 943, 761, 469, 7, 950, 45, 965, 972, 966, 113, 220, 974, 990, 358, 28, 722, 133, 163, 632, 905, 291, 857]
                    }
                ]
            },

        }
    },
    components: {
        vCharts
    },
    methods: {
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
                this.treeitems = res;
            })
        },
        getquota() {
            api.ajax('/sectionQuota/list').then(res => {
                console.log(res);
                this.option = res;
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
        },


    },
    created() {
        this.gettreeitems();
    }

}

</script>
