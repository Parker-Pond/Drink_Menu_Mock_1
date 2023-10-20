import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
// ! imported React Blocks
import Navbar from './components/navbar/navbar'
import Search_filter from './components/search_filter/Search_filter'
import Drink_block from './components/drink_block/Drink_block'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Search_filter/>
    <Drink_block/>
    </>
  )
}

export default App
