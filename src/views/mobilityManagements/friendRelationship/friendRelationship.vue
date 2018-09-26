<template>
    <div class="containerBox">
        <h3 class="containertit">好友关系</h3>
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
        <el-dialog class="popupWindow" title="好友列表"  :visible.sync="isShowPopup.outPut" width="740px">
            <outPut @isHide="isShowPopup.outPut = false" @flushList="falush=new Date()"></outPut>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import outPut from './outPut.vue'
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,outPut
        },
        data() {
            return {
                activeTable: 'first',
                isShowPopup: {
                    outPut: false,
                },
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "搜索姓名或手机号",
                        name: "搜索",
                        width: 242,
                    },
                ],
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '导出', icon: 'el-icon-upload2', className:'', action: 'output'},

                    ]
                },
                tableData: {
                    tHead: [{
                        name: '姓名',
                        field: "id",
                    }, {
                        name: '手机号',
                        field: "alarmType"                        ,
                    }, {
                        name: '好友数量',
                        field: "alarmLevel",
                    }, {
                        name: '加入的群组数量',
                        field: "deviceName"
                    },
                    {
                        name: '举报数量',
                        field: "deviceName"
                    },
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看详情</span>",
                            filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }
                        },
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看举报内容</span>",
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
                if (oData.action == "output") {
                    this.isShowPopup.outPut = true;
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
