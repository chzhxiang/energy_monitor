<template>
    <div class="AnalysisOfUserBehaviors" >
        <div class="AnalysisOfUserBehaviorsBox" >
            <h3 class="AnalysisOfUserBehaviorsTit">用户行为分析</h3>
            <div class="AnalysisOfUserBehaviorsCont">
                <div style="padding-left: 30px;">
                    <searchBar :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div class="chartsBox clear">
                    <div class="leftBox fl">
                        <div class="chartsItem" style="margin-left: 13%">
                            <CountPieChart :option="setOption"></CountPieChart>
                        </div>
                    </div>
                    <div class="rightBox fr">
                        <div class="chartsItem">
                            <Charts :option="scatterOption"></Charts>
                        </div>
                    </div>
                </div>
                <div class="dataList">
                    <div style="margin-bottom: 5px;cursor:pointer;" class="clear"> <span style="padding:2px 15px;font-size:14px;color:#3A3A3A;border: 1px rgba(203,208,220,1) solid;border-radius: 15px" class="fr"><i class="el-icon-upload2"></i> 导 出</span></div>
                    <dataTable  :inTableData="tableData"
                                :inAjax="ajax"
                                :ispagination="ispagination"
                                @selection="selectionChange">

                    </dataTable>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import searchBar from "../../components/common/searchBar"
    import CountPieChart from "../../components/common/countPieChart.vue";
    import Charts from "../../components/common/charts.vue";
    import dataTable from "../../components/common/dataTable";

    export default {
        name: 'AnalysisOfUserBehaviors',
        components: {
            searchBar,
            CountPieChart,
            Charts,
            dataTable
        },
        data() {
            return {
                setSearchtool: [
                    {
                        type: "select",
                        field: "type",
                        name: "查看类别",
                        width: 110,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "项目类型",
                        width: 110,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "dataPicker",
                        field: "timeDDD",
                        name: "时间筛选",
                        width:250
                    },
                ],
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                },
                setOption:{
                    title : {
                        text: '888',
                        textStyle:{
                            color:'#373737',
                            fontSize:28,
                            fontWeight:'normal'
                        },
                        subtext: '设置告警总数',
                        subtextStyle:{
                          color:"#444",
                            fontSize:14,

                        },
                        x:'center',
                        y:'40%',
                    },
                    /*tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },*/
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['48%', '80%'],
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
                                    value:200,
                                    name:'项目定额',
                                    itemStyle:{
                                        color:"#d183f4"
                                    }
                                },
                                {
                                    value:300,
                                    name:'告警预览',
                                    itemStyle:{
                                        color:"#f7a056"
                                    }
                                },
                                {
                                    value:300,
                                    name:'能耗查询',
                                    itemStyle:{
                                        color:"#ade360"
                                    }
                                },
                                {
                                    value:300,
                                    name:'付费查询',
                                    itemStyle:{
                                        color:"#4cace4"
                                    }
                                },
                                {
                                    value:400,
                                    name:'表计监测',
                                    itemStyle:{
                                        color:"#f98bb8"
                                    }
                                },
                                {
                                    value:450,
                                    name:'负荷预测',
                                    itemStyle:{
                                        color:"#8d94f4"
                                    }
                                },
                                {
                                    value:300,
                                    name:'自定义告警',
                                    itemStyle:{
                                        color:"#40c7b4"
                                    }
                                }
                            ]
                        }
                    ]
                },
                scatterOption:{
                    grid: [
                        {
                            top:'10%',
                            left:'15%',
                            right:'15%',
                            button:'0%'
                        },
                    ],
                    tooltip: {
                        formatter: 'Group {a}: ({c})'
                    },
                    xAxis: [
                        {
                            name:"平均停留时长",
                            splitLine: {
                                show:false,
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                        }
                    ],
                    yAxis: [
                        {
                            name:"访问次数",
                            splitLine: {
                                show:false,
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                        },
                    ],
                    series: [
                        {
                            name: 'I',
                            type: 'scatter',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            data:  [
                                [1000.0, 800.04],
                                [800.0, 600.95],
                                [1300.0, 700.58],
                                [900.0, 800.81],
                                [1100.0, 800.33],
                                [1400.0, 900.96],
                                [600.0, 700.24],
                                [400.0, 400.26],
                                [1200.0, 1000.84],
                                [700.0, 400.82],
                                [500.0, 500.68]
                            ],
                            itemStyle:{
                                color:"#2274A4"
                            },
                            symbolSize:8,
                            markLine: {
                                animation: true,
                                label: {
                                    normal: {
                                        formatter: 'y = 0.5 * x + 3',
                                        textStyle: {
                                            align: 'right'
                                        }
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        type: 'dashed',
                                        color:'#2274A4'

                                    }
                                },
                                tooltip: {
                                    formatter: 'y = 0.5 * x + 3'
                                },
                                data: [[{
                                    coord: [0, 0],
                                    symbol: 'none'
                                }, {
                                    coord: [900, 1200],
                                    symbol: 'none'
                                }],[{
                                    coord: [0, 0],
                                    symbol: 'none'
                                }, {
                                    coord: [1200, 1200],
                                    symbol: 'none'
                                }]]
                            }
                        },
                    ]
                },
                ispagination:false,
                tableData: {
                    tHead: [{
                        name: "页面名称",
                        field: "id",
                    }, {
                        name: '医院',
                        field: "name"
                    }, {
                        name: '商场',
                        field: "realname"
                    }, {
                        name: '学校',
                        field: "status"
                    }, {
                        name: '写字楼',
                        field: "status"
                    }, {
                        name: '工厂',
                        field: "status"
                    }],
                    tData: [],
                    total: 0,
                    isMultiple: false,
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                },
            }
        },
        methods:{
            searBtclick(oData) {
                if (oData.action == "add") {
                    this.isShowPopup.addbranch = true;
                } else if (oData.action == "expression") {
                    this.isShowPopup.expression = true;
                }
            },
            selectionChange(selection) {
                console.log(selection);
            },

        }

    }
</script>
<style scoped>
    .AnalysisOfUserBehaviors{
        background: #f3f3f3;
    }
    .AnalysisOfUserBehaviors .AnalysisOfUserBehaviorsBox{
        background: #fff;
        width: 100%;
    }
    .AnalysisOfUserBehaviors .AnalysisOfUserBehaviorsBox .AnalysisOfUserBehaviorsTit{
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        background: #F5F9F9;
        font-size: 16px;
        color: #2274A4;
        padding-left: 30px;
        border: 1px #e2f0f1 solid;
    }
    .AnalysisOfUserBehaviorsCont{

    }
    .AnalysisOfUserBehaviorsCont .chartsBox{

    }
    .AnalysisOfUserBehaviorsCont .chartsBox .leftBox{
        padding-top: 30px;
        width: 50%;
    }
    .AnalysisOfUserBehaviorsCont .chartsBox .leftBox .chartsItem{
        height: 300px;
        width: 440px;
    }
    .AnalysisOfUserBehaviorsCont .chartsBox .rightBox{
        width: 49%;
    }
    .AnalysisOfUserBehaviorsCont .chartsBox .rightBox .chartsItem{
        height: 400px;
        width: 100%;
    }
    .searchtoolBox{
        padding-bottom: 0!important;
    }
    .AnalysisOfUserBehaviorsCont .dataList{
        padding: 0 30px;
    }
</style>
