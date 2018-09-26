<template>
    <div class="PointTableManagementBox">
        <h3 class="PointTableManagementtit">点表管理</h3>
        <div style="padding: 0 30px;position: relative">
            <SearchBar style="margin-right: 206px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></SearchBar>
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
        <el-dialog class="popupWindow" title="新增OPC配置" :visible.sync="isShowPopup.addPointTable" width="725px">
            <AddPointTable @isHide="isShowPopup.addPointTable = false" @flushList="falush=new Date()"></AddPointTable>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入点表" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate :dataURL="ImportUrl" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import InPuttemplate from "../../../components/common/inPuttemplate.vue"
    import AddPointTable from "./addPointTable.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            AddPointTable,
            InPuttemplate
        },
        data(){
            return{

                isShowPopup:{
                    addPointTable:false,
                    inPuttemplate: false
                },
                ImportUrl:{
                    downloadURL:this.$url.PointTableExportTemp,
                    uploadingURL:this.$url.PointTableImportTemp
                },
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入查询条件",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "OPC名称",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "点类型",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "筛选项目",
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
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'}
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr20', action: 'add'},
                        {label: '导 入', icon: 'el-icon-download', className: '', action: 'insert'}
                    ]
                },
                tableData: {
                    tHead: [{
                        name: 'OPC名称',
                        field: "id"
                    }, {
                        name: '点类型',
                        field: "alarmlocal"
                    }, {
                        name: '物理地址',
                        field: "deviceName"
                    },  {
                        name: '映射地址',
                        field: "alarmlocal"
                    }, {
                        name: '数据类型',
                        field: "alarmlocal"
                    }, {
                        name: '状态',
                        field: "alarmTime"
                    }
                    ],

                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: this.$url.getPointTableList,
                    method:"post",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },

            }
        },
        methods:{
            searBtclick(oData){
                if(oData.action == "add"){
                    this.isShowPopup.addPointTable=true;
                }
                if (oData.action == "insert") {
                    this.isShowPopup.inPuttemplate = true;
                }
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
    .PointTableManagementBox{
        background: #fff;
    }
    .PointTableManagementtit{
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
