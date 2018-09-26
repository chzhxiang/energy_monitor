
//此文件用于存储全局公用配置
export default class BaseConfig{
    constructor(){}

    //分页-每页数量
    static PAGE_SIZE = 10;
    //分页size list
    static PAGE_SIZE_LIST = [
        {
            label: "10 条/页",
            value: 10
        },
        {
            label: "15 条/页",
            value: 15,
            default: true
        },
        {
            label: "20 条/页",
            value: 20
        },
        {
            label: "30 条/页",
            value: 30
        },
        {
            label: "50 条/页",
            value: 50
        }
    ];
}
