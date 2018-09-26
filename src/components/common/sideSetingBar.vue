<template>
    <div class="sideSetingBar">
        <div class="energyConsumeType clear">
            <span :class="{act:energyConsumeType==1}" @click="changeEnergyConsumeType(1)"><i class="iconfont nhjc-dianli"></i>电</span>
            <span :class="{act:energyConsumeType==2}" @click="changeEnergyConsumeType(2)"><i class="iconfont nhjc-shui" ></i>水</span>
            <span :class="{act:energyConsumeType==3}" @click="changeEnergyConsumeType(3)"><i class="iconfont nhjc-qi" ></i>气</span>
        </div>
        <div class="energyProjects">
            <span :class="{act:energyConsumeType==1}" @click="changeEnergyConsumeType(1)">分 相</span>
            <span :class="{act:energyConsumeType==2}" @click="changeEnergyConsumeType(2)">组织机构</span>
            <span :class="{act:energyConsumeType==3}" @click="changeEnergyConsumeType(3)">配 电</span>
        </div>
        <div class="projectsTree">
            <el-tree
                :data="data"
                show-checkbox
                default-expand-all
                node-key="id"
                highlight-current
                expand-on-click-node=false
                check-on-click-node="true"
                check-strictly="true"
                :props="defaultProps"
                class="environment_tree">
            </el-tree>
        </div>
    </div>
</template>
<script>
    import SideTree from './sideTree.vue';
export default {
    components: {
        SideTree
    },
    data() {
        return {
            energyConsumeType:1,
            data: [{
                id: 1,
                label: '一级 13',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }

        };
    },
    created() {

    },
    methods: {
        changeEnergyConsumeType(v){
            this.energyConsumeType = v;
        }

    },
}

</script>
<style scoped>
    .sideSetingBar{
        width: 100%;
        height: 100%;
    }
    .sideSetingBar .energyConsumeType{
        height: 35px;
        width: 100%;
        border: 1px rgba(229,238,243,1) solid;
    }
    .sideSetingBar .energyConsumeType span{
        padding: 7px 0;
        cursor: pointer;
        display: inline-block;
        float: left;
        border-right: 1px rgba(229,238,243,1) solid;
        border-button: 1px rgba(229,238,243,1) solid;
        text-align: center;
        font-size: 16px;
        color: #838383;
        font-weight: bold;
        width: 33%;
        background: rgba(245,249,249,1);
    }
    .sideSetingBar .energyConsumeType span:last-of-type{
        border-right: none;
    }
    .sideSetingBar .energyConsumeType span i{
        margin-right: 5px;
    }
    .sideSetingBar .energyConsumeType span.act{
        color: #2274A4;
        background: #fff;
        border-bottom: 1px #fff solid;
    }
    .sideSetingBar .energyProjects{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin-top: 20px;

    }
    .sideSetingBar .energyProjects span{
        border: 1px #C3C9D5 solid;
        border-radius: 20px;
        color: #3A3A3A;
        padding: 2px 18px;
        cursor: pointer;

    }
    .sideSetingBar .energyProjects span.act{
        color: #fff;
        background: #1881BF;
        border-color: #1881BF;
    }
    .projectsTree{
        margin-top: 30px;
    }
</style>
<style>
    .environment_tree .el-icon-caret-right{
        background-color: #fff;
    }
    .environment_tree .el-icon-caret-right:before {
        display: block;
        width: 12px;
        height: 12px;
        content:'';
        background:url(../../assets/icon1.png) 0 0 no-repeat;
        background-size: 100% 100%;
    }

    .environment_tree .el-tree-node__expand-icon.is-leaf:before{
        background:none;
    }
    .environment_tree .el-tree-node__expand-icon.is-leaf{
        background:none;
    }
    .environment_tree  .is-expanded .expanded:before{
        display: block;
        width: 12px;
        height: 12px;
        content:'';
        background:url(../../assets/icon2.png) 0 0 no-repeat;
        background-size: 100% 100%;
    }
    .environment_tree  .el-tree-node__expand-icon.expanded{
        transform: rotate(0deg);
    }
    .environment_tree .el-tree-node__label{
        /* padding-left:13px; */
        display: block;
        height: 26px;
        line-height: 26px;
        background-color: #fff;
    }
</style>
