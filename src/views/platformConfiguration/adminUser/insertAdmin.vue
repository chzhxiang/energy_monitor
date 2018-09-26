<template>
    <div class="add-new-user">
        {{isAdd}}
        <el-tabs v-model="activeTableName" :before-leave="beforeLeave" type="card" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="first">
                <el-form :model="ruleForm" :rules="rules" ref="insertAdmin">
                    <el-row :gutter="0" v-for="(item,i) in labels" :key="JSON.stringify(item)+i">
                        <el-col v-for="(jtem,j) in item" :span="jtem.len" :key="JSON.stringify(jtem)+j">
                            <yg-upload-img class="avatar-up" :formLabelWidth="jtem.width||''" v-if="jtem.yt == 'img'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                           :value="ruleForm[jtem.name]" :imageUrl="options[jtem.name]"
                                           @ygForm="getData"></yg-upload-img>
                            <yg-blank :formLabelWidth="jtem.width||''" v-else-if="jtem.yt == 'empty'" :span="jtem.len || 1"></yg-blank>
                            <yg-input :formLabelWidth="jtem.width||''" v-else-if="jtem.yt == 'input'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                      :type="jtem.inputType||'text'" :value="ruleForm[jtem.name]" @ygForm="getData"></yg-input>
                            <yg-select v-else-if="jtem.yt == 'select'"  :formLabelWidth="jtem.width||''" :disabled="jtem.disabled||false" :class="{hasDisabled:jtem.disabled}" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                       :placeholder="jtem.placeholder" :value="ruleForm[jtem.name]"
                                       :options="options[jtem.name]" @ygForm="getData"></yg-select>
                            <yg-select-multiple :formLabelWidth="jtem.width||''" :disabled="jtem.disabled||false" :class="{hasDisabled:jtem.disabled}" v-else-if="jtem.yt == 'select-multiple'" :label="jtem.label"
                                                :prop="jtem.prop||jtem.name" :placeholder="jtem.placeholder||''"
                                                :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                                @ygForm="getData"></yg-select-multiple>
                            <yg-radio-group :formLabelWidth="jtem.width||''" v-else-if="jtem.yt == 'radio'" :label="jtem.label" :prop="jtem.prop||jtem.name"
                                            :value="ruleForm[jtem.name]" :options="options[jtem.name]"
                                            @ygForm="getData"></yg-radio-group>
                            <div v-else-if="jtem.yt == 'onlyShow'&&JSON.stringify(isAdd)!='{}'" class="defbox"><label>{{jtem.label}}</label>{{ruleForm[jtem.name]}}</div>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="移动端权限" name="second">
               <div class="typingInput">
                   <span class="mr20"><i style="font-style: normal;color:#FF4949;font-size: 18px;position: relative;top:5px;margin-right: 5px ">*</i>用户角色</span>
                   <div v-if="mobilePerssionData.roleNameEditShow" class="typingInputBox"><el-input class="input-el" v-model="mobilePerssionData.roleNameEditValue" placeholder="请输入角色名称"></el-input><button @click="saveNewRoleInfo('mobile')" class="sav">保存新角色</button><button @click="mobileRoleEditcancel">撤销更改</button></div>
                   <el-select v-if="!mobilePerssionData.roleNameEditShow" @change="mobileHaChange" v-model="mobilePerssionData.roleNameValue" placeholder="请选择角色">
                       <el-option
                           v-for="item in mobilePerssionData.roleOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                       </el-option>
                   </el-select>
               </div>
                <div style="padding-left: 10%;margin-top: 20px">
                    <el-tree
                        :data="mobilePerssionData.rolePerssionTreeData"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        :setCheckedNodes="mobilePerssionData.checkedPressions"
                        @check="mobileCheckedNodes"
                        :default-checked-keys="mobilePerssionData.checkedPressions"
                        highlight-current
                        :props="defaultProps">
                    </el-tree>
                </div>

            </el-tab-pane>
            <el-tab-pane label="后端系统端权限" name="third">
                <div class="typingInput">
                    <span class="mr20"><i style="font-style: normal;color:#FF4949;font-size: 18px;position: relative;top:5px;margin-right: 5px ">*</i>用户角色</span>
                    <div v-if="pcPerssionData.roleNameEditShow" class="typingInputBox"><el-input class="input-el" v-model="pcPerssionData.roleNameEditValue" placeholder="请输入角色名称"></el-input><button @click="saveNewRoleInfo('pc')" class="sav">保存新角色</button><button @click="pcRoleEditcancel">撤销更改</button></div>
                    <el-select  v-if="!pcPerssionData.roleNameEditShow" @change="pcHaChange" v-model="pcPerssionData.roleNameValue" placeholder="请选择角色">
                        <el-option
                            v-for="item in pcPerssionData.roleOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div style="padding-left: 10%;margin-top: 20px">
                    <el-tree
                        :data="pcPerssionData.rolePerssionTreeData"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        @check="pcCheckedNodes"
                        :default-checked-keys="pcPerssionData.checkedPressions"
                        highlight-current
                        :props="defaultProps">
                    </el-tree>
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
    import {SystemSeting} from "../../../services/systemSetingService";
    import {PlatformManage} from "../../../services/platformManageService";
    import {BasicsInformation} from "../../../services/basicsInformationService";

    export default {
        props:["isedit"],
        data() {
            return {
                isAdd:this.isedit,
                allpProgramArray:[],  //所属项目下拉数据
                activeTableName: 'first',
                labels: [
                    [
                        {label: '账号', width:"100px", name: 'username', yt: 'input', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '密码', width:"100px", name: 'password', yt: 'input', inputType: 'password', len: 11},

                    ],
                    [
                        {label: '用户类型', width:"100px", name: 'type', yt: 'select', placeholder: '请选择类型', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '查看所有项目', width:"100px", name: 'allpm', yt: 'radio', len: 11}
                    ],
                    [
                        {label: '模块角色', width:"100px", name: 'mid', yt: 'select', placeholder: '请选择模块角色', len: 11},
                    ],
                    [
                        {label: '所属项目', width:"100px",disabled:false, name: 'pmidsArray', yt: 'select-multiple', placeholder: '请选择项目', len: 23},
                    ],
                    [
                        {label: '所属部门', width:"100px", name: 'did', yt: 'select', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '姓名', width:"100px", name: 'memid', yt: 'select', len: 11},
                    ],
                    [
                        {label: '手机号',width:"100px", name: 'phone', yt: 'input', len: 11},
                        {yt: 'empty', len: 1},
                        {label: 'Email',width:"100px", name: 'email', yt: 'input', len: 11},
                    ],
                    [
                        {label: '系统用户',width:"100px", name: 'issys', yt: 'radio', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '状态',width:"100px", name: 'status', yt: 'radio', len: 11},
                    ],
                    [
                        {label: '创建用户',width:"100px", name: 'creater', yt: 'onlyShow', len: 11},
                        {yt: 'empty', len: 1},
                        {label: '创建时间',width:"100px", name: 'createAt', yt: 'onlyShow', len: 11},
                    ],
                ],
                ruleForm: {
                    username: '',   //账号
                    password: '',   //密码
                    type:1,         //用户类型 1-平台 2-集团 3-项目
                    allpm:1,        //查看所有项目 0-所有 1-不是
                    mid:'',         //模块角色
                    pmidsArray:[],       //所属项目
                    pmids:'',
                    did: '',        //所属部门
                    realname:'',   //姓名
                    memid:'',      //姓名id
                    phone: '',     //手机号
                    email: '',     //e-mail
                    issys:0,       //是否系统用户 0-否 1-是
                    status: 0,   //状态 0-正常 1-禁止
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 2, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {pattern:/\d/, message: '请正确输入', trigger: 'focus'},
                        {min: 6, max: 12, message: '长度在 6 到 16 个英文字符或数字', trigger: 'blur'}
                    ],
                    type: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                    mid: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                    pmidsArray: [
                        {required: true, message: '请选择', trigger: 'change'}
                    ],
                    did: [
                        {required: false, message: '请选择', trigger: 'change'}
                    ],
                    memid: [
                        {required: false, message: '请选择', trigger: 'change'}
                    ],
                    phone: [
                        {required: false, message: '请选择', trigger: 'change'},
                        {min: 2, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'},
                    ],
                    email: [
                        {pattern:/\S/, message: '请正确输入', trigger: 'focus'},
                        {pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: '请正确输入', trigger: 'focus'},
                    ]
                },
                options: {
                    type: [
                        {value: 1, label: '平台管理员'},
                        {value: 2, label: '集团管理员'},
                        {value: 3, label: '项目管理员'}
                    ],
                    allpm: [
                        {value: 0, label: '是'},
                        {value: 1, label: '否'}
                    ],
                    mid:[],
                    pmidsArray:[],
                    did:[],
                    memid:[],
                    issys:[
                        {value: 0, label: '否'},
                        {value: 1, label: '是'}
                    ],
                    status:[
                        {value: 0, label: '正常'},
                        {value: 1, label: '禁止'}
                    ]
                },
                mobilePerssionData:{
                    roleNameEditShow:false,
                    roleNameEditValue:'',
                    roleOptions: [/*  {value: '选项1', label: '系统管理组'},*/],
                    roleNameValue: '',
                    rolePerssionTreeData: [],
                    optActivePressions:[],
                    activeRoleName:'',
                    checkedPressions:[]
                },
                pcPerssionData:{
                    roleNameEditShow:false,
                    roleNameEditValue:'',
                    roleOptions: [/*  {value: '选项1', label: '系统管理组'},*/],
                    roleNameValue: '',
                    rolePerssionTreeData: [],
                    optActivePressions:[],
                    activeRoleName:'',
                    checkedPressions:[]
                },
                defaultProps: {
                    children: 'child',
                    label: 'title'
                }

            };

        },
        created(){
            this.getOptiondata();
            this.getMobileRoleAndPressions();
            this.getPcRoleAndPressions();
        },
        mounted(){

        },
        methods: {
            getOptiondata(){
                //获取项目下拉框数据
                PlatformManage.instance().getAllpProgramArray()
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.array;
                                this.allpProgramArray = this.lzh.renderOptionData(data,["id","name"],["value","label"]);
                                this.options.pmidsArray = this.allpProgramArray;
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    })

                //获取模块角色下拉框数据
                SystemSeting.instance().getModulRoleArray({type:2})
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.list;
                            this.options.mid = this.lzh.renderOptionData(data,["id","name"],["value","label"]);
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    })
                //判断所属项目是否多选
                this.isMultipleProgramOption();
                //获取需要联动下拉框数据
                this.getProjectOption();
            },
            getProjectOption(){
                if(this.ruleForm.type ==1){
                    BasicsInformation.instance().getProjectArray({type:this.ruleForm.type})
                        .then((res) => {
                            if (res.code == 200) {
                                let data = res.data.projectArray;
                                this.options.did = this.lzh.renderOptionData(data,["departid","departname"],["value","label"]);
                            } else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else {
                                this.$message.error('获取数据失败');
                            }
                        })
                }else {
                    if(!this.ruleForm.pmids){
                        return false;
                    }
                    //获取部门下拉框数据
                    BasicsInformation.instance().getDepartArray({type:this.ruleForm.type,program:this.ruleForm.pmids})
                        .then((res) => {
                            if (res.code == 200) {
                                let data = res.data.departList;
                                this.options.did = this.lzh.renderOptionData(data,["departid","name"],["value","label"]);
                            } else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else {
                                this.$message.error('获取数据失败');
                            }
                        })
                }

            },
            getMobileRoleAndPressions(defId){
                //获取移动端角色列表
                SystemSeting.instance().getModulRoleArray({type:0})
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.list;
                            this.mobilePerssionData.roleOptions = this.lzh.renderOptionData(data,["id","name",'perssions'],["value","label",'perssions']);
                            if(defId){
                                for (let v of this.mobilePerssionData.roleOptions){
                                    if(v.value == defId){
                                        this.mobilePerssionData.roleNameValue = v.value;
                                        this.mobilePerssionData.activeRoleName = v.label;
                                        this.mobilePerssionData.checkedPressions = v.perssions.split(',');
                                        this.mobilePerssionData.optActivePressions = this.mobilePerssionData.checkedPressions
                                        return
                                    }
                                }
                            }else {
                                this.mobilePerssionData.roleNameValue = this.mobilePerssionData.roleOptions[0].value;
                                this.mobilePerssionData.activeRoleName = this.mobilePerssionData.roleOptions[0].label;
                                this.mobilePerssionData.checkedPressions = this.mobilePerssionData.roleOptions[0].perssions.split(',');
                                this.mobilePerssionData.optActivePressions = this.mobilePerssionData.checkedPressions
                            }
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    }).then((res) => {
                    //获取移动端权限列表
                    SystemSeting.instance().getPerssionList({type:0})
                        .then((res) => {
                            if (res.code == 200) {
                                let data = res.data.pessionList;
                                this.mobilePerssionData.rolePerssionTreeData = data
                            } else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else {
                                this.$message.error('获取数据失败');
                            }
                        })
                })
            },
            getPcRoleAndPressions(defId){
                //获取后台系统角色列表
                SystemSeting.instance().getModulRoleArray({type:1})
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.list;
                            this.pcPerssionData.roleOptions = this.lzh.renderOptionData(data,["id","name",'perssions'],["value","label",'perssions']);
                            if(defId){
                                for (let v of this.pcPerssionData.roleOptions){
                                    if(v.value == defId){
                                        this.pcPerssionData.roleNameValue = v.value;
                                        this.pcPerssionData.activeRoleName = v.label;
                                        this.pcPerssionData.checkedPressions = v.perssions.split(',')
                                        this.pcPerssionData.optActivePressions = this.pcPerssionData.checkedPressions
                                        return
                                    }
                                }

                            }else {
                                this.pcPerssionData.roleNameValue = this.pcPerssionData.roleOptions[0].value;
                                this.pcPerssionData.activeRoleName = this.pcPerssionData.roleOptions[0].label;
                                this.pcPerssionData.checkedPressions = this.pcPerssionData.roleOptions[0].perssions.split(',')
                                this.pcPerssionData.optActivePressions = this.pcPerssionData.checkedPressions
                            }

                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    }).then((res) => {
                    //获取后台系统权限列表
                    SystemSeting.instance().getPerssionList({type:1})
                        .then((res) => {
                            if (res.code == 200) {
                                let data = res.data.pessionList;
                                this.pcPerssionData.rolePerssionTreeData = data
                            } else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else {
                                this.$message.error('获取数据失败');
                            }
                        })
                })
            },
            getDepartOption(){
                //获取姓名下拉框数据
                PlatformManage.instance().getMemberArray({did:this.ruleForm.did})
                    .then((res) => {
                        if (res.code == 200) {
                            let data = res.data.memberList;
                            this.options.memid = this.lzh.renderOptionData(data,["id","name"],["value","label"]);
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    })
            },
            //根据是否查看所有项目判断所属项目是否多选
            isMultipleProgramOption(){
                if(this.ruleForm.type ==3){
                    this.ruleForm.pmidsArray = "";

                    this.labels[3][0].yt = "select";
                }else {
                    this.ruleForm.pmidsArray = [];

                    this.labels[3][0].yt = "select-multiple";
                }
            },
            mobileHaChange(roId){
                for (let v of this.mobilePerssionData.roleOptions){
                    if(v.value == roId){
                        this.mobilePerssionData.checkedPressions = v.perssions.split(',');
                        this.mobilePerssionData.optActivePressions = this.mobilePerssionData.checkedPressions
                        this.mobilePerssionData.activeRoleName = v.label;
                        this.mobilePerssionData.rolePerssionTreeData = this.mobilePerssionData.rolePerssionTreeData.splice(0);
                        return
                    }
                }
            },
            pcHaChange(roId){
                for (let v of this.pcPerssionData.roleOptions){
                    if(v.value == roId){
                        this.pcPerssionData.checkedPressions = v.perssions.split(',');
                        this.pcPerssionData.optActivePressions = this.pcPerssionData.checkedPressions
                        this.pcPerssionData.activeRoleName = v.label;
                        this.pcPerssionData.rolePerssionTreeData = this.pcPerssionData.rolePerssionTreeData.splice(0);
                        return
                    }
                }
            },
            mobileCheckedNodes(checkedNodes,checkedKeys){
                let newName = this.mobilePerssionData.activeRoleName.match(/\[\w+\]/g);
                this.mobilePerssionData.roleNameEditValue = newName!=null?this.mobilePerssionData.activeRoleName.replace(newName,'')+'['+Math.round(Math.random()*9999)+']':this.mobilePerssionData.activeRoleName+'['+Math.round(Math.random()*9999)+']';
                this.mobilePerssionData.roleNameEditShow = true;
                this.mobilePerssionData.checkedPressions =  checkedKeys.checkedKeys;
            },
            pcCheckedNodes(checkedNodes,checkedKeys){
                let newName = this.pcPerssionData.activeRoleName.match(/\[\w+\]/g);
                this.pcPerssionData.roleNameEditValue = newName!=null?this.pcPerssionData.activeRoleName.replace(newName,'')+'['+Math.round(Math.random()*9999)+']':this.pcPerssionData.activeRoleName+'['+Math.round(Math.random()*9999)+']';;
                this.pcPerssionData.roleNameEditShow = true;
                this.pcPerssionData.checkedPressions =  checkedKeys.checkedKeys;
            },
            mobileRoleEditcancel(){
                this.mobilePerssionData.checkedPressions =  this.mobilePerssionData.optActivePressions;
                this.mobilePerssionData.rolePerssionTreeData = this.mobilePerssionData.rolePerssionTreeData.splice(0);
                this.mobilePerssionData.roleNameEditShow = false;

            },
            pcRoleEditcancel(){
                this.pcPerssionData.checkedPressions = this.pcPerssionData.optActivePressions;
                this.pcPerssionData.rolePerssionTreeData = this.pcPerssionData.rolePerssionTreeData.splice(0);
                this.pcPerssionData.roleNameEditShow = false;
            },
            saveNewRoleInfo(divece){
                if(divece=='mobile'){
                     SystemSeting.instance().addRoleInfo({name:this.mobilePerssionData.roleNameEditValue,issys:1,type:0,perssions:this.mobilePerssionData.checkedPressions?this.mobilePerssionData.checkedPressions.join(','):''})
                         .then((res) => {
                             if (res.code == 200) {
                                 let data = res.data;
                                 this.getMobileRoleAndPressions(data);
                                 this.mobilePerssionData.roleNameEditShow = false;
                                 this.$message({
                                     message: '保存成功',
                                     type: 'success'
                                 });
                             } else if(res.code == 400){
                                 this.$message.error(res.msg);
                             }else {
                                 this.$message.error('获取数据失败');
                             }
                         })
                }else {
                    SystemSeting.instance().addRoleInfo({name:this.pcPerssionData.roleNameEditValue,issys:0,type:1,perssions:this.pcPerssionData.checkedPressions?this.pcPerssionData.checkedPressions.join(','):''})
                        .then((res) => {
                            if (res.code == 200) {
                                let data = res.data;
                                this.getPcRoleAndPressions(data);
                                this.pcPerssionData.roleNameEditShow = false;
                                this.$message({
                                    message: '保存成功',
                                    type: 'success'
                                });
                            } else if(res.code == 400){
                                this.$message.error(res.msg);
                            }else {
                                this.$message.error('获取数据失败');
                            }
                        })
                }
            },
            addAction(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        if(this.mobilePerssionData.roleNameEditShow || this.pcPerssionData.roleNameEditShow){
                            this.$message.error('请先保存正在编辑的角色');
                            return false
                        }
                        let postdata = this.ruleForm;
                        postdata['h5rid'] = this.mobilePerssionData.roleNameValue
                        postdata['pcrid'] = this.pcPerssionData.roleNameValue
                                console.log(postdata);
                           PlatformManage.instance().addNewAdmin(postdata)
                            .then((res) => {
                                if (res.code == 200) {
                                    this.setRefresh();
                                    this.$message({
                                        message: '新增用户成功！',
                                        type: 'success'
                                    });
                                } else if(res.code == 400){
                                    this.$message.error(res.msg);
                                }else {
                                    this.$message.error('获取数据失败');
                                }
                            })
                    }else {
                        this.$message.error('请正确填写基础信息内容');
                    }
                })
            },
            beforeLeave(activeName, oldActiveName){
                if(this.mobilePerssionData.roleNameEditShow || this.pcPerssionData.roleNameEditShow){
                    this.$message.error('请先保存正在编辑的角色');
                    return false
                }



            },
            setRefresh(){
                this.$refs["insertAdmin"].resetFields();
                this.$emit('flushList', true);
                this.isHide();
            },
            isHide() {
                this.$emit('isHide', false);
            },
            getData(obj) {
                //根据表单输入数据改变对应字段的值
                this.ruleForm[obj.prop] = obj.value;
                //改变用户类型时的相应逻辑
                if(obj.prop =='type'){
                    //切换类型时清除已选项目
                    this.ruleForm.pmidsArray = [];
                    this.ruleForm.pmids = "";
                    this.ruleForm.did= '';
                    this.options.did = [];
                    this.isMultipleProgramOption()
                    this.getProjectOption();
                }
                //改变所属对象时的相应逻辑
                if(obj.prop =='pmidsArray'){
                    this.ruleForm.pmids = Array.isArray(obj.value) ? obj.value.join(',') : obj.value;
                    this.getProjectOption();
                }
                //切换是否查看所有项目时的相应逻辑
                if(obj.prop =='allpm'){
                    if(obj.value ==0){
                        this.isMultipleProgramOption();
                        this.labels[3][0].disabled = true;
                        this.labels = Object.assign({},this.labels);
                    }else {
                        this.labels[3][0].disabled = false;

                    }
                }
                //选择部门时获取员工姓名
                if(obj.prop =='did'){
                    this.getDepartOption();
                }

                if(obj.prop = 'memid'){
                    for (let v of this.options.memid){
                        if(v.value == obj.value){
                            this.ruleForm.realname = v.label;
                            return
                        }
                    }
                }
            },
            getEditData(){
                PlatformManage.instance().getAdminInfo({aid:this.isAdd.id})
                    .then((res) => {
                        if (res.code == 200) {
                           let data = res.data;
                            console.log(data);
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取数据失败');
                        }
                    })
                this.getMobileRoleAndPressions(this.isAdd.h5rid);
                this.getPcRoleAndPressions(this.isAdd.pcrid);
            },
            handleClick(tab, event) {
                //console.log(tab, event);
            }
        },
        watch: {
            isedit: {
                handler(newData, oldData) {
                    this.isAdd = newData;
                    if(JSON.stringify(this.isAdd)=="{}"){
                        this.$refs['insertAdmin'].resetFields();
                        this.getMobileRoleAndPressions();
                        this.getPcRoleAndPressions();
                    }else {
                        this.getEditData();
                    }
                },
                deep: true
            },
        },
    };
</script>

<style>
.add-new-user  .el-tabs__content{
    padding-top: 20px;
}
.defbox{
    height: 36px;
    line-height: 36px;
}
.defbox label{
    margin-right: 43px;
}
.el-tabs__content{
    overflow: inherit;
}
.typingInputBox{
    display: inline-block;
}
.typingInputBox .input-el{
    width: 215px;
    margin-right: 20px;
}
.typingInputBox button{
    background: none;
    border: 1px solid #dcdfe6;
    color: #606266;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 15px;
    height: 26px;
    margin-right: 10px;
    line-height: 24px;
    font-size: 14px;
    outline: none;
}
.typingInputBox button.sav{
    background:#1881BF;
    color: #fff;
    border-color: #1881BF;
}
</style>
