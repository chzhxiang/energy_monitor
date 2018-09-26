<template>
    <div class="ConversionEnergyBox">
        <h3 class="ConversionEnergytit">能耗指标换算</h3>
        <div style="padding: 0 30px;position: relative;">
            <searchBar style="padding-right: 200px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
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
        <el-dialog class="popupWindow" title="新增能耗指标" :visible.sync="isShowPopup.addConversion" width="748px">
            <AddConversion @isHide="isShowPopup.addConversion = false" @flushList="falush=new Date()"></AddConversion>
        </el-dialog>
        <el-dialog class="popupWindow" title="导入支路" :visible.sync="isShowPopup.inPuttemplate" width="656px">
            <InPuttemplate :dataURL="ImportUrl" @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import InPuttemplate from "../../../components/common/inPuttemplate.vue"
    import AddConversion from './addConversion.vue'
    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            AddConversion,
            InPuttemplate
        },
        data(){
            return{
                ImportUrl:{
                    downloadURL:this.$url.exportEnergyConsumption,
                    uploadingURL:this.$url.importEnergyConsumption
                },
                isShowPopup: {
                    addConversion: false,
                    inPuttemplate: false
                },
                setSearchtool:[
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
                        name: "能耗单位",
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
                        name: "等效电值单位",
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
                        name: "筛选建筑",
                        width:200,
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
                    tHead: [{
                        name: '类型编号',
                        field: "number"
                    }, {
                        name: '能耗类型',
                        field: "etype"
                    }, {
                        name: '能耗单位',
                        field: "unit"
                    },  {
                        name: '标煤系数',
                        field: "coalcoefficient"
                    }, {
                        name: '等效标煤单位',
                        field: "coalunit"
                    },{
                        name: '电值折算系数',
                        field: "electriccoefficient"
                    }, {
                        name: '等效电值单位',
                        field: "electricunit"
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
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: this.$url.conversionOfEnergyConsumptionIndicatorList,
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
                    this.isShowPopup.addConversion = true;
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
                    let a = ['启用','禁用']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    //return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    //return "pl20";
                }
            },
        },

    }
</script>
<style scoped>
    .ConversionEnergyBox{
        background: #fff;
    }
    .ConversionEnergytit{
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
