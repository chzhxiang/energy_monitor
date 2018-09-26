<template>
    <div class="TenantConfigurationBox">
        <h3 class="TenantConfigurationtit">租户设置{{falush}}</h3>
        <div style="padding: 0 30px;position: relative">
            <SearchBar style="margin-right:214px" :inSearchData="setSearchtool"  :btnList="searToolBtnList" @outData="searBtclick" ></SearchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <DataTable  :formatter="formatter"
                        :cellclassname="cellclassname"
                        :headercellclassname="headercellclassname"
                        :inTableData="tableData"
                        :flush="falush"
                        @rowClick="tablerowClick"
                        :inAjax="ajax"
                        @selection="selectionChange">

            </DataTable>
        </div>
        <el-dialog class="popupWindow" title="新增用户" :visible.sync="isShowPopup.adduser" width="748px">
            <Adduser @isHide="isShowPopup.adduser = false" @flushList="falush=new Date()"></Adduser>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入租户" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate :dataURL="ImportUrl" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除信息" :visible.sync="isShowPopup.deleteInfor" width="420px" :append-to-body="true">
            <DeleteInfor :delInfo="delItemInfor" @isHide="isShowPopup.deleteInfor = false" @flushList="falush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import InPuttemplate from "../../../components/common/inPuttemplate.vue"
    import DeleteInfor from "../../../components/common/deleteInfor.vue"
    import Adduser from "./adduser.vue"
    
    import { tenantTableDataEnum } from "./enum/tenantTableDataEnum";
    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            Adduser,
            InPuttemplate,
            DeleteInfor
        },
        data(){
            return{
                falush:'',
                delItemInfor:{
                    method:"get",
                    url:this.$url.dleTenantTemp,
                    id:''
                },
                ImportUrl:{
                    downloadURL:this.$url.TenantExportTemp,
                    uploadingURL:this.$url.TenantImportTemp
                },
                isShowPopup:{
                    adduser:false,
                    inPuttemplate: false,
                    deleteInfor: false,
                },
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入关键字",
                        name: "筛选项目",
                        width: 242,
                    },
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
                tableData: tenantTableDataEnum,
                ajax: {
                    url: this.$url.getTenantList,
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
                    this.isShowPopup.adduser=true;
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
            tablerowClick(obj) {
                if (obj.type == "del") {
                    this.delItemInfor.id = obj.rowData.id;
                    this.isShowPopup.deleteInfor = true;
                }
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
    .TenantConfigurationBox{
        background: #fff;
    }

    .TenantConfigurationtit{
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
