<template>
    <div class="AdminOperationLogBox">
        <h3 class="AdminOperationLogtit">权限列表</h3>
        <div style="padding: 0 30px">
            <searchBar :inSearchData="setSearchtool"></searchBar>
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
    import searchBar from "../../components/common/searchBar"
    import dataTable from "../../components/common/dataTable"
    import PopupWindow from "../../components/common/popupWindow"

    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            PopupWindow
        },
        data(){
            return{
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入日志名称",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "日志类型",
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
                        name: '操作时间',
                        field: "alarmTime"
                    }, {
                        name: '标题',
                        field: "alarmlocal"
                    }, {
                        name: '操作记录',
                        width:500,
                        field: "log"
                    }, {
                        name: '用户编号',
                        field: "alarmTime"
                    },  {
                        name: '用户名称',
                        field: "alarmLevel"
                    }
                    ],

                    tData: [],
                    total: 0,
                    isMultiple: false
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
                if (obj.columnIndex == "0") {
                    return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    return "pl20";
                }
            },
        },

    }
</script>
<style scoped>
    .AdminOperationLogBox{
        background: #fff;
    }

    .AdminOperationLogtit{
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
