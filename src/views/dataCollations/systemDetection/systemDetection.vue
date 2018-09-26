<template>
    <div class="TimeSetBox">
        <h3 class="TimeSettit">
            <span>系统检测</span>
            <button @click="searBtclick" style="cursor: pointer;
                border: 1px #C3C9D5 solid;
                border-radius: 15px;
                font-size: 14px;
                color: #3A3A3A;
                margin-right: 20px;
                height: 28px;
                line-height: 28px;
                padding: 0 18px;
                background: #1881BF;
                float: right;
                color: #fff;
                outline: none;">开始检测
            </button>
        </h3>
        <div class="dataTableBox">
            <el-table :data="tabelData" style="width: 100%" @expand-change="expandChange">
                <el-table-column type="expand" class="n123">
                    <template slot-scope="scope">
                        <el-table :data="scope.row.list" :show-header="false" :row-class-name="tableRowClassName">>
                            <el-table-column width="48px">
                            </el-table-column>
                            <el-table-column align="center" width="120px">
                                <template slot-scope="item">
                                    <i class="el-icon-check isOk" v-if="item.row.isOk == 1"></i>
                                </template>
                            </el-table-column>
                            <el-table-column prop="name"></el-table-column>
                            <el-table-column></el-table-column>
                            <el-table-column></el-table-column>
                            <el-table-column></el-table-column>
                            <el-table-column></el-table-column>
                            <el-table-column></el-table-column>
                            <el-table-column></el-table-column>
                            <el-table-column width="150px" prop="action" align="center">
                                <template slot-scope="item">
                                    <el-button round size="mini"> {{item.row.action}}</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="项目编号" prop="num" width="120px">
                </el-table-column>
                <el-table-column
                    label="项目名称"
                    prop="name">
                </el-table-column>
                <el-table-column
                    label="能耗采集方式"
                    prop="cType">
                    <template slot-scope="scope">
                        <el-select v-model="tabelData[scope.$index].cType">
                            <el-option key="1" label="OPC" value="1"></el-option>
                            <el-option key="2" label="采集器" value="2"></el-option>
                            <el-option key="3" label="OPC与采集器" value="3"></el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                    label="末端"
                    prop="moduan">
                    <template slot-scope="scope">
                        <i class="el-icon-check isOk" v-if="scope.row.moduan == 1"></i>
                    </template>
                </el-table-column>
                <el-table-column
                    label="冷战监控"
                    prop="jiankong">
                    <template slot-scope="scope">
                        <i class="el-icon-check isOk" v-if="scope.row.jiankong == 1"></i>
                    </template>
                </el-table-column>
                <el-table-column
                    label="冷战数据来源"
                    prop="sType">
                    <template slot-scope="scope">
                        <el-select v-model="tabelData[scope.$index].sType">
                            <el-option key="1" label="OPC" value="1"></el-option>
                            <el-option key="2" label="采集器" value="2"></el-option>
                            <el-option key="3" label="OPC与采集器" value="3"></el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column
                    label="配电安全"
                    prop="anquan">
                    <template slot-scope="scope">
                        <i class="el-icon-check isOk" v-if="scope.row.anquan == 1"></i>
                    </template>
                </el-table-column>
                <el-table-column label="配置状态" align="center" width="150px" prop="status">
                    <template slot-scope="scope">
                        <i class="el-icon-success isOk" v-if="scope.row.status == 1"></i>
                        <i class="el-icon-error" v-else style="color: #ff1e1a;font-size: 20px"></i>
                    </template>
                </el-table-column>
            </el-table>
            <div class="paginationBox clear">
                <span class="pageTotal fl">共有记录：<span>100</span>条</span>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    :page-sizes="[15, 30, 50, 100]"
                    :page-size="15"
                    layout="sizes,jumper, prev, pager, next"
                    :total="100">
                </el-pagination>
            </div>
        </div>
        <el-dialog class="popupWindow"  title="项目设置" :visible.sync="isShowPopup.projectSeting" width="990px">
            <ProjectSeting @isHide="isShowPopup.projectSeting = false"
                           @flushList="falush=new Date()"></ProjectSeting>
        </el-dialog>
        <!--<div v-drag="greet" id="drag">
        </div>-->
    </div>
