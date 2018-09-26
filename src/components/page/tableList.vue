<template>
    <el-table :data="tableData" stripe :cell-class-name="fstyle" style="width: 100%">
        <el-table-column v-for="(tit,index) in tableTit" :key="index" :prop="tit.field" :label="tit.name" :width="tit.width?tit.width:''">
        </el-table-column>
        <el-table-column v-if="tableData.actionBtns" label="操作"
                         :width="tableData.actionBtWidth ? tableData.actionBtWidth :'' ">
            <template slot-scope="scope">
                <template v-for="btn of tableData.actionBtns">
                    <template v-if="btn.filter != undefined && btn.filter != null">
                        <el-button type="text"
                                   v-if="btn.filter.needel.indexOf(scope.row[btn.filter.field])>-1"
                                   @click="allClick(btn.type, scope.row)">
                            <span v-html="btn.label"></span>
                        </el-button>
                        <el-button v-else type="text" style="width:30px">
                            -
                        </el-button>
                    </template>
                    <template v-else>
                        <el-button type="text"
                                   @click="allClick(btn.type, scope.row)">
                            <span v-html="btn.label"></span>
                        </el-button>
                    </template>
                </template>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        tableTit: {
            type: Array,
            default: function() {
                return [{
                    name: '日期',
                    field: "date"
                }, {
                    name: '姓名',
                    field: "name"
                }, {
                    name: '地址',
                    field: "address"
                }]
            }
        },
        tableData: {
            type: Array,
            default: function() {
                return [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    },
    methods: {
        fstyle(i) {
            if (i.columnIndex == 0) {
                return "lee";
            }

        }
    }
}

</script>
<style>
.lee div {
    font-size: 12px;
    color: #252525;
    font-weight: bold;
}

</style>
