<template>
    <div class="MonitoringInterfaceBox">
        <h3 class="MonitoringInterfacetit">监控界面管理</h3>
        <div style="padding: 0 30px;position: relative">
            <SearchBar style="margin-right: 214px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></SearchBar>
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
        <el-dialog class="popupWindow" title="新增监控界面" :visible.sync="isShowPopup.addMonitorface" width="748px">
            <AddMonitorface @isHide="isShowPopup.addMonitorface = false" @flushList="falush=new Date()"></AddMonitorface>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入监控" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate :dataURL="ImportUrl" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import InPuttemplate from "../../../components/common/inPuttemplate.vue"
    import AddMonitorface from "./addMonitorface.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            AddMonitorface,
            InPuttemplate
        },
        data(){
            return{
                ImportUrl:{
                    downloadURL:this.$url.MonitoringInterfaceExportTemp,
                    uploadingURL:this.$url.MonitoringInterfaceImportTemp
                },
                isShowPopup:{
                    addMonitorface:false,
                    inPuttemplate: false

                },
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入搜索内容",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "筛选项目",
                        width:100,
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
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr30', action: 'add'},
                        {label: '导 入', icon: 'el-icon-download', className: '', action: 'insert'}
                    ]
                },
                tableData: {
                    tHead: [{
                        name: '项目名称',
                        field: "uiname"
                    }, {
                        name: '监控界面名称',
                        field: "uiname"
                    }, {
                        name: '监控界面类型',
                        field: "uitype"
                    },  {
                        name: '状态',
                        field: "status"
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
                    url: this.$url.getMonitoringInterfaceList,
                    method:"post",
                    data: {
                        pageNum: 1,
                        pageSize: 15,
                        pmId:-1
                    },
                },

            }
        },
        methods:{
            searBtclick(oData){
                if(oData.action == "add"){
                    this.isShowPopup.addMonitorface=true;
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
    .MonitoringInterfaceBox{
        background: #fff;
    }
    .MonitoringInterfacetit{
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
