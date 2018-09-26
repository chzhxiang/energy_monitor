<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-radio-group label="权限类别"
                                    prop="devicetype"
                                    :value="ruleForm.devicetype"
                                    :options="options.devicetype"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="权限名称" prop="title"
                              :value="ruleForm.title"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-select label="父节点" prop="pid"
                               :value="ruleForm.pid"
                               :options="options.pid"
                               @ygForm="getData"></yg-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="级数" prop="sort"
                              :value="ruleForm.sort"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-input label="显示顺序" prop="sort"
                              :value="ruleForm.sort"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="模块名称" prop="index"
                              :value="ruleForm.index"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-radio-group label="是否菜单"
                                    prop="type"
                                    :value="ruleForm.type"
                                    :options="options.type"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="23">
                    <yg-select-multiple label="API" placeholder="请选择项目"
                                        prop="url"
                                        :value="ruleForm.url"
                                        :options="options.url"
                                        @ygForm="getData"></yg-select-multiple>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="菜单图标" prop="icon"
                              :value="ruleForm.icon"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank></yg-blank>
                <el-col :span="11">
                    <yg-input label="备注" prop="remark"
                              :value="ruleForm.remark"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addAction('insertAdmin')">确 定</el-button>
            <el-button @click="isHide">取 消</el-button>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        data() {
            return {
                ruleForm: {
                    title: '',
                    pid: '',
                    sort: '',
                    index: '',
                    type: '0',
                    url: [],
                    icon: '',
                    devicetype:"0",
                    remark: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    ],
                    index: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    rid: [
                        {required: true, message: '请选择角色', trigger: 'change'}
                    ],
                    type: [
                        {required: true, message: '请选择用户类型', trigger: 'change'}
                    ]
                },
                options: {
                    pid: [
                        {value: '1', label: '超级角色'},
                        {value: '2', label: '维修角色'},
                        {value: '3', label: '管理角色'}
                    ],
                    type: [
                        {value: '0', label: '不是'},
                        {value: '1', label: '是'},
                    ],
                    devicetype: [
                        {value: '0', label: '移动端'},
                        {value: '1', label: '后台系统端'},
                    ],
                    url: []
                },

            };
        },
        mounted() {
            let config = {
                method: 'GET',
                url: '/api/admin/pression/getAdminUrl',
                data: {},
            };
            this.$axios.ajax(config).then((res) => {
                console.log(res);
                if (res.code != 200) {
                    this.$message.error(res.msg);
                    return;
                }
                const urlList = [];
                for (let val of res.data.list) {
                    urlList.push({value: val, label: val});
                    console.log(val);
                }
                this.options.url = urlList;
            }).catch((error) => {
                console.log(error);
            });
        },
        methods: {
            addAction(ruleForm) {
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
        }
    };
</script>

<style>
</style>
