<template>
    <div class="MeterParameterBox">
        <h3 class="MeterParametertit">表记参数</h3>
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
        <el-dialog class="popupWindow" title="新增表计参数" :visible.sync="isShowPopup.addMeter" width="725px">
            <AddMeter @isHide="isShowPopup.addMeter = false" @flushList="falush=new Date()"></AddMeter>
        </el-dialog>
    </div>
</template>
<script>
    import SearchBar from "../../../components/common/searchBar.vue"
    import DataTable from "../../../components/common/dataTable.vue"
    import AddMeter from "./addMeter.vue"

    export default {
        name: 'table',
        components: {
            SearchBar,
            DataTable,
            AddMeter
        },
        data(){
            return{
                isShowPopup:{
                    addMeter:false,
                },
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入采集器编号或名称",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "所属项目",
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
                        name: "在线",
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
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'}
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add'},
                    ]
                },
                tableData: {
                    tHead: [{
                        name: '参数编号',
                        field: "code"
                    }, {
                        name: '参数名称',
                        field: "name"
                    }, {
                        name: '设备类型',
                        field: "devicetype"
                    }, {
                        name: '数据类型',
                        field: "datatype"
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
                    url: this.$url.getMeterParameterList,
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
                    this.isShowPopup.addMeter=true;
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
    .MeterParameterBox{
        background: #fff;
    }
    .MeterParametertit{
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
