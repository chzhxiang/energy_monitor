<template>
    <div class="page_container">
        <h2 class="page_title">典型气息年温度</h2>
        <div class="page_body">
            <div class="page_control">
                <label>区域：</label>
                <el-select v-model="selectedCity" placeholder="请选择">
                    <el-option v-for="item in cityList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <label style="margin-left:40px">快捷选项：</label>
                <el-button-group>
                    <el-button round :type="timeType == 1 ? 'primary': ''" @click="timeType = 1">时</el-button>
                    <el-button :type="timeType == 2 ? 'primary': ''" @click="timeType = 2">日</el-button>
                    <el-button round :type="timeType == 4 ? 'primary': ''" @click="timeType = 4">月</el-button>
                </el-button-group>
                <label style="margin-left:40px">时间筛选：</label>
                <el-date-picker
                v-model="timeRange"
                type="datetimerange"
                prefix-icon='none'
                :clearable="false"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :format="dateFormat"
                value-format="yyyy-MM-dd HH:mm:ss"
                align="right">
                </el-date-picker>
                <label style="margin-left:40px">
                    <el-button type="primary" round icon="el-icon-search" @click="getData">查询</el-button>
                </label>
                <div class="right">
                    <el-button round icon="el-icon-upload2" @click="exportData">导出</el-button>
                </div>
            </div>
            <div ref="weatherCharts" class="weatherCharts"></div>
        </div>
    </div>
</template>

