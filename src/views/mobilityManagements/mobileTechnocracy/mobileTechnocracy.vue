<template>
    <div class="containerBox">
        <h3 class="containertit">专家管理</h3>
        <div style="padding: 0 30px 0 43px;position: relative;">
            <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable :formatter="formatter"
                       :cellclassname="cellclassname"
                       :headercellclassname="headercellclassname"
                       :inTableData="tableData"
                       @rowClick="tablerowClick"
                       :inAjax="ajax"
                       @selection="selectionChange">
            </dataTable>
        </div>
        <el-dialog class="popupWindow" title="新增专家" :visible.sync="isShowPopup.addTechnocracy" width="741px">
            <AddTechnocracy @isHide="isShowPopup.addTechnocracy = false" @flushList="falush=new Date()"></AddTechnocracy>
       </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddTechnocracy from "./addTechnocracy.vue"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,AddTechnocracy
        },
        data() {
            return {
                isShowPopup: {
                    addTechnocracy: false,
                },
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "专家类别",
                        width: 100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "单位",
                        width: 150,
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
                        width: 100,
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
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr40', action: 'add'},
                        {label: '导 入', icon: 'el-icon-download', className: '', action: 'insert'}
                    ]
                },
                tableData: {
                    tHead: [{
                        name: '专家编号',
                        field: "id",
                    }, {
                        name: '专家类别',
                        field: "alarmType"                        ,
                    }, {
                        name: '展示位置',
                        field: "deviceName"
                    }, {
                        name: '头像',
                        type:"image",
                        field: "img",
                    },
                    {
                        name: '视频',
                        field: "alarmLevel"
                    },
                    {
                        name: '专家名称',
                        field: "alarmTime"
                    },
                    {
                        name: '手机号',
                        field: "alarmLevel"
                    },
                    {
                        name: '单位',
                        field: "alarmLevel"
                    },
                    {
                        name: '职称',
                        field: "alarmLevel"
                    },
                    {
                        name: '评分',
                        field: "alarmLevel"
                    },
                    {
                        name: '咨询量',
                        field: "alarmLevel"
                    },
                    {
                        name: '粉丝',
                        field: "alarmLevel"
                    },
                    {
                        name: '评论量',
                        field: "alarmLevel"
                    },
                    {
                        name: '状态',
                        field: "status"
                    }
                    ],
                    tData: [],
                    total: 0,
                    actionBtWidth:300,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>详情</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>休息</span>"
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>上班</span>"
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下班</span>"
                        },
                        {
                            type: 'changeTable',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看评论</span>"
                        },
                    ],
                    isMultiple: false,
                    isRank: false
                },
                ajax: {
                    url: '../../../static/Common/virtualData.json',
                    method: "get",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            searBtclick(oData) {
                if (oData.action == "add") {
                    this.isShowPopup.addTechnocracy = true;
                }
            },
            selectionChange(selection) {
                console.log(selection, 555);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["禁用", '启用']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    // return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    // return "pl20";
                }
            },
            tablerowClick(obj) {
                if (obj.type == "edit") {
                    this.isShowPopup.addbranch = true;
                }
                if (obj.type == "unshelve") {
                    this.isShowPopup.deleteInfor = true;
                }

            }
        },

    }
</script>
<style>
</style>
