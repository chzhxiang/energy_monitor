var lzh={
    /*
      *根据一个对象的keyg给另一个对象赋值，前提是两个对象有相同的key
      * source:数据源
      * render：被赋值的对象
    */
    renderData:function (source, render) {
            for(let i in source){
                for(let j in render){
                    if(i == j){
                        render[j] = source[i]
                    }
                }
            }
    },

    /*
     *根据一个源对象数组遍历returm出一个新的不同key对象数组
     * source:数据源
     * sourceKey:数据源需要的key数组
     * newArrkey：新数组的key
     * 注意sourceKey和newArrayKey数组长度必须相等源数组下标key对应新数组下标key
   */
    renderOptionData:function (source,sourcekey,newArrkey) {
        let newArr = [];
        if(sourcekey){
            for(let i in source){
                let obj = {};
                for(let j=0;j<sourcekey.length;j++){
                    obj[newArrkey[j]] = source[i][sourcekey[j]]
                }
                if(JSON.stringify(obj)!="{}"){
                    newArr.push(obj)
                }

            }
        }else {
            for(let i in source){
                let obj = {};
                for(let j=0;j<newArrkey.length;j++){
                    obj[newArrkey[j]] = source[i]
                }
                if(JSON.stringify(obj)!="{}"){
                    newArr.push(obj)
                }
            }
        }
        return newArr
    },

    /*
     *遍历对象的子节点并返回节点数组，可通过selector筛选
     * source:数据源
     * render：被赋值的对象
   */
    children:function (elObj,selector) {
        if(selector){
            selector = selector.trim();
        }

       let chid=elObj.childNodes;
       let childrens =[];
       if(chid.length !=0){
           for(let i=0;i<chid.length;i++){
              if(selector&&selector.match(/^\./)&&chid[i].tagName&&chid[i].className.toLowerCase()==selector.replace('.','').toLowerCase()){
                  childrens.push(chid[i])
              }else if(selector&&selector.match(/^#/)&&chid[i].tagName&&chid[i].id.toLowerCase()==selector.replace('#','').toLowerCase()){
                  childrens.push(chid[i])
              }else if(selector && chid[i].tagName&&chid[i].tagName.toLowerCase()==selector.toLowerCase()){
                  childrens.push(chid[i])
              }else if(!selector && chid[i].tagName){
                  childrens.push(chid[i])
              }
           }
       }
       return childrens;
    }
}
export default lzh