<script>
    import echarts from "echarts"
    export default{
        data(){
            return {
                selectedCity: 1,  // 选择的区域
                cityList: [{   // 区域下拉列表
                    value: 1,
                    label: '深圳市'
                }],
                timeType: 1, // 快捷选项，1：时 2：日 4：月
                timeRange: [],  // 时间范围
                temperature: [], // 温度
                humidity:[], // 湿度
                timeMark: [], // 时间刻度
            }
        },
        watch:{
            timeType(val){
                const theDay = new Date();
                if(val == 1){
                    let startTime = this.dateToString(new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate(), 0, 0));
                    let endTime = this.dateToString(new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate(), 23, 59));
                    this.timeRange = [startTime, endTime]
                }else if(val == 2){
                    let startTime = this.dateToString(new Date(theDay.getFullYear(), theDay.getMonth(), 1, 0, 0));
                    let endTime = this.dateToString(new Date(theDay.getFullYear(), theDay.getMonth(), this.getMonthDays(theDay.getFullYear(), theDay.getMonth()), 23, 59));
                    this.timeRange = [startTime, endTime]
                }else if(val == 4){
                    let startTime = this.dateToString(new Date(theDay.getFullYear(), 0, 1, 0, 0));
                    let endTime = this.dateToString(new Date(theDay.getFullYear(), 11, 31, 23, 59))
                    this.timeRange = [startTime, endTime]
                }
            }
        },
        computed:{
            dateFormat(){
                if(this.timeType == 1){
                    return "yyyy-MM-dd HH:mm"
                }else if(this.timeType == 2){
                    return "yyyy-MM-dd"
                }else{
                    return "yyyy-MM"
                }
            },
            pickerOptions2() {
                let _this = this;
                let shortcuts = [];
                if(this.timeType == 0){
                    shortcuts.push({
                        text: '今天',
                        onClick(picker) {
                            const theDay = new Date();
                            const start = new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate(), 0, 0);
                            const end = new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate(), 23, 59);
                            picker.$emit('pick', [start, end]);
                        }
                    })
                }else if(this.timeType == 1){
                    shortcuts.push({
                        text: '本月',
                        onClick(picker) {
                            const theDay = new Date();
                            const start = new Date(theDay.getFullYear(), theDay.getMonth(), 1, 0, 0);
                            const end = new Date(theDay.getFullYear(), theDay.getMonth(), _this.getMonthDays(theDay.getFullYear(), theDay.getMonth()), 23, 59);
                            picker.$emit('pick', [start, end]);
                        }
                    })
                }else if(this.timeType == 2){
                    shortcuts.push({
                        text: '本年',
                        onClick(picker) {
                            const theDay = new Date();
                            const start = new Date(theDay.getFullYear(), 0, 1, 0, 0);
                            const end = new Date(theDay.getFullYear(), 11, 31, 23, 59);
                            picker.$emit('pick', [start, end]);
                        }
                    })
                }
                return {
                    shortcuts
                }
            }
        },
        methods:{
            dateToString(date){
                let year = date.getFullYear();
                let month = date.getMonth()+1;
                if(month < 10){
                    month = "0" + month;
                }
                let day = date.getDate();
                if(day < 10){
                    day = "0" + day;
                }
                let hour = date.getHours();
                if(hour < 10){
                    hour = "0" + hour;
                }
                let minute = date.getMinutes();
                if(minute < 10){
                    minute = "0" + minute;
                }
                let seconds = date.getSeconds();
                if(seconds < 10){
                    seconds = "0" + seconds;
                }
                return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds;
            },
            isLeapYear(year) {
                /**
                 * 判断年份是否为润年
                 */
                return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
            },
            getMonthDays(year, month) {
                return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (this.isLeapYear(year) ? 29 : 28);
            },
            initTimeRange(){
                let theDay = new Date();
                this.timeRange = [
                    this.dateToString(new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate(), 0, 0)), 
                    this.dateToString(new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate(), 23, 59))
                ]
            },
            weatherCharts(){
                var myChart = echarts.init(this.$refs.weatherCharts);
                // 绘制图表
                myChart.setOption({
                    // X轴坐标
                    xAxis: {
                        type: 'category',
                        data: this.timeMark,
                        name: "h",   //坐标轴名称
                        nameGap: 10, //坐标轴名称与轴线之间的距离
                        nameTextStyle:{  //坐标轴名称的文字样式
                            padding: [28, 0, 0, 0]
                        },
                        //坐标轴在 grid 区域中的分隔线
                        splitLine:{
                            show: true,
                            lineStyle:{
                                color: "#E5EFF5"
                            }
                        },
                        //坐标轴刻度相关设置
                        axisTick:{
                            show: false
                        }
                    },
                    // Y轴坐标
                    yAxis: [
                    {
                            scale: true,
                            name: '干球温度(℃)',
                            max: 50,
                            min: 0,
                            splitNumber: 10,
                            //坐标轴在 grid 区域中的分隔线
                            splitLine:{
                                show: true,
                                lineStyle:{
                                    color: "#E5EFF5"
                                }
                            }
                        },
                        {
                            scale: true,
                            name: '相对湿度(%)',
                            max: 100,
                            min: 0,
                            splitNumber: 10,
                            axisLabel: {
                                formatter: '{value}  %'
                            },
                            //坐标轴在 grid 区域中的分隔线
                            splitLine:{
                                show: true,
                                lineStyle:{
                                    color: "#E5EFF5"
                                }
                            }
                        }
                    ],
                    legend: {
                        data:['干球温度','相对湿度'],
                        x: 'center',
                        top: 24
                    },
                    // 网格容器样式
                    grid: {
                        show: true,
                        borderColor: '#E8F1F6',
                        left: 60,
                        right: 60,
                        
                    },
                    // 提示框
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            animation: false,
                            label: {
                                backgroundColor: '#505765',
                            }
                        },
                        formatter: "{b0}<br />{a0}: {c0}℃<br />{a1}: {c1}%"
                    },
                    // 数据值
                    series: [{
                        name:'干球温度',
                        data: this.temperature,
                        type: 'line', 
                        symbol: 'circle',  // 标记的图形
                        symbolSize: 8,   // 标记的大小
                        itemStyle:{
                            normal:{
                                color:'#1881BF'
                            }
                        }
                    },{
                        name:'相对湿度',
                        yAxisIndex:1,  // 对应右边数据
                        data: this.humidity,
                        type: 'line',
                        symbol: 'circle',  // 标记的图形
                        symbolSize: 8,   // 标记的大小
                        itemStyle:{
                            normal:{
                                color:'#02D36C'
                            }
                        }
                    }]
                });
            },
            getCityData(){
                // 获取城市数据
                this.$axios.post("/api/admin/temperature/getCityList", {}).then(res => {
                    if(res.code == 200){
                        console.log(res.data)
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            getData(){
                this.$axios.post('/api/admin/temperature/getList', {
                    pageNum: -1,
                    pageSize: -1,
                    timeUnit: this.timeType,
                    regionId: 11, // 区域ID
                    startTime: this.timeRange[0],
                    endTime: this.timeRange[1]
                }).then((res) => {
                    if (res.code == 200 && res.data) {
                        let list = res.data.list;
                        this.timeMark = [];
                        this.temperature = [];
                        this.humidity = [];
                        list.forEach(item => {
                            // 时间刻度
                            // if(this.timeType == 2){
                            //     // 时间刻度为： 日
                            //     this.timeMark.push(item.date + item.time);
                            // }else{
                            //     this.timeMark.push(item.time);
                            // }
                            this.timeMark.push(item.abscissaTime);
                            
                            // 温度
                            this.temperature.push(item.avgtemp);
                            // 湿度
                            this.humidity.push(item.humidity);
                        })
                        // console.log(this.timeMark);
                        // console.log(this.temperature);
                        // console.log(this.humidity);
                        this.weatherCharts();
                    } else {
                        this.$message.error('获取数据失败');
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            exportData(){
                // 导出数据
                location.href = this.$url + "/api/admin/temperature/export";
            }
        },
        mounted(){
            this.initTimeRange();
            // 获取城市数据
            this.getCityData();
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/css/style_lm.scss";

.el-select{
    width: 100px;
}

.el-button-group .el-button{
    width: 40px;
    font-size: 14px;
}

.el-button--primary{
    background: #2274A4;
}

.el-date-editor .el-range__icon{
    margin-left: 10px;
}
.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner{
    width: 300px;
}

.weatherCharts{
    width: 100%;
    height: 600px;
}

</style>
