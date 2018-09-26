export const tenantTableDataEnum = {
    tHead: [{
        name: '租户编号',
        field: "number"
    }, {
        name: '项目名称',
        field: "pmName"
    }, {
        name: '位置区域',
        field: "region"
    }, {
        name: '租户名称',
        field: "name"
    },  {
        name: '手机号',
        field: "tel"
    },  {
        name: '面积(m2)',
        field: "area"
    },  {
        name: '租户类型',
        field: "type"
    },  {
        name: '付费类型',
        field: "ptype"
    },  {
        name: '状态',
        field: "status"
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
        {
            type: 'del', label:"<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>删除</span>",
            filter: {
                field: 'status',
                needel: [1,5,3]
            }
        },
    ],
    isMultiple: false,
}
