<template>
    <div class="containerBox">
        <h3 class="containertit">积分查看</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar style="margin-right: 216px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
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
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入用户名",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "dataPicker",
                        field: "timeDDD",
                        name: "时间筛选",
                        width:250
                    },

                ],
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg mr30', action: 'search'},
                    ],
                    right: [
                    ]
                },
                tableData: {
                    tHead: [{
                        name: '用户名',
                        field: "id",
                    },
                    {
                        name: '积分',
                        field: "deviceName"
                    },
                    {
                        name: '操作类型',
                        field: "deviceName"
                    },
                    {
                        name: '时间',
                        field: "deviceName"
                    },
                    ],
                    tData: [],
                    total: 0,
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
<style scoped>
    .containerBox .addlevel{
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        color: #fff;
        background:#1881BF ;
        border-radius: 20px;
        padding: 4px 18px;
    }
    .containerBox .addlevel i{
        margin-right: 5px;
    }
</style>
