<template>
    <div>
        <el-form>
            <el-row :gutter="0">
                <el-col :span="24">
                    <dataTable  :inTableData="tableData"
                                :inAjax="ajax"
                                height="240"
                                :ispagination="ispagination"
                                @selection="selectionChange">

                    </dataTable>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import dataTable from "../../../components/common/dataTable.vue";

    export default {
        name:"Detail",
        components: {
            dataTable
        },
        data() {
            return {
                ispagination:false,
                tableData: {
                    tHead: [{
                        name: '调价日期',
                        field: "id",
                    }, {
                        name: '尖峰 (元/kWh)',
                        field: "name"
                    }, {
                        name: '高峰 (元/kWh)',
                        field: "realname"
                    }, {
                        name: '平时 (元/kWh)',
                        field: "status"
                    }, {
                        name: '低谷 (元/kWh)',
                        field: "status"
                    }, {
                        name: '模版',
                        field: "status"
                    }],
                    tData: [],
                    total: 0,
                    isMultiple: false,
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
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
        }
    };
</script>

<style scoped>
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
