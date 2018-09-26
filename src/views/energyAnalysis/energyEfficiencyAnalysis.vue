<template>
    <div class="EnergyEfficiencyAnalysis">
        <div class="EnergyEfficiencyAnalysis_content ub">
            <div class="EnergyEfficiencyAnalysis_content_left">
                <div class="consumption_type ub">
                    <div class="consumption_type_btn" :class="{active:efficiency_type == 1}" @click="getefficiencyType($event)" data-active="1">能效</div>
                    <div class="consumption_type_btn" :class="{active:efficiency_type == 2}" @click="getefficiencyType($event)" data-active="2">冷量</div>
                    <div class="consumption_type_btn" :class="{active:efficiency_type == 3}" @click="getefficiencyType($event)" data-active="3">热力图</div>
                </div>
                <div class="tree">
                    <el-tree :data="treeitems" :show-checkbox="false" :check-on-click-node="false" :expand-on-click-node="true" :default-expanded-keys="[2]" :default-checked-keys="[5]" default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps" @check-change="handleCheckChange" @node-click="setCheckedKeys">
                    </el-tree>
                </div>
            </div>
            <div class="EnergyEfficiencyAnalysis_content_right ub-f1">
                <div class="common_view_title">能效分析</div>
                <div class="ecrc ub">
                    <div class="time_granularity ub">
                        <span>时间粒度：</span>
                        <div class="granularity ub">
                            <div class="granularity_btn ub-f1" :class="{active:Datetype == 1}" @click="getDateType($event)" data-active="1">时</div>
                            <div class="granularity_btn ub-f1 " :class="{active:Datetype == 2}" @click="getDateType($event)" data-active="2" style="border-left: 1px solid #909A9A;border-right: 1px solid #909A9A;">日</div>
                            <div class="granularity_btn ub-f1" :class="{active:Datetype == 3}" @click="getDateType($event)" data-active="3" style="border-right: 1px solid #909A9A;">月</div>
                            <div class="granularity_btn ub-f1" :class="{active:Datetype == 4}" @click="getDateType($event)" data-active="4">年</div>
                        </div>
                    </div>
                    <div class="time_screen ub" style="padding-left:150px; ">
                        <div class="screen ub">
                            <span>时间筛选：</span>
                            <div class="screen_date">
                                <el-date-picker v-model="datevalue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="query_search query_btn">
                            <div class="query_search_btn "><i class="el-icon-search"></i>查询</div>
                        </div>
                    </div>
                </div>
                <div class="efficiency_charts">
                    <vCharts :option="option"></vCharts>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../../axios/api.js';
import vCharts from '../../components/common/charts.vue'
export default {
    data() {
        return {
            Datetype: 1,
            efficiency_type: 1,
            datevalue: '',
            option: '',
            defaultProps: {
                children: 'children',
                label: 'labelname'
            },
            treeitems: []
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
        getefficiencyType(e) {
            this.efficiency_type = e.target.getAttribute('data-active');
        },
        getDateType(e) {
            this.Datetype = e.target.getAttribute('data-active');
        },
    },
    created() {
        this.gettreeitems();
        this.option = {
            grid: {
                top: 30, //距离容器上边界40像素
                bottom: 30, //距离容器下边界30像素
                left: 68,
                right: 68
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: { //工具栏,内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
                feature: { //各工具配置项。
                    dataView: { //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                        show: true, //是否显示组件。
                        readOnly: false
                    },
                    magicType: { //动态类型切换 示例：feature: { magicType: {type: ['line', 'bar', 'stack', 'tiled']}}
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: { //配置项还原。
                        show: true
                    },
                    saveAsImage: { //保存为图片。
                        show: true
                    },
                    myTool: {
                        show: true,
                        title: '自定义扩展方法',
                        icon: '../../../static/img/node.png',
                        z: '999',
                        left: 'center',
                        onclick: function() {
                            alert('myToolHandler2')
                        }
                    }

                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                name: '时间',
                splitLine: {
                    // show: true
                }
            }],
            yAxis: [{
                type: 'value',
                name: '能效',
                splitNumber: 5,
                splitLine: { show: false },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: [
                            '#FDF5F5', '#C7C400', '#00A9C7'
                        ],
                        opacity: 0.07
                    }
                },
            }],
            series: [{
                name: '口腔门诊',
                type: 'line',
                symbol: 'star',
                smooth: false,
                itemStyle: { normal: { color: '#4EB9DB' } },
                data: [1, 5, 3, 7, 5, 0.6, 4, 2, 4, 1, 9, 4, 5, 7, 7, 5, 2, 3, 2, 6, 7, 2, 4, 7]
            }]
        }
    }
}

</script>
<style scoped>
.EnergyEfficiencyAnalysis_content {
    min-height: 900px;
}

.EnergyEfficiencyAnalysis_content .EnergyEfficiencyAnalysis_content_left {
    width: 295px;
    background: #ffffff;
    min-height: 900px;
    margin-right: 10px;
}

.consumption_type {
    padding-left: 18px;
    padding-right: 10px;
    margin-bottom: 10px;
    padding-top: 20px;
}

.consumption_type_btn {
    width: 78px;
    height: 22px;
    line-height: 23px;
    border: 1px solid #909A9A;
    border-radius: 12px;
    text-align: center;
    margin-right: 10px;
    font-size: 14px;
}

.EnergyEfficiencyAnalysis_content .EnergyEfficiencyAnalysis_content_right {
    height: 900px;
    background: #fff;
}

.ecrc {
    padding: 25px 33px;
}

.time_granularity {
    margin: 0px;
}

.ecrc .time_screen {
    padding-left: 59px !important;
}

.ecrc .time_screen .screen {
    margin: 0px;
}

.efficiency_charts {
    width: 100%;
    height: 400px;
}

</style>
<style>
.tree .is-checked .el-tree-node__label {
    color: #1881BF;
}

</style>
