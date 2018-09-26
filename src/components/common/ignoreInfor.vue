<template>
    <div>
        <el-form  >
            <el-row :gutter="0">
                <el-col :span="24">
                  <div class="ico"><i class="el-icon-question"></i></div>
                  <div class="disText">{{contentText}}</div>
                    <div style="text-align: center;margin-top: 20px">
                        <el-radio style="margin-right: 10px" v-model="isIgnore" label="1">本次忽略</el-radio>
                        <el-radio v-model="isIgnore" label="2">永久忽略</el-radio>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="0">
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('ChangeTable')">确 定</el-button>
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
            }
        },
        data() {
            return {
                isIgnore:"1"
            };
        },
        methods: {
            addAction(ruleForm) {

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
<style scoped>
    .ico{
        text-align: center;
        font-size: 70px;
        color: #1881BF;
    }
    .disText{
        margin-top: 5px;
        text-align: center;
    }
</style>
<style>

</style>
