<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="submit_data">
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-radio-group label="权限类别"
                                    prop="pertype"
                                    formLabelWidth="80px"
                                    :value="ruleForm.pertype"
                                    :options="options.pertype"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-select label="权限属性" prop="type"
                               formLabelWidth="80px"
                               :value="ruleForm.type"
                               :options="options.type"
                               @ygForm="getData"></yg-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="权限名称" prop="title"
                              formLabelWidth="80px"
                              :value="ruleForm.title"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-select label="父节点" prop="pid"
                               formLabelWidth="80px"
                               :value="ruleForm.pid"
                               :options="options.pid"
                               @ygForm="getData"></yg-select>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="显示顺序" prop="sort"
                              formLabelWidth="80px"
                              :value="ruleForm.sort"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-input label="模块名称" prop="index"
                              formLabelWidth="80px"
                              :value="ruleForm.index"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="菜单图标" prop="icon"
                              formLabelWidth="80px"
                              :value="ruleForm.icon"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <div style="padding-left: 80px" class="remarkBox clear">
                    <label style="top: 10px">备注</label>
                    <textarea :value="ruleForm.remark" style="height: 36px"></textarea>
                </div>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="24">
                    <yg-select-multiple formLabelWidth="80px" label="接口链接"
                                        prop="url"
                                        :value="ruleForm.url" :options="options['url']"
                                        @ygForm="getData"></yg-select-multiple>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addAction('submit_data')">确 定</el-button>
            <el-button @click="isHide">取 消</el-button>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'
    import {SystemSeting} from "../../../services/systemSetingService";

    export default {
        props:["isedit"],
        data() {
            return {
                isAdd:this.isedit,
                ruleForm: {
                    pertype:1, //权限类别
                    type:'',   //权限属性
                    title:'',  //权限名称
                    pid:'',    //父节点
                    sort:'',  //显示顺序
                    index:'', //模块名称
                    icon:'',  //菜单图标
                    remark:'', //备注信息
                    url:[],   //接口链接
                },
                rules: {
                    title: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {pattern:/\S/,  message: '请正确输入', trigger: 'blur'}
                    ],

                },
                options: {
                    pertype: [
                        {value: 0, label: '移动端'},
                        {value: 1, label: '后台系统'},
                    ],
                    type: [
                        {value: 0, label: '页面'},
                        {value: 1, label: '按钮'},
                    ],
                    pid:[

                    ],
                    url: [

                    ],
                },

            };
        },
        created() {
            this.getEditData();
            this.getDefOptions();

        },
        methods: {
            getDefOptions() {
                SystemSeting.instance().getPidList()
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.pessionList;
                            this.options.pid = this.lzh.renderOptionData(data, ["id", "title"], ["value", "label"]);
                        } else if (res.code == 400) {
                            this.$message.error(res.msg);
                        } else {
                            this.$message.error('获取数据失败');
                        }
                    })
                SystemSeting.instance().getAdminUrlPression()
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.list;
                            this.options.url = this.lzh.renderOptionData(data, '', ["value", "label"]);
                        } else if (res.code == 400) {
                            this.$message.error(res.msg);
                        } else {
                            this.$message.error('获取数据失败');
                        }
                    })
            },
            addAction(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        if (JSON.stringify(this.isAdd) == '{}') {
                            let data = this.ruleForm;
                            data['url'] = this.ruleForm['url'].join(',');
                            SystemSeting.instance().addPression(data)
                                .then((res) => {
                                    if (res.code == 200) {
                                        this.$message({
                                            message: '添加成功',
                                            type: 'success'
                                        });
                                        this.setRefresh();
                                    } else if (res.code == 400) {
                                        this.$message.error(res.msg);
                                    } else {
                                        this.$message.error('添加失败');
                                    }
                                })
                        } else {
                            /*  let data =  this.ruleForm;
                                data['id'] = this.isAdd.id
                                //编辑角色
                                SystemSeting.instance().editPression(data)
                                    .then((res) => {
                                        if (res.code == 200) {
                                            this.$message({
                                                message: '编辑成功',
                                                type: 'success'
                                            });
                                            this.setRefresh();
                                        } else if(res.code == 400){
                                            this.$message.error(res.msg);
                                        }else {
                                            this.$message.error('编辑失败');
                                        }
                                    })
                            }*/

                        }
                    }else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            isHide() {
                this.$emit('isHide', false);
            },
            getData(obj) {
                this.ruleForm[obj.prop] = obj.value;
            },
            setRefresh() {
                this.$refs["submit_data"].resetFields();
                this.$emit('flushList', true);
                this.isHide();
            },
            getEditData() {
            },

        },
        watch: {
            isedit: {
                handler(newData, oldData) {
                    this.isAdd = newData;
                    if(JSON.stringify(this.isAdd)=="{}"){
                        this.ruleForm.url='';
                        this.ruleForm.remark='';
                        this.$refs['submit_data'].resetFields();
                    }else {
                        this.getEditData();
                    }
                },
                deep: true
            },
        }
    }
</script>

<style>
    .remarkBox{
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }
    .remarkBox label{
        position: absolute;
        left: 0;
        top: 0;
        font-size: 14px;
        line-height: 15px;
        color:#555555;
        float: left;
    }
    .remarkBox textarea{
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        border: none;
        margin-left: 0;
        color: #606266;
        width: 100%;
        outline: none;
        height: 68px;
        background: rgba(247,247,247,1);
        float: left;
        padding-left: 15px;
        resize: none;
    }
</style>
