import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import UseDash from './components/Usedashbord'
import UseMG from './components/MG'
import { Provider } from '/src/components/context' 
import UseMar from './components/Market'

function App() {


  return (
    <div className='h-screen overflow-y-auto'>
    <Provider>

      <UseDash/>
      <UseMG/>
       <UseMar/>

    </Provider>
    </div>
  )
}

export default App
