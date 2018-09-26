<template>
    <div class="SubentryEnergyConsumptionBox">
        <h3 class="SubentryEnergyConsumptiontit">分项能耗数据校核</h3>
        <div style="padding: 0 30px">
            <searchBar :serBtName="serBtName" :serBtIco="serBtIco" :inSearchData="setSearchtool" @outData="searchClick" :btnList="searToolBtnList"></searchBar>
            <div class="SubentryEnergyConsumptionData">校对结果 :&nbsp;&nbsp;异常: <span class="alarm">0 </span>&nbsp;&nbsp;&nbsp; 总共: <span class="all">3588</span></div>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable  :formatter="formatter"
                        :cellclassname="cellclassname"
                        :headercellclassname="headercellclassname"
                        :inTableData="tableData"
                        :inAjax="ajax"
                        @selection="selectionChange">

            </dataTable>
        </div>
    </div>
</template>
<script>
    import searchBar from "../../components/common/searchBar.vue"
    import dataTable from "../../components/common/dataTable.vue"
    import PopupWindow from "../../components/common/popupWindow.vue"

    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            PopupWindow
        },
        data(){
            return{
                serBtName:"校 核",
                serBtIco:false,
                setSearchtool:[
                    {
                        type: "searSelect",
                        field: "searSelect",
                        name: "选择项目",
                        width:200,
                        options: [{
                            label: '热门城市',
                            options: [{
                                value: 'Shanghai',
                                label: '上海'
                            }, {
                                value: 'Beijing',
                                label: '北京'
                            }]
                        }, {
                            label: '城市名',
                            options: [{
                                value: 'Chengdu',
                                label: '成都'
                            }, {
                                value: 'Shenzhen',
                                label: '深圳'
                            }, {
                                value: 'Guangzhou',
                                label: '广州'
                            }, {
                                value: 'Dalian',
                                label: '大连'
                            }]
                        }],
                        ajax: {
                            url: 'http://192.168.1.21:8080/api/web/theme/getGreatTheme?token=123',
                            data: {},
                            key: 'name',
                            val: 'id'
                        }
                    },  {
                        type: "select",
                        field: "statys",
                        name: "选择分项",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    }, {
                        type: "dataPicker",
                        field: "timeDDD",
                        name: "选择时间",
                        width:250
                    }, {
                        type: "swich",
                        field: "statys",
                        name: "校对粒度",
                        options: [
                            {key: "次", value: "0"},
                            {key: "时", value: "1"},
                            {key: "天", value: "2"},
                            {key: "周", value: "3"},
                            {key: "月", value: "4"},
                            {key: "季", value: "5"},
                            {key: "年", value: "6"}
                        ]
                    },
                ],
                searToolBtnList: {
                    left: [
                        {label: '校 核', icon: '', className: 'bulueBg mr10', action: 'search'},
                        {label: '停 止', icon: '', className: 'grayBg mr10', action: 'output'},
                        {label: '导出数据', icon: 'el-icon-upload2', className: '', action: 'output'},
                    ],
                },
                tableData: {
                    tHead: [{
                        name: '分项编号',
                        field: "id",
                        options: [
                            {val: '未确认', claseName: 'red'},
                            {val: '确认', claseName: 'bule'}
                        ]
                    }, {
                        name: '分项名称',
                        field: "alarmType"
                    }, {
                        name: '电表类型',
                        field: "alarmlocal"
                    }, {
                        name: '当前位置',
                        field: "deviceName"
                    }, {
                        name: '校对值',
                        field: "alarmTime"
                    }, {
                        name: '时间',
                        field: "alarmLevel"
                    }, {
                        name: '异常信息',
                        field: "alarmLevel"
                    }],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看记录</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                    ],
                    isMultiple: false,
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                    data: {
                        pageNum: 1,
                        pageSize: 2
                    },
                },

            }
        },
        methods:{
            searchClick(outData) {
                console.log(outData);
            },
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["",'处理中','已恢复','已处理','已忽略','未确认']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.column.property == 'status') {
                    if (obj.row[obj.column.property] == "5") {
                        return "fontRed";
                    }
                    if (obj.row[obj.column.property] == "处理中") {
                        return "fontGreen";
                    }
                    if (obj.row[obj.column.property] == "已忽略") {
                        return "fontBlue";
                    }
                    if (obj.row[obj.column.property] == "已恢复") {
                        return "fontGray";
                    }
                }
                if (obj.columnIndex == "0") {
                    return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    return "pl20";
                }
            }
        },

    }
</script>
<style scoped>
    .SubentryEnergyConsumptionBox{
        background: #fff;
    }
    .SubentryEnergyConsumptionBox .SubentryEnergyConsumptiontit{
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        font-weight:600;
        padding: 0 0 0 30px;
        border: 1px #E5EEF3 solid;
        color: #2274A4;
        background: #F5F9F9;
    }
    .SubentryEnergyConsumptionBox .SubentryEnergyConsumptionData{
        position: relative;
        top: -8px;
        display: inline-block;
        font-size: 14px;
        color: #3A3A3A;
    }
    .SubentryEnergyConsumptionBox .SubentryEnergyConsumptionData span.alarm{
        color:#D94040 ;
    }
    .SubentryEnergyConsumptionBox .SubentryEnergyConsumptionData span.all{
        color:#188FBF ;
    }

</style>

