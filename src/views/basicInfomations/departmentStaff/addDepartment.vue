<template>
    <div class="addDepartment">
        <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
            <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                    <yg-upload-img v-if="jtem.yt == 'img'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                   :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]"
                                   @ygForm="getData"></yg-upload-img>
                    <yg-blank v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                    <yg-input v-else-if="jtem.yt == 'input'" :disabled="jtem.disabled||false" :class="{hasDisabled:jtem.disabled}" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                              :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]" @ygForm="getData"></yg-input>
                    <yg-select v-else-if="jtem.yt == 'select'" :disabled="jtem.disabled||false" :class="{hasDisabled:jtem.disabled}" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                               :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]"
                               :options="options[jtem.name]" @ygForm="getData"></yg-select>
                    <yg-select-multiple v-else-if="jtem.yt == 'select-multiple'" :disabled="jtem.disabled||false" :class="{hasDisabled:jtem.disabled}"  :formLabelWidth="jtem.labelWidth" :label="jtem.label"
                                        :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                        :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                        @ygForm="getData"></yg-select-multiple>
                    <yg-radio-group v-else-if="jtem.yt == 'radio'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                    :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                    @ygForm="getData"></yg-radio-group>
                    <div v-else-if="jtem.yt == 'onlyShow'&&JSON.stringify(isAdd)!='{}'" class="defbox"><label>{{jtem.label}}</label>{{ruleForm[jtem.name]}}</div>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('insertAdmin')">确 定</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'
    import {BasicsInformation} from "../../../services/basicsInformationService";

    export default {
        props:["isedit"],
        data() {
            return {
                isAdd:this.isedit,
                labels: [
                    [
                        {label: '部门名称',labelWidth:"100px", name: 'name', yt: 'input', placeholder: '请输入姓名', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '所属类型',labelWidth:"100px", name: 'type', yt: 'radio', len: 11},
                    ],
                    [
                        {label: '所属区域',labelWidth:"100px", disabled:true, name: 'area', yt: 'select', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '所属对象',labelWidth:"100px", disabled:true, name: 'sid', yt: 'select', len: 11},
                    ],
                    [
                        {label: '所属部门',labelWidth:"100px", name: 'pid', yt: 'select', placeholder: '请选择部门', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '部门主管',labelWidth:"100px", name: 'supervisor', yt: 'select', placeholder: '请选择职位', len: 11},
                    ],
                    [
                        {label: '创建用户',labelWidth:"100px",  name: 'creater', yt: 'onlyShow', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '创建时间',labelWidth:"100px",  name: 'creater_at', yt: 'onlyShow',  len: 11},
                    ],
                ],
                ruleForm: {
                    name:'',    //部门名称
                    type:1,   //所属类型：1平台；2集团；3单体项目
                    area:'',  //所属区域
                    sid:'',     //所属对象
                    pid:'',     //所属部门
                    supervisor:'', //部门主管
                    creater_at:''
                },
                options:{
                    type: [
                        {value: 1, label: '平台'},
                        {value: 2, label: '集团'},
                        {value: 3, label: '单体项目'},
                    ],
                    sid: [
                        //{value: 1, label: '平台'},
                    ],
                    pid: [
                        //{value: 1, label: '平台'},
                    ],
                    supervisor:[]
                },
                rules:{
                    name:[
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {pattern:/\S/, message: '请正确输入', trigger: 'focus'},
                    ],
                    area:[
                        {required: false, message: '请选择', trigger: 'blur'},
                    ],
                    sid:[
                        {required: false, message: '请选择', trigger: 'blur'},
                    ],
                    pid:[
                        {required: false, message: '请选择', trigger: 'blur'},
                    ],
                    supervisor:[
                        {required: false, message: '请选择', trigger: 'blur'},
                    ],
                },

            };
        },
        created(){
            this.getOptiondata();
            if(JSON.stringify(this.isAdd)!="{}"){
                this.getEditData();
            }
        },
        methods: {
            getOptiondata(){
                //获取职位下拉数据
                BasicsInformation.instance().getPositionArray()
                    .then((res) => {
                        if (res.code == 200) {
                            //let data = res.data.getPositionArray;
                            //this.options.position = this.lzh.renderOptionData(data,["id","name"],["value","label"]);
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    }).then((res) => {
                    //获取所属对象下拉框数据
                    BasicsInformation.instance().getProjectArray({type:this.ruleForm.type})
                        .then((res) => {
                            if (res.code == 200) {
                                let data = res.data.projectArray;
                                if (this.ruleForm.type ==1){
                                    this.options.pid = this.lzh.renderOptionData(data,["departid","departname"],["value","label"]);
                                    this.ruleForm.sid= '';
                                    this.options.sid = [];
                                }
                                if (this.ruleForm.type ==2){
                                    this.options.sid = this.lzh.renderOptionData(data,["programid","programname"],["value","label"]);
                                    this.ruleForm.pid= '';
                                    this.options.pid = [];
                                }
                                if (this.ruleForm.type ==3){
                                    this.options.sid = this.lzh.renderOptionData(data,["programid","programname"],["value","label"]);
                                    this.ruleForm.pid= '';
                                    this.options.pid = [];
                                }
                            } else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else {
                                this.$message.error('获取数据失败');
                            }
                        })
                })
            },
            addAction(ruleForm) {
                let it = this;
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        //添加部门
                        if (valid) {
                            if(JSON.stringify(this.isAdd) =='{}'){
                                let data = this.ruleForm;
                                if(data['sid'] == ""){
                                    data['sid']=0;
                                }
                                BasicsInformation.instance().addDepartmentInfo(data)
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
                                //编辑部门
                                let data =this.ruleForm;
                                data['id']=this.isAdd.id;
                                BasicsInformation.instance().ediDepartmentInfo(data)
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
                    }
                })
            },
            isHide() {
                this.$emit('isHide', false);
            },
            setRefresh(){
                this.$refs["insertAdmin"].resetFields();
                this.$emit('flushList', true);
                this.isHide();
            },
            getData(obj) {
                this.ruleForm[obj.prop] = obj.value;
                if(obj.prop == 'type'){
                    this.typeChange(obj);
                    this.getOptiondata();
                }
                if(obj.prop == 'sid'){
                    this.programChange(obj.value);
                }

            },
            getEditData(){
                this.ruleForm.type = this.isAdd.type;
                let data = {};
                BasicsInformation.instance().getStaffDetail({id:this.isAdd.id})
                    .then((res) => {
                        if (res.code == 200) {
                            data = res.data;
                            if(data.sid == 0){
                                data.sid = '';
                            }
                            data.value = data.type;
                            this. typeChange(data);
                            this.getOptiondata()
                            if(data.value!=1){
                                this.programChange(data.sid);
                            }
                            this.lzh.renderData(data,this.ruleForm);

                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    })
            },
            typeChange(obj){
                if(obj.value==1){
                    this.labels[1][2].disabled = true;
                    this.labels[1][0].disabled = true;
                    this.rules.sid[0].required = false

                }else {
                    this.labels[1][2].disabled = false;
                    this.labels[1][0].disabled = false;
                    this.rules.sid[0].required = true;
                }
            },
            programChange(val){
                BasicsInformation.instance().getDepartArray({type:this.ruleForm.type,program:val})
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.departList;
                            this.options.pid = this.lzh.renderOptionData(data,["departid","name"],["value","label"]);
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    })
            },
        },
        watch: {
            isedit: {
                handler(newData, oldData) {
                    this.isAdd = newData;
                    if(JSON.stringify(this.isAdd)=="{}"){
                        this.$refs['insertAdmin'].resetFields();
                    }else {
                        this.getEditData();
                    }
                },
                deep: true
            },
        },
        updated(res){
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
    }
    .defbox label{
        margin-right: 43px;
    }
    .popupWindow .addDepartment .el-form .el-row:nth-child(1) .el-radio+.el-radio{
        margin-left: 14px;
    }
</style>
