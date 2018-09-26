<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="submit_data">
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="角色名称" prop="name" :value="ruleForm.name" formLabelWidth="80px" @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-radio-group label="系统用户" prop="issys" :value="ruleForm.issys" formLabelWidth="100px" :options="options.issys" @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row  v-if="JSON.stringify(isAdd) =='{}'" :gutter="0">
                <el-col :span="24">
                    <yg-radio-group label="角色类别" prop="type" :value="ruleForm.type" formLabelWidth="100px" :options="options.type" @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row  v-if="JSON.stringify(isAdd)!='{}'" :gutter="0">
                <el-col :span="11">
                    <div class="defbox">
                        <label>创建人</label>{{ruleForm.createname}}</div>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <div class="defbox">
                        <label>创建时间</label>{{ruleForm.createat}}</div>
                </el-col>
            </el-row>
            <el-row  v-if="JSON.stringify(isAdd)!='{}'" :gutter="0">
                <el-col :span="11">
                    <div class="defbox">
                        <label>修改人</label>{{ruleForm.updatename}}</div>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <div class="defbox">
                        <label>修改时间</label>{{ruleForm.updateat}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="0">
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('submit_data')">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>
<script>

import EnergyForm from '../../../components/form/EnergyForm'
import {SystemSeting} from "../../../services/systemSetingService";
export default {
    name: "roleList",
    props:["isedit"],
    data() {
        return {
            isAdd:this.isedit,
            ruleForm: {
                name:'',
                issys:1,
                type:1,
                createname:'',
                createat:'',
                updatename:'',
                updateat:''

            },
            rules: {
                name: [
                    {required: true, message: '请输入角色名称', trigger: 'blur'},
                    {pattern:/\S/,  message: '请正确输入角色名称', trigger: 'blur'}
                ],
            },
            options: {
                issys: [
                    { value: 0, label: '是' },
                    { value: 1, label: '否' },
                ],
                type: [
                    { value: 0, label: '移动端' },
                    { value: 1, label: '后台系统' },
                    { value: 2, label: '首页模块' },
                ],

            },

        };
    },
    created(){
        if(JSON.stringify(this.isAdd)!="{}"){
            this.getEditData()
        }
    },
    methods: {
        addAction(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                //添加角色
                if (valid) {
                    if(JSON.stringify(this.isAdd) =='{}'){
                        let data ={
                            name:this.ruleForm.name,
                            issys:this.ruleForm.issys,
                            type:this.ruleForm.type
                        }
                        SystemSeting.instance().addRoleInfo(data)
                            .then((res) => {
                                if (res.code == 200) {
                                    this.$message({
                                        message: '添加成功',
                                        type: 'success'
                                    });
                                    this.setRefresh();
                                } else if(res.code == 400){
                                    this.$message.error(res.msg);
                                }else {
                                    this.$message.error('添加失败');
                                }
                            })
                    }else {
                        //编辑角色
                        let data ={
                            id:this.isAdd.id,
                            name:this.ruleForm.name,
                            issys:this.ruleForm.issys,
                        }
                        SystemSeting.instance().editRoleInfo(data)
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
                    }

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        setRefresh(){
            this.$refs["submit_data"].resetFields();
            this.$emit('flushList', true);
            this.isHide();
        },
        isHide() {
            this.$emit('isHide', false);
        },
        getData(obj) {
            this.ruleForm[obj.prop] = obj.value;
        },
        getEditData(){
            this.lzh.renderData(this.isAdd,this.ruleForm)
          /*  this.ruleForm.name = this.isAdd.name;
            this.ruleForm.issys = this.isAdd.issys;
            this.ruleForm.createname = this.isAdd.createname;
            this.ruleForm.createat = this.isAdd.createat;
            this.ruleForm.updatename = this.isAdd.updatename;
            this.ruleForm.updateat = this.isAdd.updateat;*/
        }
    },
    watch: {
        isedit: {
            handler(newData, oldData) {
                this.isAdd = newData;
                if(JSON.stringify(this.isAdd)=="{}"){
                    console.log(111);
                    this.$refs['submit_data'].resetFields();
                 }else {
                    console.log(222);
                    this.getEditData();
                 }
            },
            deep: true
        },
    }
};

</script>
<style scoped>


</style>
<style>
.popupWindow .addbr .el-table--small td,
.el-table--small th {
    padding: 7px 0;
}

.popupWindow .addbr .el-table--small td {
    padding: 1px 0;
}

.popupWindow .addbr .linebg {
    background: rgba(247, 251, 252, 1);
}

.popupWindow .addbr .el-input__inner {
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

.changerecordList h4 {
    padding-left: 50px;
    font-size: 14px;
    color: #3a3a3a;
    height: 40px;
    line-height: 40px;
    background: rgba(241, 241, 241, 1);
}

.changerecordList ul li span {
    color: #555555;
    font-size: 14px;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 50%;
    padding-left: 50px;
    box-sizing: border-box;
}

.changerecordList ul {
    background: rgba(247, 251, 252, 1);
    height: 200px;
    overflow: auto;
}

.remarkBox {
    margin-bottom: 20px;
}

.remarkBox label {
    font-size: 14px;
    line-height: 15px;
    color: #555555;
    float: left;
}

.remarkBox textarea {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    color: #606266;
    margin-left: 52px;
    width: 585px;
    outline: none;
    height: 68px;
    background: rgba(247, 247, 247, 1);
    float: left;
    padding-left: 15px;
    resize: none;
}

.tablecr .el-tabs--card>.el-tabs__header {
    padding-right: 40px;
}

.defbox {
    height: 36px;
    line-height: 36px;
}

.defbox label {
    margin-right: 43px;
}

</style>
