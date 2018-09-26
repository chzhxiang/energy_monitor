<template>
    <div class="AdminRoleListBox">
        <h3 class="AdminRoleListtit">角色列表</h3>
        <div style="padding: 0 30px;position: relative;">
            <searchBar :inSearchData="setSearchtool" @outData="searBtclick" :btnList="searToolBtnList"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable :formatter="formatter" :flush="flush" :cellclassname="cellclassname" :headercellclassname="headercellclassname" :inTableData="tableData" :inAjax="ajax" @selection="selectionChange" @rowClick="rowClick">
            </dataTable>
        </div>
        <el-dialog class="popupWindow" :title="popupTit.addPopup" :visible.sync="isShowPopup.addRole" width="709px">
            <AddRole :isedit="editItem" @isHide="isShowPopup.addRole = false" @flushList="flush=new Date()"></AddRole>
        </el-dialog>
        <el-dialog class="popupWindow" title="分配权限-对外演示组" :visible.sync="isShowPopup.roleNodes" width="550px">
            <RoleNodes :pressions="setPression" @isHide="isShowPopup.roleNodes = false" @flushList="flush=new Date()"></RoleNodes>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除角色" :visible.sync="isShowPopup.deleteRole" width="420px">
            <DeleteInfor :delInfo="isdelInfo" contentText="真的要删除此角色吗？" @isHide="isShowPopup.deleteRole = false" @flushList="flush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
import searchBar from "../../../components/common/searchBar.vue"
import dataTable from "../../../components/common/dataTable.vue"
import RoleNodes from "./roleNodes.vue"
import AddRole from "./addRole.vue"
import DeleteInfor from "../../../components/common/deleteInfor"

export default {
    name: 'table',
    components: {
        searchBar,
        dataTable,
        AddRole,
        DeleteInfor,
        RoleNodes
    },
    data() {
        return {
            flush:'',
            editItem:{},
            setPression:{},
            isdelInfo:{
                method:"get",
                url:this.$url.delRole,
                data: {
                    id:'',
                }
            },
            isShowPopup: {
                addRole: false,
                deleteRole: false,
                roleNodes: false,
            },
            popupTit:{
                addPopup:""
            },
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
            searToolBtnList: {
                left: [
                    { label: '查 询', icon: 'el-icon-search', className: 'bulueBg mr40', action: 'search' },
                ],
                right: [
                    { label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add' },
                ]
            },
            tableData: {
                tHead: [
                    {name: '角色名称', field: "name"},
                    {name: '角色类别', field: "type"},
                    {name: '是否系统角色', field: "issys"},
                    {name: '创建时间', field: "createat"},
                    {name: '创建人', field: "createname"}
                ],

                tData: [],
                total: 0,
                actionBtns: [{
                        type: 'edit',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",

                    },
                    {
                        type: 'nodes',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>分配权限</span>"
                    },
                    {
                        type: 'del',
                        label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>",
                        filter: {
                            field: 'issys',
                            needel: [1]
                        }
                    },
                ],
                isMultiple: false
            },
            ajax: {
                url:this.$url.getRoleList,
                method: "post",
                data: {
                    pageNum: 1,
                    pageSize: 15
                },
                resData: ['roleList']
            },

        }
    },
    methods: {
        searBtclick(oData) {
            if (oData.action == "add") {
                this.editItem = {};
                this.popupTit.addPopup="添加角色";
                this.isShowPopup.addRole = true;
            }
        },
        rowClick(row) {
            if (row.type == 'del') {
                this.isdelInfo.data.id=row.rowData.id
                this.isdelInfo = Object.assign({}, this.isdelInfo);
                this.isShowPopup.deleteRole = true;
            }
            if (row.type == 'nodes') {
                this.setPression = Object.assign({},row.rowData);
                this.isShowPopup.roleNodes = true;
            }
            if (row.type == 'edit') {
                this.editItem = Object.assign({},row.rowData);
                this.popupTit.addPopup="编辑角色";
                this.isShowPopup.addRole = true;
            }
        },
        selectionChange(selection) {
            console.log(selection);
        },
        formatter(row, column, cellValue) {
            if (column.property == 'isSys') {
                let a = ["是", '否']
                return a[cellValue];
            }
            if (column.property == 'type') {
                let a = ["前端", '后台', '模块']
                return a[cellValue];
            }
            if (column.property == 'issys') {
                let a = ["是", '否']
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
