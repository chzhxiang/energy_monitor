import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/index'
    },
        {
            path: '/index',
            name: 'index',
            component: resolve => require(['../views/indexpage.vue'], resolve),
            meta: {title: '首页概览',}
        },
        {
            path: '/',
            component: resolve => require(['../components/common/home.vue'], resolve),
            meta: {title: ''},
            children: [{
                path: '/home',
                component: resolve => require(['../views/homePage.vue'], resolve),
                meta: {title: '首页概览', permission: 'admin'}
            },
                {
                    path: '/quota',
                    component: resolve => require(['../views/quota/quotamanagement/quotamanagement.vue'], resolve),
                    meta: {title: '项目定额'}
                },
                {
                    path: '/section',
                    component: resolve => require(['../views/quota/sectionquota/sectionquota.vue'], resolve),
                    meta: {title: '科室定额'}
                },
                {
                    path: '/authSetting',
                    component: resolve => require(['../components/authority/authSetting.vue'], resolve),
                    meta: {title: '权限设置'}
                },
                {
                    path: '/section',
                    component: resolve => require(['../views/quota/sectionquota/sectionquota.vue'], resolve),
                    meta: {title: '科室定额'}
                },
                {
                    path: '/costOfQuery',
                    component: resolve => require(['../views/costForEnergy/costOfQuery.vue'], resolve),
                    meta: {title: '费用查询'}
                },
                {
                    path: '/energySavingAnalysis',
                    component: resolve => require(['../views/costForEnergy/energySavingAnalysis.vue'], resolve),
                    meta: {title: '节能分析'}
                },
                {
                    path: '/tenantManagement',
                    component: resolve => require(['../views/costForEnergy/tenantManagement.vue'], resolve),
                    meta: {title: '租户管理'}
                },
                {
                    path: '/billManagement',
                    component: resolve => require(['../views/costForEnergy/billManagement.vue'], resolve),
                    meta: {title: '账单管理'}
                },
                {
                    path: '/energyConsumptionQuery',
                    component: resolve => require(['../views/energyAnalysis/energyConsumptionQuery.vue'], resolve),
                    meta: {title: '能耗查询'}
                },
                {
                    path: '/energyMap',
                    component: resolve => require(['../views/energyAnalysis/energyMap.vue'], resolve),
                    meta: {title: '能流图'}
                },
                {
                    path: '/energyEfficiencyAnalysis',
                    component: resolve => require(['../views/energyAnalysis/energyEfficiencyAnalysis.vue'], resolve),
                    meta: {title: '能效分析'}
                },
                {
                    path: '/loadPrediction',
                    component: resolve => require(['../views/energyAnalysis/loadPrediction/loadPrediction.vue'], resolve),
                    meta: {title: '负荷预测'}
                },
                {
                    path: '/selfDefinedReport',
                    component: resolve => require(['../views/energyConsumptionReport/selfDefinedReport.vue'], resolve),
                    meta: {title: '自定义报表'}
                },
                {
                    path: '/intelligentMeterReading',
                    component: resolve => require(['../views/energyConsumptionReport/intelligentMeterReading.vue'], resolve),
                    meta: {title: '智能抄表'}
                },
                {
                    path: '/analysisReport',
                    component: resolve => require(['../views/energyConsumptionReport/analysisReport/analysisReport.vue'], resolve),
                    meta: {title: '分析报告'}
                },
                {
                    path: '/alarmOverview',
                    component: resolve => require(['../views/alarmManagement/alarmOverview.vue'], resolve),
                    meta: {title: '告警概览'}
                },
                {
                    path: '/alarmAnalysis',
                    component: resolve => require(['../views/alarmManagement/alarmAnalysis.vue'], resolve),
                    meta: {title: '告警分析'}
                },
                {
                    path: '/eventManagement',
                    component: resolve => require(['../views/alarmManagement/eventManagement/eventManagement.vue'], resolve),
                    meta: {title: '事件管理'}
                },
                {
                    path: '/selfDefinedAlarm',
                    component: resolve => require(['../views/alarmManagement/selfDefinedAlarm/selfDefinedAlarm.vue'], resolve),
                    meta: {title: '自定义告警'}
                },
                {
                    path: '/powerDistributionMonitoring',
                    component: resolve => require(['../views/equipmentMonitoring/powerDistributionMonitoring.vue'], resolve),
                    meta: {title: '配电监测'}
                },
                {
                    path: '/meterMonitoring',
                    component: resolve => require(['../views/equipmentMonitoring/meterMonitoring.vue'], resolve),
                    meta: {title: '表计监测'}
                },
                {
                    path: '/environmentalMonitoring',
                    component: resolve => require(['../views/equipmentMonitoring/environmentalMonitoring.vue'], resolve),
                    meta: {title: '环境监测'}
                },
                {
                    path: '/serviceMonitoring',
                    component: resolve => require(['../views/equipmentMonitoring/serviceMonitoring.vue'], resolve),
                    meta: {title: '服务监测'}
                },
                {
                    path: '/userList',
                    component: resolve => require(['../views/platformConfiguration/userList.vue'], resolve),
                    meta: {title: '用户列表'}
                },
                {
                    path: '/adminRoleList',
                    component: resolve => require(['../views/platformConfiguration/role/roleList.vue'], resolve),
                    meta: {title: '角色管理'}
                },
                {
                    path: '/perssionList',
                    component: resolve => require(['../views/platformConfiguration/perssion/perssionList.vue'], resolve),
                    meta: {title: '权限列表'}
                },
                {
                    path: '/adminOperationLog',
                    component: resolve => require(['../views/platformConfiguration/adminOperationLog.vue'], resolve),
                    meta: {title: '操作日志'}
                },
                {
                    path: '/analysisOfUserBehaviors',
                    component: resolve => require(['../views/platformConfiguration/analysisOfUserBehaviors.vue'], resolve),
                    meta: {title: '用户行为分析'}
                },
               {
                    path: '/categoryManagement',
                    component: resolve => require(['../views/mobilityManagements/categoryManagement/categoryManagement.vue'], resolve),
                    meta: {title: '类别管理'}
                },
                {
                    path: '/commentsManagement',
                    component: resolve => require(['../views/mobilityManagements/commentsManagement/commentsManagement.vue'], resolve),
                    meta: {title: '评论管理'}
                },
                {
                    path: '/mobileTechnocracy',
                    component: resolve => require(['../views/mobilityManagements/mobileTechnocracy/mobileTechnocracy.vue'], resolve),
                    meta: {title: '专家管理'}
                },
                {
                    path: '/reportManagement',
                    component: resolve => require(['../views/mobilityManagements/reportManagement/reportManagement.vue'], resolve),
                    meta: {title: '举报管理'}
                },
                {
                    path: '/courseManagement',
                    component: resolve => require(['../views/mobilityManagements/courseManagement/courseManagement.vue'], resolve),
                    meta: {title: '课程管理'}
                },
                {
                    path: '/courseSection',
                    component: resolve => require(['../views/mobilityManagements/courseManagement/courseSection.vue'], resolve),
                    meta: {title: '课程章节'}
                },
                {
                    path: '/levelManagement',
                    component: resolve => require(['../views/mobilityManagements/levelManagement/levelManagement.vue'], resolve),
                    meta: {title: '等级管理'}
                },
                {
                    path: '/integralView',
                    component: resolve => require(['../views/mobilityManagements/integralView/integralView.vue'], resolve),
                    meta: {title: '积分查看'}
                },
                {
                    path: '/articleManagement',
                    component: resolve => require(['../views/mobilityManagements/articleManagement/articleManagement.vue'], resolve),
                    meta: {title: '文章管理'}
                },
                {
                    path: '/dynamicManagement',
                    component: resolve => require(['../views/mobilityManagements/dynamicManagement/dynamicManagement.vue'], resolve),
                    meta: {title: '动态管理'}
                },
                {
                    path: '/attendanceManagement',
                    component: resolve => require(['../views/mobilityManagements/attendanceManagement/attendanceManagement.vue'], resolve),
                    meta: {title: '考勤管理'}
                },
                {
                    path: '/dutyMnagement',
                    component: resolve => require(['../views/mobilityManagements/dutyMnagement/dutyMnagement.vue'], resolve),
                    meta: {title: '值班管理'}
                },
                {
                    path: '/mobilefeedback',
                    component: resolve => require(['../views/mobilityManagements/mobilefeedback/mobilefeedback.vue'], resolve),
                    meta: {title: '意见反馈'}
                },
                {
                    path: '/friendRelationship',
                    component: resolve => require(['../views/mobilityManagements/friendRelationship/friendRelationship.vue'], resolve),
                    meta: {title: '好友关系'}
                },
                {
                    path: '/conversionEnergy',
                    component: resolve => require(['../views/basicInfomations/conversionEnergy/conversionEnergy.vue'], resolve),
                    meta: {title: '能耗指标换算'}
                },
                {
                    path: '/groupList',
                    component: resolve => require(['../views/basicInfomations/groupList/groupList.vue'], resolve),
                    meta: {title: '集团列表'}
                },
                {
                    path: '/projectList',
                    component: resolve => require(['../views/basicInfomations/project/projectList.vue'], resolve),
                    meta: {title: '项目信息'}
                },
                {
                    path: '/departmentStaff',
                    component: resolve => require(['../views/basicInfomations/departmentStaff/departmentStaff.vue'], resolve),
                    meta: {title: '部门员工'}
                },
                {
                    path: '/pushSettings',
                    component: resolve => require(['../views/basicInfomations/pushSettings/pushSettings.vue'], resolve),
                    meta: {title: '推送设置'}
                },
                {
                    path: '/timeSet',
                    component: resolve => require(['../views/basicInfomations/timeSet/timeSetList.vue'], resolve),
                    meta: {title: '分时电价设置'}
                },
                {
                    path: '/workingCalendar',
                    component: resolve => require(['../views/basicInfomations/workingCalendar.vue'], resolve),
                    meta: {title: '工作日历'}
                },
                {
                    path: '/branchManagement',
                    component: resolve => require(['../views/systemSeting/branchManagement/branchManagement.vue'], resolve),
                    meta: {title: '支路管理'}
                },
                {
                    path: '/coldStation',
                    component: resolve => require(['../views/systemSeting/coldStation/coldStation.vue'], resolve),
                    meta: {title: '冷站设备'}
                },
                {
                    path: '/collectorManagement',
                    component: resolve => require(['../views/systemSeting/collectorManagement/collectorManagement.vue'], resolve),
                    meta: {title: '采集器设置'}
                },
                {
                    path: '/componentModel',
                    component: resolve => require(['../views/systemSeting/componentModel/componentModel.vue'], resolve),
                    meta: {title: '分项模型'}
                },
               {
                    path: '/organization',
                    component: resolve => require(['../views/systemSeting/organization/organization.vue'], resolve),
                    meta: {title: '组织机构'}
                },
                {
                    path: '/districtManagement',
                    component: resolve => require(['../views/systemSeting/districtManagement/districtManagement.vue'], resolve),
                    meta: {title: '区域管理'}
                },
                {
                    path: '/meterParameter',
                    component: resolve => require(['../views/systemSeting/meterParameter/meterParameter.vue'], resolve),
                    meta: {title: '表计参数'}
                },
                {
                    path: '/monitoringInterface',
                    component: resolve => require(['../views/systemSeting/monitoringInterface/monitoringInterface.vue'], resolve),
                    meta: {title: '监控界面管理'}
                },
                {
                    path: '/parameterConfiguration',
                    component: resolve => require(['../views/systemSeting/parameterConfiguration.vue'], resolve),
                    meta: {title: '系统参数设置'}
                },
                {
                    path: '/pointTableManagement',
                    component: resolve => require(['../views/systemSeting/pointTableManagement/pointTableManagement.vue'], resolve),
                    meta: {title: '点表管理'}
                },
                {
                    path: '/distributionboxManagement',
                    component: resolve => require(['../views/systemSeting/distributionboxManagement/distributionboxManagement.vue'], resolve),
                    meta: {title: '配电箱管理'}
                },
                {
                    path: '/distributionBranch',
                    component: resolve => require(['../views/systemSeting/distributionBranch/distributionBranch.vue'], resolve),
                    meta: {title: '配电支路点表'}
                },
                {
                    path: '/pointTableValue',
                    component: resolve => require(['../views/systemSeting/pointTableValue/pointTableValue.vue'], resolve),
                    meta: {title: '点表映射值'}
                },
                {
                    path: '/systemOperationSituationAnalysis',
                    component: resolve => require(['../views/systemSeting/systemOperationSituationAnalysis/systemOperationSituationAnalysis.vue'], resolve),
                    meta: {title: '系统运行态势分析'}
                },
                {
                    path: '/systemGlobalParameterConfiguration',
                    component: resolve => require(['../views/systemSeting/systemGlobalParameterConfiguration/systemGlobalParameterConfiguration.vue'], resolve),
                    meta: {title: '系统全局参数配置'}
                },

                {
                    path: '/tenantConfiguration',
                    component: resolve => require(['../views/systemSeting/tenantConfiguration/tenantConfiguration.vue'], resolve),
                    meta: {title: '租户设置'}
                },
                {
                    path: '/weatherTemperature',
                    component: resolve => require(['../views/systemSeting/weatherTemperature.vue'], resolve),
                    meta: {title: '典型气象年温度'}
                },
                {
                    path: '/branchEnergyConsumption',
                    component: resolve => require(['../views/dataCollations/branchEnergyConsumption.vue'], resolve),
                    meta: {title: '支路能耗校验'}
                },
                {
                    path: '/branchInfo',
                    component: resolve => require(['../views/dataCollations/branchInfo/branchInfo.vue'], resolve),
                    meta: {title: '支路信息校验'}
                },
                {
                    path: '/readingQuery',
                    component: resolve => require(['../views/dataCollations/readingQuery.vue'], resolve),
                    meta: {title: '表头读数查询'}
                },
                {
                    path: '/reportDownload',
                    component: resolve => require(['../views/dataCollations/reportDownload.vue'], resolve),
                    meta: {title: '校对报告下载'}
                },
                {
                    path: '/subentryEnergyConsumption',
                    component: resolve => require(['../views/dataCollations/subentryEnergyConsumption.vue'], resolve),
                    meta: {title: '分项能耗校验'}
                },
                {
                    path: '/subitemInfo',
                    component: resolve => require(['../views/dataCollations/subitemInfo.vue'], resolve),
                    meta: {title: '分项信息校核'}
                },
                {
                    path: '/systemDetection',
                    component: resolve => require(['../views/dataCollations/systemDetection/systemDetection.vue'], resolve),
                    meta: {title: '系统检测'}
                },
                {
                    path: '/adminUserList',
                    component: resolve => require(['../views/platformConfiguration/adminUser/adminUserList.vue'], resolve),
                    meta: {title: '用户列表'}
                },
                {
                    path: '/demoList',
                    component: resolve => require(['../views/platformConfiguration/demoList.vue'], resolve)
                },
                {
                    path: '/temp',
                    component: resolve => require(['../components/page/home/template.vue'], resolve)
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '/tabs',
            component: resolve => require(['../components/page/Tabs.vue'], resolve)
        },

        {
            path: '*',
            redirect: '/404'
        }
    ]
})
