export default {
    "login": "/api/admin/index/login", //登录接口
    "getDistributionSelection":'/api/admin/monitor/getDistributionSelection',//*获取配电箱列表 ?pmId=1
    "getDistributionBranch":'/api/admin/monitor/getDistributionBranch',//获取支路信息列表 ?distributionId=1
    "getBranchParams":'/api/admin/monitor/getBranchParams', //获取支路参数信息 ?distributionId=1


    //平台配置-管理员模块
    "addAdmin": "/api/admin/admin/addAdmin", //新增管理员
    "editAdmin": "/api/admin/admin/editAdmin", //编辑管理员
    "delAdmin": "/api/admin/admin/delAdmin", //删除管理员
    "getAdminList": "/api/admin/admin/getAdminList", //获取管理员列表
    "getAdminInfo": "/api/admin/admin/getAdminInfo", //获取管理员详情
    "changePwd": "/api/admin/admin/changePwd", //修改密码
    "getMemberArray": "/api/admin/admin/getMemberArray", //获取成员列表

    "getProjectArray": "/api/admin/admin/getProjectArray", //获取项目信息
    "getDepartArray": "/api/admin/admin/getDepartArray", //获取部门信息

    "addNewAdmin": "/api/admin/admin/add", //新增管理员

    //平台配置-角色管理
    "addRole": "/api/admin/role/addRole", //创建角色
    "editRole": "/api/admin/role/editRole", //编辑角色
    "delRole": "/api/admin/role/delRole", //删除角色
    "editPerssion": "/api/admin/role/perssion", //编辑权限
    "getAllPerssionList": "/api/admin/pression/getPerssionList", //获取权限树形列表
    "getRoleList": "/api/admin/role/getRoleList", //获取角色列表
    "getModulRoleArray": "/api/admin/admin/getModulRoleArray", //获取角色列表数组

    //平台配置-权限列表
    "addPression": "/api/admin/pression/add", //新增权限
    "editPression": "/api/admin/pression/edit", //编辑权限
    "getInfoPression": "/api/admin/pression/getInfo", //权限详情
    "getListPression": "/api/admin/pression/getList", //权限列表
    "getPidList": "/api/admin/pression/getPidList", //获取父级列表
    "getAdminUrlPression": "/api/admin/pression/getAdminUrl", //获取所有的接口地址


    //基础信息-能耗指标换算
    "conversionOfEnergyConsumptionIndicatorList":'/api/admin/energyConversion/getList',//获取能耗指标换算列表
    "exportEnergyConsumption":'/api/admin/energyConversion/exportTemplate',//导出能耗指标换算模板
    "importEnergyConsumption":'/api/admin/energyConversion/import',//导入能耗指标换算excel

    //基础信息-项目信息
    "groupProject":'/api/admin/program/getList',//项目信息列表列表
    "getAllpProgramArray":'/api/admin/program/getMyArray',//所有项目列表数组


    //基础信息-部门员工
    "getStaffList":'/api/admin/member/getList',//部门员工列表
    "getStaffDetail":'/api/admin/member/getInfo',//员工详情
    "addStaffInfo":'/api/admin/member/add',//添加员工
    "editStaffInfo":'/api/admin/member/edit',//编辑员工

    "getDepartmentList":'/api/admin/department/getList',//部门列表
    "getDepartmentDetail":'/api/admin/department/getInfo',//员工详情
    "addDepartmentInfo":'/api/admin/department/add',//添加部门
    "ediDepartmentInfo":'/api/admin/department/edit',//编辑部门

    "getPositionArray":'/api/admin/member/getPositionArray',//获取职位列表


    //基础信息-集团列表
    "groupList":'/api/admin/bloc/getList',//集团列表列表
    "groupDetailInfo":'/api/admin/bloc/getInfo',//集团详细信息
    "editGroupInfo":'/api/admin/bloc/edit',//集团详细信息

    //基础信息-推送设置列表
    "getPushListList":'/api/admin/push/getList',//列表
    "delPushListitem":'/api/admin/push/del',//列表


    //系统设置-支路管理页面接口
    "branchExportTemp":'/api/admin/branch/export',//支路管理导出Excel模板
    "branchImportTemp":'/api/admin/branch/import',//支路管理导入Excel模板
    "addBranchInfo":'/api/admin/branch/add',//新增支路信息
    "getBranchList":'/api/admin/branch/getList',//获取支路列表
    "alterBranchInfo": "/api/admin/brancht/edit",  //修改支路信息
    "getBranchDetails": "/api/admin/brancht/getInfo",  //获取支路信息详情


    //系统设置-分项模型
    "getComponentModelList":'/api/admin/subentry/getList',//获取分项列表
    "ComponenthExportTemp":'/api/admin/subentry/export',//导出分项模版
    "ComponentImportTemp":'/api/admin/subentry/import',//导入分项信息

    //系统设置-组织机构
    "getOrganizationList":'/api/admin/org/getList',//获取组织机构列表
    "OrganizationExportTemp":'/api/admin/org/export',//导出组织机构模版
    "OrganizationImportTemp":'/api/admin/org/import',//导入组织机构信息

    //系统设置-区域管理
    "getDistrictList":'/api/admin/district/getList',//获取区域列表
    "DistrictExportTemp":'/api/admin/district/export',//导出区域模版
    "DistrictImportTemp":'/api/admin/district/import',//导入区域信息

    //系统设置-租户配置
    "getTenantList":'/api/admin/renter/getList',//获取租户列表
    "TenantExportTemp":'/api/admin/renter/export',//导出租户模版
    "TenantImportTemp":'/api/admin/renter/import',//导入租户信息
    "dleTenantTemp":'/api/admin/renter/del',//删除租户信息

    //系统设置-采集器管理
    "getCollectorList":'/api/admin/collector/getList',//获取采集器列表

    //系统设置-表计参数管理
    "getMeterParameterList":'/api/admin/tachometer/getList',//获取表计参数列表

    //系统设置-监控界面管理
    "getMonitoringInterfaceList":'/api/admin/monitor/getList',//获取监控界面管理列表
    "MonitoringInterfaceExportTemp":'/api/admin/monitor/export',//导出监控界面管理模版
    "MonitoringInterfaceImportTemp":'/api/admin/monitor/import',//导入监控界面管理信息

    //系统设置-冷站设备
    "getColdStationList":'/api/admin/coolingStation/getList',//获取冷站设备列表
    "ColdStationExportTemp":'/api/admin/coolingStation/export',//导出冷站设备模版
    "ColdStationImportTemp":'/api/admin/coolingStation/import',//导入冷站设备信息

    //系统设置-点表管理
    "getPointTableList":'/api/admin/pointTable/getList',//获取点表管理列表
    "PointTableExportTemp":'/api/admin/pointTable/export',//导出点表管理备模版
    "PointTableImportTemp":'/api/admin/pointTable/import',//导入点表管理信息


    //系统设置-全局参数设置
    "getParamsItemsTypeList":'/api/admin/system/getType',//获取参数类型列表
    "getParamsList":'/api/admin/system/getList',//获取参数列表
    "editParamsList":'/api/admin/system/editCfg',//编辑&删除
    "addParamsList":'/api/admin/system/addCfg',//添加
    "excelParamsListExportTemp":'/api/admin/system/exportTemplate',//导出点表管理备模版
    "excelParamsListImportTemp":'/api/admin/system/import',//导入点表管理信息


    //用能成本
    "getSavingList": "/api/admin/energy/getSavingList", //获取节能量分析
    "getBaselineList": "/api/admin/energy/getBaselineList", //获取/设置节能基准




    ///////////////////////////////////////////////移动端start//////////////////////////////////////////////////
    //新闻模块
    "addNews": "/api/admin/news/add", //新增新闻
    "editNews": "/api/admin/news/edit", //编辑新闻
    "delNews": "/api/admin/news/del", //删除新闻
    "getNewsInfo": "/api/admin/news/getInfo", //新闻详情
    "getNewsList": "/api/admin/news/getList", //新闻列表
    //在线学习模块
    "studyAddType": "/api/admin/study/addType", //新增类型
    "studyEditType": "/api/admin/study/editType", //编辑类型
    "studyDelType": "/api/admin/study/delType", //删除类型（无）
    "studyTypeInfo": "/api/admin/study/typeInfo", //详情类型（无）
    "studyTypeList": "/api/admin/study/typeList", //列表类型
    "studyLessonList": "/api/admin/study/lessonList", //课程列表
    "studyAddLesson": "/api/admin/study/addLesson", //新增课程
    "studyEditLesson": "/api/admin/study/editLesson", //编辑课程
    "studyLessonInfo": "/api/admin/study/lessonInfo", //课程详情（无）
    "studyDelLesson": "/api/admin/study/delLesson", //删除课程（编辑）
    "studyAddLog": "/api/admin/study/addLog", //新增课程目录
    "studyEditLog": "/api/admin/study/editLog", //编辑课程目录
    // "studyAddLog": "/api/admin/study/addLog", // 获取课程目录
    //动态管理
    "getDynamicList": "/api/web/api/admin/dynamic/getDynamicList", //获取动态列表
    "delDynamic": "/api/web/api/admin/dynamic/gdelDynamic/?id=6", //删除动态 id:动态
    //专家模块
    "expertAddType": "/api/admin/expert/addType", //新增转件类型
    "expertEditType": "/api/admin/expert/editType", //编辑专家类型
    "expertDelType": "/api/admin/expert/delType", //删除类型（无）
    "expertTypeInfo": "/api/admin/expert/typeInfo", //类型详情（无）
    "expertTypeList": "/api/admin/expert/typeList", //类型列表
    "expertAdd": "/api/admin/expert/add", //新增专家
    "expertEdit": "/api/admin/expert/edit", //编辑专家
    "expertDel": "/api/admin/expert/del", //删除专家（编辑）
    "expertGetInfo": "/api/admin/expert/getInfo", //专家详情
    "expertGetList": "/api/admin/expert/getList", //专家列表
    //评论管理
    "getDynamicComList": "/api/admin/api/admin/comment/getDynamicComList", //获取动态评论列表
    "getExpertComtList": "/api/admin/api/admin/comment/getExpertComtList", //获取专家评论列表
    "getStudyComtList": "/api/admin/api/admin/comment/getStudyComtList", //获取课程评论列表
    "editComm": "/api/admin/api/admin/comment/editComm", //编辑评论
    //反馈模块
    "getFeedbackList": "/api/admin/api/admin/common/getFeedbackList", //获取反馈列表
    "editFeedback": "/api/admin/api/admin/common/editFeedback", //反馈编辑
    //举报管理
    "getEComReportList": "/api/admin/api/admin/report/getEComReportList", //获取专家评论举报列表
    "editEComReport": "/api/admin/api/admin/report/editEComReport", //编辑专家评论举报
    "getFriendReportList": "/api/admin/api/admin/report/getFriendReportList", //获取好友举报列表
    "editFriendRepor": "/api/admin/api/admin/report/editFriendRepor", //编辑好友举报







}

