<template>
    <div>
        <div @click="searBtclick">事件管理</div>
        <div @click="deleteBtclick">删除</div>
        <el-dialog class="popupWindow" title="编辑信息" :visible.sync="isShowPopup.editInpInfor" width="734px">
            <EditInpInfor @isHide="isShowPopup.editInpInfor = false" @flushList="falush=new Date()"></EditInpInfor>
        </el-dialog>
        <el-dialog class="popupWindow" title="删除信息" :visible.sync="isShowPopup.deleteInfor" width="420px">
            <DeleteInfor @isHide="isShowPopup.deleteInfor = false" @flushList="falush=new Date()"></DeleteInfor>
        </el-dialog>
    </div>
</template>
<script>
    import EditInpInfor from "./EditInpInfor"
    import DeleteInfor from "../../../components/common/deleteInfor.vue"
    export default {
        name: 'table',
        components: {
            EditInpInfor,
            DeleteInfor
        },
        data(){
            return{
                isShowPopup:{
                    editInpInfor:false,
                    deleteInfor:false,
                },
            }
        },
        methods:{
            isHide() {
                this.$emit('isHide', false);
            },
            searBtclick(){
                    this.isShowPopup.editInpInfor=true;
            },
            deleteBtclick(){
                this.isShowPopup.deleteInfor=true;
            }

        },

    }
</script>
<style></style>
