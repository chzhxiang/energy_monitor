<template>
    <div class="alarmViewBox">
        <h3 class="alarmViewtit">深圳龙华区天虹商场租户信息</h3>
        <div style="padding: 0 30px">
            <searchBar :inSearchData="setSearchtool"></SearchBar>
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
    </div>
</template>
<script>
    import SearchBar from "../../components/common/searchBar.vue"
    import DataTable from "../../components/common/dataTable.vue"
    import PopupWindow from "../../components/common/popupWindow.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            PopupWindow
        },
        data(){
            return{
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searchKey",
                        placeholder: "请输入账号、姓名等信息",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "ssssstype",
                        name: "租户类型",
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
                        name: "付费类型",
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
                        type: "select",
                        field: "statys",
                        name: "缴费状态",
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
                        name: '序号',
                        field: "id",
                        options: [
                            {val: '未确认', claseName: 'red'},
                            {val: '确认', claseName: 'bule'}
                        ]
                    }, {
                        name: '租户编号',
                        field: "alerttype"
                    }, {
                        name: '租户名称',
                        field: "alertaddress"
                    }, {
                        name: '面积(㎡)',
                        field: "devicename"
                    }, {
                        name: '位置区域',
                        field: "alerttime"
                    }, {
                        name: '租户类型',
                        field: "alertlevel"
                    }, {
                        name: '付费类型',
                        field: "status"
                    },{
                        name: '剩余量 (元)',
                        field: "status"
                    },{
                        name: '剩余可用天数',
                        field: "status"
                    },{
                        name: '欠费金额(元)',
                        field: "status"
                    },{
                        name: '缴费状态',
                        field: "status"
                    },{
                        name: '最近缴费记录',
                        field: "status"
                    }],
                    tData: [],
                    total: 0,
                    actionBtWidth:150,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看历史</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                        {type: 'hulve', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>忽略</span>"},
                    ],
                    isMultiple: true,
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },

            }
        },
        methods:{
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
                   // return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                   // return "pl20";
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

