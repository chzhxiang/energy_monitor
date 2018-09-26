<template>
    <div class="containerBox">
        <h3 class="containertit">类别管理</h3>
        <el-tabs v-model="activeTable" type="card" @tab-click="handleClick">
            <el-tab-pane label="专家在线" name="first">
                <div style="padding: 0 30px 0 43px;position: relative;">
                    <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter" :cellclassname="cellclassname" :headercellclassname="headercellclassname" :inTableData="specialisttableData" @rowClick="tablerowClick" :inAjax="specialistajax" @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
            <el-tab-pane label="在线学习" name="second">
                <div style="padding: 0 30px 0 43px">
                    <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter" :cellclassname="cellclassname" :headercellclassname="headercellclassname" :inTableData="onlinetableData" @rowClick="tablerowClick" :inAjax="onlineajax" @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog class="popupWindow" title="新增编辑类别" :visible.sync="isShowPopup.addCategory" width="741px">
            <AddCategory @isHide="isShowPopup.addCategory = false" @flushList="falush=new Date()"></AddCategory>
        </el-dialog>
        <el-dialog class="popupWindow" title="类别下架" :visible.sync="isShowPopup.deleteInfor" width="420px">
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
        searchBar,
        dataTable,
        AddCategory,
        DeleteInfor
    },
    data() {
        return {
            activeTable: 'first',
            isShowPopup: {
                addCategory: false,
                deleteInfor: false
            },
            setSearchtool: [{
                type: "searInput",
                field: "searInput",
                placeholder: "请输入关键字",
                name: "搜索",
                width: 242,
            }, ],
            searToolBtnList: {
                left: [
                    { label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search' },
                ],
                right: [
                    { label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr40', action: 'add' },
                    { label: '导 入', icon: 'el-icon-download', className: '', action: 'insert' }
                ]
            },
            specialisttableData: {
                tHead: [{
                        name: '编号',
                        field: "id",
                    }, {
                        name: '类别名称',
                        field: "name",
                    }, {
                        name: '类别主图',
                        type: "image",
                        field: "icon",
                    }, {
                        name: '首页推荐位置',
                        field: "deviceName"
                    },
                    {
                        name: '创建人',
                        field: "recommend"
                    },
                    {
                        name: '创建时间',
                        field: "createat"
                    },
                    {
                        name: '状态',
                        field: "status"
                    }
                ],
                tData: [],
                total: 0,
                actionBtns: [{
                        type: 'edit',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                        filter: {
                            field: 'id',
                            needel: [1, 2, 3, 4, 5]
                        }
                    },
                    {
                        type: 'unshelve',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下架</span>"
                    },
                    {
                        type: 'changeTable',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看专家</span>"
                    },
                ],
                isMultiple: false,
                isRank: true
            },
            specialistajax: {
                url: this.$url.expertTypeList,
                method: "post",
                data: {
                    pageNum: 1,
                    pageSize: 15
                },
            },
            onlinetableData: {
                tHead: [{
                        name: '编号',
                        field: "id",
                    }, {
                        name: '类别名称',
                        field: "alarmType",
                    }, {
                        name: '类别主图',
                        type: "image",
                        field: "img",
                    }, {
                        name: '首页推荐位置',
                        field: "deviceName"
                    },
                    {
                        name: '创建人',
                        field: "alarmLevel"
                    },
                    {
                        name: '创建时间',
                        field: "alarmTime"
                    },
                    {
                        name: '状态',
                        field: "status"
                    }
                ],
                tData: [],
                total: 0,
                actionBtns: [{
                        type: 'edit',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                        filter: {
                            field: 'id',
                            needel: [1, 2, 3, 4, 5]
                        }
                    },
                    {
                        type: 'unshelve',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下架</span>"
                    },
                    {
                        type: 'changeTable',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>查看课程</span>"
                    },
                ],
                isMultiple: false,
                isRank: true
            },
            onlineajax: {
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
                let a = ["下架", '上架']
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
