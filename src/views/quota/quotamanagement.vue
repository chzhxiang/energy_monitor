<template>
    <div class="quotaPage">
        <PopupPage @posdata="setDta" :tableData="getSetdata"></PopupPage>
        <div class="chartsBox clear">
            <div class="fl charts">
                <div class="topButtom clear">
                    <div class="fl switchData">
                        <span :class="{act:defTypeData ==1? true:false}" @click="switchData(1)"><i class="el-icon-location-outline"></i></span>
                        <span :class="{act:defTypeData ==2? true:false}" @click="switchData(2)"><i class="el-icon-bell"></i></span>
                        <span :class="{act:defTypeData ==3? true:false}" @click="switchData(3)"><i class="el-icon-service"></i></span>
                    </div>
                    <div class="fl yearSwitch">
                        日期 ：
                        <select value="">
                            <option value="2017">2017年</option>
                        </select>
                    </div>
                </div>
                <Charts :option="option"></Charts>
            </div>
            <div class="fr right-box">
                <CylindricalPlot></CylindricalPlot>
            </div>
        </div>
        <div class="quotaList">
            <div class="de-tit">
                <b></b> 项目定额详情
                <button><i class="el-icon-upload2"></i>导出定额</button>
            </div>
            <div style="padding-left: 50px">
                <TableList :tableTit="quotaTableTit" :tableData="quotaTabledata"></TableList>
            </div>
        </div>
    </div>
</template>
<script>
import TableList from '../../components/page/tableList.vue';
import Charts from '../../components/common/charts.vue';
import CylindricalPlot from '../../components/common/cylindricalPlot.vue';
import PopupPage from '../../components/common/popupPage.vue';


//import echarts from 'echarts';
export default {
    name: 'table',
    components: {
        Charts,
        TableList,
        CylindricalPlot,
        PopupPage
    },
    data() {
        return {
            //默认电水气字段
            defTypeData: 1, //1-电;2-水;3-气
            defTypeColor: ["", "#FEC068", "#4EB9DB", "#F49794"],
            defTypeColor1: ["", "#DCA972", "#769EB2", "#D28786"],
            //用能&定额默认字段
            used: [],
            def: [],
            //用能&定额图配置参数
            option: {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['用能', '超额', { name: "定额", height: 2 }],
                    itemWidth: 32,
                    itemHeight: 8,
                    right: 50
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 网格颜色
                            color: ['#E5EFF5']
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: 'm³',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // 网格颜色
                            color: ['#E5EFF5']
                        }
                    }
                }],
                series: []
            },
            quotaTableTit: [{
                    name: '日期',
                    field: "itemName",
                    width: 180,
                }, {
                    name: '1月',
                    field: "jan",
                }, {
                    name: '2月',
                    field: "feb"
                }, {
                    name: '3月',
                    field: "mar"
                }, {
                    name: '4月',
                    field: "apr"
                }, {
                    name: '5月',
                    field: "may"
                }, {
                    name: '6月',
                    field: "jun"
                }, {
                    name: '7月',
                    field: "jul"
                }, {
                    name: '8月',
                    field: "aug"
                }, {
                    name: '9月',
                    field: "sep"
                }, {
                    name: '10月',
                    field: "oct"
                }, {
                    name: '11月',
                    field: "nov"
                }, {
                    name: '12月',
                    field: "dec"
                }, {
                    name: '合计',
                    field: "total",
                },

            ],
            quotaTabledata: [{
                itemName: '定额（kWh）',
                jan: 30,
                feb: 20,
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
                total: 310

            }, {
                itemName: '实际能耗（kWh）',
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
                total: 310
            }, {
                itemName: '超定额（kWh）',
                jan: 30,
                feb: 20,
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
                total: 310
            }, {
                itemName: '超定额百分比',
                jan: 30,
                feb: 20,
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
                total: 310
            }, {
                itemName: '去年同比',
                jan: 30,
                feb: 20,
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
                total: 310
            }, {
                itemName: "环比",
                jan: 30,
                feb: 20,
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
                total: 310
            }],
            getSetdata: []
        }
    },
    created() {
        this.used = [5000, 5000, 5000, 16000, 7050, 5100, 12000, 6000, 5000, 13500, 2000, 12600];
        this.def = [5000, 10000, 9800, 6000, 7000, 5000, 12000, 6000, 5000, 14000, 2000, 2000];
        this.getQuotaTabledata(this.used, this.def);

        let getSetdata = [{
            itemName: '电（kWh）',
            jan: 13131,
            feb: 20,
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
            itemName: '水（m³）',
            jan: 30,
            feb: 20,
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
            itemName: '气（m³）',
            jan: 30,
            feb: 20,
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
        }]
        this.getdefSetdata(getSetdata);

    },
    mounted() {
        /*   var used = [5000, 5000, 5000, 16000, 7050, 5100, 12000,6000,5000,13500,2000,12600];
           var def = [5000, 10000, 9800, 6000, 7000, 5000, 12000,6000,5000,14000,2000,2000];
           this.getQuotaTabledata(used,def);
           console.log(111);
           console.log(this);*/

    },
    methods: {
        //处理定额及用能数据
        quotaDataProcessing(usd, defd) {
            var data = {};
            var maxHight = 0
            for (let i = 0; i < usd.length; i++) {
                if (usd[i] > maxHight) {
                    maxHight = usd[i];
                }
                if (defd[i] > maxHight) {
                    maxHight = defd[i];
                }
            }
            var used = [];
            var vldefd = [];
            var hidedef = [];
            var overhight = [];
            defd.forEach(function(v, i) {
                //用量计算
                let lessuse = maxHight * 0.02;
                used.push(usd[i] <= v ? usd[i] - lessuse : v - lessuse);

                //定额遮挡数据计算
                let hide = maxHight * 0.01;
                vldefd.push(hide)
                hidedef.push(parseInt(v - hide));

                //超额数据计算
                overhight.push(usd[i] > v ? usd[i] - v : "0")
            });
            data['used'] = used;
            data['def'] = vldefd;
            data['hidedef'] = hidedef;
            data['overhight'] = overhight;


            this.option.tooltip['formatter'] = function(params) {
                return params[0].name + '<br/> ' +
                    '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[3].color.colorStops[0].color + '"></span>' + params[3].seriesName + ' : ' + (params[3].value) + '<br/> ' +
                    '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[2].color + '"></span>' + params[2].seriesName + ' : ' + (parseInt(params[1].value) + (maxHight * 0.01)) + '<br/> ' +
                    '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[0].color + '"></span>' + params[0].seriesName + ' : ' + (parseInt(params[0].value) + parseInt(maxHight * 0.02) + parseInt(params[3].value));
            }
            return data;

        },
        getQuotaTabledata(usd, defd) { //渲染页面定额及用能图表
            var getData = this.quotaDataProcessing(usd, defd)

            this.option.series = [{
                    name: '用能',
                    type: 'bar',
                    barWidth: '50%',
                    z: 3,
                    data: getData.used,
                    barGap: "-100%",
                    itemStyle: {
                        color: this.defTypeColor[this.defTypeData],
                    }
                },
                {
                    name: '定额2',
                    type: 'bar',
                    barWidth: '50%',
                    data: getData.hidedef,
                    stack: "数据1",
                    itemStyle: {
                        color: "rgba(0,0,0,0)",

                    }
                },
                {
                    name: '定额',
                    type: 'bar',
                    barWidth: '50%',
                    stack: "数据1",
                    data: getData.def,
                    itemStyle: {
                        color: "#7D7D7D",

                    }
                },

                {
                    name: '超额',
                    type: 'bar',
                    barWidth: '50%',
                    stack: "数据1",
                    data: getData.overhight,
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [
                                    { offset: 0, color: '#D94040' },
                                    { offset: 1, color: this.defTypeColor1[this.defTypeData] }
                                ]
                            )
                        }
                    }
                }
            ]
            console.log(this.option.series);
        },
        switchData(val) {
            this.defTypeData = val;
            this.getQuotaTabledata(this.def, this.used)
        },
        getdefSetdata(data) {
            var it = this;
            data.forEach(function(v, i) {
                let total = 0;
                for (let item in v) {
                    if (item != "itemName") {
                        total += parseInt(v[item])
                    }
                }
                v["total"] = total
                it.getSetdata.push(v);
                console.log(it.getSetdata);
            })
        },
        setDta(data) {
            console.log(data);
        }

    },
    computed: {
        /*  //定额&超额数据处理
          quotaDataProcessing(usData,deData) {

          }*/


    }
}

