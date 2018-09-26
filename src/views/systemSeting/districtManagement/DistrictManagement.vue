<template>
    <div class="ComponentModelBox">
        <h3 class="ComponentModeltit">区域管理</h3>
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
        <el-dialog class="popupWindow" title="新增区域" :visible.sync="isShowPopup.addComponent" width="720px">
            <AddDistrict @isHide="isShowPopup.addComponent = false" @flushList="falush=new Date()"></AddDistrict>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入区域" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate :dataURL="ImportUrl" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import inPuttemplate from "../../../components/common/inPuttemplate.vue"
    import AddDistrict from "./addDistrict.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            AddDistrict,
            InPuttemplate,
        },
        data(){
            return{
                ImportUrl:{
                    downloadURL:this.$url.DistrictExportTemp,
                    uploadingURL:this.$url.DistrictImportTemp
                },
                isShowPopup: {
                    addComponent: false,
                    inPuttemplate: false
                },
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入关键字",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "所属项目",
                        width:200,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "能耗类型",
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
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr20', action: 'add'},
                        {label: '导 入', icon: 'el-icon-download', className: '', action: 'insert'}
                    ]
                },
                tableData: {
                    tHead: [ {
                        name: '区域编号',
                        field: "number"
                    }, {
                        name: '区域名称',
                        field: "name"
                    }, {
                        name: '所属区域',
                        field: "parentName"
                    },  {
                        name: '所属项目',
                        field: "pmName"
                    },  {
                        name: '能耗类型',
                        field: "energytype"
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
                    isMultiple: false,
                    isRank:true
                },
                ajax: {
                    url: this.$url.getDistrictList,
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
                if (oData.action == "add") {
                    this.isShowPopup.addComponent = true;
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
                if (column.property == 'energytype') {
                    let a = ["电","水","气"]
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    return "pl10";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    return "pl10";
                }
            },
        },

    }
</script>
<style scoped>
    .ComponentModelBox{
        background: #fff;
    }

    .ComponentModeltit{
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
