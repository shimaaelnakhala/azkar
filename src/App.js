import React from 'react'
import Navbr from './Components/Navbr/Navbr'
import { useTheme } from './Components/Theme/Theme'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CustomeContext } from './Components/Customs/CustomContext'
import Homes from './Components/Home/Homes'
import CardAzkar from './Components/Cards/CardAzkar'
import Ahadiths from './Components/Ahadiths/Ahadiths'
import Misbahah from './Components/Misbahah/Misbahah'

export default function App() {
  const {theme} = useTheme()
  return (
    <CustomeContext>
    <div className={theme ? 'dark-mode' : 'light-mode'}>
    <Navbr/>  

    <Routes>
    <Route path='/home'  element={<Homes/>}/>
    <Route path=''  element={<Homes/>}/>
    <Route path="/:category" element={<CardAzkar />} />
    <Route path='/احاديث نبوية'  element={<Ahadiths/>}/>
    <Route path='/سُبحة رقمية'  element={<Misbahah/>}/>  

  

    </Routes>
    
    </div>
    </CustomeContext>
  )
}

