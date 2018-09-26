<template>
    <div class="containerBox">
        <h3 class="containertit">等级管理</h3>
        <div class="clear" style="padding: 20px 30px 20px 43px;position: relative;">
            <span class="fr addlevel" @click="isShowPopup.addLevel=true"><i class="el-icon-circle-plus-outline"></i>新 增</span>
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
        <el-dialog class="popupWindow" title="新增等级" :visible.sync="isShowPopup.addLevel" width="741px">
            <AddLevel @isHide="isShowPopup.addLevel = false" @flushList="falush=new Date()"></AddLevel>
       </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddLevel from "./addLevel.vue"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,AddLevel
        },
        data() {
            return {
                isShowPopup: {
                    addLevel: false,
                },
                tableData: {
                    tHead: [{
                        name: '等级名称',
                        field: "id",
                    },
                    {
                        name: '课程主图',
                        type:"image",
                        field: "img",
                    },
                    {
                        name: '展示位置',
                        field: "deviceName"
                    },
                    {
                        name: '在线时长',
                        field: "deviceName"
                    },
                    {
                        name: '学习时长',
                        field: "deviceName"
                    },
                    {
                        name: '接单数',
                        field: "deviceName"
                    },
                    {
                        name: '节能证书',
                        field: "alarmTime"
                    },
                    {
                        name: '用户评价',
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
