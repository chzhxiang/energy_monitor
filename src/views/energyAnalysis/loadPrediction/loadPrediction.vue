<template>
    <div class="LoadPredictionBox">
        <h3 class="LoadPredictiontit">能耗预测分析</h3>
        <div class="lineChartBox">
            <div class="topButtom clear">
                <div class="fl switchData">
                    <span :class="{act:defEnergyType ==1? true:false}" @click="switchData(1)"><i class="el-icon-location-outline"></i></span>
                    <span :class="{act:defEnergyType ==2? true:false}" @click="switchData(2)"><i class="el-icon-bell"></i></span>
                    <span :class="{act:defEnergyType ==3? true:false}" @click="switchData(3)"><i class="el-icon-service"></i></span>
                </div>
                <div style="margin-left: 30px" class="fl switchData">
                    <span :class="{act:defEnergyType ==1? true:false}" @click="switchData(1)">今天</span>
                    <span :class="{act:defEnergyType ==2? true:false}" @click="switchData(2)">昨天</span>
                    <span :class="{act:defEnergyType ==3? true:false}" @click="switchData(3)">前天</span>
                </div>
            </div>
            <div style="height: 400px">
                <MyCharts :option="option"></MyCharts>
            </div>
        </div>
        <div style="margin-top: 30px" class="otherStatistics clear">
            <div style="width: 50%"  class="fl left_box">
                <div class="tit"><b></b>本月能耗与定额比</div>
                <div class="clear">
                    <CylindricalPlot style="width: 480px;margin: 0 auto"></CylindricalPlot>
                </div>
            </div>
            <div style="width: 50%" class="fr left_box">
                <div style="width: 480px;margin: 0 auto">
                    <div class="tit"><b></b>下月能耗预测</div>
                    <div style="padding-left: 100px">
                        <EnergyConsumptionPrediction></EnergyConsumptionPrediction>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MyCharts from '../../../components/common/charts.vue';
    import CylindricalPlot from './cylindricalPlot.vue';
    import EnergyConsumptionPrediction from './energyConsumptionPrediction.vue';
    export default {
        name: 'table',
        components: {
            MyCharts,
            CylindricalPlot,
            EnergyConsumptionPrediction
        },
        data() {
            return {
                defEnergyType:1,
                defDate:1,
                vtype:["","power","water","air"],
                vdata:{
                    power:{
                        actual:[300, 400, 500, 600, 700, 800, 900, 800, 700, 600, 500, 400,300,350,400,500,600,],
                        forecast:[200, 300, 400, 500, 600, 700, 800, 700, 600, 500, 400, 300, 200],
                        optimize:[100, 200, 300, 400, 500, 600, 700, 600, 500, 400, 300, 200, 100,200,300,400,500,400,300,250,200,100,50,]
                    },
                    water:{
                        actual:[300, 400, 500, 600, 700, 800, 900, 800, 700, 600, 500, 400,300,],
                        forecast:[200, 300, 400, 500, 600, 700, 800, 700, 600, 500, 400, 300, 200],
                        optimize:[100, 200, 300, 400, 500, 600, 700, 600, 500, 400, 300, 200, 100,200,300,400,500,400,300,250,200,100,50,]
                    },
                    air:{
                        actual:[300, 400, 500, 600, 700, 800, 900, 800, 700, 600, 500, 400,300,],
                        forecast:[200, 300, 400, 500, 600, 700, 800, 700, 600, 500, 400, 300, 200,300,400,500,600,500,400,300,200],
                        optimize:[100, 200, 300, 400, 500, 600, 700, 600, 500, 400, 300, 200, 100,200,300,400,500,400,300,250,200,100,50,]
                    },
                },
                option: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: 'transparent'
                            }
                        }
                    },
                    title: {
                        left: 'center',
                        bottom:0,
                        text: '2018-07-24 00时至2018-07-24 23时能耗预测分析',
                        textStyle:{
                            color:'#3A3A3A'
                        }
                    },
                    legend: {
                        top:0,
                        right:0,
                        textStyle: {
                            color: "#555555",
                            fontSize:16
                        },
                        data: [{ name: '昨日耗能', icon: "rect", height: 2 }, { name: '今日耗能', icon: "rect", height: 2 }]
                    },
                    grid: {
                        top: '15%',
                        left: '3%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        name: '时',
                        nameTextStyle: {
                            color: "#555"
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                // 网格颜色
                                color: '#E5EFF5'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#D6D6D6' //坐标线的颜色
                            }
                        },
                        axisTick: {
                            show: false
                            /* lineStyle:{
                                 color: "red"  //刻度颜色
                             }*/
                        },
                        axisLabel: {
                            color: "#555"
                        },
                        boundaryGap: false,
                        data: ['0', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23',]
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '电耗 kWh',
                        nameTextStyle: {
                            color: "#555"
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                // 网格颜色
                                color: '#E5EFF5'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#D6D6D6'
                            }
                        },
                        axisTick: {
                            show: false
                            /* lineStyle:{
                                 color: "red"  //刻度颜色
                             }*/
                        },
                        axisLabel: {
                            color: "#555"
                        }
                    }],
                    series: []
                }
            }
        },
        created(){
            this.createChart();
        },
        methods: {
            switchData(val){
                this.defEnergyType = val;
                this.createChart();
            },
            createChart() {
                var it = this;
                //图形所需百分比计算
                //it.showPower = it.getData[it.defName[it.defType]].power.def;
                //it.showWater = it.getData[it.defName[it.defType]].water.def;
                //it.showAir = it.getData[it.defName[it.defType]].air.def;
                this.option.series = [{
                    name: '实际能耗',
                    type: 'line',
                  /*  itemStyle: {
                        color: "rgba(24,199,227,0.2)",
                    },*/
                    lineStyle: {
                        color: "#FEC068",
                    },
                    smooth: true,
                    data: it.vdata[it.vtype[it.defEnergyType]].actual
                },
                {
                    name: '预测耗能',
                    type: 'line',
                   /* itemStyle: {
                        color: "rgba(118,228,79,0.2)",
                    },*/
                    lineStyle: {
                        color: "#0BA800",
                    },
                    smooth: true,
                    data: it.vdata[it.vtype[it.defEnergyType]].forecast
                },
                {
                    name: '优化值',
                    type: 'line',
                   /* itemStyle: {
                        color: "rgba(118,228,79,0.2)",
                    },*/
                    lineStyle: {
                        color: "#4EB9DB",
                    },
                    smooth: true,
                    data: it.vdata[it.vtype[it.defEnergyType]].optimize
                },
                ]
                console.log(it.vdata[it.vtype[it.defEnergyType]].forecast);
            },
        },

    }
</script>
<style scoped>
    .LoadPredictionBox {
        background: #fff;
    }

    .LoadPredictiontit {
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
    .lineChartBox{
        padding-top:20px ;
    }
    .topButtom{
        padding-left: 30px;
    }

    .switchData {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        border: 1px #909A9A solid;
        border-radius: 20px;
        overflow: hidden;
    }

    .switchData span {
        cursor: pointer;
        text-align: center;
        display: inline-block;
        font-size: 14px;
        color: #3A3A3A;
        padding: 3px 10px;
        border-right: 1px #909A9A solid;
    }

    .switchData span.act {
        background: #1881BF;
        color: #fff;
    }

    .switchData span:last-of-type {
        border-right: none
    }

    .otherStatistics .left_box .tit{height: 18px;padding-left:30px;font-size: 16px;line-height: 18px;color: #1881BF;font-weight: bold;}
    .otherStatistics .left_box .tit b{
        margin-right: 10px;
        position: relative;
        top:3px;
        width: 4px;
        display: inline-block;
        background: #1881BF;
        height: 18px;

    }
</style>
