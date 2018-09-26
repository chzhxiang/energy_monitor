<template>
    <div class="PointTableManagementBox">
        <h3 class="PointTableManagementtit">配电箱管理</h3>
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
        <el-dialog class="popupWindow" title="新增配电箱" :visible.sync="isShowPopup.addDistributionbox" width="725px">
            <AddDistributionbox @isHide="isShowPopup.addDistributionbox = false" @flushList="falush=new Date()"></AddDistributionbox>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import AddDistributionbox from "./addDistributionbox.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            AddDistributionbox
        },
        data(){
            return{
                isShowPopup:{
                    addDistributionbox:false,
                },
                setSearchtool:[
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
                        name: '编号',
                        field: "id"
                    }, {
                        name: '采集命令',
                        field: "alarmlocal"
                    }, {
                        name: '所在位置',
                        field: "deviceName"
                    },  {
                        name: '建筑编号',
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
                    this.isShowPopup.addDistributionbox=true;
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
