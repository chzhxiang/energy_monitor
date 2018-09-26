<template>
    <div class="AlarmAnalysis" >
        <div class="AlarmItemBox" >
            <h3 class="AlarmTit">告警统计</h3>
            <div class="iAlarmItems clear">
                <div class="chartsBar fl">
                    <searchBarChart :getOption="countBarOption"></searchBarChart>
                </div>
                <div class="alarmNumbers fr">
                    <h3 class="alarmNumbersTit"><span></span>告警次数与百分比</h3>
                    <div class="CountPieChartBox fl">
                        <CountPieChart :option="countpieOption" ></CountPieChart>
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px" class="AlarmItemBox" >
            <h3 class="AlarmTit">告警分析</h3>
            <div class="iAlarmItems clear">
                <div class="chartsBar fl">
                    <searchBarChart :getOption="analysisBarOption"></searchBarChart>
                </div>
                <div class="alarmNumbers fr">
                    <h3 class="alarmNumbersTit"><span></span>告警次数与百分比</h3>
                    <div class="CountPieChartBox fl">
                        <CountPieChart :option="analysispieOption"></CountPieChart>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import searchBarChart from "../../components/common/searchBarChart.vue";
    import CountPieChart from "../../components/common/countPieChart.vue";

    export default {
        name: 'dashboard',
        data() {
            return {
                countBarOption:
                    {
                    color: ['#65ca84', '#73b9dd', '#e7c156', '#f58e6b', '#F1726b'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    dataZoom: [{
                        type: 'slider',
                        filterMode: 'weakFilter',
                        showDataShadow: false,
                        bottom: 0,
                        height: 16,
                        borderColor: 'transparent',
                        backgroundColor: '#e4eff5',
                        fillerColor: "#79b9df",
                        handleSize: 20,
                        handleStyle: {
                            shadowBlur: 6,
                        },
                        labelFormatter: '',
                        startValue: 0,
                        endValue: 5,
                        zoomLock: false,
                        bottom: '9%'
                    }],
                    legend: {
                        data: ['一级', '二级', '三级', '四级', '五级'],
                        itemWidth: 9,
                        itemHeight: 9,
                        itemGap: 20,
                        right: 45
                    },
                    grid: {
                        top: '7%',
                        left: '3%',
                        right: '4%',
                        bottom: '21%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['2017-9', '2017-10', '2017-11', '2017-12', '2018-1', '2018-2', '2018-3', '2018-4', '2018-5'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                // 网格颜色
                                color: ['#E5EFF5']
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        },
                        axisLabel: {
                            color: "#3A3A3A",
                            interval: 0
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '次数',
                        nameTextStyle: {
                            color: '#838383'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                // 网格颜色
                                color: ['#E5EFF5']
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#E5EFF5'
                            }
                        },
                        axisLabel: {
                            color: "#3A3A3A",
                            interval: 0
                        },
                    }],
                    series: [
                        {
                            name: '五级',
                            barGap: 0,
                            type: 'bar',
                            data: [98, 77, 101, 99, 40, 98, 77, 101, 99, 40]
                        },
                        {
                            name: '四级',
                            type: 'bar',
                            data: [98, 77, 101, 99, 40, 98, 77, 101, 99, 40]
                        },
                        {
                            name: '三级',
                            type: 'bar',
                            data: [150, 232, 201, 154, 190, 150, 232, 201, 154, 190]
                        },
                        {
                            name: '二级',
                            type: 'bar',
                            data: [220, 182, 191, 234, 290, 220, 182, 191, 234, 290]
                        },
                        {
                            name: '一级',
                            type: 'bar',
                            data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390]
                        },


                    ]

                },
                countpieOption:{
                /*tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },*/
                title : {
                    text: '888',
                        textStyle:{
                        color:'#3A3A3A',
                            fontSize:30,
                            fontWeight:'normal'
                    },
                    subtext: '总告警数',
                        subtextStyle:{
                        color:"#3A3A3A",
                            fontSize:14,

                    },
                    x:'center',
                        y:'43%',
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['29%', '46%'],
                            itemStyle:{
                                borderColor:"rgba(255,255,255,1)",
                                borderWidth:8,
                            },
                            label: {
                                normal: {
                                    formatter: '{per|{d}%} \n{hr|}\n  {b|{b}}',
                                    align:'right',
                                    rich: {
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 1,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 14,
                                            color:"#000",
                                            lineHeight:20
                                        },
                                        per: {
                                            color: '#000',
                                            fontSize:16,
                                            lineHeight:20


                                        }
                                    }
                                }
                            },
                            labelLine:{

                            },
                            data:[
                                {
                                    value:300,
                                    name:'三级告警',
                                    itemStyle:{
                                        color:"#e7bf5f"
                                    }
                                },
                                {
                                    value:500,
                                    name:'四级告警',
                                    itemStyle:{
                                        color:"#74b8dd"
                                    }
                                },
                                {
                                    value:350,
                                    name:'五级告警',
                                    itemStyle:{
                                        color:"#67cb82"
                                    }
                                },
                                {
                                    value:150,
                                    name:'一级告警',
                                    itemStyle:{
                                        color:"#ee6e6d"
                                    }
                                },
                                {
                                    value:400,
                                    name:'二级告警',
                                    itemStyle:{
                                        color:"#f19469"
                                    }
                                }
                            ]
                        }
                    ]
                },
                analysisBarOption:
                    {
                        color: ['#65ca84', '#73b9dd', '#e7c156', '#f58e6b', '#F1726b'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        dataZoom: [{
                            show:false,
                            type: 'slider',
                            filterMode: 'weakFilter',
                            showDataShadow: false,
                            bottom: 0,
                            height: 16,
                            borderColor: 'transparent',
                            backgroundColor: '#e4eff5',
                            fillerColor: "#79b9df",
                            handleSize: 20,
                            handleStyle: {
                                shadowBlur: 6,
                            },
                            labelFormatter: '',
                            startValue: 0,
                            endValue: 5,
                            zoomLock: false,
                            bottom: '9%'
                        }],
                        legend: {
                            data: ['一级', '二级', '三级', '四级', '五级'],
                            itemWidth: 9,
                            itemHeight: 9,
                            itemGap: 20,
                            right: 45
                        },
                        grid: {
                            top: '7%',
                            left: '3%',
                            right: '4%',
                            bottom: '21%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'category',
                            data: ['参数超限', '设备故障', '运行管理', '能效偏低', '配电安全', '能耗异常'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    // 网格颜色
                                    color: ['#E5EFF5']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                color: "#3A3A3A",
                                interval: 0
                            },
                        }],
                        yAxis: [{
                            type: 'value',
                            name: '次数',
                            nameTextStyle: {
                                color: '#838383'
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    // 网格颜色
                                    color: ['#E5EFF5']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#E5EFF5'
                                }
                            },
                            axisLabel: {
                                color: "#3A3A3A",
                                interval: 0
                            },
                        }],
                        series: [
                            {
                                name: '五级',
                                barGap: 0,
                                type: 'bar',
                                data: [98, 77, 101, 99, 40, 98]
                            },
                            {
                                name: '四级',
                                type: 'bar',
                                data: [98, 77, 101, 99, 40, 98]
                            },
                            {
                                name: '三级',
                                type: 'bar',
                                data: [150, 232, 201, 154, 190, 150]
                            },
                            {
                                name: '二级',
                                type: 'bar',
                                data: [220, 182, 191, 234, 290, 220]
                            },
                            {
                                name: '一级',
                                type: 'bar',
                                data: [320, 332, 301, 334, 390, 320]
                            },


                        ]

                    },
                    analysispieOption:{
                    /*tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },*/
                    title : {
                        text: '888',
                        textStyle:{
                            color:'#3A3A3A',
                            fontSize:30,
                            fontWeight:'normal'
                        },
                        subtext: '设置告警总数',
                        subtextStyle:{
                            color:"#3A3A3A",
                            fontSize:14,

                        },
                        x:'center',
                        y:'43%',
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['29%', '46%'],
                            itemStyle:{
                                borderColor:"rgba(255,255,255,1)",
                                borderWidth:8,
                            },
                            label: {
                                normal: {
                                    formatter: '{per|{d}%} \n{hr|}\n  {b|{b}}',
                                    align:'right',
                                    rich: {
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 1,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 14,
                                            color:"#000",
                                            lineHeight:20
                                        },
                                        per: {
                                            color: '#000',
                                            fontSize:16,
                                            lineHeight:20


                                        }
                                    }
                                }
                            },
                            labelLine:{

                            },
                            data:[
                                {
                                    value:150,
                                    name:'参数超限',
                                    itemStyle:{
                                        color:"#d1a0f7"
                                    }
                                },
                                {
                                    value:300,
                                    name:'设备故障',
                                    itemStyle:{
                                        color:"#f7a056"
                                    }
                                },
                                {
                                    value:300,
                                    name:'配电安全',
                                    itemStyle:{
                                        color:"#e3e375"
                                    }
                                },
                                {
                                    value:350,
                                    name:'能耗异常',
                                    itemStyle:{
                                        color:"#f98bb8"
                                    }
                                },
                                {
                                    value:300,
                                    name:'能效偏低',
                                    itemStyle:{
                                        color:"#8d94f4"
                                    }
                                },
                                {
                                    value:150,
                                    name:'运行管理',
                                    itemStyle:{
                                        color:"#40c7b4"
                                    }
                                }
                            ]
                        }
                    ]
                },
            }
        },
        components: {
            searchBarChart,
            CountPieChart
        },
        methods:{

        }

    }
