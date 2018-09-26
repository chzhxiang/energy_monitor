<template>
    <div class="sideTree">
            <div class="treeNode">
                <div class="treeNodeNodeContent clear">
                    <span class="expandIcon fl"><i class=""></i></span>
                    <el-checkbox class="fl" v-model="checked">备选项</el-checkbox>
                </div>
                <div style="border: 1px red solid" class="treeNodeNodeChildren">
                    <div class="treeNode">
                        <div class="treeNodeNodeContent clear">
                            <span class="expandIcon fl"><i class=""></i></span>
                            <label data-v-75e1ec74="" role="checkbox" class="el-checkbox fl">
                                <span aria-checked="mixed" class="el-checkbox__input is-checked">
                                    <span class="el-checkbox__inner"></span>
                                    <input type="checkbox" class="el-checkbox__original" value="">
                                </span>
                                <span class="el-checkbox__label">备选项</span>
                            </label>
                        </div>
                        <div class="treeNodeNodeChildren">

                        </div>
                    </div>

                </div>
            </div>

    </div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {
            expandicon:'../../assets/icon1.png',
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1',
                        children: [{
                            label: '四级 1-1-1',
                        },{
                            label: '四级 2-1-1',
                        }
                        ],
                    },
                        {
                            label: '三级 2-1-1',
                            children: [{
                                label: '四级 2-2-1',
                            },{
                                label: '四级 2-2-2',
                            }
                            ],
                        }]
                }]
            },{
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
        };
    },
    created() {

    },
    methods: {


    },
}

</script>
<style scoped>
    .sideTree{
        border: 1px green solid;
    }

    .treeNode{

    }
    .treeNode>.treeNodeNodeContent .expandIcon{margin-right: 18px }
    .treeNodeNodeContent .expandIcon{
        cursor: pointer;
        padding-top: 3px;
        display: inline-block;
        width: 13px;
        height: 13px;
    }
    .treeNodeNodeContent .expandIcon i{
        display: block;
        width: 100%;
        height: 100%;
        background: url("../../assets/icon1.png") 0 0 no-repeat;
        background-size: 100% 100%;
    }
    .treeNodeNodeContent .expandIcon i.expanded{
        display: block;
        width: 100%;
        height: 100%;
        background: url("../../assets/icon2.png");
    }
    .treeNodeNodeChildren{}
</style>
<style>
    .sideTree .el-checkbox__inner{
        border: 1px #838383 solid;
    }
    .sideTree .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color: #fff;
        border-color: #838383;
    }
    .sideTree .el-checkbox__inner::after{
        border-color: #358BBD;
    }
    .sideTree .el-checkbox__label{
        margin-left:5px;
        color: #3A3A3A;
        padding: 0 3px;
    }
    .sideTree .el-checkbox__input.is-checked+.el-checkbox__label{
        background: #358BBD;
        color: #fff;
    }

</style>
