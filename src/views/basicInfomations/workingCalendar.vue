<template>
    <div class="page_container">
        <h2 class="page_title">工作日历</h2>
        <div class="page_body">
            <div class="page_control">
                <label>筛选项目：</label>
                <el-select v-model="selected_projects" placeholder="请选择">
                    <el-option v-for="item in projects"
                    :key="item.name"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
                <label style="margin-left:47px;">年份：</label>
                <el-date-picker v-model="datePicker" type="year" placeholder="年份" :clearable="false"></el-date-picker>
                <el-button type="primary" round icon="el-icon-search" @click="getWorkcalendar">查询</el-button>
                <label style="margin-left:158px;">
                    <el-checkbox v-model="IncludeSaturday">包含周六</el-checkbox>
                    <el-checkbox v-model="IncludeSunday">包含周日</el-checkbox>
                    <el-checkbox v-model="IncludeHolidays">包含法定节假日</el-checkbox>
                </label>
                
                <div class="right">
                    <el-button type="primary" round @click="submit">保存</el-button>
                </div>
            </div>
            <div class="page_content">
                <div class="calendar" v-for="(item, index) in calendarData" :key="index">
                    <h3>{{item.month}}月</h3>
                    <div class="calendar_body">
                        <div class="calendar_left">
                            <ul class="calendar_week">
                                <li v-for="n in item.weekList">{{n}}</li>
                            </ul>
                        </div>
                        <div class="calendar_right">
                            <!-- 显示星期 -->
                            <ul class="calendar_day">
                                <li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li><li>七</li>
                            </ul>
                            <!-- 显示日期 -->
                            <ul class="calendar_date">
                                <!-- 空白日期 -->
                                <li v-for="n in item.firstDay - 1"></li>
                                <li v-for="d in item.dateList" :key="d" @click="toggleDateSelected(index+1, d)"><i :class="{'active': checkDateSelected(index+1, d)}">{{d}}</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                projects: [],
                selected_projects: 1, // 选择的项目
                datePicker: new Date(), // 选择的年份
                queryDate: new Date().getFullYear(), // 查询数据的年份
                IncludeSaturday: false, // 包含周六
                IncludeSunday: false, // 包含周日
                IncludeHolidays: false, // 包含法定节假日
                seletedDate: [], // 已选日期
                initServerDate: [], // 服务器获取的日期 
            }
        },
        computed:{
            selectYear(){
                return this.datePicker.getFullYear();
            },
            calendarData(){
                let calendarData = [];
                //那一年第一天是星期几
                var yearFirstDay = new Date(this.queryDate, 0, 1).getDay() || 7;
                // 创建月份
                for(let i = 1; i <= 12; i++){
                    let month = i;
                    if(i < 10){
                        month = '0' + i;
                    }

                    // 当月日期
                    let dateList = [];
                    // 本月包含第几周
                    let weekList = [];
                    for(let j = 1; j <= 31; j++){
                        let f = true;
                        if(j == 31){
                            if([1,3,5,7,8,10,12].indexOf(i) == -1){
                                f = false;
                            }
                        }else if(j == 30){
                            if(i == 2){
                                f = false;
                            }
                            
                        }else if(j == 29){
                            if(i == 2){
                                // 是否为闰年
                                if(!this.isLeapYear(this.queryDate)){
                                    f = false
                                }
                                
                            }
                            
                        }

                        if(f){
                            dateList.push(j);
                            
                            //那一天是那一年中的第多少天
                            let days = j;
                            for (var k = 0; k < i-1; k++) {
                                days += this.getMonthDays(this.queryDate, k)
                            }
                            // 那一天是那一年中的第几周
                            let week = null;
                            if (yearFirstDay == 1) {
                                week = Math.ceil(days / 7);
                            } else {
                                days -= (7 - yearFirstDay + 1);
                                week = Math.ceil(days / 7) + 1;
                            }
                            if(weekList.indexOf(week) == -1){
                                weekList.push(week);
                            }
                            
                        }
                        
                    }
                    // 当前月份的1号是星期几
                    let firstDay = new Date(this.queryDate, i - 1, 1).getDay();
                    if(firstDay == 0){
                        firstDay = 7;
                    }
                    calendarData.push({
                        month,
                        dateList,
                        firstDay,
                        weekList
                    })

                }
                return calendarData;
            },
            
        },
        watch:{
            IncludeSaturday(val){
                // 包含周六
                this.calendarData.forEach((month, index) => {
                    month.dateList.forEach(date => {
                        // 判断当前日是否是周六
                        let thisDay = new Date(this.queryDate, index, date).getDay();
                        if(thisDay == 6){
                            let datestr = this.getDateStr(index+1, date);
                            let select_index = this.seletedDate.indexOf(datestr);
                            if(val){
                                if(select_index == -1){
                                    this.seletedDate.push(datestr);
                                }
                            }else{
                                if(select_index != -1){
                                    this.seletedDate.splice(select_index, 1);
                                }
                            }
                            
                        }
                    })
                })
            },
            IncludeSunday(val){
                // 包含周日
                this.calendarData.forEach((month, index) => {
                    month.dateList.forEach(date => {
                        // 判断当前日是否是周日
                        let thisDay = new Date(this.queryDate, index, date).getDay();
                        if(thisDay == 0){
                            let datestr = this.getDateStr(index+1, date);
                            let select_index = this.seletedDate.indexOf(datestr);
                            if(val){
                                if(select_index == -1){
                                    this.seletedDate.push(datestr);
                                }
                            }else{
                                if(select_index != -1){
                                    this.seletedDate.splice(select_index, 1);
                                }
                            }
                            
                        }
                    })
                })
            },
            IncludeHolidays(){
                // 包含法定节假日
                this.getHolidays();
            }
        },
        methods:{
            isLeapYear(year) {
                /**
                 * 判断年份是否为润年
                 */
                return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
            },
            getMonthDays(year, month) {
                return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (this.isLeapYear(year) ? 29 : 28);
            },
            getDateStr(month, date){
                if(month < 10){
                    month = "0" + month;
                }
                if(date < 10){
                    date = "0" + date;
                }
                return this.queryDate + '-' + month + '-' + date;;
            },
            checkDateSelected(month, date){
                let datestr = this.getDateStr(month, date);
                return this.seletedDate.indexOf(datestr) != -1;
            },
            toggleDateSelected(month, date){
                let datestr = this.getDateStr(month, date);
                let index = this.seletedDate.indexOf(datestr);
                if(index == -1){
                    this.seletedDate.push(datestr);
                }else{
                    this.seletedDate.splice(index, 1);
                }
            },
            initSelectedDate(){
                this.seletedDate = [];
                this.initServerDate = [];
                this.calendarData.forEach((month, index) => {
                    month.dateList.forEach(date => {
                        // 判断当前日是否是工作日
                        let thisDay = new Date(this.queryDate, index, date).getDay();
                        if(thisDay >= 1 && thisDay <= 5){
                            this.seletedDate.push(this.getDateStr(index+1, date));
                            this.initServerDate.push(this.getDateStr(index+1, date));
                        }
                    })
                })
            },
            getProjects(){
                this.$axios.post('/api/admin/program/getList', {
                    pageNum: 1,
                    pageSize: 10000,
                }).then((res) => {
                    if(res.code == 200){
                        // console.log(res.data.list);
                        this.projects = res.data.list.map(item => {
                            return {
                                id: item.id,
                                name: item.name
                            }
                        })
                        if(res.data.list.length){
                            this.selected_projects = res.data.list[0].id;
                        }
                        // 调用工作日历
                        this.getWorkcalendar();
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            getWorkcalendar(){
                this.queryDate = this.selectYear;
                this.$axios.post('/api/admin/workcalendar/getList', {
                    pmId: this.selected_projects,
                    year: this.queryDate,
                    holidays: false
                }).then((res) => {
                    if(res.code == 200){
                        // console.log(res.data.list);
                        // 初始化工作日
                        this.initSelectedDate();
                        res.data.list.forEach(item => {
                            if(item.datetype == 0 || item.datetype == 1){
                                // 法定节假日 / 调休
                                let index = this.seletedDate.indexOf(item.date);
                                if(index != -1){
                                    this.seletedDate.splice(index, 1);
                                    this.initServerDate.splice(index, 1);
                                }
                                
                            }else if(item.datetype == 2){
                                // 上班
                                let index = this.seletedDate.indexOf(item.date);
                                if(index == -1){
                                    this.seletedDate.push(item.date);
                                    this.initServerDate.push(item.date);
                                }
                            }
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            getHolidays(){
                // 获取法定假日
                this.$axios.post('/api/admin/workcalendar/getList', {
                    pmId: this.selected_projects,
                    year: this.queryDate,
                    holidays: true
                }).then((res) => {
                    if(res.code == 200){
                        res.data.list.forEach(item => {
                            let index = this.seletedDate.indexOf(item.date);
                            // 是否包括法定节假日
                            if(this.IncludeHolidays){
                                if(index == -1){
                                    this.seletedDate.push(item.date);
                                }
                            }else{
                                if(index != -1){
                                    this.seletedDate.splice(index, 1);
                                }
                            }
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })
            },
            submit(){
                // 新增的日历
                let workdayOn = this.seletedDate.filter(item => {
                    return this.initServerDate.indexOf(item) == -1;
                }).join(",");
                // 取消的日历
                let workdayOff = this.initServerDate.filter(item => {
                    return this.seletedDate.indexOf(item) == -1;
                }).join(",");
                console.log(workdayOn);
                console.log(workdayOff);
                this.$axios.post('/api/admin/workcalendar/edit', {
                    pmId: this.selected_projects,
                    year: this.queryDate,
                    workdayOff: workdayOff,
                    workdayOn: workdayOn
                }).then((res) => {
                    if(res.code == 200){
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                        this.getWorkcalendar();
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
        },
        beforeMount(){
            // 初始化所选日期
            this.initSelectedDate();
            // 获取项目列表
            this.getProjects();
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/css/style_lm.scss";

.el-select{
    width: 264px;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 90px;
}

.el-button--primary{
    margin-left: 40px;
}
.page_content{
    margin-top: 30px;
    overflow: hidden;
}
.calendar{
    width: 376px;
    height: 228px;
    float: left;
    margin-right: 25px;
    margin-bottom: 10px;
    h3{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #3A3A3A;
        font-weight: 100;
        background: #F2F2F2;
        text-align: center;
        border: 1px #D4D4D4 solid;
        margin-bottom: -1px;
    }

    .calendar_body{
        li{
            float: left;
            list-style: none;
        }
        .calendar_left{
            width: 48px;
            height: 187px;
            border: 1px #D4D4D4 solid;
            float: left;

            .calendar_week{
                margin-top: 30px;
                
                li{
                    width: 50px;
                    text-align: center;
                    font-size: 12px;
                    color: #1881BF;
                    line-height: 25px;
                }
            }
        }

        .calendar_right{
            width: 329px;
            height: 187px;
            border: 1px #D4D4D4 solid;
            margin-left: -1px;
            float: left;
            padding: 6px 20px;
            box-sizing: border-box;

            .calendar_day, .calendar_date{
                li{
                    width: 35px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    margin-right: 6px;
                    font-size: 14px;
                    color: #3A3A3A;
                }
            }

            .calendar_date{
                li{
                    font-size: 12px;
                    height: 24px;
                    line-height: 24px;
                    
                    i{
                        font-style: normal;
                        width: 20px;
                        height: 20px!important;
                        display: block;
                        line-height: 20px;
                        border-radius: 50%;
                        cursor: pointer;
                        margin: 0 auto;
                        &.active{
                            background: #2DB5FF;
                        }
                    }
                }
            }
        }

    }

    
}

</style>