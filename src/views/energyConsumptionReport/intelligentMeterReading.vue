<template>
    <div class="page_container">
        <el-container>
            <el-aside>
                <h2 class="tree_title">抄表类型</h2>
                <el-tree :data="treeData" :props="defaultProps" default-expand-all node-key="id" highlight-current @node-click="treeNodeClick"></el-tree>
            </el-aside>
            <el-main>
                <h2 class="page_title">抄表记录</h2>
                <div class="page_body">
                    <div class="page_control">
                        <label>日期：</label>
                        <el-date-picker v-model="selectMonth" type="month" placeholder="选择月" :clearable="false"></el-date-picker>
                        <el-button round @click="openAllTable">{{toggleText}}</el-button>
                        <el-button type="primary" round icon="el-icon-search">查询</el-button>
                        <div class="right">
                            <el-button round icon="el-icon-upload2">导出表格</el-button>
                        </div>
                    </div>
                    <!-- 表格 -->
                    <div class="table">
                        <el-table :data="tableData" stripe style="width: 100%" header-row-class-name="el_table_title" cell-class-name="el_table_cell"
                        :row-style="showTr" :cell-style="cellMargin">
                            <el-table-column prop="name" label="对象名称">
                                <template slot-scope="props">
                                    <i v-if="props.row.children && props.row.children.length" class="tree_icon"
                                    :style="{marginLeft: props.row._level * 16 + 'px'}"
                                    @click="toggle(props.row.id)">{{props.row._expanded ? '-' : '+'}}</i>
                                    {{props.row.name}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="meterNumber" label="电表编号"></el-table-column>
                            <el-table-column prop="rate" label="倍率"></el-table-column>
                            <el-table-column prop="lastmonth" label="上月读数（kWh)"></el-table-column>
                            <el-table-column prop="thismonth" label="本月读数（kWh）"></el-table-column>
                            <el-table-column prop="actualusage" label="本月实际使用度数（kWh）"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-main>
            
        </el-container>
        
    </div>
</template>
<script>
    export default{
        data(){
            return {
                treeData:[{
                    id: 1,
                    label: '组织结构',
                    children: [{
                        id: 2,
                        label: '口腔医院用电'
                    },{
                        id: 3,
                        label: '口外门诊用电',
                    },{
                        id: 4,
                        label: '口腔修复科用电',
                    },{
                        id: 5,
                        label: '牙周门诊用电',
                    }]
                    }, {
                    id: 6,
                    label: '组织结构',
                    children: [{
                        id: 7,
                        label: '口腔医院用电',
                    },{
                        id: 8,
                        label: '口外门诊用电',
                    },{
                        id: 10,
                        label: '口腔修复科用电',
                    },{
                        id: 11,
                        label: '牙周门诊用电',
                    }]
                    }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                selectMonth: new Date(),
                toggleText: '全部展开',
                dataSource: [{
                    id: 1,
                    parentId: 0,
                    meterNumber: '11111',
                    name: '口腔医院',
                    rate: '1',
                    lastmonth: '5786',
                    thismonth: '6856',
                    actualusage: '7562',
                    children: [{
                        id: 2,
                        parentId: 1,
                        meterNumber: '11111',
                        name: '口外门诊',
                        rate: '1',
                        lastmonth: '5786',
                        thismonth: '6856',
                        actualusage: '7562',
                        children:[{
                            id: 3,
                            parentId: 2,
                            meterNumber: '11111',
                            name: '外科检查',
                            rate: '1',
                            lastmonth: '5786',
                            thismonth: '6856',
                            actualusage: '7562',
                            children:[{
                                id: 4,
                                parentId: 3,
                                meterNumber: '11111',
                                name: 'DE123',
                                rate: '1',
                                lastmonth: '5786',
                                thismonth: '6856',
                                actualusage: '7562'
                            },{
                                id: 5,
                                parentId: 3,
                                meterNumber: '11111',
                                name: '5F门诊科',
                                rate: '1',
                                lastmonth: '5786',
                                thismonth: '6856',
                                actualusage: '7562'
                            }]
                        }]
                    },{
                        id: 6,
                        parentId: 1,
                        meterNumber: '11111',
                        name: '牙周门诊',
                        rate: '1',
                        lastmonth: '5786',
                        thismonth: '6856',
                        actualusage: '7562'
                    }]
                },{
                    id: 7,
                    parentId: 0,
                    meterNumber: '11111',
                    name: '合计',
                    rate: '1',
                    lastmonth: '5786',
                    thismonth: '6856',
                    actualusage: '7562'
                }]
            }
        },
        computed:{
            tableData(){
                let datalist = this.treeToArray(this.dataSource);
                // console.log(datalist);
                return datalist;
            }
        },
        methods:{
            treeNodeClick(data){
                // console.log(data.id);
            },
            treeToArray(source, level){
                let tmp = []
                source.forEach(item => {
                    // 不是第一级的默认设置不显示
                    this.$set(item, '_show', !item.parentId);
                    this.$set(item, '_expanded', false);
                    let _level = 0
                    if (level !== undefined && level !== null) {
                        _level = level + 1
                    }
                    this.$set(item, '_level', _level);
                    tmp.push(item);
                    if(item.children && item.children.length > 0){
                        let children = this.treeToArray(item.children, _level);
                        tmp = tmp.concat(children)
                    }else{

                    }
                })
                return tmp;
            },
            showTr(row){
                return row.row._show ? '' : 'display:none;'
            },
            toggle(id, show){
                this.tableData.forEach(item => {
                    // 当前操作是要显示还是隐藏
                    let _show = false;
                    
                    if(item.id == id){
                        // 切换+-图标
                        if(show !== undefined && show !== null){
                            _show = show;
                            item._expanded = false;
                        }else{
                            item._expanded = !item._expanded;
                            _show = item._expanded;
                        }
                    }
                    // 显示/隐藏下级
                    if(item.parentId == id){
                        if(!_show){
                            if(item.children && item.children.length){
                                // 递归到子集
                                this.toggle(item.id, _show);
                            }
                        }
                        if(show !== undefined && show !== null){
                            item._show = _show;
                        }else{
                            item._show = !item._show;
                        }
                    }
                })
            },
            openAllTable(){
                
                if(this.toggleText == '全部展开'){
                    this.tableData.forEach(item => {
                        item._expanded = true;
                        item._show = true;
                    })
                    
                    this.toggleText = '全部隐藏'
                }else{
                    this.tableData.forEach(item => {
                        item._expanded = false;
                        item._show = !item.parentId;
                    })
                    
                    this.toggleText = '全部展开'
                }
            },
            cellMargin(params){
                if(params.columnIndex == 0){
                    return 'padding-left:' + params.row._level * 24 + 'px';
                }else{
                    return '';
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
@import "../../assets/css/style_lm.scss";
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 130px;
}

.table{
    margin-top: 32px;

    .tree_icon{
        display: inline-block;
        height: 14px;
        border: 1px #dfdfdf dashed;
        line-height: 14px;
        text-align: center;
        cursor: pointer;
        width: 14px;
        color: #666666;
        font-style: normal;
    }
}
.el-container{
    height: 100%;

    .el-main{
        padding: 0;
        background: #ffffff;
        height: 100%;
    }

    .el-aside{
        padding: 0 18px;
        width: 295px;
        background: #ffffff;
        margin-right: 10px;
        height: 100%;
        .tree_title{
            font-size: 16px;
            color: #3E73A0;
            line-height: 36px;
        }

        .el-tree{
            margin-top: 30px;

            
        }

        
        
    }
}




        
</style>
