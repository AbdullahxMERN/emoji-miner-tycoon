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

    <div className="bg-green-500 top-7/10 fixed inset-0
      w-full h-3/10 flex-row flex-wrap justify-around items-start" >
<div className="text-xl mt-2 font-semibold text-white uppercase md:text-4xl">
    convert all ore to gold <button className="rounded-md p-3 uppercase  bg-indigo-700"
    onClick={go}>convert</button>
</div>

<div className="text-xl mt-2 font-semibold text-white uppercase md:text-4xl">
    upgrade axe level by 50 gold <button className={`rounded-md p-3 uppercase 
    ${gold >= 50? `bg-indigo-700` : `bg-gray-600`} `}
    onClick={ag}>upgrade</button>
</div>
    </div>
)
}
export default UseMar