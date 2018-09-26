<template>
    <div class="ReadingQueryBox">
        <h3 class="ReadingQuerytit">校对报告下载</h3>
        <div style="padding: 0 30px">
            <searchBar :serBtName="serBtName" :inSearchData="setSearchtool" :btnList="searToolBtnList" @outData="searchClick" ></searchBar>
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
                setSearchtool:[
                   {
                        type: "select",
                        field: "statys",
                        name: "选择项目",
                        width:200,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    }
                ],
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '导 出', icon: 'el-icon-upload2', className: '', action: 'insert'}
                    ]
                },
                tableData: {
                    tHead: [ {
                        name: '项目编号',
                        field: "alarmType"
                    }, {
                        name: '项目名称',
                        field: "deviceName"
                    }, {
                        name: '文件名称',
                        field: "alarmTime"
                    }],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下载</span>",
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
    .ReadingQueryBox{
        background: #fff;
    }
    .ReadingQueryBox .ReadingQuerytit{
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
    .ReadingQueryBox .ReadingQuerystopBt{
        background: #C3C3C3;
        cursor: pointer;
        position: relative;
        top:-8px;
        font-size: 14px;
        color: #3A3A3A;
        box-sizing: border-box;
        text-align: center;
        width: 75px;
        height: 28px;
        line-height: 28px;
        display: inline-block;
        border-radius: 15px;
    }

</style>

