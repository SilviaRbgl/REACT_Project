import { createContext } from 'react'

export const loginContext = createContext(); 

export const loginContextProvider = (props) => {
    console.log("props >>>", props);

  return (
    <loginContext.Provider>{props.children}</loginContext.Provider>
  )
}