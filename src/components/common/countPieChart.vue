<template>
    <div class="CountPieCharttBox">
            <Charts :option="option"></Charts>
    </div>
</template>
<script>
    //import dataTable from "../../components/common/dataTable.vue"
    import Charts from '../../components/common/charts.vue';

    export default {
        name: 'basetable',
        components: {
            Charts
        },
        props: {
            option: {
                type: Object,
                default: function () {
                    return {
                        /*tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },*/
                        title : {
                            text: '888',
                            textStyle:{
                                color:'#3A3A3A',
                                fontSize:30,
                                fontWeight:'normal'
                            },
                            subtext: '设置告警总数',
                            subtextStyle:{
                                color:"#3A3A3A",
                                fontSize:14,

                            },
                            x:'center',
                            y:'43%',
                        },
                        series: [
                            {
                                name:'访问来源',
                                type:'pie',
                                radius: ['29%', '46%'],
                                itemStyle:{
                                    borderColor:"rgba(255,255,255,1)",
                                    borderWidth:8,
                                },
                                label: {
                                    normal: {
                                        formatter: '{per|{d}%} \n{hr|}\n  {b|{b}}',
                                        align:'right',
                                        rich: {
                                            hr: {
                                                borderColor: '#aaa',
                                                width: '100%',
                                                borderWidth: 1,
                                                height: 0
                                            },
                                            b: {
                                                fontSize: 14,
                                                color:"#000",
                                                lineHeight:20
                                            },
                                            per: {
                                                color: '#000',
                                                fontSize:16,
                                                lineHeight:20


                                            }
                                        }
                                    }
                                },
                                labelLine:{

                                },
                                data:[
                                    {
                                        value:300,
                                        name:'三级告警',
                                        itemStyle:{
                                            color:"#e7bf5f"
                                        }
                                    },
                                    {
                                        value:500,
                                        name:'四级告警',
                                        itemStyle:{
                                            color:"#74b8dd"
                                        }
                                    },
                                    {
                                        value:350,
                                        name:'五级告警',
                                        itemStyle:{
                                            color:"#67cb82"
                                        }
                                    },
                                    {
                                        value:300,
                                        name:'一级告警',
                                        itemStyle:{
                                            color:"#ee6e6d"
                                        }
                                    },
                                    {
                                        value:150,
                                        name:'二级告警',
                                        itemStyle:{
                                            color:"#09368"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        data() {
            return {
                timeSwich: 1,
            }
        },
        created() {

        },
        computed: {},
        methods: {
            swichTimeData(vl) {
                this.timeSwich = vl;
            }
        }
    }

</script>
<style scoped>
    .CountPieCharttBox {
        width: 100%;
        height: 100%;
    }


</style>
<style>
</style>
