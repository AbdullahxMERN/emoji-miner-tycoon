import React from "react";
import { useContext } from "react";
import {Context} from "/src/components/context";
function UseMG (){
    const {gold , setGold, ore , setOre, axelv , setAxelv} = useContext(Context)

    const inc = ()=>{
     setOre(ore + axelv)
    }
return(

    <div className="bg-gray-700 fixed top-2/10 inset-0  w-full h-5/10 flex flex-col md:flex-row justify-around items-center " >
  <div ><img src="https://cdn-icons-png.flaticon.com/128/11368/11368451.png" className="h-7/12  
    cursor-pointer transition-all active:scale-90 active:shadow-[0_0_30px_#FFD700] duration-200"  
   onClick={inc}   /></div>
    <div ><img src="https://cdn-icons-png.flaticon.com/128/9507/9507664.png" className="h-7/12
    cursor-pointer transition-all active:scale-90 active:shadow-[0_0_30px_#FFD700] duration-200 " 
    onClick={inc} /></div>
 <div ><img src="https://cdn-icons-png.flaticon.com/128/10738/10738488.png" className="h-7/12
 cursor-pointer transition-all active:scale-90 active:shadow-[0_0_30px_#FFD700] duration-200" 
 onClick={inc}/></div>

    </div>
)
}
export default UseMG