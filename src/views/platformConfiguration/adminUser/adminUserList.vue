<style></style>
<template>
    <div class="containerBox">
        <h3 class="u-layout-title">用户列表</h3>
        <div class="position_r search-bar-box">
            <searchBar :inSearchData="inSearchData" @outData="btnClick" :btnList="btnList"></searchBar>
        </div>
        <div class="table-content-box">
            <dataTable :formatter="formatter" :inTableData="tableData" :inAjax="ajax" :flush="falush" :inSerachFilte="serachFilte" @selection="selectionChange" @rowClick="rowClick">
            </dataTable>
        </div>
        <el-dialog class="popupWindow avatar-up" :title="popupTit.addPopup" :visible.sync="isShow.insert" width="747px">
            <InsertAdmin :isedit="isEditItem" @isHide="isShow.insert = false" @flushList="falush=new Date()"></InsertAdmin>
        </el-dialog>
        <el-dialog class="popupWindow" title="修改密码" :visible.sync="isShow.modifyPassword" width="30%">
            <ModifyPassword @isHide="isShow.modifyPassword = false" :info="newPass"></ModifyPassword>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除用户" :visible.sync="isShow.deleteUser" width="420px">
            <DeleteInfor :delInfo="isdelInfo" contentText="真的要删除此用户吗？" @isHide="isShow.deleteUser = false" @flushList="falush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
import searchBar from '../../../components/common/searchBar.vue'
import dataTable from '../../../components/common/dataTable.vue'
import InsertAdmin from './insertAdmin.vue'
import ModifyPassword from './modifyPassword.vue'
import DeleteInfor from "../../../components/common/deleteInfor"

export default {
    components: {
        searchBar,
        dataTable,
        InsertAdmin,
        ModifyPassword,
        DeleteInfor
    },
    data() {
        return {
            falush: '',
            isShow: {
                insert: false,
                modifyPassword: false,
                deleteUser: false
            },
            isdelInfo:{
                method:"get",
                url:'',
                data: {
                    id:'',
                }
            },
            popupTit:{
                addPopup:""
            },
            isEditItem:{},
            newPass: {
                id: 0,
                username: ''
            },
            editInfo: {},
            editId: 0,
            serachFilte: {},
            tableData: {
                tHead: [
                    { name: '账号', field: "username" },
                    { name: '姓名', field: "realName" },
                    { name: '手机号', field: "phone" },
                    { name: '前端角色', field: "h5rolename" },
                    { name: '后端角色', field: "pcrolename" },
                    { name: '所属项目', width:400, field: "project" },
                    { name: '所属部门', field: "departname" },
                    { name: '系统用户', field: "issys" },
                    { name: '状态', field: "status" },
                ],
                tData: [],
                total: 0,
                actionBtns: [
                    { type: 'edit', label: '编辑', icon: '', },
                    { type: 'newPass', label: '修改密码', icon: '' },
                    { type: 'del', label: '删除', icon: '', /*filter: {field: 'issystemuser', needel: [0]}*/ }
                ],
                actionBtWidth:150,
                isMultiple: false,
                isRank: true
            },
            ajax: {
                url:this.$url.getAdminList,
                method: "post",
                data: {
                    pageNum: 1,
                    pageSize: 15
                },
                resData: ['list']
            },
            inSearchData: [{
                    type: "searInput",
                    field: "searchKey",
                    placeholder: "请输入账号、姓名等信息",
                    name: "搜索",
                    width: 242,
                },
                {
                    type: "searSelect",
                    field: "pmid",
                    name: "所属项目",
                    width: 100,
                    options: [
                        { label: '历史记录', options: [] },
                        {
                            label: '所有信息',
                            options: [
                                { key: "全 部", value: "" },
                                { value: '1', key: '项目1' },
                                { value: '2', key: '项目2' },
                                { value: '3', key: '项目3' },
                                { value: '4', key: '项目4' }
                            ]
                        }
                    ],
                },
                {
                    type: "searSelect",
                    field: "did",
                    name: "所属部门",
                    width: 100,
                    options: [
                        { label: '历史记录', options: [] },
                        {
                            label: '所有信息',
                            options: [
                                { key: "全 部", value: "" },
                                { value: '1', key: '财务部' },
                                { value: '2', key: '维修部' }
                            ]
                        }
                    ],
                },
                {
                    type: "select",
                    field: "status",
                    name: "状态",
                    width: 81,
                    options: [
                        { key: "全 部", value: "" },
                        { key: "正常", value: "0" },
                        { key: "禁止", value: "1" }
                    ]
                },
            ],
            btnList: {
                left: [
                    { label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search' },
                ],
                right: [
                    { label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'insert' },
                ]
            },
        }
    },
    mounted() {},
    methods: {
        btnClick(outData) {
            if (outData.action == 'search') {
                this.serachFilte = outData.data;
            } else if (outData.action == 'insert') {
                this.isEditItem = {};
                this.popupTit.addPopup="新增用户";
                this.isShow.insert = true;
            }
        },
        selectionChange(selection) {
            console.log(selection);
        },
        rowClick(row) {
            if (row.type == 'newPass') {
                this.newPass.id = row.rowData.id;
                this.newPass.username = row.rowData.username;
                this.isShow.modifyPassword = true;
            } else if (row.type == 'edit') {
                this.isEditItem = Object.assign({},row.rowData);
                this.popupTit.addPopup="编辑用户";
                this.isShow.insert = true;
            } else if (row.type == 'del') {
                this.isdelInfo.data.id=row.rowData.id;
                this.isdelInfo = Object.assign({}, this.isdelInfo);
                this.isShow.deleteUser = true;
            }
        },
        formatter(row, column, cellValue) {
            if (column.property == 'status') {
                let status = ['正常', '禁止']
                return status[cellValue];
            }
            if (column.property == 'issys') {
                let issystemuser = ['否', '是']
                return issystemuser[cellValue];
            }
            return cellValue;
        },
        cellclassname(obj) {
            if (obj.column.property == 'status') {
                if (obj.row[obj.column.property] == "0") {
                    return "fontRed";
                } else {
                    return "fontGreen";
                }
            }
        },
        isHide(value) {
            this.editId = 0;
            this.isShow.modifyAdmin = false
        }
    },
}

</script>
