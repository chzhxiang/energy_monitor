<template>
    <div class="containerBox">
        {{flush1}}
        <h3 class="containertit" style="margin-bottom: 20px">部门员工</h3>
        {{flush2}}
        <el-tabs v-model="activeTable" type="card" @tab-click="handleClick">
            <el-tab-pane label="员工管理" name="first">
                <div style="padding: 0 30px 0 43px;position: relative;">
                    <searchBar style="margin-right: 224px" :inSearchData="setSearchtool" @outData="staffSearBtclick" :btnList="searToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter"
                               :cellclassname="cellclassname"
                               :headercellclassname="headercellclassname"
                               :flush="flush1"
                               :inTableData="staffManagementData"
                               @rowClick="staffTablerowClick"
                               :inAjax="staffManagementajax"
                               @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
            <el-tab-pane label="部门管理" name="second">
                <div style="padding: 0 30px 0 43px">
                    <searchBar style="margin-right: 224px" :inSearchData="divisionalSearchtool" @outData="divisionalSearBtclick" :btnList="divisionalToolBtnList"></searchBar>
                </div>
                <div style="padding: 0 30px;padding-bottom: 40px">
                    <dataTable :formatter="formatter"
                               :cellclassname="cellclassname"
                               :headercellclassname="headercellclassname"
                               :flush="flush2"
                               :inTableData="divisionalManagementData"
                               @rowClick="divisionalTablerowClick"
                               :inAjax="divisionalManagementajax"
                               @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-dialog class="popupWindow" :title="popupTit.addPopup" :visible.sync="isShowPopup.isShowAddStaff" width="741px">
            <addStaff :isedit="staffEditItem" @isHide="isShowPopup.isShowAddStaff = false" @flushList="flush1=new Date()"></addStaff>
       </el-dialog>
        <el-dialog class="popupWindow" :title="popupTit.addPopup" :visible.sync="isShowPopup.isShowAddDepartment" width="741px">
            <addDepartment :isedit="departEditItem" @isHide="isShowPopup.isShowAddDepartment = false" @flushList="flush2=new Date()"></addDepartment>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除角色" :visible.sync="isShowPopup.deleteRole" width="420px">
            <DeleteInfor :delInfo="isdelInfo" contentText="真的要删除此角色吗？" @isHide="isShowPopup.deleteRole = false" @flushList="flush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import addStaff from "./addStaff.vue"
    import addDepartment from "./addDepartment.vue"
    //import deleteInfor from "../../../components/common/deleteInfor.vue"
    export default {
        name: 'table',
        components: {
            searchBar, dataTable,addStaff,addDepartment
        },
        data() {
            return {
                flush1:'',
                flush2:'',
                popupTit:{
                    addPopup:""
                },
                isdelInfo:{
                    method:"get",
                    url:this.$url.delRole,
                    data: {
                        id:'',
                    }
                },
                staffEditItem:{},
                departEditItem:{},
                activeTable: 'first',
                isShowPopup: {
                    isShowAddStaff: false,
                    isShowAddDepartment: false,
                    deleteInfor:false
                },
                setSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "用户姓名",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "searInput",
                        placeholder: "",
                        name: "所属对象",
                        width: 242,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "所属部门",
                        width: 242,
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
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr30', action: 'add'},
                        {label: '导 入', icon: 'el-icon-download', className: '', action: 'insert'}
                    ]
                },
                staffManagementData: {
                    tHead: [{
                        name: '姓名',
                        field: "name",
                    }, {
                        name: '工号',
                        field: "number"                        ,
                    }, {
                        name: '职位',
                        field: "position",
                    }, {
                        name: '部门',
                        field: "dname"
                    },
                    {
                        name: '所属对象',
                        field: "sname"
                    },
                    {
                        name: '办公电话',
                        field: "tel"
                    },
                    {
                        name: '联系电话',
                        field: "phone"
                    },
                    {
                        name: 'E-mail',
                        field: "email"
                    },
                    {
                        name: '任职状态',
                        field: "status"
                    }
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                        },
                    ],
                    isMultiple: false,
                    isRank: true
                },
                staffManagementajax: {
                    url: this.$url.getStaffList,
                    method: "post",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },
                divisionalSearchtool: [
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "部门名称",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "",
                        name: "所属对象",
                        width: 242,
                    },
                ],
                divisionalToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg mr30', action: 'add'},
                        {label: '导 入', icon: 'el-icon-download', className: '', action: 'insert'}
                    ]
                },
                divisionalManagementData: {
                    tHead: [{
                        name: '部门名称',
                        field: "name",
                    }, {
                        name: '上级部门',
                        field: "pname"                        ,
                    }, {
                        name: '所属对象',
                        field: "sname",
                    }, {
                        name: '所属区域',
                        field: ""
                    },
                    {
                        name: '部门主管',
                        field: "supervisorname"
                    },
                    {
                        name: '手机号',
                        field: "pname"
                    },
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'edit',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                           /* filter: {
                                field: 'id',
                                needel: [1, 2, 3, 4, 5]
                            }*/
                        },
                        {
                            type: 'unshelve',
                            label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>"
                        },
                    ],
                    isMultiple: false,
                    isRank: true
                },
                divisionalManagementajax: {
                    url: this.$url.getDepartmentList,
                    method: "post",
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
            staffSearBtclick(oData) {
                if (oData.action == "add") {
                    this.staffEditItem = {};
                    this.popupTit.addPopup="添加员工";
                    this.isShowPopup.isShowAddStaff = true;
                }
            },
            divisionalSearBtclick(oData){
                if (oData.action == "add") {
                    this.departEditItem = {};
                    this.popupTit.addPopup="添加部门";
                    this.isShowPopup.isShowAddDepartment = true;
                }
            },
            staffTablerowClick(obj) {
                if (obj.type == 'del') {
                    this.isdelInfo.data.id=obj.rowData.id
                    this.isdelInfo = Object.assign({}, this.isdelInfo);
                    this.isShowPopup.deleteRole = true;
                }
                if (obj.type == 'edit') {
                    this.staffEditItem = Object.assign({},obj.rowData);
                    this.popupTit.addPopup="编辑员工";
                    this.isShowPopup.isShowAddStaff = true;
                }

            },
            divisionalTablerowClick(obj) {
                if (obj.type == 'del') {
                    this.isdelInfo.data.id=obj.rowData.id
                    this.isdelInfo = Object.assign({}, this.isdelInfo);
                    this.isShowPopup.deleteRole = true;
                }
                if (obj.type == 'edit') {
                    this.departEditItem = Object.assign({},obj.rowData);
                    this.popupTit.addPopup="编辑部门";
                    this.isShowPopup.isShowAddDepartment = true;
                }

            },
            selectionChange(selection) {
                console.log(selection, 555);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["在职", '离职']
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

        },

    }
</script>
<style>
</style>
