//电-子按钮组
export const ElectricitySubTabsEnum = {
    radius: 28,
    bgColor: "blue",    //blue, white, gray
    itemShowIcon: false,
    styleWidth: 80,
    margin: 10,
    dataArr: [
        {
            text: "分项",
            key: "every",
            checked: true,
        },
        {
            text: "组织机构",
            key: "organization"
        },
        {
            text: "配电",
            key: "config"
        },

    ]
}

//电耗费用查询
// 条件设置
export const ConditionEnum = {
    radius: "28px",  //全圆角 建议值  容器的 高度/宽度
    bgColor: "blue",
    styleWidth: "auto",
    dataArr: [
        {
            text: "能耗",
            key: "energyConsumption",
            checked: true
        },
        {
            text: "单位面积",
            key: "unitArea",
        },
        {
            text: "单位人数",
            key: "population",
        }
    ]
}

//对比条件
export const CompareConditionEnum = {
    radius: "28px",  //全圆角 建议值  容器的 高度/宽度
    bgColor: "blue",
    styleWidth: "auto",
    dataArr: [
        {
            text: "无对比",
            key: "none",
            checked: true
        },
        {
            text: "同比",
            key: "common",
        },
        {
            text: "环比",
            key: "circle",
        }
    ]
}


export const mockTableData = [{
    id: '12987122',
    name: '口腔医院1',
    amount1: '234',
    amount2: '2018-01-12 10:30',
    amount3: 10

}, {
    id: '12987123',
    name: '口腔医院2',
    amount1: '165',
    amount2: '2018-01-12 10:30',
    amount3: 12
}, {
    id: '12987124',
    name: '口腔医院3',
    amount1: '324',
    amount2: '2018-01-12 10:30',
    amount3: 9
}, {
    id: '12987125',
    name: '口腔医院4',
    amount1: '621',
    amount2: '2018-01-12 10:30',
    amount3: 17
}, {
    id: '129871255',
    name: '口腔医院5',
    amount1: '621',
    amount2: '2018-01-12 10:30',
    amount3: 17
}, {
    id: '12987125',
    name: '口腔医院6',
    amount1: '621',
    amount2: '2018-01-12 10:30',
    amount3: 17
}, {
    id: '12987126',
    name: '口腔医院7',
    amount1: '539',
    amount2: '2018-01-12 10:30',
    amount3: 15
}]
