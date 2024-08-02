import React, { createContext, useMemo, useState } from 'react'

export const DataContext = createContext()

const ApiContext = ({children}) => {
    const [data, setData] = useState([])
  
    const [getData, setGetData] = useState(false)
    useMemo(()=>{
      data,
      setData,
      getData,
      setGetData
    },[getData,data])

    console.log(data);
  return (
    <DataContext.Provider value={{data, setData, getData, setGetData}}>
        {children}
    </DataContext.Provider>
  )
}

export default ApiContext
