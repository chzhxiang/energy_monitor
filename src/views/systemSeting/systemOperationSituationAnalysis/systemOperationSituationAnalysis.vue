<template>
    <div class="page_container">
        <h2 class="page_title">服务器状态</h2>
        <div class="page_body">
            <!-- <el-row>
                <el-col :span="14"> -->
                    <div class="page_left">
                        <div class="server_charts">
                            <el-row>
                                <el-col :span="8">
                                    <h3>CPU使用率</h3>
                                    <div class="charts" ref="charts1"></div>
                                    <p>{{serveData.cpucoreCount}} 核心</p>
                                </el-col>
                                <el-col :span="8">
                                    <h3>内存使用率</h3>
                                    <div class="charts" ref="charts2"></div>
                                    <p>{{serveData.memory.use + serveData.memory.unit}} / {{serveData.memory.total + serveData.memory.unit}}</p>
                                </el-col>
                                <el-col :span="8">
                                    <h3>磁 盘</h3>
                                    <div class="charts" ref="charts3"></div>
                                    <p>{{serveData.disk.use + serveData.disk.unit}} / {{serveData.disk.total + serveData.disk.unit}}</p>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="network_flow">
                            <h2>网络流量</h2>
                            <table class="my_table">
                                <tr>
                                    <th>上行速度</th>
                                    <td>{{serveData.upNetwork.use + serveData.upNetwork.usageUnit}}</td>
                                    <th>下行速度</th>
                                    <td>{{serveData.downNetwork.use + serveData.downNetwork.usageUnit}}</td>
                                </tr>
                                <tr>
                                    <th>总发送</th>
                                    <td>{{serveData.upNetwork.total + serveData.upNetwork.totalUnit}}</td>
                                    <th>总接收</th>
                                    <td>{{serveData.downNetwork.total + serveData.downNetwork.totalUnit}}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="charts4" ref="charts4"></div>
                    </div>
                <!-- </el-col>
                <el-col :span="10"> -->
                    <div class="page_right">
                        <table class="my_table">
                            <tr>
                                <th>服务器标识</th>
                                <td>{{serveData.params.serverId}}</td>
                            </tr>
                            <tr>
                                <th>服务器操作系统</th>
                                <td>{{serveData.params.serverOS}}</td>
                            </tr>
                            <tr>
                                <th>服务器时间</th>
                                <td>{{serveData.params.serverTime}}</td>
                            </tr>
                            <tr>
                                <th>服务器语音</th>
                                <td>{{serveData.params.serverLan}}</td>
                            </tr>
                            <tr>
                                <th>服务器解译引擎</th>
                                <td>{{serveData.params.routeEngine}}</td>
                            </tr>
                            <tr>
                                <th>可用空间</th>
                                <td><span class="red">{{serveData.params.availDisk}}</span> G</td>
                            </tr>
                            <tr>
                                <th>服务器端口</th>
                                <td>{{serveData.params.serverPort}}</td>
                            </tr>
                        </table>

                        <table class="my_table" style="margin-top: 30px;">
                            <tr>
                                <th rowspan="3">
                                    内存使用状况
                                </th>
                                <td>
                                    <p>物理内存：共<span class="red">{{serveData.physicalCache.total}}</span>{{serveData.physicalCache.unit}}, 已用<span class="red">{{serveData.physicalCache.use}}</span> {{serveData.physicalCache.unit}} 空闲 <span class="red">{{serveData.physicalCache.left}}</span> {{serveData.physicalCache.unit}}, 使用率 <span class="red">{{serveData.physicalCache.rate}}</span>%</p>
                                    <el-progress :percentage="serveData.physicalCache.rate" color="#6BBF51" :show-text="false"></el-progress>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Cache内存：共 {{serveData.cache.total}} {{serveData.cache.unit}}, 真实内存使用率 <span class="red">{{serveData.cache.rate}}</span>%</p>
                                    <el-progress :percentage="serveData.cache.rate" color="#6BBF51" :show-text="false"></el-progress>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>SAWP：共{{serveData.swap.total}} {{serveData.swap.unit}}，已用{{serveData.swap.use}} {{serveData.swap.unit}} 空闲{{serveData.swap.left}}{{serveData.swap.unit}}，使用率 <span class="red">{{serveData.swap.rate}}</span>%</p>
                                    <el-progress :percentage="serveData.swap.rate" color="#6BBF51" :show-text="false"></el-progress>
                                </td>
                            </tr>
                        </table>
                    </div>
                <!-- </el-col>
            </el-row> -->
            
            
        </div>
    </div>
