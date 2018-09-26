<template>
    <div class="insertTemp">
        <el-form :model="ruleForm" ref="insertAdmin">
            <el-row :gutter="0">
                <el-col :span="24">
                    <p style="padding:0 0 5px 85px;color: #515151"> (Excel格式，数据量不超过10000 条)</p>
                    <yg-upload-file formLabelWidth="80px" :label="titName.importTit" fileType="excel" fileSize="100" prop="file"
                                    :value="ruleForm['file']"
                                    @ygForm="getData"></yg-upload-file>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-col :span="24">
                    <div style="padding-left: 80px" class="downloadTemp">
                        <label>{{titName.downloadTit}}</label>
                        <span @click="subclick('download')"><i class="el-icon-download"></i>下载</span>
                    </div>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button @click="subclick('upload')" type="primary">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>

            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'
    export default {
        props:{
            getactiveItem:{},
            titName:{
                type:Object,
                default:function () {
                    return{
                        importTit:"导入文件",
                        downloadTit:"下载模版"
                    }
                }
            },
            dataURL:{
                type:Object,
                default:function () {
                    return{
                        downloadURL:"",
                        uploadingURL:""
                    }
                }
            }
        },
        data() {
            return {
                ingetactiveItem:this.getactiveItem,
                currentPropName:'',
                innerUrl:this.dataURL,
                ruleForm: {},
            };
        },
        methods: {
            isHide() {
                this.$emit('isHide', false);
            },
            getData(obj) {
                this.ruleForm[obj.prop] = obj.value;
                this.currentPropName =  obj.prop

            },
            subclick(ftype){
                var it = this;
                let data={};
                if(ftype =="download"){
                    window.open(this.innerUrl.downloadURL)
                    return;
                }else{
                    if(JSON.stringify(this.ruleForm) == "{}"){
                        this.$message.error('请选择要导入的 Excel 文件上传!');
                        return false;
                    }
                    this.ruleForm[this.currentPropName].append('type',this.ingetactiveItem.zid);
                    let data = {
                        method: 'POST',
                        url:this.innerUrl.uploadingURL,
                        headers:{
                            'Content-Type': 'multipart/form-data'
                        },
                        data:this.ruleForm[this.currentPropName]

                    };
                    console.log(data);
                    it.$axios.ajax(data).then((res) => {
                        if(res.code==200){
                            this.$message.success('上传成功！');
                            this.$refs["insertAdmin"].resetFields();
                            this.$emit('flushList', true);
                            this.isHide();
                        }else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else{
                            this.$message.error('上传失败，请稍后再试！');
                        }
                    })
                }
            },
        },
        watch: {
            getactiveItem: {
                handler(newData, oldData) {
                    this.ingetactiveItem = newData;
                },
                deep: true
            },
        }
    }
</script>
<style scoped>

</style>
<style>
 .insertTemp .downloadTemp{
     height: 40px;
     line-height: 40px;
     position: relative;
 }
 .insertTemp .downloadTemp label{
     position: absolute;
     height: 40px;
     font-size: 14px;
     color: #3A3A3A;
     line-height: 40px;
     top: 0;
     left: 0;
 }
 .insertTemp .downloadTemp span{
     cursor: pointer;
     box-sizing: border-box;
     background: #F7F7F7;
     padding-left: 10px;
     display: block;
     color: #838383;
     width: 100%;
     height: 40px;
     line-height: 40px;
 }
 .insertTemp .el-form-item__label{
     color: #3A3A3A;
 }
</style>
