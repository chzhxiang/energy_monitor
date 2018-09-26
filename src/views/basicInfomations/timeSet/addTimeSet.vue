<template>
    <div class="addtimeset">
        <el-form :model="ruleForm" :rules="rules" ref="ChangeTable">
            <el-row :gutter="0">
                <el-col :span="9">
                    <yg-select label="项目名称"
                               formLabelWidth="80px"
                               :value="ruleForm.pmid"
                               :options="options.pmid"
                               @ygForm="getData"></yg-select>
                </el-col>
                <yg-blank :span="12"></yg-blank>
                <el-col :span="1">
                    <el-button type="primary" @click="HistoryOfelectricity" style="display: inline-block;
                        border-radius: 15px;
                        font-size: 14px;
                        padding: 7px 20px;
                        border: none;
                        background: #1881BF;">历史电价
                    </el-button>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-table
                    :data="tableData"
                    :header-cell-style="headercellstyle"
                    :row-class-name="rowclassname"
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="名称"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="类目"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="电价(元/kWh)"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="times"
                        label="时段">
                        <template slot-scope="scope">
                            <span v-for="(time,i) in scope.row.times" style="margin-right: 10px">
                                 <template v-if="pickerShows[scope.$index][i] == true">
                                      <el-time-picker style="width: 135px"
                                                      v-model="times"
                                                      is-range
                                                      range-separator="~"
                                                      format="HH:mm"
                                                      start-placeholder="开始"
                                                      end-placeholder="结束"
                                                      @blur="timeChange(scope.$index,i)">
                                      </el-time-picker>
                                 </template>
                                <template v-else>
                                     <span @click="editTime(scope.$index,i)">{{time}}</span>
                                     <i class="el-icon-circle-close-outline"
                                        style="color: rgb(24, 129, 191);cursor: pointer"
                                        @click="delTime(scope.$index,i)"></i>
                                </template>

                            </span>

                            <span style="float: right;cursor: pointer" @click="addTime(scope.$index)">
                                <i class="el-icon-circle-plus-outline" style="color: rgb(24, 129, 191)"></i>
                            </span>
                            <!--{{scope.$index}}-->
                            <!--{{scope.row}}-->
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </el-form>
        <div class="creatAndModification clear">
            <span class="fl">创建日期 2018-06-02</span>
            <span class="fr">最新修改日期 2018-06-02</span>
        </div>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('ChangeTable')">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
        <el-dialog class="popupWindow" style="z-index: 9999" title="电价修改详情" :visible.sync="isShowPopup.detail" width="980px" :append-to-body="true">
            <Detail @isHide="isShowPopup.detail = false" @flushList="falush=new Date()"></Detail>
        </el-dialog>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'
    import Detail from './detail.vue'

    export default {
        name:"add",
        components: {
            Detail
        },
        data() {
            return {
                isShowPopup: {
                    detail: false,
                },
                headercellstyle: {background: "rgba(241,241,241,1)", fontSize: "14px", color: "#3A3A3A"},
                cellstyle: {
                    textAlign: "center",
                    background: 'transparent'
                },
                tableData: [
                    {
                        name: '夏季电价',
                        type: '尖峰',
                        price: 1.2,
                        times: ['12:00~12:00']
                    },
                    {
                        name: '',
                        type: '高峰',
                        price: 1.2,
                        times: ['12:00~12.00', '13.00~14:00']
                    },
                    {
                        name: '',
                        type: '平时',
                        price: 1.2,
                        times: ['12:00~12:00']
                    },
                    {
                        name: '',
                        type: '低谷',
                        price: 1.2,
                        times: ['12:00~12:00']
                    }
                ],
                times: [new Date(0, 0, 0, 0, 0), new Date(0, 0, 0, 0, 0)],
                ruleForm: {
                    pmid: '',
                },
                rules: {},
                options: {
                    pmid: [
                        {value: '1', label: '项目1'},
                        {value: '2', label: '项目2'},
                        {value: '3', label: '项目3'},
                    ],
                },
                pickerShows: [],
            };
        },
        mounted() {
            const list = [];
            for (let obj of this.tableData) {
                const child = [];
                for (let timsKey in obj.times) {
                    child.push(false);
                }
                list.push(child);
            }
            this.pickerShows = list;
        },
        methods: {
            HistoryOfelectricity(){
                // this.$emit('isHide', false);
                this.isShowPopup.detail=true;
            },
            addAction(ruleForm) {
                console.log(this.ruleForm.xxx);
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        console.table(Object.assign({}, this.ruleForm));
                        // this.$refs[ruleForm].resetFields();
                        this.isHide();
                        // console.log('接口数据' + '/api/admin/admin/addAdmin');
                        // this.$axios.post('/api/admin/admin/addAdmin', this.ruleForm).then((res) => {
                        //     if (res.code == 200) {
                        //         this.$message({
                        //             message: '添加成功',
                        //             type: 'success'
                        //         });
                        //     } else {
                        //         this.$message.error('添加失败');
                        //     }
                        // }).catch((error) => {
                        //     console.log(error);
                        // }).then(() => {
                        //     this.$refs[ruleForm].resetFields();
                        //     console.log('清空数据');
                        //     this.$emit('flushList', true);
                        //     this.isHide();
                        // })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            isHide() {
                this.$emit('isHide', false);
            },
            getData(obj) {
                if (obj.index != undefined && obj.parent != undefined) {
                    this.ruleForm[obj.parent][obj.index][obj.prop] = obj.value;
                } else if (obj.index != undefined && obj.parent == undefined) {
                    this.ruleForm[obj.index][obj.prop] = obj.value;
                } else if (obj.index == undefined && obj.parent != undefined) {
                    this.ruleForm[obj.parent][obj.prop] = obj.value;
                } else {
                    this.ruleForm[obj.prop] = obj.value;
                }

            },
            timeChange(row, col) {
                var h = this.times[0].getHours();
                var minute = this.times[0].getMinutes();
                minute = minute < 10 ? ('0' + minute) : minute;
                var h2 = this.times[1].getHours();
                var minute2 = this.times[1].getMinutes();
                minute2 = minute2 < 10 ? ('0' + minute2) : minute2;
                console.log(`${h}:${minute}~${h2}:${minute2}`);
                this.pickerShows[row][col] = false;
                console.log(this.pickerShows);
                this.tableData[row].times.splice(col, 1, `${h}:${minute}~${h2}:${minute2}`);
                console.log(this.tableData);
            },
            delTime(row, col) {
                this.tableData[row].times.splice(col, 1);
                this.pickerShows[row].splice(col, 1);
                console.log(row, col);
            },
            editTime(row, col) {
                console.log(row, col);
                this.pickerShows[row].splice(col, 1, true);
            },
            addTime(row) {
                this.pickerShows[row].push(true);
                this.tableData[row].times.push('');
            },
            rowclassname(row) {
                if ((++row.rowIndex % 2) == 0) {
                    return "rowstylebg";
                }
            },
        },

    };
