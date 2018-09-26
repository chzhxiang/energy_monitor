
export const EnergyTypeEnumBase = [
    {
        text: '电',
        key: "electricity",     //预留字段
        checked: true,          //前端默认选项使用
        typeId: 0,              //后端使用key
        unit: "KWh",
        default: true,           //默认值 el-ui字段
        label: "电",             //前端使用 el-ui字段
        value: 0                 //前端使用 el-ui字段
    },
    {
        text: '水',
        key: "water",
        typeId: 1,
        unit: "m3",
        label: "水",
        value: 1
    },
    {
        text: '气',
        key: "air",
        typeId: 2,
        unit: "m3",
        label: "水",
        value: 2
    },
]
