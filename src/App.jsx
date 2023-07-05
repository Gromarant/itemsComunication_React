import { useState } from 'react'
import './App.css'
import Main from './components/Main';
import { EmailContext } from '../src/context/EmailContext'

function App() {
  const [ email, setEmail ] = useState("")

  return (
    <>
      <EmailContext.Provider value={{email, setEmail}} >
        <Main />
      </EmailContext.Provider>
    </>
  )
}

export default App
