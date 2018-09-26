<template>
    <div class="PushSettingsBox">
        <h3 class="PushSettingstit">推送设置</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0px 30px 40px 30px;">
            <dataTable  :formatter="formatter"
                        :cellclassname="cellclassname"
                        :headercellclassname="headercellclassname"
                        :inTableData="tableData"
                        @rowClick="tablerowClick"
                        :inAjax="ajax"
                        @selection="selectionChange">
            </dataTable>
        </div>
        <el-dialog class="popupWindow" title="修改配置" :visible.sync="isShowPopup.modification" width="748px">
            <Modification @isHide="isShowPopup.modification = false" @flushList="falush=new Date()"></Modification>
        </el-dialog>
        <el-dialog class="popupWindow" title="日志模版" :visible.sync="isShowPopup.logTemplate" width="800px" :append-to-body="true">
            <LogTemplate @isHide="isShowPopup.logTemplate = false"></LogTemplate>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除信息" :visible.sync="isShowPopup.deleteInfor" width="420px" :append-to-body="true">
            <DeleteInfor :delInfo="delItemInfor" @isHide="isShowPopup.deleteInfor = false"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
    import dataTable from "../../../components/common/dataTable.vue"
    import searchBar from "../../../components/common/searchBar.vue"
    import DeleteInfor from "../../../components/common/deleteInfor.vue"
    import Modification from './modification.vue'
    import LogTemplate from "./logTemplate.vue"

    export default {
        name: 'table',
        components: {
            dataTable,
            searchBar,
            Modification,
            LogTemplate,
            DeleteInfor
        },
        data(){
            return{
                delItemInfor:{
                    method:"get",
                    url:this.$url.delPushListitem,
                    id:''
                },
                isShowPopup: {
                    modification: false,
                    logTemplate: false,
                    deleteInfor: false,
                },
                setSearchtool:[
                    {
                        type: "select",
                        field: "type",
                        name: "项目名称",
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
                        name: "推送类型",
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
                        name: "推送内容",
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
                        name: "推送状态",
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
                    tHead: [{
                        name: '项目名称',
                        field: "pmid"
                    }, {
                        name: '推送角色',
                        field: ""
                    }, {
                        name: '推送类型',
                        field: "type"
                    },  {
                        name: '生成工单范围',
                        field: ""
                    }, {
                        name: '推送方式',
                        field: "alertway"
                    }, {
                        name: '推送内容',
                        field: "contentType"
                    },{
                        name: '推送时间',
                        field: "pushTime"
                    },{
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
                            type: 'del', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>",
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
                    url: this.$url.getPushListList,
                    method:"post",
                    data: {
                        pageNum: 1,
                        pageSize: 2,
                        pmId:-1
                    },
                },

            }
        },
        methods:{
            searBtclick(oData) {
                if (oData.action == "add") {
                    this.isShowPopup.modification = true;
                }
                if (oData.action == "insert") {
                    this.isShowPopup.logTemplate = true;
                }
            },
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'type') {
                    let a = ["",'告警','报表','分析报告']
                    return a[cellValue];
                }
                if (column.property == 'alertway') {
                    let a = ["",'短信','邮箱','APP']
                    return a[cellValue];
                }
                if (column.property == 'status') {
                    let a = ['启用','禁用']
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
    .PushSettingsBox{
        background: #fff;
    }
    .PushSettingstit{
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
