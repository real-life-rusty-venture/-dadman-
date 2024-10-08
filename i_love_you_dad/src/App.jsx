import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestDad from './TestDad'
import Home from './Home'
import ScrapBoook from './ScrapBook'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from "react-router-dom"

export default function App() {
  const [count, setCount] = useState(0)
  const appStyle = {
    backgroundColor : "#FF7518",
     color : "#28282B",
    //  height : "100vh",
     width : "100vw",                                                                                                 
     marginTop : "0px",
     paddingTop : "0px",
     textAlign : "center"
  }

  return (
    <>
      <div style = {appStyle}>
        <Nav/>
        <Routes history = {BrowserRouter}>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/TestDad" element = {<TestDad/>}/>
          <Route path = "/ScrapBook" element = {<ScrapBoook/>}/>
        </Routes>
        </div>
    </>
  )
}

