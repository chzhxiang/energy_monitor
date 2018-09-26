<template>
    <div class="GroupListBox">
        <h3 class="GroupListtit">集团列表</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable  :formatter="formatter"
                        :cellclassname="cellclassname"
                        :headercellclassname="headercellclassname"
                        :inTableData="tableData"
                        :inAjax="ajax"
                        @rowClick="rowClick"
                        @selection="selectionChange">
            </dataTable>
        </div>
        <el-dialog class="popupWindow" :title="popupTit.addPopup" :visible.sync="isShowPopup.addGroupinf" width="725px">
            <AddGroupinf :isedit="editItem" @isHide="isShowPopup.addGroupinf = false" @flushList="falush=new Date()"></AddGroupinf>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddGroupinf from "./AddGroupinf"
    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            AddGroupinf
        },
        data(){
            return{
                editItem:{},
                popupTit:{
                    addPopup:""
                },
                isShowPopup:{
                    addGroupinf:false,
                },
                setSearchtool:[
                    {
                        type: "select",
                        field: "type",
                        name: "集团编号",
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
                        name: "集团名称",
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
                        name: "所属单位",
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
                        name: '集团编号',
                        field: "number"
                    }, {
                        name: '集团名称',
                        field: "name"
                    }, {
                        name: '所属集团',
                        field: "pidName"
                    },  {
                        name: '包含项目',
                        field: "pmList"
                    }, {
                        name: '状态',
                        field: "status"
                    },{
                        name: '创建时间',
                        field: "createat"
                    }, {
                        name: '创建人',
                        field: "createName"
                    }
                    ],

                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: this.$url.groupList,
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
                    this.editItem = {};
                    this.popupTit.addPopup="新增集团信息";
                    this.isShowPopup.addGroupinf=true;
                }
            },
            rowClick(row) {
                if (row.type == 'edit') {
                    this.editItem = Object.assign({},{id:row.rowData.id});
                    this.popupTit.addPopup="编辑集团信息";
                    this.isShowPopup.addGroupinf=true;
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
                if (column.property == 'pmList') {
                    let text = ''
                    if(cellValue&&JSON.stringify(cellValue) !="[]"){
                        for(let i=0;i<cellValue.length;i++){
                            text += cellValue[i].name +";"
                        }
                    }

                    return text;
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
    .GroupListBox{
        background: #fff;
    }
    .GroupListtit{
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
