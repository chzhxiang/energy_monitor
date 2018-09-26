<template>
    <div class="SubitemInfoBox">
        <h3 class="SubitemInfotit">分项信息校核</h3>
        <div style="padding: 0 30px">
            <searchBar :serBtName="serBtName" :inSearchData="setSearchtool" @outData="searchClick" :btnList="searToolBtnList"></searchBar>
            <div class="SubitemInfoOutputBt"><i class="el-icon-upload2"></i>导出数据</div>
            <div class="SubitemInfoData">总共 : 65 / 异常 : <span>50</span></div>
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
                serBtName:"校核",
                setSearchtool:[
                    {
                        type: "searSelect",
                        field: "searSelect",
                        name: "选择项目",
                        width:260,
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
                    },
                ],
                searToolBtnList: {
                    left: [
                        {label: '校 核', icon: '', className: 'bulueBg mr40', action: 'search'},
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
                        name: '分项表达式',
                        width:500,
                        field: "alarmlocal"
                    }, {
                        name: '异常信息',
                        field: "deviceName"
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
    .SubitemInfoBox{
        background: #fff;
    }
    .SubitemInfotit{
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
    .SubitemInfoBox .SubitemInfoOutputBt{
        cursor: pointer;
        padding-left:10px;
        position: relative;
        top:-8px;
        font-size: 14px;
        color: #3A3A3A;
        box-sizing: border-box;
        width: 102px;
        height: 28px;
        line-height: 28px;
        display: inline-block;
        border: 1px #838383 solid;
        border-radius: 15px;
    }
    .SubitemInfoBox .SubitemInfoOutputBt i{
        margin-right: 3px;
    }
    .SubitemInfoBox .SubitemInfoData{
        margin-left: 40px;
        position: relative;
        top: -8px;
        display: inline-block;
        font-size: 14px;
        color: #3A3A3A;
    }
    .SubitemInfoBox .SubitemInfoData span{
        color:#D94040 ;
    }
</style>

