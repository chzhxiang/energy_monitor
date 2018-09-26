<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="modifyAdmin">
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-upload-img label="用户头像" prop="avatar"
                                   :value="ruleForm.avatar"
                                   :imageUrl="options.avatar"
                                   @ygForm="getData"></yg-upload-img>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-input label="账号" prop="username"
                              :value="ruleForm.username"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="密码" prop="password"
                              type="password"
                              :value="ruleForm.password"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-select label="用户角色" prop="rid"
                               placeholder="请选择用户角色"
                               :value="ruleForm.rid"
                               :options="options.rid"
                               @ygForm="getData"></yg-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-select label="用户类型" prop="type"
                               placeholder="请选择用户角色"
                               :value="ruleForm.type"
                               :options="options.type"
                               @ygForm="getData"></yg-select>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-radio-group label="查看所有项目"
                                    prop="allpm"
                                    :value="ruleForm.allpm"
                                    :options="options.allpm"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="23">
                    <yg-select-multiple label="所属项目" placeholder="请选择项目"
                                        prop="pmid"
                                        :value="ruleForm.pmid"
                                        :options="options.pmid"
                                        @ygForm="getData"></yg-select-multiple>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-select label="所属部门" placeholder="请选择用户角色"
                               prop="did"
                               :value="ruleForm.did"
                               :options="options.did"
                               @ygForm="getData"></yg-select>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-select label="姓名" prop="name"
                               placeholder="请选择用户角色"
                               :value="ruleForm.name"
                               :options="options.name"
                               @ygForm="getData"></yg-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="手机号" prop="phone"
                              :value="ruleForm.phone"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-input label="邮箱" prop="email"
                              :value="ruleForm.email"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-radio-group label="系统用户" prop="issystemuser"
                                    :value="ruleForm.issystemuser"
                                    :options="options.issystemuser"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-radio-group label="状态" prop="status"
                                    :value="ruleForm.status"
                                    :options="options.status"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addAction('modifyAdmin')">确 定</el-button>
            <el-button @click="isHide">取 消</el-button>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        props: ['info'],
        data() {
            return {
                editInfo: this.info || null,
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
                    issystemuser: '0',
                    status: '0',
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
                    avatar: '',
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
                    issystemuser: [
                        {value: '0', label: '不是'},
                        {value: '1', label: '是'},
                    ],
                    status: [
                        {value: '0', label: '正常'},
                        {value: '1', label: '禁止'},
                    ],
                },

            };
        },
        mounted() {
            this.getValue();
        },
        methods: {
            addAction(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        console.table(Object.assign({}, this.ruleForm));
                        console.log('接口数据' + '/api/badmin/admin/editAdmin');
                        this.$axios.post('/api/admin/badmin/editAdmin', this.ruleForm).then((res) => {
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
            getValue() {
                this.$refs['modifyAdmin'].resetFields();
                this.ruleForm = Object.assign({}, this.editInfo, this.ruleForm);
            }
        },
        watch: {
            info: {
                handler(newData, oldData) {
                    this.editInfo = newData;
                    this.getValue();
                },
                deep: true
            }
        }
    };
</script>

<style>

</style>
