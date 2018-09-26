<template>
    <div class="branch-management">
        <h3 class="u-layout-title">支路管理</h3>
        
        <!--条件筛选栏-->
        <div class="filter-side-bar position_r">
                <!--搜索-->
                <p class="item search">
                    <v-title-input-group
                        type="search"
                        placeholder="请输入姓名"
                        input-width="240px"
                        title-text="搜索："
                        radius="30px"
                        :input-value="forms.searchWords"
                        @searchClick="searchClick">
                    </v-title-input-group>
                </p>
    
                <!--项目选择下拉框-->
                <p class="item project">
                    <v-title-input-group
                        type="select"
                        placeholder="请选择"
                        input-width="200px"
                        title-text="项目名称："
                        radius="30px"
                        :data-arr="forms.projectName.dataArr"
                        @change="checkedProjectName"
                    >
                    </v-title-input-group>
                </p>
    
                <!--状态选择下拉框-->
                <p class="item status">
                    <v-title-input-group
                        type="select"
                        placeholder="请选择"
                        input-width="90px"
                        title-text="状态："
                        radius="30px"
                        :data-arr="forms.status.dataArr"
                        @selected="checkedStatus"
                    >
                    </v-title-input-group>
                </p>
    
                <!--搜索-->
                <p class="item">
                    <v-button
                        text=" 搜 索"
                        type="blue"
                        @click="searchBtnClick">
                        <i class="el-icon-search"
                           slot="icon"></i>
                    </v-button>
                </p>
        </div>
        
        <div class="right-comlun position_a">
            <!--导入-->
            <div class="margin_right_40  float_r">
                <v-button
                    text=" 导 入"
                    type="white"
                    @click="importTemplate">
                    <i class="el-icon-download"
                       slot="icon"></i>
                </v-button>
            </div>
        
            <!--新增-->
            <div class="margin_right_10 float_r">
                <v-button
                    text=" 新 增"
                    type="blue"
                    @click="addNewBranch">
                    <i class="el-icon-plus" slot="icon"></i>
                </v-button>
            </div>
        </div>
        
        <!--表格内容-->
        <div class="table-content">
            <v-table-data-list
                :show-sequence="tableData.showSequence"
                :show-checkbox="tableData.showCheckbox"
                @selectionChange="selectionChange"
                @sortCustomChange="sortCustomChange"
                @customBtnClick="customBtnClick"
                :v-table-data="tableData">
            </v-table-data-list>
        </div>
        
        <!--新增支路、编辑-->
        <el-dialog
            class="u-el-dialog"
            :title="dialogOperateStatus"
            :visible.sync="isShowPopup.addbranch"
            @close="clClose"
            width="1108px">
            <v-add-new-branch
                v-if="isShowPopup.addbranch"
                :item-data="itemData"
                :is-add="dialogOperateIsAdd"
                @isHide="isShowPopup.addbranch = false">
            </v-add-new-branch>
        </el-dialog>
        
        <!--换表-->
        <el-dialog
            class="popupWindow"
            title="支路换表信息（3*变压器）"
            :visible.sync="isShowPopup.changeTable"
            width="1028px">
            <change-table
                v-if="isShowPopup.changeTable"
                :item-data="itemData"
                @isHide="isShowPopup.changeTable = false"
                @flushList="falush=new Date()">
            </change-table>
        </el-dialog>
        
        <!--导入-->
        <el-dialog
            class="popupWindow"
            title="导入支路"
            :visible.sync="isShowPopup.inPuttemplate"
            width="656px">
            <in-puttemplate
                :dataURL="importUrl"
                @isHide="isShowPopup.inPuttemplate = false"></in-puttemplate>
        </el-dialog>
    </div>
</template>

