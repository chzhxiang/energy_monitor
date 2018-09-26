<template>
    <div class="containerBox">
        <h3 class="containertit" style="margin-bottom: 20px">评论管理</h3>
        <el-tabs v-model="activeTable" type="card" @tab-click="handleClick">
            <el-tab-pane label="动态评论" name="first">
                <div style="padding: 0 30px 0 43px;position: relative;">
                    <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter"
                               :cellclassname="cellclassname"
                               :headercellclassname="headercellclassname"
                               :inTableData="DynamicCommentsData"
                               @rowClick="tablerowClick"
                               :inAjax="DynamicCommentsajax"
                               @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
            <el-tab-pane label="专家评论" name="second">
                <div style="padding: 0 30px 0 43px">
                    <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter"
                               :cellclassname="cellclassname"
                               :headercellclassname="headercellclassname"
                               :inTableData="expertCommentsData"
                               @rowClick="tablerowClick"
                               :inAjax="expertCommentsajax"
                               @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
            <el-tab-pane label="课程评论" name="third">
                <div style="padding: 0 30px 0 43px">
                    <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter"
                               :cellclassname="cellclassname"
                               :headercellclassname="headercellclassname"
                               :inTableData="CurriculumCommentsData"
                               @rowClick="tablerowClick"
                               :inAjax="CurriculumCommentsajax"
                               @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog class="popupWindow" title="新增编辑类别" :visible.sync="isShowPopup.addCategory" width="741px">
            <AddCategory @isHide="isShowPopup.addCategory = false" @flushList="falush=new Date()"></AddCategory>
       </el-dialog>
        <el-dialog class="popupWindow" title="类别下架"  :visible.sync="isShowPopup.deleteInfor" width="420px">
            <DeleteInfor contentText="下架后将不再接收此类别及其下级数据，确认下架？" @isHide="isShowPopup.deleteInfor = false" @flushList="falush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddCategory from "./addCategory.vue"
    import DeleteInfor from "../../../components/common/deleteInfor.vue"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,AddCategory,DeleteInfor
        },
        data() {
            return {
                activeTable: 'first',
                isShowPopup: {
                    addCategory: false,
                    deleteInfor:false
                },
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入昵称",
                        name: "被评论人",
                        width: 242,
                    },
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入内容",
                        name: "评论内容",
                        width: 242,
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
                        {label: '批量隐藏', icon: 'el-icon-view', className: 'mr40', action: 'hide'},
                        {label: '批量显示', icon: 'el-icon-view', className: '', action: 'show'}
                    ]
                },
                DynamicCommentsData: {
                    tHead: [{
                        name: '评论内容',
                        field: "id",
                    }, {
                        name: '评论人',
                        field: "alarmType"                        ,
                    }, {
                        name: '被评论内容',
                        field: "alarmLevel",
                    }, {
                        name: '被评论人',
                        field: "deviceName"
                    },
                    {
                        name: '评论时间',
                        field: "alarmLevel"
                    },
                    {
                        name: '状态',
                        field: "status"
                    }
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>隐藏</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'changeTable',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>显示</span>"
                        },
                    ],
                    isMultiple: true,
                    isRank: true
                },
                DynamicCommentsajax: {
                    url: '../../../static/Common/virtualData.json',
                    method: "get",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },
                expertCommentsData: {
                    tHead: [{
                        name: '评论内容',
                        field: "id",
                    }, {
                        name: '评分',
                        field: "alarmType"                        ,
                    }, {
                        name: '标签',
                        field: "alarmLevel",
                    }, {
                        name: '评论人',
                        field: "deviceName"
                    },
                    {
                        name: '被评论人',
                        field: "deviceName"
                    },
                    {
                        name: '点赞数',
                        field: "alarmLevel"
                    },
                    {
                        name: '举报数量',
                        field: "alarmTime"
                    },
                    {
                        name: '评论时间',
                        field: "status"
                    },
                    {
                        name: '状态',
                        field: "status"
                    }
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>隐藏</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>显示</span>"
                        },
                        {
                            type: 'changeTable',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看举报</span>"
                        },
                    ],
                    isMultiple: true,
                    isRank: true
                },
                expertCommentsajax: {
                    url: '../../../static/Common/virtualData.json',
                    method: "get",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },
                CurriculumCommentsData: {
                    tHead: [{
                        name: '评论内容',
                        field: "id",
                    },  {
                        name: '评论人',
                        field: "deviceName"
                    },
                        {
                            name: '被评论课程',
                            field: "deviceName"
                        },
                        {
                            name: '评论时间',
                            field: "status"
                        },
                        {
                            name: '状态',
                            field: "status"
                        }
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>隐藏</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>显示</span>"
                        },
                    ],
                    isMultiple: true,
                    isRank: true
                },
                CurriculumCommentsajax: {
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
                    this.isShowPopup.addCategory = true;
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
