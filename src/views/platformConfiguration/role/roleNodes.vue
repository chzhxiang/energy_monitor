<template>
    <div>
        <div>
            <el-tree
                :data="pessionList"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                @check="checkedNodes"
                :expand-on-click-node="false"
                :default-checked-keys="checkedPressions"
                highlight-current
                :props="defaultProps">
            </el-tree>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addAction">确 定</el-button>
            <el-button @click="isHide">取 消</el-button>
        </div>
    </div>
</template>

<script>
    import {SystemSeting} from "../../../services/systemSetingService";

    export default {
        props:["pressions"],
        data() {
            return {
                inPressions:this.pressions,
                checkedPressions:[],
                pessionList: [],
                defaultProps: {
                    children: 'child',
                    label: 'title'
                }
            };
        },
        created(){
            this. getPerssionList();
        },
        methods: {
            getPerssionList(){
                SystemSeting.instance().getPerssionList()
                    .then((res) => {
                        if (res.code == 200) {
                            this.pessionList= res.data.pessionList;
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('获取权限列表失败');
                        }
                    });
                this.checkedPressions = this.inPressions.perssions.split(',');
            },
            addAction() {
                SystemSeting.instance().editPerssionInfor({
                    id:this.inPressions.id,
                    perssions:this.checkedPressions.join(',')
                })
                    .then((res) => {
                        if (res.code == 200) {
                            this.setRefresh();
                            this.$message({
                                message: '权限编辑成功',
                                type: 'success'
                            });
                        } else if(res.code == 400){
                            this.$message.error(res.msg);
                        }else {
                            this.$message.error('权限编辑失败');
                        }
                    });

                console.log(this.checkedPressions);

            },
            isHide() {
                this.$emit('isHide', false);
            },
            setRefresh(){
                this.$emit('flushList', true);
                this.isHide();
            },
            getData(obj) {
                this.ruleForm[obj.prop] = obj.value;
            },
            checkedNodes(checkedNodes,checkedKeys){
                this.checkedPressions =  checkedKeys.checkedKeys;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        watch: {
            pressions: {
                handler(newData, oldData) {
                    this.inPressions = newData;
                    this.getPerssionList();
                },
                deep: true
            },
        }
    };
</script>

<style>

</style>
