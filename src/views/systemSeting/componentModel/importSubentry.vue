<template>
    <div class="insertSubentry">
        <div class="contentBox clear">
            <div class="BuildingTit fl">
                选择建筑
            </div>
            <div class="BuildingBox fl">
                <div class="clickChoics">
                    <span style="margin-right: 22px"><el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></span>
                    <span><el-checkbox :indeterminate="isIndeterminate" v-model="cancelAll" @change="handleCancelAllAllChange">取消</el-checkbox></span>
                </div>
                <div class="Buildings">
                    <el-checkbox-group v-model="checkedBuildings" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="(item,index) in BuildingOption" :label="item.id" :key="index">{{item.bName}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="SubentryTit fl">
                选择分项
            </div>
            <div class="SubentryBox fl">
                <el-tree
                    :data="data2"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[1, 1,8,9,10,11]"
                    :default-checked-keys="[5]"
                    :props="defaultProps">
                </el-tree>
            </div>
        </div>
        <div style="padding-left:66px;padding-top: 10px">
            <el-checkbox class="covered"  v-model="iscovered" >是否覆盖:注意选中此项，将会使用模板分项数据覆盖选中门店的数据，不选择只会添加没有的分项</el-checkbox>
        </div>
        <div slot="footer" class="dialog-footer">
            <div style="display: inline-block">
                <el-button type="primary">确定</el-button>
                <el-button @click="isHide">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import EnergyForm from '../../../components/form/EnergyForm'

    export default {
        data() {
            return {
                iscovered:false,
                checkAll:false,
                cancelAll:false,
                checkedBuildings:[1,6],
                BuildingOption:[],
                BuildingOptionall:[],
                data2: [{
                    id: 1,
                    label: '电',
                    children: [{
                        id: 10,
                        label: '电1',
                        children: [{
                            id: 9,
                            label: '电2'
                        }, {
                            id: 10,
                            label: '电3'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '非工作时间耗电',
                }, {
                    id: 3,
                    label: '工作时间耗电',
                }, {
                    id: 4,
                    label: '监管分项',
                }, {
                    id: 5,
                    label: '水',
                }, {
                    id: 6,
                    label: '汽',
                }, {
                    id: 7,
                    label: '制冷站',
                }, {
                    id: 8,
                    label: '制冷量',
                    children: [{
                        id: 7,
                        label: '制冷量1'
                    }, {
                        id: 8,
                        label: '制冷量2'
                    }]
                }, {
                    id: 9,
                    label: '制冷量1',
                    children: [{
                        id: 17,
                        label: '制冷量1'
                    }, {
                        id: 18,
                        label: '制冷量2'
                    }]
                }, {
                    id: 11,
                    label: '制冷量2',
                    children: [{
                        id: 17,
                        label: '制冷量1'
                    }, {
                        id: 18,
                        label: '制冷量2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }

            };
        },
        created(){
            this.BuildingOption = [
                {id:1, bName:"厦门大厦"}, {id:2, bName:"深圳大厦"}, {id:3, bName:"万科"}, {id:4, bName:"乔丹大厦"}, {id:5, bName:"前海湾大厦"}, {id:6, bName:"大门大厦"},
                {id:7, bName:"特步研究中心大厦特步研究中心大厦特步研究中心大厦特步研究中心大厦特步研究中心大厦"}, {id:8, bName:"龙华大厦"}, {id:9, bName:"观澜大厦"}, {id:10, bName:"观澜大厦"},
                {id:11, bName:"观澜大厦"}, {id:12, bName:"观澜大厦"}, {id:13, bName:"观澜大厦"}, {id:14, bName:"观澜大厦"}, {id:15, bName:"观澜大厦"},
            ]


        },
        mounted(){
            this.getOption();
        },
        methods: {
            getOption(){
                let it=this;
                it.BuildingOption.forEach(function (obj,index) {
                    it.BuildingOptionall.push(obj.id);
                })
            },
            addAction(ruleForm) {
            },
            isHide() {
                this.$emit('isHide', false);
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                console.log(checkedCount);
                console.log(this.BuildingOptionall.length);
                this.checkAll = checkedCount === this.BuildingOptionall.length;
                /*this.isIndeterminate = checkedCount > 0 && checkedCount < this.BuildingOption.length;*/
            },
            handleCheckAllChange(val) {
                console.log(val);
                this.cancelAll= !val;
                this.checkedBuildings = val ? this.BuildingOptionall :[];
               /* this.isIndeterminate = false;*/
            },
            handleCancelAllAllChange(val){
                this.checkAll= !val;
                this.checkedBuildings = val ? [] :[];
            }

        }
    };
</script>
<style scoped>

</style>
<style>
    .insertSubentry .contentBox{

    }
    .insertSubentry .contentBox .BuildingTit{
        color: #188FBF;
        font-size: 14px;
        font-weight: bold;
        padding: 7px 10px 0 0;
    }
    .insertSubentry .contentBox .BuildingBox{
        width: 280px;
        height: 379px;
        border: 1px #E4E7EF solid;
    }
    .insertSubentry .contentBox .BuildingBox .clickChoics{
        background: #e9f0f2;
        height: 34px;
        padding-left: 20px;
        line-height: 34px;
    }

    .insertSubentry .contentBox .BuildingBox .Buildings{
        width: 100%;
        height: calc(100% - 34px);
        background: #f7fbfc;
        overflow: auto;
    }
    .insertSubentry .contentBox .BuildingBox .Buildings .el-checkbox-group{
        padding-left: 20px;
    }

    .insertSubentry .contentBox .BuildingBox .Buildings .el-checkbox-group .el-checkbox{
        display: block;
        margin: 0;
    }

    .insertSubentry .contentBox .SubentryTit{
        color: #188FBF;
        font-size: 14px;
        font-weight: bold;
        padding: 7px 10px 0 44px;
    }
    .insertSubentry .contentBox .SubentryBox{
        width: 280px;
        height: 379px;
        border: 1px #E4E7EF solid;
        background: #f7fbfc;
        overflow: auto;
    }
    .insertSubentry .contentBox .BuildingBox .el-checkbox__inner{
        border: 1px #838383 solid;
        background: transparent;
    }
    .insertSubentry .contentBox .SubentryBox .el-tree{
        background: transparent;
    }
    .insertSubentry .covered .el-checkbox__inner,.insertSubentry .contentBox .SubentryBox .el-checkbox__inner{
        border: 1px #838383 solid;
        background: transparent;
    }
    .insertSubentry .covered .el-checkbox__inner::after,.insertSubentry .contentBox .el-checkbox__inner::after{
        border-color:#358BBD;
    }
    .insertSubentry .covered .el-checkbox__input.is-checked+.el-checkbox__label,.insertSubentry .contentBox .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #606266;
    }
</style>
