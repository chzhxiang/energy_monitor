<template>
    <div class="v-table-list">
        <el-table
            stripe
            :height="vTableData.height"
            :header-cell-style="tableStyle.headercellstyle"
            :cell-style="tableStyle.cellstyle"
            :row-style="tableStyle.rowstyle"
            :data="vTableData.data"
            @selection-change="selectionChange"
            @sort-change="sortChange">
            <!--@header-click="headerClick"-->

            <!--复选-->
            <el-table-column v-if="showCheckbox"
                type="selection"
                width="40"></el-table-column>
            <!--序号-->
            <el-table-column v-if="showSequence"
                type="index"
                label="序号"
                width="55"></el-table-column>

            <!--thead-->
            <el-table-column
                v-for="(item, index) of vTableData.tHead"
                :key="index"
                :sortable="item.sortable"
                :prop="item.prop"
                :label="item.text">
            </el-table-column>

            <el-table-column v-if="vTableData.operateBtn && vTableData.operateBtn.length"
                 label="操作"
                 fixed="right"
                 min-width="100">
                <template slot-scope="scope">
                    <!--自定义按钮栏-->
                    <el-button class="defind-btn"
                        v-for="(item,index) in vTableData.operateBtn" :key="index"
                        @click="customBtnClick(scope.row, item.btnKey)"
                        type="text"
                        size="small">{{ item.text }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        
        <div class="el-pagination-box u-el-pagination">
            <div class="page-total">
                <p class="total">
                    共有记录：<span class="total-num">{{ vTableData.total }}</span> 条
                </p>
                <div class="page-select">
                    <el-select
                        v-model="vTableData.pageSize"
                        @change="pageSizesChange">
                        <el-option
                            v-for="(item,index) in vTableData.pageSizeList"
                            :key="item.value"
                            :value="item.value"
                            :label="item.label">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="page-list">
                <div class="go-to">
                    <a class="go-to-btn"
                       @click="goTo">跳转</a>
                    <input
                        v-model="goToPage"
                        type="text"
                        maxlength="3"
                        class="go-to-ipt">
                    页
                </div>
                <div class="pages-tabs">
                    <el-pagination
                        @current-change="pageCurrentChange"
                        :current-page="currentPage"
                        :page-size="vTableData.pageSize"
                        layout="prev, pager, next"
                        :total="vTableData.total">
                    </el-pagination>
                </div>
            </div>
            <div class="clear-both"></div>
        </div>
    </div>
</template>

<script>
/** 表格组件  涉及key - value 显示和提交值不同的数据自行外部处理数据结构，推荐业务层扩展字段
 * vTableData: {
 *     thead: [
 *         {
 *             text: "",
 *             prop: "",
 *             //列表排序,'custom',自定义排序，配合 sort-change 使用
 *             sortable: boolean
 *         }
 *     ],
 *     tbody: [
 *
 *     ],
 *      operateBtn: {               操作栏按钮
 *          text: "",
 *          btnKey: ""
 *      },
 *      total: number,
 *      pageSize: number,
 *      currentpage: number;
 *      pageSizeList: [
 *          {
 *              label: "n 条/页",
 *              value: number,
 *              default: true  //当前选中
 *          }
 *      ]
 *     height: number,             //表头固定用
 * }
 *
 * 显示序号
 * :show-sequence: boolean
 *
 * 显示复选框
 * :show-checkbox： boolean
 * 复选回调
 * @ selection-change return [ 选中项数据 ]
 *
 * 自定义排序回调
 * @ sort-custom-change return {name: "表头key"，order: "ascending | descending"}
 *
 * 自定义按钮事件
 * @ custom-btn-click return {btnKey: "", data: item}
 *
 * //分页条数改变
 * @ pageSizesChange
 * //当前页改变
 * @ pageCurrentChange
 * //跳转页
 * @ goToPage
 */

import BaseConfig from "../../baseConfig";
import vTitleInputGroup from "./input/titleInputGroup.vue"
export default {
        name: "vTableDataList",
        components: {
            vTitleInputGroup
        },
        props: ['vTableData', 'showCheckbox', 'showSequence'],
        data(){
            return {
                tableStyle: {
                    headercellstyle: {
                        background: "rgba(241,241,241,1)",
                        fontSize: "14px",
                        color: "#3A3A3A"
                    },
                    cellstyle: {
                        border: "none",
                        fontSize: "12px" },
                    rowstyle: {
                        height: "40px"
                    }
                },
                multipleSelection: [],
                currentPage: 1,
                goToPage: ""
            }
        },
        created(){
        
        },
        updated(){
        
        },
        mounted(){

        },
        methods: {
            //复选事件
            selectionChange(val){
                this.$emit("selectionChange", val);
                this.$emit("click")
            },
            //排序表头条件发生变化
            sortChange (columnAttr) {
                this.$emit("sortCustomChange", {
                    name: columnAttr.prop,
                    order: columnAttr.order
                })
            },
            //自定义按钮回调
            customBtnClick(row, btnKey){
                this.$emit("customBtnClick", {
                    btnKey: btnKey,
                    data: row
                })
            },
            //页条数改变
            pageSizesChange(res){
                this.$emit("pageSizesChange", res)
            },
            //分页
            pageCurrentChange(res){
                this.$emit("pageCurrentChange", res)
            },
            //跳转
            goTo(){
                /*if(this.goToPage > this.vTableData.total/this.vTableData.pageSize){
                
                }*/
                this.$emit("goToPage", this.goToPage)
            }
        },
        beforeDestroy(){

        }
    }
</script>

<style scoped lang="scss">
    $grayColor: #838383;
    $fontC3: #333;
    
    .v-table-list{
        .table-list{
            background: rgba(241,241,241,1);
            fontSize: 14px;
            color: #3A3A3A;
        }
    
        .el-pagination-box{
            padding:20px 10px 0 10px;
            
            .page-total{
                float: left;
                
                .total{
                    color: $grayColor;
                    float: left;
                    line-height: 30px;
                    margin-right: 20px;
                    
                    .total-num{
                        color: $fontC3
                    }
                }
                
                .page-select{
                    float: left;
                    width: 100px;
                }
            }
            
            .page-list{
                float: right;
                
                .go-to{
                    display: inline-block;
                    color: $grayColor;
                    vertical-align: text-top;
                    
                    .go-to-ipt{
                        width: 24px;
                        height: 24px;
                        text-align: center;
                        border: 1px solid $grayColor;
                        outline: none;
                        color: #1881BF;
                        border-radius: 4px;
                    }
                    .go-to-btn{
                        text-decoration: underline;
                        cursor: pointer;
                    }:hover{
                        color: #409EFF;
                     }
                }
                
                .pages-tabs{
                    display: inline-block;
                }
            }
            
            .clear-both{
                clear: both;
            }
        }
    }

    .defind-btn{
        color: #1881BF;
        text-decoration: underline;
    }
    
    

</style>
