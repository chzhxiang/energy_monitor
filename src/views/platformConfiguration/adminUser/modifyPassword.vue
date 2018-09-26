<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="newPass">
            <el-row :gutter="0">
                <el-col :span="23">
                    <yg-input label="用户名"
                              :value="ruleForm.username"
                              :disabled="true"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="23">
                    <yg-input label="新密码" prop="password"
                              type="password"
                              :value="ruleForm.password"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="23">
                    <yg-input label="新密码确认" prop="checkPass"
                              type="password"
                              :value="ruleForm.checkPass"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('newPass')">确 定</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        props:
            ['info'],
        data() {
            var validatePass = (rule, value, callback) => {
                {
                    console.log('validatePass');
                    console.log(value);
                    if (value === '') {
                        callback(new Error('请输入密码'));
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                console.log('validatePass2');
                console.log(value);
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value != this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                id: this.info.id,
                ruleForm: {
                    username: this.info.username,
                    password: '',
                    checkPass: '',
                },
                rules: {
                    password: [
                        {validator: validatePass, trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            addAction(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/admin/badmin/changePwd', {
                            id: this.id,
                            password: this.ruleForm.password
                        }).then((res) => {
                            if (res.code == 200) {
                                this.$message({
                                    message: '密码修改成功',
                                    type: 'success'
                                });
                            } else {
                                this.$message.error('修改失败');
                            }
                        }).catch((error) => {
                            console.log(error);
                        }).then(() => {
                            this.$refs[ruleForm].resetFields();
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
        },
        watch: {
            info: {
                handler(newData, oldData) {
                    console.log('-----------------');
                    console.log(newData);
                    this.id = newData.id;
                    this.ruleForm.username = newData.username;
                },
                deep: true
            }
        }
    };
</script>

