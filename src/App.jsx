import { useState } from 'react'
import { AddPost } from './components/index.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddPost />
    </>
  )
}

export default App
