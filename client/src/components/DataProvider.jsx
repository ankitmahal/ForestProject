import React, { createContext, useState } from 'react'

export const DataContext = createContext(null);

function DataProvider({ children}) {

const[account, setAccount ] = useState({ email: '', password: ''})
return (
<DataContext.Provider value={{
account, 
setAccount 


}}>
    {Children}
</DataContext.Provider>


)

}

export default DataProvider