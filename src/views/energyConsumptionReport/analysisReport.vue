<template>
    <div class="AnalysisReportBox">
        <h3 class="AnalysisReporttit">分析报告</h3>
        <div style="padding: 0 30px">
            <SearchBar :serBtName="serBtName" :inSearchData="setSearchtool" @outData="searchClick"></SearchBar>
            <div class="AnalysisTemplateManagementBt">模版管理</div>
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
    import SearchBar from "../../components/common/searchBar.vue"
    import dataTable from "../../components/common/dataTable.vue"
    import PopupWindow from "../../components/common/popupWindow.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            dataTable,
            PopupWindow
        },
        data(){
            return{
                serBtName:"查询",
                setSearchtool:[
                    {
                        type: "select",
                        field: "statys",
                        name: "报告类型",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "statys",
                        name: "时间",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                ],
                tableData: {
                    tHead: [{
                        name: '报告类型',
                        field: "id",
                        options: [
                            {val: '未确认', claseName: 'red'},
                            {val: '确认', claseName: 'bule'}
                        ]
                    }, {
                        name: '文件名称',
                        field: "alarmType"
                    }, {
                        name: '生成报告时间',
                        field: "alarmlocal"
                    }],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>预览</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下载</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        }
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
    .AnalysisReportBox{
        background: #fff;
    }
    .AnalysisReporttit{
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
    .AnalysisReportBox .AnalysisTemplateManagementBt{
        margin-left: 40px;
        cursor: pointer;
        position: relative;
        top:-8px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        box-sizing: border-box;
        background: #1881BF;
        width: 90px;
        height: 28px;
        line-height: 28px;
        display: inline-block;
        border-radius: 15px;
    }
</style>

