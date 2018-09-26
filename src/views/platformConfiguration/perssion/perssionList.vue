<style></style>
<template>
    <div class="perssionList" style="background: #fff">
        <h3 class="perssionListtit">权限列表</h3>
        <div style="padding: 0 30px;position: relative">
            <searchBar style="margin-right: 100px" :inSearchData="inSearchData" @outData="btnClick" :btnList="searToolBtnList"></searchBar>
        </div>
        <dataTable
            :formatter="formatter"
            :inTableData="tableData"
            :inAjax="ajax"
            :flush="falush"
            :inSerachFilte="serachFilte"
            @selection="selectionChange"
            @rowClick="rowClick">
        </dataTable>
        <el-dialog class="popupWindow" :title="popupTit.addPopup" :visible.sync="isShow.insert" width="709px">
            <InsertPerssion :isedit="editItem" @isHide="isShow.insert = false" @flushList="falush=new Date()"></InsertPerssion>
        </el-dialog>
    </div>
</template>
<script>
    import searchBar from '../../../components/common/searchBar.vue'
    import dataTable from '../../../components/common/dataTable.vue'
    import InsertPerssion from './insertPerssion.vue'
    import DeleteInfor from "../../../components/common/deleteInfor"

    export default {
        components: {
            searchBar, dataTable, InsertPerssion,DeleteInfor
        },
        data() {
            return {
                falush: '',
                editItem:{},
                serachFilte:{},
                isdelInfo:{
                    method:"get",
                    url:this.$url.delRole,
                    data: {
                        id:'',
                    }
                },
                isShow: {
                    insert: false,
                    deleteInfor: false,
                },
                popupTit:{
                    addPopup:""
                },
                tableData: {
                    tHead: [
                        {name: '权限类别', field: "pertype"},
                        {name: '权限名称', field: "title"},
                        {name: '父级名称', field: "pid"},
                        {name: '模块名称', field: "index"},
                        {name: '子类', field: "type"},
                        {name: '显示顺序', field: "sort"},
                        {name: '菜单链接', field: "url",width:400},
                        {name: '状态', field: "status"},
                    ],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {type: 'enabled', label: '启用', icon: ''},
                        {type: 'disabled', label: '禁用', icon: ''}
                    ],
                    isMultiple: false,
                    isRank: true
                },
                ajax: {
                    url: this.$url.getListPression,
                    method: "post",
                    data: {
                        pageNum: 1,
                        pageSize: 15
                    },
                },
                inSearchData: [
                    {
                        type: "searInput",
                        field: "searchKey",
                        placeholder: "请输入账号、姓名等信息",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "searSelect",
                        field: "pmid",
                        name: "权限类别",
                        width: 100,
                        options: [
                            {label: '历史记录', options: []},
                            {
                                label: '所有信息', options: [
                                    {key: "全 部", value: ""},
                                    {value: '1', key: '项目1'},
                                    {value: '2', key: '项目2'},
                                    {value: '3', key: '项目3'},
                                    {value: '4', key: '项目4'}
                                ]
                            }
                        ],
                    },
                    {
                        type: "searSelect",
                        field: "did",
                        name: "是否菜单",
                        width: 100,
                        options: [
                            {label: '历史记录', options: []},
                            {
                                label: '所有信息',
                                options: [
                                    {key: "全 部", value: ""},
                                    {value: '1', key: '财务部'},
                                    {value: '2', key: '维修部'}
                                ]
                            }
                        ],
                    },
                    {
                        type: "select",
                        field: "status",
                        name: "父级名称",
                        width: 81,
                        options: [
                            {key: "全 部", value: ""},
                            {key: "正常", value: "0"},
                            {key: "禁止", value: "1"}
                        ]
                    },
                ],
                searToolBtnList: {
                    left: [
                        {label: '查 询', icon: 'el-icon-search', className: 'bulueBg mr40', action: 'search'},
                    ],
                    right: [
                        {label: '新 增', icon: 'el-icon-circle-plus-outline', className: 'bulueBg', action: 'add'},
                    ]
                },
            }
        },
        mounted() {
        },
        methods: {
            btnClick(outData) {
                if (outData.action == 'search') {
                    this.serachFilte = outData.data;
                } else if (outData.action == 'add') {
                    this.editItem = {};
                    this.popupTit.addPopup="添加权限";
                    this.isShow.insert = true;
                }
            },
            selectionChange(selection) {
                console.log(selection);
            },
            rowClick(row) {
                 if (row.type == 'edit') {
                    this.editItem = Object.assign({},row.rowData);
                    this.popupTit.addPopup="编辑角色";
                    this.isShow.insert = true;

                 }
                if (row.type == 'del') {
                    this.isdelInfo.data.id=row.rowData.id
                    this.isdelInfo = Object.assign({}, this.isdelInfo);
                    this.isShow.deleteInfor = true;

                }
            },
            formatter(row, column, cellValue) {

                if (column.property == 'pertype') {
                    let type = ['移动端', '后台系统']
                    return type[cellValue];
                }
                if (column.property == 'type') {
                    let type = ['页面', '按钮']
                    return type[cellValue];
                }
                if (column.property == 'status') {
                    let issystemuser = ['启用', '禁用']
                    return issystemuser[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.column.property == 'status') {
                    if (obj.row[obj.column.property] == "0") {
                        return "fontRed";
                    } else {
                        return "fontGreen";
                    }
                }
            },
            isHide(value) {
                this.editId = 0;
                this.isShow.modifyAdmin = false
            }
        },
    }
</script>
<style>
.perssionList {
background: #fff;
}

.perssionListtit {
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

</style>
