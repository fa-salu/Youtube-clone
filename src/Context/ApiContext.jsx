import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const ApiContext = ({children}) => {
    const [data, setData] = useState([])
    console.log(data);
  return (
    <DataContext.Provider value={{data, setData}}>
        {children}
    </DataContext.Provider>
  )
}

export default ApiContext
