<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
            <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                    <yg-upload-img v-if="jtem.yt == 'img'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                   :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]"
                                   @ygForm="getData"></yg-upload-img>
                    <yg-blank v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                    <yg-input v-else-if="jtem.yt == 'input'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                              :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]" @ygForm="getData"></yg-input>
                    <yg-select v-else-if="jtem.yt == 'select'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                               :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]"
                               :options="options[jtem.name]" @ygForm="getData"></yg-select>
                    <yg-select-multiple v-else-if="jtem.yt == 'select-multiple'" :formLabelWidth="jtem.labelWidth" :label="jtem.label"
                                        :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                        :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                        @ygForm="getData"></yg-select-multiple>
                    <yg-radio-group v-else-if="jtem.yt == 'radio'" :formLabelWidth="jtem.labelWidth" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                    :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                    @ygForm="getData"></yg-radio-group>
                    <div v-else-if="jtem.yt == 'onlyShow'" class="defbox"><label>{{jtem.label}}</label>{{ruleForm[jtem.name]}}</div>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('ChangeTable')">确 定</el-button>
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
                editableTabsValue2: '1',
                editableTabs2: [{
                    title: 'com1',
                    name: '1',
                    content: 'com1'
                }, {
                    title: 'com2',
                    name: '2',
                    content: 'com2'
                }],
                tabIndex: 2,

                headercellstyle:{
                    background:"rgba(241,241,241,1)",
                    textAlign:"center",
                    fontSize:"14px",
                    color:"#3A3A3A"
                },
                cellstyle:{
                    textAlign:"center"
                },
                labels: [
                    [
                        {label: '类别主图',labelWidth:"100px", name: 'avatar', yt: 'img', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '类别名称',labelWidth:"100px",  name: 'categoryname', yt: 'input', len: 11},
                    ],
                    [
                        {label: '所属大类',labelWidth:"100px",  name: 'type', yt: 'select', placeholder: '请选择类型', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '首页推荐位置',labelWidth:"100px",  name: 'type', yt: 'select', placeholder: '请选择类型', len: 11},
                    ],
                    [
                        {label: '状态',labelWidth:"100px",  name: 'devicestatus', yt: 'radio', len: 24},
                    ],
                    [
                        {label: '创建用户',labelWidth:"100px",  name: 'creater', yt: 'onlyShow', len: 11},
                        {yt: 'empty', len: 2},
                        {label: '创建时间',labelWidth:"100px",  name: 'creater_at', yt: 'onlyShow',  len: 11},
                    ],
                ],
                ruleForm: {
                    avatar: '',
                    categoryname: '',
                    type: '',
                    homelocation: '0',
                    status: '0',
                    creater:'张三',
                    creater_at:'2018',
                    devicestatus:'0'
                },
                xxx: {
                    name: [false, false],
                    age: [false, true]
                },
                options: {
                    avatar: '',
                    rid: [
                        {value: '1', label: '超级角色'},
                        {value: '2', label: '维修角色'},
                        {value: '3', label: '管理角色'}
                    ],
                    type: [
                        {value: '1', label: '平台管理员'},
                        {value: '2', label: '集团管理员'},
                        {value: '3', label: '项目管理员'}
                    ],
                    allpm: [
                        {value: '0', label: '不是'},
                        {value: '1', label: '是'},
                    ],
                    pmid: [
                        {value: '1', label: '项目1'},
                        {value: '2', label: '项目2'},
                        {value: '3', label: '项目3'},
                    ],
                    did: [
                        {value: '1', label: '部门1'},
                        {value: '2', label: '部门2'},
                    ],
                    name: [
                        {value: '1', label: '张三'},
                        {value: '2', label: '李四'},
                    ],
                    issystemuser: [
                        {value: '0', label: '不是'},
                        {value: '1', label: '是'},
                    ],
                    status: [
                        {value: '0', label: '正常'},
                        {value: '1', label: '禁止'},
                    ],
                    devicestatus: [
                        {value: '0', label: '上架'},
                        {value: '1', label: '下架'},
                    ],
                },
                rules: {
                    avatar:[{required: true} ],
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
                    type: [
                        {required: true, message: '请选择用户类型', trigger: 'change'}
                    ]
                },
            };
        },
        methods: {
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'com'+ ++this.tabIndex,
                    name: newTabName,
                    content: 'com'+this.tabIndex
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            },
            addAction(ruleForm) {
                console.log(this.ruleForm.xxx);
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
            actionDb(row, column, cell, event) {
                console.log(column);
                if (column.property == 'name') {
                    this.clickEdit('name', row);
                } else if (column.property == 'age') {
                    this.clickEdit('age', row);
                }

            },
            clickEdit(field, row) {
                for (let i = 0; i < this.ruleForm.xxx.length; i++) {
                    if (row.id == this.ruleForm.xxx[i].id) {
                        this.xxx[field][i] = true;
                        let val = this.ruleForm.xxx[i][field];
                        this.ruleForm.xxx[i][field] = ' ';
                        this.ruleForm.xxx[i][field] = val;
                        break;
                    }
                }
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
            blurInput(index, field) {
                console.log('blurInput');
                this.xxx[field][index] = false;

                let val = this.ruleForm.xxx[index][field];
                this.ruleForm.xxx[index][field] = ' ';
                this.ruleForm.xxx[index][field] = val;
            },
            rowclassname(obj){
                if(++obj.rowIndex%2 ==0){
                    return 'linebg'
                }

            }
        }
    };
</script>
<style scoped>

</style>
<style>
    .popupWindow .addbr .el-table--small td, .el-table--small th{
        padding: 7px 0;
    }
    .popupWindow .addbr .el-table--small td{
        padding: 1px 0;
    }
    .popupWindow .addbr .linebg{
        background:rgba(247,251,252,1);
    }
    .popupWindow .addbr .el-input__inner{
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
    .changerecordList h4{
        padding-left: 50px;
        font-size: 14px;
        color: #3a3a3a;
        height: 40px;
        line-height: 40px;
        background: rgba(241,241,241,1);
    }
    .changerecordList ul li span{
        color: #555555;
        font-size: 14px;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        width: 50%;
        padding-left: 50px;
        box-sizing: border-box;
    }
    .changerecordList ul{
        background: rgba(247,251,252,1);
        height: 200px;
        overflow: auto;
    }
    .remarkBox{
        overflow: hidden;
        position: relative;
        margin-bottom: 20px;
    }
    .remarkBox label{
        position: absolute;
        left: 0;
        top: 0;
        font-size: 14px;
        line-height: 15px;
        color:#555555;
        float: left;
    }
    .remarkBox textarea{
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
        border: none;
        color: #606266;
        margin-left: 0;
        width: 100%;
        outline: none;
        height: 68px;
        background: rgba(247,247,247,1);
        float: left;
        padding-left: 15px;
        resize: none;
    }
    .tablecr .el-tabs--card>.el-tabs__header{
        padding-right: 40px;
    }
    .defbox{
        height: 36px;
        line-height: 36px;
    }
    .defbox label{
        margin-right: 43px;
    }
</style>
