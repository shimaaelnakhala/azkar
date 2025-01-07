import React, { createContext, useContext, useState } from 'react'
import { Sun } from 'react-bootstrap-icons';
export const ThemeContext = createContext();
export default function Theme({children}) {
  const[theme,setTheme] = useState(<Sun/>)
  const toggleTheme=()=>{
    setTheme(prevMode=>!prevMode)
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}
export const useTheme=()=>useContext(ThemeContext);