/*export const baseUrl =  'http://192.168.1.21:8080'

/!*获取配电箱列表 ?pmId=1*!/
export const getDistributionSelection = baseUrl+'/api/admin/monitor/getDistributionSelection'

/!*获取支路信息列表 ?distributionId=1*!/
export const getDistributionBranch = baseUrl+'/api/admin/monitor/getDistributionBranch'

/!*获取支路参数信息 ?distributionId=1*!/
export const getBranchParams = baseUrl+'/api/admin/monitor/getBranchParams'*/


// const baseUrl = 'http://api.domain'
const baseUrl = 'http://192.168.1.21:8080'

/*获取配电箱列表 ?pmId=1*/
export const getDistributionSelection = baseUrl + '/api/admin/monitor/getDistributionSelection'

/*获取支路信息列表 ?distributionId=1*/
export const getDistributionBranch = baseUrl + '/api/admin/monitor/getDistributionBranch'

/*获取支路信息列表 ?distributionId=1*/
export const getBranchParams = baseUrl + '/api/admin/monitor/getBranchParams'



/*获取支路信息列表 ?distributionId=1*/
export const getMonitorParamTypes = baseUrl + '/api/admin/monitor/getMonitorParamTypes'

/*表计检测历史数据*/
export const getMeterDetails = baseUrl + '/api/admin/monitor/getMeterDetails'
