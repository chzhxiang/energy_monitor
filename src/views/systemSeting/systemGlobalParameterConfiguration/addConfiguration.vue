<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
            <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                    <yg-upload-img v-if="jtem.yt == 'img'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                   :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]"
                                   @ygForm="getData"></yg-upload-img>
                    <yg-blank v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                    <yg-input v-else-if="jtem.yt == 'input'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                              :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]" @ygForm="getData"></yg-input>
                    <yg-select v-else-if="jtem.yt == 'select'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                               :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]"
                               :options="options[jtem.name]" @ygForm="getData"></yg-select>
                    <yg-select-multiple v-else-if="jtem.yt == 'select-multiple'" :formLabelWidth="jtem.labelWidth" :label="jtem.label"
                                        :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                        :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                        @ygForm="getData"></yg-select-multiple>
                    <yg-radio-group v-else-if="jtem.yt == 'radio'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                    :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                    @ygForm="getData"></yg-radio-group>
                    <div v-else-if="jtem.yt == 'onlyShow'" class="defbox"><label>{{jtem.label}}</label>{{ruleForm[jtem.name]}}</div>
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

    export default {
        props:['parametersType','getactiveItem',"clData","showData"],
        data() {
            return {
                typeData:this.parametersType,
                ingetactiveItem:this.getactiveItem,
                labels: [
                    [
                        {label: '所属大类',labelWidth:"100px", name: 'tType', yt: 'select', placeholder: '请选择类型', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '所属子类',labelWidth:"100px", name: 'type', yt: 'select', placeholder: '请选择类型', len: 11},
                    ],
                    [
                        {label: '类别名称',labelWidth:"100px", name: 'name', yt: 'input', placeholder: '请选择类型', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '排序',labelWidth:"100px", name: 'rank', yt: 'input', placeholder: '请选择类型', len: 11},
                    ],
                ],
                ruleForm: {
                    tType:'',
                    dtype:'',
                    type:'',
                    name:'',
                    rank:'',
                    creater:'',
                    creater_at:''
                },
                options:{
                    tType:[],
                    type:[],
                },
                rules:{
                    tType:[
                        {required: true, message: '请选择项目', trigger: 'blur'},
                        {pattern:/\S/, message: '选择项目', trigger: 'focus'},
                    ],
                    name:[
                        {required: true, message: '请输入类别名称', trigger: 'blur'},
                        {pattern:/^[\u4e00-\u9fffa-zA-Z]{1,20}$/, message: '输入上限20个字符', trigger: 'focus'},
                    ],
                    rank:[
                        {required: true, pattern:/\d/, message: '请正确输入排序', trigger: 'focus'},
                    ],
                },

            };
        },
        created(){
            this.getTypeData();
        },
        methods: {
            getTypeData(){
                let typedata = this.typeData;
                let data = []
                for(let i=0;i<typedata.length;i++){
                    data.push({value: typedata[i].id, label:  typedata[i].name})
                }
                this.options.tType = data;
                this.defSlect();
            },
            addAction(ruleForm) {
                let it = this;
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        it.$axios.ajax({
                            method: 'post',
                            url:it.$url.addParamsList,
                            data:{
                                type:it.ruleForm['dtype']||it.ruleForm['type'],
                                name:it.ruleForm['name'],
                                rank:it.ruleForm['rank'],
                            }
                        }).then((res) => {
                            if(res.code==200){
                                it.$message.success('添加成功！');
                                it.$refs[ruleForm].resetFields();
                                this.isHide();
                                this.$emit('flushList', true);
                                this.defSlect();
                            }else if(res.code == 400){
                                it.$message.error(res.msg);
                            }else{
                                it.$message.error('添加失败，请稍后再试');
                            }
                        })
                    }
                })
            },
            isHide() {
                this.$refs['insertAdmin'].resetFields();
                this.$emit('isHide', false);
            },
            getData(obj) {
                this.ruleForm[obj.prop] = obj.value;
                if(obj.prop=='tType'){
                    let typedata = this.typeData;
                    let data = []
                    for(let i=0;i<typedata.length;i++){
                        if(obj.value == typedata[i].id ){
                            if(typedata[i].tid ==0){
                                this.ruleForm['dtype'] = 0;
                                let arry = typedata[i].array;
                                let tdata = []
                                for(let i=0;i<arry.length;i++){
                                    tdata.push({value: arry[i].tid, label:  arry[i].name});
                                }
                                this.options.type= tdata;
                                this.ruleForm['type']= this.options.type[0].value;
                            }else {
                                this.ruleForm['dtype']= typedata[i].tid;
                                this.ruleForm['type'] ='';
                                this.options.type=[];
                            };
                        }
                    }
                }
            },
            defSlect(){
                this.ruleForm.tType = parseInt(this.ingetactiveItem.id);
                let typedata = this.typeData;
                for(let i=0;i<typedata.length;i++){
                    if( this.ruleForm.tType == typedata[i].id ){
                        if(typedata[i].tid ==0){
                            this.ruleForm['dtype'] = 0;
                            let arry = typedata[i].array;
                            let tdata = []
                            for(let i=0;i<arry.length;i++){
                                tdata.push({value: arry[i].tid, label:  arry[i].name});
                            }
                            this.options.type= tdata;
                            this.ruleForm['type']= this.ingetactiveItem.zid;
                        }else {
                            this.ruleForm['dtype']= typedata[i].tid;
                            this.ruleForm['type'] ='';
                            this.options.type=[];
                        };
                    }
                }
            }
        },
        watch: {
            clData:{
                handler(newData, oldData) {
                    this.$refs['insertAdmin'].resetFields();
                },
                deep: true
            },
            getactiveItem: {
                handler(newData, oldData) {
                    this.ingetactiveItem = newData;
                    this.defSlect();
                },
                deep: true
            },
            showData: {
                handler(newData, oldData) {
                    if(newData){
                        this.defSlect();
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
    }
    .defbox label{
        margin-right: 43px;
    }
</style>
