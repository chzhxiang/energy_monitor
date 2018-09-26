<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ChangeTable">
            <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                    <yg-upload-img v-if="jtem.yt == 'img'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                   :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]" formLabelWidth="80px"
                                   @ygForm="getData"></yg-upload-img>
                    <yg-blank v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                    <yg-input v-else-if="jtem.yt == 'input'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                              formLabelWidth="80px"
                              :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]" @ygForm="getData"></yg-input>
                    <yg-select v-else-if="jtem.yt == 'select'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                               :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]" formLabelWidth="80px"
                               :options="options[jtem.name]" @ygForm="getData"></yg-select>
                    <yg-select-multiple v-else-if="jtem.yt == 'select-multiple'" :label="jtem.label"
                                        formLabelWidth="80px"
                                        :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                        :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                        @ygForm="getData"></yg-select-multiple>
                    <yg-radio-group v-else-if="jtem.yt == 'radio'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                    :value="ruleForm[jtem.name]" :options="options[jtem.name]" formLabelWidth="80px"
                                    @ygForm="getData"></yg-radio-group>
                </el-col>
            </el-row>
            <el-row :gutter="0">
                <el-tabs v-model="tabIndex" type="card">
                    <el-tab-pane label="模板1" name="first">
                        <el-table class="addbr"
                                  :data="ruleForm.xxx" height="200"
                                  :row-class-name="rowclassname"
                                  :header-cell-style="headercellstyle"
                                  border style="width: 100%;margin-bottom: 20px"
                                  @cell-click="actionXX"
                                  @header-click="headerClick">
                            <el-table-column align="center"
                                             label-class-name="abcd"
                                             label="+"
                                             width="50">
                                <template slot-scope="scope">
                                    <i class="el-icon-remove-outline"></i>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="告警级别">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="飞相功总电流" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="系统设备">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="男" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="告警预定值">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="男" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="告警范围"
                                width="400px">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>kWh</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="or" :value="0"></el-option>
                                            <el-option label="and" :value="1"></el-option>
                                            <el-option label="||" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>kWh</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="age"
                                width="210px"
                                label="室外温度">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="or" :value="0"></el-option>
                                            <el-option label="and" :value="1"></el-option>
                                            <el-option label="||" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>度</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="age"
                                width="150px"
                                label="延长时间">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="秒" :value="0"></el-option>
                                            <el-option label="分" :value="1"></el-option>
                                            <el-option label="时" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="模板2" name="second">
                        <el-table class="addbr"
                                  :data="ruleForm.xxx" height="200"
                                  :row-class-name="rowclassname"
                                  :header-cell-style="headercellstyle"
                                  border style="width: 100%;margin-bottom: 20px"
                                  @cell-click="actionXX"
                                  @header-click="headerClick">
                            <el-table-column align="center"
                                             label-class-name="abcd"
                                             label="+"
                                             width="50">
                                <template slot-scope="scope">
                                    <i class="el-icon-remove-outline"></i>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="告警级别">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="飞相功总电流" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="系统设备">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="男" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="告警预定值">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="男" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="告警范围"
                                width="400px">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>kWh</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="or" :value="0"></el-option>
                                            <el-option label="and" :value="1"></el-option>
                                            <el-option label="||" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>kWh</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="age"
                                width="210px"
                                label="室外温度">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="or" :value="0"></el-option>
                                            <el-option label="and" :value="1"></el-option>
                                            <el-option label="||" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>度</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="age"
                                width="150px"
                                label="延长时间">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="秒" :value="0"></el-option>
                                            <el-option label="分" :value="1"></el-option>
                                            <el-option label="时" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="模板3" name="third">
                        <el-table class="addbr"
                                  :data="ruleForm.xxx" height="200"
                                  :row-class-name="rowclassname"
                                  :header-cell-style="headercellstyle"
                                  border style="width: 100%;margin-bottom: 20px"
                                  @cell-click="actionXX"
                                  @header-click="headerClick">
                            <el-table-column align="center"
                                             label-class-name="abcd"
                                             label="+"
                                             width="50">
                                <template slot-scope="scope">
                                    <i class="el-icon-remove-outline"></i>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="告警级别">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="飞相功总电流" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="系统设备">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="男" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="sex"
                                label="告警预定值">
                                <template slot-scope="scope">
                                    <el-select v-model="ruleForm.xxx[scope.$index].sex" placeholder="请选择">
                                        <el-option label="未知" :value="0"></el-option>
                                        <el-option label="男" :value="1"></el-option>
                                        <el-option label="女" :value="2"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="告警范围"
                                width="400px">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>kWh</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="or" :value="0"></el-option>
                                            <el-option label="and" :value="1"></el-option>
                                            <el-option label="||" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>kWh</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="age"
                                width="210px"
                                label="室外温度">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="or" :value="0"></el-option>
                                            <el-option label="and" :value="1"></el-option>
                                            <el-option label="||" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>-</span>
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <span>度</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="age"
                                width="150px"
                                label="延长时间">
                                <template slot-scope="scope">
                                    <div style="width: 50px;display: inline-block">
                                        <el-input v-model="ruleForm.xxx[scope.$index].name"></el-input>
                                    </div>
                                    <div style="width: 50px;display: inline-block">
                                        <el-select v-model="ruleForm.xxx[scope.$index].sex">
                                            <el-option label="秒" :value="0"></el-option>
                                            <el-option label="分" :value="1"></el-option>
                                            <el-option label="时" :value="2"></el-option>
                                        </el-select>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('ChangeTable')">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        data() {
            return {
                labels: [
                    [
                        {label: '项目名称', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '告警类型', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '告警指标', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '告警状态', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                    ],
                    [
                        {label: '日期区间', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '节假日', name: 'jie', yt: 'radio', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '时间区间', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '位置', name: 'pmid', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                    ],
                ],
                ruleForm: {
                    pmid: '',
                    xxx: [
                        {id: '', name: '', age: '', sex: ''},
                        {id: '', name: '', age: '', sex: ''},
                    ],
                },
                rules: {},
                options: {
                    pmid: [
                        {value: '1', label: '项目1'},
                        {value: '2', label: '项目2'},
                        {value: '3', label: '项目3'},
                    ],
                    jie: [
                        {value: '1', label: '是'},
                        {value: '2', label: '否'},
                    ],
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
                tabIndex: 'first',
                headercellstyle: {
                    background: "rgba(241,241,241,1)",
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#3A3A3A"
                },
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
            rowclassname(obj) {
                if (++obj.rowIndex % 2 == 0) {
                    return 'linebg'
                }
            },
            getData(obj) {
                this.ruleForm[obj.prop] = obj.value;
            },
            headerClick(column, event) {
                if (column.label == '+') {
                    this.ruleForm.xxx.push({id: -Math.ceil(Math.random() * 9999), name: '', age: 0, sex: 0})
                    for (let k in this.xxx) {
                        this.xxx[k].push(false);
                    }
                }
                console.log(column);
            },
            actionXX(row, column, cell, event) {
                if (column.label == '+') {
                    for (let i = 0; i < this.ruleForm.xxx.length; i++) {
                        if (row.id == this.ruleForm.xxx[i].id) {
                            this.ruleForm.xxx.splice(i, 1);
                            for (let k in this.xxx) {
                                this.xxx[k].splice(i, 1);
                            }
                            break;
                        }
                    }

                } else {

                }
            },
        }
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
    .popupWindow .addbr .el-table--small td, .el-table--small th {
        padding: 7px 0;
    }

    .popupWindow .addbr .el-table--small td {
        padding: 1px 0;
    }

    .popupWindow .addbr .linebg {
        background: rgba(247, 251, 252, 1);
    }

    .popupWindow .addbr .el-input__inner {
        height: 100%;
        width: 100%;
        background: transparent;
        border: none;
        text-align: center;
        padding: 0 25px 0 0;
    }

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

    .branchNamebox {
        margin-bottom: 20px;
    }

    .branchNamebox label {
        font-size: 14px;
        line-height: 15px;
        color: #555555;
        float: left;
    }

    .branchNamebox textarea {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        border: none;
        color: #606266;
        margin-left: 33px;
        width: 470px;
        outline: none;
        height: 78px;
        background: rgba(247, 247, 247, 1);
        float: left;
        padding-left: 15px;
        resize: none;
    }

    .branchNamebox span {
        display: inline-block;
        background: #1881BF;
        padding: 6px 29px;
        margin-left: 15px;
        margin-top: 25px;
        font-size: 14px;
        line-height: 15px;
        cursor: pointer;
        color: #fff;
        border-radius: 15px;
    }

    .tablecr .el-tabs--card > .el-tabs__header {
        padding-right: 40px;
    }
</style>
