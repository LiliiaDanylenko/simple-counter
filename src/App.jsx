import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(currentCount => currentCount += 1);
  }

  const decrement = () => {
    setCount(currentCount => currentCount -= 1);
  }

  return (
    <>
      <h1>Simple counter</h1>
      <h2 className='counter'>{count}</h2>
      <div className='button-wrapper'>

      <button className='decrement' onClick={decrement}>Decrement</button>
      <button className='increment' onClick={increment}>Increment</button>
      </div>
    </>
  )
}

export default App
