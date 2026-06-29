import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mcount, setmCount] = useState(0)

  return (
    <>
    <div className='card'>
    <h3>{count}</h3>
      <button className='btn' onClick={()=>{
        setCount(count + 1)
      }} >Plus</button>

</div>
<div className='card'>
      <h3>{mcount}</h3>
      <button className='btn' onClick={()=> setmCount(mcount-1)} >Minus</button>
      </div>
    </>
  )
}

export default App
