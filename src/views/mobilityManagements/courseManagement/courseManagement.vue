<template>
    <div class="containerBox">
        <h3 class="containertit">课程管理</h3>
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
        <el-dialog class="popupWindow" title="新增课程" :visible.sync="isShowPopup.addCourse" width="741px">
            <AddCourse @isHide="isShowPopup.addCourse = false" @flushList="falush=new Date()"></AddCourse>
       </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddCourse from "./addSection"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,AddCourse
        },
        data() {
            return {
                isShowPopup: {
                    addCourse: false,
                },
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入",
                        name: "课程名称",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "课程类别",
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
                        name: '课程编号',
                        field: "id",
                    }, {
                        name: '课程类别',
                        field: "alarmType"                        ,
                    }, {
                        name: '展示位置',
                        field: "deviceName"
                    },
                    {
                        name: '课程名称',
                        field: "deviceName"
                    },{
                        name: '课程主图',
                        type:"image",
                        field: "img",
                    },
                    {
                        name: '课程解读视频',
                        field: "alarmLevel"
                    },
                    {
                        name: '课程简介',
                        field: "alarmTime"
                    },
                    {
                        name: '课程章节数',
                        field: "alarmLevel"
                    },
                    {
                        name: '评论数量',
                        field: "alarmLevel"
                    },
                    {
                        name: '创建时间',
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
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>上架</span>"
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下架</span>"
                        },
                        {
                            type: 'changeTable',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看评论</span>"
                        },
                        {
                            type: 'changeTable',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>课程章节</span>"
                        },
                    ],
                    isMultiple: false,
                    isRank:true
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
                    this.isShowPopup.addCourse = true;
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