</template>
<script>
    import ProjectSeting from "./projectSeting"

    export default {
        components: {
            ProjectSeting
        },
        data() {
            return {
                val: 123,
                isShowPopup: {
                    projectSeting: false,
                },
                tabelData: [
                    {
                        num: '123456',
                        name: '五洲集团',
                        cType: '1',
                        moduan: 1,
                        jiankong: 0,
                        sType: '1',
                        anquan: 1,
                        status: 0,
                        list: [
                            {name: '分项信息是否录入', isOk: 0, action: '分配分项'},
                            {name: '支路信息是否录入', isOk: 0, action: '配置支路'},
                            {name: '基准数据是否录入', isOk: 1, action: '配置基准'},
                        ],
                    },
                    {
                        num: 'A321',
                        name: '灰常集团',
                        cType: '1',
                        moduan: 0,
                        jiankong: 1,
                        sType: '2',
                        anquan: 0,
                        status: 1,
                        list: [
                            {name: '分项信息是否录入', isOk: 0, action: '分配分项'},
                            {name: '支路信息是否录入', isOk: 0, action: '配置支路'},
                            {name: '基准数据是否录入', isOk: 1, action: '配置基准'},
                        ],
                    }
                ],
            }
        },
        methods: {
            greet(val) {
                this.val = val;
            },
            isHide() {
                this.$emit('isHide', false);
            },
            searBtclick() {
                this.isShowPopup.projectSeting = true;
            },
            tableRowClassName({row, rowIndex}) {
                return 'clearBorder';
            },
            expandChange(row, expandedRows) {
                console.log(row);
                console.log(expandedRows);
            },
            handleSizeChange(val) {
                console.log(val);
            },
            handleCurrentChange(val) {
                console.log(val);
            },
        },

    }
</script>
<style scoped>
    .TimeSetBox {
        background: #fff;
    }

    .TimeSettit {
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        font-weight: 600;
        padding: 0 0 0 30px;
        border: 1px #E5EEF3 solid;
        color: #2274A4;
        background: #F5F9F9;
    }

    .isOk {
        color: #64a757;
        font-size: 20px;
    }

    #drag {
        width: 100px;
        height: 100px;
        background: aqua;
        position: absolute;
        right: 30px;
        top: 0
    }
</style>
<style>
    .el-table__expanded-cell {
        padding: 20px 0 !important;
    }

    .clearBorder > td {
        border: none;
    }

    .dataTableBox .pageTotal {
        padding-left: 20px;
        height: 31px;
        line-height: 31px;
        font-size: 14px;
        color: #838383;
    }

    .dataTableBox .pageTotal span {
        color: #3a3a3a;
    }

    .el-input__inner {
        border-radius: 15px;
    }

    .dataTableBox .setPagesize .el-input--small .el-input__inner {
        height: 25px;
        line-height: 25px;
    }

    .dataTableBox .setPagesize .el-input__inner {
        border-color: #838383;
    }

    .dataTableBox .paginationBox {
        padding-top: 14px;
        position: relative;
    }

    .dataTableBox .paginationBox .el-pagination {
        float: right;
    }

    .dataTableBox .paginationBox .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon {
        font-size: 19px;
        position: relative;
        top: -3px
    }

    .dataTableBox .paginationBox .el-pager li {
        margin: 0 8px;
        border-radius: 3px;
        height: 24px;
        line-height: 24px;
        min-width: 20px;
    }

    .dataTableBox .paginationBox .el-pager li.active {
        background: #1881BF !important;
    }

    .dataTableBox .paginationBox .el-pagination__jump {
        margin-right: 20px;
        font-size: 14px;
        color: #838383;
    }

    .dataTableBox .paginationBox .el-pagination__jump .pagination__editor {
        margin-right: 20px;
    }

    .dataTableBox .paginationBox .el-pagination__jump .el-pagination__editor.el-input {
        width: 28px;
    }

    .dataTableBox .paginationBox .el-pagination__jump .el-input__inner {
        box-sizing: border-box;
        width: 100%;
        color: #3A3A3A;
        font-size: 14px;
        border-color: #838383;
        height: 24px;
        line-height: 24px;
        border-radius: 3px;
    }

    .dataTableBox .paginationBox .el-pagination__sizes {
        position: absolute;
        top: 14px;
        left: 150px;
    }

    .dataTableBox .paginationBox .el-pagination .el-select .el-input .el-input__inner {
        border-radius: 15px;
        font-size: 14px;
        border-color: #838383;
    }
</style>
