<template>
    <div class="SelfDefinedAlarmBox">
        <h3 class="SelfDefinedAlarmtit">自定义告警</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar style="margin-right: 194px" :inSearchData="setSearchtool" @outData="searBtclick"
                       :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <DataTable :formatter="formatter"
                       :cellclassname="cellclassname"
                       :headercellclassname="headercellclassname"
                       :inTableData="tableData"
                       :inAjax="ajax"
                       @rowClick="rowClick"
                       @selection="selectionChange">

            </DataTable>
        </div>
        <el-dialog class="popupWindow" title="自定义告警设置" :visible.sync="isShowPopup.add" width="1465px">
            <SettingAlarm @isHide="isShowPopup.add = false" @flushList="falush=new Date()"></SettingAlarm>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除告警"  :visible.sync="isShowPopup.deleteAlarm" width="420px">
            <DeleteInfor contentText="真的要删除此告警吗？" @isHide="isShowPopup.deleteAlarm = false" @flushList="falush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import DeleteInfor from "../../../components/common/deleteInfor.vue"
    import SettingAlarm from "./SettingAlarm.vue"

    export default {
        name: 'table',
        components: {
            searchBar,
            DataTable,
            SettingAlarm,
            DeleteInfor
        },
        data() {
            return {
                isShowPopup: {
                    add: false,
                    deleteAlarm: false
                },
                setSearchtool: [
                    {
                        type: "select",
                        field: "type",
                        name: "告警类型",
                        width: 100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "告警指标",
                        width: 100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "告警位置",
                        width: 100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "告警状态",
                        width: 100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },

                ],
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
                        field: "alarmType"
                    }, {
                        name: '告警指标',
                        field: "alarmlocal"
                    }, {
                        name: '时期区间',
                        field: "deviceName"
                    }, {
                        name: '告警位置',
                        field: "alarmTime"
                    }, {
                        name: '状态',
                        field: "status"
                    }, {
                        name: '创建人',
                        field: "alarmLevel"
                    }, {
                        name: '创建时间',
                        field: "alarmLevel"
                    }
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'del',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>"
                        },
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method: "get",
                    data: {
                        pageNum: 1,
                        pageSize: 2
                    },
                },
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add'},
                    ]
                },

            }
        },
        methods: {
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["", '处理中', '已恢复', '已处理', '已忽略', '未确认']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    return "pl20";
                }
            },
            searBtclick(oData) {
                console.log(oData.action);
                if (oData.action == "add") {
                    this.isShowPopup.add = true;
                }
            },
            rowClick(row) {
                if (row.type == 'del') {

                    this.isShowPopup.deleteAlarm = true;
                }

            },
        },

    }
</script>
<style scoped>
    .SelfDefinedAlarmBox {
        background: #fff;
    }

    .SelfDefinedAlarmtit {
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
</style>

