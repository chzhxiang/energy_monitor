<template>
    <div>
        <el-form>
            <el-row :gutter="0">
                <el-col :span="24">
                   <div class="insertTemplate fr" @click="showInPut"><i class="el-icon-download"></i>导入模版</div>
                </el-col>
            </el-row>
        </el-form>
        <el-form>
            <el-row :gutter="0">
                <el-col :span="24">
                    <DataTable  :inTableData="tableData"
                                :inAjax="ajax"
                                height="240"
                                :ispagination="ispagination"
                                @selection="selectionChange">

                    </DataTable>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary">确 定</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
        <el-dialog class="popupWindow" title="导入模板" :visible.sync="isShowPopup.inPuttemplate" width="656px" :append-to-body="true">
            <InPuttemplate @isHide="isShowPopup.inPuttemplate = false"></InPuttemplate>
        </el-dialog>
    </div>
</template>

<script>
    import DataTable from "../../../components/common/dataTable.vue";
    import InPuttemplate from "../../../components/common/inPuttemplate.vue"

    export default {
        components: {
            DataTable,
            InPuttemplate
        },
        data() {
            return {
                isShowPopup: {
                    inPuttemplate: false
                },
                ispagination:false,
                tableData: {
                    tHead: [{
                        name: '模版名称',
                        field: "id",
                    }, {
                        name: '报告类型',
                        field: "name"
                    }, {
                        name: '文件名称',
                        field: "realname"
                    }, {
                        name: '报告生成时间',
                        field: "status"
                    }],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>预览</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>下载</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        }
                    ],
                    isMultiple: false,
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                },

            };
        },
        methods: {
            showInPut(){
                this.isShowPopup.inPuttemplate = true;
            },
            isHide() {
                this.$emit('isHide', false);
            },
            selectionChange(selection) {
                console.log(selection);
            },
        }
    };
</script>

<style scoped>
  .insertTemplate{
      cursor: pointer;
      margin-bottom: 15px;
      border:1px #C3C9D5 solid;
      border-radius: 15px;
      padding: 1px 10px;
      color: #3A3A3A;
  }
  .insertTemplate i{
      margin-right: 5px;
  }

  .de-tit b {
      position: absolute;
      top: 0;
      left: 30px;
      width: 4px;
      display: inline-block;
      background: #1881BF;
      height: 21px;
  }

  .de-tit button {
      outline: none;
      position: absolute;
      background: #fff;
      border: 1px #a1a1a1 solid;
      border-radius: 15px;
      font-size: 14px;
      color: #3a3a3a;
      padding: 2px 13px;
      margin-left: 20px;
      cursor: pointer;
  }

  .el-table td,
  .el-table th.is-leaf {
      border: none;
  }

  .el-table td {
      font-size: 12px;
      color: #838383;
  }

  .el-table th.is-leaf {
      background: rgba(241, 241, 241, 1);
      font-size: 14px;
      color: #252525;
  }
</style>
<style>
    .el-table td.gutter, .el-table th.gutter{
        background: rgb(241, 241, 241);
    }
</style>
