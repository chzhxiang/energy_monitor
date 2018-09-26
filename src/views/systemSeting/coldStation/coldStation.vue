<template>
    <div class="ColdStationBox">
        <h3 class="ColdStationtit">冷站设备</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar style="margin-right: 214px" :inSearchData="setSearchtool"  @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
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
        <el-dialog class="popupWindow" title="新增冷站设备" :visible.sync="isShowPopup.AddColdStation" width="700px">
            <AddColdStation @isHide="isShowPopup.AddColdStation = false" @flushList="falush=new Date()"></AddColdStation>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入监控" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate  :dataURL="ImportUrl" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import InPuttemplate from "../../../components/common/inPuttemplate.vue"
    import AddColdStation from "./addColdStation.vue"

    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            AddColdStation,
            InPuttemplate
        },
        data(){
            return{
                ImportUrl:{
                    downloadURL:this.$url.ColdStationExportTemp,
                    uploadingURL:this.$url.ColdStationImportTemp
                },
                isShowPopup:{
                    AddColdStation:false,
                    inPuttemplate: false
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
                        name: "项目名称",
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
                        name: "设备名称",
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
                        field: "pmName"
                    }, {
                        name: '设备序号',
                        field: "serialno"
                    }, {
                        name: '设备名称',
                        field: "name"
                    },  {
                        name: '关联支路',
                        field: "branchName"
                    }, {
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
                    url: this.$url.getColdStationList,
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
                    this.isShowPopup.AddColdStation=true;
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
                    let a = ["禁用","启用"]
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
    .ColdStationBox{
        background: #fff;
    }
    .ColdStationtit{
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