</script>
<style scoped>
.content {
    background: #f3f3f3;
    min-width: 1000px;
}

.quotaPage {
    background: #fff;
    padding-right: 60px;
}

.topButtom {
    padding-left: 30px;
}

.switchData {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 87px;
    height: 24px;
    border: 1px #909A9A solid;
    border-radius: 10px;
    overflow: hidden;
}

.switchData span {
    cursor: pointer;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    width: 33%;
    height: 100%;
    border-right: 1px #909A9A solid;
}

.switchData span.act {
    background: #1881BF;
    color: #fff;
}

.switchData span:last-of-type {
    border-right: none
}

.yearSwitch {
    font-size: 14px;
    color: #838383;
    height: 24px;
    line-height: 24px;
    margin-left: 30px;
}

.yearSwitch select {
    cursor: pointer;
    padding-left: 5px;
    outline: none;
    height: 100%;
    line-height: 24px;
    font-size: 15px;
    width: 78px;
    border: 1px #A1A1A1 solid;
    border-radius: 15px;
}

.chartsBox {
    padding-top: 30px;
}

.charts {
    width: 63%;
    height: 360px;
}

.quotaList {}

.de-tit {
    position: relative;
    color: #1881BF;
    font-size: 16px;
    padding-left: 8px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 25px;
    padding-left: 50px;
}

.de-tit b {
    position: absolute;
    top: 0;
    left: 30px;
    width: 4px;
    display: inline-block;
    background: #1881BF;
    height: 21px;
}

.de-tit button {
    outline: none;
    position: absolute;
    background: #fff;
    border: 1px #a1a1a1 solid;
    border-radius: 15px;
    font-size: 14px;
    color: #3a3a3a;
    padding: 2px 13px;
    margin-left: 20px;
    cursor: pointer;
}

.el-table td,
.el-table th.is-leaf {
    border: none;
}

.el-table td {
    font-size: 12px;
    color: #838383;
}

.el-table th.is-leaf {
    background: rgba(241, 241, 241, 1);
    font-size: 14px;
    color: #252525;
}

.right-box {
    width: 35%;
}




/*table{
        border-color: red!important;
    }*/

</style>