</template>
<script>
    import echarts from "echarts"
    export default{
        data(){
            return {
                serverState:[],  // 仪表盘数据
                serveData:{// 服务器状态数据
                    cache: {},
                    cpu: {},
                    cpucoreCount: {},
                    disk: {},
                    downNetwork: {},
                    memory: {},
                    params: {},
                    physicalCache: {},
                    realNetwork: {},
                    swap: {},
                    upNetwork: {}
                }, 
                lineTimes: [],  // echarts 曲线图的时间刻度
                lineDataUp: [],  // echars 曲线图的 上行数据
                lineDataDown: [],  // echars 曲线图的 下行数据
            }
        },
        methods:{
            initGauge(){
                for(let i = 1; i <= 3; i++){
                    let myChart = echarts.init(this.$refs['charts' + i]);
                    // 绘制图表
                    myChart.setOption({
                        backgroundColor: "#ffffff",
                        color: ["#37A2DA", "#32C5E9", "#67E0E3"],
                        series: [{
                            name: '业务指标',
                            type: 'gauge',
                            // 仪表半径
                            radius: 96,
                            // 仪表标题
                            title: {
                                fontSize: 12
                            },
                            // 仪表详情
                            detail: {
                                formatter: '{value}%',
                                fontSize: 12,
                                // color: 'red'
                            },
                            // 仪表盘指针
                            pointer:{
                                width: 4
                            },
                            // 仪表盘轴线样式
                            axisLine: {
                                lineStyle: {
                                    width: 10,
                                    shadowBlur: 0,
                                    color: [
                                        [0.2, '#91C7AE'],
                                        [0.8, '#63869E'],
                                        [1, '#C23531']
                                    ]
                                }
                            },
                            // 刻度标签
                            axisLabel: {
                                distance: -15,  //标签与刻度线的距离
                            },
                            // 分割线样式
                            splitLine: {
                                show: false
                            },
                            // 刻度样式
                            axisTick:{
                                splitNumber: 1
                            },
                            data: [{
                                value: this.serverState[i-1],
                                name: '使用率',
                            }]

                        }]
                    })
                }
            },
            initLine(){
                let myChart = echarts.init(this.$refs.charts4);
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '接口流量实时',
                        x: 'center',
                        textStyle:{
                            fontSize: 14
                        }
                    },
                    legend: {
                        align: 'right',
                        top: 20,
                        right: 70,
                        data:['上行','下行']
                    },
                    xAxis: {
                        type: 'category',
                        name: '时间',
                        boundaryGap: false,
                        data: this.lineTimes
                    },
                    yAxis: {
                        type: 'value',
                        name : '单位：KB/s',
                    },
                    series: [{
                        name: "上行",
                        data: this.lineDataUp,
                        type: 'line',
                        symbol: 'none',  // 标记的图形
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#f1a123c9'
                            }
                        },
                        lineStyle:{
                            color: '#f1a123c9'
                        },
                        // 区域填充样式
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#f1a123c9'
                                }, {
                                    offset: 1,
                                    color: '#ffe'
                                }])
                            }
                        },
                    },{
                        name: "下行",
                        data: this.lineDataDown,
                        type: 'line',
                        symbol: 'none',  // 标记的图形
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#70B4D5'
                            }
                        },
                        lineStyle:{
                            color: '#70B4D5'
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#70B4D5'
                                }, {
                                    offset: 1,
                                    color: '#ffe'
                                }])
                            }
                        },
                    }]
                })
            },
            getData(){
                // 获取数据
                this.$axios.post("/api/admin/monitor/getServerStatus", {}).then((res) => {
                    if(res.code == 200){
                        this.serveData = res.data;
                        // 仪表图数据
                        this.serverState = [this.serveData.cpu.rate, this.serveData.memory.rate, this.serveData.disk.rate]
                        console.log(this.serveData);
                        // 曲线图数据
                        this.lineTimes = [];
                        this.lineDataUp = [];
                        this.lineDataDown = [];
                        this.serveData.realNetwork.forEach(item => {
                            this.lineTimes.push(item.time);
                            this.lineDataUp.push(item.up);
                            this.lineDataDown.push(item.down);
                        })
                        
                        // 初始化echarts图标
                        this.initGauge();
                        this.initLine();
                    }
                }).catch(e => {
                    console.log("失败");
                })
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>
<style lang="scss" scoped>
@import "../../../assets/css/style_lm.scss";

.page_container{
    min-width: 1680px;
}
.page_left, .page_right{
    float: left;
    // padding: 0 46px;
    box-sizing: border-box;
}

.my_table{
    border-collapse: 0;
    border-spacing: 0;
    font-size: 14px;
    th, td{
        height: 43px;
        line-height: 43px;
        border: none;
        color: #555555;
    }
    th{
        background: #F1F1F1;
        width: 116px;
        font-weight: 100;
    }
    td{
        background: #F7FBFC;
        width: 196px;
        padding-left: 44px;
    }
}

.page_left{
    .server_charts{
        margin-top: 10px;

        h3{
            font-size: 14px;
            text-align: center;
            color: #105C89;
            font-weight: 400;
        }

        p{
            font-size: 14px;
            color: #3A3A3A;
            text-align: center;
            margin-top: -20px;
            z-index: 3;
            position: relative;
        }

        .charts{
            width: 222px;
            height: 215px;
            margin: 0 auto;
            z-index: 1;
            position: relative;
        }
    }

    .network_flow{
        margin-top: 30px;
        h2{
            float: left;
            width: 140px;
            text-align: center;
            font-size: 14px;
            line-height: 86px;
        }
    }

    .charts4{
        width: 840px;
        height: 360px;
        margin-top: 30px;
    }
}

.page_right{
    padding-left: 50px;
    float: left;

    th{
        width: 116px;
        text-align: left;
        padding-left: 20px;
        font-size: 12px;
    }
    td{
        width: 570px;
        padding:0 20px;
        font-size: 12px;
        height: 65px;
    }
}
</style>
