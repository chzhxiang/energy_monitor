<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ChangeTable">
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-select label="项目名称" prop="type"
                               placeholder="请选择用户角色"
                               :value="ruleForm.type"
                               formLabelWidth="110px"
                               :options="options.type"
                               @ygForm="getData"></yg-select>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-radio-group  label="状态" prop="isonline"
                                     :value="ruleForm.isonline"
                                     formLabelWidth="110px"
                                     :options="options.isonline"
                                     @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="监控界面名称" prop="username"
                              :value="ruleForm.username"
                              formLabelWidth="110px"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-select label="监控界面类型" prop="type"
                               placeholder="请选择用户角色"
                               :value="ruleForm.type"
                               formLabelWidth="110px"
                               :options="options.type"
                               @ygForm="getData"></yg-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <div class="branchNamebox clear">
                    <lable>监控界面内容</lable>
                    <textarea disabled></textarea>
                </div>
            </el-row>
            <el-row :gutter="0">
                <div class="upimgfile">
                    <lable>上传封面</lable>
                    <div class="upbt">
                        <div class="clickupfile">
                            <div><input type="file"><i class="el-icon-upload"></i>选择上传文件</div>jpg/png/gif格式，大小不超过500kb
                        </div>
                    </div>
                </div>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="创建用户" prop="username"
                              :value="ruleForm.username"
                              formLabelWidth="110px"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-input label="创建时间" prop="username"
                              :value="ruleForm.username"
                              formLabelWidth="110px"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('ChangeTable')">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        data() {
            return {
                headercellstyle:{
                    background:"rgba(241,241,241,1)",
                    textAlign:"center",
                    fontSize:"14px",
                    color:"#3A3A3A"
                },
                cellstyle:{
                    textAlign:"center"
                },
                ruleForm: {
                    avatar: '',
                    username: '',
                    password: '',
                    rid: '',
                    type: '',
                    allpm: '0',
                    pmid: [],
                    did: '',
                    name: '',
                    phone: '',
                    email: '',
                    status: '0',
                    isonline:'0',
                    xxx: [
                        {id: 1, name: 'xx', age: 12, sex: 1},
                        {id: 2, name: 'bb', age: 22, sex: 2},
                    ],
                },
                xxx: {
                    name: [false, false],
                    age: [false, true]
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    ],
                    rid: [
                        {required: true, message: '请选择角色', trigger: 'change'}
                    ],
                    type: [
                        {required: true, message: '请选择用户类型', trigger: 'change'}
                    ]
                },
                options: {
                    rid: [
                        {value: '1', label: '超级角色'},
                        {value: '2', label: '维修角色'},
                        {value: '3', label: '管理角色'}
                    ],
                    type: [
                        {value: '1', label: '平台管理员'},
                        {value: '2', label: '集团管理员'},
                        {value: '3', label: '项目管理员'}
                    ],
                    allpm: [
                        {value: '0', label: '不是'},
                        {value: '1', label: '是'},
                    ],
                    pmid: [
                        {value: '1', label: '项目1'},
                        {value: '2', label: '项目2'},
                        {value: '3', label: '项目3'},
                    ],
                    did: [
                        {value: '1', label: '部门1'},
                        {value: '2', label: '部门2'},
                    ],
                    name: [
                        {value: '1', label: '张三'},
                        {value: '2', label: '李四'},
                    ],
                    status: [
                        {value: '0', label: '是'},
                        {value: '1', label: '否'},
                    ],
                    isonline: [
                        {value: '0', label: '启用'},
                        {value: '1', label: '禁用'},
                    ],
                },

            };
        },
        methods: {
            addAction(ruleForm) {
                console.log(this.ruleForm.xxx);
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        console.table(Object.assign({}, this.ruleForm));
                        console.log('接口数据' + '/api/admin/admin/addAdmin');
                        this.$axios.post('/api/admin/admin/addAdmin', this.ruleForm).then((res) => {
                            if (res.code == 200) {
                                this.$message({
                                    message: '添加成功',
                                    type: 'success'
                                });
                            } else {
                                this.$message.error('添加失败');
                            }
                        }).catch((error) => {
                            console.log(error);
                        }).then(() => {
                            this.$refs[ruleForm].resetFields();
                            console.log('清空数据');
                            this.$emit('flushList', true);
                            this.isHide();
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            isHide() {
                this.$emit('isHide', false);
            },
            getData(obj) {
                console.log(typeof obj.value);
                this.ruleForm[obj.prop] = obj.value;
            },
            actionXX(row, column, cell, event) {
                if (column.label == '+') {
                    for (let i = 0; i < this.ruleForm.xxx.length; i++) {
                        if (row.id == this.ruleForm.xxx[i].id) {
                            this.ruleForm.xxx.splice(i, 1);
                            for (let k in this.xxx) {
                                this.xxx[k].splice(i, 1);
                            }
                            break;
                        }
                    }

                } else {

                }
            },
            actionDb(row, column, cell, event) {
                console.log(column);
                if (column.property == 'name') {
                    this.clickEdit('name', row);
                } else if (column.property == 'age') {
                    this.clickEdit('age', row);
                }

            },
            clickEdit(field, row) {
                for (let i = 0; i < this.ruleForm.xxx.length; i++) {
                    if (row.id == this.ruleForm.xxx[i].id) {
                        this.xxx[field][i] = true;
                        let val = this.ruleForm.xxx[i][field];
                        this.ruleForm.xxx[i][field] = ' ';
                        this.ruleForm.xxx[i][field] = val;
                        break;
                    }
                }
            },
            headerClick(column, event) {
                if (column.label == '+') {
                    this.ruleForm.xxx.push({id: -Math.ceil(Math.random() * 9999), name: '', age: 0, sex: 0})
                    for (let k in this.xxx) {
                        this.xxx[k].push(false);
                    }
                }
                console.log(column);
            },
            blurInput(index, field) {
                console.log('blurInput');
                this.xxx[field][index] = false;

                let val = this.ruleForm.xxx[index][field];
                this.ruleForm.xxx[index][field] = ' ';
                this.ruleForm.xxx[index][field] = val;
            },
            rowclassname(obj){
                if(++obj.rowIndex%2 ==0){
                    return 'linebg'
                }

            }
        }
    };
</script>
<style scoped>

</style>
<style>
    .popupWindow .addbr .el-table--small td, .el-table--small th{
        padding: 7px 0;
    }
    .popupWindow .addbr .el-table--small td{
        padding: 1px 0;
    }
    .popupWindow .addbr .linebg{
        background:rgba(247,251,252,1);
    }
    .popupWindow .addbr .el-input__inner{
        height: 100%;
        width: 100%;
        background: transparent;
        border: none;
        text-align: center;
        padding: 0 25px 0 0;
    }

    .popupWindow .el-form-item--small .el-form-item__error {
        padding-top: 3px;
    }
    .changerecordList h4{
        padding-left: 50px;
        font-size: 14px;
        color: #3a3a3a;
        height: 40px;
        line-height: 40px;
        background: rgba(241,241,241,1);
    }
    .changerecordList ul li span{
        color: #555555;
        font-size: 14px;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        width: 50%;
        padding-left: 50px;
        box-sizing: border-box;
    }
    .changerecordList ul{
        background: rgba(247,251,252,1);
        height: 200px;
        overflow: auto;
    }
    .branchNamebox{
        margin-bottom: 20px;
    }
    .branchNamebox lable{
        font-size: 14px;
        line-height: 15px;
        color:#555555;
        float: left;
    }
    .branchNamebox textarea{
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        border: none;
        color: #606266;
        margin-left: 26px;
        width: 578px;
        outline: none;
        height: 78px;
        background: rgba(247,247,247,1);
        float: left;
        padding-left: 15px;
        resize: none;
    }
    .branchNamebox span{
        display: inline-block;
        background: #1881BF;
        padding: 6px 29px;
        margin-left: 15px;
        margin-top: 25px;
        font-size: 14px;
        line-height: 15px;
        cursor: pointer;
        color: #fff;
        border-radius: 15px;
    }
    .upimgfile{
        box-sizing: border-box;
        margin-bottom: 10px;
        height: 36px;
    }
    .upimgfile lable{
        float: left;
        height: 36px;
        line-height: 36px;
    }
    .upimgfile .upbt{
        margin-left: 54px;
        float: left;
        height: 36px;
        line-height: 36px;
    }
    .upimgfile .clickupfile div{
        position: relative;
        box-sizing: border-box;
        padding-left: 10px;
        display: inline-block;
        width: 205.33px;
        margin-right: 15px;
        background: rgba(242,242,242,1);
        border-radius: 4px;

    }
    .upimgfile .clickupfile div i{
        font-size: 25px;position: relative;
        top:4px;
        margin-right: 10px;
        color: #838383;
    }
    .upimgfile .clickupfile div input{
        opacity: 0;
        cursor: pointer;
        outline: none;
        position: absolute;
        top:0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
    }

</style>
