<template>
    <div class="Analysis pr">
        <div class="Analysis_title">
            用户列表
            <span style="float:right;margin-right: 30px">
                <el-button type='small' @click="excelExport(false)" round style=" background: #1881BF; width:130px">导出Excel模板</el-button>
                <excelUpload :objectId="uploadObjectId" :fields="uploadFields" :buttonText="uploadButtonText" :notNullFields="uploadNotNullFields" v-on:success="uploadExcelSuccess" v-on:fail="uploadExcelFail"></excelUpload>
                <el-button type='small' @click="excelExport(true)" round style=" background: #1881BF; width:100px">导出Excel</el-button>
                <el-button type='small' @click="createUser()" round style=" background: #1881BF;">添加</el-button>
           </span>
        </div>
        <div class="Analysis_table_content">
            <div class="table">
                <el-table :data="tableData" style="width: 100%;text-align: center;" stripe :header-cell-style="{background:'#f1f1f1',textAlign:'center'}"
                          @sort-change="userListOrdered"
                          :default-sort="{prop:'userName',order:'ascending'}">
                    <el-table-column v-for="(item,index) in tableKey" :key="index" :prop="item.name" :label="item.value"  :sortable="item.sortable"></el-table-column>
                    <el-table-column label="" width="200">
                        <template slot-scope="scope">
                            <el-button type="small" icon="el-icon-remove-outline" circle v-show="scope.row.isSystemUser==0" @click="removeUser(scope.row)"></el-button>
                            <el-button type="small" icon="el-icon-edit-outline" circle @click="editUser(scope.row)"></el-button>
                            <el-button type="small" icon="el-icon-setting" circle @click="setPassword(scope.row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <el-pagination
                    @size-change="handlePageSizeChange"
                    @current-change="handlePageNumChange"
                    :current-page="pageInfo.pageNum"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageInfo.pageSize" layout="total, sizes, prev, pager, next, jumper"
                    :total="pageInfo.total">
                </el-pagination>
            </div>
            <!--新增和修改用户信息-->
            <div class="UserListDialog">
                <el-dialog title="编辑用户信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
                    <br>
                    <div class="dialog_content">
                        <el-form :model="formData" label-width="100px" :rules="rules" ref="userForm">
                            <el-row :gutter="5">
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="用户名称" prop="realName">
                                        <el-input v-model="formData.realName" style="width:250px"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="用户类别">
                                        <el-select v-model="formData.type" style="width:250px">
                                            <el-option
                                                v-for="item in userTypes"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="5">
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="手机" prop="phone">
                                        <el-input v-model="formData.phone" style="width:250px"/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="角色">
                                        <el-select v-model="formData.rid" style="width:250px">
                                            <el-option
                                                v-for="item1 in roleList"
                                                :key="item1.id"
                                                :label="item1.name"
                                                :value="item1.id">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="5">
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="性别" prop="gender">
                                        <el-select v-model="formData.gender" style="width:250px">
                                            <el-option
                                                v-for="item1 in genderList"
                                                :key="item1.id"
                                                :label="item1.name"
                                                :value="item1.id">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="电子邮箱" prop="email">
                                        <el-input v-model="formData.email" style="width:250px"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="5">
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="状态">
                                        <el-radio-group v-model="formData.status">
                                            <el-radio :label="0">禁止</el-radio>
                                            <el-radio :label="1">正常</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="是否系统用户">
                                        <el-radio-group v-model="formData.isSystemUser">
                                            <el-radio :label="1">是</el-radio>
                                            <el-radio :label="0">否</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="5">
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="创建用户">
                                        <el-input v-model="formData.createUserName" style="width:250px" disabled/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="创建时间">
                                        <el-date-picker disabled
                                                        v-model="formData.createTimestamp"
                                                        type="datetime" style="width:250px">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="5">
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="更新用户">
                                        <el-input v-model="formData.updateUserName" style="width:250px" disabled/>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" style="width:50%">
                                    <el-form-item label="更新时间">
                                        <el-date-picker disabled
                                                        v-model="formData.updateTimestamp"
                                                        type="datetime" style="width:250px">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                    <span slot="footer" class="dialog-footer ub">
                        <el-button type="primary" @click="updateUser()" round style=" background: #1881BF;">保 存</el-button>
                        <el-button @click="dialogVisible = false" round>取 消</el-button>
                    </span>
                </el-dialog>

                <!--修改用户密码对话框-->
                <div class="UserListDialog1">
                    <el-dialog title="修改密码" :visible.sync="passwordFormVisible"  :before-close="handleClose">
                        <br>
                        <div class="dialog_content">
                            <el-form :model="passwordForm" label-width="100px" :rules="passwordRules" ref="passwordForm">
                                <el-form-item label="用户名" prop="realName">
                                    <el-input v-model="passwordForm.realName" disabled style="width:250px"/>
                                </el-form-item>
                                <el-form-item label="新密码" prop="password">
                                    <el-input v-model="passwordForm.password1" style="width:250px"/>
                                </el-form-item>
                                <el-form-item label="新密码" prop="password">
                                    <el-input v-model="passwordForm.password2" style="width:250px"/>
                                </el-form-item>
                            </el-form>
                        </div>
                        <span slot="footer" class="dialog-footer ub">
                            <el-button type="primary" @click="createUserRecord()" round style=" background: #1881BF;">保 存</el-button>
                            <el-button @click="passwordFormVisible = false" round>取 消</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import vTable from '../../components/common/table.vue';
    import api from '../../axios/api.js';
    import excelUpload from '../../components/common/SingleExcelUpload.vue';
    import axios from 'axios';
    export default {
        name: "UserList",
        components:{vTable,excelUpload},
        data() {
            return {
                uploadObjectId:'AmAdmin',
                uploadFields:'id,userName,realName,rid,gender,type,status,email,phone,createId,updateId',
                uploadButtonText:'导入Excel',
                uploadNotNullFields:'realName',
                passwordFormVisible:false,
                passwordForm:{realName:'',password1:'',password2:''},
                userTypes:[
                    {
                        label:'管理员用户',
                        value:0
                    },{
                        label:'集团用户',
                        value:1
                    },{
                        label:'单栋建筑用户',
                        value:2
                    }
                ],
                orderbyField:'id',
                orderbyDirection:'asc',
                passwordRules:{},
                rules: {
                    realName: [
                        {required: true, message: '请输入用户姓名', trigger: 'blur'},
                        {min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur'}
                    ],
                    phone:[
                        {required:true, message:'请输入手机号码',trigger:'blur'},
                        {validator:(rule, value, callback) => {
                                if (value === '') {
                                    callback(new Error('手机号不可为空'));
                                } else {
                                    if (value !== '') {
                                        var reg=/^1[3456789]\d{9}$/;
                                        if(!reg.test(value)){
                                            callback(new Error('请输入有效的手机号码'));
                                        }
                                    }
                                    callback();
                                }
                            },trigger:'blur'}
                    ],
                    email:[
                        {required:true, message:'请输入电子邮箱',trigger:'blur'},
                        {validator:(rule, value, callback) => {
                                if (value === '') {
                                    callback(new Error('请正确填写邮箱'));
                                } else {
                                    if (value !== '') {
                                        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                                        if (!reg.test(value)) {
                                            callback(new Error('请输入有效的邮箱'));
                                        }
                                    }
                                    callback();
                                }
                            },trigger:'blur'}
                    ]
                },
                formData:{
                    isCreated:false,
                    userName:'',
                    type:0,
                    phone:'',
                    rid:'',
                    gender:'',
                    email:'',
                    isSystemUser:0,
                    status:1,
                    createUserId:'',
                    createTimestamp:'',
                    updateUserId:'',
                    updateTimestamp:''
                },
                dialogVisible:false,
                tableKey: [
                    {
                        name: 'userName',
                        value: '账号',
                        sortable:'custom'
                    },
                    {
                        name: 'realName',
                        value: '用户名',
                        sortable:'custom'
                    },
                    {
                        name: 'name',
                        value: '角色',
                        sortable:'custom'
                    },
                    {
                        name: 'genderName',
                        value: '性别',
                    },
                    {
                        name: 'typeName',
                        value: '类型'
                    },
                    {
                        name: 'statusName',
                        value: '状态',
                    }
                ],
                tableData:[],
                pageInfo:{pageNum:1,pageSize:10,total:0,pages:0},
                roleList:[],
                genderList:[{id:0,name:'未知'},{id:1,name:'男'},{id:2,name:'女'}]
            }
        },
        methods:{
            excelExport(val) {
                api.excelExport({
                    chineseNames:'账号,用户名,角色,性别,类型,状态',
                    fields:"a.userName,a.realName,b.name,if(a.gender = 1,'男',if(a.gender = 2, '女', '未知')) genderName," +
                    "IF(a.type = 0,'管理员用户',if(a.type = 1,'集团用户','单栋建筑用户')) typeName,IF(a.status = 1, '正常', '禁止') statusName",
                    //fields:'a.id,a.rid,a.userName,b.name,a.gender,a.type,a.status,a.isSystemUser,a.email,a.phone,a.createUserId,c.userName createUserName,a.createTimestamp,a.updateUserId,d.userName updateUserName,a.updateTimestamp',
                    relation:'AmAdmin a,AmRole b',
                    //relation:'AmAdmin a,AmRole b,AmAdmin c,AmAdmin d',
                    wheres:"a.rid=b.id and a.isDeleted='0'"+(val?'':' and 1=2 '),
                    //wheres:"a.rid=b.id and a.isDeleted='N' and a.createUserId=c.id and a.updateUserId=d.id",
                    order:this.orderByField+' '+this.orderbyDirection,
                    distinct:'false'
                });
            },
            userListOrdered(column) {
              let field = column.prop;
              let order = column.order;
              let orderby = 'descending'===order? 'desc':'asc';
              let orderbyClause = field+' '+orderby;
              this.orderByField = field;
              this.orderbyDirection = orderby;
              this.getUserList(orderbyClause);
            },
            createUserRecord(value) {
                //console.log("createUserRecord",value);
                api.commonPost('/api/admin/admin/addAdmin',{
                    did:'1',password:'password',username:value.realName,type:value.type,phone:value.phone,rid:value.rid,gender:value.gender,email:value.email,status:value.status,
                        issystemuser:value.isSystemUser,createId:value.createUserId,createAt:value.createTimestamp,updateId:value.updateUserId,updateAt:value.updateTimestamp,
                        realname:value.realName
                }).then(res=> {
                    this.$message({
                        type: 'success',
                        message: '创建成功!'
                    });
                    this.getUserList();
                    this.dialogVisible=false;
                    console.log(res);
                }) .catch(error=> {
                    console.log(error);
                    this.$message({
                        type: 'error',
                        message: '创建失败!'
                    });
                });
            },
            createUser() {
                this.formData={status:1,isSystemUser:1};
                this.formData.isCreated = true;
                this.dialogVisible = true;
            },
            updateUser() {
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        if (this.formData.isCreated) {
                            this.createUserRecord(this.formData)
                        } else {
                            this.updateUserRecord(this.formData);
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            removeUser(val) {
                this.$confirm('真的要删除此用户吗?', '信息', {
                    confirmButtonText: '是',
                    cancelButtonText: '否',
                    //iconClass:'el-icon-question'
                    type: 'warning'
                }).then(() => {
                    this.removeUserById(val.id);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
                console.log("table.length", this.tableData.length);
            },
            editUser(val) {
                Object.assign(this.formData,val);
                this.dialogVisible=true;
                this.formData.isCreated=false;
                console.log(this.formData);
            },
            setPassword(val) {
                this.passwordForm.realName=val.realName;
                this.passwordFormVisible=true;
            },
            handlePageSizeChange(val) {
                this.pageInfo.pageSize=val;
                this.getUserList();
            },
            handlePageNumChange(val) {
                this.pageInfo.pageNum=val;
                this.getUserList();
            },
            setRoleList(res) {
                this.roleList = res.data.list;
                //console.log("roleList",this.roleList);
            },
            setTableData(res) {
                this.tableData=res.data.list;
                for (let i=0; i<this.tableData.length; i++) {
                    let statusName = this.tableData[i].status==1?'正常':'禁止';
                    this.tableData[i].statusName=statusName;
                    let gender = this.tableData[i].gender;
                    let genderName = gender=='1'?'男':gender==2?'女':'未知';
                    this.tableData[i].genderName=genderName;
                    let typeName = this.userTypes[this.tableData[i].type].label;
                    this.tableData[i].typeName=typeName;
                }
            },
            setPageInfo(res) {
                this.pageInfo.pageNum = res.data.pageNum;
                this.pageInfo.pageSize=res.data.pageSize;
                this.pageInfo.total=res.data.total;
                this.pageInfo.pages=res.data.pages;
            },
            uploadExcelSuccess(res) {
                this.$message({
                    type: 'success',
                    message: '上传Excel文件成功!'
                });
              this.getUserList(null);
            },
            uploadExcelFail(error) {
                console.log("failed to upload excel file",error);
                this.$message({
                    type: 'error',
                    message: ('上传Excel文件失败! '+error)
                });
            },
            updateUserRecord(value) {
                //console.log("id.value",idValue);
                api.commonUpdate({
                    objId:'AmAdmin',
                    fields:{id:value.id,userName:value.userName,type:value.type,phone:value.phone,rid:value.rid,gender:value.gender,email:value.email,status:value.status,
                        isSystemUser:value.isSystemUser,createId:value.createUserId,createAt:value.createTimestamp,updateId:value.updateUserId,updateAt:value.updateTimestamp,
                        realName:value.realName}
                }).then(res=> {
                    this.$message({
                        type: 'success',
                        message: '更新成功!'
                    });
                    this.getUserList();
                    this.dialogVisible=false;
                    console.log(res);
                }) .catch(error=> {
                    console.log(error);
                    this.$message({
                        type: 'error',
                        message: '更新失败!'
                    });
                });
            },
            removeUserById(idValue) {
                //console.log("id.value",idValue);
                api.commonDelete({
                    objId:'AmAdmin',
                    fields:{"id":idValue}
                }).then(res=> {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getUserList();
                    console.log(res);
                }) .catch(error=> {
                    this.$message({
                        type: 'error',
                        message: '删除失败!'
                    });
                    console.log(error);
                });
            },
            getUserList(orderby) {
                api.commonGet({
                    page: this.pageInfo.pageNum,
                    pageSize:this.pageInfo.pageSize,
                    //pageSize:2,
                    //fields:'a.id,a.rid,a.userName,a.realName,b.name,a.gender,a.type,a.status,a.isSystemUser,a.email,a.phone,a.createId createUserId,a.createAt createTimestamp,a.updateId updateUserId,a.updateAt updateTimestamp',
                    fields:'a.id,a.rid,a.userName,a.realName,b.name,a.gender,a.type,a.status,a.isSystemUser,a.email,a.phone,a.createId createUserId,c.userName createUserName,a.createAt createTimestamp,a.updateId updateUserId,d.userName updateUserName,a.updateAt updateTimestamp',
                    //relation:'AmAdmin a,AmRole b',
                    relation:'AmAdmin a,AmRole b,AmAdmin c,AmAdmin d',
                    //wheres:"a.rid=b.id and a.isDeleted='0'",
                    wheres:"a.rid=b.id and a.isDeleted='0' and a.createId=c.id and a.updateId=d.id",
                    order:orderby==null? 'a.id':orderby,
                    distinct:'true'
                }).then(res=> {
                    console.log(res);
                    this.setTableData(res);
                    this.setPageInfo(res);
                }) .catch(error=> {
                    console.log(error);
                });
            },
            getRoleList() {
                api.commonGet({
                    page: this.pageInfo.pageNum,
                    pageSize:this.pageInfo.pageSize,
                    fields:'a.id,a.name',
                    relation:'AmRole a',
                    wheres:'1=1',
                    order:'a.id',
                    distinct:'true'
                }).then(res=> {
                    console.log(res);
                    this.setRoleList(res);
                }) .catch(error=> {
                    console.log(error);
                });
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        },
        mounted: function () {
            this.getUserList();
            this.getRoleList()
        }
    }
</script>

<style scoped>
    .Analysis {
        background: #ffffff;
        height: 840px;
        font-size: 14px;
        color: #838383;
    }

    .Analysis .Analysis_title {
        width: 100%;
        height: 36px;
        background: rgba(245, 249, 249, 1);
        line-height: 36px;
        padding-left: 27px;
        font-family: MicrosoftYaHei;
        color: rgba(34, 116, 164, 1);
        font-size: 16px;
    }

    .Analysis_content_condition {
        padding-left: 27px;
    }

    .Analysis_content {
        padding-top: 18px;
    }

    .time_granularity {
        margin-left: 34px;
        line-height: 24px;
    }

    .energy_type {
        width: 87px;
        height: 22px;
        text-align: center;
        border: 1px solid #909A9A;
        border-radius: 12px;
        overflow: hidden;
        /*margin-top: 18px;*/
    }

    .Analysis_content_charts {
        width: 100%;
        height: 350px;
        margin-top: 40px;
    }

    .charts {
        width: 100%;
        height: 100%;
    }

    .Analysis_table {
        font-size: 16px;
        color: #1881BF;
        line-height: 24px;
        height: 24px;
    }

    .blue_box {
        width: 5px;
        height: 18px;
        background: #1881BF;
        margin-left: 34px;
        margin-right: 13px;
        margin-top: 2px;
    }

    .Analysis_table_content {
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
    }

    .active {
        background: #1881BF;
        color: #ffffff;
    }

    .query_search {
        margin-left: 68px;
    }
</style>
<style>
    .UserListDialog .el-dialog {
        width: 50% !important;
    }

    .UserListDialog1 .el-dialog {
        width: 30% !important;
    }

    .UserListDialog .el-dialog__header {
        padding: 0 !important;
        padding-left: 30px !important;
        background: #1881BF !important;
        color: #ffffff !important;
    }

    .UserListDialog .el-dialog__header .el-dialog__title {
        line-height: 36px;
        color: #ffffff;
        font-size: 16px;
    }

    .UserListDialog .el-dialog__header .el-dialog__headerbtn {
        border-radius: 50%;
        top: 10px;
    }

    .UserListDialog .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
        color: #ffffff;
    }

    .UserListDialog .el-dialog__body {
        padding: 0;
        height: 380px;
    }

    .UserListDialog1 .el-dialog__body {
        padding: 0;
        height: 200px;
    }

    .UserListDialog .dialog_content {
        padding: 0 33px;
    }

    .mart18 {
        margin-top: 18px;
    }

    .UserListDialog .dialog_content .el-input {
        width: 50%;
        /*min-width: 500px;*/
        margin-left: 10px;
    }

    .dialog_content .el-input .el-input__inner {
        border-radius: 15px;
        height: 26px;
        line-height: 26px;
        border-color: #838383;
    }

    .reference_range {
        position: absolute;
        left: 225px;
    }

    .reference_timeset {
        position: absolute;
        left: 430px;
    }

    .energy_query {
        width: 79px;
        height: 24px;
        background: #1881BF;
        border-radius: 12px;
        color: #ffffff;
        position: absolute;
        right: 0px;
        top: 18px;
        line-height: 24px;
        text-align: center;
    }

    .reference_table {
        margin-top: 50px;
    }

    .UserListDialog .dialog-footer {
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -50px;
    }

    .UserListDialog .dialog-footer .el-button {
        line-height: 5px;
        height: 24px;
        width: 80px;
        font-size: 14px;
    }

    .Analysis .Analysis_title .el-button {
        line-height: 5px;
        height: 24px;
        width: 80px;
        font-size: 14px;
    }

</style>
