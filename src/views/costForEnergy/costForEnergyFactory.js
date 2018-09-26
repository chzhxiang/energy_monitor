
export class CostForEnergyFactory{
    constructor(){}


    /** 配置 EnergyType
     * @param EnergyTypeConfig
     * {
     *     radius: "0",  //string
            bgColor: "gray", //blue  white
            activeItemHasBorderBottom: boolean,
            itemShowIcon: boolean
     * }
     */
    static setEnergyTypeBase( targetConfig, EnergyTypeConfig){
        targetConfig.radius = EnergyTypeConfig.radius;
        targetConfig.bgColor = EnergyTypeConfig.bgColor;
        targetConfig.activeItemHasBorderBottom = EnergyTypeConfig.activeItemHasBorderBottom;
        targetConfig.itemShowIcon = EnergyTypeConfig.itemShowIcon
    }


}
