<template>
    <div class="containerBox">
        <h3 class="containertit">意见反馈</h3>
            <div style="padding: 0 30px 0 43px;position: relative;">
                <searchBar style="margin-right: 120px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
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
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable
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
                        placeholder: "搜索反馈内容",
                        name: "搜索",
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
                        {label: '批量忽略', icon: 'el-icon-view', className:'', action: 'hide'},

                    ]
                },
                tableData: {
                    tHead: [{
                        name: '反馈编码',
                        field: "id",
                    }, {
                        name: '反馈内容',
                        field: "alarmType"                        ,
                    }, {
                        name: '发布人',
                        field: "alarmLevel",
                    }, {
                        name: '发布时间',
                        field: "deviceName"
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
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>忽略</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>采纳</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                    ],
                    isMultiple: true,
                    isRank: true
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
