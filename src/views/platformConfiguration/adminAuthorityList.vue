<template>
    <div class="AdminAuthorityListBox">
        <h3 class="AdminAuthorityListtit">权限列表</h3>
        <div style="padding: 0 30px">
            <searchBar :inSearchData="setSearchtool"></searchBar>
        </div>
        <div style="padding: 0 30px;padding-bottom: 40px">
            <dataTable  :formatter="formatter"
                        :cellclassname="cellclassname"
                        :headercellclassname="headercellclassname"
                        :inTableData="tableData"
                        :inAjax="ajax"
                        @selection="selectionChange">

            </dataTable>
        </div>
    </div>
</template>
<script>
    import searchBar from "../../components/common/searchBar"
    import dataTable from "../../components/common/dataTable"
    import PopupWindow from "../../components/common/popupWindow"

    export default {
        name: 'table',
        components: {
            searchBar,
            dataTable,
            PopupWindow
        },
        data(){
            return{
                setSearchtool:[
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入权限名称",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "父级名称",
                        width:100,
                        options: [
                            {key: "全部", val: ""},
                            {key: "类型1", val: "1"},
                            {key: "类型2", val: "2"}
                        ]
                    },
                ],
                tableData: {
                    tHead: [{
                        name: '权限编号',
                        field: "id"
                    }, {
                        name: '权限吗名称',
                        field: "alarmlocal"
                    }, {
                        name: '父级名称',
                        field: "deviceName"
                    }, {
                        name: '模块名称',
                        field: "alarmTime"
                    },  {
                        name: '是否菜单',
                        field: "alarmLevel"
                    },  {
                        name: '级数',
                        field: "alarmLevel"
                    },  {
                        name: '显示顺序',
                        field: "alarmLevel"
                    },  {
                        name: '菜单连接',
                        field: "alarmLevel"
                    }
                    ],

                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>编辑</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                        {type: 'hulve', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>"},
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: 'static/Common/virtualData.json',
                    method:"get",
                    data: {
                        pageNum: 1,
                        pageSize: 2
                    },
                },

            }
        },
        methods:{
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ["",'处理中','已恢复','已处理','已忽略','未确认']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.columnIndex == "0") {
                    return "pl20";
                }
            },
            headercellclassname(obj) {
                if (obj.columnIndex == 0) {
                    return "pl20";
                }
            },
        },

    }
</script>
<style scoped>
    .AdminAuthorityListBox{
        background: #fff;
    }

    .AdminAuthorityListtit{
        box-sizing: border-box;
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        font-weight:600;
        padding: 0 0 0 30px;
        border: 1px #E5EEF3 solid;
        color: #2274A4;
        background: #F5F9F9;
    }
</style>
