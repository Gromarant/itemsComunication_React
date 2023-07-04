import { useState } from 'react'
import './App.css'
import Head from './Head/Head'
import { EmailContext } from './context/EmailContext'

function App() {
  const [ email, setEmail ] = useState("")

  return (
    <>
      <EmailContext.Provider value={{email, setEmail}} >
        <Head />
      </EmailContext.Provider>
    </>
  )
}

export default App