<script>
    import inPuttemplate from "../../../components/common/inPuttemplate.vue"
    // import addBranch from "./addBranch.vue"
    import changeTable from "./changeTable.vue"
    
    import vAddNewBranch from "./subPage/addNewBranch.vue";
    
    import vTitleInputGroup from "../../../components/formComponents/input/titleInputGroup.vue"
    import vButton from "../../../components/formComponents/input/button.vue";
    import vTableDataList from "../../../components/formComponents/tableDataList.vue"
    import BaseConfig from "../../../baseConfig";
    import BranchManagementService from "../../../services/branchManagementService";
    
    export default {
        components: {
            // addBranch,
            changeTable,
            inPuttemplate,
            
            vTitleInputGroup,
            vButton,
            vTableDataList,
            vAddNewBranch,
        },
        data: function () {
            return {
                forms: {
                    searchWords: "",
                    projectName: {
                        dataArr: [
                            {
                                label: '南山智园C区',
                                value: 0,
                                default: true,
                            },
                            {
                                label: '科技园中国储能大厦',
                                value: 2
                            },
                            {
                                label: '南山智园B区',
                                value: 1
                            }
                        ],
                    },
                    status: {
                        dataArr: [
                            {
                                label: '启用',
                                value: 0,
                                default: true
                            },
                            {
                                label: '禁用',
                                value: 1
                            }
                        ],
                    }
                },
                httpParams: {
                   getBranchListParams: {
                       pageNum: 2,
                       pageSize: "",
                       pmid: "",
                       name: "",
                       status: ""
                   }
                },
                importUrl: {
                    downloadURL: this.$url.branchExportTemp,
                    uploadingURL: this.$url.branchImportTemp
                },
                dialogOperateStatus: "",
                dialogOperateIsAdd: true,
                isShowPopup: {
                    //新增
                    addbranch: false,
                    //编辑
                    editbranch: false,
                    //换表
                    changeTable: false,
                    //导出
                    inPuttemplate: false
                },
                tableData: {
                    showCheckbox: false,
                    showSequence: true,
                    operateBtn: [
                        {
                            text: "编辑",
                            btnKey: "edit"
                        },
                        {
                            text: "换表",
                            btnKey: "changeTable"
                        }
                    ],
                    tHead: [
                        {
                            text: '支路名称',
                            prop: "name"
                        }, {
                            text: '所属项目',
                            prop: "pmName"
                        }, {
                            text: '电表地址',
                            prop: "electricaddr"
                        }, {
                            text: '所属支路',
                            prop: "parentName"
                        }, {
                            text: '状态',
                            prop: "status"
                        }, {
                            text: '创建时间',
                            prop: "updateat",
                            sortable: "custom"
                        }, {
                            text: '创建用户',
                            prop: "creater"
                        }
                    ],
                    data: [],
                    total: 0
                },
                itemData: null,
                
                ajax: {
                    url: this.$url.getBranchList,
                    method: "post",
                    data: {
                        pageNum: 1,
                        pageSize: BaseConfig.PAGE_SIZE
                    },
                },
            }
        },
        created(){
            this.httpParams.getBranchListParams.pageSize = BaseConfig.PAGE_SIZE;
            //查询列表数据
            this.getBranchList(this.httpParams.getBranchListParams);
        },
        mounted(){
        
        },
        methods: {
            //搜索
            searchClick(keyWords){
                this.httpParams.getBranchListParams.name = keyWords;
                //查询数据
                this.getBranchList(this.httpParams.getBranchListParams)
            },
            //选择项目名称
            checkedProjectName(selectedValue){
                console.log(selectedValue)
                this.httpParams.getBranchListParams.pmid = selectedValue;
                //查询数据
                this.getBranchList(this.httpParams.getBranchListParams)
            },
            //选择状态
            checkedStatus(selectedValue){
                this.httpParams.getBranchListParams.status = selectedValue;
                //查询数据
                this.getBranchList(this.httpParams.getBranchListParams)
            },
            //查询按钮
            searchBtnClick(){
                //查询数据
                this.getBranchList(this.httpParams.getBranchListParams)
            },
            //新增、编辑
            addNewBranch(btnKey){
                if(btnKey){
                    //编辑
                    this.dialogOperateStatus = "编辑";
                    this.dialogOperateIsAdd = false;
                }else{
                    //新增
                    this.dialogOperateStatus = "新增";
                    this.dialogOperateIsAdd = true;
                }
                this.isShowPopup.addbranch = true;
            },
            //导入
            importTemplate(){
                this.isShowPopup.inPuttemplate = true;
            },
            //换表
            alterData(){
                this.isShowPopup.changeTable = true;
            },
            
            //查询列表数据
            getBranchList(params){
                BranchManagementService
                    .instance()
                    .getBranchList(params)
                    .then((res) => {
                        if(res.code === 200){
                            if(res.data && res.data.list && res.data.list.length){
                                //
                                this.tableData.data = res.data.list
                            }else{
                                //无结果
                                this.tableData.data = [];
                                this.$message.info("暂无数据")
                            }
                        }
                })
            },
            //table自定义排序回调
            sortCustomChange(orderCol){
                console.info("sortCustomChange");
                console.log(orderCol)
            },
            
            //table复选回调
            selectionChange(selectedArr){
                console.info("selectionChange");
                console.log(selectedArr)
            },
            //table自定义按钮事件
            customBtnClick(targetData){
                console.info("customBtnClick");
                console.log(targetData);
                
                this.itemData = targetData.data;
    
                if(targetData.btnKey === "edit"){
                    //编辑
                    this.addNewBranch(targetData.btnKey);
                }else{
                    //换表
                    this.alterData();
                }
            },
          
            
            clClose(){
                console.log(333333);
            },
            searBtclick(oData) {
                if (oData.action == "add") {
                    this.isShowPopup.addbranch = true;
                } else if (oData.action == "expression") {
                    this.isShowPopup.expression = true;
                }else if (oData.action == "insert") {
                    this.isShowPopup.inPuttemplate = true;
                }
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["禁用", '启用']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    // return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    // return "pl20";
                }
            },
            tablerowClick(obj) {
                if (obj.type == "edit") {
                    this.isShowPopup.addbranch = true;
                }
                if (obj.type == "changeTable") {
                    this.isShowPopup.changeTable = true;
                }
            }
        },
       

    }
</script>
<style scoped lang="scss">
    .branch-management {
        background: #fff;
        
        .filter-side-bar{
            padding: 20px 250px 0 0;
            width: auto;
            margin: 5px;
            
            .item{
                display: inline-block;
                height: 100%;
                margin: 0 20px 20px 20px;
            }
            
            .search{
                /*width: 300px;*/
            }
            
            .project{
                /*width: 280px;*/
            }
            
            .status{
                /*width: 150px;*/
            }
        }
    
        .right-comlun{
            right: 0;
            top: 70px;
        }
        
        .table-content{
            padding: 0 30px 40px 30px;
        }
    }

  
</style>
