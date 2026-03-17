import { useState } from 'react'

import './App.css'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>P187</h1>
        <p>
          This is the start of my project!
        </p>
      </div>
      <Button
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </Button>
    </>
  )
}

export default App