</script>
<style scoped>
    div, li, span {
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
</style>
<style>
    .popupWindow .el-form-item--small .el-form-item__error {
        padding-top: 3px;
    }

    .changerecordList h4 {
        padding-left: 50px;
        font-size: 14px;
        color: #3a3a3a;
        height: 40px;
        line-height: 40px;
        background: rgba(241, 241, 241, 1);
    }

    .changerecordList ul li span {
        color: #555555;
        font-size: 14px;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        width: 50%;
        padding-left: 50px;
        box-sizing: border-box;
    }

    .changerecordList ul {
        background: rgba(247, 251, 252, 1);
        height: 200px;
        overflow: auto;
    }
    .tablecr .el-tabs--card > .el-tabs__header {
        padding-right: 40px;
    }
    .popupWindow .el-table--small td{
        padding: 8px 0;
    }
    .popupWindow .el-table td, .el-table th.is-leaf{
        border: none;
    }
    .popupWindow .rowstylebg {
        background: rgba(247, 251, 252, 1) !important;
    }
    .popupWindow .creatAndModification span{
        color: #555555;
        font-size: 12px;

    }
    .popupWindow .creatAndModification{
        padding: 0 10px;
        margin-top: 10px;
    }
    .popupWindow .addtimeset .el-input__inner{
        border-radius: 20px;
        background: #fff;
        height: 28px;
        line-height: 28px;
        border: 1px rgba(195,201,213,1) solid;
    }
</style>
