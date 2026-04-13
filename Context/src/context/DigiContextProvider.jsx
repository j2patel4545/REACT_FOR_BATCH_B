import { useState } from 'react';
import DigiContext from './digiContext.js'

function DigiContextProvider({children}) {
    const[abc,setAbc]= useState(0);
    const [def,setDef] = useState(0);
  return (
    <DigiContext.Provider value={{abc,setAbc,def,setDef}}>
      {children}
    </DigiContext.Provider>
  )
}

export default DigiContextProvider
