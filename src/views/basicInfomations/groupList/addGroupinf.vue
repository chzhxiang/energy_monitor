<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ChangeTable">
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-input label="集团编号" prop="number"
                              :value="ruleForm.number"
                              formLabelWidth="80px"
                              @ygForm="getData"></yg-input>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-input label="集团名称" prop="name"
                              :value="ruleForm.name"
                              formLabelWidth="100px"
                              @ygForm="getData"></yg-input>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="11">
                    <yg-select label="所属集团" prop="pid"
                               placeholder="请选择用户角色"
                               :value="ruleForm.pid"
                               formLabelWidth="80px"
                               :options="options.pid"
                               @ygForm="getData"></yg-select>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <yg-radio-group label="是否启用" prop="status"
                                    :value="ruleForm.status"
                                    formLabelWidth="100px"
                                    :options="options.status"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="24">
                    <yg-select-multiple label="包含项目" placeholder="请选择项目"
                                        prop="pmids"
                                        :value="ruleForm.pmids"
                                        formLabelWidth="80px"
                                        :options="options.pmids"
                                        @ygForm="getData"></yg-select-multiple>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <div style="padding-left: 80px" class="remarkBox clear">
                    <label>描述信息</label>
                    <textarea :value="ruleForm.describe"></textarea>
                </div>
            </el-row>
            <el-row v-if="JSON.stringify(isAdd)!='{}'" :gutter="0">
                <el-col :span="11">
                    <div class="defbox"><label>创建人</label>{{ruleForm.createid}}</div>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <div class="defbox"><label>创建时间</label>{{ruleForm.createat}}</div>
                </el-col>
            </el-row>
            <el-row v-if="JSON.stringify(isAdd)!='{}'" :gutter="0">
                <el-col :span="11">
                    <div class="defbox"><label>修改人</label>{{ruleForm.updateid}}</div>
                </el-col>
                <yg-blank :span="2"></yg-blank>
                <el-col :span="11">
                    <div class="defbox"><label>修改时间</label>{{ruleForm.updateat}}</div>
                </el-col>
            </el-row>
            <el-row :gutter="0">
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
        props:["isedit"],
        data() {
            return {
                isAdd:this.isedit,
                ruleForm: {
                    number:"",
                    name:"",
                    pid:"",
                    status:0,
                    pmids:"",
                    describe:"",
                    createat:'',
                    createid:'',
                    updateat:'',
                    updateid:''
                },
                rules: {
                    number: [
                        {required: true, message: '请输入集团编号', trigger: 'blur'},
                        {pattern:/^\w+$/, message: '请正确输入集团编号', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输集团名称', trigger: 'blur'},
                        {pattern:/\S/,  message: '请正确输入集团名称', trigger: 'blur'}
                    ],
                },
                options: {
                    status: [
                        {value: 0, label: '启用'},
                        {value: 1, label: '禁用'},
                    ],
                    pid: [
                        {value: '1', label: '超级角色'},
                        {value: '2', label: '维修角色'},
                        {value: '3', label: '管理角色'}
                    ],

                    pmids: [
                        {value: '1', label: '超级角色'},
                        {value: '2', label: '维修角色'},
                        {value: '3', label: '管理角色'}
                    ],
                },

            };
        },
        created(){
            this.getOptinnData();
            if(JSON.stringify(this.isAdd)!="{}"){
                this.getEditData()
            }

        },
        methods: {
            getEditData(){
                //获取能耗类型
                this.$axios.ajax({
                    method: 'GET',
                    url:this.$url.groupDetailInfo,
                    data: {
                       id:this.isAdd.id
                    }
                }).then((res) => {
                    if(res.code==200){
                        let data = res.data.info;

                        lzh.renderData(data,this.ruleForm)


                    }else if(res.code == 400){
                        this.$message.error(res.msg);
                    }else{
                        this.$message.error('信息获取失败，请稍后再试！');
                    }

                })
            },
            getOptinnData(){

            },
            addAction(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
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
                this.ruleForm[obj.prop] = obj.value;
            },
        },
        watch: {
            isedit: {
                handler(newData, oldData) {
                    this.isAdd = newData;
                    if(JSON.stringify(this.isAdd)=="{}"){
                        this.$refs['ChangeTable'].resetFields();
                    }else {
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
        color: #606266;
        margin-left: 0;
        width: 100%;
        outline: none;
        height: 68px;
        background: rgba(247,247,247,1);
        float: left;
        padding-left: 15px;
        resize: none;
    }
    .tablecr .el-tabs--card>.el-tabs__header{
        padding-right: 40px;
    }
    .defbox{
        height: 36px;
        line-height: 36px;
        white-space: nowrap;
    }
    .defbox label{
        margin-right: 43px;
    }
</style>
