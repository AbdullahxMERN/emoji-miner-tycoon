import React from "react";
import { useContext } from "react";
import {Context} from "/src/components/context";
function UseMar (){
     const {gold , setGold, ore , setOre, axelv , setAxelv} = useContext(Context)
    const go = ()=>{
setGold(gold + ore)
setOre(ore - ore)
    }
const ag = ()=>{
    if (gold >= 50){
        setAxelv(axelv + 1)
        setGold(gold - 50)
    }
    
    
}
return(

    <div className="bg-green-500 
      w-full h-full flex-row flex-wrap justify-around items-center" >
<div className="text-xl pt-3 text-center font-semibold text-white uppercase md:text-4xl">
    convert all ore to gold <button className="rounded-md p-1 pt-3 uppercase  pb-1.5 text-[12px] md:text-2xl md:p-3 bg-indigo-700"
    onClick={go}>convert</button>
</div>

<div className="text-xl text-center mt-3 font-semibold text-white uppercase md:text-4xl">
    upgrade axe level by 50 gold <button className={`rounded-md p-1 pt-1.5 pb-1.5 text-[12px] md:text-2xl md:p-3 uppercase 
    ${gold >= 50? `bg-indigo-700` : `bg-gray-600`} `}
    onClick={ag}>upgrade</button>
</div>
    </div>
)
}
export default UseMar