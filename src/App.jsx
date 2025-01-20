import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2> - - / / - - / / - - </h2>
      <h1>Vincent</h1>
      <h2> - - / / - - / / - - </h2>

      <br></br>
      
    <div>
      <p className="follow-up-stuff">
        <span className="glowing-text"> Yolo </span> 
      - <span className="glowing-text">  Python </span>
      - <span className="glowing-text">  PHP </span>
      - <span className="glowing-text">  CSS </span>
      - <span className="glowing-text">  HTML   </span> 
      - <span className="glowing-text"> Java </span>
      - C++
      - Ruby 
      - <span className="glowing-text">   JavaScript </span>
      - Swift 
      - <span className="glowing-text">   Kotlin </span>
      - TypeScript
      </p>
    </div>
      

    </>
  )
}

export default App
