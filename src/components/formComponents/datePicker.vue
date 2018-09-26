<template>
    <div class="item date-check">
        <span class="item">时间筛选：</span>
        
        <div class="item date-item start-date">
            <el-date-picker :type="vDateType"
                            :clearable="clearable"
                            :editable="editable"
                            v-model="startDateValue"
                            placeholder="开始日期"
                            @change="startChanged">
            </el-date-picker>
        </div>
        <div class="item space">至</div>
        <div class="item date-item end-date">
            <el-date-picker :type="vDateType"
                            :clearable="clearable"
                            :editable="editable"
                            v-model="endDateValue"
                            placeholder="结束日期"
                            @change="endChanged">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
    /**Author  zyh
     * options: {
     *      vDateType: "date",
            vStartDateValue: "",
            vEndDateValue: "",
     * }
     *
     * @changed: ()=> return {
                startDateValue: "",
                endDateValue: "",
            }
     */
    export default {
        name: "vDatePicker",
        props:['vDateType', 'vStartDateValue', 'vEndDateValue'],
        data(){
            return {
                startDateValue: "",
                endDateValue: "",
                clearable: false,
                editable: false,
                
                dateTypeEnum: {
                    date: "date",
                    month: "month"
                },
                
                messageDuration: 5000
            }
        },
        created(){
            this.startDateValue = this.vStartDateValue;
            this.endDateValue = this.vEndDateValue;
        },
        updated(){
            //console.log("参数变化")
        },
        methods:{
            startChanged(start){
                //使用默认回参，空会返回 1970-1-1,绑定值清空返回null
                //console.log(this.startDateValue)
                //格式转换
                if(this.startDateValue){
                    this.dateForMat(this.startDateValue, true)
                }else{
                    this.changed()
                }
            },
            endChanged(end){
                //格式转换
                if(this.endDateValue){
                    this.dateForMat(this.endDateValue, false)
                }else{
                    this.changed();
                }
            },
            changed(){
                this.$emit("changed", {
                    startDateValue: this.startDateValue,
                    endDateValue: this.endDateValue
                })
            },
            //格式转换
            dateForMat(dateStr, isStart){
                let res;
                if(this.vDateType === this.dateTypeEnum.date){
                    //年-月-日
                    res = this.getCurrentDay(dateStr)
                }else{
                    //年-月
                    res = this.getCurrentYearAndMonth(dateStr)
                }
                
                isStart
                    ? this.startDateValue = res
                    : this.endDateValue = res;
                
                //规则检测
                this.validCheck();
            },
            //条件规则检测
            validCheck(){
                //console.log(this.startDateValue)
                //console.log(this.endDateValue)
                if(this.startDateValue && this.endDateValue){
                    let start = new Date(this.startDateValue).getTime(),
                        end = new Date(this.endDateValue).getTime();
                    
                    //结束大于开始
                    if(start > end){
                        this.endDateValue = "";
                        this.$message({
                            message: "结束时间不能小于开始时间",
                            type: 'error',
                            duration: this.messageDuration,
                            showClose: true
                        })
                        
                    }else if(this.vDateType === this.dateTypeEnum.date){
                        //日 3个月（按90天算）
                        let days = (end - start)/86400/1000 + 1;
                        // console.log("天：" + days)
                        if(days > 90){
                            this.endDateValue = "";
                            this.$message({
                                message: "按日查询仅支持90天结果查询，请重新选择时间范围",
                                type: 'error',
                                duration: this.messageDuration,
                                showClose: true
                            })
                        }
                    }else{
                        //月 3年（36个月算）
                        let startDate = new Date(this.startDateValue),
                            startYear = startDate.getFullYear(),
                            startMonth = startDate.getMonth() + 1;
                        let endDate = new Date(this.endDateValue),
                            endYear = endDate.getFullYear(),
                            endMonth = endDate.getMonth() + 1;
                        
                        let months = (endYear - startYear) * 12 + (endMonth - startMonth + 1)
                        // console.log("月：" + months)
                        if(months > 36){
                            this.endDateValue = "";
                            this.$message({
                                message: "按月查询仅支持3年（36个月）的结果查询，请重新选择时间范围",
                                type: 'error',
                                duration: this.messageDuration,
                                showClose: true
                            })
                        }
                    }
                }
                
                //分发结果到父组件
                this.changed();
            },
            //转换  年-月
            getCurrentYearAndMonth: (dateString) => {
                let date = new Date(dateString);
                return (date.getFullYear() + "-" + (date.getMonth() +1))
            },
            //转换 年-月-日
            getCurrentDay: (dateString) => {
                return new Date(dateString).toLocaleDateString().replace(/\//g, "-")
            },
        },
        beforeDestroy(){
        
        }
    }
</script>

<style scoped lang="scss">
    
    /* 时间筛选 */
    .date-check{
        width: 100%;
        height: 28px;
        line-height: 28px;
        
        .item{
            float: left;
        }
        
        .date-item{
            .el-date-editor{
                width: 130px;
            }
        }.space{
             padding:0 5px;
         }
    }
</style>
