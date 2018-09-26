<template>
    <div class="EnergyConsumptionCredictionBox">
        <div class="EnergyConsumptionCrediction">
            <div class="contentBox">
                <div class="typeItem">
                    <div style="border-color: #FEC068" class="typeItime-ico">
                        <i style="color: #FEC068" class="iconfont nhjc-dianli"></i>
                    </div>
                    <div class="typeItimeCont">
                        <p class="typeItimeTit">{{typeTit[swichDate]}}电总用量 / 费用</p>
                        <p class="typeItimeData"><span>10000</span> kWh / ￥<span>8500</span> 元</p>
                    </div>
                </div>
                <div style="margin-top: 34px;" class="typeItem">
                    <div style="border-color: #4EB9DB" class="typeItime-ico">
                        <i style="color: #4EB9DB" class="iconfont nhjc-shui"></i>
                    </div>
                    <div class="typeItimeCont">
                        <p class="typeItimeTit">{{typeTit[swichDate]}}水总用量 / 费用</p>
                        <p class="typeItimeData"><span>300</span> m³  / ￥<span>900</span> 元</p>
                    </div>
                </div>
                <div style="margin-top: 34px;" class="typeItem">
                    <div style="border-color:#F2918E" class="typeItime-ico">
                        <i style="color: #F2918E;position: relative;left:4px" class="iconfont nhjc-qi"></i>
                    </div>
                    <div class="typeItimeCont">
                        <p class="typeItimeTit">{{typeTit[swichDate]}}气总用量 / 费用</p>
                        <p class="typeItimeData"><span>4</span> m³  / ￥<span>20</span> 元</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    name: 'basetable',
    components: {
    },
    props: {
        getData: {
            type: Object,
            default: function() {
                return {}
            }
        },

    },
    data() {
        return {
            typeTit:["","明日","下月"],
            swichDate: 1,

        }
    },
    created() {
        //this.createChart();
    },
    methods: {
        switchDate(date) {
            console.log(date)
            this.swichDate = date;
        },
    },
    mounted() {

    }
}

</script>
<style scoped>
.EnergyConsumptionCredictionBox {
    position: relative;
    width: 100%;
    height: 100%;
}
.EnergyConsumptionCrediction {
    text-align: center;
    width: 100%;
    margin-top: 40px;
}
.EnergyConsumptionCrediction .contentBox{
    display: inline-block;
}
.EnergyConsumptionCrediction .contentBox .typeItem{
    height: 80px;
    line-height: 118px;
    position: relative;
    text-align: left;
    padding-left: 102px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItime-ico{
    border: 2px yellow solid;
    position: absolute;
    top:0;
    left: 0;
    border-radius: 50%;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
    line-height: 68px;
    text-align: center;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItime-ico i{
    font-size: 28px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont{
    height: 48px;
    line-height: 48px;
    text-align: left;
    display: inline-block;
    color: #333333;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont .typeItimeTit{
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 14px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont .typeItimeData{
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 16px;
    margin-top: 10px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont .typeItimeData span{
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
    color: #333333;
}

</style>
