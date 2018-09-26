<template>
    <div class="alarmViewBox">
        <h3 class="alarmViewtit">告警概览</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar style="padding-right: 120px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <DataTable  :formatter="formatter"
                        :cellclassname="cellclassname"
                        :headercellclassname="headercellclassname"
                        :inTableData="tableData"
                        :inAjax="ajax"
                        @selection="selectionChange">

            </DataTable>
        </div>
        <el-dialog class="popupWindow" title="忽略"  :visible.sync="isShowPopup.IgnoreInfor" width="420px">
            <ignoreInfor contentText="是否确认忽略？" @isHide="isShowPopup.IgnoreInfor = false" @flushList="falush=new Date()"></ignoreInfor>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../components/common/searchBar.vue"
    import DataTable from "../../components/common/dataTable.vue"
    import ignoreInfor from "../../components/common/ignoreInfor.vue"

    export default {
        name: 'table',
        components: {
            searchBar,
            DataTable,
            ignoreInfor
        },
        data(){
            return{
                isShowPopup: {
                    IgnoreInfor: false
                },
                setSearchtool:[
                    {
                        type: "select",
                        field: "type",
                        name: "告警类型",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "ssssstype",
                        name: "设备名称",
                        width:100,
                        options: [],
                        ajax: {
                            url: 'http://192.168.1.21:8080/api/web/theme/getGreatTheme?token=123',
                            data: {},
                            key: 'name',
                            val: 'id'
                        }
                    },
                    {
                        type: "searSelect",
                        field: "searSelect",
                        name: "告警级别",
                        width:100,
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
                    {
                        type: "dataPicker",
                        field: "timeDDD",
                        name: "告警时间",
                        width:250
                    },
                    {
                        type: "select",
                        field: "statys",
                        name: "状态",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                ],
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg mr30', action: 'search'},
                    ],
                    right: [
                        {label: '批量忽略', icon: 'el-icon-more-outline', className: 'bulueBg', action: 'ignore'},
                    ]
                },
                tableData: {
                    tHead: [{
                        name: '序号',
                        field: "id",
                        options: [
                            {val: '未确认', claseName: 'red'},
                            {val: '确认', claseName: 'bule'}
                        ]
                    }, {
                        name: '告警类型',
                        field: "alerttype"
                    }, {
                        name: '告警位置',
                        field: "alertaddress"
                    }, {
                        name: '设备名称',
                        field: "devicename"
                    }, {
                        name: '告警时间',
                        field: "alerttime"
                    }, {
                        name: '告警级别',
                        field: "alertlevel"
                    }, {
                        name: '状态',
                        field: "status"
                    }],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>详情</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                        {type: 'hulve', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>忽略</span>"},
                        {
                            type: 'del', label:"<span style='color: #24D330;font-size: 12px;text-decoration: underline'>转为工单</span>",
                            filter: {
                                field: 'id',
                                needel: [2, 3, 4, 5]
                            }
                        }
                    ],
                    isMultiple: false,
                },
               ajax: {
                    url: '/api/admin/alert/getAlertList?token=test',
                    method:"post",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },

            }
        },
        methods:{
            searBtclick(oData) {
                if (oData.action == "ignore") {
                    this.isShowPopup.IgnoreInfor = true;
                }
            },
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["未确认",'已确认','处理中','已忽略']
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
    .alarmViewBox{
        background: #fff;
    }

    .alarmViewtit{
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
</style>

