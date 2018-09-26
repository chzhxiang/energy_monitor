<template>
    <el-form-item :label="label" :prop="currentProp" :label-width="formLabelWidth?formLabelWidth:'120px'">
        <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :before-upload="haChange">
            <span v-if="currentFileName">{{currentFileName}}</span>
            <span  v-else><i class="el-icon-upload2"></i><span>选择上传文件</span></span>
        </el-upload>
    </el-form-item>
</template>

<script>
    import axios from 'axios';
    export default {
        props: ['value', 'label', 'prop', 'fileUrl', 'index','fileType','fileSize','fileName', 'parent', 'formLabelWidth'],
        data() {
            return {
                currentValue: this.value,
                currentProp: this.prop,
                currentFileUrl: this.fileUrl,
                currentFileName: this.fileName,
                currentIndex: this.index,
                currentParent: this.parent,
                currentFileType:this.fileType,
                currentFileSize:this.fileSize
            }
        },
        methods: {
            haChange(file) {
                let it = this;
                let fileTyp = file.name.substring(file.name.lastIndexOf('.')+1, file.name.length).toLowerCase();
                //const isFile = file.type === 'video/mp4';
                const isSize = file.size / 1024 / 1024 < this.currentFileSize;
                if(this.currentFileType == "video"){
                    if (fileTyp != 'mp4') {
                        this.$message.error('上传文件只能是 MP4 格式!');
                        return false;
                    }
                }
                if(this.currentFileType == "excel"){
                    if (fileTyp != 'xlsx' && fileTyp != 'xls') {
                         this.$message.error('上传文件只能是 Excel/xlsx/lsx 格式!');
                         return false;
                    }
                }
                if (!isSize) {
                    this.$message.error('上传文件大小不能超过 '+this.currentFileSize+' MB!');
                    return false;
                }
                this.currentValue = file;
                this.currentFileName = file.name;
                let fileData= new FormData();
                fileData.append(this.currentProp,file);
                this.$emit('ygForm', {
                    prop: this.currentProp,
                    value: fileData,
                    index: this.currentIndex,
                    parent: this.currentParent
                });
                return false;
            },
        },
        watch: {
            value: {
                handler(newData, oldData) {
                    this.currentValue = newData;
                    this.currentImageUrl = '';
                },
                deep: true
            },
        }
    }
</script>

<style>
    .el-form-item__content {
        height: 40px;
        line-height: 40px;
        background: rgba(247,247,247,1);
    }

    .avatar-uploader {
        width:100%;
        height:100%;
        line-height: 40px;
        display: inline-block;
    }

    .el-upload--text {
        border: none;
        width:100%;
        height:100%;
        line-height: 40px;
        padding:0 10px;
        text-align: left;
        background: rgba(247,247,247,1);
    }
    .el-upload--text span{
        color: #838383;
    }
    .el-upload--text i{
        color: #838383;
        margin-right: 5px;
    }

</style>
