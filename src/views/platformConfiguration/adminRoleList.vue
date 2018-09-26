<template>
    <div class="AdminRoleListBox">
        <h3 class="AdminRoleListtit">角色列表</h3>
        <div style="padding: 0 30px;position: relative;">
            <searchBar :inSearchData="setSearchtool"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable :formatter="formatter" :cellclassname="cellclassname" :headercellclassname="headercellclassname" :inTableData="tableData" :inAjax="ajax" @selection="selectionChange">
            </dataTable>
        </div>
    </div>
</template>
<script>
import searchBar from "../../components/common/searchBar"
import dataTable from "../../components/common/dataTable"
import PopupWindow from "../../components/common/popupWindow"

export default {
    name: 'table',
    components: {
        searchBar,
        dataTable,
        PopupWindow
    },
    data() {
        return {
            setSearchtool: [{
                    type: "searInput",
                    field: "searInput",
                    placeholder: "请输入角色名称",
                    name: "搜索",
                    width: 242,
                },
                {
                    type: "select",
                    field: "type",
                    name: "角色类别",
                    width: 100,
                    options: [
                        { key: "全部", val: "" },
                        { key: "类型1", val: "1" },
                        { key: "类型2", val: "2" }
                    ]
                },
            ],
            tableData: {
                tHead: [{
                    name: '角色名称',
                    field: "alarmType"
                }, {
                    name: '角色类别',
                    field: "alarmlocal"
                }, {
                    name: '是否系统角色',
                    field: "deviceName"
                }, {
                    name: '创建时间',
                    field: "alarmTime"
                }, {
                    name: '创建人',
                    field: "alarmLevel"
                }],

                tData: [],
                total: 0,
                actionBtns: [{
                        type: 'info',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                        filter: {
                            field: 'id',
                            needel: [1, 2, 3, 4, 5]
                        }
                    },
                    { type: 'hulve', label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>分配权限</span>" },
                ],
                isMultiple: false
            },
            ajax: {
                url: this.$url.getRoleList,
                method: "get",
                data: {
                    pageNum: 1,
                    pageSize: 2
                },
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
                return "pl20";
            }
        },
        headercellclassname(obj) {
            if (obj.columnIndex == 0) {
                return "pl20";
            }
        },
    },

}

</script>
<style scoped>
.AdminRoleListBox {
    background: #fff;
}

.AdminRoleListtit {
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
