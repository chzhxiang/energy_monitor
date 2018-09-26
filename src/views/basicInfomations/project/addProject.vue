<template>
    <div class="add-project">
        <div class="project-base-info">
            <!--项目名称 name-->
            <div class="item">
                <v-title-input-group
                    required="true"
                    type="text"
                    title-text="项目名称"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--项目类型 type-->
            <div class="item">
                <v-title-input-group
                    type="select"
                    title-text="项目类型"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--所属区域 regionp-->
            <div class="item">
                <v-title-input-group
                    type="select"
                    title-text="所属区域"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--项目地址 addr-->
            <div class="item">
                <v-title-input-group
                    type="text"
                    title-text="项目地址"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--项目编号 number-->
            <div class="item">
                <v-title-input-group
                    type="text"
                    title-text="项目编号"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--负责人 principal-->
            <div class="item">
                <v-title-input-group
                    type="text"
                    title-text="负责人"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--联系电话 tel-->
            <div class="item position">
                <v-title-input-group
                    type="text"
                    title-text="联系电话"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--地图定位 经度：longitude 纬度：latitude 116°23′17E，39°54′27N -->
            <div class="item">
                <v-title-input-group
                    type="text"
                    title-text="地图定位"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    placeholder="10°10′10E，10°10′10E"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--项目面积 totalarea-->
            <div class="item">
                <v-title-input-group
                    type="text"
                    title-text="项目面积"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--人员规格 personSum-->
            <div class="item">
                <v-title-input-group
                    type="select"
                    title-text="项目名称"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--物业单位 property-->
            <div class="item">
                <v-title-input-group
                    type="text"
                    title-text="物业单位"
                    show-border="false"
                    input-width="430px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.name"
                >
                </v-title-input-group>
            </div>
            <!--项目图片 picurl-->
            <div class="item picurl">
                <p class="picurl-title inline_block">项目图片</p>
                <a title="放大"
                    class="picurl-img inline_block position_r cursor_pointer">
                    <img src="" v-img-err>
                    <i class="large position_a el-icon-zoom-in"></i>
                </a>
                <v-button
                    type="white"
                    text="编辑"
                    padding="0 20px"></v-button>
            </div>
            <!--状态 status-->
            <div class="item">
                <v-title-input-group
                    type="radio"
                    title-text="状态"
                    show-border="false"
                    input-width="160px"
                    title-text-width="68px"
                    bg-color="gray"
                    v-model="projectBaseInfo.status"
                    :data-arr="status.dataArr"
                >
                </v-title-input-group>
            </div>
        </div>
        <!--项目内建筑信息 buildinglist json字符串-->
      
        <p class="sub-title u-layout-line-title">项目内建筑信息</p>
        
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary" @click="addAction('ChangeTable')">保 存</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import vTitleInputGroup from "../../../components/formComponents/input/titleInputGroup.vue";
    import vButton from "../../../components/formComponents/input/button.vue";
    import {Status} from "../../../../static/enum/generalEnum";
    export default {
        props: ['itemData'],
        components: {
            vTitleInputGroup,
            vButton
        },
        data() {
            return {
                status: {
                    dataArr: Status
                },
                projectBaseInfo: {
                    name: "",           //项目名称 s
                    type: null,         //项目类型 n
                    regionp: null,      //所属区域 n
                    addr: "",           //项目地址 s
                    number: null,       //项目编号 n
                    principal: "",      //负责人   s
                    tel: "",            //联系电话 s
                    longitude: "",      //经度：longitude 116°23′17E  s
                    latitude: "",       //纬度：latitude 39°54′27N    s
                    totalarea: null,    //项目面积 n
                    personSum: "",      //人员规格 s
                    property: "",       //物业单位 s
                    picurl: "",         //项目图片 s
                    status: 1,       //状态 n
                    buildinglist: {     //项目内建筑信息
                    
                    }
                },
                labels: [
                    [
                        {label: '建筑面积', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '空调面积', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '采暖面积', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '地上面积', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '地下面积', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                    ],
                    [
                        {label: '建筑层数', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '地上层数', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '地下层数', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '建筑高度', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                        {label: '建筑年代', name: 'username', yt: 'input', len: 4},
                        {yt: 'empty', len: 1},
                    ],
                    [
                        {label: '空调系统形式', name: 'type', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '工作时间', name: 'type', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '物业单位', name: 'type', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                        {label: '物业单位', name: 'type', yt: 'select', placeholder: '请选择类型', len: 5},
                        {yt: 'empty', len: 1},
                    ],
                    [
                        {label: '创建人', name: 'username', yt: 'input', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '创建时间', name: 'username', yt: 'input', len: 11},
                    ],
                    [
                        {label: '是否系统', name: 'status', yt: 'radio', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '状态', name: 'status', yt: 'radio', len: 11},
                    ],
                ],
                headercellstyle: {
                    background: "rgba(241,241,241,1)",
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#3A3A3A"
                },
                cellstyle: {
                    textAlign: "center"
                },
                ruleForm: {
                    avatar: '',
                    username: '',
                    password: '',
                    rid: '',
                    type: '',
                    allpm: '0',
                    pmid: [],
                    did: '',
                    name: '',
                    phone: '',
                    email: '',
                    status: '0',
                    isonline: '0',
                    xxx: [
                        {id: 1, name: 'xx', age: 12, sex: 1},
                        {id: 2, name: 'bb', age: 22, sex: 2},
                    ],
                    builds: [
                        {label: '请输入', username: '', type: '', status: 0},
                    ]
                },
                xxx: {
                    name: [false, false],
                    age: [false, true]
                },
                builds: {
                    label: [false],
                },
                rules: {
                    // username: [
                    //     {required: true, message: '请输入用户名', trigger: 'blur'},
                    //     {min: 6, max: 12, message: '6到12个字符', trigger: 'blur'}
                    // ],
                    // password: [
                    //     {required: true, message: '请输入密码', trigger: 'blur'},
                    //     {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    // ],
                    // rid: [
                    //     {required: true, message: '请选择角色', trigger: 'change'}
                    // ],
                    // type: [
                    //     {required: true, message: '请选择用户类型', trigger: 'change'}
                    // ]
                },
                options: {
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
                    isonline: [
                        {value: '0', label: '是'},
                        {value: '1', label: '否'},
                    ],
                    status: [
                        {value: 0, label: '启用'},
                        {value: 1, label: '禁用'},
                    ],
                },
                currentTab: '',
                tabCloseShow: true,
            };
        },
        mounted() {
        },
        methods: {
            addTab() {
                this.ruleForm.builds.push({label: '请输入', username: '', type: '', status: 0});
            },
            removeTab() {
                this.ruleForm.builds.splice(this.currentTab, 1);
                if (this.currentTab > 0) {
                    this.currentTab = (this.currentTab - 1).toString();
                }
            },
            addAction(ruleForm) {
                console.log(this.ruleForm.xxx);
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        console.table(Object.assign({}, this.ruleForm));
                        this.$refs[ruleForm].resetFields();
                        this.clearData();
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
            clearData() {
                for (let i in this.ruleForm.builds) {
                    this.ruleForm.builds[i].username = '';
                    this.ruleForm.builds[i].status = 0;
                    this.ruleForm.builds[i].type = '';
                }
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
            blurInput(index, field) {
                console.log('blurInput');
                this.xxx[field][index] = false;

                let val = this.ruleForm.xxx[index][field];
                this.ruleForm.xxx[index][field] = ' ';
                this.ruleForm.xxx[index][field] = val;
            },
            editTabName(index) {
                this.tabCloseShow = false;
                this.builds.label[index] = true;
                let name = this.ruleForm.builds[index].label;
                this.ruleForm.builds[index].label = '';
                this.ruleForm.builds[index].label = name;
            },
            inputBlur(index) {
                console.log('inputBlur');
                this.builds.label[index] = false;
                let name = this.ruleForm.builds[index].label;
                this.ruleForm.builds[index].label = '';
                this.ruleForm.builds[index].label = name;
                this.tabCloseShow = true;
            }
        }
    };
</script>
<style scoped lang="scss">
    .add-project{
        padding:20px 0 30px 30px;
        
        .project-base-info{
            .item{
                margin: 0 38px 20px 0;
                display: inline-block;
            }.picurl{
                width: 228px;
            
                .picurl-img{
                    width: 50px;
                    height: 50px;
                    border: 1px solid #bbb;
                    border-radius: 3px;
                    margin: 0 10px;
                    
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    
                    .large{
                        width: 12px;
                        height: 12px;
                        font-size: 12px;
                        right: 1px;
                        bottom: 1px;
                    }
                }
             }
        }
    }
    
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
