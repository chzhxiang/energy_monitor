<template>
    <div class="project-info-box">
        <h3 class="u-layout-title">项目信息</h3>
        <div class="search-list u-layout-search">
            <div class="item project-list inline_block">
                <v-title-input-group
                    type="search"
                    placeholder="请选择"
                    title-text="项目名称："
                    input-width="200px"
                    radius="30px"
                    v-model="getProjectListParams.name"
                    :input-value="getProjectListParams.name"
                    @search="searchInput"
                ></v-title-input-group>
            </div>
            <div class="item project-status inline_block">
                <v-title-input-group
                    type="select"
                    placeholder="请选择"
                    title-text="状态："
                    input-width="100px"
                    :data-arr="status.dataArr"
                    radius="30px"
                    v-model="getProjectListParams.status"
                ></v-title-input-group>
            </div>
            <v-button @click="searchBtn"
                text="搜索"
                type="blue"
                padding="0 20px"
            >
                <i class="el-icon-search" slot="icon"></i>
            </v-button>
            <div class="float_r">
                <v-button
                    text="新增"
                    type="blue"
                    padding="0 20px"
                    @click="addProject"
                >
                    <i class="el-icon-plus" slot="icon"></i>
                </v-button>
            </div>
        </div>
        
        <div class="project-table-list u-layout-table">
            <v-table-data-list
                :show-sequence="tableData.showSequence"
                :show-checkbox="tableData.showCheckbox"
                @selectionChange="selectionChange"
                @sortCustomChange="sortCustomChange"
                @customBtnClick="customBtnClick"
                @pageSizesChange="pageSizesChange"
                @pageCurrentChange="pageCurrentChange"
                @goToPage="goToPage"
                :v-table-data="tableData">
            </v-table-data-list>
        </div>
        
        <el-dialog
            class="u-el-dialog"
            title="添加项目信息"
            :visible.sync="isShowPopup.add"
            width="1108px"
            v-if="isShowPopup.add"
        >
            <add-project
                @isHide="isShowPopup.add = false"
                @flushList="falush=new Date()">
            </add-project>
        </el-dialog>
        
        <el-dialog
            class="u-el-dialog"
            title="基本配置"
            :visible.sync="isShowPopup.configuration"
            width="800px"
            v-if="isShowPopup.configuration">
            <configuration
                @isHide="isShowPopup.configuration = false"
                @flushList="falush=new Date()">
            </configuration>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from "../../../components/common/searchBar.vue"
    import dataTable from "../../../components/common/dataTable.vue"
    import AddProject from "./addProject.vue"
    import Configuration from "./Configuration.vue"
    
    import vTableDataList from "../../../components/formComponents/tableDataList.vue";
    import vTitleInputGroup from "../../../components/formComponents/input/titleInputGroup.vue"
    import vButton from "../../../components/formComponents/input/button.vue"
    
    import BaseConfig from "../../../baseConfig";
    import ProjectService from "../../../services/projectService";
    import GlobalUtil from "../../../utils/globalUtil";
    import {Status} from "../../../../static/enum/generalEnum";
    
    export default {
        components: {
            searchBar,
            dataTable,
            AddProject,
            Configuration,
            
            vTitleInputGroup,
            vButton,
            vTableDataList
        },
        data() {
            return {
                status: {
                    dataArr: Status
                },
                //查询列表--参数
                getProjectListParams: {
                    pageNum: 1,
                    pageSize: BaseConfig.PAGE_SIZE,
                    name: "",
                    status: ""
                },
                //表格数据
                tableData: {
                    showCheckbox: true,
                    showSequence: true,
                    operateBtn: [
                        {
                            text: "编辑",
                            btnKey: "edit"
                        },
                        {
                            text: "配置",
                            btnKey: "set"
                        }
                    ],
                    tHead: [
                        {
                            text: '项目名称',
                            prop: "name"
                        }, {
                            text: '负责人',
                            prop: "principal"
                        }, {
                            text: '项目类型',
                            prop: "type"
                        }, {
                            text: '所属区域',
                            prop: "regionp"
                        }, {
                            text: '项目地址',
                            prop: "addr"
                        }, {
                            text: '状态',
                            prop: "statusText"
                        }
                    ],
                    data: [],
                    dbclickEditColumn:'type',
                    total: 0,
                    pageSize: BaseConfig.PAGE_SIZE,
                    pageSizeList: BaseConfig.PAGE_SIZE_LIST,
                    currentpage: 1,
                },
                itemData: null,
                
                isShowPopup: {
                    add: false,
                    configuration: false
                },
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg', action: 'search'},
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add'},
                    ]
                },
            }
        },
        created(){
            //初始化分页查询
            this.getProjectListParams.pageSize = BaseConfig.PAGE_SIZE;
            this.getProjectList(this.getProjectListParams);
        },
        updated(){
        
        },
        methods: {
            //查询列表
            getProjectList(params){
                ProjectService
                    .instance()
                    .getProjectList(params)
                    .then((res) => {
                        if(res.code === 200){
                            if(res.data && res.data.list && res.data.list.length){
                            
                            this.filterStatusArr(res.data.list);
                            this.tableData.data = res.data.list;
                            this.tableData.total = res.data.total;
                            console.log(this.tableData.data)
                            }else{
                                this.tableData.data = [];
                                this.tableData.total = 0;
                            }
                        }
                })
            },
            //搜索框事件
            searchInput(keyWords){
                //console.log(this.getProjectListParams);
                this.getProjectList(this.getProjectListParams);
            },
            //搜索按钮
            searchBtn(){
                console.log(this.getProjectListParams);
                this.getProjectList(this.getProjectListParams);
            },
            //新增
            addProject(){
               this.isShowPopup.add = true;
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
                }else{
                    //换表
                }
            },
            //单页数量改变
            pageSizesChange(res){
                console.log("pageSizesChange", res);
                this.getProjectListParams.pageSize = res;
                this.tableData.pageSize = res;
                this.getProjectList(this.getProjectListParams);
            },
            //切换页
            pageCurrentChange(res){
                //console.log("pageCurrentChange", res);
                this.getProjectListParams.pageNum = res;
                this.tableData.currentpage = res;
                this.getProjectList(this.getProjectListParams);
            },
            //跳转
            goToPage(res){
                console.log("goToPage", res);
                this.getProjectListParams.pageNum = res;
                this.tableData.currentpage = res;
                this.getProjectList(this.getProjectListParams);
            },
            // status 状态  value <==> label ，扩展字段,后端数据key ==> status
            filterStatusArr(statusArr){
                for(let i = 0, len = statusArr.length; i < len; i++){
                    if(statusArr[i].status !== undefined){
                        statusArr[i]['statusText'] = GlobalUtil.filterStatus(statusArr[i].status)
                    }
                }
            }
        },

    }
</script>
<style scoped>
    .project-info-box {
        background: #fff;
    }
    .project-info-box .search-list{
        height: 30px;
        /*padding:20px 30px;*/
    }
    .project-info-box .search-list .item{
        height: 100%;
        margin-right:30px;
    }
    .project-info-box .search-list .project-list{
        /*width: 270px;*/
    }
    .project-info-box .search-list .project-status{
        /*width: 145px;*/
    }
    
    .project-table-list{
        /*padding: 0 30px 30px 30px;*/
    }
    
</style>
