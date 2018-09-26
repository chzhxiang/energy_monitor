<template>
    <div class="baseConfiguration">
        {{ruleForm}}
        <el-tabs v-model="activeTableName" type="card" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="first">
                <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
                    <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                        <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                            <yg-upload-img v-if="jtem.yt == 'img'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                           :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]"
                                           @ygForm="getData"></yg-upload-img>
                            <yg-blank v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                            <yg-input v-else-if="jtem.yt == 'input'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                      :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]"
                                      @ygForm="getData"></yg-input>
                            <yg-select v-else-if="jtem.yt == 'select'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                       :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]"
                                       :options="options[jtem.name]" @ygForm="getData"></yg-select>
                            <yg-select-multiple v-else-if="jtem.yt == 'select-multiple'" :label="jtem.label"
                                                :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                                :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                                @ygForm="getData"></yg-select-multiple>
                            <yg-radio-group v-else-if="jtem.yt == 'radio'" :label="jtem.label"
                                            :prop="jtem.prop||jtem.name"
                                            :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                            @ygForm="getData"></yg-radio-group>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="能耗配置" name="second">
                <el-form :model="ruleForm" :rules="rules" ref="insertBranch">
                    <el-row :gutter="0">
                        <el-col :span="24">
                            <yg-radio-group label="能耗基准" prop="standard"
                                            :value="ruleForm.standard"
                                            formLabelWidth="100px"
                                            :options="options.standard"
                                            @ygForm="getData"></yg-radio-group>
                        </el-col>
                    </el-row>
                    <el-row :gutter="0">
                        <el-col :span="24">
                            <yg-check-box label="能耗类型" prop="enType"
                                          :value="ruleForm.enType"
                                          formLabelWidth="100px"
                                          :options="options.enType"
                                          @ygForm="getData"></yg-check-box>
                        </el-col>
                    </el-row>
                    <el-row :gutter="0">
                        <el-col :span="24">
                            <yg-radio-group label="默认时间粒度" prop="times"
                                            :value="ruleForm.times"
                                            formLabelWidth="100px"
                                            :options="options.times"
                                            @ygForm="getData"></yg-radio-group>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="报警指标配置" name="third">
                <div
                    style="padding-left: 5px;padding-top:5px;background: rgba(247,251,252,1);width: 100%;height:360px;box-sizing: border-box">
                    <el-tree
                        :data="mobileData"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :props="defaultProps">
                    </el-tree>
                </div>
            </el-tab-pane>
            <el-tab-pane label="功能配置" name="fourth">
                <div
                    style="padding-left: 5px;padding-top:5px;background: rgba(247,251,252,1);width: 100%;height:360px;box-sizing: border-box">
                    <div style="margin-bottom: 10px">（ 请取消选择此建筑不具有的功能 ）</div>
                    <ul>
                        <li v-for="(item,index) in functionConfiguration" :key="index">
                            <el-checkbox @change="parentChange(item)"
                                         :checked="actionList.indexOf(item.id)>-1?true:false">{{item.name}}
                            </el-checkbox>
                            <hr>
                            <!--<el-checkbox-group v-model="checkedBuildings" @change="handleCheckedCitiesChange">-->
                                <!--<span v-for="(opt,i) in item.options"><el-checkbox>{{opt.name}}</el-checkbox></span>-->
                            <!--</el-checkbox-group>-->
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
        </el-tabs>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addAction('insertAdmin')">确 定</el-button>
            <el-button @click="isHide">取 消</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                actionList: [1,2],
                activeTableName: 'first',
                labels: [
                    [
                        {label: '项目名称', name: 'projectName', yt: 'input', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '项目编号', name: 'projectNum', yt: 'input', len: 11},

                    ],
                    [
                        {label: '远程监控地址', name: 'projectName', yt: 'input', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '配电安全监控地址', name: 'projectNum', yt: 'input', len: 11},

                    ],
                    [
                        {label: '数据采集频率', name: 'projectName', yt: 'input', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '夜间时段', name: 'projectNum', yt: 'input', len: 11},

                    ],
                    [
                        {label: '工作时段', name: 'projectName', yt: 'input', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '加班时段', name: 'projectNum', yt: 'input', len: 11},

                    ],
                    [
                        {label: 'OPC写入', name: 'opcWrite', yt: 'radio', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '启动控制系统', name: 'opcWrite', yt: 'radio', len: 11}
                    ],
                    [
                        {label: '分户定额来源', name: 'source', yt: 'radio', len: 24}
                    ],

                ],
                ruleForm: {
                    projectName: '',
                    projectNum: '',
                    rid: '',
                    standard: "0",
                    times: "0",
                    enType: ['1', '2'],
                    status: '0',
                    opcWrite: '0',
                    source: "0"
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    ],
                    rid: [
                        {required: true, message: '请选择角色', trigger: 'change'}
                    ],

                },
                options: {
                    status: [
                        {value: '0', label: '正常'},
                        {value: '1', label: '禁止'},
                    ],
                    opcWrite: [
                        {value: '0', label: '是'},
                        {value: '1', label: '否'},
                    ],
                    source: [
                        {value: '0', label: '人工录入'},
                        {value: '1', label: '自动采集'},
                    ],
                    standard: [
                        {value: '0', label: '监测数据'},
                        {value: '1', label: '供电局抄表数据'},
                    ],
                    enType: [
                        {value: '0', label: '电'},
                        {value: '1', label: '水'},
                        {value: '2', label: '气'},
                    ],
                    times: [
                        {value: '0', label: '次'},
                        {value: '1', label: '时'},
                        {value: '2', label: '日'},
                        {value: '3', label: '周'},
                        {value: '4', label: '月'},
                        {value: '5', label: '季'},
                        {value: '6', label: '年'},
                    ],

                },
                mobileOptions: [{
                    value: '选项1',
                    label: '系统管理组'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '选项1',
                mobileData: [{
                    id: 2,
                    label: '登陆',
                }, {
                    id: 3,
                    label: '工作台',
                    children: [{
                        id: 7,
                        label: '报修'
                    }, {
                        id: 8,
                        label: '告警',
                        children: [{
                            id: 7,
                            label: '抢单'
                        }, {
                            id: 8,
                            label: '派工'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                functionConfiguration: [
                    {
                        id: 1,
                        name: '定额设置',
                        options: [{
                            id: 11,
                            name: '项目定额'
                        }, {
                            id: 12,
                            name: '科室定额'
                        }]
                    },
                    {
                        id: 2,
                        name: '用能成本',
                        options: [{
                            id: 21,
                            name: '费用查询'
                        }, {
                            id: 22,
                            name: '节能量分析'
                        },
                            {
                                id: 23,
                                name: '能效分析'
                            }]
                    },
                    {
                        id: 3,
                        name: '能耗分析',
                        options: [{
                            id: 31,
                            name: '能效查询'
                        }, {
                            id: 32,
                            name: '能流图'
                        },
                            {
                                id: 33,
                                name: '能效分析'
                            }]
                    }
                ]

            };

        },
        methods: {
            addAction(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        console.table(Object.assign({}, this.ruleForm));
                        console.log('接口数据' + '/api/admin/admin/addAdmin');
                        this.$axios.post('/api/admin/admin/addAdmin', this.ruleForm).then((res) => {
                            if (res.code == 200) {
                                this.$message({
                                    message: '添加成功',
                                    type: 'success'
                                });
                            } else {
                                this.$message.error('添加失败');
                            }
                        }).catch((error) => {
                            console.log(error);
                        }).then(() => {
                            this.$refs[ruleForm].resetFields();
                            console.log('清空数据');
                            this.$emit('flushList', true);
                            this.isHide();
                        })
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
                console.log(typeof obj.value);
                this.ruleForm[obj.prop] = obj.value;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            parentChange(o) {
                console.log(this.actionList.indexOf(o.id));
                if (this.actionList.indexOf(o.id) == -1) {
                    this.actionList.splice(-1, 0, o.id);
                } else {
                    this.actionList.splice(this.actionList.indexOf(o.id), 1);
                }
                console.log(o);
                console.log(this.actionList);
            },
        }
    };
</script>

<style>
    .baseConfiguration .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: #1881BF;
        background: #1881BF;
    }

    .baseConfiguration .el-tree {
        background: transparent;
    }
</style>
