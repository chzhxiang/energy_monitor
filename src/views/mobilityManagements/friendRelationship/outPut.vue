<template>
    <div class="friendrela">
        <el-tabs v-model="activeTableName" type="card" @tab-click="handleClick">
            <el-tab-pane label="好友" name="first">
                <div style="padding-top: 30px">
                    <dataTable  :inTableData="friendtableData"
                                :inAjax="friendajax"
                                height="240"
                                :ispagination="ispagination"
                                @rowClick="rowClickdata1"
                                @selection="selectionChange">
                    </dataTable>
                </div>
            </el-tab-pane>
            <el-tab-pane label="群组" name="second">
                <div style="padding-top: 30px">
                    <dataTable  :inTableData="grouptableData"
                                :inAjax="groupajax"
                                height="240"
                                :ispagination="ispagination"
                                @rowClick="rowClickdata2"
                                @selection="selectionChange">
                    </DataTable>
                </div>
            </el-tab-pane>
        </el-tabs>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary">确 定</el-button>
            <el-button @click="isHide">取 消</el-button>
        </div>
    </div>
</template>

<script>
    import DataTable from "../../../components/common/dataTable.vue";
    export default {
        components: {
            DataTable
        },
        data() {
            return {
                activeTableName: 'first',
                friendtableData: {
                    tHead: [{
                        name: '姓名',
                        width:200,
                        field: "id",
                    }, {
                        name: '手机号',
                        width:200,
                        field: "name"
                    },{
                        name: '聊天记录',
                        width:200,
                        type: "custom",
                        cltype:"download",
                        custom:"<span style='font-size: 12px;color:#555555;border: 1px #CBD0DC solid;display: block;border-radius:20px;padding: 5px 17px'>下载</span>"
                    }],
                    tData: [],
                    total: 0,

                    isMultiple: false,
                    isRank: true
                },
                ispagination:false,
                friendajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                   /* data:{
                        pageNum:'',
                        pageSize:''
                    }*/
                },
                grouptableData: {
                    tHead: [{
                        name: '群主',
                        field: "id",
                    }, {
                        name: '群名称',
                        field: "name"
                    },
                    {
                        name: '聊天记录',
                        type: "custom",
                        cltype:"download",
                        custom:"<span style='font-size: 12px;color:#555555;border: 1px #CBD0DC solid;display: block;border-radius:20px;padding: 5px 17px'>下载</span>"
                    }],
                    tData: [],
                    total: 0,
                    isMultiple: false,
                    isRank: true
                },
                groupajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                  /*  data:{
                        pageNum:'',
                        pageSize:''
                    }*/
                },
            };

        },
        methods: {
            isHide() {
                this.$emit('isHide', false);
            },
            selectionChange(selection) {
                console.log(selection);
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            rowClickdata1(row) {
                console.log(row);
                if (row.type == 'download') {
                    /*this.newPass.id = row.rowData.id;
                    this.newPass.username = row.rowData.username;*/
                }
            },
            rowClickdata2(row) {
                console.log(row);
                if (row.type == 'download') {
                   /* this.newPass.id = row.rowData.id;
                    this.newPass.username = row.rowData.username;*/

                }
            },
        }
    };
</script>

<style>
    .friendrela .el-table--small td{
        padding: 0;
    }

</style>
