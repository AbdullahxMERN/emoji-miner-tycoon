import React, { createContext, useState } from "react";
import { children } from "react";
export const Context = createContext({})
 export const Provider = ({children})=>{
    const [gold , setGold] = useState(0);
    const [ore , setOre] = useState(0);
    const [axelv , setAxelv] = useState(1);
    return(
        <Context.Provider value={{gold,setGold,ore,setOre,axelv,setAxelv}}>
          {children}
            </Context.Provider>
    )
}
export default Context