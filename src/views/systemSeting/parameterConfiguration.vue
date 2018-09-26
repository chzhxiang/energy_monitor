<template>
    <div class="systemSetingsBox">
        <h3 class="systemSetingstit">系统参数设置</h3>
        <div style="background: #fff;padding: 36px 58px">
            <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
                <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                    <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                        <yg-upload-img v-if="jtem.yt == 'img'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                       :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]" formLabelWidth="150px"
                                       @ygForm="getData"></yg-upload-img>
                        <yg-blank v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                        <yg-input v-else-if="jtem.yt == 'input'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                  :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]" formLabelWidth="150px"
                                  @ygForm="getData"></yg-input>
                        <yg-select v-else-if="jtem.yt == 'select'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                   :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]" formLabelWidth="150px"
                                   :options="options[jtem.name]" @ygForm="getData"></yg-select>
                        <yg-select-multiple v-else-if="jtem.yt == 'select-multiple'" :label="jtem.label" formLabelWidth="150px"
                                            :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                            :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                            @ygForm="getData"></yg-select-multiple>
                        <yg-radio-group v-else-if="jtem.yt == 'radio'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                        :value="ruleForm[jtem.name]" :options="options[jtem.name]" formLabelWidth="150px"
                                        @ygForm="getData"></yg-radio-group>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" style="text-align: center;padding: 60px" class="dialog-footer">
                <div style="display: inline-block;margin: 0 auto">
                    <button class="publicSubBt publicSubConfirm mr30" @click="addAction('insertAdmin')">确 定</button>
                    <button class="publicSubBt " @click="isHide">取 消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../components/form/EnergyForm'

    export default {
        data() {
            return {
                labels: [
                    [
                        {label: '网站名称', name: 'username', yt: 'input', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '风格样式', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '网站logo', name: 'avatar', yt: 'img', len: 7},
                    ],
                    [
                        {label: '版权信息', name: 'username', yt: 'input', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '开放显示的页面', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '首页排名方式', name: 'type', yt: 'select', len: 7},
                    ],
                    [
                        {label: '默认语言', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '分页数量', name: 'username', yt: 'input', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '默认项目', name: 'type', yt: 'select', len: 7},
                    ],
                    [
                        {label: '数据起始年份', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '设备启动间隔', name: 'username', yt: 'input', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '单栋用户页面', name: 'type', yt: 'select', len: 7},
                    ],
                    [
                        {label: '多栋用户页面', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '系统管理员页面', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '建筑监控类型', name: 'type', yt: 'select', len: 7},
                    ],
                    [
                        {label: '科室列表页分组依据', name: 'type', yt: 'select', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '自动展示时间间隔', name: 'username', yt: 'input', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '积分商城地址', name: 'username', yt: 'input', len: 7},
                    ],
                    [
                        {label: '定时写值优化边界刷新WCF地址', name: 'phone', yt: 'input',inputType:'textarea', len: 23},
                    ],
                    [
                        {label: '访问服务验证', name: 'issystemuser', yt: 'radio', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '显示详细错误信息', name: 'issystemuser', yt: 'radio', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '显示弹出错误信息', name: 'issystemuser', yt: 'radio', len: 7},
                    ],
                    [
                        {label: '显示自动展示按钮', name: 'issystemuser', yt: 'radio', len: 7},
                        {yt: 'empty', len: 1},
                        {label: '显示是否需要验证', name: 'issystemuser', yt: 'radio', len: 7},
                    ],
                ],
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
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>

<style scoped>
    .systemSetingstit {
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
<style>
    .systemSetingsBox .el-form-item__label{
        text-align: left;
    }
    .systemSetingsBox .el-input--small .el-input__inner{
        height: 40px;
        line-height: 40px;
    }
    .systemSetingsBox .el-form-item--small .el-form-item__content,.systemSetingsBox .el-form-item--small .el-form-item__label{
        line-height: 40px;
    }
    .systemSetingsBox .el-form-item__content{
        height: 40px;
    }
    .systemSetingsBox .el-input__inner{
        border-color: #f7f7f7;
        background: #f7f7f7;
    }
    .systemSetingsBox .el-date-editor .el-input__inner, .systemSetingsBox .el-select .el-input__inner{
        border-radius:4px
    }
    .systemSetingsBox .el-form-item--mini.el-form-item,.systemSetingsBox .el-form-item--small.el-form-item{
        margin-bottom: 20px;
    }
    .systemSetingsBox .el-textarea__inner{
        background: #f7f7f7;
        border-color: #f7f7f7;
        resize: none;
    }
    .systemSetingsBox .el-form .el-row:nth-child(7) .el-form-item__label{
        line-height: 22px;
    }

</style>
