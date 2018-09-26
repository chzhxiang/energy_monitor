const Mock = require('mockjs');
const sliderbar = function () {
    let item = {
        "code": 0,
        "data": [{
            icon: 'el-icon-setting',
            index: 'index',
            title: '首页概览'
        },
            {
                icon: 'el-icon-more',
                index: '1',
                title: '定额管理',
                subs: [{
                    index: 'quota',
                    title: '项目定额'
                },
                    {
                        index: 'section',
                        title: '科室定额'
                    }
                ]
            },
            {
                icon: 'el-icon-news',
                index: '2',
                title: '用能成本',
                subs: [{
                    index: 'CostOfQuery',
                    title: '费用查询'
                },
                    {
                        index: 'EnergySavingAnalysis',
                        title: '节能分析'
                    },
                    {
                        index: 'TenantManagement',
                        title: '租户管理'
                    },
                    {
                        index: 'BillManagement',
                        title: '账单管理'
                    }
                ]
            },
            {
                icon: 'el-icon-document',
                index: '3',
                title: '能耗分析',
                subs: [{
                    index: 'EnergyConsumptionQuery',
                    title: '能耗查询'
                },
                    {
                        index: 'EnergyMap',
                        title: '能流图'
                    },
                    {
                        index: 'EnergyEfficiencyAnalysis',
                        title: '能效分析'
                    },
                    {
                        index: 'LoadPrediction',
                        title: '负荷预测'
                    }
                ]
            },
            {
                icon: 'el-icon-tickets',
                index: '4',
                title: '能耗报表',
                subs: [{
                    index: 'SelfDefinedReport',
                    title: '自定义报表'
                },
                    {
                        index: 'IntelligentMeterReading',
                        title: '智能抄表'
                    },
                    {
                        index: 'AnalysisReport',
                        title: '分析报告'
                    }
                ]
            },
            {
                icon: 'el-icon-bell',
                index: '5',
                title: '告警管理',
                subs: [{
                    index: 'AlarmOverview',
                    title: '告警概览'
                },
                    {
                        index: 'AlarmAnalysis',
                        title: '告警分析'
                    },
                    {
                        index: 'EventManagement',
                        title: '事件管理'
                    },
                    {
                        index: 'SelfDefinedAlarm',
                        title: '自定义告警'
                    }
                ]
            },
            {
                icon: 'el-icon-edit-outline',
                index: '6',
                title: '设备检测',
                subs: [{
                    index: 'PowerDistributionMonitoring',
                    title: '配电监测'
                },
                    {
                        index: 'MeterMonitoring',
                        title: '表计监测'
                    },
                    {
                        index: 'EnvironmentalMonitoring',
                        title: '环境监测'
                    },
                    {
                        index: 'ServiceMonitoring',
                        title: '服务监测'
                    }

                ]
            },
            {
                icon: 'el-icon-setting',
                index: '7',
                title: '平台配置',
                subs: [{
                    index: 'AdminUserList',
                    title: '用户管理'
                }, {
                    index: 'AdminRoleList',
                    title: '角色管理'
                },
                    {
                        index: 'PerssionList',
                        title: '权限列表'
                    },
                    {
                        index: 'AdminOperationLog',
                        title: '操作日志'
                    },
                    {
                        index: 'AnalysisOfUserBehaviors',
                        title: '用户行为分析'
                    }
                ]
            },
            {
                icon: 'el-icon-setting',
                index: '8',
                title: '移动管理',
                subs: [
                    {
                        index: 'CategoryManagement',
                        title: '类别管理'
                    },
                    {
                        index: 'CommentsManagement',
                        title: '评论管理'
                    },
                    {
                        index: 'MobileTechnocracy',
                        title: '专家管理'
                    },
                    {
                        index: 'ReportManagement',
                        title: '举报管理'
                    },
                    {
                        index: 'CourseManagement',
                        title: '课程管理'
                    },
                    {
                        index: 'CourseSection',
                        title: '课程章节'
                    },
                    {
                        index: 'LevelManagement',
                        title: '等级管理'
                    },
                    {
                        index: 'IntegralView',
                        title: '积分查看'
                     }, {
                        index: 'ArticleManagement',
                        title: '文章管理'
                     },
                    {
                        index: 'DynamicManagement',
                        title: '动态管理'
                    },
                    {
                        index: 'AttendanceManagement',
                        title: '考勤管理'
                    },
                    {
                        index: 'DutyMnagement',
                        title: '值班管理'
                    },
                    {
                        index: 'Mobilefeedback',
                        title: '意见反馈'
                    },
                    {
                        index: 'FriendRelationship',
                        title: '好友关系'
                    },
                    {
                        index: 'MobileOperationLog',
                        title: '操作日志'
                    }
                ]
            },
            {
                icon: 'el-icon-setting',
                index: '9',
                title: '基础信息',
                subs: [
                    {
                        index: 'ProjectList',
                        title: '项目信息'
                    },{
                        index: 'DepartmentStaff',
                        title: '部门员工'
                    }, {
                        index: 'GroupList',
                        title: '集团列表'
                    },
                    {
                        index: 'WorkingCalendar',
                        title: '工作日历'
                    },
                    {
                        index: 'ConversionEnergy',
                        title: '能耗指标换算'
                    },
                    {
                        index: 'TimeSet',
                        title: '分时电价设置'
                    },
                    {
                        index: 'PushSettings',
                        title: '推送设置'
                    }
                ]
            }, {
                icon: 'el-icon-setting',
                index: '10',
                title: '系统设置',
                subs: [{
                    index: 'branchManagement',
                    title: '支路管理'
                },
                    {
                    index: 'ComponentModel',
                    title: '分项模型'
                },
                    {
                    index: 'Organization',
                    title: '组织架构'
                },
                    {
                    index: 'DistrictManagement',
                    title: '区域管理'
                },
                {
                    index: 'TenantConfiguration',
                    title: '租户配置'
                },
                {
                    index: 'WeatherTemperature',
                    title: '典型气象年温度'
                },
                {
                    index: 'ParameterConfiguration',
                    title: '系统参数设置'
                },
                {
                    index: 'CollectorManagement',
                    title: '采集器管理'
                }, {
                    index: 'ColdStation',
                    title: '冷站设备'
                },
                {
                    index: 'MonitoringInterface',
                    title: '监控界面管理'
                },
                {
                    index: 'PointTableManagement',
                    title: '点表管理'
                },
                {
                    index: 'PointTableValue',
                    title: '点表映射值'
                },
                {
                    index: 'DistributionboxManagement',
                    title: '配电箱管理'
                },
                {
                    index: 'DistributionBranch',
                    title: '配电支路点表'
                },
                {
                    index: 'MeterParameter',
                    title: '表计参数'
                },
                {
                    index: 'SystemOperationSituationAnalysis',
                    title: '系统运行态势分析'
                },
                {
                    index: 'SystemGlobalParameterConfiguration',
                    title: '系统全局参数配置'
                }
                ]
            }, {
                icon: 'el-icon-setting',
                index: '11',
                title: '数据校核',
                subs: [{
                    index: 'SystemDetection',
                    title: '系统检测'
                }, {
                    index: 'BranchInfo',
                    title: '支路信息校核'
                }, {
                    index: 'SubitemInfo',
                    title: '分项信息校核'
                },
                    {
                        index: 'BranchEnergyConsumption',
                        title: '支路能耗校核'
                    },
                    {
                        index: 'SubentryEnergyConsumption',
                        title: '分项能耗校核'
                    },
                    {
                        index: 'ReadingQuery',
                        title: '表头读数查询'
                    },
                    {
                        index: 'ReportDownload',
                        title: '校对报告下载'
                    }

                ]
            },
            {
                icon: 'el-icon-error',
                index: '404',
                title: '关于我们'
            }
        ],
        "msg": "success"
    }

    return item;
}
const treeitems = function () {
    let treelable = {
        'code': 200,
        'data': [{
            id: 1,
            labelname: '口腔医院',
            children: [{
                id: 2,
                labelname: '口外门诊',
                children: [{
                    id: 3,
                    labelname: '东院门诊牙周门诊'
                }, {
                    id: 4,
                    labelname: 'DE1102'
                }, {
                    id: 5,
                    labelname: 'DE1102'
                }, {
                    id: 6,
                    labelname: 'DE1102'
                }, {
                    id: 7,
                    labelname: 'DE1102'
                }]
            },
                {
                    id: 11,
                    labelname: '牙周门诊'
                }, {
                    id: 12,
                    labelname: '口腔医院'
                }
            ]
        },
            {
                id: 8,
                labelname: '保卫科'
            },
            {
                id: 9,
                labelname: "后勤保障科"
            },
            {
                id: 10,
                labelname: "水电科"
            }
        ],
        'msg': 'success'
    }
    return treelable;
}
// 科室定额
const sectionQuota = function () {
    let item = {
        'code': 200,
        'data': {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [{
                type: 'value'
            }],
            yAxis: [{
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            series: [{
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                data: [320, 302, 301, 334, 390, 330, 320]
            },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        'msg': 'success'
    };
    return item;
}
Mock.mock('/sliderbar/list', 'post', sliderbar);
Mock.mock('/treeitems/list', 'post', treeitems);
Mock.mock('/sectionQuota/list', 'post', sectionQuota);
