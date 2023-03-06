import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Experience from './Components/Experience'

export const ExperienceContext = React.createContext();

const API_URL = 'http://localhost:8000';

function App() {

  const [experience, setExperience] = useState([])

  useEffect(() => {
    async function fetchExperience() {
      const response = await fetch (`${API_URL}/profile`);
      const data = await response.json();
      setExperience(data)
      console.log(data)
    }
    fetchExperience()
  })
  return (
    <>
      <ExperienceContext.Provider value={{ experience,setExperience }}>
        <Experience />
      </ExperienceContext.Provider>
    </>
  )
}

export default App
