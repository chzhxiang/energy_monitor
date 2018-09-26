/* created by zyh on 2018-9-8 */
import { EnergyTypeEnumBase } from "../../../static/enum/energyTypeCommonEnum";
import { DateTypeEnumBase } from "../../../static/enum/dateCommonEnum";

//电水气类型
export const EnergyTypeEnum = {
    radius: "36px", //全圆角 建议值  大于容器的 高度/宽度
    bgColor: "blue",
    activeItemHasBorderBottom: false,
    itemShowIcon: false,
    styleWidth: "monospaced",
    dataArr: EnergyTypeEnumBase
}

//时间粒度
export const TimeGranularityEnums = {
    radius: "28px",
    bgColor: "blue",
    styleWidth: "monospaced",
    dataArr: DateTypeEnumBase
}

//基准范围选项
export const StandardOptionsEnums = [{
    value: '选项1',
    label: '冷热源'
}, {
    value: '选项2',
    label: '热冷源'
}]

export const EnergyEchartsOptions = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        data: ['能耗基准', '实际能耗情况', '节能优化曲线']
    },
    calculable: true,
    toolbox: {
        show: true,
        right: '10%',
        feature: {
            mark: { show: true },
            dataView: {
                show: true,
                readOnly: false,
                optionToContent: function(opt) {
                    let axisData = opt.xAxis[0].data;
                    let series = opt.series;
                    let table = '<table id="test" class="table-bordered table-striped" style="width:100%;text-align:center">';
                    table = table + '<tbody><tr>' + '<td>时间</td>' + '<td>' + series[0].name + '</td>' + '<td>' + series[1].name + '</td>' + '</tr>';
                    for (var i = 0, l = axisData.length; i < l; i++) {
                        table += '<tr>' + '<td>' + axisData[i] + '</td>' + '<td>' + series[0].data[i] + '</td>' + '<td>' + series[1].data[i] + '</td>' + '</tr>';
                    }
                    table += '</tbody>';
                    return table;
                }
            },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            // saveAsImage: { show: true }
        }
    },
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
            show: true
        },
        splitLine: {
            show: true
        },
        axisTick: { alignWithLabel: true },

        name: '时间'
    }],
    yAxis: [{
        type: 'value',
        name: '',
    }],
    series: [{
            name: '能耗基准',
            type: 'bar',
            smooth: true,
            barGap: 0,
            itemStyle: {
                normal: {
                    color: '#FFDE90'
                }
            },
            barWidth: 30,
            data: [1000, 1342, 2154, 5433, 2660, 8730, 7710]
        },
        {
            name: '实际能耗情况',
            type: 'bar',
            barGap: 0,
            smooth: true,
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: '#FEC068'
                }
            },
            data: [3350, 1852, 4434, 7915, 3904, 3430, 9410]
        },
        {
            name: '节能优化曲线',
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#5EADDB'
                }
            },
            data: [4434, 9410, 4434, 7915, 3904, 3430, 3156]
        }
    ]
}
