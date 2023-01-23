import React, { createContext, useState } from 'react';


export const ItensContext = createContext();



export const ItenStore = ({children})=>{
    
    const [sacola, setSacola] = useState([])
    
    
    return(
        <ItensContext.Provider value={{sacola, setSacola}}>
            {children}
        </ItensContext.Provider>
    )
}

export default ItensContext;