</script>
<style scoped>
    .AlarmAnalysis{
        background: #f3f3f3;
    }
    .AlarmAnalysis .AlarmItemBox{
        background: #fff;
        width: 100%;
    }
    .AlarmAnalysis .AlarmItemBox .AlarmTit{
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        background: #F5F9F9;
        font-size: 16px;
        color: #2274A4;
        padding-left: 30px;
        border: 1px #e2f0f1 solid;
    }
    .AlarmAnalysis .AlarmAnalysis .AlarmItemBox .iAlarmItems{
        width: 100%;
        border: 1px red solid;
    }
    .AlarmAnalysis .chartsBar{
        width: 63.5%;
        height: 526px;
    }
    .AlarmAnalysis .alarmNumbers{
        padding-top: 30px;
        width: 30%;
        height: 100%;
        height: 526px;
    }
    .AlarmAnalysis .alarmNumbers .alarmNumbersTit{
        padding-left: 14px;
        position: relative;
        font-size: 16px;
        color: #1881BF;
    }
    .AlarmAnalysis .alarmNumbers .alarmNumbersTit span{
        position: absolute;
        top: 2px;
        left: 0;
        display: inline-block;
        width: 4px;
        background: #1881BF;
        height: 18px;
    }
    .AlarmAnalysis .alarmNumbers .CountPieChartBox{
        width: 100%;
        height: calc(100% - 21px)
    }
</style>
