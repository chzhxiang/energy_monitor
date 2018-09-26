<template>
    <div class="TimeSetBox">
        <h3 class="TimeSettit">分时电价设置</h3>
        <div style="padding: 0 30px">
            <searchBar style="margin-right: 194px" :inSearchData="setSearchtool" @outData="searBtclick"
                       :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable :formatter="formatter"
                       :cellclassname="cellclassname"
                       :headercellclassname="headercellclassname"
                       :inTableData="tableData"
                       :inAjax="ajax"
                       @selection="selectionChange">
            </dataTable>
        </div>
        <el-dialog class="popupWindow" title="模板详情" :visible.sync="isShowPopup.add" width="980px">
            <AddTimeSet @isHide="isShowPopup.add = false" @flushList="falush=new Date()"></AddTimeSet>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddTimeSet from "./addTimeSet.vue"

    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            AddTimeSet
        },
        data() {
            return {
                isShowPopup: {
                    add: false,
                },
                setSearchtool: [
                    {
                        type: "select",
                        field: "type",
                        name: "省市",
                        width: 200,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "筛选项目",
                        width: 200,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                ],
                tableData: {
                    tHead: [
                        {
                            name: '模板名称',
                            field: "id"
                        }, {
                            name: '所属项目',
                            field: "alarmlocal"
                        }, {
                            name: '区域',
                            field: "deviceName"
                        }, {
                            name: '状态',
                            field: "alarmlocal"
                        }, {
                            name: '创建日期',
                            field: "alarmlocal"
                        }
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'info',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>启用</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'info',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method: "get",
                    data: {
                        pageNum: 1,
                        pageSize: 2
                    },
                },
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add'},
                    ]
                },
            }
        },
        methods: {
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["", '处理中', '已恢复', '已处理', '已忽略', '未确认']
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
            searBtclick(oData) {
                console.log(oData.action);
                if (oData.action == "add") {
                    this.isShowPopup.add = true;
                }
            },
        },

    }
</script>
<style scoped>
    .TimeSetBox {
        background: #fff;
    }

    .TimeSettit {
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        font-weight: 600;
        padding: 0 0 0 30px;
        border: 1px #E5EEF3 solid;
        color: #2274A4;
        background: #F5F9F9;
    }
</style>
