import React from "react";
import { useContext } from "react";
import {Context} from "/src/components/context";
function UseDash (){
    const {gold , ore , axelv} = useContext(Context)

         console.log({gold , ore , axelv})
return(

    <div className="bg-purple-900 text-2xl md:text-5xl font-bold text-yellow-500  
      w-full h-[20vh] flex justify-around items-center" >
  <div>GOLD : {gold}</div>
  <div>ORE : {ore}</div>
  <div>AXE.LV : {axelv}</div>
    </div>
)
}
export default UseDash