<template>
    <div style="background: #fff">
        <div>权限列表</div>
        <DialogInsert></DialogInsert>
        <!--<SearchBar @outData="aaaClick"></SearchBar>-->
        <SearchBar :inSearchData="insss" @outData="searchClick"></SearchBar>
        <dataTable
            :formatter="formatter"
            :inTableData="tableData"
            :inAjax="ajax"
            @selection="selectionChange">
        </dataTable>
    </div>

</template>
<script>
    import SearchBar from '../../components/common/searchBar.vue'
    import dataTable from '../../components/common/dataTable.vue'
    import DialogInsert from '../../components/common/DialogInsert.vue'

    export default {
        data() {
            return {
                tableData: {
                    tHead: [{
                        name: '序号',
                        field: "id",
                        options: [
                            {val: '未确认', claseName: 'red'},
                            {val: '确认', claseName: 'bule'}
                        ]
                    }, {
                        name: '用户名',
                        field: "username"
                    }, {
                        name: '真实姓名',
                        field: "realname"
                    }, {
                        name: '状态',
                        field: "status"
                    }],
                    tData: [],
                    total: 0,
                    actionBtns: [
                        {
                            type: 'info', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>详情</span>",
                            filter: {
                                field: 'id',
                                needel: [1,2,3,4,5]
                            }
                        },
                        {type: 'hulve', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>忽略</span>"},
                        {
                            type: 'del', label:"<span style='color: #24D330;font-size: 12px;text-decoration: underline'>转为工单</span>",
                            filter: {
                                field: 'id',
                                needel: [2, 3, 4, 5]
                            }
                        }
                    ],
                    isMultiple: false
                },
                ajax: {
                    url: 'http://192.168.1.21:8080/api/admin/admin/getAdminList',
                    data: {
                        pageNum: 1,
                        pageSize: 2
                    },
                },
                insss: [
                    {
                        type: "input",
                        field: "generalInput",
                        placeholder: "请输入事件名称",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "searInput",
                        field: "searInput",
                        placeholder: "请输入事件名称",
                        name: "搜索",
                        width: 242,
                    },
                    {
                        type: "select",
                        field: "type",
                        name: "告警类型",
                        width: 81,
                        options: [
                            {key: "全部", value: ""},
                            {key: "类型1", value: "1"},
                            {key: "类型2", value: "2"}
                        ]
                    },
                    {
                        type: "select",
                        field: "ssssstype",
                        name: "设备名称",
                        width: 100,
                        options: [],
                        ajax: {
                            url: 'http://192.168.1.21:8080/api/web/theme/getGreatTheme?token=123',
                            data: {},
                            key: 'name',
                            value: 'id',
                            listName: 'ThemeList'
                        }
                    },
                    {
                        type: "searSelect",
                        field: "searSelect",
                        name: "历史记录select",
                        width: 100,
                        options: [
                            {label: '历史记录', options: []},
                            {
                                label: '所有信息',
                                options: [{
                                    value: 'Chengdu',
                                    key: '成都'
                                }, {
                                    value: 'Shenzhen',
                                    key: '深圳深圳深圳深圳深圳深圳'
                                }, {
                                    value: 'Guangzhou',
                                    key: '广州'
                                }, {
                                    value: 'Dalian',
                                    key: '大连'
                                }, {
                                    value: 'Shanghai',
                                    key: '上海'
                                }]
                            }],
                    },
                    {
                        type: "searSelect",
                        field: "searSelectAjax",
                        name: "历史记录selectAjax",
                        width: 100,
                        options: [
                            {label: '历史记录', options: []},
                            {label: '所有信息', options: null}],
                        ajax: {
                            url: 'http://192.168.1.21:8080/api/web/theme/getGreatTheme?token=123',
                            data: {},
                            key: 'name',
                            value: 'id',
                            listName: 'ThemeList'
                        }
                    },
                    {
                        type: "dataPicker",
                        field: "timeDDD",
                        name: "时间筛选",
                        width: 250,
                    },
                    {
                        type: "swich",
                        field: "timeSwich",
                        name: "时间粒度",
                        options: [
                            {key: "全 部", value: 1},
                            {key: "设 备1", value: 2},
                            {key: "设 备2", value: 3}
                        ]
                    },
                ]
            }
        },
        mounted() {
        },
        components: {
            SearchBar, dataTable, DialogInsert
        },
        methods: {
            searchClick(outData) {
                console.log(outData);
            },
            selectionChange(selection) {
                console.log(selection);
            },
            formatter(row, column, cellValue) {
                if (column.property == 'status') {
                    let a = ['aaa', 'bbb']
                    return a[cellValue];
                }
                return cellValue;
            },
            cellclassname(obj) {
                if (obj.column.label == '用户名') {
                    if (obj.row[obj.column.property] == "未确认") {
                        return "fontRed";
                    }
                    if (obj.row[obj.column.property] == "处理中") {
                        return "fontGreen";
                    }
                    if (obj.row[obj.column.property] == "已忽略") {
                        return "fontBlue";
                    }
                    if (obj.row[obj.column.property] == "已恢复") {
                        return "fontGray";
                    }
                }
                if (obj.column.label == "操作") {
                    return "";
                }
            },
        },
    }
</script>
