import { useState } from 'react'
import { AddPost, Button, Username } from './components/index.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>X Clone Components Demonstration</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div>
          <h3>Username Example</h3>
          <Username name="John Doe" handle="@johndoe" />
        </div>
        
        <div>
          <h3>Button Examples</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="primary">Post</Button>
            <Button variant="secondary">Follow</Button>
            <Button variant="outline">Edit profile</Button>
          </div>
        </div>

        <div>
          <h3>AddPost Component</h3>
          <AddPost />
        </div>
        
      </div>
    </div>
  )
}

export default App
