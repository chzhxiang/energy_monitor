<template>
    <div>
        <el-form  >
            <el-row :gutter="0">
                <el-col :span="24">
                  <div class="ico"><i class="el-icon-question"></i></div>
                  <div class="disText"><p v-html="contentText"></p></div>
                </el-col>
            </el-row>
            <el-row :gutter="0">
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction()">确 定</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'deleteInf',
        props:{
            contentText:{
                type:String,
                default:function () {
                    return "真的要删除此信息吗？"
                }
            },
            delInfo:{
                type:Object,
                default:function () {
                    return {
                        method:"get",
                        url:'',
                        data: {
                            id:'',

                        }
                    }
                }
            },
        },
        data() {
            return {
                del:this.delInfo
            };
        },
        methods: {
            addAction() {
                this.$axios.ajax(this.del).then((res) => {
                    if(res.code==200){
                        this.$message.success("删除成功");
                        this. isHide();
                        this.$emit('flushList', true);
                    }else if(res.code == 400){
                        this.$message.error(res.msg);
                    }else{
                        this.$message.error('删除失败，请稍后再试');
                    }

                })
            },
            isHide() {
                this.$emit('isHide', false);
            },
        },
        watch: {
            delInfo: {
                handler(newData, oldData) {
                    this.del = newData;
                },
                deep: true
            },
        }
    };
</script>
<style scoped>
    .ico{
        text-align: center;
        font-size: 70px;
        color: #1881BF;
    }
    .disText{
        margin-top: 20px;
        text-align: center;
    }
</style>
<style>

</style>
