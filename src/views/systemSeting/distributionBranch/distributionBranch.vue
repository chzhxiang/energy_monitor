<template>
    <div class="DistributionBranchBox">
        <h3 class="DistributionBranchtit">配电支路点表</h3>
        <div style="padding: 0 30px;position: relative">
            <SearchBar style="margin-right: 100px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></SearchBar>
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
        <el-dialog class="popupWindow" title="添加支路参数" :visible.sync="isShowPopup.addBranchTable" width="725px">
            <AddBranchTable @isHide="isShowPopup.addBranchTable = false" @flushList="falush=new Date()"></AddBranchTable>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import AddBranchTable from "./addBranchTable.vue"
    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            AddBranchTable
        },
        data(){
            return{
                isShowPopup:{
                    addBranchTable:false,
                },
                setSearchtool:[
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
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add'},
                    ]
                },
                tableData: {
                    tHead: [{
                        name: '参数名称',
                        field: "id"
                    }, {
                        name: '参数点表地址',
                        field: "alarmlocal"
                    }, {
                        name: '上限',
                        field: "deviceName"
                    }, {
                        name: '下限',
                        field: "deviceName"
                    }, {
                        name: '支路编号',
                        field: "alarmlocal"
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
            searBtclick(oData){
                if(oData.action == "add"){
                    this.isShowPopup.addBranchTable=true;
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
    .DistributionBranchBox{
        background: #fff;
    }
    .DistributionBranchtit{
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
