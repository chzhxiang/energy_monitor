<template>
    <div class="containerBox">
        <h3 class="containertit">动态管理</h3>
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
        <el-dialog class="popupWindow" title="动态详情" :visible.sync="isShowPopup.details" width="741px">
            <Details @isHide="isShowPopup.details = false" @flushList="falush=new Date()"></Details>
       </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import Details from "./details.vue"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,Details
        },
        data() {
            return {
                isShowPopup: {
                    details: false,
                },
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "搜索动态内容",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "动态类型",
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

                    ]
                },
                tableData: {
                    tHead: [{
                        name: '动态编码',
                        field: "id",
                    }, {
                        name: '动态类型',
                        field: "alarmType"                        ,
                    }, {
                        name: '动态内容',
                        field: "deviceName"
                    },
                    {
                        name: '点赞数',
                        field: "deviceName"
                    },
                    {
                        name: '评论数',
                        field: "alarmTime"
                    },
                    {
                        name: '发布人',
                        field: "alarmLevel"
                    },
                    {
                        name: '发布时间',
                        field: "alarmLevel"
                    },
                    {
                        name: '状态',
                        field: "status"
                    }
                    ],
                    tData: [],
                    total: 0,
                    actionBtWidth:200,
                    actionBtns: [
                        {
                            type: 'details',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>详情</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>隐藏</span>"
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>显示</span>"
                        },
                        {
                            type: 'changeTable',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看评论</span>"
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
                    this.isShowPopup.details = true;
                }
            },
            selectionChange(selection) {
                console.log(selection, 555);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["隐藏", '显示']
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
                if (obj.type == "details") {
                    this.isShowPopup.details = true;
                }

            }
        },

    }
</script>
<style>
</style>
