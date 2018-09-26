<template>
   <div style="background:#060F30;">
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <topProgressbar></topProgressbar>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <arrearageRemind></arrearageRemind>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <blocmap></blocmap>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <CollectorMonitorChart></CollectorMonitorChart>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <EnergyAndMoney></EnergyAndMoney>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <EnergyConsumptionCrediction></EnergyConsumptionCrediction>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <Energyefficiencygoalsachieved></Energyefficiencygoalsachieved>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <energymap></energymap>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <expendTop></expendTop>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <GoalsAndAchievements></GoalsAndAchievements>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <hourlyEnergyChart></hourlyEnergyChart>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <magnifymap></magnifymap>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <pendingAlarm></pendingAlarm>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <pendingAlarmOther></pendingAlarmOther>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <prediction></prediction>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <RemindLesseeArrearage></RemindLesseeArrearage>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <semicircleChart></semicircleChart>
       </div>
       <div style="width: 600px;height: 400px;border: 1px #fff solid ">
           <statisticalInfo></statisticalInfo>
       </div>

   </div>
</template>
<script>
    import topProgressbar from './topProgressbar';
    import arrearageRemind from './arrearageRemind';
    import blocmap from './blocmap';
    import CollectorMonitorChart from './collectorMonitorChart';
    import EnergyAndMoney from './EnergyAndMoney';
    import EnergyConsumptionCrediction from './EnergyConsumptionCrediction';
    import Energyefficiencygoalsachieved from './Energyefficiencygoalsachieved';
    import energymap from './energymap';
    import expendTop from './expendTop';
    import expendTopTip from './expendTopTip';
    import GoalsAndAchievements from './GoalsAndAchievements';
    import hourlyEnergyChart from './hourlyEnergyChart';
    import magnifymap from './magnifymap';
    import pendingAlarm from './pendingAlarm';
    import pendingAlarmOther from './pendingAlarmOther';
    import prediction from './prediction';
    import RemindLesseeArrearage from './RemindLesseeArrearage';
    import semicircleChart from './semicircleChart';
    import statisticalInfo from './statisticalInfo';

export default {
    components: {
        topProgressbar,
        arrearageRemind,
        blocmap,
        CollectorMonitorChart,
        EnergyAndMoney,
        EnergyConsumptionCrediction,
        Energyefficiencygoalsachieved,
        energymap,
        expendTop,
        expendTopTip,
        GoalsAndAchievements,
        hourlyEnergyChart,
        magnifymap,
        pendingAlarm,
        pendingAlarmOther,
        prediction,
        RemindLesseeArrearage,
        semicircleChart,
        statisticalInfo
    },
    data() {
        return {
            title: '租户欠费提醒'
        }
    },
    methods: {
        topath(path) {
            // console.log(path)
            this.$router.push(path);
        }
    }
}

</script>
